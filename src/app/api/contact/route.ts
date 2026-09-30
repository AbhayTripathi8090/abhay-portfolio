import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/contact-schema";
import { checkContactRateLimit } from "@/lib/contact-rate-limit";
import { sendContactEmail } from "@/lib/mailer";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MIN_FORM_COMPLETION_MS = 2_500;

function getClientIdentifier(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  return forwardedFor?.split(",")[0]?.trim() || request.headers.get("x-real-ip") || "unknown";
}

function isSameOriginRequest(request: Request) {
  const origin = request.headers.get("origin");
  return !origin || origin === new URL(request.url).origin;
}

export async function POST(request: Request) {
  if (!isSameOriginRequest(request)) return NextResponse.json({ message: "Invalid request origin." }, { status: 403 });
  const limit = checkContactRateLimit(getClientIdentifier(request));
  if (!limit.allowed) return NextResponse.json({ message: "Too many messages. Please try again later." }, { status: 429, headers: { "Retry-After": String(limit.retryAfterSeconds) } });
  let body: unknown;
  try { body = await request.json(); } catch { return NextResponse.json({ message: "Invalid request body." }, { status: 400 }); }
  const result = contactSchema.safeParse(body);
  if (!result.success) return NextResponse.json({ message: "Please check the form fields and try again." }, { status: 400 });
  const { website, formStartedAt, ...contact } = result.data;
  if (website || Date.now() - formStartedAt < MIN_FORM_COMPLETION_MS) return NextResponse.json({ success: true });
  try {
    await sendContactEmail(contact);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Unable to send contact email", error);
    return NextResponse.json({ message: "Unable to send your message right now. Please try again later." }, { status: 500 });
  }
}

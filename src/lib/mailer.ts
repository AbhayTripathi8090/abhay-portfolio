import "server-only";

import nodemailer from "nodemailer";
import type { ContactFormValues } from "@/lib/contact-schema";

type ContactEmail = Pick<ContactFormValues, "name" | "email" | "subject" | "message">;

function getRequiredEnvironmentVariable(name: string) {
  const value = process.env[name];
  if (!value) throw new Error(`Missing required environment variable: ${name}`);
  return value;
}

export async function sendContactEmail({ name, email, subject, message }: ContactEmail) {
  const smtpUser = getRequiredEnvironmentVariable("SMTP_USER");
  const smtpPass = getRequiredEnvironmentVariable("SMTP_PASS");
  const recipient = getRequiredEnvironmentVariable("CONTACT_TO_EMAIL");
  const transporter = nodemailer.createTransport({ service: "gmail", auth: { user: smtpUser, pass: smtpPass } });
  await transporter.sendMail({
    from: `Portfolio contact form <${smtpUser}>`,
    to: recipient,
    replyTo: email,
    subject: `[Portfolio] ${subject}`,
    text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
  });
}

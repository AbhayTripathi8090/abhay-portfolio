"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { CheckCircle2, LoaderCircle, Send, XCircle } from "lucide-react";
import { contactSchema, type ContactFormValues } from "@/lib/contact-schema";

type SubmissionStatus = { type: "success" | "error"; message: string } | null;

const inputClassName = "w-full rounded-xl border border-[var(--border)] bg-[var(--background)] px-4 py-3 text-sm outline-none transition focus:border-violet-500 aria-[invalid=true]:border-red-500";

function FieldError({ id, message }: { id: string; message?: string }) {
  return message ? <p id={id} className="mt-2 text-sm text-red-500">{message}</p> : null;
}

export default function ContactForm() {
  const [status, setStatus] = useState<SubmissionStatus>(null);
  const [formStartedAt, setFormStartedAt] = useState<number | null>(null);
  const { register, handleSubmit, reset, setValue, formState: { errors, isSubmitting } } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", subject: "", message: "", website: "", formStartedAt: 0 },
  });
  const markFormStarted = () => {
    if (formStartedAt === null) {
      const timestamp = Date.now();
      setFormStartedAt(timestamp);
      setValue("formStartedAt", timestamp);
    }
  };
  const onSubmit = async (values: ContactFormValues) => {
    setStatus(null);
    try {
      const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...values, formStartedAt: formStartedAt ?? 0 }) });
      const data = (await response.json()) as { message?: string };
      if (!response.ok) throw new Error(data.message || "Unable to send your message.");
      setFormStartedAt(null);
      reset({ name: "", email: "", subject: "", message: "", website: "", formStartedAt: 0 });
      setStatus({ type: "success", message: "Thanks for reaching out. Your message has been sent." });
    } catch (error) {
      setStatus({ type: "error", message: error instanceof Error ? error.message : "Unable to send your message. Please try again later." });
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="mt-7 grid gap-5 sm:grid-cols-2">
        <div><label htmlFor="contact-name" className="mb-2 block text-sm font-medium">Your name</label><input id="contact-name" type="text" autoComplete="name" placeholder="Enter your name" onFocus={markFormStarted} aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "contact-name-error" : undefined} className={inputClassName} {...register("name")} /><FieldError id="contact-name-error" message={errors.name?.message} /></div>
        <div><label htmlFor="contact-email" className="mb-2 block text-sm font-medium">Your email</label><input id="contact-email" type="email" autoComplete="email" placeholder="you@example.com" onFocus={markFormStarted} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "contact-email-error" : undefined} className={inputClassName} {...register("email")} /><FieldError id="contact-email-error" message={errors.email?.message} /></div>
      </div>
      <div className="mt-5"><label htmlFor="contact-subject" className="mb-2 block text-sm font-medium">Subject</label><input id="contact-subject" type="text" placeholder="What would you like to discuss?" onFocus={markFormStarted} aria-invalid={Boolean(errors.subject)} aria-describedby={errors.subject ? "contact-subject-error" : undefined} className={inputClassName} {...register("subject")} /><FieldError id="contact-subject-error" message={errors.subject?.message} /></div>
      <div className="mt-5"><label htmlFor="contact-message" className="mb-2 block text-sm font-medium">Message</label><textarea id="contact-message" rows={6} placeholder="Tell me about your project or opportunity..." onFocus={markFormStarted} aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? "contact-message-error" : undefined} className={`${inputClassName} resize-y`} {...register("message")} /><FieldError id="contact-message-error" message={errors.message?.message} /></div>
      <div className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden" aria-hidden="true"><label htmlFor="contact-website">Website</label><input id="contact-website" type="text" tabIndex={-1} autoComplete="off" {...register("website")} /></div>
      <input type="hidden" {...register("formStartedAt", { valueAsNumber: true })} />
      {status && <p role="status" className={`mt-6 flex items-center gap-2 text-sm ${status.type === "success" ? "text-emerald-500" : "text-red-500"}`}>{status.type === "success" ? <CheckCircle2 size={18} /> : <XCircle size={18} />}{status.message}</p>}
      <button type="submit" disabled={isSubmitting} className="mt-6 inline-flex items-center gap-2 rounded-xl bg-violet-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-violet-500 disabled:cursor-not-allowed disabled:opacity-70">{isSubmitting ? <><LoaderCircle size={16} className="animate-spin" />Sending...</> : <><Send size={16} />Send Message</>}</button>
    </form>
  );
}

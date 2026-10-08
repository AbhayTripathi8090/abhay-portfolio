"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, BriefcaseBusiness, CodeXml, Mail, MapPin } from "lucide-react";
import ContactForm from "@/components/contact/ContactForm";
import { portfolioData } from "@/data/portfolio";
import { trackEvent } from "@/lib/analytics";

const contactEmail = "abhaytripathijuly15@gmail.com";

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-violet-500">Get in touch</p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Let&apos;s Work Together<span className="text-violet-500">.</span></h2>
          <p className="mt-4 max-w-2xl leading-7 text-[var(--muted)]">Have a project, opportunity, or question? Send me a message. I&apos;d be happy to connect.</p>
        </motion.div>

        <div className="mt-12 grid gap-8 md:grid-cols-[0.8fr_1.2fr]">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 sm:p-8">
            <h3 className="text-xl font-semibold">Contact information</h3>
            <p className="mt-3 text-sm leading-7 text-[var(--muted)]">You can reach me through email or connect with me on professional platforms.</p>
            <a href={`mailto:${contactEmail}`} onClick={() => trackEvent("email_click", { event_category: "engagement", event_label: "Contact email", link_location: "contact", link_url: `mailto:${contactEmail}` })} className="mt-8 flex items-center gap-4 rounded-xl border border-[var(--border)] p-4 transition-colors hover:border-violet-500/50">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-500/10 text-violet-500"><Mail size={20} /></span>
              <span className="min-w-0"><span className="block text-xs text-[var(--muted)]">Email</span><span className="mt-1 block break-all text-sm font-medium">{contactEmail}</span></span>
              <ArrowUpRight size={17} className="ml-auto shrink-0" />
            </a>
            <div className="mt-4 flex items-center gap-4 rounded-xl border border-[var(--border)] p-4">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-500/10 text-violet-500"><MapPin size={20} /></span>
              <span><span className="block text-xs text-[var(--muted)]">Location</span><span className="mt-1 block text-sm font-medium">Noida, India</span></span>
            </div>
            <div className="mt-8"><p className="text-sm font-medium">Connect with me</p><div className="mt-4 flex gap-3">
              <a href={portfolioData.socialLinks.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" onClick={() => trackEvent("github_click", { event_category: "engagement", event_label: "GitHub profile", link_location: "contact", link_url: portfolioData.socialLinks.github })} className="flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--border)] text-[var(--muted)] transition-colors hover:border-violet-500 hover:text-violet-500"><CodeXml size={19} /></a>
              <a href={portfolioData.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" onClick={() => trackEvent("linkedin_click", { event_category: "engagement", event_label: "LinkedIn profile", link_location: "contact", link_url: portfolioData.socialLinks.linkedin })} className="flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--border)] text-[var(--muted)] transition-colors hover:border-violet-500 hover:text-violet-500"><BriefcaseBusiness size={19} /></a>
            </div></div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 sm:p-8">
            <h3 className="text-xl font-semibold">Send me a message</h3>
            <p className="mt-3 text-sm text-[var(--muted)]">Fill in the details below and I&apos;ll get back to you soon.</p>
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  CodeXml,
  Mail,
  MapPin,
  Send,
} from "lucide-react";
import { portfolioData } from "@/data/portfolio";

const contactEmail = "abhaytripathijuly15@gmail.com";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const subject = encodeURIComponent(`Portfolio contact from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    );

    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
  }

  return (
    <section id="contact" className="scroll-mt-24 px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-violet-500">
            Get in touch
          </p>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Let’s Work Together<span className="text-violet-500">.</span>
          </h2>

          <p className="mt-4 max-w-2xl leading-7 text-[var(--muted)]">
            Have a project, opportunity, or question? Send me a message.
            I’d be happy to connect.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-8 md:grid-cols-[0.8fr_1.2fr]">
          {/* Contact information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 sm:p-8"
          >
            <h3 className="text-xl font-semibold">Contact information</h3>
            <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
              You can reach me through email or connect with me on
              professional platforms.
            </p>

            <a
              href={`mailto:${contactEmail}`}
              className="mt-8 flex items-center gap-4 rounded-xl border border-[var(--border)] p-4 transition-colors hover:border-violet-500/50"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-500/10 text-violet-500">
                <Mail size={20} />
              </span>

              <span className="min-w-0">
                <span className="block text-xs text-[var(--muted)]">
                  Email
                </span>
                <span className="mt-1 block break-all text-sm font-medium">
                  {contactEmail}
                </span>
              </span>
              <ArrowUpRight size={17} className="ml-auto shrink-0" />
            </a>

            <div className="mt-4 flex items-center gap-4 rounded-xl border border-[var(--border)] p-4">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-500/10 text-violet-500">
                <MapPin size={20} />
              </span>
              <span>
                <span className="block text-xs text-[var(--muted)]">
                  Location
                </span>
                <span className="mt-1 block text-sm font-medium">
                  Noida, India
                </span>
              </span>
            </div>

            <div className="mt-8">
              <p className="text-sm font-medium">Connect with me</p>

              <div className="mt-4 flex gap-3">
                <a
                  href={portfolioData.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub profile"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--border)] text-[var(--muted)] transition-colors hover:border-violet-500 hover:text-violet-500"
                >
                  <CodeXml size={19} />
                </a>

                <a
                  href={portfolioData.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--border)] text-[var(--muted)] transition-colors hover:border-violet-500 hover:text-violet-500"
                >
                  <BriefcaseBusiness size={19} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 sm:p-8"
          >
            <h3 className="text-xl font-semibold">Send me a message</h3>
            <p className="mt-3 text-sm text-[var(--muted)]">
              Fill in the details below. Your email app will open with the
              message ready to send.
            </p>

            <div className="mt-7 grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-2 block text-sm font-medium"
                >
                  Your name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder="Enter your name"
                  className="w-full rounded-xl border border-[var(--border)] bg-[var(--background)] px-4 py-3 text-sm outline-none transition focus:border-violet-500"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-2 block text-sm font-medium"
                >
                  Your email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-[var(--border)] bg-[var(--background)] px-4 py-3 text-sm outline-none transition focus:border-violet-500"
                />
              </div>
            </div>

            <div className="mt-5">
              <label
                htmlFor="contact-message"
                className="mb-2 block text-sm font-medium"
              >
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                rows={6}
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                placeholder="Tell me about your project or opportunity..."
                className="w-full resize-y rounded-xl border border-[var(--border)] bg-[var(--background)] px-4 py-3 text-sm outline-none transition focus:border-violet-500"
              />
            </div>

            <button
              type="submit"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-violet-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-violet-500"
            >
              Send Message
              <Send size={16} />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
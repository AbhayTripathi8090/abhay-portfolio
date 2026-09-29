"use client";

import { motion } from "framer-motion";
import { MessageSquareQuote } from "lucide-react";
import { testimonialsData } from "@/data/testimonials";

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="scroll-mt-24 px-5 py-24 sm:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-violet-500">
            Kind words
          </p>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Testimonials<span className="text-violet-500">.</span>
          </h2>

          <p className="mt-4 max-w-2xl leading-7 text-[var(--muted)]">
            Feedback and experiences from people I have worked with.
          </p>
        </motion.div>

        {testimonialsData.length > 0 ? (
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {testimonialsData.map((testimonial, index) => (
              <motion.article
                key={`${testimonial.name}-${testimonial.company}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 sm:p-7"
              >
                <MessageSquareQuote
                  size={28}
                  className="text-violet-500"
                />

                <p className="mt-5 leading-7 text-[var(--muted)]">
                  “{testimonial.message}”
                </p>

                <div className="mt-6 border-t border-[var(--border)] pt-5">
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="mt-1 text-sm text-[var(--muted)]">
                    {testimonial.role} · {testimonial.company}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        ) : (
          <div className="mt-10 rounded-2xl border border-dashed border-[var(--border)] bg-[var(--card)] px-6 py-10 text-center">
            <MessageSquareQuote
              size={30}
              className="mx-auto text-violet-500"
            />
            <p className="mt-4 font-medium">
              Building meaningful connections through collaboration.
            </p>
            <p className="mt-2 text-sm text-[var(--muted)]">
              Testimonials will be added here as I receive feedback from
              people I work with.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
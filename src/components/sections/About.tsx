"use client";

import { motion } from "framer-motion";
import { Code2, Database, Lightbulb } from "lucide-react";
import { aboutData } from "@/data/about";

const highlights = [
  {
    icon: Code2,
    title: "Frontend Development",
    description: "Building responsive and intuitive user interfaces.",
  },
  {
    icon: Database,
    title: "Backend Development",
    description: "Creating APIs, authentication, and database-driven features.",
  },
  {
    icon: Lightbulb,
    title: "Problem Solving",
    description: "Breaking complex requirements into practical solutions.",
  },
];

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-violet-500">
            {aboutData.label}
          </p>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {aboutData.title}
            <span className="text-violet-500">.</span>
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-12 md:grid-cols-[1.1fr_0.9fr]">
          {/* About text */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-5"
          >
            {aboutData.description.map((paragraph, index) => (
              <p
                key={index}
                className="text-base leading-8 text-[var(--muted)] sm:text-lg"
              >
                {paragraph}
              </p>
            ))}

            <div className="grid grid-cols-3 gap-3 pt-5">
              {aboutData.highlights.map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-4"
                >
                  <p className="text-sm font-bold text-violet-500 sm:text-base">
                    {item.value}
                  </p>
                  <p className="mt-2 text-xs text-[var(--muted)] sm:text-sm">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Focus cards */}
          <div className="grid gap-4">
            {highlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex gap-4 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 transition-colors hover:border-violet-500/50"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-violet-500/10 text-violet-500">
                    <Icon size={23} />
                  </div>

                  <div>
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
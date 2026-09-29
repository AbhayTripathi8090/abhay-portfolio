"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Server,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { skillsData } from "@/data/skills";

const categoryIcons: Record<string, LucideIcon> = {
  Frontend: Code2,
  Backend: Server,
  Databases: Database,
  "Tools & Technologies": Wrench,
};

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-violet-500">
            What I work with
          </p>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Skills & Technologies
            <span className="text-violet-500">.</span>
          </h2>

          <p className="mt-4 max-w-2xl leading-7 text-[var(--muted)]">
            Technologies I use to build frontend experiences, backend
            services, and full stack applications.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {skillsData.map((category, index) => {
            const Icon = categoryIcons[category.title];

            return (
              <motion.article
                key={category.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
                className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 transition-colors hover:border-violet-500/50 sm:p-7"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/10 text-violet-500">
                    {Icon && <Icon size={23} />}
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold">
                      {category.title}
                    </h3>
                    <p className="mt-1 text-sm text-[var(--muted)]">
                      {category.description}
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-[var(--border)] bg-[var(--background)] px-3 py-2 text-sm text-[var(--muted)] transition-colors hover:border-violet-500/50 hover:text-violet-500"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
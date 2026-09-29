"use client";

import { motion } from "framer-motion";
import { BriefcaseBusiness, CalendarDays, MapPin } from "lucide-react";
import { experienceData } from "@/data/experience";

export default function Experience() {
  return (
    <section
      id="experience"
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
            My journey
          </p>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Work Experience<span className="text-violet-500">.</span>
          </h2>

          <p className="mt-4 max-w-2xl leading-7 text-[var(--muted)]">
            My professional experience and the technologies I have worked
            with.
          </p>
        </motion.div>

        <div className="relative mt-12 space-y-8 before:absolute before:bottom-5 before:left-[15px] before:top-5 before:w-px before:bg-[var(--border)] md:ml-2">
          {experienceData.map((experience, index) => (
            <motion.article
              key={`${experience.company}-${experience.role}`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              className="relative pl-12"
            >
              {/* Timeline marker */}
              <div className="absolute left-0 top-6 z-10 flex h-8 w-8 items-center justify-center rounded-full border border-violet-500/40 bg-[var(--background)] text-violet-500">
                <BriefcaseBusiness size={15} />
              </div>

              <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 sm:p-7">
                <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-xl font-bold">
                        {experience.role}
                      </h3>

                      {experience.current && (
                        <span className="rounded-full border border-green-500/30 bg-green-500/10 px-3 py-1 text-xs font-medium text-green-500">
                          Current
                        </span>
                      )}
                    </div>

                    <p className="mt-2 font-medium text-violet-500">
                      {experience.company}
                    </p>
                  </div>

                  <span className="w-fit rounded-lg border border-[var(--border)] px-3 py-2 text-xs text-[var(--muted)]">
                    {experience.type}
                  </span>
                </div>

                <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm text-[var(--muted)]">
                  <span className="flex items-center gap-2">
                    <CalendarDays size={15} />
                    {experience.duration}
                  </span>

                  <span className="flex items-center gap-2">
                    <MapPin size={15} />
                    {experience.location}
                  </span>
                </div>

                <p className="mt-5 leading-7 text-[var(--muted)]">
                  {experience.description}
                </p>

                <ul className="mt-5 space-y-3">
                  {experience.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-3 text-sm leading-6 text-[var(--muted)]"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-500" />
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-2">
                  {experience.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-lg border border-[var(--border)] bg-[var(--background)] px-3 py-1.5 text-xs text-[var(--muted)]"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
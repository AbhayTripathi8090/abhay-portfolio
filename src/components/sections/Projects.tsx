"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, BriefcaseBusiness } from "lucide-react";
import { projectsData } from "@/data/projects";
import { trackEvent } from "@/lib/analytics";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-violet-500">
            What I have built
          </p>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Featured Projects<span className="text-violet-500">.</span>
          </h2>

          <p className="mt-4 max-w-2xl leading-7 text-[var(--muted)]">
            A selection of applications I have built or contributed to,
            using modern frontend and backend technologies.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projectsData.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              className="group flex h-full flex-col rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/50 sm:p-7"
            >
              {/* Card heading */}
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-medium text-violet-500">
                    {project.category}
                  </p>

                  <h3 className="mt-2 text-xl font-bold transition-colors group-hover:text-violet-500">
                    {project.title}
                  </h3>
                </div>

                {project.featured && (
                  <span className="shrink-0 rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-500">
                    Featured
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="mt-5 flex-1 text-sm leading-7 text-[var(--muted)]">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-lg border border-[var(--border)] bg-[var(--background)] px-3 py-1.5 text-xs text-[var(--muted)]"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              {/* Project links */}
              <div className="mt-7 flex items-center gap-3 border-t border-[var(--border)] pt-5">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} source code on GitHub`}
                    onClick={() =>
                      trackEvent("github_click", {
                        event_category: "engagement",
                        event_label: project.title,
                        link_url: project.githubUrl,
                        link_location: "projects",
                        project_name: project.title,
                      })
                    }
                    className="inline-flex items-center gap-2 rounded-lg border border-[var(--border)] px-4 py-2.5 text-sm font-medium transition-colors hover:border-violet-500 hover:text-violet-500"
                  >
                    <BriefcaseBusiness size={17} />
                    GitHub
                  </a>
                )}

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} live demo`}
                    onClick={() =>
                      trackEvent("project_click", {
                        event_category: "engagement",
                        event_label: project.title,
                        link_url: project.liveUrl,
                        link_location: "projects",
                        project_name: project.title,
                        project_variant: "live_demo",
                      })
                    }
                    className="inline-flex items-center gap-2 rounded-lg bg-violet-600 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-violet-500"
                  >
                    Live Demo
                    <ExternalLink size={16} />
                  </a>
                )}

                {project.liveUrl2 && (
                  <a
                    href={project.liveUrl2}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} live demo`}
                    onClick={() =>
                      trackEvent("project_click", {
                        event_category: "engagement",
                        event_label: `${project.title} admin`,
                        link_url: project.liveUrl2,
                        link_location: "projects",
                        project_name: project.title,
                        project_variant: "admin_demo",
                      })
                    }
                
                    className="inline-flex items-center gap-2 rounded-lg bg-violet-600 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-violet-500"
                  >
                    Live Demo Admin
                    <ExternalLink size={16} />
                  </a>
                )}

                {!project.githubUrl && !project.liveUrl && (
                  <span className="text-sm text-[var(--muted)]">
                    Work project
                  </span>
                )}

                <ArrowUpRight
                  size={18}
                  className="ml-auto text-[var(--muted)] transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-violet-500"
                />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

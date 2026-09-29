
"use client";

import { motion } from "framer-motion";

import {
  ArrowDown,
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  CodeXml,
  Mail,
  Sparkles,
} from "lucide-react";

import { portfolioData } from "@/data/portfolio";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[calc(100vh-72px)] items-center overflow-hidden px-6 py-20"
    >
      {/* Background gradients */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-10 h-80 w-80 rounded-full bg-violet-500/10 blur-[120px]" />

        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-blue-500/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-2">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-start"
        >
          {/* Availability */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--card)] px-4 py-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />

              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </span>

            <span className="text-xs font-medium text-[var(--muted)]">
              {portfolioData.availability}
            </span>
          </div>

          {/* Introduction */}
          <p className="mb-3 text-lg font-medium text-[var(--muted)]">
            Hello, I&apos;m
          </p>

          <h1 className="text-5xl font-bold leading-tight tracking-tight sm:text-6xl xl:text-7xl">
            {portfolioData.firstName}
            <br />

            <span className="bg-gradient-to-r from-violet-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
              {portfolioData.lastName}.
            </span>
          </h1>

          {/* Role */}
          <div className="mt-6 flex items-center gap-3">
            <Code2
              className="text-[var(--accent)]"
              size={24}
            />

            <h2 className="text-xl font-semibold sm:text-2xl">
              {portfolioData.role}
            </h2>
          </div>

          {/* Description */}
          <p className="mt-6 max-w-xl text-base leading-8 text-[var(--muted)] sm:text-lg">
            {portfolioData.description}
          </p>

          {/* Technologies */}
          <div className="mt-7 flex max-w-xl flex-wrap gap-2">
            {portfolioData.technologies.map(
              (technology, index) => (
                <motion.span
                  key={technology}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.4 + index * 0.1,
                  }}
                  className="rounded-lg border border-[var(--border)] bg-[var(--card)] px-3 py-2 text-xs font-medium text-[var(--muted)] transition hover:border-[var(--accent)] hover:text-[var(--foreground)]"
                >
                  {technology}
                </motion.span>
              )
            )}
          </div>

          {/* Buttons */}
          <div className="mt-9 flex flex-wrap gap-4">

            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-xl bg-[var(--accent)] px-6 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-1 hover:shadow-lg hover:shadow-violet-500/20"
            >
              View Projects

              <ArrowUpRight
                size={18}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>

            <a
              href={portfolioData.resume}
              download
              className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--card)] px-6 py-3.5 text-sm font-semibold transition hover:-translate-y-1 hover:border-[var(--accent)]"
            >
              Download Resume

              <ArrowDown size={17} />
            </a>

          </div>

          {/* Social links */}
          <div className="mt-10 flex items-center gap-5">

            <span className="text-sm text-[var(--muted)]">
              Connect with me
            </span>

            <div className="h-5 w-px bg-[var(--border)]" />

            <a
              href={portfolioData.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-[var(--muted)] transition hover:text-[var(--accent)]"
            >
              <CodeXml size={20} />
            </a>

            <a
              href={portfolioData.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-[var(--muted)] transition hover:text-[var(--accent)]"
            >
              <BriefcaseBusiness size={20} />
            </a>

            <a
              href={portfolioData.socialLinks.email}
              aria-label="Email"
              className="text-[var(--muted)] transition hover:text-[var(--accent)]"
            >
              <Mail size={20} />
            </a>

          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto flex w-full max-w-md items-center justify-center"
        >

          {/* Decorative circles */}
          <div className="absolute h-[340px] w-[340px] rounded-full border border-violet-500/20 sm:h-[420px] sm:w-[420px]" />

          <div className="absolute h-[290px] w-[290px] rounded-full border border-blue-500/20 sm:h-[370px] sm:w-[370px]" />

          {/* Profile card */}
          <div className="relative z-10 flex aspect-square w-[270px] flex-col items-center justify-center overflow-hidden rounded-[40px] border border-[var(--border)] bg-gradient-to-br from-[var(--card)] to-[var(--background)] shadow-2xl shadow-violet-500/10 sm:w-[330px]">

            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-blue-500/10" />

            {/* Initials placeholder */}
            <div className="relative flex h-32 w-32 items-center justify-center rounded-full border border-violet-500/30 bg-violet-500/10 sm:h-40 sm:w-40">
              <span className="bg-gradient-to-br from-violet-500 to-blue-500 bg-clip-text text-6xl font-bold text-transparent sm:text-7xl">
                AT
              </span>
            </div>

            <h3 className="relative mt-7 text-xl font-bold">
              {portfolioData.name}
            </h3>

            <p className="relative mt-2 text-sm text-[var(--muted)]">
              {portfolioData.role}
            </p>

            <div className="relative mt-5 flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--background)] px-4 py-2">
              <Sparkles
                size={14}
                className="text-[var(--accent)]"
              />

              <span className="text-xs text-[var(--muted)]">
                Turning ideas into code
              </span>
            </div>

          </div>

          {/* Floating code icon */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -right-2 top-10 z-20 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-4 shadow-xl sm:-right-6"
          >
            <Code2
              size={27}
              className="text-[var(--accent)]"
            />
          </motion.div>

          {/* Floating sparkle */}
          <motion.div
            animate={{
              y: [0, 10, 0],
              rotate: [0, 15, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -bottom-3 -left-2 z-20 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-4 shadow-xl sm:-left-6"
          >
            <Sparkles
              size={25}
              className="text-blue-400"
            />
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
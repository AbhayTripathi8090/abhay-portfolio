
import {
  CodeXml,
  BriefcaseBusiness,
  Mail,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)]">

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-6 py-8 md:flex-row">

        {/* Copyright */}
        <p className="text-sm text-[var(--muted)]">
          © {new Date().getFullYear()} Abhay Tripathi.
          All rights reserved.
        </p>

        {/* Social Links */}
        <div className="flex items-center gap-5">

          <a
            href="https://github.com/AbhayTripathi8090"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-[var(--muted)] transition hover:text-[var(--accent)]"
          >
            <CodeXml size={20} />
          </a>

          <a
            href="YOUR_LINKEDIN_URL"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-[var(--muted)] transition hover:text-[var(--accent)]"
          >
            <BriefcaseBusiness size={20} />
          </a>

          <a
            href="mailto:abhaytripathijuly15@gmail.com"
            aria-label="Email"
            className="text-[var(--muted)] transition hover:text-[var(--accent)]"
          >
            <Mail size={20} />
          </a>

        </div>
      </div>
    </footer>
  );
}
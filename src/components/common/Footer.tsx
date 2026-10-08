
"use client";

import {
  CodeXml,
  BriefcaseBusiness,
  Mail,
} from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { trackEvent } from "@/lib/analytics";

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
            href={portfolioData.socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            onClick={() =>
              trackEvent("github_click", {
                event_category: "engagement",
                event_label: "GitHub profile",
                link_location: "footer",
                link_url: portfolioData.socialLinks.github,
              })
            }
            className="text-[var(--muted)] transition hover:text-[var(--accent)]"
          >
            <CodeXml size={20} />
          </a>

          <a
            href={portfolioData.socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            onClick={() =>
              trackEvent("linkedin_click", {
                event_category: "engagement",
                event_label: "LinkedIn profile",
                link_location: "footer",
                link_url: portfolioData.socialLinks.linkedin,
              })
            }
            className="text-[var(--muted)] transition hover:text-[var(--accent)]"
          >
            <BriefcaseBusiness size={20} />
          </a>

          <a
            href={portfolioData.socialLinks.email}
            aria-label="Email"
            onClick={() =>
              trackEvent("email_click", {
                event_category: "engagement",
                event_label: "Email",
                link_location: "footer",
                link_url: portfolioData.socialLinks.email,
              })
            }
            className="text-[var(--muted)] transition hover:text-[var(--accent)]"
          >
            <Mail size={20} />
          </a>

        </div>
      </div>
    </footer>
  );
}

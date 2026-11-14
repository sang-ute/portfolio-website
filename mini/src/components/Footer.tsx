"use client";

import React from "react";
import { ArrowUpRight, Github } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolio";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--line)]">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        {/* Top bar */}
        <div className="flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
          {/* Brand */}
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--mut)]">
              Nguyen Quang Sang
            </span>
            <p className="mt-0.5 text-xs text-[var(--mut)]">
              Software Engineer · Ho Chi Minh City
            </p>
          </div>

          {/* Nav links */}
          <nav
            aria-label="Footer"
            className="flex flex-wrap items-center gap-x-6 gap-y-2"
          >
            {["About", "Experience", "Work", "Stack", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-xs text-[var(--mut)] transition-colors hover:text-[var(--fg)]"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-3 border-t border-[var(--line)] py-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-[var(--mut)]">
            © {year} {PERSONAL_INFO.name}. Built with Next.js 14, TypeScript &amp;
            Tailwind CSS.
          </p>

          <div className="flex items-center gap-4">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-[var(--mut)] transition-colors hover:text-[var(--fg)]"
            >
              <Github className="h-3.5 w-3.5" />
              GitHub
              <ArrowUpRight className="h-3 w-3" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-[var(--mut)] transition-colors hover:text-[var(--fg)]"
            >
              LinkedIn
              <ArrowUpRight className="h-3 w-3" />
            </a>
            <a
              href="#hero"
              className="inline-flex items-center gap-1.5 text-xs text-[var(--mut)] transition-colors hover:text-[var(--fg)]"
            >
              Back to top ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

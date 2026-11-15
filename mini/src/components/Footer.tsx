"use client";

import React from "react";
import { ArrowUp, ArrowUpRight, Github, Linkedin } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolio";

/**
 * Single-row footer: identity on the left, outbound links on the right.
 * Section navigation lives in the floating navbar, so it isn't repeated here.
 */
export function Footer() {
  const year = new Date().getFullYear();

  const link =
    "inline-flex items-center gap-1.5 text-xs text-[var(--mut)] transition-colors hover:text-[var(--fg)]";

  return (
    <footer className="relative z-10 border-t border-[var(--line)]">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-5 px-5 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
        <p className="text-xs text-[var(--mut)]">
          © {year} <span className="text-[var(--fg)]">{PERSONAL_INFO.name}</span>
          <span aria-hidden="true" className="mx-2 hidden opacity-50 sm:inline">·</span>
          <span className="mt-1 block sm:mt-0 sm:inline">Software Engineer, Ho Chi Minh City</span>
        </p>

        <nav aria-label="Footer" className="flex flex-wrap items-center gap-x-5 gap-y-2">
          <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className={link}>
            <Github className="h-3.5 w-3.5" />
            GitHub
            <ArrowUpRight className="h-3 w-3" />
          </a>
          <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className={link}>
            <Linkedin className="h-3.5 w-3.5" />
            LinkedIn
            <ArrowUpRight className="h-3 w-3" />
          </a>
          <a href="#hero" className={`glass-pill ${link} rounded-full px-3 py-1.5`}>
            Back to top
            <ArrowUp className="h-3 w-3" />
          </a>
        </nav>
      </div>
    </footer>
  );
}

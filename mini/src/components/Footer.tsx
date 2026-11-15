"use client";

import React, { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolio";

export function Footer() {
  const year = new Date().getFullYear();
  const ref = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  // Watermark rises into place as the footer scrolls into view.
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end end"] });
  const markY = useTransform(scrollYProgress, [0, 1], [reduceMotion ? "0%" : "45%", "0%"]);
  const markOpacity = useTransform(scrollYProgress, [0, 0.6, 1], [reduceMotion ? 1 : 0, 0.6, 1]);

  return (
    <footer ref={ref} className="relative z-10 overflow-hidden border-t border-[var(--line)]">
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

        {/* Giant name watermark with a travelling light sweep */}
        <div aria-hidden="true" className="pointer-events-none select-none overflow-hidden">
          <motion.p style={{ y: markY, opacity: markOpacity }} className="footer-watermark">
            Quang Sang
          </motion.p>
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

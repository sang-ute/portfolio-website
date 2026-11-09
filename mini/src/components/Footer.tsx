"use client";

import React from "react";
import { PERSONAL_INFO } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-slate-200/80 dark:border-slate-800/80 bg-white/40 dark:bg-slate-950 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
        <div className="flex items-center space-x-2 text-center sm:text-left">
          <span>
            © 2026 {PERSONAL_INFO.name}. Built with Next.js 14, React, TypeScript & Tailwind CSS.
          </span>
        </div>
        <div className="flex items-center space-x-4">
          <a href="#hero" className="hover:text-blue-600 transition-colors">
            Back to Top ↑
          </a>
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition-colors"
          >
            GitHub Profile
          </a>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}

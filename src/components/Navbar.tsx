"use client";

import React, { useState } from "react";
import { Sun, Moon, FileText, Download, Menu, X } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { PERSONAL_INFO } from "@/data/portfolio";

interface NavbarProps {
  onOpenResume: () => void;
}

export function Navbar({ onOpenResume }: NavbarProps) {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-slate-200/80 dark:border-slate-800/80 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand */}
        <a href="#hero" className="flex items-center space-x-3 group">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold text-base shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
            QS
          </div>
          <div>
            <span className="font-bold text-lg tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              Quang Sang
            </span>
            <span
              className="inline-block w-2 h-2 rounded-full bg-emerald-500 ml-1.5 animate-pulse"
              title="Open to Opportunities"
            />
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center space-x-3">
          {/* Theme Switcher */}
          <button
            onClick={toggleTheme}
            type="button"
            aria-label="Toggle theme"
            className="p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-200/60 dark:hover:bg-slate-800/80 transition-colors"
          >
            {theme === "dark" ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-slate-700" />}
          </button>

          {/* View Resume Button */}
          <button
            onClick={onOpenResume}
            type="button"
            className="hidden sm:inline-flex items-center space-x-1.5 text-xs font-semibold px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <FileText className="w-4 h-4 text-blue-500" />
            <span>Preview CV</span>
          </button>

          {/* Direct Download */}
          <a
            href={PERSONAL_INFO.resumePdf}
            download="Nguyen_Quang_Sang_CV.pdf"
            className="inline-flex items-center space-x-2 text-xs font-semibold px-3.5 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-600/25 transition-all hover:shadow-blue-600/40"
          >
            <Download className="w-4 h-4" />
            <span className="hidden sm:inline">Download CV</span>
            <span className="sm:hidden">CV</span>
          </a>

          {/* Mobile menu hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            type="button"
            aria-label="Toggle mobile menu"
            className="md:hidden p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-200/60 dark:hover:bg-slate-800/80 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pt-2 pb-6 glass border-b border-slate-200 dark:border-slate-800 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-base font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-200/50 dark:hover:bg-slate-800"
            >
              {link.label}
            </a>
          ))}
          <button
            type="button"
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenResume();
            }}
            className="w-full text-left px-3 py-2 rounded-lg text-base font-medium text-blue-600 dark:text-blue-400 hover:bg-slate-200/50 dark:hover:bg-slate-800 flex items-center space-x-2"
          >
            <FileText className="w-5 h-5" />
            <span>Preview Full Resume</span>
          </button>
        </div>
      )}
    </header>
  );
}

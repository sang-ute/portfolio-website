"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Sun, Moon, FileText, Menu, X, RotateCcw } from "lucide-react";
import { useTheme } from "./ThemeProvider";

interface NavbarProps {
  onOpenResume: () => void;
  onReplayIntro: () => void;
}

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#projects" },
  { label: "Stack", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export function Navbar({ onOpenResume, onReplayIntro }: NavbarProps) {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openResume = () => {
    setMobileMenuOpen(false);
    onOpenResume();
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-500 ${
        scrolled || mobileMenuOpen
          ? "border-[var(--glass-edge)] bg-[var(--glass-tint)] shadow-lg shadow-black/5 backdrop-blur-2xl"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
        <a href="#hero" aria-label="Nguyen Quang Sang, home" className="group inline-flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-full border border-[var(--glass-rim)] font-mono text-[11px] font-semibold tracking-[-0.08em] transition-colors group-hover:bg-[var(--fg)] group-hover:text-[var(--bg)]">
            QS
          </span>
          <span className="text-sm font-semibold tracking-tight text-[var(--fg)] sm:text-base">
            Nguyen Quang Sang
          </span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link text-xs font-medium text-[var(--mut)] transition-colors hover:text-[var(--fg)]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={onReplayIntro}
            type="button"
            aria-label="Replay introduction"
            title="Replay introduction"
            className="inline-flex h-10 items-center gap-2 rounded-full border border-[var(--glass-rim)] px-3 text-xs text-[var(--fg)] transition-colors hover:bg-[var(--fg)] hover:text-[var(--bg)]"
          >
            <RotateCcw className="h-4 w-4" />
            <span>Intro</span>
          </button>
          <button
            onClick={toggleTheme}
            type="button"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
            className="grid h-10 w-10 place-items-center rounded-full border border-[var(--glass-rim)] text-[var(--fg)] transition duration-300 hover:bg-[var(--fg)] hover:text-[var(--bg)]"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <button
            onClick={openResume}
            type="button"
            className="hidden h-10 items-center gap-2 rounded-full bg-[var(--fg)] px-4 text-xs font-semibold text-[var(--bg)] transition-opacity hover:opacity-75 sm:inline-flex"
          >
            <FileText className="h-3.5 w-3.5" />
            Résumé
          </button>
          <button
            onClick={() => setMobileMenuOpen((open) => !open)}
            type="button"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            className="grid h-10 w-10 place-items-center rounded-full border border-[var(--glass-rim)] text-[var(--fg)] md:hidden"
          >
            {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.nav
            aria-label="Mobile"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-[var(--glass-edge)] px-6 md:hidden"
          >
            <div className="mx-auto max-w-[1440px] py-3">
              {navLinks.map((link, index) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between border-b border-[var(--glass-edge)] py-4 text-base font-medium text-[var(--fg)] last:border-0"
                >
                  <span>{link.label}</span>
                  <span className="font-mono text-[10px] text-[var(--mut)]">
                    0{index + 1}
                  </span>
                </a>
              ))}
              <button
                type="button"
                onClick={openResume}
                className="mt-4 inline-flex min-h-11 items-center gap-2 rounded-full bg-[var(--fg)] px-5 text-sm font-semibold text-[var(--bg)]"
              >
                <FileText className="h-4 w-4" />
                View résumé
              </button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

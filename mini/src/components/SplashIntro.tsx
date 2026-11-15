"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolio";
import { SystemIllustration } from "./SystemIllustration";

export function SplashIntro({ replayKey }: { replayKey: number }) {
  const [visible, setVisible] = useState(true);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (replayKey === 0) return;
    setVisible(true);
  }, [replayKey]);

  useEffect(() => {
    if (!visible) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setVisible(false);
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.section
          aria-label="Portfolio introduction"
          aria-modal="true"
          role="dialog"
          initial={reduceMotion ? false : { opacity: 1 }}
          exit={reduceMotion ? { opacity: 0 } : { y: "-100%" }}
          transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1] }}
          className="intro-screen fixed inset-0 z-[100] flex min-h-svh flex-col justify-between overflow-hidden bg-[var(--bg)] px-5 pb-6 pt-6 text-[var(--fg)] sm:px-8 sm:pb-8 sm:pt-8 lg:px-12"
        >
          <div className="intro-grain pointer-events-none absolute inset-0" aria-hidden="true" />
          <SystemIllustration className="pointer-events-none absolute right-[-8rem] top-1/2 z-0 h-[min(70vw,34rem)] w-[min(70vw,34rem)] -translate-y-1/2 text-[var(--fg)] opacity-20 sm:right-[2%] sm:opacity-30" />
          <div className="relative z-10 flex items-center justify-between border-b border-[var(--glass-edge)] pb-4">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--mut)]">
              QS / Portfolio
            </span>
            <button
              type="button"
              onClick={() => setVisible(false)}
              className="group inline-flex items-center gap-2 rounded-full border border-[var(--glass-rim)] px-4 py-2 text-xs text-[var(--mut)] transition-colors hover:bg-[var(--fg)] hover:text-[var(--bg)]"
            >
              Enter site
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          <div className="relative z-10 mx-auto w-full max-w-[1440px] py-16">
            <motion.p
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mb-6 font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--mut)] sm:text-xs"
            >
              Software engineer / Ho Chi Minh City, VN
            </motion.p>
            <motion.p
              initial={reduceMotion ? false : { opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-6xl text-[clamp(3.4rem,11vw,10rem)] font-medium leading-[0.86] tracking-[-0.075em]"
            >
              A mind for
              <br />
              <span className="intro-outline">the systems</span>
              <br />
              behind it all.
            </motion.p>
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.58 }}
              className="mt-8 flex flex-col gap-2 sm:ml-[30%] sm:mt-10 sm:flex-row sm:items-baseline sm:gap-4"
            >
              <span className="text-sm text-[var(--mut)]">Introducing</span>
              <span className="text-2xl font-medium tracking-tight sm:text-3xl">
                {PERSONAL_INFO.name}
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--mut)]">
                Backend / Cloud / Engineering
              </span>
            </motion.div>
          </div>

          <div className="relative z-10 flex items-end justify-between border-t border-[var(--glass-edge)] pt-4 font-mono text-[9px] uppercase tracking-[0.18em] text-[var(--mut)] sm:text-[10px]">
            <span>Reliable systems.</span>
            <span className="inline-flex items-center gap-2">
              Enter when ready
              <ArrowDown className="h-3.5 w-3.5" />
            </span>
          </div>

          {!reduceMotion && (
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 6.5, ease: "linear" }}
              className="absolute inset-x-0 bottom-0 z-20 h-px origin-left bg-[var(--fg)]"
              aria-hidden="true"
            />
          )}
        </motion.section>
      )}
    </AnimatePresence>
  );
}

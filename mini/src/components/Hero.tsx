"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Download, Github, Linkedin } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolio";
import { SystemIllustration } from "./SystemIllustration";

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="hero"
      className="hero-stage relative isolate flex min-h-[min(900px,100svh)] items-end overflow-hidden px-5 pb-12 pt-32 sm:px-8 sm:pb-16 lg:min-h-[850px] lg:px-12"
    >
      <div className="hero-grid pointer-events-none absolute inset-0 -z-20" />
      <div className="hero-halo pointer-events-none absolute inset-0 -z-10" />
      <SystemIllustration className="pointer-events-none absolute right-[-9rem] top-[12%] -z-10 h-[min(72vw,42rem)] w-[min(72vw,42rem)] text-[var(--fg)] opacity-15 sm:right-[-5rem] sm:top-[7%] sm:opacity-20 lg:right-[3%] lg:top-[8%]" />

      <div className="relative mx-auto w-full max-w-[1440px]">
        <div className="grid items-end gap-12 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-16">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-5xl"
        >
          <div className="mb-7 flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-[10px] uppercase tracking-[0.24em] text-[var(--mut)] sm:text-xs">
            <span className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--fg)]" />
              Software Engineer Intern
            </span>
            <span aria-hidden="true" className="text-[var(--line)]">/</span>
            <span>Money Forward Vietnam</span>
            <span aria-hidden="true" className="text-[var(--line)]">/</span>
            <span>Ho Chi Minh City</span>
          </div>

          <h1 className="max-w-5xl text-[clamp(3.5rem,10vw,9rem)] font-medium leading-[0.88] tracking-[-0.085em] text-[var(--fg)]">
            <span className="sr-only">Nguyen Quang Sang, Software Engineer: </span>
            Software,
            <br />
            <span className="hero-title-second">engineered to</span>
            <br />
            <span className="hero-title-third">move forward.</span>
          </h1>

          <div className="mt-8 grid max-w-3xl gap-6 sm:grid-cols-[1fr_auto] sm:items-end">
            <p className="max-w-xl text-sm leading-7 text-[var(--mut)] sm:text-base">
              I build dependable backend and cloud systems.
            </p>
            <a
              href="#about"
              aria-label="Scroll to about"
              className="group hidden h-12 w-12 place-items-center rounded-full border border-[var(--glass-rim)] text-[var(--fg)] transition duration-300 hover:bg-[var(--fg)] hover:text-[var(--bg)] sm:grid"
            >
              <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-1" />
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="group inline-flex min-h-12 items-center gap-3 rounded-full bg-[var(--fg)] px-5 text-sm font-semibold text-[var(--bg)] transition duration-300 hover:-translate-y-0.5 hover:opacity-80"
            >
              Selected work
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href={PERSONAL_INFO.resumePdf}
              download="Nguyen_Quang_Sang_CV.pdf"
              className="inline-flex min-h-12 items-center gap-2 rounded-full border border-[var(--glass-rim)] px-5 text-sm font-medium text-[var(--fg)] transition duration-300 hover:bg-[var(--spot)]"
            >
              <Download className="h-4 w-4" />
              Résumé
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-[var(--mut)]">
            <span className="font-mono uppercase tracking-[0.16em]">Links</span>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 transition-colors hover:text-[var(--fg)]"
            >
              <Github className="h-4 w-4" />
              GitHub
              <ArrowUpRight className="h-3 w-3" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 transition-colors hover:text-[var(--fg)]"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
              <ArrowUpRight className="h-3 w-3" />
            </a>
          </div>
        </motion.div>

        <motion.figure
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto w-full max-w-[18rem] sm:max-w-[20rem] lg:mx-0 lg:w-[22rem] lg:max-w-none xl:w-[24rem]"
        >
          <div className="overflow-hidden rounded-[1.75rem] border border-[var(--glass-rim)] bg-[var(--spot)] p-1.5 shadow-2xl">
            <picture>
              <source srcSet={PERSONAL_INFO.portrait.webp} type="image/webp" />
              <img
                src={PERSONAL_INFO.portrait.jpg}
                alt={PERSONAL_INFO.portrait.alt}
                width={PERSONAL_INFO.portrait.width}
                height={PERSONAL_INFO.portrait.height}
                fetchPriority="high"
                decoding="async"
                className="block aspect-[4/5] h-auto w-full rounded-[1.4rem] object-cover saturate-[0.8] transition duration-500 hover:saturate-100"
              />
            </picture>
          </div>
          <figcaption className="mt-3 flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.18em] text-[var(--mut)] sm:text-[10px]">
            <span>{PERSONAL_INFO.name}</span>
            <span>HCMUTE / MFi</span>
          </figcaption>
        </motion.figure>
        </div>

        <div className="mt-12 flex items-center justify-between border-t border-[var(--glass-edge)] pt-4 font-mono text-[9px] uppercase tracking-[0.18em] text-[var(--mut)] sm:text-[10px]">
          <span>Nguyen Quang Sang</span>
          <span>Backend / Cloud / Systems</span>
          <a href="#projects" className="inline-flex items-center gap-2 transition-colors hover:text-[var(--fg)]">
            Scroll to explore
            <ArrowDown className="h-3 w-3" />
          </a>
        </div>
      </div>
    </section>
  );
}

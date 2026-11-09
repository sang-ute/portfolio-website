"use client";

import React from "react";
import { ArrowUpRight, Eye } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolio";

interface AboutProps {
  onOpenResume: () => void;
}

export function About({ onOpenResume }: AboutProps) {
  return (
    <section id="about" className="px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-12 flex items-center justify-between border-b border-[var(--line)] pb-4">
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--mut)] sm:text-xs">
            01 / Introduction
          </p>
          <p className="hidden font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--mut)] sm:block">
            A little about how I think
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1.05fr_.95fr] lg:gap-20">
          <div>
            <h2 className="max-w-3xl text-4xl font-medium leading-[1.08] tracking-[-0.06em] text-[var(--fg)] sm:text-5xl lg:text-6xl">
              I build what&apos;s{" "}
              <span className="text-[var(--mut)]">under the surface.</span>
            </h2>
            <div className="mt-8 flex items-center gap-4">
              <span className="h-px w-12 bg-[var(--fg)]" />
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--mut)]">
                Thoughtful by design
              </span>
            </div>
          </div>

          <div className="space-y-5 text-sm leading-7 text-[var(--mut)] sm:text-base sm:leading-8">
            <p>
              Software Engineering student at{" "}
              <strong className="font-medium text-[var(--fg)]">HCMUTE</strong>.
              Backend intern at{" "}
              <strong className="font-medium text-[var(--fg)]">
                Money Forward Vietnam
              </strong>
              , building Admina with TypeScript, NestJS, MySQL, Docker, and AWS.
            </p>
            <button
              type="button"
              onClick={onOpenResume}
              className="group mt-2 inline-flex items-center gap-2 border-b border-[var(--glass-rim)] pb-2 text-sm font-medium text-[var(--fg)] transition-colors hover:border-[var(--fg)]"
            >
              <Eye className="h-4 w-4" />
              View résumé
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 border-y border-[var(--line)] sm:grid-cols-4">
          {[
            { value: "3.2 / 4.0", label: "Cumulative GPA" },
            { value: "IELTS 7.5", label: "English proficiency" },
            { value: "AWS", label: "Cloud engineering" },
            { value: "HCMUTE", label: "Software engineering" },
          ].map((item, index) => (
            <div
              key={item.label}
              className={`py-5 ${index % 2 === 0 ? "pr-4" : "pl-4"} ${
                index > 1 ? "border-t border-[var(--line)] sm:border-t-0" : ""
              } ${index === 1 ? "sm:border-r sm:border-[var(--line)] sm:pr-8" : ""} ${
                index === 2 ? "sm:pl-8" : ""
              } ${index < 3 ? "sm:border-r sm:border-[var(--line)] sm:pr-6" : "sm:pl-6"}`}
            >
              <p className="text-lg font-medium tracking-tight text-[var(--fg)] sm:text-xl">
                {item.value}
              </p>
              <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.14em] text-[var(--mut)] sm:text-[10px]">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

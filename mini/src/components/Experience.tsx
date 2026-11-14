"use client";

import React from "react";
import { Briefcase, MapPin, Calendar, CheckCircle2 } from "lucide-react";
import { EXPERIENCES } from "@/data/portfolio";

export function Experience() {
  return (
    <section id="experience" className="px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
      <div className="mx-auto max-w-[1440px]">
        {/* Section header */}
        <div className="mb-12 flex items-center justify-between border-b border-[var(--line)] pb-4">
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--mut)] sm:text-xs">
            02 / Experience
          </p>
          <p className="hidden font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--mut)] sm:block">
            Industry track record
          </p>
        </div>

        <div className="mb-12 max-w-2xl">
          <h2 className="text-4xl font-medium leading-[1.08] tracking-[-0.06em] text-[var(--fg)] sm:text-5xl lg:text-6xl">
            Work &amp;{" "}
            <span className="text-[var(--mut)]">industry.</span>
          </h2>
          <p className="mt-4 text-sm leading-7 text-[var(--mut)] sm:text-base">
            Professional software engineering tenure contributing to production SaaS platforms and distributed cloud systems.
          </p>
        </div>

        {/* Experience List with Liquid Glass Cards */}
        <div className="space-y-6">
          {EXPERIENCES.map((exp, idx) => (
            <div
              key={idx}
              className="editorial-card rounded-2xl p-6 sm:p-8 transition-all duration-300"
            >
              {/* Meta row */}
              <div className="mb-5 flex flex-wrap items-center justify-between gap-3 border-b border-[var(--line)] pb-4">
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--mut)]">
                  <span className="inline-flex items-center gap-1.5 text-[var(--fg)]">
                    <Briefcase className="h-3.5 w-3.5" />
                    {exp.type}
                  </span>
                  <span aria-hidden="true" className="text-[var(--line)]">/</span>
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5" />
                    {exp.period}
                  </span>
                  <span aria-hidden="true" className="text-[var(--line)]">/</span>
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5" />
                    {exp.location}
                  </span>
                </div>
                <span className="rounded-full border border-[var(--line)] bg-[var(--spot)] px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-[var(--fg)]">
                  {exp.company}
                </span>
              </div>

              {/* Role & company */}
              <h3 className="text-2xl font-semibold tracking-[-0.04em] text-[var(--fg)] sm:text-3xl">
                {exp.role}
              </h3>
              <p className="mt-1 text-sm font-medium text-[var(--mut)]">
                {exp.company}
              </p>

              {/* Description */}
              <p className="mt-4 max-w-4xl text-sm leading-7 text-[var(--mut)] sm:text-base">
                {exp.description}
              </p>

              {/* Responsibilities */}
              {exp.responsibilities.length > 0 && (
                <div className="mt-6 rounded-xl border border-[var(--line)] bg-[var(--spot)]/50 p-4 sm:p-5">
                  <p className="mb-3 font-mono text-[9px] uppercase tracking-[0.2em] text-[var(--mut)]">
                    Key Responsibilities &amp; Impact
                  </p>
                  <ul className="space-y-2.5">
                    {exp.responsibilities.map((r, rIdx) => (
                      <li
                        key={rIdx}
                        className="flex items-start gap-2.5 text-xs leading-relaxed text-[var(--mut)] sm:text-sm"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--fg)]" />
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Tech chips */}
              <div className="mt-6 flex flex-wrap gap-2">
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-[var(--line)] bg-[var(--card)] px-3 py-1 font-mono text-[11px] text-[var(--fg)] transition-all duration-200 hover:border-[var(--mut)] hover:bg-[var(--spot)]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

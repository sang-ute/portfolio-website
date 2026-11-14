"use client";

import React from "react";
import { Briefcase } from "lucide-react";
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

        <div className="mb-10 max-w-2xl">
          <h2 className="text-4xl font-medium leading-[1.08] tracking-[-0.06em] text-[var(--fg)] sm:text-5xl lg:text-6xl">
            Work &amp;{" "}
            <span className="text-[var(--mut)]">industry.</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative space-y-0">
          {/* Vertical spine */}
          <div
            aria-hidden="true"
            className="absolute left-0 top-0 h-full w-px bg-[var(--line)] hidden sm:block"
          />

          {EXPERIENCES.map((exp, idx) => (
            <div
              key={idx}
              className="group relative sm:pl-8"
            >
              {/* Dot on spine */}
              <div
                aria-hidden="true"
                className="absolute left-[-4.5px] top-6 hidden h-2.5 w-2.5 rounded-full border border-[var(--fg)] bg-[var(--bg)] sm:block transition-colors group-hover:bg-[var(--fg)]"
              />

              <div className="border-b border-[var(--line)] py-10 last:border-0">
                {/* Meta row */}
                <div className="mb-5 flex flex-wrap items-center gap-x-4 gap-y-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--mut)]">
                  <span className="inline-flex items-center gap-2">
                    <Briefcase className="h-3 w-3" />
                    {exp.type}
                  </span>
                  <span aria-hidden="true" className="text-[var(--line)]">
                    /
                  </span>
                  <span>{exp.period}</span>
                  <span aria-hidden="true" className="text-[var(--line)]">
                    /
                  </span>
                  <span>{exp.location}</span>
                </div>

                {/* Role & company */}
                <h3 className="text-xl font-semibold tracking-[-0.04em] text-[var(--fg)] sm:text-2xl">
                  {exp.role}
                </h3>
                <p className="mt-1 text-sm font-medium text-[var(--mut)]">
                  {exp.company}
                </p>

                {/* Description */}
                <p className="mt-4 max-w-3xl text-sm leading-7 text-[var(--mut)]">
                  {exp.description}
                </p>

                {/* Responsibilities */}
                {exp.responsibilities.length > 0 && (
                  <ul className="mt-4 max-w-3xl space-y-2">
                    {exp.responsibilities.map((r, rIdx) => (
                      <li
                        key={rIdx}
                        className="flex gap-3 text-sm leading-6 text-[var(--mut)]"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--mut)]"
                        />
                        {r}
                      </li>
                    ))}
                  </ul>
                )}

                {/* Tech chips */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-[var(--line)] bg-[var(--card)] px-3 py-1 font-mono text-[10px] text-[var(--mut)] transition hover:border-[var(--mut)] hover:text-[var(--fg)]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

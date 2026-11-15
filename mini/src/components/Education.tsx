"use client";

import React from "react";
import { GraduationCap, Award } from "lucide-react";
import { EDUCATIONS, CERTIFICATIONS } from "@/data/portfolio";
import { Reveal } from "./Reveal";

export function Education() {
  const edu = EDUCATIONS[0];

  return (
    <section id="education" className="px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
      <div className="mx-auto max-w-[1440px]">
        {/* Section header */}
        <div className="mb-12 flex items-center justify-between border-b border-[var(--line)] pb-4">
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--mut)] sm:text-xs">
            05 / Education &amp; Certs
          </p>
          <p className="hidden font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--mut)] sm:block">
            Credentials &amp; qualifications
          </p>
        </div>

        <div className="mb-10 max-w-2xl">
          <h2 className="text-4xl font-medium leading-[1.08] tracking-[-0.06em] text-[var(--fg)] sm:text-5xl lg:text-6xl">
            Education &amp;{" "}
            <span className="text-[var(--mut)]">certs.</span>
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Education card */}
          <div className="editorial-card rounded-2xl p-6 sm:p-8">
            <div className="mb-6 flex items-center gap-3 border-b border-[var(--line)] pb-5">
              <span className="grid h-10 w-10 place-items-center rounded-xl border border-[var(--line)] bg-[var(--spot)] text-[var(--fg)]">
                <GraduationCap className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-sm font-semibold text-[var(--fg)]">
                  University Education
                </h3>
                <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--mut)]">
                  Undergraduate degree
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h4 className="text-base font-semibold tracking-tight text-[var(--fg)]">
                    {edu.institution}
                  </h4>
                  <p className="mt-0.5 text-sm text-[var(--mut)]">{edu.degree}</p>
                </div>
                <span className="shrink-0 rounded-full border border-[var(--line)] px-2.5 py-1 font-mono text-[10px] text-[var(--mut)]">
                  {edu.period}
                </span>
              </div>

              <div className="rounded-xl border border-[var(--line)] bg-[var(--card)] p-4 space-y-2.5">
                {[
                  { label: "Cumulative GPA", value: edu.gpa },
                  { label: "Academic cohort", value: edu.classGroup },
                  {
                    label: "Specialization",
                    value: "Microservices · Cloud · DBMS · OS · DSA",
                  },
                ].map((row) => (
                  <div key={row.label} className="flex justify-between gap-4 text-xs">
                    <span className="text-[var(--mut)]">{row.label}</span>
                    <span className="font-medium text-[var(--fg)] text-right">
                      {row.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Certifications card */}
          <div className="editorial-card rounded-2xl p-6 sm:p-8">
            <div className="mb-6 flex items-center gap-3 border-b border-[var(--line)] pb-5">
              <span className="grid h-10 w-10 place-items-center rounded-xl border border-[var(--line)] bg-[var(--spot)] text-[var(--fg)]">
                <Award className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-sm font-semibold text-[var(--fg)]">
                  Certifications
                </h3>
                <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--mut)]">
                  Industry &amp; language credentials
                </p>
              </div>
            </div>

            <div className="space-y-3">
              {CERTIFICATIONS.map((cert, idx) => (
                <Reveal key={idx} delay={idx * 0.06} distance={28} amount={0.2}>
                  <div
                    className="flex items-center justify-between gap-4 rounded-xl border border-[var(--line)] px-4 py-3 transition-colors hover:bg-[var(--card)]"
                  >
                    <div className="flex items-center gap-3">
                      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-[var(--line)] bg-[var(--spot)] font-mono text-xs font-bold text-[var(--fg)]">
                        {cert.badge}
                      </span>
                      <div>
                        <p className="text-sm font-medium text-[var(--fg)]">
                          {cert.name}
                        </p>
                        <p className="font-mono text-[10px] text-[var(--mut)]">
                          {cert.issuer}
                        </p>
                      </div>
                    </div>
                    <span className="shrink-0 rounded-full border border-[var(--line)] px-2.5 py-1 font-mono text-[10px] text-[var(--mut)]">
                      {cert.type}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

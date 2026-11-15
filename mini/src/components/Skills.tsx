"use client";

import React from "react";
import { Code, Layers, CloudLightning, Database, Wrench, Users, BarChart3, Check } from "lucide-react";
import { SKILL_CATEGORIES } from "@/data/portfolio";
import { TechLogo } from "./TechLogos";
import { Reveal } from "./Reveal";

function getIcon(iconName: string) {
  const cls = "h-4 w-4 text-[var(--fg)]";
  switch (iconName) {
    case "code": return <Code className={cls} />;
    case "layers": return <Layers className={cls} />;
    case "cloud": return <CloudLightning className={cls} />;
    case "database": return <Database className={cls} />;
    case "wrench": return <Wrench className={cls} />;
    case "users": return <Users className={cls} />;
    default: return <Code className={cls} />;
  }
}

export function Skills() {
  const proficiencyBars = [
    { skill: "Backend Systems & NestJS / TypeScript", score: 95, color: "bg-emerald-500" },
    { skill: "AWS Cloud Architecture & S3 / Lambda / EC2", score: 92, color: "bg-sky-500" },
    { skill: "Distributed Microservices & gRPC Protocol", score: 90, color: "bg-indigo-500" },
    { skill: "Database Engineering & MySQL / Redis / DynamoDB", score: 88, color: "bg-purple-500" },
    { skill: "Containerization, Docker & CI/CD Pipelines", score: 86, color: "bg-amber-500" },
  ];

  return (
    <section id="skills" className="px-5 py-24 sm:px-8 sm:py-32 lg:px-12" aria-labelledby="skills-heading">
      <div className="mx-auto max-w-[1440px]">
        {/* Section header */}
        <div className="mb-12 flex items-center justify-between border-b border-[var(--line)] pb-4">
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--mut)] sm:text-xs">
            04 / Stack &amp; Competencies
          </p>
          <p className="hidden font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--mut)] sm:block">
            Frameworks, Cloud &amp; Engineering Metrics
          </p>
        </div>

        <div className="mb-10 max-w-2xl">
          <h2 id="skills-heading" className="text-4xl font-medium leading-[1.08] tracking-[-0.06em] text-[var(--fg)] sm:text-5xl lg:text-6xl">
            Tech <span className="text-[var(--mut)]">stack.</span>
          </h2>
          <p className="mt-4 text-sm leading-7 text-[var(--mut)] sm:text-base">
            Proficiencies across backend engineering, cloud native services on AWS, high-throughput microservices, and databases.
          </p>
        </div>

        {/* Visual Proficiency Metric Graphs */}
        <div className="liquid-glass mb-10 rounded-2xl p-6 sm:p-8">
          <div className="mb-6 flex items-center justify-between border-b border-[var(--line)] pb-4">
            <div className="flex items-center gap-3">
              <span className="grid h-8 w-8 place-items-center rounded-lg border border-[var(--line)] bg-[var(--spot)] text-[var(--fg)]">
                <BarChart3 className="h-4 w-4" />
              </span>
              <div>
                <h3 className="text-sm font-semibold text-[var(--fg)]">Domain Proficiency &amp; Focus Distribution</h3>
                <p className="font-mono text-[9px] uppercase tracking-wider text-[var(--mut)]">Engineering Weighting Index</p>
              </div>
            </div>
            <span className="font-mono text-xs text-emerald-400 font-semibold">Production Ready</span>
          </div>

          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            {proficiencyBars.map((item) => (
              <div key={item.skill} className="space-y-1.5 font-mono text-xs">
                <div className="flex justify-between items-center text-[var(--fg)]">
                  <span className="font-sans text-xs font-medium text-[var(--fg)]">{item.skill}</span>
                  <span className="font-mono text-xs font-bold text-emerald-400">{item.score}%</span>
                </div>
                <div className="h-2 w-full rounded-full bg-[var(--line)] overflow-hidden">
                  <div
                    className={`h-full ${item.color} rounded-full transition-all duration-700 ease-out`}
                    style={{ width: `${item.score}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Categories Grid with SVG Brand Logos */}
        <div className="grid grid-cols-1 gap-px border border-[var(--line)] sm:grid-cols-2 lg:grid-cols-3 bg-[var(--line)] rounded-2xl overflow-hidden">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <div
              key={idx}
              className="group bg-[var(--bg)] p-6 sm:p-7 transition-colors hover:bg-[var(--card)]"
            >
              <Reveal delay={(idx % 3) * 0.08} distance={28} amount={0.2}>
              <div className="mb-5 flex items-center gap-3">
                <span className="grid h-8 w-8 place-items-center rounded-lg border border-[var(--line)] bg-[var(--spot)]">
                  {getIcon(cat.icon)}
                </span>
                <div>
                  <h3 className="text-sm font-semibold tracking-tight text-[var(--fg)]">
                    {cat.name}
                  </h3>
                  <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-[var(--mut)]">
                    {cat.skills.length} core competencies
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <div
                    key={skill}
                    className="inline-flex items-center gap-2 rounded-lg border border-[var(--line)] bg-[var(--card)] px-2.5 py-1.5 font-mono text-xs text-[var(--fg)] transition-all duration-200 hover:border-[var(--mut)] hover:bg-[var(--spot)] hover:-translate-y-0.5"
                  >
                    <TechLogo name={skill} className="h-3.5 w-3.5 shrink-0" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

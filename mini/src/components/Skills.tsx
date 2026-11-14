"use client";

import React from "react";
import { Code, Layers, CloudLightning, Database, Wrench, Users } from "lucide-react";
import { SKILL_CATEGORIES } from "@/data/portfolio";

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
  return (
    <section id="skills" className="px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
      <div className="mx-auto max-w-[1440px]">
        {/* Section header */}
        <div className="mb-12 flex items-center justify-between border-b border-[var(--line)] pb-4">
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--mut)] sm:text-xs">
            05 / Stack
          </p>
          <p className="hidden font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--mut)] sm:block">
            Tools of the trade
          </p>
        </div>

        <div className="mb-10 max-w-2xl">
          <h2 className="text-4xl font-medium leading-[1.08] tracking-[-0.06em] text-[var(--fg)] sm:text-5xl lg:text-6xl">
            Tech{" "}
            <span className="text-[var(--mut)]">stack.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-px border border-[var(--line)] sm:grid-cols-2 lg:grid-cols-3">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <div
              key={idx}
              className="group border-[var(--line)] bg-[var(--bg)] p-6 transition-colors hover:bg-[var(--card)] sm:border-r last:border-r-0"
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="grid h-8 w-8 place-items-center rounded-lg border border-[var(--line)] bg-[var(--spot)]">
                  {getIcon(cat.icon)}
                </span>
                <h3 className="text-sm font-semibold text-[var(--fg)]">
                  {cat.name}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-[var(--line)] bg-[var(--card)] px-2.5 py-1 font-mono text-[10px] text-[var(--mut)] transition hover:border-[var(--mut)] hover:text-[var(--fg)]"
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

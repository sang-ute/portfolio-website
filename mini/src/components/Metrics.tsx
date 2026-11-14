"use client";

import React from "react";
import { METRICS } from "@/data/portfolio";

export function Metrics() {
  return (
    <section className="border-y border-[var(--line)]">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[var(--line)]">
          {METRICS.map((metric, idx) => (
            <div
              key={idx}
              className="group px-6 py-8 transition-colors hover:bg-[var(--spot)] first:pl-0 last:pr-0"
            >
              <p className="text-2xl font-semibold tracking-tight text-[var(--fg)] sm:text-3xl">
                {metric.value}
              </p>
              <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.18em] text-[var(--mut)]">
                {metric.label}
              </p>
              <p className="mt-0.5 text-xs text-[var(--mut)]">{metric.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

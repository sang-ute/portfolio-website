"use client";

import React from "react";
import { METRICS } from "@/data/portfolio";

export function Metrics() {
  return (
    <section className="border-y border-slate-200/80 dark:border-slate-800/80 bg-white/50 dark:bg-slate-900/40 py-8 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {METRICS.map((metric, idx) => {
            const colors = [
              "text-blue-600 dark:text-blue-400",
              "text-indigo-600 dark:text-indigo-400",
              "text-emerald-600 dark:text-emerald-400",
              "text-pink-600 dark:text-pink-400",
            ];
            return (
              <div key={idx} className="p-4 rounded-xl glass-card">
                <div className={`text-3xl font-extrabold ${colors[idx % colors.length]}`}>
                  {metric.value}
                </div>
                <div className="text-xs font-semibold text-slate-700 dark:text-slate-300 mt-1">
                  {metric.label}
                </div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400">
                  {metric.sub}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

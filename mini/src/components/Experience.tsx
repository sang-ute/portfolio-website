"use client";

import React from "react";
import { Briefcase, Cloud } from "lucide-react";
import { EXPERIENCES } from "@/data/portfolio";

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-slate-100/60 dark:bg-slate-900/30 border-y border-slate-200/70 dark:border-slate-800/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-2">
            Track Record
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold tracking-tight">Work & Industry Experience</p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mt-4 rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto space-y-8 relative before:absolute before:inset-0 before:left-5 md:before:left-1/2 before:w-0.5 before:bg-slate-300 dark:before:bg-slate-800 before:-translate-x-1/2">
          {EXPERIENCES.map((exp, idx) => {
            const isLeft = idx % 2 === 0;
            return (
              <div key={idx} className="relative flex flex-col md:flex-row items-start group">
                {/* Timeline Marker */}
                <div className="absolute left-5 md:left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-blue-600 border-4 border-slate-50 dark:border-slate-950 flex items-center justify-center text-white shadow-md z-10">
                  {idx === 0 ? <Briefcase className="w-4 h-4" /> : <Cloud className="w-4 h-4" />}
                </div>

                {/* Left Card */}
                {isLeft ? (
                  <>
                    <div className="ml-12 w-[calc(100%-3rem)] md:ml-0 md:w-1/2 md:pr-10">
                      <div className="glass-card p-6 rounded-2xl relative">
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                          <span className="px-2.5 py-1 rounded-md text-xs font-bold bg-blue-100 text-blue-800 dark:bg-blue-900/60 dark:text-blue-300">
                            {exp.period}
                          </span>
                          <span className="text-xs text-slate-500 dark:text-slate-400">{exp.location}</span>
                        </div>

                        <h3 className="text-lg font-bold text-slate-900 dark:text-white">{exp.role}</h3>
                        <h4 className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-3">{exp.company}</h4>

                        <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                          {exp.description}
                        </p>

                        <ul className="text-xs text-slate-600 dark:text-slate-400 space-y-2 list-disc list-inside mb-4">
                          {exp.responsibilities.map((resp, rIdx) => (
                            <li key={rIdx}>{resp}</li>
                          ))}
                        </ul>

                        <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100 dark:border-slate-800">
                          {exp.skills.map((skill, sIdx) => (
                            <span
                              key={sIdx}
                              className="text-xs px-2 py-0.5 rounded bg-slate-200/70 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-mono"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="hidden md:block md:w-1/2" />
                  </>
                ) : (
                  <>
                    <div className="hidden md:block md:w-1/2" />
                    <div className="ml-12 w-[calc(100%-3rem)] md:ml-0 md:w-1/2 md:pl-10">
                      <div className="glass-card p-6 rounded-2xl relative">
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                          <span className="px-2.5 py-1 rounded-md text-xs font-bold bg-indigo-100 text-indigo-800 dark:bg-indigo-900/60 dark:text-indigo-300">
                            {exp.period}
                          </span>
                          <span className="text-xs text-slate-500 dark:text-slate-400">{exp.type}</span>
                        </div>

                        <h3 className="text-lg font-bold text-slate-900 dark:text-white">{exp.role}</h3>
                        <h4 className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 mb-3">{exp.company}</h4>

                        <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                          {exp.description}
                        </p>

                        <ul className="text-xs text-slate-600 dark:text-slate-400 space-y-2 list-disc list-inside mb-4">
                          {exp.responsibilities.map((resp, rIdx) => (
                            <li key={rIdx}>{resp}</li>
                          ))}
                        </ul>

                        <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100 dark:border-slate-800">
                          {exp.skills.map((skill, sIdx) => (
                            <span
                              key={sIdx}
                              className="text-xs px-2 py-0.5 rounded bg-slate-200/70 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-mono"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

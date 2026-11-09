"use client";

import React from "react";
import { GraduationCap, Award } from "lucide-react";
import { EDUCATIONS, CERTIFICATIONS } from "@/data/portfolio";

export function Education() {
  const edu = EDUCATIONS[0];

  return (
    <section id="education" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-2">
            Qualifications
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold tracking-tight">Education & Certifications</p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Education Card */}
          <div className="lg:col-span-6 glass-card rounded-2xl p-6 sm:p-8 relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />

            <div className="flex items-center space-x-3 mb-6">
              <div className="p-3 rounded-xl bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">University Education</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">Undergraduate Degree</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-base font-bold text-slate-800 dark:text-slate-100">{edu.institution}</h4>
                  <p className="text-sm font-medium text-blue-600 dark:text-blue-400">{edu.degree}</p>
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                  {edu.period}
                </span>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-500 dark:text-slate-400">Cumulative GPA:</span>
                  <span className="font-bold text-slate-900 dark:text-white">{edu.gpa}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-slate-500 dark:text-slate-400">Academic Cohort:</span>
                  <span className="font-medium text-slate-900 dark:text-slate-200">{edu.classGroup}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-slate-500 dark:text-slate-400">Specialization:</span>
                  <span className="font-medium text-slate-900 dark:text-slate-200">
                    Microservices, Cloud, DBMS, OS, Data Structures & Algorithms
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Certifications Card */}
          <div className="lg:col-span-6 glass-card rounded-2xl p-6 sm:p-8 relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />

            <div className="flex items-center space-x-3 mb-6">
              <div className="p-3 rounded-xl bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Professional Certifications</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">Industry & Language Credentials</p>
              </div>
            </div>

            <div className="space-y-4">
              {CERTIFICATIONS.map((cert, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 flex items-center justify-between"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-9 h-9 rounded-lg bg-blue-100 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold text-xs">
                      {cert.badge}
                    </div>
                    <div>
                      <h5 className="text-sm font-bold text-slate-800 dark:text-slate-100">{cert.name}</h5>
                      <p className="text-xs text-slate-500 dark:text-slate-400">{cert.issuer}</p>
                    </div>
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300">
                    {cert.type}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

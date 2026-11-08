"use client";

import React from "react";
import { Code, Layers, CloudLightning, Database, Wrench, Users } from "lucide-react";
import { SKILL_CATEGORIES } from "@/data/portfolio";

export function Skills() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "code":
        return <Code className="w-5 h-5 text-blue-600 dark:text-blue-400" />;
      case "layers":
        return <Layers className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />;
      case "cloud":
        return <CloudLightning className="w-5 h-5 text-amber-600 dark:text-amber-400" />;
      case "database":
        return <Database className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
      case "wrench":
        return <Wrench className="w-5 h-5 text-purple-600 dark:text-purple-400" />;
      case "users":
        return <Users className="w-5 h-5 text-pink-600 dark:text-pink-400" />;
      default:
        return <Code className="w-5 h-5" />;
    }
  };

  return (
    <section id="skills" className="py-20 bg-slate-100/60 dark:bg-slate-900/30 border-y border-slate-200/70 dark:border-slate-800/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-2">
            Technical Skills
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold tracking-tight">Tech Stack & Competencies</p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <div key={idx} className="glass-card rounded-2xl p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900">
                  {getIcon(cat.icon)}
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">{cat.name}</h3>
              </div>
              <div className="flex flex-wrap gap-2 text-xs">
                {cat.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-3 py-1.5 rounded-lg bg-white/80 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 font-semibold border border-slate-200 dark:border-slate-700 hover:border-blue-500 transition-colors"
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

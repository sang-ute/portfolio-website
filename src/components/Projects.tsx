"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Building,
  ScanFace,
  Music,
  Smartphone,
  Bot,
  Terminal,
  Github,
  ExternalLink,
  Check,
} from "lucide-react";
import { PROJECTS, Project } from "@/data/portfolio";

export function Projects() {
  const [activeFilter, setActiveFilter] = useState<Project["category"]>("all");

  const filterTabs = [
    { id: "all", label: "All Projects" },
    { id: "web", label: "Full-Stack & Microservices" },
    { id: "cloud", label: "Cloud & AWS" },
    { id: "mobile", label: "Kotlin & Android" },
    { id: "systems", label: "Systems & AI" },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeFilter);

  const getProjectIcon = (category: Project["category"]) => {
    switch (category) {
      case "web":
        return <Building className="w-6 h-6 text-blue-600 dark:text-blue-400" />;
      case "cloud":
        return <ScanFace className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />;
      case "mobile":
        return <Smartphone className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />;
      case "systems":
        return <Terminal className="w-6 h-6 text-purple-600 dark:text-purple-400" />;
      default:
        return <Bot className="w-6 h-6 text-blue-600 dark:text-blue-400" />;
    }
  };

  return (
    <section id="projects" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-2">
            Portfolio
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold tracking-tight">Featured Engineering Projects</p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mt-4 rounded-full" />
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-4">
            Curated systems and applications built with microservices, AWS cloud, TypeScript, React, and Kotlin.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveFilter(tab.id as Project["category"])}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 border ${
                  isActive
                    ? "bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-600/30"
                    : "border-slate-300 dark:border-slate-700 hover:border-blue-500 text-slate-600 dark:text-slate-400"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                key={project.title}
                className="glass-card rounded-2xl p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900">
                      {getProjectIcon(project.category)}
                    </div>
                    <div className="flex items-center space-x-2">
                      {project.badge && (
                        <span className="text-xs px-2.5 py-0.5 rounded-full font-semibold bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300">
                          {project.badge}
                        </span>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                          title="View GitHub Repo"
                        >
                          <Github className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">{project.title}</h3>
                  <p className="text-xs font-medium text-blue-600 dark:text-blue-400 mb-3">{project.tagline}</p>

                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <div className="space-y-1.5 text-xs text-slate-500 dark:text-slate-400 mb-4">
                    {project.highlights.map((h, hIdx) => (
                      <div key={hIdx} className="flex items-center space-x-2">
                        <Check className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-100 dark:border-slate-800 text-xs font-mono">
                    {project.technologies.map((tech, tIdx) => (
                      <span key={tIdx} className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline flex items-center space-x-1"
                      >
                        <span>Explore Repository</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {project.secondaryUrl && (
                      <a
                        href={project.secondaryUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                      >
                        {project.secondaryLabel || "Secondary"} →
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}

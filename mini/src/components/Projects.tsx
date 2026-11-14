"use client";

import React, { useState } from "react";
import {
  ArrowUpRight,
  Brain,
  Bot,
  Braces,
  Building,
  BookOpen,
  Check,
  Cloud,
  Container,
  Cpu,
  Database,
  Globe2,
  Github,
  Layers3,
  Music2,
  Network,
  Search,
  Server,
  ShieldCheck,
  Sparkles,
  ScanFace,
  Smartphone,
  Terminal,
  type LucideIcon,
} from "lucide-react";
import { PROJECTS, Project } from "@/data/portfolio";
import { TechLogo } from "./TechLogos";

const filterTabs: {
  id: Project["category"];
  label: string;
  Icon: typeof Layers3;
}[] = [
  { id: "all", label: "All", Icon: Layers3 },
  { id: "web", label: "Web", Icon: Building },
  { id: "cloud", label: "Cloud", Icon: Cloud },
  { id: "mobile", label: "Mobile", Icon: Smartphone },
  { id: "systems", label: "AI & systems", Icon: Sparkles },
];

function ProjectMark({ category }: { category: Project["category"] }) {
  const iconClassName = "h-5 w-5";

  switch (category) {
    case "web":
      return <Building className={iconClassName} />;
    case "cloud":
      return <ScanFace className={iconClassName} />;
    case "mobile":
      return <Smartphone className={iconClassName} />;
    case "systems":
      return <Terminal className={iconClassName} />;
    default:
      return <Bot className={iconClassName} />;
  }
}

function TechnologyMark({ technology }: { technology: string }) {
  const name = technology.toLowerCase();
  let Icon: LucideIcon = Braces;

  if (/mysql|mongo|redis|dynamo|database|sql|prisma/.test(name)) Icon = Database;
  else if (/aws|cloud|lambda|s3|amplify|vpc|iam|route 53/.test(name)) Icon = Cloud;
  else if (/docker|container/.test(name)) Icon = Container;
  else if (/android|kotlin|mobile/.test(name)) Icon = Smartphone;
  else if (/grpc|api gateway|microservice/.test(name)) Icon = Network;
  else if (/search|rekognition|face/.test(name)) Icon = Search;
  else if (/music|audio|web audio/.test(name)) Icon = Music2;
  else if (/python|ai|heuristic|algorithm|game theory/.test(name)) Icon = Brain;
  else if (/windows|\.net|c#|desktop/.test(name)) Icon = Cpu;
  else if (/react|web|vite|express|node|typescript|javascript|nest|css/.test(name)) {
    Icon = Globe2;
  } else if (/auth|security|otp/.test(name)) Icon = ShieldCheck;
  else if (/server|git|github actions|ci\/cd/.test(name)) Icon = Server;
  else if (/terminal|shell/.test(name)) Icon = Terminal;
  else if (/book/.test(name)) Icon = BookOpen;

  return <Icon aria-hidden="true" className="h-3.5 w-3.5 shrink-0 text-[var(--fg)]" />;
}

export function Projects() {
  const [activeFilter, setActiveFilter] = useState<Project["category"]>("all");
  const filteredProjects =
    activeFilter === "all"
      ? PROJECTS
      : PROJECTS.filter((project) => project.category === activeFilter);

  return (
    <section id="projects" className="relative px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col gap-7 md:mb-14 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="mb-3 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.12em] text-[var(--mut)]">
              <Layers3 className="h-4 w-4 text-[var(--fg)]" />
              Selected work
            </p>
            <h2 className="text-4xl font-semibold tracking-[-0.07em] text-[var(--fg)] sm:text-6xl">
              Built to work.
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-6 text-[var(--mut)] sm:text-base">
              Backend, cloud, and product work.
            </p>
          </div>
          <a
            href="https://github.com/sang-ute"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center gap-2 text-sm font-medium text-[var(--mut)] transition hover:text-[var(--fg)]"
          >
            More on GitHub
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mb-8 flex gap-2 overflow-x-auto pb-2" aria-label="Filter projects">
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveFilter(tab.id)}
                aria-pressed={isActive}
                className={`inline-flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-xs font-medium transition ${
                  isActive
                    ? "border-[var(--fg)] bg-[var(--spot)] text-[var(--fg)]"
                    : "border-[var(--line)] text-[var(--mut)] hover:border-[var(--mut)] hover:text-[var(--fg)]"
                }`}
              >
                <tab.Icon className="h-4 w-4 text-current" />
                {tab.label}
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 items-start gap-5 md:grid-cols-2">
          {filteredProjects.map((project) => {
            return (
              <article
                key={project.title}
                className="editorial-card group flex flex-col self-start rounded-2xl p-5 sm:p-7"
              >
                  <div className="flex flex-col">
                    <div className="flex flex-col">
                      <div className="mb-6 flex items-center justify-between">
                        <div className="grid h-11 w-11 place-items-center rounded-xl border border-[var(--line)] bg-[var(--spot)] text-[var(--fg)]">
                          <ProjectMark category={project.category} />
                        </div>
                        <div className="flex items-center gap-2">
                          {project.badge && (
                            <span className="rounded-full border border-[var(--line)] bg-[var(--spot)] px-2.5 py-1 text-[10px] font-medium uppercase tracking-wide text-[var(--fg)]">
                              {project.badge}
                            </span>
                          )}
                          {project.githubUrl && (
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`Open ${project.title} on GitHub`}
                              className="grid h-9 w-9 place-items-center rounded-full border border-[var(--line)] text-[var(--mut)] transition hover:border-[var(--fg)] hover:text-[var(--fg)]"
                            >
                              <Github className="h-4 w-4" />
                            </a>
                          )}
                        </div>
                      </div>
                      <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--mut)]">
                        {project.categoryLabel}
                      </p>
                      <h3 className="text-2xl font-semibold leading-tight tracking-[-0.06em] text-[var(--fg)] sm:text-3xl">
                        {project.title}
                      </h3>
                      <p className="mt-2 text-sm font-medium text-[var(--fg)]">{project.tagline}</p>
                      <p className="mt-3 text-sm leading-6 text-[var(--mut)]">
                        {project.description}
                      </p>

                      <div className="mt-6 flex flex-wrap gap-2">
                        {project.technologies.map((technology) => (
                          <span
                            key={technology}
                            className="inline-flex items-center gap-1.5 rounded-md border border-[var(--line)] bg-[var(--spot)] px-2.5 py-1 font-mono text-[10px] text-[var(--fg)] transition hover:border-[var(--mut)]"
                          >
                            <TechLogo name={technology} className="h-3 w-3 shrink-0" />
                            {technology}
                          </span>
                        ))}
                      </div>

                      <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-[var(--line)] pt-4">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-xs font-semibold text-[var(--fg)] transition-opacity hover:opacity-65"
                          >
                            View project
                            <ArrowUpRight className="h-3.5 w-3.5" />
                          </a>
                        )}
                        {project.secondaryUrl && (
                          <a
                            href={project.secondaryUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-[var(--mut)] transition hover:text-[var(--fg)]"
                          >
                            {project.secondaryLabel || "Related project"} ↗
                          </a>
                        )}
                      </div>
                    </div>

                    <div className="mt-5 border-t border-[var(--line)] pt-4">
                      <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--mut)]">
                        Highlights
                      </p>
                      <ul className="grid gap-2 sm:grid-cols-2">
                        {project.highlights.slice(0, 2).map((highlight) => (
                          <li
                            key={highlight}
                            className="flex gap-2 text-xs leading-5 text-[var(--mut)] sm:text-sm"
                          >
                            <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--fg)]" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

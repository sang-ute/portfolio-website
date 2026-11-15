"use client";

import React from "react";
import { ArrowUpRight, Eye, ShieldCheck, Zap, Database, CheckCircle2, Award } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolio";
import { Reveal } from "./Reveal";

interface AboutProps {
  onOpenResume: () => void;
}

export function About({ onOpenResume }: AboutProps) {
  const highlights = [
    {
      value: "3.2 / 4.0",
      label: "Cumulative GPA",
      detail: "HCMUTE Software Engineering",
      badge: "Top 20%",
    },
    {
      value: "IELTS 7.5",
      label: "Academic English",
      detail: "CEFR C1 Fluent Certified",
      badge: "International",
    },
    {
      value: "14+ Repos",
      label: "Open Source & Labs",
      detail: "Microservices & AWS Cloud",
      badge: "Active",
    },
    {
      value: "MFi Intern",
      label: "Money Forward Vietnam",
      detail: "Global SaaS Platform Admina",
      badge: "Production",
    },
  ];

  return (
    <section id="about" className="px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
      <div className="mx-auto max-w-[1440px]">
        {/* Section Header */}
        <div className="mb-12 flex items-center justify-between border-b border-[var(--line)] pb-4">
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--mut)] sm:text-xs">
            01 / Profile &amp; Philosophy
          </p>
          <p className="hidden font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--mut)] sm:block">
            Engineering Under The Surface
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1.1fr_.9fr] lg:gap-16 items-center">
          <div>
            <h2 className="max-w-3xl text-4xl font-medium leading-[1.08] tracking-[-0.06em] text-[var(--fg)] sm:text-5xl lg:text-6xl">
              I build what&apos;s{" "}
              <span className="text-[var(--mut)]">under the surface.</span>
            </h2>
            <div className="mt-6 flex items-center gap-4">
              <span className="h-px w-12 bg-[var(--fg)]" />
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--mut)]">
                Performance · Reliability · Scalability
              </span>
            </div>

            <p className="mt-6 max-w-xl text-sm leading-7 text-[var(--mut)] sm:text-base">
              Final-year Software Engineering student at <strong className="text-[var(--fg)]">HCMUTE</strong> and backend engineering intern at <strong className="text-[var(--fg)]">Money Forward Vietnam (MFi)</strong>. I craft scalable backend architectures, containerized microservices, and serverless pipelines on AWS.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button
                type="button"
                onClick={onOpenResume}
                className="group inline-flex items-center gap-2 rounded-full bg-[var(--fg)] px-5 py-2.5 text-xs font-semibold text-[var(--bg)] transition hover:opacity-80"
              >
                <Eye className="h-4 w-4" />
                View Full Résumé
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>
          </div>

          {/* 3 Core Engineering Tenets (Cards instead of text walls) */}
          <div className="space-y-4">
            <div className="liquid-glass rounded-xl p-5 flex items-start gap-4">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-sky-500/30 bg-sky-500/10 text-sky-400">
                <Zap className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-sm font-semibold text-[var(--fg)]">High-Throughput Microservices</h3>
                <p className="mt-1 text-xs leading-relaxed text-[var(--mut)]">
                  Designing decoupled domain services with gRPC binary communication, API gateways, and sub-20ms response latencies.
                </p>
              </div>
            </div>

            <div className="liquid-glass rounded-xl p-5 flex items-start gap-4">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-emerald-500/30 bg-emerald-500/10 text-emerald-400">
                <ShieldCheck className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-sm font-semibold text-[var(--fg)]">AWS Cloud Infrastructure</h3>
                <p className="mt-1 text-xs leading-relaxed text-[var(--mut)]">
                  Event-driven serverless pipelines with S3, Lambda, Rekognition, and DynamoDB, secured with VPCs and IAM policies.
                </p>
              </div>
            </div>

            <div className="liquid-glass rounded-xl p-5 flex items-start gap-4">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-purple-500/30 bg-purple-500/10 text-purple-400">
                <Database className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-sm font-semibold text-[var(--fg)]">Optimized Persistence &amp; Caching</h3>
                <p className="mt-1 text-xs leading-relaxed text-[var(--mut)]">
                  Relational data modeling, composite indexing in MySQL, and ultra-fast in-memory caching with Redis.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Graphical Metric Boxes */}
        <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {highlights.map((item, idx) => (
            <Reveal key={item.label} delay={idx * 0.08} distance={28} amount={0.2} className="h-full">
              <div
                className="h-full liquid-glass rounded-xl p-5 transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-[9px] uppercase tracking-wider text-[var(--mut)]">
                    {item.label}
                  </span>
                  <span className="rounded-full border border-[var(--line)] bg-[var(--spot)] px-2 py-0.5 font-mono text-[8px] uppercase tracking-wider text-[var(--fg)]">
                    {item.badge}
                  </span>
                </div>
                <p className="text-2xl font-semibold tracking-tight text-[var(--fg)] sm:text-3xl">
                  {item.value}
                </p>
                <p className="mt-1 font-mono text-[10px] text-[var(--mut)]">
                  {item.detail}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

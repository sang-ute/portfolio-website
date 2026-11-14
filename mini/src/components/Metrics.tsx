"use client";

import React from "react";
import { Activity, Server, Zap, Shield, Database, Cpu } from "lucide-react";
import { motion } from "framer-motion";

export function Metrics() {
  const telemetryData = [
    {
      label: "p95 API Latency",
      value: "18.4ms",
      sub: "Optimized with Redis & gRPC",
      trend: "-42% vs REST",
      icon: Zap,
      sparkline: "M0 18 Q 15 14, 30 16 T 60 8 T 90 11 T 120 4",
    },
    {
      label: "Cloud Uptime & SLA",
      value: "99.98%",
      sub: "AWS Multi-AZ Availability",
      trend: "Resilient Failover",
      icon: Shield,
      sparkline: "M0 12 Q 20 8, 40 10 T 80 5 T 100 6 T 120 4",
    },
    {
      label: "Database Indexing",
      value: "<12ms",
      sub: "ACID Transactions & Query Tuning",
      trend: "MySQL / DynamoDB",
      icon: Database,
      sparkline: "M0 20 Q 25 12, 50 14 T 80 6 T 105 8 T 120 3",
    },
    {
      label: "Service Architecture",
      value: "10x",
      sub: "Throughput via gRPC Binary RPC",
      trend: "Microservices Cluster",
      icon: Cpu,
      sparkline: "M0 22 Q 20 18, 45 10 T 75 8 T 100 5 T 120 2",
    },
  ];

  return (
    <section className="border-y border-[var(--line)] bg-[var(--card)]/30 backdrop-blur-xl">
      <div className="mx-auto max-w-[1440px] px-5 py-6 sm:px-8 lg:px-12">
        {/* Top telemetry bar */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3 border-b border-[var(--line)]/60 pb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--mut)]">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span>Live Architecture Telemetry &amp; System Benchmarks</span>
          </div>
          <span>Region: ap-southeast-1 · AWS Cloud Native</span>
        </div>

        {/* 4 Telemetry Metrics with Graphs */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {telemetryData.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="liquid-glass group relative flex flex-col justify-between rounded-xl p-5 transition-all duration-300 hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="grid h-8 w-8 place-items-center rounded-lg border border-[var(--line)] bg-[var(--spot)] text-[var(--fg)]">
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 font-mono text-[9px] font-semibold text-emerald-400">
                      {item.trend}
                    </span>
                  </div>

                  <div className="mt-4 flex items-baseline justify-between gap-2">
                    <p className="text-3xl font-semibold tracking-tight text-[var(--fg)]">
                      {item.value}
                    </p>
                    {/* SVG Mini Sparkline Graph */}
                    <div className="h-6 w-24">
                      <svg
                        viewBox="0 0 120 24"
                        fill="none"
                        className="h-full w-full overflow-visible"
                        aria-hidden="true"
                      >
                        <path
                          d={item.sparkline}
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          className="text-emerald-500/80 transition-all duration-300 group-hover:text-emerald-400"
                        />
                        <circle cx="120" cy="3" r="2.5" fill="#10B981" />
                      </svg>
                    </div>
                  </div>

                  <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--mut)]">
                    {item.label}
                  </p>
                </div>

                <p className="mt-3 border-t border-[var(--line)]/50 pt-2.5 text-xs text-[var(--mut)]">
                  {item.sub}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

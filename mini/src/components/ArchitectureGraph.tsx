"use client";

import React, { useState } from "react";
import { Server, Database, Cloud, Network, ShieldCheck, Zap, ArrowRight, HardDrive, Layers } from "lucide-react";
import { motion } from "framer-motion";

export function ArchitectureGraph() {
  const [activeTab, setActiveTab] = useState<"topology" | "benchmarks">("topology");

  return (
    <section className="px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
      <div className="mx-auto max-w-[1440px]">
        {/* Section Header */}
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between border-b border-[var(--line)] pb-4">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--mut)] sm:text-xs">
              03 / System Architecture &amp; Telemetry
            </p>
            <h2 className="mt-2 text-3xl font-medium tracking-tight text-[var(--fg)] sm:text-4xl">
              Engineered for <span className="text-[var(--mut)]">scale &amp; high throughput.</span>
            </h2>
          </div>

          {/* Toggle buttons */}
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setActiveTab("topology")}
              className={`rounded-full px-4 py-1.5 font-mono text-xs transition-all ${
                activeTab === "topology"
                  ? "bg-[var(--fg)] text-[var(--bg)] font-medium"
                  : "border border-[var(--line)] text-[var(--mut)] hover:text-[var(--fg)]"
              }`}
            >
              Network Topology
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("benchmarks")}
              className={`rounded-full px-4 py-1.5 font-mono text-xs transition-all ${
                activeTab === "benchmarks"
                  ? "bg-[var(--fg)] text-[var(--bg)] font-medium"
                  : "border border-[var(--line)] text-[var(--mut)] hover:text-[var(--fg)]"
              }`}
            >
              Performance Graphs
            </button>
          </div>
        </div>

        {activeTab === "topology" ? (
          /* Visual Interactive Topology Canvas */
          <div className="liquid-glass rounded-2xl p-6 sm:p-10">
            {/* Legend / Status */}
            <div className="mb-8 flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-[var(--mut)]">
              <div className="flex items-center gap-6">
                <span className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  Active Microservices Mesh
                </span>
                <span className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-sky-500" />
                  gRPC Protobuf v3 Protocol
                </span>
                <span className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-amber-500" />
                  AWS Cloud Infrastructure
                </span>
              </div>
              <span className="text-[11px] uppercase tracking-wider">Zero-Downtime Multi-AZ Deployment</span>
            </div>

            {/* Visual Node Diagram */}
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
              {/* Node 1: Edge & Gateway */}
              <div className="rounded-xl border border-[var(--line)] bg-[var(--spot)] p-5 relative overflow-hidden group hover:border-[var(--mut)] transition-colors">
                <div className="mb-4 flex items-center justify-between">
                  <span className="grid h-10 w-10 place-items-center rounded-lg border border-sky-500/30 bg-sky-500/10 text-sky-400">
                    <Network className="h-5 w-5" />
                  </span>
                  <span className="font-mono text-[9px] uppercase tracking-widest text-[var(--mut)]">Layer 01</span>
                </div>
                <h3 className="text-base font-semibold text-[var(--fg)]">Edge &amp; API Gateway</h3>
                <p className="mt-1 font-mono text-[10px] text-sky-400">Reverse Proxy · SSL Termination</p>
                <ul className="mt-4 space-y-2 font-mono text-xs text-[var(--mut)]">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
                    <span>JWT &amp; OTP Auth Guard</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
                    <span>Rate Limiting (1,000 req/s)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
                    <span>Cross-Origin Policy (CORS)</span>
                  </li>
                </ul>
                <div className="mt-4 pt-3 border-t border-[var(--line)] flex items-center justify-between text-[11px] font-mono text-[var(--mut)]">
                  <span>Routing delay</span>
                  <span className="text-emerald-400 font-semibold">&lt; 1.2ms</span>
                </div>
              </div>

              {/* Node 2: NestJS & gRPC Cluster */}
              <div className="rounded-xl border border-[var(--line)] bg-[var(--spot)] p-5 relative overflow-hidden group hover:border-[var(--mut)] transition-colors">
                <div className="mb-4 flex items-center justify-between">
                  <span className="grid h-10 w-10 place-items-center rounded-lg border border-emerald-500/30 bg-emerald-500/10 text-emerald-400">
                    <Server className="h-5 w-5" />
                  </span>
                  <span className="font-mono text-[9px] uppercase tracking-widest text-[var(--mut)]">Layer 02</span>
                </div>
                <h3 className="text-base font-semibold text-[var(--fg)]">Microservices Cluster</h3>
                <p className="mt-1 font-mono text-[10px] text-emerald-400">TypeScript · NestJS · Docker</p>
                <ul className="mt-4 space-y-2 font-mono text-xs text-[var(--mut)]">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    <span>gRPC Binary Serialization</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    <span>Booking &amp; Review Workers</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    <span>Admina Data Aggregation</span>
                  </li>
                </ul>
                <div className="mt-4 pt-3 border-t border-[var(--line)] flex items-center justify-between text-[11px] font-mono text-[var(--mut)]">
                  <span>Inter-service RPC</span>
                  <span className="text-emerald-400 font-semibold">&lt; 2.4ms</span>
                </div>
              </div>

              {/* Node 3: Database & Caching Tier */}
              <div className="rounded-xl border border-[var(--line)] bg-[var(--spot)] p-5 relative overflow-hidden group hover:border-[var(--mut)] transition-colors">
                <div className="mb-4 flex items-center justify-between">
                  <span className="grid h-10 w-10 place-items-center rounded-lg border border-purple-500/30 bg-purple-500/10 text-purple-400">
                    <Database className="h-5 w-5" />
                  </span>
                  <span className="font-mono text-[9px] uppercase tracking-widest text-[var(--mut)]">Layer 03</span>
                </div>
                <h3 className="text-base font-semibold text-[var(--fg)]">Persistence &amp; Cache</h3>
                <p className="mt-1 font-mono text-[10px] text-purple-400">MySQL · Redis · DynamoDB</p>
                <ul className="mt-4 space-y-2 font-mono text-xs text-[var(--mut)]">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />
                    <span>In-Memory Redis Cache</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />
                    <span>ACID Stored Procedures</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />
                    <span>Partitioned Key Indexes</span>
                  </li>
                </ul>
                <div className="mt-4 pt-3 border-t border-[var(--line)] flex items-center justify-between text-[11px] font-mono text-[var(--mut)]">
                  <span>Cache hit ratio</span>
                  <span className="text-emerald-400 font-semibold">96.8%</span>
                </div>
              </div>

              {/* Node 4: AWS Cloud & Serverless */}
              <div className="rounded-xl border border-[var(--line)] bg-[var(--spot)] p-5 relative overflow-hidden group hover:border-[var(--mut)] transition-colors">
                <div className="mb-4 flex items-center justify-between">
                  <span className="grid h-10 w-10 place-items-center rounded-lg border border-amber-500/30 bg-amber-500/10 text-amber-400">
                    <Cloud className="h-5 w-5" />
                  </span>
                  <span className="font-mono text-[9px] uppercase tracking-widest text-[var(--mut)]">Layer 04</span>
                </div>
                <h3 className="text-base font-semibold text-[var(--fg)]">AWS Cloud Infrastructure</h3>
                <p className="mt-1 font-mono text-[10px] text-amber-400">S3 · Lambda · Rekognition</p>
                <ul className="mt-4 space-y-2 font-mono text-xs text-[var(--mut)]">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                    <span>S3 Event-Driven Pipeline</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                    <span>Rekognition Vector Matching</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                    <span>VPC, Subnets &amp; IAM Roles</span>
                  </li>
                </ul>
                <div className="mt-4 pt-3 border-t border-[var(--line)] flex items-center justify-between text-[11px] font-mono text-[var(--mut)]">
                  <span>Pipeline uptime</span>
                  <span className="text-emerald-400 font-semibold">99.98%</span>
                </div>
              </div>
            </div>

            {/* Connecting Protocol Pipeline Bar */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3 border-t border-[var(--line)] pt-6 text-xs text-[var(--mut)] font-mono">
              <span className="px-3 py-1 rounded-md border border-[var(--line)] bg-[var(--spot)] text-[var(--fg)]">
                HTTP/2 Client Request
              </span>
              <ArrowRight className="h-3.5 w-3.5 text-sky-400" />
              <span className="px-3 py-1 rounded-md border border-[var(--line)] bg-[var(--spot)] text-[var(--fg)]">
                Kong / NestJS Gateway
              </span>
              <ArrowRight className="h-3.5 w-3.5 text-emerald-400" />
              <span className="px-3 py-1 rounded-md border border-[var(--line)] bg-[var(--spot)] text-[var(--fg)]">
                gRPC Protobuf Mesh
              </span>
              <ArrowRight className="h-3.5 w-3.5 text-purple-400" />
              <span className="px-3 py-1 rounded-md border border-[var(--line)] bg-[var(--spot)] text-[var(--fg)]">
                Redis L1 Cache / MySQL
              </span>
              <ArrowRight className="h-3.5 w-3.5 text-amber-400" />
              <span className="px-3 py-1 rounded-md border border-[var(--line)] bg-[var(--spot)] text-[var(--fg)]">
                AWS S3 / DynamoDB
              </span>
            </div>
          </div>
        ) : (
          /* Performance Graphs & Benchmarks */
          <div className="liquid-glass rounded-2xl p-6 sm:p-10">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              {/* Latency Comparison Chart */}
              <div className="rounded-xl border border-[var(--line)] bg-[var(--spot)] p-6">
                <div className="mb-4 flex items-center justify-between">
                  <h4 className="text-sm font-semibold text-[var(--fg)]">API Protocol Response Latency (p95)</h4>
                  <span className="font-mono text-xs text-emerald-400">-76% Latency</span>
                </div>
                <div className="space-y-4 font-mono text-xs">
                  <div>
                    <div className="flex justify-between mb-1 text-[var(--mut)]">
                      <span>Traditional REST / JSON</span>
                      <span>78.2ms</span>
                    </div>
                    <div className="h-3 w-full rounded-full bg-[var(--line)] overflow-hidden">
                      <div className="h-full bg-amber-500/70 rounded-full" style={{ width: "78%" }} />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-1 text-[var(--mut)]">
                      <span>gRPC Protobuf (Binary RPC)</span>
                      <span className="text-emerald-400 font-bold">18.4ms</span>
                    </div>
                    <div className="h-3 w-full rounded-full bg-[var(--line)] overflow-hidden">
                      <div className="h-full bg-emerald-500 rounded-full" style={{ width: "18%" }} />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-1 text-[var(--mut)]">
                      <span>Redis Cache Hit</span>
                      <span className="text-sky-400 font-bold">1.8ms</span>
                    </div>
                    <div className="h-3 w-full rounded-full bg-[var(--line)] overflow-hidden">
                      <div className="h-full bg-sky-500 rounded-full" style={{ width: "2%" }} />
                    </div>
                  </div>
                </div>
                <p className="mt-5 text-xs text-[var(--mut)] border-t border-[var(--line)]/60 pt-3">
                  Benchmark recorded across simulated 10,000 concurrent requests with keep-alive streaming connections.
                </p>
              </div>

              {/* Database Query Performance Chart */}
              <div className="rounded-xl border border-[var(--line)] bg-[var(--spot)] p-6">
                <div className="mb-4 flex items-center justify-between">
                  <h4 className="text-sm font-semibold text-[var(--fg)]">Database Execution with Composite Indexing</h4>
                  <span className="font-mono text-xs text-emerald-400">10x Speedup</span>
                </div>
                <div className="space-y-4 font-mono text-xs">
                  <div>
                    <div className="flex justify-between mb-1 text-[var(--mut)]">
                      <span>Unindexed Table Scan (1M rows)</span>
                      <span>142ms</span>
                    </div>
                    <div className="h-3 w-full rounded-full bg-[var(--line)] overflow-hidden">
                      <div className="h-full bg-rose-500/70 rounded-full" style={{ width: "95%" }} />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-1 text-[var(--mut)]">
                      <span>Indexed Query Execution</span>
                      <span className="text-purple-400 font-bold">11.8ms</span>
                    </div>
                    <div className="h-3 w-full rounded-full bg-[var(--line)] overflow-hidden">
                      <div className="h-full bg-purple-500 rounded-full" style={{ width: "12%" }} />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-1 text-[var(--mut)]">
                      <span>Redis Materialized View</span>
                      <span className="text-emerald-400 font-bold">0.9ms</span>
                    </div>
                    <div className="h-3 w-full rounded-full bg-[var(--line)] overflow-hidden">
                      <div className="h-full bg-emerald-500 rounded-full" style={{ width: "1%" }} />
                    </div>
                  </div>
                </div>
                <p className="mt-5 text-xs text-[var(--mut)] border-t border-[var(--line)]/60 pt-3">
                  Measurements verified via MySQL `EXPLAIN ANALYZE` and Redis pipeline benchmarking.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

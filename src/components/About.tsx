"use client";

import React from "react";
import { Server, Cloud, Eye } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolio";

interface AboutProps {
  onOpenResume: () => void;
}

export function About({ onOpenResume }: AboutProps) {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-2">
            Introduction
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Engineering Scalable Software & Cloud Systems
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Narrative */}
          <div className="lg:col-span-7 space-y-5 text-slate-600 dark:text-slate-400 leading-relaxed text-base">
            <p>
              I am a final-year Software Engineering student at{" "}
              <strong className="text-slate-900 dark:text-white">
                Ho Chi Minh City University of Technology and Education (HCMUTE)
              </strong>
              . My engineering focus is centered on backend systems, cloud infrastructure on AWS, and reliable distributed microservices.
            </p>
            <p>
              Currently, as a{" "}
              <strong className="text-slate-900 dark:text-white">
                Software Engineer Intern at Money Forward Vietnam (MFi)
              </strong>
              , I contribute to{" "}
              <em className="text-blue-600 dark:text-blue-400 font-semibold not-italic">Admina</em>—a global SaaS
              management platform—working on backend features, microservices integration, and data aggregation pipelines using TypeScript, NestJS, MySQL, Docker, and AWS.
            </p>
            <p>
              My philosophy:{" "}
              <span className="italic text-slate-800 dark:text-slate-200">
                &ldquo;Practical first, curious always, with strict attention to clean architecture, least-privilege cloud security, and developer ergonomics.&rdquo;
              </span>
            </p>

            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/40 dark:bg-slate-900/40">
                <div className="flex items-center space-x-3 text-slate-900 dark:text-white font-semibold text-sm">
                  <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400">
                    <Server className="w-4 h-4" />
                  </div>
                  <span>Backend & Microservices</span>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
                  RESTful APIs, gRPC, API Gateway, Prisma ORM, MySQL, Redis, and authentication pipelines.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/40 dark:bg-slate-900/40">
                <div className="flex items-center space-x-3 text-slate-900 dark:text-white font-semibold text-sm">
                  <div className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400">
                    <Cloud className="w-4 h-4" />
                  </div>
                  <span>Cloud & Serverless</span>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
                  AWS EC2, S3, Lambda, VPC, IAM least-privilege, Route 53, Rekognition, and Docker containers.
                </p>
              </div>
            </div>
          </div>

          {/* Quick Attributes Card */}
          <div className="lg:col-span-5">
            <div className="glass-card rounded-2xl p-6 space-y-4">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white pb-3 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
                <span>Personal Profile</span>
                <span className="text-xs font-normal text-slate-400 font-mono">HCMUTE Software Eng</span>
              </h3>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between py-1 border-b border-slate-100 dark:border-slate-800/60">
                  <span className="text-slate-500 dark:text-slate-400">Full Name</span>
                  <span className="font-medium text-slate-900 dark:text-slate-200">{PERSONAL_INFO.vietnameseName}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-100 dark:border-slate-800/60">
                  <span className="text-slate-500 dark:text-slate-400">Role</span>
                  <span className="font-medium text-blue-600 dark:text-blue-400">{PERSONAL_INFO.role}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-100 dark:border-slate-800/60">
                  <span className="text-slate-500 dark:text-slate-400">Affiliation</span>
                  <span className="font-medium text-slate-900 dark:text-slate-200">{PERSONAL_INFO.company}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-100 dark:border-slate-800/60">
                  <span className="text-slate-500 dark:text-slate-400">University</span>
                  <span className="font-medium text-slate-900 dark:text-slate-200">HCMUTE</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-100 dark:border-slate-800/60">
                  <span className="text-slate-500 dark:text-slate-400">Expected Graduation</span>
                  <span className="font-medium text-slate-900 dark:text-slate-200">05 / 2026</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-100 dark:border-slate-800/60">
                  <span className="text-slate-500 dark:text-slate-400">English Level</span>
                  <span className="font-medium text-emerald-600 dark:text-emerald-400 font-bold">{PERSONAL_INFO.englishLevel}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-500 dark:text-slate-400">GitHub</span>
                  <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="font-medium text-blue-600 hover:underline">
                    github.com/sang-ute
                  </a>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={onOpenResume}
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-950 font-semibold text-xs text-center hover:opacity-90 transition-opacity flex items-center justify-center space-x-2"
                >
                  <Eye className="w-4 h-4" />
                  <span>Inspect Full Resume & Experience</span>
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

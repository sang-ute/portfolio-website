"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  Mail,
  MapPin,
  GraduationCap,
  Languages,
  Github,
  Linkedin,
  Copy,
  CheckCircle,
  Cloud,
  Server,
  Database,
  Boxes,
} from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolio";

interface HeroProps {
  onNotify: (msg: string) => void;
}

export function Hero({ onNotify }: HeroProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    onNotify(`Copied: ${PERSONAL_INFO.email}`);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[380px] bg-gradient-to-tr from-blue-500/20 via-indigo-500/15 to-purple-500/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            {/* Status Pill */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-blue-100/80 text-blue-800 dark:bg-blue-950/80 dark:text-blue-300 border border-blue-300 dark:border-blue-800 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span>Software Engineer Intern @ Money Forward Vietnam</span>
            </div>

            {/* Heading */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
                Hi, I'm <span className="gradient-text">{PERSONAL_INFO.name}</span>
              </h1>
              <p className="mt-2 text-lg sm:text-xl font-medium text-slate-600 dark:text-slate-300">
                Backend Developer & Cloud Architecture Enthusiast
              </p>
            </div>

            {/* Summary */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {PERSONAL_INFO.summary}
            </p>

            {/* Quick Pills */}
            <div className="flex flex-wrap gap-2.5 justify-center lg:justify-start text-xs font-medium text-slate-600 dark:text-slate-300">
              <span className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <MapPin className="w-3.5 h-3.5 text-rose-500" />
                <span>{PERSONAL_INFO.location}</span>
              </span>
              <span className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <GraduationCap className="w-3.5 h-3.5 text-blue-500" />
                <span>HCMUTE • GPA: 3.2 / 4.0</span>
              </span>
              <span className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <Languages className="w-3.5 h-3.5 text-indigo-500" />
                <span>{PERSONAL_INFO.englishLevel}</span>
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-2">
              <a
                href="#projects"
                className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 hover:-translate-y-0.5 transition-all"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.resumePdf}
                download="Nguyen_Quang_Sang_CV.pdf"
                className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl border border-slate-300 dark:border-slate-700 hover:border-blue-500 bg-white/80 dark:bg-slate-900/80 font-semibold text-sm hover:-translate-y-0.5 transition-all shadow-sm"
              >
                <Download className="w-4 h-4 text-blue-500" />
                <span>Download CV (PDF)</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 font-semibold text-sm transition-all"
              >
                <Mail className="w-4 h-4 text-emerald-500" />
                <span>Get In Touch</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-sm font-medium text-slate-600 dark:text-slate-400">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                <Github className="w-5 h-5" />
                <span>@sang-ute</span>
              </a>

              <span className="text-slate-300 dark:text-slate-700">•</span>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Linkedin className="w-5 h-5 text-blue-600" />
                <span>LinkedIn</span>
              </a>

              <span className="text-slate-300 dark:text-slate-700">•</span>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center space-x-1.5 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                title="Click to copy email"
              >
                {copied ? <CheckCircle className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                <span>{PERSONAL_INFO.email}</span>
              </button>
            </div>
          </motion.div>

          {/* Hero Right Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-72 sm:w-80 lg:w-96">
              {/* Outer Glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-pink-500 rounded-3xl blur-lg opacity-40 animate-pulse" />

              <div className="relative glass-card rounded-2xl p-4 sm:p-5 border border-slate-200/80 dark:border-slate-800">
                <div className="overflow-hidden rounded-xl bg-slate-200 dark:bg-slate-800 aspect-square relative shadow-inner">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={PERSONAL_INFO.avatar}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = PERSONAL_INFO.avatarFallback;
                    }}
                    alt={PERSONAL_INFO.name}
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent flex items-end p-4">
                    <div className="text-white">
                      <div className="text-sm font-bold">{PERSONAL_INFO.name}</div>
                      <div className="text-xs text-blue-200">{PERSONAL_INFO.role}</div>
                    </div>
                  </div>
                </div>

                {/* Tech Pills */}
                <div className="mt-4 grid grid-cols-2 gap-2 text-xs font-semibold">
                  <div className="p-2 rounded-lg bg-blue-50/80 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-800 flex items-center space-x-2">
                    <Cloud className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    <span>AWS Cloud</span>
                  </div>
                  <div className="p-2 rounded-lg bg-indigo-50/80 dark:bg-indigo-950/50 border border-indigo-200 dark:border-indigo-800 flex items-center space-x-2">
                    <Server className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                    <span>NestJS & Node</span>
                  </div>
                  <div className="p-2 rounded-lg bg-emerald-50/80 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 flex items-center space-x-2">
                    <Database className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    <span>Prisma & SQL</span>
                  </div>
                  <div className="p-2 rounded-lg bg-purple-50/80 dark:bg-purple-950/50 border border-purple-200 dark:border-purple-800 flex items-center space-x-2">
                    <Boxes className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                    <span>Docker & gRPC</span>
                  </div>
                </div>
              </div>

              {/* Decorative floating stickers */}
              <div className="hidden sm:flex absolute -top-4 -right-4 p-3 rounded-2xl glass-card shadow-xl animate-float-slow items-center justify-center">
                <span className="text-xl">⚡</span>
              </div>
              <div className="hidden sm:flex absolute -bottom-4 -left-4 p-3 rounded-2xl glass-card shadow-xl animate-float-slow items-center justify-center">
                <span className="text-xl">🚀</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

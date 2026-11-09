"use client";

import React, { useState } from "react";
import { CheckCircle } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Metrics } from "@/components/Metrics";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Education } from "@/components/Education";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { ResumeModal } from "@/components/ResumeModal";
import { Reveal } from "@/components/Reveal";
import { SplashIntro } from "@/components/SplashIntro";

export default function Home() {
  const [resumeOpen, setResumeOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [introReplayKey, setIntroReplayKey] = useState(0);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2500);
  };

  return (
    <div className="relative min-h-screen bg-[var(--bg)] text-[var(--fg)] selection:bg-blue-500 selection:text-white transition-colors duration-300">
      <SplashIntro replayKey={introReplayKey} />
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-8 right-8 z-50 glass-card px-5 py-3 rounded-xl shadow-xl flex items-center space-x-3 text-sm font-medium border border-blue-500/30 text-slate-800 dark:text-slate-100 animate-in fade-in slide-in-from-bottom-5 duration-200">
          <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Navigation */}
      <Navbar
        onOpenResume={() => setResumeOpen(true)}
        onReplayIntro={() => setIntroReplayKey((key) => key + 1)}
      />

      {/* Main Sections */}
      <main className="relative z-10">
        <Hero />
        <Reveal><Metrics /></Reveal>
        <Reveal delay={0.04}><About onOpenResume={() => setResumeOpen(true)} /></Reveal>
        <Reveal><Experience /></Reveal>
        <Reveal delay={0.04}><Projects /></Reveal>
        <Reveal><Skills /></Reveal>
        <Reveal delay={0.04}><Education /></Reveal>
        <Reveal><Contact onNotify={showToast} /></Reveal>
      </main>

      {/* Footer */}
      <Footer />

      {/* Resume Modal */}
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </div>
  );
}

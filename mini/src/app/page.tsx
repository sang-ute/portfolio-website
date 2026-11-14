"use client";

import React, { useState } from "react";
import { CheckCircle } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Metrics } from "@/components/Metrics";
import { About } from "@/components/About";
import { ArchitectureGraph } from "@/components/ArchitectureGraph";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Education } from "@/components/Education";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { ResumeModal } from "@/components/ResumeModal";
import { Reveal } from "@/components/Reveal";
import { SplashIntro } from "@/components/SplashIntro";
import { CustomCursor } from "@/components/CustomCursor";
import { AmbientMesh } from "@/components/AmbientMesh";

export default function Home() {
  const [resumeOpen, setResumeOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [introReplayKey, setIntroReplayKey] = useState(0);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 2500);
  };

  return (
    <div className="relative min-h-screen bg-[var(--bg)] text-[var(--fg)] transition-colors duration-300">
      {/* Ambient & cursor layers */}
      <CustomCursor />
      <AmbientMesh />

      {/* Splash intro */}
      <SplashIntro replayKey={introReplayKey} />

      {/* Toast notification */}
      {toastMessage && (
        <div className="fixed bottom-8 right-8 z-50 glass-card flex items-center gap-3 rounded-xl border border-[var(--glass-rim)] px-5 py-3 text-sm font-medium text-[var(--fg)] shadow-xl">
          <CheckCircle className="h-4 w-4 shrink-0 text-[var(--fg)]" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Navigation */}
      <Navbar
        onOpenResume={() => setResumeOpen(true)}
        onReplayIntro={() => setIntroReplayKey((k) => k + 1)}
      />

      {/* Main content */}
      <main className="relative z-10">
        <Hero />
        <Reveal><Metrics /></Reveal>
        <Reveal delay={0.04}><About onOpenResume={() => setResumeOpen(true)} /></Reveal>
        <Reveal><ArchitectureGraph /></Reveal>
        <Reveal><Experience /></Reveal>
        <Reveal delay={0.04}><Projects /></Reveal>
        <Reveal><Skills /></Reveal>
        <Reveal delay={0.04}><Education /></Reveal>
        <Reveal><Contact onNotify={showToast} /></Reveal>
      </main>

      {/* Footer */}
      <Footer />

      {/* Resume modal */}
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </div>
  );
}

"use client";

import React from "react";
import { motion, useScroll, useTransform, useSpring, useReducedMotion } from "framer-motion";

export function GlassSunbeamScroll() {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();

  // Smooth physics spring for realistic liquid inertia as user scrolls
  const smoothY = useSpring(scrollYProgress, {
    stiffness: 45,
    damping: 18,
    restDelta: 0.001,
  });

  // Dynamic sunbeam light sweeps down and shifts angle through glass
  const sunBeamY = useTransform(smoothY, [0, 1], ["-10vh", "70vh"]);
  const sunBeamRotate = useTransform(smoothY, [0, 1], [-22, 18]);
  const sunBeamOpacity = useTransform(smoothY, [0, 0.25, 0.5, 0.85, 1], [0.85, 1, 0.75, 0.95, 0.7]);
  const chromaticShift = useTransform(smoothY, [0, 1], ["0%", "100%"]);
  const causticsScale = useTransform(smoothY, [0, 1], [1, 1.25]);

  if (reduceMotion) {
    return (
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-[20%] right-[-10%] h-[70vw] w-[70vw] rounded-full bg-gradient-to-br from-amber-400/10 via-rose-400/5 to-transparent blur-[120px]" />
      </div>
    );
  }

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* Primary Warm Sunlight Flare (Sun shining through architectural glass) */}
      <motion.div
        style={{
          y: sunBeamY,
          rotate: sunBeamRotate,
          opacity: sunBeamOpacity,
        }}
        className="absolute -top-[15%] right-[-8%] h-[85vw] w-[85vw] max-h-[1100px] max-w-[1100px] origin-top-right will-change-transform"
      >
        {/* Intense core sun glare */}
        <div className="absolute right-[12%] top-[10%] h-48 w-48 rounded-full bg-radial from-amber-200/25 via-amber-400/10 to-transparent blur-3xl dark:from-amber-300/20 dark:via-orange-500/10" />

        {/* Wide radiant sunlight cone / shafts */}
        <div className="h-full w-full rounded-full bg-[radial-gradient(ellipse_at_top_right,rgba(255,241,190,0.18)_0%,rgba(254,215,170,0.1)_25%,rgba(251,146,60,0.04)_50%,transparent_75%)] blur-[100px] dark:bg-[radial-gradient(ellipse_at_top_right,rgba(253,224,71,0.12)_0%,rgba(249,115,22,0.06)_30%,rgba(168,85,247,0.03)_55%,transparent_75%)]" />
      </motion.div>

      {/* Prismatic Chromatic Dispersion Shaft (Refraction through crystal glass edges) */}
      <motion.div
        style={{
          y: useTransform(smoothY, [0, 1], ["5vh", "90vh"]),
          scale: causticsScale,
        }}
        className="absolute -left-[15%] top-[10%] h-[60vw] w-[60vw] max-h-[850px] max-w-[850px] will-change-transform"
      >
        <div className="h-full w-full rounded-full bg-[radial-gradient(circle,rgba(56,189,248,0.12)_0%,rgba(99,102,241,0.08)_35%,rgba(236,72,153,0.04)_60%,transparent_75%)] blur-[110px]" />
      </motion.div>

      {/* Floating Glass Caustic Glare Band (Subtle diagonal sun streak across the viewport) */}
      <motion.div
        style={{
          y: useTransform(smoothY, [0, 1], ["-20%", "120%"]),
          opacity: useTransform(smoothY, [0, 0.3, 0.7, 1], [0.3, 0.65, 0.45, 0.2]),
        }}
        className="absolute inset-x-0 h-[40vh] -rotate-12 bg-gradient-to-b from-transparent via-white/[0.035] to-transparent blur-2xl dark:via-white/[0.02]"
      />

      {/* Glass Frost Refraction Texture overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.06),rgba(255,255,255,0))]" />
    </div>
  );
}

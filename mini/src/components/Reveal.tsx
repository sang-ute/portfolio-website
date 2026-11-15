"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion, type Variants } from "framer-motion";

type Edge = "below" | "above";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  /** Extra delay (s) applied when entering — use `index * 0.08` to stagger siblings. */
  delay?: number;
  /** Travel distance in px. */
  distance?: number;
  /** Starting scale while hidden. */
  scale?: number;
  /**
   * How much of the element must be visible before it counts as "in view".
   * Keep the default ("some") for tall sections: a numeric ratio can never be
   * reached by an element much taller than the viewport.
   */
  amount?: "some" | "all" | number;
}

const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * Bidirectional scroll reveal.
 *
 * Replays every time the element re-enters the viewport, and enters from the
 * side it scrolled in from: rising from below while scrolling down, dropping
 * in from above while scrolling up. Content stays in the DOM at all times, so
 * it remains fully crawlable.
 */
export function Reveal({
  children,
  className = "",
  delay = 0,
  distance = 40,
  scale = 0.985,
  amount = "some",
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const inView = useInView(ref, { amount, margin: "0px 0px -8% 0px" });
  const [edge, setEdge] = useState<Edge>("below");

  useEffect(() => {
    if (inView || !ref.current) return;
    // Park the element on the side it left through, so its next entrance
    // comes from that same direction.
    setEdge(ref.current.getBoundingClientRect().top < 0 ? "above" : "below");
  }, [inView]);

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const variants: Variants = {
    hidden: (side: Edge) => ({
      opacity: 0,
      y: side === "above" ? -distance : distance,
      scale,
      transition: { duration: 0.35, ease: "easeIn" },
    }),
    shown: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.85, delay, ease: EASE },
    },
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      custom={edge}
      variants={variants}
      initial="hidden"
      animate={inView ? "shown" : "hidden"}
    >
      {children}
    </motion.div>
  );
}

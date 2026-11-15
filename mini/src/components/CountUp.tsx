"use client";

import React, { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";

/**
 * Counts the first number inside `value` up from zero whenever it scrolls into
 * view, keeping any prefix/suffix ("<12ms", "99.98%", "IELTS 7.5") intact.
 * The final text is rendered on the server, so crawlers see the real value.
 */
export function CountUp({ value, duration = 1.4, className }: { value: string; duration?: number; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const reduceMotion = useReducedMotion();
  const inView = useInView(ref, { amount: 0.6 });
  const [text, setText] = useState(value);

  const match = value.match(/\d+(?:\.\d+)?/);

  useEffect(() => {
    if (!match || reduceMotion) return;
    if (!inView) {
      // Park at zero off-screen so the next entrance counts up again.
      setText(value.replace(match[0], (0).toFixed(decimals(match[0]))));
      return;
    }
    const target = parseFloat(match[0]);
    const d = decimals(match[0]);
    const controls = animate(0, target, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setText(value.replace(match[0], v.toFixed(d))),
    });
    return () => controls.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, value, reduceMotion]);

  return (
    <span ref={ref} className={`tabular-nums ${className ?? ""}`}>
      {text}
    </span>
  );
}

function decimals(n: string) {
  return n.includes(".") ? n.split(".")[1].length : 0;
}

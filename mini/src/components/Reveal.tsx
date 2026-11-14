"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
}

export function Reveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: RevealProps) {
  const reduceMotion = useReducedMotion();

  const getOffset = () => {
    switch (direction) {
      case "up":
        return { y: 32, x: 0 };
      case "down":
        return { y: -32, x: 0 };
      case "left":
        return { x: 32, y: 0 };
      case "right":
        return { x: -32, y: 0 };
      default:
        return { x: 0, y: 0 };
    }
  };

  const offset = getOffset();

  return (
    <motion.div
      className={className}
      initial={
        reduceMotion
          ? false
          : {
              opacity: 0,
              ...offset,
              filter: "blur(6px)",
            }
      }
      whileInView={
        reduceMotion
          ? undefined
          : {
              opacity: 1,
              x: 0,
              y: 0,
              filter: "blur(0px)",
            }
      }
      viewport={{ once: true, amount: 0.1, margin: "0px 0px -40px 0px" }}
      transition={{
        duration: 0.85,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

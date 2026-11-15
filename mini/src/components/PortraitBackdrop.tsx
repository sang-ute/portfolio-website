"use client";

import React from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { PERSONAL_INFO } from "@/data/portfolio";

/**
 * Fixed backdrop behind the whole page.
 *
 * - A sharp, edge-faded portrait that owns the hero and dissolves as you scroll.
 * - A soft colour field generated from the same photo, which stays put so the
 *   liquid-glass surfaces always have something to refract.
 *
 * Scroll-linked, so everything reverses when scrolling back up.
 */
export function PortraitBackdrop() {
  const reduceMotion = useReducedMotion();
  const { scrollY } = useScroll();

  const sharpOpacity = useTransform(scrollY, [0, 650], [1, 0]);
  const sharpScale = useTransform(scrollY, [0, 650], [1, reduceMotion ? 1 : 1.06]);
  const sharpY = useTransform(scrollY, [0, 650], [0, reduceMotion ? 0 : -50]);
  const fieldOpacity = useTransform(scrollY, [0, 650], [0.6, 1]);

  const { portraitBackdrop: img } = PERSONAL_INFO;

  return (
    <div className="portrait-backdrop pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <motion.div className="portrait-field" style={{ opacity: fieldOpacity }} aria-hidden="true">
        <img src={img.gradient} alt="" width={48} height={52} decoding="async" />
      </motion.div>

      <motion.div
        className="portrait-sharp"
        style={{ opacity: sharpOpacity, scale: sharpScale, y: sharpY }}
      >
        <picture>
          <source srcSet={img.webp} type="image/webp" />
          <img
            src={img.jpg}
            alt={img.alt}
            width={img.width}
            height={img.height}
            fetchPriority="high"
            decoding="async"
          />
        </picture>
      </motion.div>
    </div>
  );
}

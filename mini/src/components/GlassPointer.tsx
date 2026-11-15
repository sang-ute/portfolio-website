"use client";

import { useEffect } from "react";

const GLASS = ".liquid-glass, .editorial-card, .glass-card, .glass-pill";

/**
 * Feeds the pointer position into the hovered glass surface as --mx / --my,
 * so its specular highlight follows the cursor like light on real glass.
 * One passive listener for the whole page, throttled to animation frames.
 */
export function GlassPointer() {
  useEffect(() => {
    if (!window.matchMedia("(hover: hover)").matches) return;
    let frame = 0;
    let last: PointerEvent | null = null;

    const apply = () => {
      frame = 0;
      if (!last) return;
      const el = (last.target as Element | null)?.closest?.(GLASS) as HTMLElement | null;
      if (!el) return;
      const r = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${last.clientX - r.left}px`);
      el.style.setProperty("--my", `${last.clientY - r.top}px`);
    };

    const onMove = (e: PointerEvent) => {
      last = e;
      if (!frame) frame = requestAnimationFrame(apply);
    };

    document.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      document.removeEventListener("pointermove", onMove);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return null;
}

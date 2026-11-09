"use client";

import React, { useEffect, useRef } from "react";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    let mouseX = -100;
    let mouseY = -100;
    let currentX = -100;
    let currentY = -100;
    let isHovering = false;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursor.setAttribute("data-on", "1");

      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.closest("a") ||
          target.closest("button") ||
          target.closest("input") ||
          target.closest("textarea") ||
          target.closest(".chip") ||
          target.closest("[data-hover]"))
      ) {
        isHovering = true;
      } else {
        isHovering = false;
      }
    };

    const handleMouseLeave = () => {
      cursor.removeAttribute("data-on");
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    let animationFrameId: number;

    const loop = () => {
      // Smooth lerp interpolation
      currentX += (mouseX - currentX) * 0.18;
      currentY += (mouseY - currentY) * 0.18;

      cursor.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;

      if (isHovering) {
        cursor.setAttribute("data-big", "1");
      } else {
        cursor.removeAttribute("data-big");
      }

      animationFrameId = requestAnimationFrame(loop);
    };

    loop();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <div ref={cursorRef} className="cursor-dot" aria-hidden="true" />;
}

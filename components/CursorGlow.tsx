"use client";

import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: -100, y: -100 });
  const currentPos = useRef({ x: -100, y: -100 });
  const trailPos = useRef({ x: -100, y: -100 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseLeave = () => {
      mousePos.current = { x: -200, y: -200 };
    };

    let animationId: number;

    const animate = () => {
      // Main glow follows quickly
      currentPos.current.x +=
        (mousePos.current.x - currentPos.current.x) * 0.15;
      currentPos.current.y +=
        (mousePos.current.y - currentPos.current.y) * 0.15;

      // Trail follows more slowly
      trailPos.current.x +=
        (mousePos.current.x - trailPos.current.x) * 0.08;
      trailPos.current.y +=
        (mousePos.current.y - trailPos.current.y) * 0.08;

      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${currentPos.current.x - 150}px, ${currentPos.current.y - 150}px)`;
      }
      if (trailRef.current) {
        trailRef.current.style.transform = `translate(${trailPos.current.x - 200}px, ${trailPos.current.y - 200}px)`;
      }

      animationId = requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    animationId = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <>
      {/* Main glow — primary purple, smaller and brighter */}
      <div
        ref={glowRef}
        className="pointer-events-none fixed top-0 left-0 z-30 w-[300px] h-[300px] rounded-full opacity-20 dark:opacity-15 mix-blend-multiply dark:mix-blend-screen will-change-transform"
        style={{
          background:
            "radial-gradient(circle, rgba(106,46,145,0.4) 0%, rgba(106,46,145,0.1) 40%, transparent 70%)",
          transform: "translate(-200px, -200px)",
        }}
      />
      {/* Trail — accent coral, larger and softer */}
      <div
        ref={trailRef}
        className="pointer-events-none fixed top-0 left-0 z-30 w-[400px] h-[400px] rounded-full opacity-15 dark:opacity-10 mix-blend-multiply dark:mix-blend-screen will-change-transform"
        style={{
          background:
            "radial-gradient(circle, rgba(244,162,162,0.35) 0%, rgba(244,162,162,0.08) 45%, transparent 70%)",
          transform: "translate(-200px, -200px)",
        }}
      />
    </>
  );
}

"use client";

import { useMemo } from "react";

export default function GoldenParticles() {
  const particles = useMemo(() => {
    return Array.from({ length: 45 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 8,
      size: Math.random() * 5 + 2,
      duration: Math.random() * 8 + 6,
    }));
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: -1,
      }}
    >
      {particles.map((p) => (
        <span
          key={p.id}
          style={{
            position: "absolute",
            left: `${p.left}%`,
            bottom: "-20px",
            width: p.size,
            height: p.size,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, #fff3b0 0%, #d4af37 45%, transparent 75%)",
            filter: "blur(0.5px)",
            animation: `goldFloat ${p.duration}s linear ${p.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}
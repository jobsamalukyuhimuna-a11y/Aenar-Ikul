"use client";

import { useEffect, useState } from "react";

export default function StarsBackground() {
  const [stars, setStars] = useState<
    {
      id: number;
      left: number;
      top: number;
      size: number;
      delay: number;
    }[]
  >([]);

  useEffect(() => {
    const generated = Array.from({ length: 80 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 3 + 1,
      delay: Math.random() * 8,
    }));

    setStars(generated);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 0,
      }}
    >

      {stars.map((star) => (
        <span
          key={star.id}
          style={{
            position: "absolute",
            left: `${star.left}%`,
            top: `${star.top}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            background: "#fff",
            borderRadius: "50%",
            opacity: 0.7,
            animation: `starFloat 8s ease-in-out infinite`,
            animationDelay: `${star.delay}s`,
          }}
        />
      ))}


      <div
        style={{
          position:"absolute",
          inset:0,
          background:
          "radial-gradient(circle at center,rgba(215,181,109,.12),transparent 55%)",
        }}
      />

    </div>
  );
}
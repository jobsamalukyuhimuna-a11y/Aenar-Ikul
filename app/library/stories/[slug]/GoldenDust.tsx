"use client";

import { useEffect, useState } from "react";

export default function GoldenDust() {
  const [particles, setParticles] = useState<
    {
      left: number;
      top: number;
      size: number;
      delay: number;
      duration: number;
    }[]
  >([]);

  useEffect(() => {
    setParticles(
      Array.from({ length: 40 }, () => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: 2 + Math.random() * 5,
        delay: Math.random() * 6,
        duration: 6 + Math.random() * 8,
      }))
    );
  }, []);

  return (
    <>
      <style>{`
        @keyframes dustFloat {
          0%{
            transform:translateY(0px);
            opacity:0;
          }

          20%{
            opacity:.8;
          }

          50%{
            transform:translateY(-35px);
            opacity:.5;
          }

          100%{
            transform:translateY(-70px);
            opacity:0;
          }
        }
      `}</style>

      <div
        style={{
          position: "fixed",
          inset: 0,
          overflow: "hidden",
          pointerEvents: "none",
          zIndex: 1,
        }}
      >
        {particles.map((p, i) => (
          <span
            key={i}
            style={{
              position: "absolute",
              left: `${p.left}%`,
              top: `${p.top}%`,
              width: p.size,
              height: p.size,
              borderRadius: "50%",
              background: "#ffd86e",
              boxShadow: "0 0 10px #ffd86e",
              animation: `dustFloat ${p.duration}s linear infinite`,
              animationDelay: `${p.delay}s`,
              opacity: 0,
            }}
          />
        ))}
      </div>
    </>
  );
}
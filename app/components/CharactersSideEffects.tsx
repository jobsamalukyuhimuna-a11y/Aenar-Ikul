"use client";

import { useEffect, useState } from "react";

type Particle = {
  top: number;
  left: number;
  size: number;
  delay: number;
  duration: number;
};

export default function CharactersSideEffects() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    setParticles(
      Array.from({ length: 55 }, () => ({
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: 2 + Math.random() * 5,
        delay: Math.random() * 6,
        duration: 4 + Math.random() * 5,
      }))
    );
  }, []);

  return (
    <>
      <style>{`
        @keyframes rise{
          0%{
            transform:translateY(30px);
            opacity:0;
          }

          50%{
            opacity:.9;
          }

          100%{
            transform:translateY(-40px);
            opacity:0;
          }
        }

        @keyframes crystal{
          0%{
            transform:rotate(0deg) scale(1);
          }

          50%{
            transform:rotate(180deg) scale(1.15);
          }

          100%{
            transform:rotate(360deg) scale(1);
          }
        }

        @keyframes glow{
          0%,100%{
            opacity:.25;
            transform:scale(1);
          }

          50%{
            opacity:.55;
            transform:scale(1.1);
          }
        }
      `}</style>
            {/* LEFT SIDE */}

      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: "20%",
          height: "100%",
          overflow: "hidden",
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "10%",
            left: "-80px",
            width: 320,
            height: 320,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(215,181,109,.22), transparent 70%)",
            filter: "blur(45px)",
            animation: "glow 10s ease-in-out infinite",
          }}
        />

        <div
          style={{
            position: "absolute",
            top: "30%",
            left: "45px",
            width: 24,
            height: 24,
            transform: "rotate(45deg)",
            background:
              "linear-gradient(135deg,#ffe9a8,#d7b56d)",
            boxShadow: "0 0 18px rgba(215,181,109,.7)",
            animation: "crystal 10s linear infinite",
          }}
        />

        <div
          style={{
            position: "absolute",
            top: "62%",
            left: "90px",
            width: 18,
            height: 18,
            transform: "rotate(45deg)",
            background:
              "linear-gradient(135deg,#fff5d0,#c79d42)",
            boxShadow: "0 0 15px rgba(215,181,109,.6)",
            animation: "crystal 14s linear infinite reverse",
          }}
        />

        {particles.map((p, i) => (
          <span
            key={i}
            style={{
              position: "absolute",
              top: `${p.top}%`,
              left: `${p.left}%`,
              width: p.size,
              height: p.size * 6,
              borderRadius: "999px",
              background:
                "linear-gradient(to top, transparent, #d7b56d, transparent)",
              opacity: .65,
              animation: `rise ${p.duration}s ease-in-out infinite`,
              animationDelay: `${p.delay}s`,
            }}
          />
        ))}
      </div>
            {/* RIGHT SIDE */}

      <div
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          width: "20%",
          height: "100%",
          overflow: "hidden",
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "18%",
            right: "-70px",
            width: 300,
            height: 300,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(255,210,120,.18), transparent 70%)",
            filter: "blur(45px)",
            animation: "glow 9s ease-in-out infinite",
          }}
        />

        <div
          style={{
            position: "absolute",
            top: "24%",
            right: "60px",
            width: 28,
            height: 28,
            transform: "rotate(45deg)",
            background:
              "linear-gradient(135deg,#fff3c0,#d7b56d)",
            boxShadow: "0 0 20px rgba(215,181,109,.8)",
            animation: "crystal 12s linear infinite",
          }}
        />

        <div
          style={{
            position: "absolute",
            top: "58%",
            right: "95px",
            width: 16,
            height: 16,
            transform: "rotate(45deg)",
            background:
              "linear-gradient(135deg,#fff8de,#c79d42)",
            boxShadow: "0 0 15px rgba(215,181,109,.65)",
            animation: "crystal 15s linear infinite reverse",
          }}
        />

        {particles.map((p, i) => (
          <span
            key={i}
            style={{
              position: "absolute",
              top: `${p.top}%`,
              left: `${p.left}%`,
              width: p.size,
              height: p.size * 6,
              borderRadius: "999px",
              background:
                "linear-gradient(to top, transparent, #ffe7a0, transparent)",
              opacity: 0.65,
              animation: `rise ${p.duration}s ease-in-out infinite`,
              animationDelay: `${p.delay}s`,
            }}
          />
        ))}
      </div>
          </>
  );
}
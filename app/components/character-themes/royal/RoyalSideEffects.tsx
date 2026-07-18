"use client";

import { useEffect, useState } from "react";

type Star = {
  top: number;
  left: number;
  size: number;
  delay: number;
};

export default function RoyalSideEffects() {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    setStars(
      Array.from({ length: 40 }, () => ({
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: 2 + Math.random() * 4,
        delay: Math.random() * 4,
      }))
    );
  }, []);

  return (
    <>
      <style>{`
        @keyframes twinkle{
          0%,100%{
            opacity:.15;
            transform:scale(1);
          }

          50%{
            opacity:1;
            transform:scale(1.6);
          }
        }

        @keyframes floatPlanet{
          0%{
            transform:translateY(0px);
          }

          50%{
            transform:translateY(-18px);
          }

          100%{
            transform:translateY(0px);
          }
        }

        @keyframes nebula{
          0%{
            transform:scale(1);
            opacity:.35;
          }

          50%{
            transform:scale(1.15);
            opacity:.55;
          }

          100%{
            transform:scale(1);
            opacity:.35;
          }
        }
      `}</style>

      {/* LEFT */}

      <div
        style={{
          position: "absolute",
          left: 0,
          top: 40,
          width: "22%",
          height: "760px",
          overflow: "hidden",
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: 260,
            height: 260,
            borderRadius: "50%",
            background:
              "radial-gradient(circle,#6940ff55,transparent 70%)",
            filter: "blur(30px)",
            animation: "nebula 12s ease-in-out infinite",
          }}
        />

        <div
          style={{
            position: "absolute",
            top: 80,
            left: 70,
            width: 70,
            height: 70,
            borderRadius: "50%",
            background:
              "radial-gradient(circle,#8db9ff,#3046b5 70%,transparent)",
            boxShadow: "0 0 40px #7ca9ff",
            animation: "floatPlanet 8s ease-in-out infinite",
          }}
        />

        {stars.map((s, i) => (
          <span
            key={i}
            style={{
              position: "absolute",
              top: `${s.top}%`,
              left: `${s.left}%`,
              width: s.size,
              height: s.size,
              borderRadius: "50%",
              background: "#ffe08a",
              boxShadow: "0 0 8px #ffe08a",
              animation: `twinkle 3s ease-in-out infinite`,
              animationDelay: `${s.delay}s`,
            }}
          />
        ))}
      </div>

      {/* RIGHT */}

      <div
        style={{
          position: "absolute",
          right: 0,
          top: 40,
          width: "22%",
          height: "760px",
          overflow: "hidden",
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: 0,
            width: 260,
            height: 260,
            borderRadius: "50%",
            background:
              "radial-gradient(circle,#ffb34733,transparent 70%)",
            filter: "blur(30px)",
            animation: "nebula 10s ease-in-out infinite",
          }}
        />

        <div
          style={{
            position: "absolute",
            top: 40,
            right: 80,
            width: 55,
            height: 55,
            borderRadius: "50%",
            background:
              "radial-gradient(circle,#ffd76a,#b8860b 70%,transparent)",
            boxShadow: "0 0 35px #ffd76a",
            animation: "floatPlanet 7s ease-in-out infinite",
          }}
        />

        {stars.map((s, i) => (
          <span
            key={i}
            style={{
              position: "absolute",
              top: `${s.top}%`,
              left: `${s.left}%`,
              width: s.size,
              height: s.size,
              borderRadius: "50%",
              background: "#fff6d2",
              boxShadow: "0 0 8px #fff6d2",
              animation: `twinkle 4s ease-in-out infinite`,
              animationDelay: `${s.delay}s`,
            }}
          />
        ))}
      </div>
    </>
  );
}

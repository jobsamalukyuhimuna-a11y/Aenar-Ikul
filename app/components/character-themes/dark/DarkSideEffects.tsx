"use client";

import { useEffect, useState } from "react";

type Particle = {
  top: number;
  left: number;
  size: number;
  delay: number;
};

export default function DarkSideEffects() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    setParticles(
      Array.from({ length: 50 }, () => ({
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: 2 + Math.random() * 5,
        delay: Math.random() * 5,
      }))
    );
  }, []);

  return (
    <>
      <style>{`
        @keyframes darkFloat {
          0%,100% {
            transform: translateY(0);
            opacity:.2;
          }

          50% {
            transform: translateY(-25px);
            opacity:1;
          }
        }

        @keyframes darkPulse {
          0%,100% {
            transform:scale(1);
          }

          50% {
            transform:scale(1.15);
          }
        }
      `}</style>


      <div
        style={{
          position:"absolute",
          inset:0,
          pointerEvents:"none",
          overflow:"hidden",
        }}
      >

        <div
          style={{
            position:"absolute",
            top:80,
            left:"10%",
            width:300,
            height:300,
            borderRadius:"50%",
            background:
            "radial-gradient(circle,#30000055,transparent 70%)",
            filter:"blur(40px)",
            animation:"darkPulse 8s infinite",
          }}
        />


        {particles.map((p,i)=>(
          <span
            key={i}
            style={{
              position:"absolute",
              top:`${p.top}%`,
              left:`${p.left}%`,
              width:p.size,
              height:p.size,
              borderRadius:"50%",
              background:"#8b0000",
              boxShadow:"0 0 12px #8b0000",
              animation:"darkFloat 4s infinite",
              animationDelay:`${p.delay}s`,
            }}
          />
        ))}

      </div>
    </>
  );
}
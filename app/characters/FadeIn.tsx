"use client";

import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function FadeIn({ children }: Props) {
  return (
    <>
      <style>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(clamp(20px, 4vw, 40px));
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .fade-up {
          width: 100%;
          min-width: 0;
          box-sizing: border-box;
          animation: fadeUp .8s ease forwards;
        }

        @media (prefers-reduced-motion: reduce) {
          .fade-up {
            animation: none;
            opacity: 1;
            transform: none;
          }
        }
      `}</style>

      <div className="fade-up">{children}</div>
    </>
  );
}
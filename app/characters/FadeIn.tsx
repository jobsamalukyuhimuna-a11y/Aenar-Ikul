"use client";

import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function FadeIn({ children }: Props) {
  return (
    <>
      <style>{`
        @keyframes fadeUp{
          from{
            opacity:0;
            transform:translateY(40px);
          }

          to{
            opacity:1;
            transform:translateY(0);
          }
        }

        .fade-up{
          animation:fadeUp .8s ease forwards;
        }
      `}</style>

      <div className="fade-up">
        {children}
      </div>
    </>
  );
}
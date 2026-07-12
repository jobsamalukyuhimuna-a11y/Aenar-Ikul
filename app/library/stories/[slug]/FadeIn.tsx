"use client";

import { useEffect, useState } from "react";

export default function FadeIn({
  children,
}: {
  children: React.ReactNode;
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => {
      setVisible(true);
    });

    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <div
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0px)" : "translateY(25px)",
        transition:
          "opacity 900ms ease, transform 900ms cubic-bezier(.22,1,.36,1)",
      }}
    >
      {children}
    </div>
  );
}
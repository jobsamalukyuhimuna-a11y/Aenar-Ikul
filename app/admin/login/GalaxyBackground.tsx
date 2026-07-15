"use client";

import { useEffect, useRef } from "react";

export default function GalaxyBackground() {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (!bgRef.current) return;

      const x =
        (e.clientX / window.innerWidth - 0.5) * 15;

      const y =
        (e.clientY / window.innerHeight - 0.5) * 15;

      bgRef.current.style.transform =
        `scale(1.08) translate(${x}px,${y}px)`;
    };

    window.addEventListener("mousemove", move);

    return () =>
      window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      ref={bgRef}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        backgroundImage:
          "url('/images/admin/galaxy-login.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition:
          "transform .3s ease-out",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle, rgba(212,175,55,.25), transparent 60%)",
        }}
      />
    </div>
  );
}
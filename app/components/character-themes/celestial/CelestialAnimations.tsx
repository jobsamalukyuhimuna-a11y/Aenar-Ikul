"use client";

import { useEffect } from "react";

export default function CelestialAnimations() {

  useEffect(() => {

    const handleMouse = (e: MouseEvent) => {

      const x =
        (e.clientX / window.innerWidth - 0.5) * 12;

      const y =
        (e.clientY / window.innerHeight - 0.5) * 12;

      document.documentElement.style.setProperty(
        "--celestial-x",
        `${x}px`
      );

      document.documentElement.style.setProperty(
        "--celestial-y",
        `${y}px`
      );

    };

    window.addEventListener(
      "mousemove",
      handleMouse
    );

    return () =>
      window.removeEventListener(
        "mousemove",
        handleMouse
      );

  }, []);

  return null;

}
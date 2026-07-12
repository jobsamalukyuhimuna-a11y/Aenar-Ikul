"use client";

import { useEffect, useRef } from "react";

export default function StoryMusic() {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    audio.volume = 0.35;

    const start = () => {
      audio.play().catch(() => {});
      window.removeEventListener("click", start);
    };

    start();

    window.addEventListener("click", start);

    return () => window.removeEventListener("click", start);
  }, []);

  return (
    <audio
      ref={audioRef}
      src="/music/ithan-theme.mp3"
      loop
      preload="auto"
    />
  );
}
"use client";

import { useEffect, useRef } from "react";

export default function CelestialMusicPlayer() {

  const audioRef =
    useRef<HTMLAudioElement>(null);

  useEffect(() => {

    const audio = audioRef.current;

    if (!audio) return;

    audio.volume = 0.25;

    audio.loop = true;

    const play = () => {

      audio.play().catch(() => {});

    };

    play();

    window.addEventListener(
      "click",
      play,
      {
        once: true,
      }
    );

    return () =>
      window.removeEventListener(
        "click",
        play
      );

  }, []);

  return (
    <audio
      ref={audioRef}
      src="/music/celestial-theme.mp3"
      preload="auto"
    />
  );

}
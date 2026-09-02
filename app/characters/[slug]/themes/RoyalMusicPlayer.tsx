"use client";

import { useRef, useState } from "react";

type Props = {
  music?: string | null;
};

export default function RoyalMusicPlayer({
  music,
}: Props) {
  const audioRef =
    useRef<HTMLAudioElement | null>(null);

  const [playing, setPlaying] =
    useState(false);

  const toggleMusic = async () => {
    const audio = audioRef.current;

    if (!audio || !music) {
      return;
    }

    if (!audio.paused) {
      audio.pause();
      setPlaying(false);
      return;
    }

    try {
      audio.volume = 0.35;

      await audio.play();

      setPlaying(true);
    } catch (error) {
      console.error(
        "Royal music playback error:",
        error
      );

      setPlaying(false);
    }
  };

  if (!music) {
    return null;
  }

  return (
    <>
      <audio
        ref={audioRef}
        src={music}
        loop
        preload="metadata"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onEnded={() => setPlaying(false)}
      />

      <button
        type="button"
        onClick={toggleMusic}
        aria-label={
          playing
            ? "Pause royal music"
            : "Play royal music"
        }
        style={{
          width:
            "clamp(52px, 8vw, 60px)",
          height:
            "clamp(52px, 8vw, 60px)",

          minWidth:
            "clamp(52px, 8vw, 60px)",

          minHeight:
            "clamp(52px, 8vw, 60px)",

          border: "none",

          borderRadius: "50%",

          display: "flex",

          alignItems: "center",

          justifyContent: "center",

          padding: 0,

          fontSize:
            "clamp(23px, 4vw, 28px)",

          cursor: "pointer",

          color: "#2b1800",

          background:
            "radial-gradient(circle,#ffe9a0,#b8862c)",

          boxShadow:
            playing
              ? "0 0 45px rgba(255,220,120,.9)"
              : "0 0 20px rgba(255,220,120,.4)",

          transition:
            "transform .25s ease, box-shadow .3s ease",

          WebkitTapHighlightColor:
            "transparent",

          flexShrink: 0,
        }}
        onMouseEnter={(event) => {
          event.currentTarget.style.transform =
            "scale(1.06)";
        }}
        onMouseLeave={(event) => {
          event.currentTarget.style.transform =
            "scale(1)";
        }}
      >
        {playing ? "Ⅱ" : "♪"}
      </button>
    </>
  );
}
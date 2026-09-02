"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  music?: string | null;
};

export default function DarkMusic({
  music,
}: Props) {
  const audioRef =
    useRef<HTMLAudioElement | null>(null);

  const [playing, setPlaying] =
    useState(false);

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio || !music) {
      return;
    }

    audio.volume = 0.35;

    const start = () => {
      audio
        .play()
        .then(() => {
          setPlaying(true);
        })
        .catch(() => {
          setPlaying(false);
        });
    };

    start();

    const unlock = () => {
      start();
    };

    window.addEventListener(
      "click",
      unlock,
      { once: true }
    );

    return () => {
      window.removeEventListener(
        "click",
        unlock
      );

      audio.pause();
      setPlaying(false);
    };
  }, [music]);

  async function toggleMusic() {
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
    } catch {
      setPlaying(false);
    }
  }

  if (!music) {
    return null;
  }

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop:
          "clamp(25px, 5vw, 60px)",
        marginBottom:
          "clamp(25px, 4vw, 45px)",
        boxSizing: "border-box",
      }}
    >
      <button
        type="button"
        onClick={toggleMusic}
        aria-label={
          playing
            ? "Pause music"
            : "Play music"
        }
        style={{
          width:
            "clamp(85px, 18vw, 150px)",
          height:
            "clamp(85px, 18vw, 150px)",
          flexShrink: 0,
          borderRadius: "50%",
          border:
            "2px solid rgba(170,110,255,.6)",
          background:
            "radial-gradient(circle,#4a1680,#08030f)",
          boxShadow:
            "0 0 clamp(30px, 7vw, 60px) rgba(130,60,255,.7)",
          cursor: "pointer",
          color: "#e4d8ff",
          fontSize:
            "clamp(28px, 6vw, 45px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 0,
          transition: "transform .25s ease, box-shadow .25s ease",
          WebkitTapHighlightColor:
            "transparent",
        }}
      >
        {playing ? "❚❚" : "▶"}
      </button>

      <audio
        ref={audioRef}
        src={music}
        loop
        preload="metadata"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onEnded={() => setPlaying(false)}
      />
    </div>
  );
}
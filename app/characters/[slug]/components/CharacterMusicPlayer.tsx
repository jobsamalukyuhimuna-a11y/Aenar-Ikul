"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  src: string;
};

function formatTime(time: number) {
  if (!isFinite(time)) return "0:00";

  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);

  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
}

export default function CharacterMusicPlayer({ src }: Props) {
  const audioRef = useRef<HTMLAudioElement>(null);

  const [playing, setPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    const loaded = () => setDuration(audio.duration);
    const update = () => setCurrent(audio.currentTime);
    const ended = () => setPlaying(false);

    audio.addEventListener("loadedmetadata", loaded);
    audio.addEventListener("timeupdate", update);
    audio.addEventListener("ended", ended);

    return () => {
      audio.removeEventListener("loadedmetadata", loaded);
      audio.removeEventListener("timeupdate", update);
      audio.removeEventListener("ended", ended);
    };
  }, []);

  const toggle = async () => {
    const audio = audioRef.current;

    if (!audio) return;

    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      await audio.play();
      setPlaying(true);
    }
  };

  return (
    <section
      style={{
        maxWidth: 900,
        margin: "0 auto 60px",
        borderRadius: 24,
        overflow: "hidden",
        border: "1px solid rgba(215,181,109,.35)",
        background:
          "linear-gradient(180deg,#2d1b09 0%,#171717 100%)",
        boxShadow:
          "0 0 40px rgba(215,181,109,.15)",
      }}
    >
      <audio ref={audioRef} src={src} preload="metadata" />

      <div
        style={{
          padding: 35,
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontFamily: "Cinzel, serif",
            color: "#d7b56d",
            fontSize: 30,
            marginBottom: 8,
          }}
        >
          ♫ Character Theme ♫
        </div>

        <div
          style={{
            color: "#b89a57",
            marginBottom: 30,
            letterSpacing: 2,
          }}
        >
          Royal Soundtrack
        </div>

        <button
          onClick={toggle}
          style={{
            width: 82,
            height: 82,
            borderRadius: "50%",
            border: "2px solid #d7b56d",
            background:
              "linear-gradient(#f3d58d,#b88935)",
            cursor: "pointer",
            fontSize: 28,
            marginBottom: 30,
          }}
        >
          {playing ? "❚❚" : "▶"}
        </button>

        <input
          type="range"
          min={0}
          max={duration || 0}
          value={current}
          onChange={(e) => {
            const audio = audioRef.current;

            if (!audio) return;

            audio.currentTime = Number(e.target.value);
            setCurrent(Number(e.target.value));
          }}
          style={{
            width: "100%",
          }}
        />

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: 12,
            color: "#d7b56d",
            fontSize: 14,
          }}
        >
          <span>{formatTime(current)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>
    </section>
  );
}
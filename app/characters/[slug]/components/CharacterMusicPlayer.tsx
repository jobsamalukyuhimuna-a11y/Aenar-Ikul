"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  src: string;
  name?: string;
};

function formatTime(time: number) {
  if (!isFinite(time)) return "0:00";

  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);

  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
}

export default function CharacterMusicPlayer({
  src,
  name = "Character Theme",
}: Props) {
  const audioRef = useRef<HTMLAudioElement>(null);

  const [playing, setPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    const loaded = () => {
      setDuration(audio.duration || 0);
    };

    const update = () => {
      setCurrent(audio.currentTime);
    };

    const ended = () => {
      setPlaying(false);
    };

    audio.addEventListener(
      "loadedmetadata",
      loaded
    );

    audio.addEventListener(
      "timeupdate",
      update
    );

    audio.addEventListener(
      "ended",
      ended
    );

    return () => {
      audio.removeEventListener(
        "loadedmetadata",
        loaded
      );

      audio.removeEventListener(
        "timeupdate",
        update
      );

      audio.removeEventListener(
        "ended",
        ended
      );
    };
  }, []);

  async function toggle() {
    const audio = audioRef.current;

    if (!audio) return;

    try {
      if (playing) {
        audio.pause();
        setPlaying(false);
      } else {
        await audio.play();
        setPlaying(true);
      }
    } catch {
      setPlaying(false);
    }
  }

  return (
    <div
      style={{
        width: "100%",
        borderRadius: "28px",
        padding: "35px",
        background:
          "radial-gradient(circle at top,#3a2810,#111 60%)",
        border:
          "1px solid rgba(215,181,109,.35)",
        boxShadow:
          "0 30px 80px rgba(0,0,0,.7),0 0 40px rgba(215,181,109,.15)",
      }}
    >
      <audio
        ref={audioRef}
        src={src}
        preload="metadata"
      />

      <div
        style={{
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontSize: "42px",
            marginBottom: "15px",
          }}
        >
          🎼
        </div>

        <h2
          style={{
            color: "#f0d28d",
            fontFamily:
              "Cinzel, serif",
            fontSize: "32px",
            fontWeight: 400,
            marginBottom: "8px",
          }}
        >
          {name}
        </h2>

        <p
          style={{
            color: "#a98a4b",
            letterSpacing: "5px",
            fontSize: "12px",
            marginBottom: "35px",
          }}
        >
          CHARACTER THEME
        </p>


        <button
          onClick={toggle}
          style={{
            width: "90px",
            height: "90px",
            borderRadius: "50%",
            border:
              "2px solid #d7b56d",
            background:
              "linear-gradient(145deg,#f2d58b,#8b6828)",
            color: "#111",
            cursor: "pointer",
            fontSize: "30px",
            boxShadow:
              "0 0 35px rgba(215,181,109,.45)",
            marginBottom: "35px",
          }}
        >
          {playing ? "Ⅱ" : "▶"}
        </button>


        <input
          type="range"
          min={0}
          max={duration || 0}
          value={current}
          onChange={(e) => {
            const audio =
              audioRef.current;

            if (!audio) return;

            const value =
              Number(e.target.value);

            audio.currentTime = value;
            setCurrent(value);
          }}
          style={{
            width: "100%",
            cursor: "pointer",
            accentColor: "#d7b56d",
          }}
        />


        <div
          style={{
            display: "flex",
            justifyContent:
              "space-between",
            marginTop: "15px",
            color: "#d7b56d",
            fontSize: "14px",
          }}
        >
          <span>
            {formatTime(current)}
          </span>

          <span>
            {formatTime(duration)}
          </span>
        </div>
      </div>
    </div>
  );
}
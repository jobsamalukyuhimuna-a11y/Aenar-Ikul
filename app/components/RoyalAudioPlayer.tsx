"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  src: string;
  title?: string;
};

function formatTime(seconds: number) {
  if (!Number.isFinite(seconds)) return "00:00";

  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);

  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

export default function RoyalAudioPlayer({
  src,
  title = "CHARACTER THEME",
}: Props) {
  const audioRef = useRef<HTMLAudioElement>(null);

  const [playing, setPlaying] = useState(false);
  const [current, setCurrent] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onLoaded = () => setDuration(audio.duration || 0);
    const onTime = () => setCurrent(audio.currentTime);
    const onEnded = () => setPlaying(false);

    audio.addEventListener("loadedmetadata", onLoaded);
    audio.addEventListener("timeupdate", onTime);
    audio.addEventListener("ended", onEnded);

    return () => {
      audio.removeEventListener("loadedmetadata", onLoaded);
      audio.removeEventListener("timeupdate", onTime);
      audio.removeEventListener("ended", onEnded);
    };
  }, []);

  async function toggle() {
    const audio = audioRef.current;
    if (!audio) return;

    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      await audio.play();
      setPlaying(true);
    }
  }

  function seek(value: number) {
    const audio = audioRef.current;
    if (!audio) return;

    audio.currentTime = value;
    setCurrent(value);
  }

  return (
    <>
      <audio
        ref={audioRef}
        src={src}
        preload="metadata"
        controlsList="nodownload noplaybackrate"
      />

      <div
        style={{
          width: "100%",
          maxWidth: "900px",
          margin: "0 auto 60px",
          padding: "28px",
          borderRadius: "24px",
          border: "1px solid rgba(215,181,109,.35)",
          background:
            "linear-gradient(180deg,#1c1427 0%,#120f17 100%)",
          boxShadow:
            "0 0 30px rgba(215,181,109,.15)",
        }}
      >
        <div
          style={{
            textAlign: "center",
            color: "#d7b56d",
            fontFamily: "Cinzel, serif",
            fontSize: "28px",
            marginBottom: "22px",
            letterSpacing: "2px",
          }}
        >
          ♫ {title} ♫
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <button
            onClick={toggle}
            style={{
              width: "68px",
              height: "68px",
              borderRadius: "50%",
              border: "none",
              cursor: "pointer",
              background:
                "linear-gradient(180deg,#f5d889,#b48327)",
              color: "#221400",
              fontSize: "24px",
              fontWeight: "bold",
            }}
          >
            {playing ? "❚❚" : "▶"}
          </button>

          <div
            style={{
              width: "70px",
              color: "#d7b56d",
              fontVariantNumeric: "tabular-nums",
              textAlign: "center",
            }}
          >
            {formatTime(current)}
          </div>

          <input
            type="range"
            min={0}
            max={duration || 0}
            step={0.01}
            value={current}
            onChange={(e) =>
              seek(Number(e.target.value))
            }
            style={{
              flex: 1,
              cursor: "pointer",
            }}
          />

          <div
            style={{
              width: "70px",
              color: "#d7b56d",
              fontVariantNumeric: "tabular-nums",
              textAlign: "center",
            }}
          >
            {formatTime(duration)}
          </div>
        </div>
      </div>
    </>
  );
}
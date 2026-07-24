"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  music?: string | null;
  characterName?: string | null;
};

function formatTime(time: number) {
  if (!Number.isFinite(time)) return "00:00";

  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);

  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
}

export default function CorruptedMusic({
  music,
  characterName,
}: Props) {
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

  if (!music) return null;

  const toggle = async () => {
    const audio = audioRef.current;

    if (!audio) return;

    if (audio.paused) {
      await audio.play();
      setPlaying(true);
    } else {
      audio.pause();
      setPlaying(false);
    }
  };

  const seek = (value: number) => {
    const audio = audioRef.current;

    if (!audio) return;

    audio.currentTime = value;
    setCurrent(value);
  };

  return (
    <section className="corrupted-music">

      <div className="music-aura" />

      <div className="music-header">

        <div className="music-line" />

        <h2>THE FORBIDDEN HYMN</h2>

        <div className="music-line" />

      </div>

      <div className="music-card">

        <div className="music-glow" />

        <div className="music-core" />

        <div className="music-info">

          <h3>Corrupted Symphony</h3>

          <p>{characterName}</p>

          <span>
            Listen... and let the corruption consume your soul.
          </span>

        </div>

        <div className="corrupted-player">

          <button
            className={`play-button ${playing ? "playing" : ""}`}
            onClick={toggle}
          >
            {playing ? "❚❚" : "▶"}
          </button>

          <div className="player-content">

            <div className="player-times">

              <span>{formatTime(current)}</span>

              <span>{formatTime(duration)}</span>

            </div>

            <input
              className="player-progress"
              type="range"
              min={0}
              max={duration || 0}
              value={current}
              onChange={(e) =>
                seek(Number(e.target.value))
              }
            />

          </div>

        </div>

        <audio
          ref={audioRef}
          preload="metadata"
        >
          <source
            src={music}
            type="audio/mpeg"
          />
        </audio>

      </div>

    </section>
  );
}
"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  music?: string | null;
  characterName?: string | null;
};

function formatTime(time: number) {
  if (!Number.isFinite(time) || time < 0) {
    return "00:00";
  }

  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);

  return `${minutes}:${seconds
    .toString()
    .padStart(2, "0")}`;
}

export default function CorruptedMusic({
  music,
  characterName,
}: Props) {
  const audioRef =
    useRef<HTMLAudioElement | null>(null);

  const [playing, setPlaying] =
    useState(false);

  const [duration, setDuration] =
    useState(0);

  const [current, setCurrent] =
    useState(0);

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) {
      return;
    }

    const loaded = () => {
      setDuration(
        Number.isFinite(audio.duration)
          ? audio.duration
          : 0
      );
    };

    const update = () => {
      setCurrent(
        Number.isFinite(audio.currentTime)
          ? audio.currentTime
          : 0
      );
    };

    const ended = () => {
      setPlaying(false);
      setCurrent(0);
    };

    const reset = () => {
      setCurrent(0);
      setPlaying(false);
    };

    audio.addEventListener(
      "loadedmetadata",
      loaded
    );

    audio.addEventListener(
      "durationchange",
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

    audio.addEventListener(
      "emptied",
      reset
    );

    return () => {
      audio.removeEventListener(
        "loadedmetadata",
        loaded
      );

      audio.removeEventListener(
        "durationchange",
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

      audio.removeEventListener(
        "emptied",
        reset
      );
    };
  }, [music]);

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) {
      return;
    }

    audio.pause();
    audio.currentTime = 0;

    setPlaying(false);
    setCurrent(0);
    setDuration(0);

    if (music) {
      audio.load();
    }
  }, [music]);

  if (!music) {
    return null;
  }

  const toggle = async () => {
    const audio = audioRef.current;

    if (!audio) {
      return;
    }

    if (!audio.paused) {
      audio.pause();
      setPlaying(false);
      return;
    }

    try {
      await audio.play();
      setPlaying(true);
    } catch (error) {
      console.error(
        "Corrupted music playback error:",
        error
      );

      setPlaying(false);
    }
  };

  const seek = (value: number) => {
    const audio = audioRef.current;

    if (!audio) {
      return;
    }

    const safeValue = Math.max(
      0,
      Math.min(value, duration || 0)
    );

    audio.currentTime = safeValue;

    setCurrent(safeValue);
  };

  const progress =
    duration > 0
      ? Math.min(
          100,
          Math.max(
            0,
            (current / duration) * 100
          )
        )
      : 0;

  return (
    <section
      className="corrupted-music"
      style={{
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      <div
        className="music-aura"
        aria-hidden="true"
      />

      <div className="music-header">
        <div
          className="music-line"
          aria-hidden="true"
        />

        <h2>
          THE FORBIDDEN HYMN
        </h2>

        <div
          className="music-line"
          aria-hidden="true"
        />
      </div>

      <div
        className="music-card"
        style={{
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        <div
          className="music-glow"
          aria-hidden="true"
        />

        <div
          className="music-core"
          aria-hidden="true"
        />

        <div className="music-info">
          <h3>
            Corrupted Symphony
          </h3>

          <p>
            {characterName || "Unknown"}
          </p>

          <span>
            Listen... and let the corruption
            consume your soul.
          </span>
        </div>

        <div className="corrupted-player">
          <button
            type="button"
            className={`play-button ${
              playing ? "playing" : ""
            }`}
            onClick={toggle}
            aria-label={
              playing
                ? "Pause music"
                : "Play music"
            }
          >
            {playing ? "❚❚" : "▶"}
          </button>

          <div className="player-content">
            <div className="player-times">
              <span>
                {formatTime(current)}
              </span>

              <span>
                {formatTime(duration)}
              </span>
            </div>

            <input
              className="player-progress"
              type="range"
              min={0}
              max={duration || 0}
              step={0.01}
              value={duration > 0 ? current : 0}
              disabled={duration <= 0}
              onChange={(event) => {
                seek(
                  Number(event.target.value)
                );
              }}
              aria-label="Music progress"
              style={{
                width: "100%",
              }}
            />

            <div
              aria-hidden="true"
              style={{
                width: "100%",
                height: "2px",
                marginTop: "4px",
                opacity: 0.35,
                background:
                  `linear-gradient(
                    to right,
                    #ff4444 ${progress}%,
                    rgba(255,255,255,.08) ${progress}%
                  )`,
              }}
            />
          </div>
        </div>

        <audio
          ref={audioRef}
          src={music}
          preload="metadata"
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          onEnded={() => {
            setPlaying(false);
            setCurrent(0);
          }}
        >
          Your browser does not support audio playback.
        </audio>
      </div>
    </section>
  );
}
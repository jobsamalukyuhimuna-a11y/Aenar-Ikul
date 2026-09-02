"use client";

import { useRef, useState } from "react";

type Props = {
  music?: string | null;
  characterName?: string | null;
};

export default function AncientMusic({
  music,
  characterName,
}: Props) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  /*
    الموسيقى الحالية المستخدمة في الثيم القديم.
    الملف يعمل من داخل public/music.
  */
  const musicSource = music || "/music/ithan-theme.mp3";

  const toggleMusic = async () => {
    const audio = audioRef.current;

    if (!audio) return;

    if (!audio.paused) {
      audio.pause();
      setPlaying(false);
      return;
    }

    try {
      audio.volume = 0.75;

      await audio.play();

      setPlaying(true);
    } catch (error) {
      console.error(
        "Ancient music playback error:",
        error
      );

      setPlaying(false);
    }
  };

  return (
    <section
      className="ancient-music"
      style={{
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      <div
        className={`ancient-music-shrine ${
          playing ? "is-playing" : ""
        }`}
        style={{
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        {/* SACRED MUSIC BUTTON */}

        <button
          type="button"
          className="music-sacred-button"
          onClick={toggleMusic}
          disabled={!musicSource}
          aria-label={
            playing
              ? "Pause sacred music"
              : "Play sacred music"
          }
          style={{
            maxWidth: "100%",
          }}
        >
          <span
            className="music-outer-ring"
            aria-hidden="true"
          />

          <span
            className="music-middle-ring"
            aria-hidden="true"
          />

          <span
            className="music-inner-ring"
            aria-hidden="true"
          />

          <span
            className="music-energy"
            aria-hidden="true"
          />

          <span
            className="music-symbol"
            aria-hidden="true"
          >
            {playing ? "Ⅱ" : "▶"}
          </span>
        </button>

        {/* FLOATING RINGS */}

        <div
          className="music-rings"
          aria-hidden="true"
        >
          <span />
          <span />
          <span />
        </div>

        {/* TITLE */}

        <h2 className="music-title">
          Sacred Voice
        </h2>

        <p className="music-character">
          {characterName || "Unknown"}
        </p>

        <p className="music-text">
          The echoes of this soul have survived for
          thousands of years.
        </p>

        {/* AUDIO */}

        <audio
          ref={audioRef}
          src={musicSource}
          preload="metadata"
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          onEnded={() => setPlaying(false)}
        >
          Your browser does not support audio playback.
        </audio>
      </div>
    </section>
  );
}
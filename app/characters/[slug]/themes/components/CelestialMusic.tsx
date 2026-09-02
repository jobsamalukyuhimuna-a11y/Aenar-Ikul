"use client";

import { useRef, useState } from "react";

import type { Character } from "../../components/CharacterProfile";

type Props = {
  character: Character;
};

export default function CelestialMusic({
  character,
}: Props) {
  const audioRef =
    useRef<HTMLAudioElement | null>(null);

  const [playing, setPlaying] =
    useState(false);

  const toggle = async () => {
    const audio = audioRef.current;

    if (!audio || !character.music) {
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
        "Celestial music playback error:",
        error
      );

      setPlaying(false);
    }
  };

  if (!character.music) {
    return null;
  }

  return (
    <section
      className="music-panel"
      style={{
        width: "100%",
        maxWidth: "100%",
        boxSizing: "border-box",
      }}
    >
      <audio
        ref={audioRef}
        src={character.music}
        loop
        preload="metadata"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onEnded={() => setPlaying(false)}
      />

      <button
        type="button"
        onClick={toggle}
        className="music-button"
        aria-label={
          playing
            ? "Pause celestial music"
            : "Play celestial music"
        }
        style={{
          flexShrink: 0,
        }}
      >
        {playing ? "❚❚" : "▶"}
      </button>

      <span
        className="music-title"
        style={{
          maxWidth: "100%",
          overflowWrap: "break-word",
          wordBreak: "break-word",
        }}
      >
        Celestial Resonance
      </span>
    </section>
  );
}
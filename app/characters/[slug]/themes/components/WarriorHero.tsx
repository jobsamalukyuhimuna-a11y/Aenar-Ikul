"use client";

import Image from "next/image";
import { useRef, useState } from "react";

import type { Character } from "../../components/CharacterProfile";

type Props = {
  character: Character;
};

export default function WarriorHero({
  character,
}: Props) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  function toggleMusic() {
    if (!audioRef.current || !character.music) {
      return;
    }

    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
      return;
    }

    audioRef.current.volume = 0.35;

    audioRef.current
      .play()
      .then(() => {
        setPlaying(true);
      })
      .catch(() => {
        setPlaying(false);
      });
  }

  return (
    <section className="warrior-hero">
      <audio
        ref={audioRef}
        src={character.music || undefined}
        loop
        preload="none"
      />

      {/* CHARACTER IMAGE */}

      <div className="warrior-left">
        <div className="warrior-frame">
          {character.image ? (
            <Image
              src={character.image}
              alt={character.name || "Character"}
              fill
              priority
              unoptimized
              sizes="
                (max-width: 600px) 88vw,
                (max-width: 900px) 70vw,
                410px
              "
              className="warrior-image"
            />
          ) : (
            <div
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "20px",
                boxSizing: "border-box",
                color: "#ffbf67",
                fontFamily: "Cinzel, serif",
                fontSize: "clamp(13px, 3vw, 18px)",
                textAlign: "center",
              }}
            >
              NO IMAGE
            </div>
          )}
        </div>
      </div>

      {/* CHARACTER INFORMATION */}

      <div className="warrior-right">
        <span className="warrior-type">
          THE ETERNAL WARRIOR
        </span>

        <h1 className="warrior-name">
          {character.name || "Unknown"}
        </h1>

        <h2 className="warrior-title">
          {character.title || "Legend"}
        </h2>

        {character.quote && (
          <blockquote className="warrior-quote">
            ❝ {character.quote} ❞
          </blockquote>
        )}

        {/* MUSIC */}

        <div className="warrior-music">
          <button
            type="button"
            className="warrior-music-button"
            onClick={toggleMusic}
            disabled={!character.music}
            aria-label={
              playing ? "Pause music" : "Play music"
            }
            style={{
              opacity: character.music ? 1 : 0.55,
              cursor: character.music
                ? "pointer"
                : "default",
            }}
          >
            {playing ? "❚❚" : "▶"}
          </button>

          <div
            style={{
              minWidth: 0,
            }}
          >
            <h3>Battle Theme</h3>

            <span>Eternal Valor</span>
          </div>
        </div>

        {/* CHARACTER INFO */}

        <div className="warrior-grid">
          <div className="warrior-card">
            <small>Kingdom</small>
            <strong>
              {character.kingdom || "Unknown"}
            </strong>
          </div>

          <div className="warrior-card">
            <small>Race</small>
            <strong>
              {character.race || "Unknown"}
            </strong>
          </div>

          <div className="warrior-card">
            <small>Status</small>
            <strong>
              {character.status || "Unknown"}
            </strong>
          </div>

          <div className="warrior-card">
            <small>Universe</small>
            <strong>
              {character.universe || "Unknown"}
            </strong>
          </div>
        </div>
      </div>
    </section>
  );
}
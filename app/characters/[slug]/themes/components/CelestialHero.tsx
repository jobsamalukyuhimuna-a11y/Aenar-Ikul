"use client";

import Image from "next/image";
import { useRef, useState } from "react";

import type { Character } from "../../components/CharacterProfile";

type Props = {
  character: Character;
};

export default function CelestialHero({
  character,
}: Props) {
  const audioRef =
    useRef<HTMLAudioElement | null>(null);

  const [playing, setPlaying] =
    useState(false);

  const toggleMusic = async () => {
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

  return (
    <section
      className="hero"
      style={{
        width: "100%",
        minWidth: 0,
        boxSizing: "border-box",
      }}
    >
      <audio
        ref={audioRef}
        src={character.music || undefined}
        loop
        preload="metadata"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onEnded={() => setPlaying(false)}
      />

      {/* =====================================================
          PORTRAIT
      ===================================================== */}

      <div
        className="hero-left"
        style={{
          width: "100%",
          minWidth: 0,
          boxSizing: "border-box",
        }}
      >
        <div
          className="portrait-frame"
          style={{
            position: "relative",
            width: "min(100%, 420px)",
            aspectRatio: "3 / 4",
            height: "auto",
            boxSizing: "border-box",
          }}
        >
          <div
            className="frame-glow"
            aria-hidden="true"
          />

          {character.image ? (
            <Image
              src={character.image}
              alt={
                character.name ||
                "Character"
              }
              fill
              priority
              unoptimized
              sizes="
                (max-width: 600px) 88vw,
                (max-width: 1100px) 70vw,
                420px
              "
              className="portrait-image"
            />
          ) : (
            <div
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff8df",
                fontFamily:
                  "Cinzel, serif",
                fontSize:
                  "clamp(20px, 4vw, 28px)",
                textAlign: "center",
                padding: "20px",
                boxSizing: "border-box",
              }}
            >
              ✦ No Image ✦
            </div>
          )}
        </div>
      </div>

      {/* =====================================================
          CHARACTER INFORMATION
      ===================================================== */}

      <div
        className="hero-right"
        style={{
          width: "100%",
          minWidth: 0,
          boxSizing: "border-box",
        }}
      >
        <span
          className="hero-type"
          style={{
            maxWidth: "100%",
            overflowWrap: "break-word",
          }}
        >
          THE CELESTIAL SOVEREIGN
        </span>

        <h1
          className="hero-name"
          style={{
            maxWidth: "100%",
            overflowWrap: "break-word",
            wordBreak: "break-word",
          }}
        >
          {character.name ||
            "Unknown"}
        </h1>

        <h2
          className="hero-title"
          style={{
            maxWidth: "100%",
            overflowWrap: "break-word",
            wordBreak: "break-word",
          }}
        >
          {character.title ||
            "Celestial Guardian"}
        </h2>

        {character.quote && (
          <blockquote
            className="hero-quote"
            style={{
              maxWidth: "100%",
              overflowWrap: "break-word",
              wordBreak: "break-word",
            }}
          >
            ❝ {character.quote} ❞
          </blockquote>
        )}

        {/* ===================================================
            MUSIC
        =================================================== */}

        {character.music && (
          <div
            className="music-card"
            style={{
              width: "100%",
              minWidth: 0,
              boxSizing: "border-box",
            }}
          >
            <button
              type="button"
              className="music-button"
              onClick={toggleMusic}
              aria-label={
                playing
                  ? "Pause celestial music"
                  : "Play celestial music"
              }
            >
              {playing
                ? "❚❚"
                : "▶"}
            </button>

            <div
              style={{
                minWidth: 0,
              }}
            >
              <h3>
                Celestial Theme
              </h3>

              <span>
                Divine Resonance
              </span>
            </div>
          </div>
        )}

        {/* ===================================================
            INFORMATION GRID
        =================================================== */}

        <div
          className="hero-grid"
          style={{
            width: "100%",
            boxSizing: "border-box",
          }}
        >
          <div className="info-card">
            <small>Kingdom</small>

            <strong>
              {character.kingdom ||
                "Unknown"}
            </strong>
          </div>

          <div className="info-card">
            <small>Race</small>

            <strong>
              {character.race ||
                "Unknown"}
            </strong>
          </div>

          <div className="info-card">
            <small>Status</small>

            <strong>
              {character.status ||
                "Unknown"}
            </strong>
          </div>

          <div className="info-card">
            <small>Universe</small>

            <strong>
              {character.universe ||
                "Unknown"}
            </strong>
          </div>
        </div>
      </div>
    </section>
  );
}
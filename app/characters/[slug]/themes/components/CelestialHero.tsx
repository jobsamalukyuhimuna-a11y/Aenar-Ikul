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
    useRef<HTMLAudioElement>(null);

  const [playing, setPlaying] =
    useState(false);

  function toggleMusic() {

    if (!audioRef.current)
      return;

    if (!character.music)
      return;

    if (playing) {

      audioRef.current.pause();

      setPlaying(false);

    } else {

      audioRef.current.volume = .35;

      audioRef.current.play();

      setPlaying(true);

    }

  }

  return (

    <section className="hero">

      <audio
        ref={audioRef}
        src={character.music || undefined}
        loop
      />

      <div className="hero-left">

        <div className="portrait-frame">

          <div className="frame-glow" />

          {character.image && (

            <Image
              src={character.image}
              alt={character.name || "Character"}
              fill
              priority
              className="portrait-image"
            />

          )}

        </div>

      </div>

      <div className="hero-right">

        <span className="hero-type">

          THE CELESTIAL SOVEREIGN

        </span>

        <h1 className="hero-name">

          {character.name}

        </h1>

        <h2 className="hero-title">

          {character.title}

        </h2>

        {character.quote && (

          <blockquote className="hero-quote">

            ❝ {character.quote} ❞

          </blockquote>

        )}

        <div className="music-card">

          <button
            className="music-button"
            onClick={toggleMusic}
          >

            {playing ? "❚❚" : "▶"}

          </button>

          <div>

            <h3>

              Celestial Theme

            </h3>

            <span>

              Divine Resonance

            </span>

          </div>

        </div>

        <div className="hero-grid">

          <div className="info-card">

            <small>Kingdom</small>

            <strong>

              {character.kingdom || "Unknown"}

            </strong>

          </div>

          <div className="info-card">

            <small>Race</small>

            <strong>

              {character.race || "Unknown"}

            </strong>

          </div>

          <div className="info-card">

            <small>Status</small>

            <strong>

              {character.status || "Unknown"}

            </strong>

          </div>

          <div className="info-card">

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
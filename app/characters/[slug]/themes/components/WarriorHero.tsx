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

    <section className="warrior-hero">

      <audio
        ref={audioRef}
        src={character.music || undefined}
        loop
      />

      <div className="warrior-left">

        <div className="warrior-frame">

          {character.image && (

            <Image
              src={character.image}
              alt={character.name || "Character"}
              fill
              priority
              className="warrior-image"
            />

          )}

        </div>

      </div>

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

        <div className="warrior-music">

          <button
            className="warrior-music-button"
            onClick={toggleMusic}
          >

            {playing ? "❚❚" : "▶"}

          </button>

          <div>

            <h3>

              Battle Theme

            </h3>

            <span>

              Eternal Valor

            </span>

          </div>

        </div>

        <div className="warrior-grid">

          <div className="warrior-card">

            <small>Kingdom</small>

            <strong>{character.kingdom || "Unknown"}</strong>

          </div>

          <div className="warrior-card">

            <small>Race</small>

            <strong>{character.race || "Unknown"}</strong>

          </div>

          <div className="warrior-card">

            <small>Status</small>

            <strong>{character.status || "Unknown"}</strong>

          </div>

          <div className="warrior-card">

            <small>Universe</small>

            <strong>{character.universe || "Unknown"}</strong>

          </div>

        </div>

      </div>

    </section>

  );

}
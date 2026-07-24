"use client";

import Image from "next/image";

import type { Character } from "../../components/CharacterProfile";

type Props = {
  character: Character;
};

export default function CorruptedHero({
  character,
}: Props) {
  return (
    <section className="corrupted-layout">
      <aside className="corrupted-panel left-panel">
        <h2>DETAILS</h2>

        <div className="detail-item">
          <span>Kingdom</span>
          <strong>{character.kingdom || "Unknown"}</strong>
        </div>

        <div className="detail-item">
          <span>Race</span>
          <strong>{character.race || "Unknown"}</strong>
        </div>

        <div className="detail-item">
          <span>Status</span>
          <strong>{character.status || "Unknown"}</strong>
        </div>

        <div className="detail-item">
          <span>Universe</span>
          <strong>{character.universe || "Unknown"}</strong>
        </div>
      </aside>

      <div className="corrupted-center">
        <h1 className="corrupted-name">
          {character.name}
        </h1>

        <p className="corrupted-title">
          {character.title || "The Corrupted One"}
        </p>

        <div className="corrupted-frame">
          <div className="frame-shadow" />

          <div className="frame-glow" />

          <div className="frame-border" />

          <div className="frame-corruption">
            <div className="corruption-cracks" />
            <div className="ember-ring" />
          </div>

          <div className="frame-smoke" />

          <div className="frame-fire" />

          <div className="frame-inner">
            {character.image ? (
              <>
                <div className="character-aura" />

                <Image
                  src={character.image}
                  alt={character.name || "Character"}
                  fill
                  priority
                  className="corrupted-image corrupted-image-overflow"
                />

                <div className="character-front-fog" />
              </>
            ) : (
              <div className="corrupted-placeholder">
                No Image
              </div>
            )}
          </div>
        </div>
      </div>

      <aside className="corrupted-panel right-panel">
        <h2>QUOTE</h2>

        <blockquote>
          {character.quote
            ? `❝ ${character.quote} ❞`
            : "❝ No quote available. ❞"}
        </blockquote>
      </aside>
    </section>
  );
}
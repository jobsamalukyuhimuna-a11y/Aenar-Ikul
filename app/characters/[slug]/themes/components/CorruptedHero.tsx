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
    <section
      className="corrupted-layout"
      style={{
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      {/* =====================================================
          LEFT PANEL
      ===================================================== */}

      <aside className="corrupted-panel left-panel">
        <h2>DETAILS</h2>

        <div className="detail-item">
          <span>Kingdom</span>
          <strong>
            {character.kingdom || "Unknown"}
          </strong>
        </div>

        <div className="detail-item">
          <span>Race</span>
          <strong>
            {character.race || "Unknown"}
          </strong>
        </div>

        <div className="detail-item">
          <span>Status</span>
          <strong>
            {character.status || "Unknown"}
          </strong>
        </div>

        <div className="detail-item">
          <span>Universe</span>
          <strong>
            {character.universe || "Unknown"}
          </strong>
        </div>
      </aside>

      {/* =====================================================
          CENTER
      ===================================================== */}

      <div
        className="corrupted-center"
        style={{
          width: "100%",
          minWidth: 0,
          boxSizing: "border-box",
        }}
      >
        <h1 className="corrupted-name">
          {character.name || "Unknown"}
        </h1>

        <p className="corrupted-title">
          {character.title || "The Corrupted One"}
        </p>

        {/* CHARACTER FRAME */}

        <div className="corrupted-frame">
          <div
            className="frame-shadow"
            aria-hidden="true"
          />

          <div
            className="frame-glow"
            aria-hidden="true"
          />

          <div
            className="frame-border"
            aria-hidden="true"
          />

          <div
            className="frame-corruption"
            aria-hidden="true"
          >
            <div className="corruption-cracks" />
            <div className="ember-ring" />
          </div>

          <div
            className="frame-smoke"
            aria-hidden="true"
          />

          <div
            className="frame-fire"
            aria-hidden="true"
          />

          <div className="frame-inner">
            {character.image ? (
              <>
                <div
                  className="character-aura"
                  aria-hidden="true"
                />

                <Image
                  src={character.image}
                  alt={
                    character.name || "Character"
                  }
                  fill
                  priority
                  unoptimized
                  sizes="
                    (max-width: 600px) 88vw,
                    (max-width: 1200px) 70vw,
                    650px
                  "
                  className="corrupted-image corrupted-image-overflow"
                />

                <div
                  className="character-front-fog"
                  aria-hidden="true"
                />
              </>
            ) : (
              <div className="corrupted-placeholder">
                No Image
              </div>
            )}
          </div>
        </div>
      </div>

      {/* =====================================================
          RIGHT PANEL
      ===================================================== */}

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
"use client";

import Image from "next/image";

type Character = {
  name?: string | null;
  title?: string | null;
  image?: string | null;
  kingdom?: string | null;
  universe?: string | null;
  race?: string | null;
  status?: string | null;
  quote?: string | null;
};

type Props = {
  character: Character;
};

export default function AncientHero({
  character,
}: Props) {
  return (
    <section
      className="ancient-layout"
      style={{
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      {/* =====================================================
          LEFT PANEL
      ===================================================== */}

      <aside className="ancient-panel left-panel">
        <div className="ancient-panel-decoration">
          <span />
          <span />
          <span />
        </div>

        <h2>Kingdom</h2>

        <div className="detail-item">
          <span>Realm</span>
          <strong>
            {character.kingdom || "Unknown"}
          </strong>
        </div>

        <div className="detail-item">
          <span>Universe</span>
          <strong>
            {character.universe || "Unknown"}
          </strong>
        </div>

        <div className="detail-item">
          <span>Race</span>
          <strong>
            {character.race || "Unknown"}
          </strong>
        </div>

        <div
          className="ancient-panel-seal"
          aria-hidden="true"
        >
          <span>✦</span>
        </div>
      </aside>

      {/* =====================================================
          CENTER
      ===================================================== */}

      <section
        className="ancient-center"
        style={{
          width: "100%",
          minWidth: 0,
          boxSizing: "border-box",
        }}
      >
        {/* CHARACTER NAME */}

        <h1 className="ancient-name">
          {character.name || "Unknown"}
        </h1>

        {/* CHARACTER TITLE */}

        <p className="ancient-title">
          {character.title || "Ancient One"}
        </p>

        {/* =================================================
            CHARACTER FRAME
        ================================================= */}

        <div className="ancient-frame">
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
            className="frame-light"
            aria-hidden="true"
          />

          <div
            className="frame-corner frame-corner-tl"
            aria-hidden="true"
          />

          <div
            className="frame-corner frame-corner-tr"
            aria-hidden="true"
          />

          <div
            className="frame-corner frame-corner-bl"
            aria-hidden="true"
          />

          <div
            className="frame-corner frame-corner-br"
            aria-hidden="true"
          />

          <div className="frame-inner">
            {character.image ? (
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
                  (max-width: 900px) 70vw,
                  650px
                "
                className="ancient-image-overflow"
              />
            ) : (
              <div className="ancient-placeholder">
                <span>✦</span>

                <p>No Image</p>
              </div>
            )}

            <div
              className="ancient-image-overlay"
              aria-hidden="true"
            />

            <div
              className="ancient-image-light"
              aria-hidden="true"
            />
          </div>
        </div>

        {/* =================================================
            ANCIENT SEAL
        ================================================= */}

        <div
          className="ancient-seal"
          aria-label={`${character.name || "Ancient"} seal`}
        >
          <div
            className="seal-ring ring-one"
            aria-hidden="true"
          />

          <div
            className="seal-ring ring-two"
            aria-hidden="true"
          />

          <div
            className="seal-ring ring-three"
            aria-hidden="true"
          />

          <div
            className="seal-symbols"
            aria-hidden="true"
          >
            <span>✦</span>
            <span>◇</span>
            <span>✧</span>
            <span>◈</span>
          </div>

          <div
            className="seal-core"
            aria-hidden="true"
          >
            <span>✦</span>
          </div>
        </div>

        {/* =================================================
            QUOTE
        ================================================= */}

        <blockquote className="ancient-hero-quote">
          <span
            className="quote-mark quote-left"
            aria-hidden="true"
          >
            “
          </span>

          <span className="quote-text">
            {character.quote ||
              "Every civilization leaves behind a whisper."}
          </span>

          <span
            className="quote-mark quote-right"
            aria-hidden="true"
          >
            ”
          </span>
        </blockquote>
      </section>

      {/* =====================================================
          RIGHT PANEL
      ===================================================== */}

      <aside className="ancient-panel right-panel">
        <div className="ancient-panel-decoration">
          <span />
          <span />
          <span />
        </div>

        <h2>Chronicle</h2>

        <div className="detail-item">
          <span>Status</span>

          <strong>
            {character.status || "Unknown"}
          </strong>
        </div>

        <div className="detail-item">
          <span>Profile</span>

          <strong>Ancient</strong>
        </div>

        <div className="detail-item">
          <span>Legacy</span>

          <strong>Eternal Archive</strong>
        </div>

        <div
          className="ancient-panel-seal"
          aria-hidden="true"
        >
          <span>✦</span>
        </div>
      </aside>
    </section>
  );
}
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
    <section className="ancient-layout">

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

        <div className="ancient-panel-seal">
          <span>✦</span>
        </div>

      </aside>


      {/* =====================================================
          CENTER
      ===================================================== */}

      <section className="ancient-center">

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

          <div className="frame-shadow" />

          <div className="frame-glow" />

          <div className="frame-border" />

          <div className="frame-light" />

          <div className="frame-corner frame-corner-tl" />

          <div className="frame-corner frame-corner-tr" />

          <div className="frame-corner frame-corner-bl" />

          <div className="frame-corner frame-corner-br" />


          <div className="frame-inner">

            {character.image ? (

              <Image
                src={character.image}
                alt={character.name || "Character"}
                fill
                priority
                sizes="(max-width: 900px) 100vw, 700px"
                className="ancient-image-overflow"
              />

            ) : (

              <div className="ancient-placeholder">

                <span>✦</span>

                <p>No Image</p>

              </div>

            )}

            <div className="ancient-image-overlay" />

            <div className="ancient-image-light" />

          </div>

        </div>


        {/* =================================================
            ANCIENT SEAL
        ================================================= */}

        <div
          className="ancient-seal"
          aria-label={`${character.name || "Ancient"} seal`}
        >

          <div className="seal-ring ring-one" />

          <div className="seal-ring ring-two" />

          <div className="seal-ring ring-three" />


          <div className="seal-symbols">

            <span>✦</span>

            <span>◇</span>

            <span>✧</span>

            <span>◈</span>

          </div>


          <div className="seal-core">

            <span>✦</span>

          </div>

        </div>


        {/* =================================================
            QUOTE
        ================================================= */}

        <blockquote className="ancient-hero-quote">

          <span className="quote-mark quote-left">
            “
          </span>

          <span className="quote-text">
            {character.quote ||
              "Every civilization leaves behind a whisper."}
          </span>

          <span className="quote-mark quote-right">
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


        <h2>
          Chronicle
        </h2>


        <div className="detail-item">

          <span>
            Status
          </span>

          <strong>
            {character.status || "Unknown"}
          </strong>

        </div>


        <div className="detail-item">

          <span>
            Profile
          </span>

          <strong>
            Ancient
          </strong>

        </div>


        <div className="detail-item">

          <span>
            Legacy
          </span>

          <strong>
            Eternal Archive
          </strong>

        </div>


        <div className="ancient-panel-seal">

          <span>
            ✦
          </span>

        </div>

      </aside>

    </section>
  );
}
"use client";

import type { Character } from "../components/CharacterTypes";
import Image from "next/image";
import DarkMusic from "./dark/DarkMusic";

type Props = {
  character: Character;
};

export default function DarkTheme({
  character,
}: Props) {
  return (
    <>
      <style jsx>{`
        .dark-theme-page {
          width: 100%;
          min-height: 100vh;
          padding:
            clamp(15px, 4vw, 30px)
            clamp(8px, 2vw, 20px)
            clamp(35px, 5vw, 60px);

          background:
            radial-gradient(
              circle at top,
              rgba(139, 92, 246, 0.35),
              transparent 35%
            ),
            linear-gradient(
              180deg,
              #12051f,
              #050505 70%,
              #000
            );

          color: #fff;
          overflow-x: hidden;
          box-sizing: border-box;
        }

        .dark-theme-container {
          width: 100%;
          max-width: 1600px;
          margin: 0 auto;
          position: relative;
          box-sizing: border-box;
        }

        /* =====================================================
           MUSIC
        ===================================================== */

        .dark-music-bar {
          position: relative;

          width: 100%;

          margin-bottom:
            clamp(25px, 4vw, 45px);

          padding:
            clamp(18px, 3vw, 25px)
            clamp(14px, 4vw, 40px);

          border-radius:
            clamp(18px, 2.5vw, 30px);

          border:
            2px solid rgba(139, 92, 246, 0.55);

          background:
            linear-gradient(
              180deg,
              rgba(35, 15, 65, 0.95),
              rgba(8, 5, 15, 0.98)
            );

          box-shadow:
            0 0 60px rgba(139, 92, 246, 0.35),
            inset 0 0 40px rgba(139, 92, 246, 0.15);

          box-sizing: border-box;
        }

        .dark-music-top-line,
        .dark-music-bottom-line {
          position: absolute;

          left: clamp(10px, 2vw, 20px);
          right: clamp(10px, 2vw, 20px);

          height: 2px;

          background:
            linear-gradient(
              to right,
              transparent,
              #8b5cf6,
              transparent
            );
        }

        .dark-music-top-line {
          top: 8px;
        }

        .dark-music-bottom-line {
          bottom: 8px;
        }

        .dark-music-title {
          display: flex;

          justify-content: center;
          align-items: center;

          gap:
            clamp(8px, 2vw, 20px);

          width: 100%;

          box-sizing: border-box;
        }

        .dark-music-symbol {
          flex-shrink: 0;

          color: #8b5cf6;

          font-size:
            clamp(18px, 3vw, 25px);

          text-shadow:
            0 0 15px rgba(139, 92, 246, 0.8);
        }

        .dark-music-text {
          margin: 0;

          color: #d8c7ff;

          font-family: Cinzel, serif;

          letter-spacing:
            clamp(2px, .8vw, 8px);

          font-size:
            clamp(10px, 1.7vw, 14px);

          text-align: center;

          overflow-wrap: break-word;
        }

        .dark-music-player {
          width: 100%;

          margin-top:
            clamp(15px, 3vw, 25px);

          padding:
            clamp(8px, 2vw, 15px);

          border-radius:
            clamp(14px, 2vw, 20px);

          background:
            rgba(139, 92, 246, 0.08);

          border:
            1px solid rgba(139, 92, 246, 0.35);

          box-shadow:
            inset 0 0 25px rgba(139, 92, 246, 0.15);

          box-sizing: border-box;
        }

        /* =====================================================
           MAIN FRAME
        ===================================================== */

        .dark-main-frame {
          position: relative;

          width: 100%;

          padding:
            clamp(25px, 5vw, 55px);

          border-radius:
            clamp(20px, 3vw, 40px);

          background:
            linear-gradient(
              180deg,
              rgba(8, 5, 18, 0.98),
              rgba(3, 3, 8, 0.98)
            );

          border:
            2px solid rgba(139, 92, 246, 0.55);

          box-shadow:
            0 0 90px rgba(139, 92, 246, 0.28),
            inset 0 0 50px rgba(139, 92, 246, 0.12);

          box-sizing: border-box;
        }

        .dark-corner {
          position: absolute;

          font-size:
            clamp(22px, 3vw, 45px);

          line-height: 1;

          color: #8b5cf6;

          text-shadow:
            0 0 20px rgba(139, 92, 246, 0.8);

          z-index: 5;

          pointer-events: none;
        }

        .dark-corner.top-left {
          top:
            clamp(8px, 1.5vw, 18px);

          left:
            clamp(8px, 1.5vw, 18px);
        }

        .dark-corner.top-right {
          top:
            clamp(8px, 1.5vw, 18px);

          right:
            clamp(8px, 1.5vw, 18px);
        }

        .dark-corner.bottom-left {
          bottom:
            clamp(8px, 1.5vw, 18px);

          left:
            clamp(8px, 1.5vw, 18px);
        }

        .dark-corner.bottom-right {
          bottom:
            clamp(8px, 1.5vw, 18px);

          right:
            clamp(8px, 1.5vw, 18px);
        }

        /* =====================================================
           HEADER
        ===================================================== */

        .dark-header {
          width: 100%;

          text-align: center;

          margin-bottom:
            clamp(30px, 5vw, 50px);

          box-sizing: border-box;
        }

        .dark-realm {
          margin: 0;

          color: #a78bfa;

          letter-spacing:
            clamp(3px, 1vw, 9px);

          font-family: Cinzel, serif;

          font-size:
            clamp(9px, 1.5vw, 14px);

          line-height: 1.5;

          text-transform: uppercase;

          overflow-wrap: break-word;
        }

        .dark-name {
          margin-top:
            clamp(14px, 3vw, 25px);

          margin-bottom: 0;

          font-family: Cinzel, serif;

          font-size:
            clamp(30px, 6vw, 60px);

          line-height: 1.15;

          letter-spacing:
            clamp(1px, .6vw, 5px);

          color: #c7a8ff;

          text-shadow:
            0 0 35px rgba(139, 92, 246, 0.8);

          overflow-wrap: break-word;

          word-break: break-word;
        }

        .dark-title {
          margin:
            clamp(10px, 2vw, 20px)
            0
            0;

          color: #c4b5fd;

          font-size:
            clamp(12px, 2vw, 18px);

          line-height: 1.6;

          letter-spacing:
            clamp(1px, .6vw, 5px);

          font-family: Cinzel, serif;

          overflow-wrap: break-word;
        }

        /* =====================================================
           CONTENT GRID
        ===================================================== */

        .dark-content-grid {
          display: grid;

          grid-template-columns:
            minmax(210px, 280px)
            minmax(0, 1fr)
            minmax(210px, 280px);

          gap:
            clamp(18px, 3vw, 35px);

          align-items: center;

          width: 100%;

          box-sizing: border-box;
        }

        .dark-panel,
        .dark-right-panel {
          width: 100%;
          min-width: 0;

          box-sizing: border-box;
        }

        .dark-panel {
          padding:
            clamp(18px, 3vw, 30px);

          min-height:
            clamp(320px, 38vw, 520px);

          border-radius:
            clamp(18px, 2.5vw, 30px);

          background:
            rgba(10, 5, 20, 0.85);

          border:
            2px solid rgba(139, 92, 246, 0.45);

          box-shadow:
            0 0 40px rgba(139, 92, 246, 0.18);
        }

        .dark-panel-title {
          text-align: center;

          color: #a78bfa;

          font-family: Cinzel, serif;

          letter-spacing:
            clamp(2px, .5vw, 4px);

          margin:
            0 0 clamp(22px, 3vw, 35px);

          font-size:
            clamp(17px, 2vw, 23px);
        }

        /* =====================================================
           CHARACTER IMAGE
        ===================================================== */

        .dark-image-frame {
          position: relative;

          width: 100%;

          aspect-ratio: 3 / 4;

          min-height: 0;

          border-radius:
            clamp(22px, 3vw, 35px);

          overflow: hidden;

          background:
            radial-gradient(
              circle at center,
              rgba(139, 92, 246, 0.35),
              #040404 80%
            );

          border:
            2px solid rgba(139, 92, 246, 0.55);

          box-shadow:
            0 0 70px rgba(139, 92, 246, 0.35),
            inset 0 0 40px rgba(139, 92, 246, 0.15);

          box-sizing: border-box;
        }

        .dark-inner-frame {
          position: absolute;

          inset:
            clamp(8px, 1.5vw, 16px);

          border-radius:
            clamp(17px, 2.5vw, 28px);

          border:
            1px solid rgba(139, 92, 246, 0.35);

          z-index: 1;

          pointer-events: none;
        }

        .dark-image-glow {
          position: absolute;

          top: 50%;
          left: 50%;

          width:
            clamp(200px, 30vw, 420px);

          height:
            clamp(200px, 30vw, 420px);

          transform:
            translate(-50%, -50%);

          border-radius: 50%;

          background:
            radial-gradient(
              circle,
              rgba(139, 92, 246, 0.25),
              transparent 70%
            );

          filter: blur(20px);

          z-index: 1;

          pointer-events: none;
        }

        .dark-character-image {
          object-fit: contain;

          object-position: center center;

          padding:
            clamp(8px, 2vw, 15px);

          z-index: 2;

          filter:
            drop-shadow(
              0 0 55px
              rgba(139, 92, 246, 0.85)
            );
        }

        .dark-image-symbol {
          position: absolute;

          left: 50%;

          transform:
            translateX(-50%);

          color: #8b5cf6;

          font-size:
            clamp(16px, 2.5vw, 25px);

          z-index: 3;

          text-shadow:
            0 0 15px rgba(139, 92, 246, 0.8);
        }

        .dark-image-symbol.top {
          top:
            clamp(10px, 2vw, 20px);
        }

        .dark-image-symbol.bottom {
          bottom:
            clamp(10px, 2vw, 20px);
        }

        /* =====================================================
           RIGHT PANEL
        ===================================================== */

        .dark-right-panel {
          padding:
            clamp(18px, 3vw, 30px);

          min-height:
            clamp(320px, 38vw, 520px);

          border-radius:
            clamp(18px, 2.5vw, 30px);

          background:
            rgba(10, 5, 20, 0.85);

          border:
            2px solid rgba(139, 92, 246, 0.45);

          text-align: center;

          box-shadow:
            0 0 40px rgba(139, 92, 246, 0.18);
        }

        .dark-big-symbol {
          font-size:
            clamp(45px, 6vw, 70px);

          line-height: 1;

          color: #8b5cf6;

          text-shadow:
            0 0 30px rgba(139, 92, 246, 0.8);
        }

        .dark-quote-title {
          margin:
            clamp(12px, 2vw, 20px)
            0
            0;

          font-family: Cinzel, serif;

          color: #c7a8ff;

          letter-spacing:
            clamp(1px, .5vw, 3px);

          font-size:
            clamp(17px, 2.3vw, 24px);

          line-height: 1.4;

          overflow-wrap: break-word;
        }

        .dark-divider {
          width:
            clamp(100px, 15vw, 160px);

          max-width: 70%;

          height: 2px;

          margin:
            clamp(18px, 3vw, 25px)
            auto;

          background:
            linear-gradient(
              to right,
              transparent,
              #8b5cf6,
              transparent
            );
        }

        .dark-quote {
          margin:
            clamp(20px, 3vw, 35px) 0 0;

          color: #ddd;

          line-height: 2;

          font-style: italic;

          font-size:
            clamp(14px, 2vw, 19px);

          overflow-wrap: break-word;

          word-break: break-word;
        }

        /* =====================================================
           BIOGRAPHY
        ===================================================== */

        .dark-biography {
          width: 100%;

          margin-top:
            clamp(35px, 5vw, 60px);

          padding:
            clamp(22px, 5vw, 60px);

          border-radius:
            clamp(20px, 3vw, 35px);

          background:
            rgba(12, 8, 20, 0.85);

          border:
            2px solid rgba(139, 92, 246, 0.45);

          box-shadow:
            0 0 50px rgba(139, 92, 246, 0.18);

          box-sizing: border-box;
        }

        .dark-biography-title {
          margin: 0;

          text-align: center;

          font-family: Cinzel, serif;

          color: #a78bfa;

          font-size:
            clamp(23px, 4vw, 34px);

          line-height: 1.3;

          letter-spacing:
            clamp(2px, .6vw, 5px);

          overflow-wrap: break-word;
        }

        .dark-biography-divider {
          width:
            clamp(120px, 20vw, 240px);

          max-width: 70%;

          height: 2px;

          margin:
            clamp(18px, 3vw, 25px)
            auto
            clamp(25px, 4vw, 40px);

          background:
            linear-gradient(
              to right,
              transparent,
              #8b5cf6,
              transparent
            );
        }

        .dark-biography-text {
          width: 100%;

          margin: 0;

          text-align: center;

          color: #ddd;

          font-family: Georgia, serif;

          font-size:
            clamp(15px, 2.5vw, 20px);

          line-height: 2.25;

          white-space: pre-line;

          overflow-wrap: break-word;

          word-break: normal;
        }

        /* =====================================================
           INFO
        ===================================================== */

        .dark-info-item {
          width: 100%;

          margin-bottom:
            clamp(16px, 2vw, 24px);

          min-width: 0;

          box-sizing: border-box;
        }

        .dark-info-item:last-child {
          margin-bottom: 0;
        }

        .dark-info-title {
          margin: 0;

          color: #a78bfa;

          font-family: Cinzel, serif;

          font-size:
            clamp(9px, 1.2vw, 12px);

          letter-spacing:
            clamp(2px, .5vw, 4px);

          line-height: 1.4;
        }

        .dark-info-value {
          margin:
            8px
            0
            0;

          color: #fff;

          font-size:
            clamp(14px, 1.8vw, 17px);

          line-height: 1.5;

          overflow-wrap: break-word;

          word-break: break-word;
        }

        /* =====================================================
           TABLET
        ===================================================== */

        @media (max-width: 1100px) {
          .dark-content-grid {
            grid-template-columns: 1fr;

            max-width: 760px;

            margin: 0 auto;
          }

          .dark-panel,
          .dark-right-panel {
            min-height: auto;

            max-width: 620px;

            margin: 0 auto;
          }

          .dark-image-frame {
            width: min(100%, 520px);

            margin: 0 auto;
          }
        }

        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 700px) {
          .dark-theme-page {
            padding:
              12px
              7px
              35px;
          }

          .dark-main-frame {
            padding:
              28px
              10px;

            border-radius: 24px;
          }

          .dark-music-bar {
            padding:
              20px
              12px;

            border-radius: 20px;
          }

          .dark-music-title {
            gap: 8px;
          }

          .dark-music-text {
            letter-spacing: 2px;

            font-size: 10px;
          }

          .dark-header {
            padding:
              0
              8px;

            margin-bottom: 28px;
          }

          .dark-content-grid {
            gap: 18px;
          }

          .dark-panel,
          .dark-right-panel {
            padding:
              20px
              15px;

            border-radius: 20px;
          }

          .dark-image-frame {
            width:
              min(88vw, 430px);
          }

          .dark-biography {
            padding:
              28px
              16px;

            border-radius: 22px;
          }

          .dark-biography-text {
            text-align: left;

            line-height: 2;
          }
        }

        /* =====================================================
           SMALL PHONES
        ===================================================== */

        @media (max-width: 400px) {
          .dark-theme-page {
            padding-left: 5px;
            padding-right: 5px;
          }

          .dark-main-frame {
            padding-left: 8px;
            padding-right: 8px;
          }

          .dark-image-frame {
            width:
              min(88vw, 350px);
          }

          .dark-biography {
            padding:
              24px
              13px;
          }

          .dark-biography-text {
            font-size: 15px;
          }
        }
      `}</style>

      <main className="dark-theme-page">
        <div className="dark-theme-container">

          {/* ===================================================
              MUSIC BAR
          =================================================== */}

          <section className="dark-music-bar">
            <div
              className="dark-music-top-line"
              aria-hidden="true"
            />

            <div className="dark-music-title">
              <span
                className="dark-music-symbol"
                aria-hidden="true"
              >
                ✦
              </span>

              <p className="dark-music-text">
                CHARACTER THEME
              </p>

              <span
                className="dark-music-symbol"
                aria-hidden="true"
              >
                ✦
              </span>
            </div>

            <div className="dark-music-player">
              <DarkMusic
                music={character.music}
              />
            </div>

            <div
              className="dark-music-bottom-line"
              aria-hidden="true"
            />
          </section>

          {/* ===================================================
              MAIN FRAME
          =================================================== */}

          <div className="dark-main-frame">
            {/* DECORATIVE CORNERS */}

            <div
              className="dark-corner top-left"
              aria-hidden="true"
            >
              ❖
            </div>

            <div
              className="dark-corner top-right"
              aria-hidden="true"
            >
              ❖
            </div>

            <div
              className="dark-corner bottom-left"
              aria-hidden="true"
            >
              ❖
            </div>

            <div
              className="dark-corner bottom-right"
              aria-hidden="true"
            >
              ❖
            </div>

            {/* HEADER */}

            <header className="dark-header">
              <p className="dark-realm">
                DARK REALM
              </p>

              <h1 className="dark-name">
                {character.name || "UNKNOWN"}
              </h1>

              <p className="dark-title">
                {character.title || "CHARACTER"}
              </p>
            </header>

            {/* CONTENT */}

            <section className="dark-content-grid">

              {/* DETAILS */}

              <aside className="dark-panel">
                <h2 className="dark-panel-title">
                  ✦ DETAILS ✦
                </h2>

                <Info
                  title="TITLE"
                  value={character.title}
                />

                <Info
                  title="RACE"
                  value={character.race}
                />

                <Info
                  title="STATUS"
                  value={character.status}
                />

                <Info
                  title="KINGDOM"
                  value={character.kingdom}
                />

                <Info
                  title="UNIVERSE"
                  value={character.universe}
                />
              </aside>

              {/* IMAGE */}

              <div className="dark-image-frame">
                <div
                  className="dark-inner-frame"
                  aria-hidden="true"
                />

                <div
                  className="dark-image-glow"
                  aria-hidden="true"
                />

                <Image
                  src={
                    character.image ||
                    "/images/default-character.png"
                  }
                  alt={
                    character.name ||
                    "Character"
                  }
                  fill
                  priority
                  unoptimized
                  sizes="
                    (max-width: 480px) 88vw,
                    (max-width: 1100px) 70vw,
                    520px
                  "
                  className="dark-character-image"
                />

                <div
                  className="dark-image-symbol top"
                  aria-hidden="true"
                >
                  ✦
                </div>

                <div
                  className="dark-image-symbol bottom"
                  aria-hidden="true"
                >
                  ✦
                </div>
              </div>

              {/* QUOTE */}

              <aside className="dark-right-panel">
                <div
                  className="dark-big-symbol"
                  aria-hidden="true"
                >
                  ✦
                </div>

                <h2 className="dark-quote-title">
                  {character.title || "CHARACTER"}
                </h2>

                <div
                  className="dark-divider"
                  aria-hidden="true"
                />

                <p className="dark-quote">
                  ❝{" "}
                  {character.quote ||
                    "The darkness remembers."}{" "}
                  ❞
                </p>
              </aside>
            </section>

            {/* BIOGRAPHY */}

            <section className="dark-biography">
              <h2 className="dark-biography-title">
                ✦ BIOGRAPHY ✦
              </h2>

              <div
                className="dark-biography-divider"
                aria-hidden="true"
              />

              <p className="dark-biography-text">
                {character.description ||
                  "No biography available."}
              </p>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}

function Info({
  title,
  value,
}: {
  title: string;
  value?: string | null;
}) {
  return (
    <div className="dark-info-item">
      <h3 className="dark-info-title">
        {title}
      </h3>

      <p className="dark-info-value">
        {value || "Unknown"}
      </p>
    </div>
  );
}
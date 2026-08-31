
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
          min-height: 100vh;
          padding: 30px 20px;
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
        }

        .dark-theme-container {
          max-width: 1600px;
          margin: 0 auto;
          position: relative;
        }

        .dark-music-bar {
          position: relative;
          margin-bottom: 45px;
          padding: 25px 40px;
          border-radius: 30px;
          border: 2px solid rgba(139, 92, 246, 0.55);
          background:
            linear-gradient(
              180deg,
              rgba(35, 15, 65, 0.95),
              rgba(8, 5, 15, 0.98)
            );
          box-shadow:
            0 0 60px rgba(139, 92, 246, 0.35),
            inset 0 0 40px rgba(139, 92, 246, 0.15);
        }

        .dark-music-top-line,
        .dark-music-bottom-line {
          position: absolute;
          left: 20px;
          right: 20px;
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
          top: 10px;
        }

        .dark-music-bottom-line {
          bottom: 10px;
        }

        .dark-music-title {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 20px;
        }

        .dark-music-symbol {
          color: #8b5cf6;
          font-size: 25px;
          text-shadow:
            0 0 15px rgba(139, 92, 246, 0.8);
        }

        .dark-music-text {
          color: #d8c7ff;
          font-family: Cinzel, serif;
          letter-spacing: 8px;
          font-size: 14px;
        }

        .dark-music-player {
          margin-top: 25px;
          padding: 15px;
          border-radius: 20px;
          background: rgba(139, 92, 246, 0.08);
          border: 1px solid rgba(139, 92, 246, 0.35);
          box-shadow:
            inset 0 0 25px rgba(139, 92, 246, 0.15);
        }

        .dark-main-frame {
          position: relative;
          padding: 55px;
          border-radius: 40px;
          background:
            linear-gradient(
              180deg,
              rgba(8, 5, 18, 0.98),
              rgba(3, 3, 8, 0.98)
            );
          border: 2px solid rgba(139, 92, 246, 0.55);
          box-shadow:
            0 0 90px rgba(139, 92, 246, 0.28),
            inset 0 0 50px rgba(139, 92, 246, 0.12);
        }

        .dark-corner {
          position: absolute;
          font-size: 45px;
          color: #8b5cf6;
          text-shadow:
            0 0 20px rgba(139, 92, 246, 0.8);
          z-index: 5;
        }

        .dark-corner.top-left {
          top: 18px;
          left: 18px;
        }

        .dark-corner.top-right {
          top: 18px;
          right: 18px;
        }

        .dark-corner.bottom-left {
          bottom: 18px;
          left: 18px;
        }

        .dark-corner.bottom-right {
          bottom: 18px;
          right: 18px;
        }

        .dark-header {
          text-align: center;
          margin-bottom: 50px;
        }

        .dark-realm {
          color: #a78bfa;
          letter-spacing: 9px;
          font-family: Cinzel, serif;
          font-size: 14px;
        }

        .dark-name {
          margin-top: 25px;
          font-family: Cinzel, serif;
          font-size: 60px;
          letter-spacing: 5px;
          color: #c7a8ff;
          text-shadow:
            0 0 35px rgba(139, 92, 246, 0.8);
          word-break: break-word;
        }

        .dark-title {
          margin-top: 20px;
          color: #c4b5fd;
          font-size: 18px;
          letter-spacing: 5px;
          font-family: Cinzel, serif;
        }

        .dark-content-grid {
          display: grid;
          grid-template-columns: 280px minmax(0, 1fr) 280px;
          gap: 35px;
          align-items: center;
        }

        .dark-panel {
          padding: 30px;
          min-height: 520px;
          border-radius: 30px;
          background: rgba(10, 5, 20, 0.85);
          border: 2px solid rgba(139, 92, 246, 0.45);
          box-shadow:
            0 0 40px rgba(139, 92, 246, 0.18);
        }

        .dark-panel-title {
          text-align: center;
          color: #a78bfa;
          font-family: Cinzel, serif;
          letter-spacing: 4px;
          margin-bottom: 35px;
        }

        .dark-image-frame {
          position: relative;
          width: 100%;
          height: 760px;
          border-radius: 35px;
          overflow: hidden;
          background:
            radial-gradient(
              circle at center,
              rgba(139, 92, 246, 0.35),
              #040404 80%
            );
          border: 2px solid rgba(139, 92, 246, 0.55);
          box-shadow:
            0 0 70px rgba(139, 92, 246, 0.35),
            inset 0 0 40px rgba(139, 92, 246, 0.15);
        }

        .dark-inner-frame {
          position: absolute;
          inset: 16px;
          border-radius: 28px;
          border: 1px solid rgba(139, 92, 246, 0.35);
          z-index: 1;
          pointer-events: none;
        }

        .dark-image-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 420px;
          height: 420px;
          transform: translate(-50%, -50%);
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
          padding: 15px;
          z-index: 2;
          filter:
            drop-shadow(
              0 0 55px rgba(139, 92, 246, 0.85)
            );
        }

        .dark-image-symbol {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          color: #8b5cf6;
          font-size: 25px;
          z-index: 3;
        }

        .dark-image-symbol.top {
          top: 20px;
        }

        .dark-image-symbol.bottom {
          bottom: 20px;
        }

        .dark-right-panel {
          padding: 30px;
          min-height: 520px;
          border-radius: 30px;
          background: rgba(10, 5, 20, 0.85);
          border: 2px solid rgba(139, 92, 246, 0.45);
          text-align: center;
          box-shadow:
            0 0 40px rgba(139, 92, 246, 0.18);
        }

        .dark-big-symbol {
          font-size: 70px;
          color: #8b5cf6;
          text-shadow:
            0 0 30px rgba(139, 92, 246, 0.8);
        }

        .dark-quote-title {
          margin-top: 20px;
          font-family: Cinzel, serif;
          color: #c7a8ff;
          letter-spacing: 3px;
          word-break: break-word;
        }

        .dark-divider {
          width: 160px;
          height: 2px;
          margin: 25px auto;
          background:
            linear-gradient(
              to right,
              transparent,
              #8b5cf6,
              transparent
            );
        }

        .dark-quote {
          margin-top: 35px;
          color: #ddd;
          line-height: 2;
          font-style: italic;
          word-break: break-word;
        }

        .dark-biography {
          margin-top: 60px;
          padding: 60px;
          border-radius: 35px;
          background: rgba(12, 8, 20, 0.85);
          border: 2px solid rgba(139, 92, 246, 0.45);
          box-shadow:
            0 0 50px rgba(139, 92, 246, 0.18);
        }

        .dark-biography-title {
          text-align: center;
          font-family: Cinzel, serif;
          color: #a78bfa;
          font-size: 34px;
          letter-spacing: 5px;
        }

        .dark-biography-divider {
          width: 240px;
          height: 2px;
          margin: 25px auto 40px;
          background:
            linear-gradient(
              to right,
              transparent,
              #8b5cf6,
              transparent
            );
        }

        .dark-biography-text {
          text-align: center;
          color: #ddd;
          font-family: Georgia, serif;
          font-size: 20px;
          line-height: 2.35;
          white-space: pre-line;
          overflow-wrap: anywhere;
        }

        @media (max-width: 1100px) {
          .dark-main-frame {
            padding: 40px 30px;
          }

          .dark-content-grid {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .dark-panel,
          .dark-right-panel {
            min-height: auto;
          }

          .dark-image-frame {
            height: 650px;
          }

          .dark-name {
            font-size: 48px;
          }
        }

        @media (max-width: 700px) {
          .dark-theme-page {
            padding: 15px 10px 40px;
          }

          .dark-music-bar {
            margin-bottom: 25px;
            padding: 22px 15px;
            border-radius: 22px;
          }

          .dark-music-title {
            gap: 10px;
          }

          .dark-music-text {
            letter-spacing: 3px;
            font-size: 11px;
            text-align: center;
          }

          .dark-music-symbol {
            font-size: 18px;
          }

          .dark-music-player {
            margin-top: 18px;
            padding: 10px;
          }

          .dark-main-frame {
            padding: 30px 12px;
            border-radius: 25px;
          }

          .dark-corner {
            font-size: 28px;
          }

          .dark-corner.top-left {
            top: 10px;
            left: 8px;
          }

          .dark-corner.top-right {
            top: 10px;
            right: 8px;
          }

          .dark-corner.bottom-left {
            bottom: 10px;
            left: 8px;
          }

          .dark-corner.bottom-right {
            bottom: 10px;
            right: 8px;
          }

          .dark-header {
            margin-bottom: 30px;
            padding: 0 10px;
          }

          .dark-realm {
            letter-spacing: 4px;
            font-size: 11px;
          }

          .dark-name {
            margin-top: 15px;
            font-size: 32px;
            letter-spacing: 2px;
            line-height: 1.3;
          }

          .dark-title {
            margin-top: 12px;
            font-size: 13px;
            letter-spacing: 2px;
            line-height: 1.6;
          }

          .dark-content-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .dark-panel,
          .dark-right-panel {
            padding: 20px 16px;
            border-radius: 22px;
          }

          .dark-panel-title {
            margin-bottom: 25px;
            letter-spacing: 3px;
            font-size: 18px;
          }

          .dark-image-frame {
            height: 520px;
            border-radius: 25px;
          }

          .dark-inner-frame {
            inset: 10px;
            border-radius: 19px;
          }

          .dark-image-glow {
            width: 280px;
            height: 280px;
          }

          .dark-character-image {
            padding: 8px;
          }

          .dark-image-symbol {
            font-size: 18px;
          }

          .dark-image-symbol.top {
            top: 12px;
          }

          .dark-image-symbol.bottom {
            bottom: 12px;
          }

          .dark-big-symbol {
            font-size: 48px;
          }

          .dark-quote-title {
            font-size: 20px;
            letter-spacing: 2px;
          }

          .dark-quote {
            margin-top: 25px;
            line-height: 1.9;
            font-size: 15px;
          }

          .dark-biography {
            margin-top: 30px;
            padding: 30px 18px;
            border-radius: 25px;
          }

          .dark-biography-title {
            font-size: 24px;
            letter-spacing: 3px;
          }

          .dark-biography-divider {
            width: 160px;
            margin: 20px auto 30px;
          }

          .dark-biography-text {
            font-size: 16px;
            line-height: 2;
          }
        }

        @media (max-width: 400px) {
          .dark-theme-page {
            padding-left: 6px;
            padding-right: 6px;
          }

          .dark-main-frame {
            padding-left: 9px;
            padding-right: 9px;
          }

          .dark-name {
            font-size: 27px;
          }

          .dark-image-frame {
            height: 460px;
          }

          .dark-panel,
          .dark-right-panel {
            padding: 18px 13px;
          }
        }
      `}</style>

      <main className="dark-theme-page">
        <div className="dark-theme-container">

          <section className="dark-music-bar">

            <div className="dark-music-top-line" />

            <div className="dark-music-title">

              <span className="dark-music-symbol">
                ✦
              </span>

              <p className="dark-music-text">
                CHARACTER THEME
              </p>

              <span className="dark-music-symbol">
                ✦
              </span>

            </div>

            <div className="dark-music-player">
              <DarkMusic
                music={character.music}
              />
            </div>

            <div className="dark-music-bottom-line" />

          </section>

          <div className="dark-main-frame">

            <div className="dark-corner top-left">
              ❖
            </div>

            <div className="dark-corner top-right">
              ❖
            </div>

            <div className="dark-corner bottom-left">
              ❖
            </div>

            <div className="dark-corner bottom-right">
              ❖
            </div>

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

            <section className="dark-content-grid">

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

              <div className="dark-image-frame">

                <div className="dark-inner-frame" />

                <div className="dark-image-glow" />

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
                  sizes="(max-width: 700px) 100vw, 700px"
                  className="dark-character-image"
                />

                <div className="dark-image-symbol top">
                  ✦
                </div>

                <div className="dark-image-symbol bottom">
                  ✦
                </div>

              </div>

              <aside className="dark-right-panel">

                <div className="dark-big-symbol">
                  ✦
                </div>

                <h2 className="dark-quote-title">
                  {character.title || "CHARACTER"}
                </h2>

                <div className="dark-divider" />

                <p className="dark-quote">
                  ❝{" "}
                  {character.quote ||
                    "The darkness remembers."}{" "}
                  ❞
                </p>

              </aside>

            </section>

            <section className="dark-biography">

              <h2 className="dark-biography-title">
                ✦ BIOGRAPHY ✦
              </h2>

              <div className="dark-biography-divider" />

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
    <div
      style={{
        marginBottom: "24px",
      }}
    >
      <h3
        style={{
          color: "#a78bfa",
          fontFamily: "Cinzel,serif",
          fontSize: "12px",
          letterSpacing: "4px",
        }}
      >
        {title}
      </h3>

      <p
        style={{
          marginTop: "8px",
          color: "#fff",
          fontSize: "17px",
          overflowWrap: "anywhere",
        }}
      >
        {value || "Unknown"}
      </p>
    </div>
  );
}
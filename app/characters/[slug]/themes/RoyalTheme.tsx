"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import type { Character } from "../components/CharacterProfile";

type Props = {
  character: Character;
};

export default function RoyalTheme({ character }: Props) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  function toggleMusic() {
    if (!audioRef.current || !character.music) return;

    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
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
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        width: "100%",
        position: "relative",
        overflow: "hidden",
        padding:
          "clamp(45px, 7vw, 70px) clamp(10px, 4vw, 30px)",
        background:
          "radial-gradient(circle at top,#80601f 0%,#2a1b08 40%,#050505 100%)",
        color: "#f5e6bd",
        boxSizing: "border-box",
      }}
    >
      <audio
        ref={audioRef}
        src={character.music || undefined}
        loop
        preload="none"
      />

      <style>{`
        @keyframes royalDust {
          0% {
            transform: translateY(0);
            opacity: .2;
          }

          50% {
            transform: translateY(-40px);
            opacity: 1;
          }

          100% {
            transform: translateY(0);
            opacity: .2;
          }
        }

        @keyframes royalBorder {
          0%, 100% {
            box-shadow:
              0 0 30px rgba(215,181,109,.15);
          }

          50% {
            box-shadow:
              0 0 80px rgba(215,181,109,.35);
          }
        }

        .royal-page {
          width: 100%;
          box-sizing: border-box;
        }

        .royal-main-card {
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
          box-sizing: border-box;
        }

        .royal-main-grid {
          display: grid;
          grid-template-columns: minmax(280px, 420px) minmax(0, 1fr);
          gap: clamp(30px, 5vw, 60px);
          padding: clamp(30px, 5vw, 60px);
          box-sizing: border-box;
        }

        .royal-image {
          width: 100%;
          min-width: 0;
        }

        .royal-info {
          min-width: 0;
        }

        .royal-info-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 18px;
        }

        .royal-music-section {
          padding:
            0
            clamp(25px, 5vw, 60px)
            clamp(30px, 4vw, 50px);
          box-sizing: border-box;
        }

        .royal-music-bar {
          display: flex;
          align-items: center;
          gap: clamp(14px, 2.5vw, 25px);
          padding:
            clamp(15px, 3vw, 22px)
            clamp(18px, 4vw, 35px);
          box-sizing: border-box;
        }

        .royal-bio {
          width: 100%;
          max-width: 900px;
          margin:
            clamp(15px, 3vw, 20px)
            auto
            clamp(50px, 7vw, 80px);
          padding:
            0
            clamp(18px, 4vw, 40px);
          box-sizing: border-box;
        }

        @media (max-width: 900px) {
          .royal-main-grid {
            grid-template-columns: 1fr;
          }

          .royal-image {
            width: min(100%, 520px);
            margin: 0 auto;
          }
        }

        @media (max-width: 600px) {
          .royal-main-grid {
            gap: 28px;
            padding:
              clamp(18px, 5vw, 28px);
          }

          .royal-info-grid {
            grid-template-columns: 1fr;
            gap: 12px;
          }

          .royal-music-bar {
            flex-wrap: wrap;
            border-radius: 24px !important;
          }

          .royal-music-details {
            flex: 1 1 calc(100% - 85px) !important;
            min-width: 0 !important;
          }

          .royal-music-crown {
            display: none !important;
          }

          .royal-music-divider {
            margin-bottom: 24px !important;
          }
        }

        @media (max-width: 390px) {
          .royal-music-section {
            padding-left: 16px !important;
            padding-right: 16px !important;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .royal-main-card {
            animation: none !important;
          }

          .royal-dust-particle {
            animation: none !important;
            opacity: .3 !important;
          }
        }
      `}</style>

      {/* GOLDEN DUST */}

      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          overflow: "hidden",
        }}
      >
        {Array.from({ length: 35 }).map((_, i) => (
          <span
            key={i}
            className="royal-dust-particle"
            style={{
              position: "absolute",
              width: `${3 + (i % 3)}px`,
              height: `${3 + (i % 3)}px`,
              borderRadius: "50%",
              background: "#f3d27a",
              boxShadow: "0 0 15px #f3d27a",
              top: `${(i * 29) % 100}%`,
              left: `${(i * 47) % 100}%`,
              animation: `royalDust ${
                4 + (i % 5)
              }s infinite ease-in-out`,
              animationDelay: `${i * 0.2}s`,
            }}
          />
        ))}
      </div>

      {/* MAIN CARD */}

      <section
        className="royal-main-card"
        style={{
          position: "relative",
          zIndex: 2,
          borderRadius: "clamp(18px, 3vw, 35px)",
          overflow: "hidden",
          background: "rgba(12,9,5,.94)",
          border: "1px solid rgba(215,181,109,.5)",
          animation: "royalBorder 8s infinite",
        }}
      >
        {/* GOLD TOP BORDER */}

        <div
          style={{
            height: "clamp(4px, .5vw, 7px)",
            background:
              "linear-gradient(90deg,#765316,#f5d77a,#fff3b0,#f5d77a,#765316)",
          }}
        />

        {/* MAIN CONTENT */}

        <div className="royal-main-grid">
          {/* CHARACTER IMAGE */}

          <div
            className="royal-image"
            style={{
              position: "relative",
              aspectRatio: "3 / 4",
              borderRadius: "clamp(18px, 3vw, 30px)",
              overflow: "hidden",
              border:
                "2px solid rgba(215,181,109,.6)",
              boxShadow:
                "0 30px 70px rgba(0,0,0,.8)",
              background:
                "radial-gradient(circle at center,#2a1b08,#080808)",
              boxSizing: "border-box",
            }}
          >
            {character.image ? (
              <Image
                src={character.image}
                alt={character.name || "character"}
                fill
                priority
                unoptimized
                sizes="
                  (max-width: 600px) 88vw,
                  (max-width: 900px) 70vw,
                  420px
                "
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              />
            ) : (
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#8f7750",
                  fontFamily: "Cinzel, serif",
                  fontSize: "clamp(13px, 3vw, 18px)",
                  textAlign: "center",
                }}
              >
                NO IMAGE
              </div>
            )}
          </div>

          {/* CHARACTER INFORMATION */}

          <div className="royal-info">
            <div
              style={{
                color: "#d7b56d",
                fontSize: "clamp(10px, 1.5vw, 14px)",
                letterSpacing:
                  "clamp(3px, .8vw, 7px)",
                lineHeight: 1.5,
                textTransform: "uppercase",
                marginBottom:
                  "clamp(12px, 2vw, 18px)",
                overflowWrap: "break-word",
              }}
            >
              Royal Character
            </div>

            <h1
              style={{
                margin: 0,
                fontFamily: "Cinzel, serif",
                fontSize: "clamp(38px, 6vw, 64px)",
                lineHeight: 1.1,
                color: "#fff4d2",
                fontWeight: 400,
                letterSpacing:
                  "clamp(1px, .3vw, 2px)",
                overflowWrap: "break-word",
                wordBreak: "break-word",
              }}
            >
              {character.name || "Unknown"}
            </h1>

            <div
              style={{
                marginTop:
                  "clamp(12px, 2vw, 20px)",
                fontFamily: "Cinzel, serif",
                fontSize: "clamp(18px, 3vw, 26px)",
                lineHeight: 1.4,
                color: "#d7b56d",
                overflowWrap: "break-word",
              }}
            >
              {character.title || "Royal Guardian"}
            </div>

            <div
              style={{
                width: "clamp(120px, 25vw, 220px)",
                height: "2px",
                marginTop:
                  "clamp(20px, 3vw, 30px)",
                marginBottom:
                  "clamp(22px, 4vw, 35px)",
                background:
                  "linear-gradient(90deg,transparent,#d7b56d,transparent)",
              }}
            />

            {character.quote && (
              <blockquote
                style={{
                  width: "100%",
                  margin: 0,
                  fontSize: "clamp(17px, 2.6vw, 22px)",
                  lineHeight: 1.8,
                  fontStyle: "italic",
                  color: "#f5e7c3",
                  overflowWrap: "break-word",
                  wordBreak: "break-word",
                  boxSizing: "border-box",
                }}
              >
                ❝ {character.quote} ❞
              </blockquote>
            )}

            <div
              className="royal-info-grid"
              style={{
                marginTop:
                  "clamp(28px, 5vw, 45px)",
              }}
            >
              <Info
                label="Kingdom"
                value={character.kingdom}
              />

              <Info
                label="Race"
                value={character.race}
              />

              <Info
                label="Status"
                value={character.status}
              />

              <Info
                label="Universe"
                value={character.universe}
              />
            </div>
          </div>
        </div>

        {/* MUSIC SECTION */}

        <div className="royal-music-section">
          <div
            className="royal-music-divider"
            style={{
              height: 2,
              background:
                "linear-gradient(90deg,transparent,#d7b56d,transparent)",
              marginBottom:
                "clamp(24px, 4vw, 40px)",
            }}
          />

          <div
            className="royal-music-bar"
            style={{
              borderRadius: "50px",
              background:
                "linear-gradient(90deg,#251805,#70501a,#251805)",
              border:
                "1px solid rgba(215,181,109,.55)",
              boxShadow:
                "0 0 40px rgba(215,181,109,.18)",
            }}
          >
            {/* PLAY BUTTON */}

            <button
              type="button"
              onClick={toggleMusic}
              aria-label={
                playing ? "Pause music" : "Play music"
              }
              disabled={!character.music}
              style={{
                width: "clamp(50px, 8vw, 60px)",
                height: "clamp(50px, 8vw, 60px)",
                flexShrink: 0,
                border: "none",
                padding: 0,
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "clamp(22px, 4vw, 28px)",
                cursor: character.music
                  ? "pointer"
                  : "default",
                color: "#2b1800",
                background:
                  "radial-gradient(circle,#ffe9a0,#b8862c)",
                boxShadow: playing
                  ? "0 0 45px rgba(255,220,120,.9)"
                  : "0 0 25px rgba(255,220,120,.5)",
                transition: "all .3s",
                opacity: character.music ? 1 : 0.55,
              }}
            >
              {playing ? "Ⅱ" : "♪"}
            </button>

            {/* MUSIC DETAILS */}

            <div
              className="royal-music-details"
              style={{
                flex: 1,
                minWidth: 0,
              }}
            >
              <div
                style={{
                  fontFamily: "Cinzel,serif",
                  color: "#ffe5a0",
                  letterSpacing:
                    "clamp(1px, .5vw, 3px)",
                  fontSize:
                    "clamp(12px, 2vw, 16px)",
                  lineHeight: 1.4,
                  marginBottom: "10px",
                  overflowWrap: "break-word",
                }}
              >
                Royal Theme Music
              </div>

              <div
                style={{
                  width: "100%",
                  height: "6px",
                  borderRadius: "10px",
                  background:
                    "linear-gradient(90deg,#d7b56d 35%,rgba(255,255,255,.15) 35%)",
                }}
              />
            </div>

            {/* CROWN */}

            <div
              className="royal-music-crown"
              style={{
                color: "#ffe9a5",
                fontSize:
                  "clamp(18px, 3vw, 22px)",
                flexShrink: 0,
              }}
            >
              ♛
            </div>
          </div>
        </div>

        {/* BIOGRAPHY */}

        <div className="royal-bio">
          <p
            style={{
              margin: 0,
              textAlign: "center",
              fontFamily: "Georgia, serif",
              fontSize:
                "clamp(16px, 2.8vw, 22px)",
              lineHeight: 2,
              color: "#f2e5c2",
              overflowWrap: "break-word",
              wordBreak: "break-word",
            }}
          >
            {character.description ||
              "No biography available."}
          </p>
        </div>
      </section>
    </main>
  );
}

function Info({
  label,
  value,
}: {
  label: string;
  value?: string | null;
}) {
  return (
    <div
      style={{
        width: "100%",
        minWidth: 0,
        padding:
          "clamp(15px, 3vw, 20px)",
        borderRadius:
          "clamp(12px, 2.5vw, 18px)",
        background:
          "linear-gradient(180deg,rgba(255,255,255,.05),rgba(255,215,120,.03))",
        border:
          "1px solid rgba(215,181,109,.25)",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          color: "#d7b56d",
          fontSize:
            "clamp(9px, 1.8vw, 12px)",
          letterSpacing:
            "clamp(1px, .5vw, 3px)",
          lineHeight: 1.4,
          textTransform: "uppercase",
          marginBottom:
            "clamp(7px, 1.5vw, 10px)",
          overflowWrap: "break-word",
        }}
      >
        {label}
      </div>

      <div
        style={{
          color: "#fff4d8",
          fontSize:
            "clamp(14px, 2.5vw, 18px)",
          lineHeight: 1.5,
          overflowWrap: "break-word",
          wordBreak: "break-word",
        }}
      >
        {value || "Unknown"}
      </div>
    </div>
  );
}
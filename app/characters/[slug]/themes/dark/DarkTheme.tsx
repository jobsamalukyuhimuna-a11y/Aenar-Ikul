import type { Character } from "../../components/CharacterTypes";
import Image from "next/image";
import DarkMusic from "./DarkMusic";

type Props = {
  character: Character;
};

export default function DarkTheme({
  character,
}: Props) {
  return (
    <main
      style={{
        minHeight: "100vh",
        width: "100%",
        padding:
          "clamp(25px, 5vw, 50px) clamp(10px, 3vw, 20px)",
        background:
          `
          radial-gradient(
            circle at 50% 0%,
            rgba(90,60,130,.25),
            transparent 35%
          ),
          radial-gradient(
            circle at bottom,
            rgba(40,40,60,.25),
            transparent 45%
          ),
          #020202
          `,
        color: "#fff",
        position: "relative",
        overflowX: "hidden",
        boxSizing: "border-box",
      }}
    >
      <style>{`
        .dark-page {
          width: 100%;
          max-width: 1500px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
          box-sizing: border-box;
        }

        .dark-header {
          width: 100%;
          text-align: center;
          margin-bottom: clamp(35px, 6vw, 55px);
        }

        .dark-main-grid {
          display: grid;
          grid-template-columns:
            minmax(210px, 280px)
            minmax(0, 1fr)
            minmax(210px, 280px);
          gap: clamp(18px, 3vw, 35px);
          align-items: center;
          width: 100%;
        }

        .dark-side-panel {
          width: 100%;
          min-width: 0;
          box-sizing: border-box;
        }

        .dark-portrait {
          position: relative;
          width: 100%;
          aspect-ratio: 3 / 4;
          min-height: 0;
          border-radius: clamp(22px, 3vw, 45px);
          overflow: hidden;
          background:
            radial-gradient(
              circle at center,
              rgba(90,70,130,.35),
              rgba(0,0,0,.95) 70%
            );
          border: 1px solid rgba(255,255,255,.12);
          box-shadow:
            0 0 100px rgba(100,70,150,.35),
            inset 0 0 60px rgba(0,0,0,.8);
          box-sizing: border-box;
        }

        .dark-portrait-inner {
          position: absolute;
          inset: clamp(12px, 1.5vw, 20px);
          border-radius: clamp(18px, 2.5vw, 35px);
          border: 1px solid rgba(255,255,255,.08);
          pointer-events: none;
          z-index: 2;
        }

        .dark-portrait img {
          object-fit: contain;
          padding: clamp(12px, 2vw, 25px);
        }

        .dark-info-panel {
          width: 100%;
          box-sizing: border-box;
        }

        .dark-quote {
          width: 100%;
          box-sizing: border-box;
        }

        .dark-bio {
          width: 100%;
          margin-top: clamp(40px, 6vw, 65px);
          padding: clamp(22px, 5vw, 45px);
          border-radius: clamp(20px, 3vw, 30px);
          background: rgba(255,255,255,.018);
          border: 1px solid rgba(255,255,255,.07);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          box-sizing: border-box;
        }

        .dark-bio-text {
          width: 100%;
          overflow-wrap: break-word;
          word-break: normal;
        }

        @media (max-width: 1100px) {
          .dark-main-grid {
            grid-template-columns: 1fr;
            max-width: 760px;
            margin: 0 auto;
          }

          .dark-side-panel {
            width: 100%;
            max-width: 520px;
            margin: 0 auto;
          }

          .dark-portrait {
            width: min(100%, 500px);
            margin: 0 auto;
          }

          .dark-main-grid .dark-center {
            order: 1;
          }

          .dark-main-grid .dark-details {
            order: 2;
          }

          .dark-main-grid .dark-quote {
            order: 3;
          }

          .dark-music-wrap {
            display: flex;
            justify-content: center;
          }
        }

        @media (max-width: 768px) {
          .dark-header h1 {
            font-size: clamp(34px, 9vw, 52px) !important;
            letter-spacing: clamp(2px, 1vw, 5px) !important;
            line-height: 1.1 !important;
            overflow-wrap: break-word !important;
          }

          .dark-header .dark-label {
            font-size: clamp(9px, 2.3vw, 11px) !important;
            letter-spacing: clamp(3px, 1vw, 6px) !important;
          }

          .dark-header .dark-title {
            font-size: clamp(13px, 3.5vw, 18px) !important;
            letter-spacing: clamp(1px, .8vw, 4px) !important;
          }

          .dark-side-panel {
            max-width: 100%;
          }

          .dark-portrait {
            width: min(88vw, 430px);
          }

          .dark-bio {
            padding: clamp(18px, 5vw, 28px);
          }

          .dark-bio-text {
            font-size: clamp(15px, 4vw, 19px) !important;
            line-height: 1.9 !important;
            text-align: left !important;
          }
        }

        @media (max-width: 480px) {
          .dark-portrait {
            width: min(88vw, 360px);
            border-radius: 24px;
          }

          .dark-portrait-inner {
            inset: 10px;
            border-radius: 18px;
          }

          .dark-bio {
            border-radius: 20px;
          }
        }
      `}</style>

      <div
        className="dark-page"
        style={{
          padding:
            "clamp(14px, 3vw, 35px)",
          borderRadius:
            "clamp(20px, 3vw, 35px)",
          background: "rgba(5,5,8,.78)",
          border:
            "1px solid rgba(255,255,255,.06)",
          boxShadow:
            "0 40px 120px rgba(0,0,0,.9)",
        }}
      >
        {/* MUSIC */}

        <div className="dark-music-wrap">
          <DarkMusic
            music={character.music}
          />
        </div>

        {/* HEADER */}

        <header
          className="dark-header"
          style={{
            textAlign: "center",
          }}
        >
          <p
            className="dark-label"
            style={{
              margin: 0,
              color: "#666",
              letterSpacing: "10px",
              fontSize: "11px",
              textTransform: "uppercase",
            }}
          >
            DARK CHARACTER
          </p>

          <h1
            style={{
              marginTop: "20px",
              marginBottom: 0,
              fontFamily: "Cinzel,serif",
              fontSize: "clamp(44px, 5vw, 62px)",
              lineHeight: 1.1,
              letterSpacing: "clamp(3px, .7vw, 7px)",
              color: "#fff",
              textShadow:
                "0 0 35px rgba(255,255,255,.15)",
              overflowWrap: "break-word",
              wordBreak: "break-word",
            }}
          >
            {character.name || "UNKNOWN"}
          </h1>

          <p
            className="dark-title"
            style={{
              marginTop: "15px",
              marginBottom: 0,
              color: "#999",
              letterSpacing: "5px",
              fontSize: "18px",
              lineHeight: 1.5,
              overflowWrap: "break-word",
            }}
          >
            {character.title || "CHARACTER"}
          </p>
        </header>

        {/* MAIN CONTENT */}

        <section className="dark-main-grid">
          {/* DETAILS */}

          <aside
            className="dark-side-panel dark-details"
            style={{
              padding:
                "clamp(20px, 3vw, 30px)",
              borderRadius:
                "clamp(18px, 2.5vw, 25px)",
              background:
                "rgba(255,255,255,.025)",
              border:
                "1px solid rgba(255,255,255,.07)",
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter:
                "blur(10px)",
            }}
          >
            <h2
              style={{
                fontFamily: "Cinzel,serif",
                color: "#ddd",
                margin:
                  "0 0 clamp(22px, 3vw, 30px)",
                letterSpacing: "2px",
                fontSize:
                  "clamp(20px, 2.5vw, 26px)",
              }}
            >
              DETAILS
            </h2>

            <Info
              title="RACE"
              value={character.race}
            />

            <Info
              title="KINGDOM"
              value={character.kingdom}
            />

            <Info
              title="STATUS"
              value={character.status}
            />

            <Info
              title="UNIVERSE"
              value={character.universe}
            />
          </aside>

          {/* PORTRAIT */}

          <div className="dark-center">
            <div className="dark-portrait">
              <div className="dark-portrait-inner" />

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
                  500px
                "
                style={{
                  objectFit: "contain",
                  padding:
                    "clamp(14px, 2vw, 25px)",
                  filter:
                    "drop-shadow(0 0 45px rgba(120,100,180,.5))",
                }}
              />
            </div>
          </div>

          {/* QUOTE */}

          <aside
            className="dark-side-panel dark-quote"
            style={{
              padding:
                "clamp(20px, 3vw, 30px)",
              borderRadius:
                "clamp(18px, 2.5vw, 25px)",
              background:
                "rgba(255,255,255,.025)",
              border:
                "1px solid rgba(255,255,255,.07)",
              textAlign: "center",
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter:
                "blur(10px)",
            }}
          >
            <h2
              style={{
                margin: 0,
                fontFamily: "Cinzel,serif",
                color: "#ddd",
                letterSpacing: "2px",
                fontSize:
                  "clamp(20px, 2.5vw, 26px)",
              }}
            >
              QUOTE
            </h2>

            <p
              style={{
                marginTop:
                  "clamp(22px, 4vw, 35px)",
                marginBottom: 0,
                color: "#aaa",
                fontSize:
                  "clamp(15px, 2.5vw, 19px)",
                lineHeight: 2,
                fontStyle: "italic",
                overflowWrap: "break-word",
                wordBreak: "break-word",
              }}
            >
              ❝ {character.quote ||
                "The darkness remembers."} ❞
            </p>
          </aside>
        </section>

        {/* BIOGRAPHY */}

        <section className="dark-bio">
          <h2
            style={{
              margin: 0,
              textAlign: "center",
              fontFamily: "Cinzel,serif",
              fontSize:
                "clamp(25px, 4vw, 36px)",
              lineHeight: 1.25,
              color: "#ddd",
              letterSpacing:
                "clamp(1px, .5vw, 3px)",
            }}
          >
            BIOGRAPHY
          </h2>

          <p
            className="dark-bio-text"
            style={{
              margin:
                "clamp(20px, 4vw, 30px) 0 0",
              textAlign: "center",
              fontFamily: "Georgia,serif",
              fontSize:
                "clamp(16px, 2.7vw, 21px)",
              lineHeight: 2.3,
              color: "#bbb",
            }}
          >
            {character.description ||
              "No biography available."}
          </p>
        </section>
      </div>
    </main>
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
        marginBottom:
          "clamp(16px, 2vw, 22px)",
        minWidth: 0,
      }}
    >
      <h3
        style={{
          margin: 0,
          color: "#666",
          fontSize:
            "clamp(9px, 1.2vw, 11px)",
          letterSpacing:
            "clamp(2px, .5vw, 4px)",
          lineHeight: 1.4,
          textTransform: "uppercase",
        }}
      >
        {title}
      </h3>

      <p
        style={{
          marginTop: "8px",
          marginBottom: 0,
          color: "#eee",
          fontSize:
            "clamp(14px, 2vw, 17px)",
          lineHeight: 1.5,
          overflowWrap: "break-word",
          wordBreak: "break-word",
        }}
      >
        {value || "Unknown"}
      </p>
    </div>
  );
}
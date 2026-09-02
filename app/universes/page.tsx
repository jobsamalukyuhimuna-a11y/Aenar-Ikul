import Image from "next/image";
import Link from "next/link";
import StarsBackground from "../components/StarsBackground";
import NebulaBackground from "../components/NebulaBackground";
import GoldenDust from "../components/GoldenDust";
import ShootingStars from "../components/ShootingStars";
import { universes } from "../library/data/universes";

export default function UniversesPage() {
  return (
    <main
      className="universes-page"
      style={{
        minHeight: "100vh",
        width: "100%",
        position: "relative",
        overflow: "hidden",
        background:
          "radial-gradient(circle at top,#251736 0%,#0b0b0b 45%,#050505 100%)",
        color: "#fff",
        padding:
          "clamp(70px, 10vw, 120px) clamp(12px, 4vw, 60px)",
        boxSizing: "border-box",
      }}
    >
      <StarsBackground />
      <NebulaBackground />
      <GoldenDust />
      <ShootingStars />

      <div
        style={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          maxWidth: "1400px",
          margin: "0 auto",
          boxSizing: "border-box",
        }}
      >
        {/* PAGE HEADER */}

        <section
          style={{
            width: "100%",
            textAlign: "center",
            marginBottom: "clamp(50px, 8vw, 90px)",
            boxSizing: "border-box",
          }}
        >
          <p
            style={{
              margin: 0,
              color: "#9d7d3d",
              letterSpacing: "clamp(2px, 1vw, 8px)",
              fontSize: "clamp(9px, 2vw, 14px)",
              lineHeight: 1.5,
              overflowWrap: "break-word",
            }}
          >
            THE WORLDS ARCHIVE
          </p>

          <h1
            style={{
              width: "100%",
              margin:
                "clamp(14px, 3vw, 20px) 0 0",
              color: "#d7b56d",
              fontSize: "clamp(40px, 8vw, 70px)",
              lineHeight: 1.1,
              maxWidth: "100%",
              fontWeight: 400,
              letterSpacing: "clamp(2px, .7vw, 6px)",
              fontFamily: "Cinzel, serif",
              textShadow: "0 0 30px rgba(215,181,109,.35)",
              overflowWrap: "break-word",
            }}
          >
            Universes
          </h1>

          <p
            style={{
              width: "100%",
              maxWidth: "760px",
              margin:
                "clamp(14px, 3vw, 20px) auto 0",
              color: "#bdbdbd",
              fontSize: "clamp(15px, 3vw, 22px)",
              lineHeight: 1.8,
              overflowWrap: "break-word",
              boxSizing: "border-box",
            }}
          >
            Discover the worlds, civilizations and legends of AENAR IKUL.
          </p>
        </section>

        {/* UNIVERSES GRID */}

        <div
          className="universes-grid"
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
            gap: "clamp(20px, 4vw, 40px)",
            width: "100%",
            boxSizing: "border-box",
          }}
        >
          {universes.map((universe) => (
            <div
              key={universe.id}
              className="universe-card"
              style={{
                width: "100%",
                minWidth: 0,
                background: "rgba(17,17,17,.82)",
                border: "1px solid rgba(200,164,77,.25)",
                borderRadius: "clamp(14px, 3vw, 22px)",
                overflow: "hidden",
                backdropFilter: "blur(14px)",
                WebkitBackdropFilter: "blur(14px)",
                boxShadow: "0 25px 60px rgba(0,0,0,.5)",
                boxSizing: "border-box",
              }}
            >
              {/* COVER */}

              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "clamp(210px, 30vw, 260px)",
                  overflow: "hidden",
                  boxSizing: "border-box",
                }}
              >
                <Image
                  src={universe.cover}
                  alt={universe.name}
                  fill
                  unoptimized
                  sizes="
                    (max-width: 600px) 92vw,
                    (max-width: 1024px) 46vw,
                    430px
                  "
                  style={{
                    objectFit: "cover",
                    objectPosition: "center center",
                  }}
                />

                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to top, rgba(0,0,0,.9), rgba(0,0,0,.1))",
                  }}
                />

                <div
                  style={{
                    position: "absolute",
                    left: "clamp(14px, 3vw, 25px)",
                    bottom: "clamp(14px, 3vw, 25px)",
                    maxWidth: "calc(100% - 28px)",
                  }}
                >
                  <span
                    style={{
                      display: "inline-block",
                      color: "#d7b56d",
                      border:
                        "1px solid rgba(215,181,109,.35)",
                      padding:
                        "clamp(5px, 1.5vw, 6px) clamp(10px, 2.5vw, 14px)",
                      borderRadius: "50px",
                      fontSize: "clamp(10px, 2vw, 13px)",
                      letterSpacing:
                        "clamp(1px, .5vw, 2px)",
                      lineHeight: 1.4,
                      maxWidth: "100%",
                      overflowWrap: "break-word",
                    }}
                  >
                    {universe.category}
                  </span>
                </div>
              </div>

              {/* CONTENT */}

              <div
                style={{
                  width: "100%",
                  padding:
                    "clamp(20px, 5vw, 35px)",
                  boxSizing: "border-box",
                }}
              >
                <h2
                  style={{
                    margin:
                      "0 0 clamp(12px, 3vw, 18px)",
                    color: "#d7b56d",
                    fontSize: "clamp(26px, 5vw, 38px)",
                    lineHeight: 1.2,
                    fontFamily: "Cinzel, serif",
                    fontWeight: 400,
                    overflowWrap: "break-word",
                    wordBreak: "break-word",
                  }}
                >
                  {universe.name}
                </h2>

                <p
                  style={{
                    margin:
                      "0 0 clamp(18px, 4vw, 25px)",
                    color: "#bdbdbd",
                    fontSize: "clamp(14px, 2.5vw, 17px)",
                    lineHeight: 1.8,
                    overflowWrap: "break-word",
                    wordBreak: "break-word",
                  }}
                >
                  {universe.description}
                </p>

                <blockquote
                  style={{
                    margin:
                      "0 0 clamp(22px, 5vw, 30px)",
                    color: "#d7b56d",
                    fontSize: "clamp(14px, 2.5vw, 17px)",
                    lineHeight: 1.7,
                    fontStyle: "italic",
                    borderLeft:
                      "2px solid rgba(215,181,109,.4)",
                    paddingLeft:
                      "clamp(12px, 3vw, 18px)",
                    overflowWrap: "break-word",
                    wordBreak: "break-word",
                    boxSizing: "border-box",
                  }}
                >
                  “{universe.quote}”
                </blockquote>

                {/* STATS */}

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns:
                      "repeat(3, minmax(0, 1fr))",
                    gap: "clamp(8px, 3vw, 18px)",
                    marginBottom:
                      "clamp(24px, 5vw, 35px)",
                    textAlign: "center",
                    width: "100%",
                    boxSizing: "border-box",
                  }}
                >
                  <div style={{ minWidth: 0 }}>
                    <strong
                      style={{
                        display: "block",
                        color: "#d7b56d",
                        fontSize:
                          "clamp(21px, 4vw, 26px)",
                        lineHeight: 1.2,
                      }}
                    >
                      {universe.stats.books}
                    </strong>

                    <div
                      style={{
                        marginTop: "5px",
                        color: "#888",
                        fontSize:
                          "clamp(10px, 2vw, 14px)",
                        lineHeight: 1.4,
                      }}
                    >
                      Books
                    </div>
                  </div>

                  <div style={{ minWidth: 0 }}>
                    <strong
                      style={{
                        display: "block",
                        color: "#d7b56d",
                        fontSize:
                          "clamp(21px, 4vw, 26px)",
                        lineHeight: 1.2,
                      }}
                    >
                      {universe.stats.kingdoms}
                    </strong>

                    <div
                      style={{
                        marginTop: "5px",
                        color: "#888",
                        fontSize:
                          "clamp(10px, 2vw, 14px)",
                        lineHeight: 1.4,
                      }}
                    >
                      Kingdoms
                    </div>
                  </div>

                  <div style={{ minWidth: 0 }}>
                    <strong
                      style={{
                        display: "block",
                        color: "#d7b56d",
                        fontSize:
                          "clamp(21px, 4vw, 26px)",
                        lineHeight: 1.2,
                      }}
                    >
                      {universe.stats.characters}
                    </strong>

                    <div
                      style={{
                        marginTop: "5px",
                        color: "#888",
                        fontSize:
                          "clamp(10px, 2vw, 14px)",
                        lineHeight: 1.4,
                      }}
                    >
                      Characters
                    </div>
                  </div>
                </div>

                {/* BUTTON */}

                <Link
                  href={`/universes/${universe.slug}`}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                    minHeight: "clamp(48px, 11vw, 54px)",
                    padding:
                      "clamp(11px, 3vw, 16px) clamp(12px, 3vw, 18px)",
                    border:
                      "1px solid rgba(200,164,77,.45)",
                    borderRadius:
                      "clamp(8px, 2vw, 10px)",
                    color: "#d7b56d",
                    textDecoration: "none",
                    letterSpacing:
                      "clamp(.5px, .5vw, 2px)",
                    fontWeight: "bold",
                    fontSize:
                      "clamp(11px, 2.5vw, 15px)",
                    lineHeight: 1.3,
                    textAlign: "center",
                    boxSizing: "border-box",
                  }}
                >
                  EXPLORE UNIVERSE →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
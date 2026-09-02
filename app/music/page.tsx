import Image from "next/image";
import Link from "next/link";
import { prisma } from "@/lib/prisma";

function formatDuration(duration: number | null) {
  if (
    duration === null ||
    !Number.isFinite(duration) ||
    duration < 0
  ) {
    return "--:--";
  }

  const totalSeconds = Math.floor(duration);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  return `${minutes}:${seconds
    .toString()
    .padStart(2, "0")}`;
}

export default async function MusicPage() {
  const music = await prisma.music.findMany({
    orderBy: {
      id: "desc",
    },
  });

  return (
    <main
      style={{
        minHeight: "100vh",
        width: "100%",
        background:
          "radial-gradient(circle at top, #24143a 0%, #090909 42%, #030303 100%)",
        color: "#fff",
        padding:
          "clamp(30px, 6vw, 80px) clamp(12px, 4vw, 60px) 100px",
        boxSizing: "border-box",
        overflowX: "hidden",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1500px",
          margin: "0 auto",
          boxSizing: "border-box",
        }}
      >
        {/* HEADER */}

        <header
          style={{
            textAlign: "center",
            marginBottom:
              "clamp(40px, 7vw, 80px)",
          }}
        >
          <p
            style={{
              margin: "0 0 12px",
              color: "#d7b56d",
              letterSpacing:
                "clamp(4px, 1vw, 8px)",
              fontSize:
                "clamp(10px, 1.5vw, 14px)",
            }}
          >
            AENAR IKUL
          </p>

          <h1
            style={{
              margin: 0,
              color: "#f1deb0",
              fontFamily:
                "Cinzel, serif",
              fontWeight: 400,
              fontSize:
                "clamp(36px, 7vw, 72px)",
              lineHeight: 1.1,
              letterSpacing:
                "clamp(2px, .7vw, 7px)",
            }}
          >
            MUSIC
          </h1>

          <div
            style={{
              width:
                "clamp(100px, 18vw, 220px)",
              height: "2px",
              margin:
                "22px auto 24px",
              background:
                "linear-gradient(90deg,transparent,#d7b56d,transparent)",
            }}
          />

          <p
            style={{
              maxWidth: "700px",
              margin: "0 auto",
              color: "#aaa",
              fontSize:
                "clamp(14px, 2vw, 18px)",
              lineHeight: 1.8,
            }}
          >
            A collection of melodies, themes,
            and resonances from the world of
            Aenar Ikul.
          </p>
        </header>

        {/* MUSIC GRID */}

        {music.length > 0 ? (
          <section
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit,minmax(280px,1fr))",
              gap:
                "clamp(18px, 2.5vw, 30px)",
              width: "100%",
            }}
          >
            {music.map((item) => (
              <article
                key={item.id}
                style={{
                  position: "relative",
                  width: "100%",
                  minWidth: 0,
                  overflow: "hidden",
                  borderRadius:
                    "clamp(20px, 2.5vw, 30px)",
                  background:
                    "linear-gradient(180deg,rgba(28,18,40,.96),rgba(8,8,10,.98))",
                  border:
                    "1px solid rgba(215,181,109,.20)",
                  boxShadow:
                    "0 25px 70px rgba(0,0,0,.35)",
                  padding: "14px",
                  boxSizing: "border-box",
                }}
              >
                {/* COVER */}

                <Link
                  href={`/music/${item.id}`}
                  aria-label={`Open ${item.name}`}
                  style={{
                    display: "block",
                    position: "relative",
                    width: "100%",
                    aspectRatio: "1 / 1",
                    borderRadius:
                      "clamp(16px, 2vw, 22px)",
                    overflow: "hidden",
                    background: "#111",
                    textDecoration: "none",
                  }}
                >
                  <Image
                    src={item.cover}
                    alt={item.name}
                    fill
                    unoptimized
                    sizes="
                      (max-width: 700px) 90vw,
                      (max-width: 1100px) 42vw,
                      360px
                    "
                    style={{
                      objectFit: "cover",
                      transition:
                        "transform .4s ease",
                    }}
                  />

                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(to top,rgba(0,0,0,.5),transparent 55%)",
                      pointerEvents: "none",
                    }}
                  />

                  <div
                    style={{
                      position: "absolute",
                      right: "16px",
                      bottom: "16px",
                      width: "44px",
                      height: "44px",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background:
                        "rgba(0,0,0,.55)",
                      border:
                        "1px solid rgba(215,181,109,.45)",
                      color: "#f1deb0",
                      fontSize: "18px",
                      backdropFilter:
                        "blur(8px)",
                      boxSizing: "border-box",
                    }}
                  >
                    →
                  </div>
                </Link>

                {/* INFO */}

                <div
                  style={{
                    padding:
                      "20px 8px 8px",
                  }}
                >
                  <p
                    style={{
                      margin: "0 0 8px",
                      color: "#d7b56d",
                      fontSize: "11px",
                      letterSpacing: "3px",
                      textTransform:
                        "uppercase",
                    }}
                  >
                    {item.genre || "MUSIC"}
                  </p>

                  <Link
                    href={`/music/${item.id}`}
                    style={{
                      display: "inline-block",
                      color: "#fff",
                      textDecoration: "none",
                      margin: 0,
                    }}
                  >
                    <h2
                      style={{
                        margin: 0,
                        color: "#fff",
                        fontFamily:
                          "Cinzel, serif",
                        fontSize:
                          "clamp(21px, 2.5vw, 27px)",
                        lineHeight: 1.3,
                        overflowWrap:
                          "break-word",
                      }}
                    >
                      {item.name}
                    </h2>
                  </Link>

                  {item.artist && (
                    <p
                      style={{
                        margin:
                          "10px 0 0",
                        color: "#c8c8c8",
                        fontSize: "14px",
                      }}
                    >
                      {item.artist}
                    </p>
                  )}

                  {item.description && (
                    <p
                      style={{
                        margin:
                          "14px 0 0",
                        color: "#999",
                        fontSize: "14px",
                        lineHeight: 1.7,
                        display:
                          "-webkit-box",
                        WebkitLineClamp: 3,
                        WebkitBoxOrient:
                          "vertical",
                        overflow: "hidden",
                      }}
                    >
                      {item.description}
                    </p>
                  )}

                  {/* AUDIO */}

                  <div
                    style={{
                      marginTop: "20px",
                      padding: "12px",
                      borderRadius: "16px",
                      background:
                        "rgba(255,255,255,.035)",
                      border:
                        "1px solid rgba(215,181,109,.12)",
                    }}
                  >
                    <audio
                      controls
                      preload="none"
                      src={item.file}
                      style={{
                        display: "block",
                        width: "100%",
                        maxWidth: "100%",
                      }}
                    />

                    <div
                      style={{
                        display: "flex",
                        justifyContent:
                          "space-between",
                        alignItems: "center",
                        gap: "12px",
                        marginTop: "10px",
                        color: "#888",
                        fontSize: "12px",
                      }}
                    >
                      <span>
                        Duration
                      </span>

                      <span
                        style={{
                          color: "#d7b56d",
                        }}
                      >
                        {formatDuration(
                          item.duration
                        )}
                      </span>
                    </div>
                  </div>

                  {/* TRANSLATION */}

                  {item.translation && (
                    <div
                      style={{
                        marginTop: "12px",
                        padding:
                          "10px 12px",
                        borderRadius:
                          "12px",
                        background:
                          "rgba(215,181,109,.06)",
                        border:
                          "1px solid rgba(215,181,109,.10)",
                        color: "#bdbdbd",
                        fontSize: "12px",
                      }}
                    >
                      ✦ Translation available
                    </div>
                  )}

                  {/* DETAILS LINK */}

                  <Link
                    href={`/music/${item.id}`}
                    style={{
                      display: "block",
                      marginTop: "15px",
                      padding:
                        "11px 14px",
                      borderRadius: "12px",
                      border:
                        "1px solid rgba(215,181,109,.18)",
                      background:
                        "rgba(215,181,109,.04)",
                      color: "#d7b56d",
                      textDecoration: "none",
                      textAlign: "center",
                      fontSize: "13px",
                      letterSpacing: "1px",
                    }}
                  >
                    VIEW MUSIC
                  </Link>
                </div>
              </article>
            ))}
          </section>
        ) : (
          <section
            style={{
              textAlign: "center",
              padding:
                "clamp(50px, 9vw, 100px) 20px",
              borderRadius: "30px",
              background:
                "rgba(255,255,255,.025)",
              border:
                "1px dashed rgba(215,181,109,.25)",
            }}
          >
            <div
              style={{
                fontSize:
                  "clamp(42px, 8vw, 70px)",
                marginBottom: "20px",
              }}
            >
              ♪
            </div>

            <h2
              style={{
                margin:
                  "0 0 12px",
                color: "#d7b56d",
                fontFamily:
                  "Cinzel, serif",
                fontWeight: 400,
              }}
            >
              No Music Yet
            </h2>

            <p
              style={{
                margin: 0,
                color: "#888",
                lineHeight: 1.7,
              }}
            >
              The music archive is waiting
              for its first resonance.
            </p>
          </section>
        )}
      </div>
    </main>
  );
}
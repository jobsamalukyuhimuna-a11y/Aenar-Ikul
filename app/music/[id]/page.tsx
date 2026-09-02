import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

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

  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
}

export default async function MusicDetailsPage({
  params,
}: Props) {
  const { id } = await params;

  const musicId = Number(id);

  if (!Number.isInteger(musicId)) {
    notFound();
  }

  const music = await prisma.music.findUnique({
    where: {
      id: musicId,
    },
  });

  if (!music) {
    notFound();
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        width: "100%",
        background:
          "radial-gradient(circle at top, #2c1a45 0%, #090909 42%, #030303 100%)",
        color: "#fff",
        padding:
          "clamp(25px, 5vw, 70px) clamp(14px, 4vw, 50px) 100px",
        boxSizing: "border-box",
        overflowX: "hidden",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1300px",
          margin: "0 auto",
          boxSizing: "border-box",
        }}
      >
        {/* BACK */}

        <Link
          href="/music"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            color: "#d7b56d",
            textDecoration: "none",
            fontSize: "14px",
            marginBottom:
              "clamp(25px, 5vw, 45px)",
          }}
        >
          ← Back to Music
        </Link>

        {/* MAIN MUSIC PROFILE */}

        <section
          style={{
            display: "grid",
            gridTemplateColumns:
              "minmax(280px, 520px) minmax(0, 1fr)",
            gap:
              "clamp(25px, 5vw, 70px)",
            alignItems: "center",
          }}
        >
          {/* COVER */}

          <div
            style={{
              position: "relative",
              width: "100%",
              aspectRatio: "1 / 1",
              borderRadius:
                "clamp(22px, 4vw, 40px)",
              overflow: "hidden",
              background: "#111",
              border:
                "1px solid rgba(215,181,109,.28)",
              boxShadow:
                "0 30px 100px rgba(0,0,0,.55), 0 0 60px rgba(215,181,109,.10)",
            }}
          >
            <Image
              src={music.cover}
              alt={music.name}
              fill
              unoptimized
              priority
              sizes="
                (max-width: 800px) 90vw,
                520px
              "
              style={{
                objectFit: "cover",
              }}
            />

            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to top,rgba(0,0,0,.45),transparent 55%)",
                pointerEvents: "none",
              }}
            />
          </div>

          {/* INFORMATION */}

          <div
            style={{
              minWidth: 0,
            }}
          >
            <p
              style={{
                margin:
                  "0 0 12px",
                color: "#d7b56d",
                fontSize: "12px",
                letterSpacing: "5px",
                textTransform:
                  "uppercase",
              }}
            >
              MUSIC
            </p>

            <h1
              style={{
                margin: 0,
                color: "#f1deb0",
                fontFamily:
                  "Cinzel, serif",
                fontWeight: 400,
                fontSize:
                  "clamp(34px, 6vw, 72px)",
                lineHeight: 1.1,
                letterSpacing:
                  "clamp(1px, .5vw, 5px)",
                overflowWrap:
                  "break-word",
              }}
            >
              {music.name}
            </h1>

            {music.artist && (
              <p
                style={{
                  margin:
                    "18px 0 0",
                  color: "#b9b9b9",
                  fontSize:
                    "clamp(15px, 2vw, 20px)",
                }}
              >
                {music.artist}
              </p>
            )}

            {music.genre && (
              <p
                style={{
                  margin:
                    "8px 0 0",
                  color: "#8f8f8f",
                  fontSize: "14px",
                }}
              >
                {music.genre}
              </p>
            )}

            {/* AUDIO PLAYER */}

            <div
              style={{
                marginTop:
                  "clamp(25px, 4vw, 40px)",
                padding:
                  "clamp(16px, 3vw, 24px)",
                borderRadius: "22px",
                background:
                  "rgba(255,255,255,.035)",
                border:
                  "1px solid rgba(215,181,109,.16)",
                boxSizing: "border-box",
              }}
            >
              <audio
                controls
                autoPlay={false}
                preload="metadata"
                src={music.file}
                style={{
                  width: "100%",
                  maxWidth: "100%",
                }}
              />

              <div
                style={{
                  display: "flex",
                  justifyContent:
                    "space-between",
                  gap: "15px",
                  marginTop: "12px",
                  color: "#888",
                  fontSize: "13px",
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
                    music.duration
                  )}
                </span>
              </div>
            </div>

            {/* DESCRIPTION */}

            {music.description && (
              <section
                style={{
                  marginTop:
                    "clamp(25px, 4vw, 40px)",
                }}
              >
                <h2
                  style={{
                    margin:
                      "0 0 14px",
                    color: "#d7b56d",
                    fontFamily:
                      "Cinzel, serif",
                    fontSize:
                      "clamp(20px, 3vw, 28px)",
                    fontWeight: 400,
                  }}
                >
                  About the Music
                </h2>

                <p
                  style={{
                    margin: 0,
                    color: "#c2c2c2",
                    fontSize:
                      "clamp(15px, 2vw, 18px)",
                    lineHeight: 1.9,
                    whiteSpace:
                      "pre-line",
                  }}
                >
                  {music.description}
                </p>
              </section>
            )}
          </div>
        </section>

        {/* TRANSLATION */}

        {music.translation && (
          <section
            style={{
              marginTop:
                "clamp(45px, 7vw, 90px)",
              padding:
                "clamp(20px, 4vw, 40px)",
              borderRadius:
                "clamp(20px, 3vw, 30px)",
              background:
                "rgba(255,255,255,.025)",
              border:
                "1px solid rgba(215,181,109,.16)",
              boxSizing: "border-box",
            }}
          >
            <p
              style={{
                margin:
                  "0 0 14px",
                color: "#d7b56d",
                fontSize: "11px",
                letterSpacing: "4px",
                textTransform:
                  "uppercase",
              }}
            >
              Lyrics / Translation
            </p>

            <div
              style={{
                color: "#ddd",
                fontFamily:
                  "Georgia, serif",
                fontSize:
                  "clamp(15px, 2vw, 18px)",
                lineHeight: 2,
                whiteSpace:
                  "pre-line",
                overflowWrap:
                  "break-word",
              }}
            >
              {music.translation}
            </div>
          </section>
        )}
      </div>

      <style>{`
        @media (max-width: 800px) {
          main section {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </main>
  );
}
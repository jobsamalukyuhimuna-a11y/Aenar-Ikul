import Image from "next/image";
import Link from "next/link";
import { prisma } from "@/lib/prisma";

export default async function LibraryPage() {
  const stories = await prisma.story.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <main
      style={{
        minHeight: "100vh",
        width: "100%",
        background: "#080808",
        color: "#fff",
        padding: "clamp(70px, 10vw, 140px) clamp(14px, 4vw, 60px)",
        boxSizing: "border-box",
        overflowX: "hidden",
      }}
    >
      {/* HEADER */}

      <div
        style={{
          width: "100%",
          maxWidth: "1100px",
          margin: "0 auto clamp(55px, 8vw, 90px)",
          textAlign: "center",
          boxSizing: "border-box",
        }}
      >
        <p
          style={{
            margin: "0 0 clamp(14px, 3vw, 20px)",
            color: "#9d7d3d",
            letterSpacing: "clamp(2px, 1vw, 8px)",
            textTransform: "uppercase",
            fontSize: "clamp(10px, 2vw, 15px)",
            lineHeight: 1.5,
            overflowWrap: "break-word",
          }}
        >
          THE ROYAL ARCHIVE
        </p>

        <h1
          style={{
            margin: "0 0 clamp(14px, 3vw, 20px)",
            color: "#d7b56d",
            fontSize: "clamp(42px, 8vw, 72px)",
            lineHeight: 1.1,
            fontWeight: 400,
            letterSpacing: "clamp(2px, .7vw, 6px)",
            fontFamily: "Cinzel, serif",
            overflowWrap: "break-word",
          }}
        >
          Library
        </h1>

        <p
          style={{
            margin: 0,
            color: "#bdbdbd",
            fontSize: "clamp(16px, 3vw, 22px)",
            lineHeight: 1.6,
            overflowWrap: "break-word",
          }}
        >
          Discover every story, every world and every legend.
        </p>
      </div>

      {/* STORIES GRID */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(min(100%, 280px), 320px))",
          justifyContent: "center",
          gap: "clamp(20px, 4vw, 40px)",
          width: "100%",
          maxWidth: "1500px",
          margin: "0 auto",
          boxSizing: "border-box",
        }}
      >
        {stories.map((story) => (
          <div
            key={story.id}
            style={{
              width: "100%",
              maxWidth: "320px",
              margin: "0 auto",
              background: "#121212",
              border: "1px solid rgba(200,164,77,.18)",
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow: "0 10px 30px rgba(0,0,0,.35)",
              boxSizing: "border-box",
            }}
          >
            {/* COVER */}

            <div
              style={{
                position: "relative",
                width: "100%",
                height: "clamp(350px, 105vw, 470px)",
                overflow: "hidden",
                background: "#090909",
                boxSizing: "border-box",
              }}
            >
              {story.cover ? (
                <Image
                  src={story.cover}
                  alt={story.title}
                  fill
                  unoptimized
                  sizes="
                    (max-width: 480px) 90vw,
                    (max-width: 768px) 45vw,
                    (max-width: 1200px) 30vw,
                    320px
                  "
                  style={{
                    objectFit: "cover",
                    objectPosition: "center top",
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
                    padding: "20px",
                    boxSizing: "border-box",
                    color: "#666",
                    fontFamily: "Cinzel, serif",
                    fontSize: "clamp(14px, 3vw, 18px)",
                    textAlign: "center",
                  }}
                >
                  NO COVER
                </div>
              )}
            </div>

            {/* INFO */}

            <div
              style={{
                width: "100%",
                padding: "clamp(20px, 5vw, 28px)",
                boxSizing: "border-box",
              }}
            >
              <h2
                style={{
                  margin: "0 0 clamp(8px, 2vw, 10px)",
                  color: "#d7b56d",
                  fontSize: "clamp(22px, 5vw, 28px)",
                  lineHeight: 1.25,
                  fontFamily: "Cinzel, serif",
                  fontWeight: 400,
                  overflowWrap: "break-word",
                  wordBreak: "break-word",
                }}
              >
                {story.title}
              </h2>

              <p
                style={{
                  margin: "0 0 clamp(15px, 4vw, 20px)",
                  color: "#888",
                  fontSize: "clamp(14px, 3vw, 16px)",
                  lineHeight: 1.5,
                }}
              >
                Story
              </p>

              <p
                style={{
                  margin: "0 0 clamp(20px, 5vw, 25px)",
                  color: "#bdbdbd",
                  lineHeight: 1.8,
                  fontSize: "clamp(14px, 3vw, 16px)",
                  overflowWrap: "break-word",
                  wordBreak: "break-word",
                }}
              >
                {story.description}
              </p>

              <Link
                href={`/library/stories/${story.slug}`}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                  minHeight: "48px",
                  padding:
                    "clamp(12px, 3vw, 14px) clamp(14px, 4vw, 18px)",
                  background: "transparent",
                  border: "1px solid rgba(200,164,77,.35)",
                  borderRadius: "8px",
                  color: "#d7b56d",
                  textDecoration: "none",
                  textAlign: "center",
                  fontSize: "clamp(12px, 2.8vw, 15px)",
                  lineHeight: 1.3,
                  letterSpacing: "clamp(1px, .5vw, 2px)",
                  textTransform: "uppercase",
                  boxSizing: "border-box",
                }}
              >
                Read Story →
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* EMPTY STATE */}

      {stories.length === 0 && (
        <p
          style={{
            margin: "50px auto 0",
            textAlign: "center",
            color: "#888",
            fontSize: "clamp(16px, 3vw, 20px)",
            lineHeight: 1.6,
          }}
        >
          No stories available yet.
        </p>
      )}
    </main>
  );
}
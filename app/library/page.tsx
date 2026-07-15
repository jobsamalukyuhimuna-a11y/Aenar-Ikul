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
        background: "#080808",
        color: "#fff",
        padding: "140px 60px",
      }}
    >
      <div
        style={{
          textAlign: "center",
          marginBottom: "90px",
        }}
      >
        <p
          style={{
            color: "#9d7d3d",
            letterSpacing: "8px",
            textTransform: "uppercase",
            fontSize: "15px",
            marginBottom: "20px",
          }}
        >
          THE ROYAL ARCHIVE
        </p>

        <h1
          style={{
            fontSize: "72px",
            color: "#d7b56d",
            marginBottom: "20px",
            fontWeight: 400,
            letterSpacing: "6px",
            fontFamily: "Cinzel, serif",
          }}
        >
          Library
        </h1>

        <p
          style={{
            color: "#bdbdbd",
            fontSize: "22px",
          }}
        >
          Discover every story, every world and every legend.
        </p>
      </div>


      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill,320px)",
          justifyContent: "center",
          gap: "40px",
          margin: "0 auto",
        }}
      >
        {stories.map((story) => (
          <div
            key={story.id}
            style={{
              width: "320px",
              background: "#121212",
              border: "1px solid rgba(200,164,77,.18)",
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow: "0 10px 30px rgba(0,0,0,.35)",
            }}
          >

            <div
              style={{
                position: "relative",
                width: "100%",
                height: "470px",
                overflow: "hidden",
                background: "#090909",
              }}
            >
              {story.cover && (
                <Image
                  src={story.cover}
                  alt={story.title}
                  fill
                  style={{
                    objectFit: "cover",
                    objectPosition: "center top",
                  }}
                />
              )}
            </div>


            <div
              style={{
                padding: "28px",
              }}
            >

              <h2
                style={{
                  color: "#d7b56d",
                  fontSize: "28px",
                  marginBottom: "10px",
                  fontFamily: "Cinzel, serif",
                  fontWeight: 400,
                }}
              >
                {story.title}
              </h2>


              <p
                style={{
                  color: "#888",
                  marginBottom: "20px",
                  fontSize: "16px",
                }}
              >
                Story
              </p>


              <p
                style={{
                  color: "#bdbdbd",
                  lineHeight: 1.8,
                  marginBottom: "25px",
                  fontSize: "16px",
                }}
              >
                {story.description}
              </p>


              <Link
                href={`/library/stories/${story.slug}`}
                style={{
                  display: "block",
                  width: "100%",
                  padding: "14px",
                  background: "transparent",
                  border: "1px solid rgba(200,164,77,.35)",
                  color: "#d7b56d",
                  textDecoration: "none",
                  textAlign: "center",
                  fontSize: "15px",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                }}
              >
                Read Story →
              </Link>

            </div>

          </div>
        ))}
      </div>


      {stories.length === 0 && (
        <p
          style={{
            textAlign: "center",
            color: "#888",
            fontSize: "20px",
          }}
        >
          No stories available yet.
        </p>
      )}

    </main>
  );
}
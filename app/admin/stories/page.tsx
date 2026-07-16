import Link from "next/link";
import { prisma } from "@/lib/prisma";
import DeleteButton from "./DeleteButton";

export default async function AdminStoriesPage() {
  const stories = await prisma.story.findMany({
    orderBy: {
      id: "desc",
    },
  });

  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top,#2a1740 0%,#0b0b0b 45%,#050505 100%)",
        color: "#fff",
        padding: "60px",
      }}
    >
      <div
        style={{
          maxWidth: "1500px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "50px",
            flexWrap: "wrap",
            gap: "20px",
          }}
        >
          <div>
            <p
              style={{
                color: "#9d7d3d",
                letterSpacing: "6px",
                marginBottom: "10px",
                fontSize: "14px",
              }}
            >
              ADMIN PANEL
            </p>

            <h1
              style={{
                fontSize: "56px",
                color: "#d7b56d",
                fontFamily: "Cinzel, serif",
                fontWeight: 400,
                marginBottom: "12px",
              }}
            >
              Story Management
            </h1>

            <p
              style={{
                color: "#9d9d9d",
                fontSize: "16px",
              }}
            >
              Total Stories:{" "}
              <span
                style={{
                  color: "#d7b56d",
                  fontWeight: "bold",
                }}
              >
                {stories.length}
              </span>
            </p>
          </div>

          <Link
            href="/admin/stories/new"
            style={{
              padding: "18px 35px",
              borderRadius: "12px",
              textDecoration: "none",
              background: "#d7b56d",
              color: "#111",
              fontWeight: "bold",
              boxShadow: "0 0 25px rgba(215,181,109,.25)",
            }}
          >
            + New Story
          </Link>
        </div>

        <div
          style={{
            background: "rgba(20,20,20,.92)",
            border: "1px solid rgba(215,181,109,.25)",
            borderRadius: "22px",
            overflow: "hidden",
            backdropFilter: "blur(10px)",
          }}
        >
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
            }}
          >
            <thead>
              <tr
                style={{
                  background: "rgba(215,181,109,.08)",
                }}
              >
                <th style={cell}>Title</th>
                <th style={cell}>Slug</th>
                <th style={cell}>Music</th>
                <th style={cell}>Actions</th>
              </tr>
            </thead>

            <tbody>
                            {stories.map((story) => (
                <tr
                  key={story.id}
                  style={{
                    transition: "0.25s",
                  }}
                >
                  <td style={cell}>
                    <div>
                      <div
                        style={{
                          color: "#fff",
                          fontSize: "18px",
                          fontWeight: 600,
                          marginBottom: "6px",
                        }}
                      >
                        {story.title}
                      </div>

                      <div
                        style={{
                          color: "#8d8d8d",
                          fontSize: "13px",
                        }}
                      >
                        ID #{story.id}
                      </div>
                    </div>
                  </td>

                  <td style={cell}>
                    <code
                      style={{
                        color: "#d7b56d",
                        background: "rgba(215,181,109,.08)",
                        padding: "8px 12px",
                        borderRadius: "8px",
                        fontSize: "14px",
                      }}
                    >
                      {story.slug}
                    </code>
                  </td>

                  <td style={cell}>
                    {story.music ? (
                      <span
                        style={{
                          color: "#79d279",
                          fontWeight: 600,
                        }}
                      >
                        🎵 Available
                      </span>
                    ) : (
                      <span
                        style={{
                          color: "#888",
                        }}
                      >
                        No Music
                      </span>
                    )}
                  </td>

                  <td style={cell}>
                    <div
                      style={{
                        display: "flex",
                        gap: "12px",
                        alignItems: "center",
                      }}
                    >
                      <Link
                        href={`/admin/stories/${story.id}`}
                        style={{
                          display: "inline-block",
                          padding: "10px 20px",
                          borderRadius: "10px",
                          background: "#d7b56d",
                          color: "#111",
                          textDecoration: "none",
                          fontWeight: "bold",
                        }}
                      >
                        Edit
                      </Link>

                      <DeleteButton id={story.id} />
                    </div>
                  </td>
                </tr>
              ))}

              {stories.length === 0 && (
                <tr>
                  <td
                    colSpan={4}
                    style={{
                      padding: "60px",
                      textAlign: "center",
                      color: "#888",
                      fontSize: "18px",
                    }}
                  >
                    No stories found.
                  </td>
                </tr>
              )}
                          </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}

const cell: React.CSSProperties = {
  padding: "24px",
  borderBottom: "1px solid rgba(255,255,255,.06)",
  textAlign: "left",
  verticalAlign: "middle",
};
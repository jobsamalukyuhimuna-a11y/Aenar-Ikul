import Link from "next/link";
import { prisma } from "@/lib/prisma";

export default async function AdminMusicPage() {
  const music = await prisma.music.findMany({
    orderBy: {
      id: "desc",
    },
  });

  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top, #2a1740 0%, #0b0b0b 45%, #050505 100%)",
        color: "#fff",
        padding: "clamp(20px, 5vw, 60px)",
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
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "20px",
            flexWrap: "wrap",
            marginBottom: "50px",
          }}
        >
          <div>
            <p
              style={{
                margin: "0 0 10px",
                color: "#9d7d3d",
                letterSpacing: "clamp(3px, 1vw, 6px)",
                fontSize: "clamp(10px, 1.6vw, 14px)",
              }}
            >
              ADMIN PANEL
            </p>

            <h1
              style={{
                margin: "0 0 12px",
                color: "#d7b56d",
                fontFamily: "Cinzel, serif",
                fontWeight: 400,
                fontSize: "clamp(32px, 5vw, 56px)",
                lineHeight: 1.15,
              }}
            >
              Music Management
            </h1>

            <p
              style={{
                margin: 0,
                color: "#9d9d9d",
                fontSize: "clamp(14px, 2vw, 16px)",
              }}
            >
              Total Music:{" "}
              <span
                style={{
                  color: "#d7b56d",
                  fontWeight: "bold",
                }}
              >
                {music.length}
              </span>
            </p>
          </div>

          <Link
            href="/admin/music/new"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              minHeight: "52px",
              padding: "14px 24px",
              borderRadius: "12px",
              textDecoration: "none",
              background: "#d7b56d",
              color: "#111",
              fontWeight: "bold",
              boxShadow:
                "0 0 25px rgba(215,181,109,.25)",
              boxSizing: "border-box",
            }}
          >
            + New Music
          </Link>
        </div>

        <div
          style={{
            background: "rgba(20,20,20,.92)",
            border:
              "1px solid rgba(215,181,109,.25)",
            borderRadius: "22px",
            overflowX: "auto",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
          }}
        >
          <table
            style={{
              width: "100%",
              minWidth: "900px",
              borderCollapse: "collapse",
            }}
          >
            <thead>
              <tr
                style={{
                  background:
                    "rgba(215,181,109,.08)",
                }}
              >
                <th style={cell}>Title</th>
                <th style={cell}>Artist</th>
                <th style={cell}>Genre</th>
                <th style={cell}>Duration</th>
                <th style={cell}>Style</th>
                <th style={cell}>Actions</th>
              </tr>
            </thead>

            <tbody>
              {music.map((item) => (
                <tr key={item.id}>
                  <td style={cell}>
                    <div
                      style={{
                        color: "#fff",
                        fontSize: "18px",
                        fontWeight: 600,
                        marginBottom: "6px",
                      }}
                    >
                      {item.name}
                    </div>

                    <div
                      style={{
                        color: "#8d8d8d",
                        fontSize: "13px",
                      }}
                    >
                      ID #{item.id}
                    </div>
                  </td>

                  <td style={cell}>
                    {item.artist || "—"}
                  </td>

                  <td style={cell}>
                    {item.genre || "—"}
                  </td>

                  <td style={cell}>
                    {formatDuration(item.duration)}
                  </td>

                  <td style={cell}>
                    {item.pageStyle || "Default"}
                  </td>

                  <td style={cell}>
                    <div
                      style={{
                        display: "flex",
                        gap: "12px",
                        alignItems: "center",
                        flexWrap: "wrap",
                      }}
                    >
                      <Link
                        href={`/admin/music/${item.id}`}
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
                    </div>
                  </td>
                </tr>
              ))}

              {music.length === 0 && (
                <tr>
                  <td
                    colSpan={6}
                    style={{
                      padding: "60px 20px",
                      textAlign: "center",
                      color: "#888",
                      fontSize: "18px",
                    }}
                  >
                    No music found.
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

function formatDuration(
  duration: number | null
) {
  if (
    duration === null ||
    !Number.isFinite(duration) ||
    duration < 0
  ) {
    return "—";
  }

  const totalSeconds = Math.floor(duration);

  const minutes = Math.floor(
    totalSeconds / 60
  );

  const seconds =
    totalSeconds % 60;

  return `${minutes}:${seconds
    .toString()
    .padStart(2, "0")}`;
}

const cell: React.CSSProperties = {
  padding: "22px 24px",
  borderBottom:
    "1px solid rgba(255,255,255,.06)",
  textAlign: "left",
  verticalAlign: "middle",
  whiteSpace: "nowrap",
};
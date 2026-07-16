import Link from "next/link";
import Image from "next/image";
import { prisma } from "@/lib/prisma";
import DeleteButton from "./DeleteButton";

export default async function AdminCharactersPage() {
  const characters = await prisma.character.findMany({
    include: {
      images: true,
      musics: true,
    },
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
          maxWidth: "1550px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "50px",
          }}
        >
          <div>
            <p
              style={{
                color: "#9d7d3d",
                letterSpacing: "6px",
                marginBottom: "10px",
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
              }}
            >
              Character Management
            </h1>
          </div>

          <Link
            href="/admin/characters/new"
            style={{
              padding: "18px 35px",
              borderRadius: "12px",
              textDecoration: "none",
              background: "#d7b56d",
              color: "#111",
              fontWeight: "bold",
            }}
          >
            + New Character
          </Link>
        </div>

        <div
          style={{
            background: "rgba(20,20,20,.92)",
            border: "1px solid rgba(215,181,109,.25)",
            borderRadius: "22px",
            overflow: "hidden",
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
                <th style={cell}>Image</th>
                <th style={cell}>Name</th>
                <th style={cell}>Title</th>
                <th style={cell}>Universe</th>
                <th style={cell}>Gallery</th>
                <th style={cell}>Music</th>
                <th style={cell}>Actions</th>
              </tr>
            </thead>

            <tbody>
                            {characters.map((character) => (
                <tr key={character.id}>
                  <td style={cell}>
                    {character.image ? (
                      <div
                        style={{
                          position: "relative",
                          width: "70px",
                          height: "70px",
                          borderRadius: "12px",
                          overflow: "hidden",
                          border: "1px solid rgba(215,181,109,.25)",
                        }}
                      >
                        <Image
                          src={character.image}
                          alt={character.name ?? "Character"}
                          fill
                          style={{
                            objectFit: "cover",
                          }}
                        />
                      </div>
                    ) : (
                      <span style={{ color: "#777" }}>No Image</span>
                    )}
                  </td>

                  <td style={cell}>
                    {character.name || "Unknown"}
                  </td>

                  <td style={cell}>
                    {character.title || "-"}
                  </td>

                  <td style={cell}>
                    {character.universe || "-"}
                  </td>

                  <td style={cell}>
                    {character.images.length} Images
                  </td>

                  <td style={cell}>
                    {(character.music ? 1 : 0) +
                      character.musics.length}{" "}
                    Tracks
                  </td>

                  <td style={cell}>
                    <div
                      style={{
                        display: "flex",
                        gap: "10px",
                        flexWrap: "wrap",
                      }}
                    >
                      <Link
                        href={`/characters/${character.slug}`}
                        style={viewButton}
                      >
                        View
                      </Link>

                      <Link
                        href={`/admin/characters/${character.id}`}
                        style={editButton}
                      >
                        Edit
                      </Link>

                      <DeleteButton id={character.id} />
                    </div>
                  </td>
                </tr>
              ))}

              {characters.length === 0 && (
                <tr>
                  <td
                    colSpan={7}
                    style={{
                      padding: "50px",
                      textAlign: "center",
                      color: "#888",
                    }}
                  >
                    No characters found.
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
  padding: "22px",
  borderBottom: "1px solid rgba(255,255,255,.06)",
  textAlign: "left",
  verticalAlign: "middle",
};

const viewButton: React.CSSProperties = {
  display: "inline-block",
  padding: "10px 18px",
  borderRadius: "8px",
  background: "#2d6cdf",
  color: "#fff",
  textDecoration: "none",
  fontWeight: "bold",
};

const editButton: React.CSSProperties = {
  display: "inline-block",
  padding: "10px 18px",
  borderRadius: "8px",
  background: "#d7b56d",
  color: "#111",
  textDecoration: "none",
  fontWeight: "bold",
};
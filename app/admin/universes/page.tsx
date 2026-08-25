
import Link from "next/link";

import { universes } from "../../library/data/universes";
import { kingdoms } from "../../library/data/kingdoms";
import { characters } from "../../library/data/characters";
import { books } from "../../library/data/books";

export default function UniversesAdminPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "50px 24px",
        background:
          "radial-gradient(circle at top, #241b0d 0%, #0b0b0b 45%, #050505 100%)",
        color: "#f0d28d",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* HEADER */}

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "20px",
            flexWrap: "wrap",
            marginBottom: "45px",
          }}
        >
          <div>
            <p
              style={{
                margin: "0 0 10px",
                color: "#8b6828",
                fontSize: "12px",
                letterSpacing: "4px",
                textTransform: "uppercase",
              }}
            >
              World Management
            </p>

            <h1
              style={{
                margin: 0,
                fontFamily: "Cinzel, Georgia, serif",
                fontSize: "42px",
                fontWeight: 400,
                letterSpacing: "2px",
                color: "#f0d28d",
              }}
            >
              Universes
            </h1>

            <p
              style={{
                marginTop: "10px",
                marginBottom: 0,
                color: "#a98a4b",
                fontSize: "15px",
              }}
            >
              Manage the worlds and universes of your library.
            </p>
          </div>

          <Link
            href="/admin"
            style={{
              textDecoration: "none",
              padding: "12px 22px",
              borderRadius: "12px",
              border: "1px solid rgba(215,181,109,.4)",
              color: "#d7b56d",
              background: "rgba(215,181,109,.06)",
            }}
          >
            ← Admin Dashboard
          </Link>
        </div>

        {/* UNIVERSES */}

        {universes.length > 0 ? (
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "28px",
            }}
          >
            {universes.map((universe) => {
              const universeCharacters = characters.filter(
                (character) =>
                  character.universe === universe.slug
              );

              const universeBooks = books.filter(
                (book) =>
                  book.universe === universe.name ||
                  book.universe === universe.slug
              );

              const universeKingdoms = kingdoms.filter(
                (kingdom) =>
                  kingdom.universe === universe.slug
              );

              return (
                <article
                  key={universe.id}
                  style={{
                    overflow: "hidden",
                    borderRadius: "22px",
                    border:
                      "1px solid rgba(215,181,109,.25)",
                    background:
                      "linear-gradient(145deg, rgba(215,181,109,.09), rgba(10,10,10,.96))",
                    boxShadow:
                      "0 25px 60px rgba(0,0,0,.55)",
                  }}
                >
                  {/* COVER */}

                  <div
                    style={{
                      position: "relative",
                      height: "230px",
                      backgroundImage: universe.cover
                        ? `linear-gradient(to top, rgba(0,0,0,.95), rgba(0,0,0,.08)), url("${universe.cover}")`
                        : "linear-gradient(135deg,#241b0d,#080808)",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      borderBottom:
                        "1px solid rgba(215,181,109,.18)",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        left: "22px",
                        bottom: "18px",
                        padding: "7px 12px",
                        borderRadius: "8px",
                        background: "rgba(0,0,0,.65)",
                        border:
                          "1px solid rgba(215,181,109,.3)",
                        color: "#d7b56d",
                        fontSize: "11px",
                        letterSpacing: "2px",
                        textTransform: "uppercase",
                        backdropFilter: "blur(6px)",
                      }}
                    >
                      {universe.category}
                    </div>
                  </div>

                  {/* CONTENT */}

                  <div
                    style={{
                      padding: "28px",
                    }}
                  >
                    <h2
                      style={{
                        margin: "0 0 12px",
                        fontFamily:
                          "Cinzel, Georgia, serif",
                        fontSize: "30px",
                        fontWeight: 400,
                        color: "#f0d28d",
                      }}
                    >
                      {universe.name}
                    </h2>

                    <p
                      style={{
                        margin: 0,
                        color: "#b9b0a0",
                        lineHeight: 1.8,
                        fontSize: "14px",
                        minHeight: "76px",
                      }}
                    >
                      {universe.description}
                    </p>

                    {/* STATS */}

                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns:
                          "repeat(3, 1fr)",
                        gap: "10px",
                        marginTop: "25px",
                        marginBottom: "25px",
                      }}
                    >
                      <Stat
                        label="Books"
                        value={universeBooks.length}
                      />

                      <Stat
                        label="Characters"
                        value={universeCharacters.length}
                      />

                      <Stat
                        label="Kingdoms"
                        value={universeKingdoms.length}
                      />
                    </div>

                    {/* QUOTE */}

                    <div
                      style={{
                        padding: "18px",
                        borderRadius: "14px",
                        background:
                          "rgba(215,181,109,.05)",
                        border:
                          "1px solid rgba(215,181,109,.12)",
                        color: "#c7aa6a",
                        fontSize: "13px",
                        lineHeight: 1.7,
                        fontStyle: "italic",
                      }}
                    >
                      “{universe.quote}”
                    </div>

                    {/* ACTIONS */}

                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns:
                          "1fr 1fr",
                        gap: "12px",
                        marginTop: "25px",
                      }}
                    >
                      <Link
                        href={`/universes/${universe.slug}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: "block",
                          textAlign: "center",
                          textDecoration: "none",
                          padding: "12px",
                          borderRadius: "10px",
                          background:
                            "linear-gradient(135deg,#d7b56d,#8b6828)",
                          color: "#111",
                          fontWeight: 600,
                          fontSize: "14px",
                        }}
                      >
                        View Universe
                      </Link>

                      <button
                        type="button"
                        disabled
                        style={{
                          padding: "12px",
                          borderRadius: "10px",
                          border:
                            "1px solid rgba(215,181,109,.2)",
                          background:
                            "rgba(255,255,255,.03)",
                          color: "#6f6658",
                          cursor: "not-allowed",
                          fontSize: "14px",
                        }}
                      >
                        Edit
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          /* EMPTY */

          <div
            style={{
              textAlign: "center",
              padding: "80px 20px",
              borderRadius: "22px",
              border:
                "1px solid rgba(215,181,109,.2)",
              background: "rgba(255,255,255,.02)",
              color: "#a98a4b",
            }}
          >
            <h2
              style={{
                margin: "0 0 12px",
                fontFamily:
                  "Cinzel, Georgia, serif",
                fontWeight: 400,
                color: "#d7b56d",
              }}
            >
              No Universes
            </h2>

            <p
              style={{
                margin: 0,
                color: "#777",
              }}
            >
              No universes have been created yet.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}

/* =========================================================
   STAT
========================================================= */

function Stat({
  label,
  value,
}: {
  label: string;
  value: number;
}) {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "14px 8px",
        borderRadius: "12px",
        background: "rgba(255,255,255,.025)",
        border:
          "1px solid rgba(215,181,109,.1)",
      }}
    >
      <div
        style={{
          fontSize: "24px",
          color: "#f0d28d",
          fontFamily:
            "Cinzel, Georgia, serif",
        }}
      >
        {value}
      </div>

      <div
        style={{
          marginTop: "5px",
          color: "#81745f",
          fontSize: "11px",
          textTransform: "uppercase",
          letterSpacing: "1px",
        }}
      >
        {label}
      </div>
    </div>
  );
}
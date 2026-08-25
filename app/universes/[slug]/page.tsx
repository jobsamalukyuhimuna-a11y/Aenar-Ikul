
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { universes } from "../../library/data/universes";
import { kingdoms } from "../../library/data/kingdoms";
import { characters } from "../../library/data/characters";
import { books } from "../../library/data/books";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function UniversePage({ params }: Props) {
  const { slug } = await params;

  const universe = universes.find((u) => u.slug === slug);

  if (!universe) {
    notFound();
  }

  const universeKingdoms = kingdoms.filter(
    (kingdom) => kingdom.universe === universe.slug
  );

  const universeCharacters = characters.filter(
    (character) => character.universe === universe.slug
  );

  const universeBooks = books.filter(
    (book) =>
      book.universe === universe.name ||
      book.universe === universe.slug
  );

  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top, #251736 0%, #0b0b0b 45%, #050505 100%)",
        color: "#fff",
        padding: "110px 20px 100px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* HEADER */}

        <p
          style={{
            color: "#9d7d3d",
            letterSpacing: "8px",
            textAlign: "center",
            fontSize: "14px",
            marginBottom: "15px",
          }}
        >
          THE WORLD OF
        </p>

        <h1
          style={{
            color: "#d7b56d",
            fontSize: "clamp(42px, 6vw, 64px)",
            textAlign: "center",
            fontFamily: "Cinzel, serif",
            fontWeight: 400,
            margin: 0,
          }}
        >
          {universe.name}
        </h1>

        <p
          style={{
            textAlign: "center",
            color: "#a98a4b",
            letterSpacing: "4px",
            fontSize: "13px",
            marginTop: "18px",
            marginBottom: "55px",
          }}
        >
          {universe.category}
        </p>

        {/* MAP */}

        <div
          style={{
            width: "100%",
            maxWidth: "1100px",
            margin: "0 auto",
            borderRadius: "18px",
            overflow: "hidden",
            border: "2px solid rgba(200,164,77,.35)",
            boxShadow: "0 25px 70px rgba(0,0,0,.55)",
            background: "#090909",
          }}
        >
          <Image
            src="/maps/aenar-ikul-map.jpg"
            alt={`Map of ${universe.name}`}
            width={1200}
            height={700}
            priority
            style={{
              display: "block",
              width: "100%",
              height: "auto",
              maxHeight: "650px",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        </div>

        {/* ABOUT */}

        <section
          style={{
            marginTop: "55px",
            background: "rgba(17,17,17,.78)",
            border: "1px solid rgba(200,164,77,.25)",
            borderRadius: "18px",
            padding: "clamp(25px, 4vw, 40px)",
            boxShadow: "0 20px 50px rgba(0,0,0,.3)",
          }}
        >
          <h2
            style={{
              color: "#d7b56d",
              fontSize: "clamp(28px, 4vw, 36px)",
              margin: "0 0 22px",
              fontFamily: "Cinzel, serif",
              fontWeight: 400,
            }}
          >
            About this World
          </h2>

          <p
            style={{
              color: "#cfcfcf",
              lineHeight: 2,
              fontSize: "18px",
              margin: 0,
            }}
          >
            {universe.description}
          </p>

          <div
            style={{
              marginTop: "30px",
              padding: "22px 25px",
              borderLeft: "3px solid #d7b56d",
              background: "rgba(215,181,109,.05)",
              color: "#d7b56d",
              fontFamily: "Georgia, serif",
              fontStyle: "italic",
              lineHeight: 1.8,
            }}
          >
            “{universe.quote}”
          </div>
        </section>

        {/* WORLD STATS */}

        <section
          style={{
            marginTop: "40px",
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "20px",
          }}
        >
          <WorldStat
            value={universeBooks.length}
            label="Books"
          />

          <WorldStat
            value={universeCharacters.length}
            label="Characters"
          />

          <WorldStat
            value={universeKingdoms.length}
            label="Kingdoms"
          />
        </section>

        {/* CHARACTERS */}

        <section
          style={{
            marginTop: "85px",
          }}
        >
          <SectionTitle title="Characters" />

          {universeCharacters.length === 0 ? (
            <EmptySection text="No characters have been discovered in this universe yet." />
          ) : (
            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  "repeat(auto-fit, minmax(300px, 360px))",
                justifyContent: "center",
                gap: "30px",
                maxWidth: "1100px",
                margin: "0 auto",
              }}
            >
              {universeCharacters.map((character) => (
                <Link
                  key={character.id}
                  href={`/characters/${character.slug}`}
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                  }}
                >
                  <article
                    style={{
                      width: "100%",
                      overflow: "hidden",
                      borderRadius: "18px",
                      background: "rgba(17,17,17,.85)",
                      border:
                        "1px solid rgba(200,164,77,.25)",
                      boxShadow:
                        "0 20px 45px rgba(0,0,0,.45)",
                      transition:
                        "transform .25s ease, border-color .25s ease",
                    }}
                  >
                    {character.image ? (
                      <div
                        style={{
                          width: "100%",
                          height: "420px",
                          overflow: "hidden",
                          background: "#080808",
                        }}
                      >
                        <Image
                          src={character.image}
                          alt={character.name}
                          width={600}
                          height={800}
                          style={{
                            display: "block",
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            objectPosition: "center",
                          }}
                        />
                      </div>
                    ) : (
                      <div
                        style={{
                          width: "100%",
                          height: "420px",
                          background:
                            "linear-gradient(135deg,#241b0d,#080808)",
                        }}
                      />
                    )}

                    <div
                      style={{
                        padding: "24px",
                      }}
                    >
                      <p
                        style={{
                          color: "#9d7d3d",
                          fontSize: "11px",
                          letterSpacing: "3px",
                          margin: "0 0 8px",
                        }}
                      >
                        {character.title}
                      </p>

                      <h3
                        style={{
                          color: "#d7b56d",
                          fontSize: "28px",
                          fontFamily: "Cinzel, serif",
                          fontWeight: 400,
                          margin: "0 0 14px",
                        }}
                      >
                        {character.name}
                      </h3>

                      <p
                        style={{
                          color: "#bdbdbd",
                          lineHeight: 1.8,
                          fontSize: "14px",
                          margin: 0,
                        }}
                      >
                        {character.description}
                      </p>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          )}
        </section>

        {/* BOOKS */}

        <section
          style={{
            marginTop: "95px",
          }}
        >
          <SectionTitle title="Books" />

          {universeBooks.length === 0 ? (
            <EmptySection text="No books have been recorded in this universe yet." />
          ) : (
            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  "repeat(auto-fit, minmax(280px, 340px))",
                justifyContent: "center",
                gap: "30px",
                maxWidth: "1100px",
                margin: "0 auto",
              }}
            >
              {universeBooks.map((book) => (
                <Link
                  key={book.id}
                  href={`/library/stories/${book.slug}`}
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                  }}
                >
                  <article
                    style={{
                      width: "100%",
                      overflow: "hidden",
                      borderRadius: "18px",
                      background: "rgba(17,17,17,.85)",
                      border:
                        "1px solid rgba(200,164,77,.25)",
                      boxShadow:
                        "0 20px 45px rgba(0,0,0,.45)",
                    }}
                  >
                    {book.cover ? (
                      <div
                        style={{
                          width: "100%",
                          height: "510px",
                          overflow: "hidden",
                          background: "#080808",
                        }}
                      >
                        <Image
                          src={book.cover}
                          alt={book.title}
                          width={680}
                          height={1020}
                          style={{
                            display: "block",
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            objectPosition: "center",
                          }}
                        />
                      </div>
                    ) : (
                      <div
                        style={{
                          width: "100%",
                          height: "510px",
                          background:
                            "linear-gradient(135deg,#241b0d,#080808)",
                        }}
                      />
                    )}

                    <div
                      style={{
                        padding: "24px",
                      }}
                    >
                      <p
                        style={{
                          color: "#9d7d3d",
                          fontSize: "11px",
                          letterSpacing: "3px",
                          margin: "0 0 8px",
                        }}
                      >
                        {book.type}
                      </p>

                      <h3
                        style={{
                          color: "#d7b56d",
                          fontSize: "26px",
                          fontFamily: "Cinzel, serif",
                          fontWeight: 400,
                          margin: "0 0 10px",
                        }}
                      >
                        {book.title}
                      </h3>

                      <p
                        style={{
                          color: "#bdbdbd",
                          fontSize: "14px",
                          lineHeight: 1.7,
                          margin: 0,
                        }}
                      >
                        {book.subtitle}
                      </p>

                      <p
                        style={{
                          margin: "14px 0 0",
                          color: "#8f8f8f",
                          fontSize: "13px",
                        }}
                      >
                        {book.status} • {book.chapters} chapters
                      </p>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          )}
        </section>

        {/* KINGDOMS */}

        <section
          style={{
            marginTop: "95px",
          }}
        >
          <SectionTitle title="Kingdoms" />

          {universeKingdoms.length === 0 ? (
            <EmptySection text="No kingdoms have been discovered in this universe yet." />
          ) : (
            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "30px",
              }}
            >
              {universeKingdoms.map((kingdom) => (
                <article
                  key={kingdom.id}
                  style={{
                    background: "rgba(17,17,17,.85)",
                    border:
                      "1px solid rgba(200,164,77,.25)",
                    borderRadius: "18px",
                    padding: "30px",
                    backdropFilter: "blur(10px)",
                    boxShadow:
                      "0 20px 40px rgba(0,0,0,.45)",
                  }}
                >
                  <h3
                    style={{
                      color: "#d7b56d",
                      fontSize: "28px",
                      fontFamily: "Cinzel, serif",
                      fontWeight: 400,
                      margin: "0 0 20px",
                    }}
                  >
                    {kingdom.name}
                  </h3>

                  <p
                    style={{
                      color: "#bdbdbd",
                      margin: "0 0 10px",
                    }}
                  >
                    👑 <strong>Ruler:</strong>{" "}
                    {kingdom.ruler}
                  </p>

                  <p
                    style={{
                      color: "#bdbdbd",
                      margin: "0 0 20px",
                    }}
                  >
                    🏰 <strong>Capital:</strong>{" "}
                    {kingdom.capital}
                  </p>

                  <p
                    style={{
                      color: "#cfcfcf",
                      lineHeight: 1.8,
                      margin: 0,
                    }}
                  >
                    {kingdom.description}
                  </p>
                </article>
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}

/* =========================================================
   SECTION TITLE
========================================================= */

function SectionTitle({ title }: { title: string }) {
  return (
    <h2
      style={{
        color: "#d7b56d",
        fontSize: "clamp(32px, 5vw, 42px)",
        textAlign: "center",
        fontFamily: "Cinzel, serif",
        fontWeight: 400,
        margin: "0 0 40px",
      }}
    >
      {title}
    </h2>
  );
}

/* =========================================================
   WORLD STAT
========================================================= */

function WorldStat({
  value,
  label,
}: {
  value: number;
  label: string;
}) {
  return (
    <div
      style={{
        padding: "25px 15px",
        textAlign: "center",
        borderRadius: "18px",
        background: "rgba(17,17,17,.75)",
        border:
          "1px solid rgba(200,164,77,.2)",
      }}
    >
      <div
        style={{
          color: "#d7b56d",
          fontSize: "36px",
          fontFamily: "Cinzel, serif",
        }}
      >
        {value}
      </div>

      <div
        style={{
          marginTop: "8px",
          color: "#8f8f8f",
          fontSize: "12px",
          letterSpacing: "3px",
          textTransform: "uppercase",
        }}
      >
        {label}
      </div>
    </div>
  );
}

/* =========================================================
   EMPTY SECTION
========================================================= */

function EmptySection({ text }: { text: string }) {
  return (
    <div
      style={{
        padding: "50px 25px",
        textAlign: "center",
        borderRadius: "18px",
        background: "rgba(17,17,17,.6)",
        border:
          "1px solid rgba(200,164,77,.15)",
        color: "#777",
      }}
    >
      {text}
    </div>
  );
}
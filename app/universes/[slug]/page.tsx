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
        width: "100%",
        background:
          "radial-gradient(circle at top, #251736 0%, #0b0b0b 45%, #050505 100%)",
        color: "#fff",
        padding:
          "clamp(70px, 9vw, 110px) clamp(10px, 4vw, 20px) clamp(70px, 9vw, 100px)",
        boxSizing: "border-box",
        overflowX: "hidden",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1200px",
          margin: "0 auto",
          boxSizing: "border-box",
        }}
      >
        {/* HEADER */}

        <p
          style={{
            margin: "0 0 clamp(10px, 2vw, 15px)",
            color: "#9d7d3d",
            letterSpacing: "clamp(2px, 1vw, 8px)",
            textAlign: "center",
            fontSize: "clamp(9px, 2vw, 14px)",
            lineHeight: 1.5,
            overflowWrap: "break-word",
          }}
        >
          THE WORLD OF
        </p>

        <h1
          style={{
            width: "100%",
            color: "#d7b56d",
            fontSize: "clamp(36px, 7vw, 64px)",
            lineHeight: 1.1,
            textAlign: "center",
            fontFamily: "Cinzel, serif",
            fontWeight: 400,
            margin: 0,
            letterSpacing: "clamp(1px, .5vw, 4px)",
            overflowWrap: "break-word",
          }}
        >
          {universe.name}
        </h1>

        <p
          style={{
            margin:
              "clamp(12px, 3vw, 18px) 0 clamp(35px, 6vw, 55px)",
            textAlign: "center",
            color: "#a98a4b",
            letterSpacing: "clamp(1px, .7vw, 4px)",
            fontSize: "clamp(10px, 2vw, 13px)",
            lineHeight: 1.5,
            overflowWrap: "break-word",
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
            borderRadius: "clamp(10px, 2vw, 18px)",
            overflow: "hidden",
            border: "2px solid rgba(200,164,77,.35)",
            boxShadow: "0 25px 70px rgba(0,0,0,.55)",
            background: "#090909",
            boxSizing: "border-box",
          }}
        >
          <Image
            src="/maps/aenar-ikul-map.jpg"
            alt={`Map of ${universe.name}`}
            width={1200}
            height={700}
            priority
            sizes="(max-width: 768px) 100vw, 1100px"
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
            marginTop: "clamp(35px, 6vw, 55px)",
            background: "rgba(17,17,17,.78)",
            border: "1px solid rgba(200,164,77,.25)",
            borderRadius: "clamp(12px, 2.5vw, 18px)",
            padding: "clamp(20px, 5vw, 40px)",
            boxShadow: "0 20px 50px rgba(0,0,0,.3)",
            boxSizing: "border-box",
          }}
        >
          <h2
            style={{
              color: "#d7b56d",
              fontSize: "clamp(25px, 5vw, 36px)",
              lineHeight: 1.2,
              margin: "0 0 clamp(16px, 3vw, 22px)",
              fontFamily: "Cinzel, serif",
              fontWeight: 400,
              overflowWrap: "break-word",
            }}
          >
            About this World
          </h2>

          <p
            style={{
              color: "#cfcfcf",
              lineHeight: 1.9,
              fontSize: "clamp(15px, 2.7vw, 18px)",
              margin: 0,
              overflowWrap: "break-word",
              wordBreak: "break-word",
            }}
          >
            {universe.description}
          </p>

          <div
            style={{
              marginTop: "clamp(20px, 4vw, 30px)",
              padding:
                "clamp(16px, 3vw, 22px) clamp(16px, 4vw, 25px)",
              borderLeft: "3px solid #d7b56d",
              background: "rgba(215,181,109,.05)",
              color: "#d7b56d",
              fontFamily: "Georgia, serif",
              fontSize: "clamp(14px, 2.5vw, 17px)",
              fontStyle: "italic",
              lineHeight: 1.8,
              boxSizing: "border-box",
            }}
          >
            “{universe.quote}”
          </div>
        </section>

        {/* WORLD STATS */}

        <section
          style={{
            marginTop: "clamp(25px, 5vw, 40px)",
            display: "grid",
            gridTemplateColumns:
              "repeat(3, minmax(0, 1fr))",
            gap: "clamp(10px, 2.5vw, 20px)",
            width: "100%",
            boxSizing: "border-box",
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
            marginTop: "clamp(55px, 8vw, 85px)",
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
                  "repeat(auto-fit, minmax(min(100%, 280px), 360px))",
                justifyContent: "center",
                gap: "clamp(18px, 3vw, 30px)",
                width: "100%",
                maxWidth: "1100px",
                margin: "0 auto",
                boxSizing: "border-box",
              }}
            >
              {universeCharacters.map((character) => (
                <Link
                  key={character.id}
                  href={`/characters/${character.slug}`}
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                    width: "100%",
                    minWidth: 0,
                  }}
                >
                  <article
                    style={{
                      width: "100%",
                      overflow: "hidden",
                      borderRadius: "clamp(12px, 2.5vw, 18px)",
                      background: "rgba(17,17,17,.85)",
                      border:
                        "1px solid rgba(200,164,77,.25)",
                      boxShadow:
                        "0 20px 45px rgba(0,0,0,.45)",
                      transition:
                        "transform .25s ease, border-color .25s ease",
                      boxSizing: "border-box",
                    }}
                  >
                    {character.image ? (
                      <div
                        style={{
                          position: "relative",
                          width: "100%",
                          height:
                            "clamp(300px, 70vw, 420px)",
                          overflow: "hidden",
                          background: "#080808",
                        }}
                      >
                        <Image
                          src={character.image}
                          alt={character.name}
                          fill
                          unoptimized
                          sizes="
                            (max-width: 600px) 92vw,
                            (max-width: 1024px) 45vw,
                            360px
                          "
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
                          height:
                            "clamp(300px, 70vw, 420px)",
                          background:
                            "linear-gradient(135deg,#241b0d,#080808)",
                        }}
                      />
                    )}

                    <div
                      style={{
                        padding:
                          "clamp(18px, 4vw, 24px)",
                        boxSizing: "border-box",
                      }}
                    >
                      <p
                        style={{
                          margin:
                            "0 0 clamp(6px, 1.5vw, 8px)",
                          color: "#9d7d3d",
                          fontSize:
                            "clamp(9px, 2vw, 11px)",
                          letterSpacing:
                            "clamp(1px, .7vw, 3px)",
                          lineHeight: 1.5,
                          overflowWrap: "break-word",
                        }}
                      >
                        {character.title}
                      </p>

                      <h3
                        style={{
                          color: "#d7b56d",
                          fontSize:
                            "clamp(22px, 5vw, 28px)",
                          lineHeight: 1.25,
                          fontFamily: "Cinzel, serif",
                          fontWeight: 400,
                          margin:
                            "0 0 clamp(10px, 2vw, 14px)",
                          overflowWrap: "break-word",
                          wordBreak: "break-word",
                        }}
                      >
                        {character.name}
                      </h3>

                      <p
                        style={{
                          color: "#bdbdbd",
                          lineHeight: 1.8,
                          fontSize:
                            "clamp(13px, 2.4vw, 14px)",
                          margin: 0,
                          overflowWrap: "break-word",
                          wordBreak: "break-word",
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
            marginTop: "clamp(60px, 9vw, 95px)",
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
                  "repeat(auto-fit, minmax(min(100%, 270px), 340px))",
                justifyContent: "center",
                gap: "clamp(18px, 3vw, 30px)",
                width: "100%",
                maxWidth: "1100px",
                margin: "0 auto",
                boxSizing: "border-box",
              }}
            >
              {universeBooks.map((book) => (
                <Link
                  key={book.id}
                  href={`/library/stories/${book.slug}`}
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                    width: "100%",
                    minWidth: 0,
                  }}
                >
                  <article
                    style={{
                      width: "100%",
                      overflow: "hidden",
                      borderRadius: "clamp(12px, 2.5vw, 18px)",
                      background: "rgba(17,17,17,.85)",
                      border:
                        "1px solid rgba(200,164,77,.25)",
                      boxShadow:
                        "0 20px 45px rgba(0,0,0,.45)",
                      boxSizing: "border-box",
                    }}
                  >
                    {book.cover ? (
                      <div
                        style={{
                          position: "relative",
                          width: "100%",
                          height:
                            "clamp(360px, 100vw, 510px)",
                          overflow: "hidden",
                          background: "#080808",
                        }}
                      >
                        <Image
                          src={book.cover}
                          alt={book.title}
                          fill
                          unoptimized
                          sizes="
                            (max-width: 600px) 92vw,
                            (max-width: 1024px) 45vw,
                            340px
                          "
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
                          height:
                            "clamp(360px, 100vw, 510px)",
                          background:
                            "linear-gradient(135deg,#241b0d,#080808)",
                        }}
                      />
                    )}

                    <div
                      style={{
                        padding:
                          "clamp(18px, 4vw, 24px)",
                        boxSizing: "border-box",
                      }}
                    >
                      <p
                        style={{
                          margin:
                            "0 0 clamp(6px, 1.5vw, 8px)",
                          color: "#9d7d3d",
                          fontSize:
                            "clamp(9px, 2vw, 11px)",
                          letterSpacing:
                            "clamp(1px, .7vw, 3px)",
                          lineHeight: 1.5,
                        }}
                      >
                        {book.type}
                      </p>

                      <h3
                        style={{
                          color: "#d7b56d",
                          fontSize:
                            "clamp(21px, 4.5vw, 26px)",
                          lineHeight: 1.25,
                          fontFamily: "Cinzel, serif",
                          fontWeight: 400,
                          margin:
                            "0 0 clamp(8px, 2vw, 10px)",
                          overflowWrap: "break-word",
                          wordBreak: "break-word",
                        }}
                      >
                        {book.title}
                      </h3>

                      <p
                        style={{
                          color: "#bdbdbd",
                          fontSize:
                            "clamp(13px, 2.5vw, 14px)",
                          lineHeight: 1.7,
                          margin: 0,
                          overflowWrap: "break-word",
                          wordBreak: "break-word",
                        }}
                      >
                        {book.subtitle}
                      </p>

                      <p
                        style={{
                          margin:
                            "clamp(10px, 2.5vw, 14px) 0 0",
                          color: "#8f8f8f",
                          fontSize:
                            "clamp(11px, 2.2vw, 13px)",
                          lineHeight: 1.5,
                          overflowWrap: "break-word",
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
            marginTop: "clamp(60px, 9vw, 95px)",
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
                  "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
                gap: "clamp(18px, 3vw, 30px)",
                width: "100%",
                boxSizing: "border-box",
              }}
            >
              {universeKingdoms.map((kingdom) => (
                <article
                  key={kingdom.id}
                  style={{
                    width: "100%",
                    minWidth: 0,
                    background: "rgba(17,17,17,.85)",
                    border:
                      "1px solid rgba(200,164,77,.25)",
                    borderRadius:
                      "clamp(12px, 2.5vw, 18px)",
                    padding:
                      "clamp(20px, 4vw, 30px)",
                    backdropFilter: "blur(10px)",
                    WebkitBackdropFilter: "blur(10px)",
                    boxShadow:
                      "0 20px 40px rgba(0,0,0,.45)",
                    boxSizing: "border-box",
                  }}
                >
                  <h3
                    style={{
                      color: "#d7b56d",
                      fontSize:
                        "clamp(23px, 4.5vw, 28px)",
                      lineHeight: 1.25,
                      fontFamily: "Cinzel, serif",
                      fontWeight: 400,
                      margin:
                        "0 0 clamp(14px, 3vw, 20px)",
                      overflowWrap: "break-word",
                      wordBreak: "break-word",
                    }}
                  >
                    {kingdom.name}
                  </h3>

                  <p
                    style={{
                      color: "#bdbdbd",
                      fontSize:
                        "clamp(13px, 2.5vw, 16px)",
                      lineHeight: 1.7,
                      margin:
                        "0 0 clamp(8px, 2vw, 10px)",
                      overflowWrap: "break-word",
                      wordBreak: "break-word",
                    }}
                  >
                    👑 <strong>Ruler:</strong>{" "}
                    {kingdom.ruler}
                  </p>

                  <p
                    style={{
                      color: "#bdbdbd",
                      fontSize:
                        "clamp(13px, 2.5vw, 16px)",
                      lineHeight: 1.7,
                      margin:
                        "0 0 clamp(15px, 3vw, 20px)",
                      overflowWrap: "break-word",
                      wordBreak: "break-word",
                    }}
                  >
                    🏰 <strong>Capital:</strong>{" "}
                    {kingdom.capital}
                  </p>

                  <p
                    style={{
                      color: "#cfcfcf",
                      fontSize:
                        "clamp(14px, 2.5vw, 16px)",
                      lineHeight: 1.8,
                      margin: 0,
                      overflowWrap: "break-word",
                      wordBreak: "break-word",
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
        width: "100%",
        color: "#d7b56d",
        fontSize: "clamp(28px, 5.5vw, 42px)",
        lineHeight: 1.2,
        textAlign: "center",
        fontFamily: "Cinzel, serif",
        fontWeight: 400,
        margin: "0 0 clamp(28px, 5vw, 40px)",
        letterSpacing: "clamp(1px, .5vw, 3px)",
        overflowWrap: "break-word",
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
        width: "100%",
        minWidth: 0,
        padding:
          "clamp(16px, 3vw, 25px) clamp(8px, 2vw, 15px)",
        textAlign: "center",
        borderRadius:
          "clamp(12px, 2.5vw, 18px)",
        background: "rgba(17,17,17,.75)",
        border:
          "1px solid rgba(200,164,77,.2)",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          color: "#d7b56d",
          fontSize:
            "clamp(24px, 5vw, 36px)",
          lineHeight: 1.2,
          fontFamily: "Cinzel, serif",
        }}
      >
        {value}
      </div>

      <div
        style={{
          marginTop: "clamp(5px, 1.5vw, 8px)",
          color: "#8f8f8f",
          fontSize:
            "clamp(8px, 1.8vw, 12px)",
          lineHeight: 1.4,
          letterSpacing:
            "clamp(.5px, .5vw, 3px)",
          textTransform: "uppercase",
          overflowWrap: "break-word",
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
        width: "100%",
        padding:
          "clamp(30px, 6vw, 50px) clamp(16px, 4vw, 25px)",
        textAlign: "center",
        borderRadius:
          "clamp(12px, 2.5vw, 18px)",
        background: "rgba(17,17,17,.6)",
        border:
          "1px solid rgba(200,164,77,.15)",
        color: "#777",
        fontSize: "clamp(14px, 2.5vw, 18px)",
        lineHeight: 1.7,
        boxSizing: "border-box",
        overflowWrap: "break-word",
      }}
    >
      {text}
    </div>
  );
}
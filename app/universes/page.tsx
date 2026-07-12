import Image from "next/image";
import Link from "next/link";
import StarsBackground from "../components/StarsBackground";
import NebulaBackground from "../components/NebulaBackground";
import GoldenDust from "../components/GoldenDust";
import ShootingStars from "../components/ShootingStars";
import { universes } from "../library/data/universes";

export default function UniversesPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
        background:
          "radial-gradient(circle at top,#251736 0%,#0b0b0b 45%,#050505 100%)",
        color: "#fff",
        padding: "120px 60px",
      }}
    >
      <StarsBackground />
      <NebulaBackground />
      <GoldenDust />
      <ShootingStars />

      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        {/* Header */}

        <section
          style={{
            textAlign: "center",
            marginBottom: "90px",
          }}
        >
          <p
            style={{
              color: "#9d7d3d",
              letterSpacing: "8px",
              fontSize: "14px",
            }}
          >
            THE WORLDS ARCHIVE
          </p>

          <h1
            style={{
              color: "#d7b56d",
              fontSize: "70px",
              fontWeight: 400,
              letterSpacing: "6px",
              fontFamily: "Cinzel, serif",
              marginTop: "20px",
              textShadow: "0 0 30px rgba(215,181,109,.35)",
            }}
          >
            Universes
          </h1>

          <p
            style={{
              color: "#bdbdbd",
              fontSize: "22px",
              marginTop: "20px",
              maxWidth: "760px",
              marginInline: "auto",
              lineHeight: 1.8,
            }}
          >
            Discover the worlds, civilizations and legends of AENAR IKUL.
          </p>
        </section>

        {/* Cards */}

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(360px,1fr))",
            gap: "40px",
          }}
        >
          {universes.map((universe) => (
            <div
              key={universe.id}
              style={{
                background: "rgba(17,17,17,.82)",
                border: "1px solid rgba(200,164,77,.25)",
                borderRadius: "22px",
                overflow: "hidden",
                backdropFilter: "blur(14px)",
                boxShadow: "0 25px 60px rgba(0,0,0,.5)",
              }}
            >
              {/* Cover */}

              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "260px",
                  overflow: "hidden",
                }}
              >
                <Image
                  src={universe.cover}
                  alt={universe.name}
                  fill
                  style={{
                    objectFit: "cover",
                  }}
                />

                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to top, rgba(0,0,0,.9), rgba(0,0,0,.1))",
                  }}
                />

                <div
                  style={{
                    position: "absolute",
                    bottom: "25px",
                    left: "25px",
                  }}
                >
                  <span
                    style={{
                      color: "#d7b56d",
                      border: "1px solid rgba(215,181,109,.35)",
                      padding: "6px 14px",
                      borderRadius: "50px",
                      fontSize: "13px",
                      letterSpacing: "2px",
                    }}
                  >
                    {universe.category}
                  </span>
                </div>
              </div>

              {/* Content */}

              <div
                style={{
                  padding: "35px",
                }}
              >
                <h2
                  style={{
                    color: "#d7b56d",
                    fontSize: "38px",
                    fontFamily: "Cinzel, serif",
                    fontWeight: 400,
                    marginBottom: "18px",
                  }}
                >
                  {universe.name}
                </h2>

                <p
                  style={{
                    color: "#bdbdbd",
                    lineHeight: 1.8,
                    marginBottom: "25px",
                  }}
                >
                  {universe.description}
                </p>

                <blockquote
                  style={{
                    color: "#d7b56d",
                    fontStyle: "italic",
                    borderLeft: "2px solid rgba(215,181,109,.4)",
                    paddingLeft: "18px",
                    marginBottom: "30px",
                  }}
                >
                  “{universe.quote}”
                </blockquote>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "35px",
                    textAlign: "center",
                  }}
                >
                  <div>
                    <div
                      style={{
                        color: "#d7b56d",
                        fontSize: "26px",
                        fontWeight: "bold",
                      }}
                    >
                      {universe.stats.books}
                    </div>

                    <div
                      style={{
                        color: "#888",
                        fontSize: "14px",
                      }}
                    >
                      Books
                    </div>
                  </div>

                  <div>
                    <div
                      style={{
                        color: "#d7b56d",
                        fontSize: "26px",
                        fontWeight: "bold",
                      }}
                    >
                      {universe.stats.kingdoms}
                    </div>

                    <div
                      style={{
                        color: "#888",
                        fontSize: "14px",
                      }}
                    >
                      Kingdoms
                    </div>
                  </div>

                  <div>
                    <div
                      style={{
                        color: "#d7b56d",
                        fontSize: "26px",
                        fontWeight: "bold",
                      }}
                    >
                      {universe.stats.characters}
                    </div>

                    <div
                      style={{
                        color: "#888",
                        fontSize: "14px",
                      }}
                    >
                      Characters
                    </div>
                  </div>
                </div>

                <Link
                  href={`/universes/${universe.slug}`}
                  style={{
                    display: "block",
                    textAlign: "center",
                    padding: "16px",
                    border: "1px solid rgba(200,164,77,.45)",
                    borderRadius: "10px",
                    color: "#d7b56d",
                    textDecoration: "none",
                    letterSpacing: "2px",
                    fontWeight: "bold",
                  }}
                >
                  EXPLORE UNIVERSE →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
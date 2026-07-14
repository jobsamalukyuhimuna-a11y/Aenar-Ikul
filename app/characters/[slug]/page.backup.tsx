import Image from "next/image";
import { notFound } from "next/navigation";
import CharacterSideEffects from "../../components/CharacterSideEffects";
import { characters } from "../../library/data/characters";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function CharacterPage({ params }: Props) {
  const { slug } = await params;

  const character = characters.find((c) => c.slug === slug);

  if (!character) {
    notFound();
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top,#251736 0%,#0b0b0b 45%,#050505 100%)",
        color: "#ffffff",
        padding: "70px 20px 120px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <CharacterSideEffects />

      <div
        style={{
          maxWidth: "1300px",
          margin: "0 auto",
          position: "relative",
          zIndex: 2,
        }}
      >
        <style>{`
          @keyframes royalGlow{
            0%{
              transform:translate(-50%,-50%) scale(1);
              opacity:.25;
            }
            50%{
              transform:translate(-50%,-50%) scale(1.15);
              opacity:.45;
            }
            100%{
              transform:translate(-50%,-50%) scale(1);
              opacity:.25;
            }
          }
        `}</style>

        <div
          style={{
            position: "absolute",
            top: "110px",
            left: "50%",
            width: "450px",
            height: "450px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(215,181,109,.18), rgba(215,181,109,0))",
            filter: "blur(70px)",
            transform: "translate(-50%,-50%)",
            animation: "royalGlow 8s ease-in-out infinite",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />

        <p
          style={{
            position: "relative",
            zIndex: 2,
            textAlign: "center",
            color: "#9d7d3d",
            letterSpacing: "8px",
            fontSize: "14px",
          }}
        >
          CHARACTER PROFILE
        </p>

        <h1
          style={{
            position: "relative",
            zIndex: 2,
            textAlign: "center",
            color: "#d7b56d",
            fontSize: "68px",
            fontFamily: "Cinzel, serif",
            fontWeight: 400,
            marginTop: "18px",
            marginBottom: "18px",
            textShadow: "0 0 30px rgba(215,181,109,.35)",
          }}
        >
          {character.name}
        </h1>

        <div
          style={{
            position: "relative",
            zIndex: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "25px",
            marginBottom: "60px",
          }}
        >
          <div
            style={{
              width: "220px",
              height: "1px",
              background:
                "linear-gradient(to right, transparent, rgba(215,181,109,.75))",
            }}
          />

          <div
            style={{
              fontSize: "34px",
              color: "#d7b56d",
              textShadow: "0 0 15px rgba(215,181,109,.45)",
            }}
          >
            👑
          </div>

          <div
            style={{
              width: "220px",
              height: "1px",
              background:
                "linear-gradient(to left, transparent, rgba(215,181,109,.75))",
            }}
          />
        </div>

        <section
          style={{
            display: "grid",
            gridTemplateColumns: "240px 1fr 240px",
            gap: "40px",
            alignItems: "center",
            position: "relative",
            zIndex: 2,
          }}
        >
                    {/* Left Panel */}

          <div
            style={{
              border: "1px solid rgba(200,164,77,.25)",
              borderRadius: "18px",
              padding: "30px",
              background: "rgba(17,17,17,.75)",
              backdropFilter: "blur(12px)",
            }}
          >
            <h3
              style={{
                color: "#d7b56d",
                marginBottom: "20px",
                fontFamily: "Cinzel, serif",
                fontWeight: 400,
              }}
            >
              DETAILS
            </h3>

            <p>
              <strong>🏰 Kingdom</strong>
              <br />
              {character.kingdom}
            </p>

            <br />

            <p>
              <strong>🧬 Race</strong>
              <br />
              {character.race}
            </p>

            <br />

            <p>
              <strong>❤️ Status</strong>
              <br />
              {character.status}
            </p>

            <br />

            <p>
              <strong>🌍 Universe</strong>
              <br />
              {character.universe}
            </p>
          </div>

          {/* Character Image */}

          <div
            style={{
              position: "relative",
              height: "720px",
              borderRadius: "22px",
              overflow: "hidden",
              border: "1px solid rgba(200,164,77,.35)",
              background:
                "radial-gradient(circle at top,#2b1a40 0%,#111111 55%,#050505 100%)",
              boxShadow:
                "0 0 60px rgba(215,181,109,.10), inset 0 0 50px rgba(255,255,255,.03)",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "radial-gradient(circle at center, rgba(215,181,109,.12), transparent 70%)",
                zIndex: 1,
                pointerEvents: "none",
              }}
            />

            <Image
              src={character.image}
              alt={character.name}
              fill
              style={{
                objectFit: "contain",
                objectPosition: "center",
                zIndex: 2,
              }}
            />
          </div>
                    {/* Right Panel */}

          <div
            style={{
              border: "1px solid rgba(200,164,77,.25)",
              borderRadius: "18px",
              padding: "30px",
              background: "rgba(17,17,17,.75)",
              backdropFilter: "blur(12px)",
              textAlign: "center",
            }}
          >
            <div
              style={{
                fontSize: "72px",
                marginBottom: "20px",
                textShadow: "0 0 20px rgba(215,181,109,.4)",
              }}
            >
              👑
            </div>

            <h3
              style={{
                color: "#d7b56d",
                fontFamily: "Cinzel, serif",
                fontSize: "28px",
                fontWeight: 400,
                marginBottom: "18px",
              }}
            >
              {character.title}
            </h3>

            <div
              style={{
                width: "80px",
                height: "1px",
                background: "rgba(215,181,109,.45)",
                margin: "0 auto 20px",
              }}
            />

            <p
              style={{
                color: "#bdbdbd",
                fontStyle: "italic",
                lineHeight: 1.9,
                marginBottom: "25px",
              }}
            >
              “{character.quote}”
            </p>

            <div
              style={{
                padding: "14px",
                border: "1px solid rgba(200,164,77,.2)",
                borderRadius: "12px",
                color: "#9d7d3d",
                letterSpacing: "3px",
                fontSize: "13px",
              }}
            >
              FIRST OF HIS NAME
            </div>
          </div>

        </section>

        {/* Biography */}

        <section
          style={{
            marginTop: "70px",
            background: "rgba(17,17,17,.75)",
            border: "1px solid rgba(200,164,77,.25)",
            borderRadius: "20px",
            padding: "45px",
            backdropFilter: "blur(12px)",
            boxShadow: "0 20px 60px rgba(0,0,0,.35)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: "50%",
              transform: "translateX(-50%)",
              width: "220px",
              height: "2px",
              background:
                "linear-gradient(to right, transparent, rgba(215,181,109,.8), transparent)",
            }}
          />
                    <h2
            style={{
              color: "#d7b56d",
              fontSize: "38px",
              marginBottom: "25px",
              fontFamily: "Cinzel, serif",
              fontWeight: 400,
              textAlign: "center",
            }}
          >
            Biography
          </h2>

          <p
            style={{
              color: "#cfcfcf",
              lineHeight: 2.1,
              fontSize: "18px",
              textAlign: "justify",
            }}
          >
            {character.description}
          </p>
        </section>

        {/* Royal Footer */}

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "20px",
            marginTop: "80px",
            marginBottom: "30px",
          }}
        >
          <div
            style={{
              width: "160px",
              height: "1px",
              background:
                "linear-gradient(to right, transparent, rgba(215,181,109,.6))",
            }}
          />

          <div
            style={{
              fontSize: "28px",
              color: "#d7b56d",
              textShadow: "0 0 15px rgba(215,181,109,.5)",
            }}
          >
            ✦
          </div>

          <div
            style={{
              width: "160px",
              height: "1px",
              background:
                "linear-gradient(to left, transparent, rgba(215,181,109,.6))",
            }}
          />
        </div>
      </div>
    </main>
  );
}
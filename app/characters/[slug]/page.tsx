import Image from "next/image";
import { notFound } from "next/navigation";
import CharacterSideEffects from "../../components/CharacterSideEffects";
import { prisma } from "@/lib/prisma";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function CharacterPage({
  params,
}: Props) {
  const { slug } = await params;

  const character = await prisma.character.findUnique({
    where: {
      slug,
    },
    include: {
      images: {
        orderBy: {
          sortOrder: "asc",
        },
      },
      musics: true,
    },
  });

  if (!character) {
    notFound();
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top,#251736 0%,#0b0b0b 45%,#050505 100%)",
        color: "#fff",
        padding: "70px 20px 120px",
        overflow: "hidden",
        position: "relative",
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
          @keyframes royalGlow {
            0% {
              transform: translate(-50%,-50%) scale(1);
              opacity: .25;
            }

            50% {
              transform: translate(-50%,-50%) scale(1.15);
              opacity: .45;
            }

            100% {
              transform: translate(-50%,-50%) scale(1);
              opacity: .25;
            }
          }
        `}</style>


        <div
          style={{
            position:"absolute",
            top:"120px",
            left:"50%",
            width:"450px",
            height:"450px",
            borderRadius:"50%",
            background:
              "radial-gradient(circle,rgba(215,181,109,.18),transparent 70%)",
            filter:"blur(70px)",
            transform:"translate(-50%,-50%)",
            animation:"royalGlow 8s infinite ease-in-out",
          }}
        />


        <p
          style={{
            textAlign:"center",
            color:"#9d7d3d",
            letterSpacing:"8px",
            fontSize:"14px",
          }}
        >
          CHARACTER PROFILE
        </p>


        <h1
          style={{
            textAlign:"center",
            color:"#d7b56d",
            fontSize:"68px",
            fontFamily:"Cinzel,serif",
            fontWeight:400,
            marginTop:"20px",
            textShadow:
              "0 0 30px rgba(215,181,109,.35)",
          }}
        >
          {character.name || "Unknown"}
        </h1>


        <div
          style={{
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            gap:"25px",
            margin:"50px 0",
          }}
        >
          <div
            style={{
              width:"220px",
              height:"1px",
              background:
              "linear-gradient(to right,transparent,#d7b56d)",
            }}
          />

          <div
            style={{
              fontSize:"34px",
            }}
          >
            👑
          </div>


          <div
            style={{
              width:"220px",
              height:"1px",
              background:
              "linear-gradient(to left,transparent,#d7b56d)",
            }}
          />

        </div>
        <section
          style={{
            display:"grid",
            gridTemplateColumns:
              "240px 1fr 240px",
            gap:"40px",
            alignItems:"center",
            position:"relative",
          }}
        >

          {/* LEFT DETAILS */}

          <div
            style={{
              border:
                "1px solid rgba(200,164,77,.25)",
              borderRadius:"18px",
              padding:"30px",
              background:
                "rgba(17,17,17,.75)",
              backdropFilter:
                "blur(12px)",
            }}
          >

            <h3
              style={{
                color:"#d7b56d",
                fontFamily:
                  "Cinzel,serif",
                marginBottom:"25px",
              }}
            >
              DETAILS
            </h3>


            <p>
              <strong>🏰 Kingdom</strong>
              <br />
              {character.kingdom || "Unknown"}
            </p>

            <br />

            <p>
              <strong>🧬 Race</strong>
              <br />
              {character.race || "Unknown"}
            </p>

            <br />

            <p>
              <strong>❤️ Status</strong>
              <br />
              {character.status || "Unknown"}
            </p>

            <br />

            <p>
              <strong>🌍 Universe</strong>
              <br />
              {character.universe || "Unknown"}
            </p>


          </div>



          {/* MAIN IMAGE */}


          <div
            style={{
              position:"relative",
              height:"720px",
              borderRadius:"22px",
              overflow:"hidden",
              border:
                "1px solid rgba(200,164,77,.35)",
              background:
                "radial-gradient(circle,#2b1a40,#050505)",
              boxShadow:
                "0 0 60px rgba(215,181,109,.15)",
            }}
          >

            <div
              style={{
                position:"absolute",
                inset:0,
                background:
                "radial-gradient(circle,rgba(215,181,109,.15),transparent)",
                zIndex:1,
              }}
            />


            {character.image && (
              <Image
                src={character.image}
                alt={
                  character.name || "Character"
                }
                fill
                style={{
                  objectFit:"contain",
                  zIndex:2,
                }}
              />
            )}

          </div>




          {/* RIGHT PANEL */}


          <div
            style={{
              border:
                "1px solid rgba(200,164,77,.25)",
              borderRadius:"18px",
              padding:"30px",
              background:
                "rgba(17,17,17,.75)",
              backdropFilter:
                "blur(12px)",
              textAlign:"center",
            }}
          >

            <div
              style={{
                fontSize:"70px",
                marginBottom:"20px",
              }}
            >
              👑
            </div>


            <h3
              style={{
                color:"#d7b56d",
                fontFamily:
                  "Cinzel,serif",
                fontSize:"28px",
                fontWeight:400,
              }}
            >
              {character.title || "Unknown Title"}
            </h3>


            <div
              style={{
                width:"80px",
                height:"1px",
                background:
                  "rgba(215,181,109,.5)",
                margin:"20px auto",
              }}
            />


            {character.quote && (
              <p
                style={{
                  color:"#ccc",
                  fontStyle:"italic",
                  lineHeight:1.9,
                }}
              >
                "{character.quote}"
              </p>
            )}


            <div
              style={{
                marginTop:"30px",
                padding:"14px",
                border:
                "1px solid rgba(200,164,77,.25)",
                borderRadius:"12px",
                color:"#9d7d3d",
                letterSpacing:"3px",
                fontSize:"13px",
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
              fontFamily: "Cinzel, serif",
              fontWeight: 400,
              textAlign: "center",
              marginBottom: "30px",
            }}
          >
            Biography
          </h2>

          <p
            style={{
              color: "#d0d0d0",
              fontSize: "18px",
              lineHeight: 2.1,
              textAlign: "justify",
              whiteSpace: "pre-wrap",
            }}
          >
            {character.description || "No biography available."}
          </p>
        </section>

        {/* Gallery */}

        {character.images.length > 0 && (
          <section
            style={{
              marginTop: "70px",
              background: "rgba(17,17,17,.75)",
              border: "1px solid rgba(200,164,77,.25)",
              borderRadius: "20px",
              padding: "45px",
            }}
          >
            <h2
              style={{
                color: "#d7b56d",
                fontSize: "38px",
                fontFamily: "Cinzel, serif",
                fontWeight: 400,
                textAlign: "center",
                marginBottom: "40px",
              }}
            >
              Gallery
            </h2>

            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  "repeat(auto-fit,minmax(250px,1fr))",
                gap: "25px",
              }}
            >
              {character.images.map((item) => (
                <div
                  key={item.id}
                  style={{
                    position: "relative",
                    height: "300px",
                    borderRadius: "18px",
                    overflow: "hidden",
                    border:
                      "1px solid rgba(215,181,109,.25)",
                  }}
                >
                  <Image
                    src={item.image}
                    alt={character.name || ""}
                    fill
                    style={{
                      objectFit: "cover",
                    }}
                  />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Main Music */}

        {character.music && (
          <section
            style={{
              marginTop: "70px",
              background: "rgba(17,17,17,.75)",
              border: "1px solid rgba(200,164,77,.25)",
              borderRadius: "20px",
              padding: "45px",
              textAlign: "center",
            }}
          >
            <h2
              style={{
                color: "#d7b56d",
                fontSize: "38px",
                fontFamily: "Cinzel, serif",
                fontWeight: 400,
                marginBottom: "30px",
              }}
            >
              Character Theme
            </h2>

            <audio
              controls
              src={character.music}
              style={{
                width: "80%",
              }}
            />
          </section>
        )}
                {/* Additional Music */}

        {character.musics.length > 0 && (
          <section
            style={{
              marginTop: "70px",
              background: "rgba(17,17,17,.75)",
              border: "1px solid rgba(200,164,77,.25)",
              borderRadius: "20px",
              padding: "45px",
            }}
          >
            <h2
              style={{
                color: "#d7b56d",
                fontSize: "38px",
                fontFamily: "Cinzel, serif",
                fontWeight: 400,
                textAlign: "center",
                marginBottom: "35px",
              }}
            >
              Additional Music
            </h2>

            {character.musics.map((music) => (
              <div
                key={music.id}
                style={{
                  marginBottom: "30px",
                  padding: "20px",
                  border: "1px solid rgba(215,181,109,.2)",
                  borderRadius: "14px",
                  background: "rgba(255,255,255,.03)",
                }}
              >
                {music.name && (
                  <h3
                    style={{
                      color: "#d7b56d",
                      marginBottom: "15px",
                      fontWeight: 400,
                    }}
                  >
                    {music.name}
                  </h3>
                )}

                <audio
                  controls
                  src={music.file}
                  style={{
                    width: "100%",
                  }}
                />
              </div>
            ))}
          </section>
        )}

        {/* Footer */}

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
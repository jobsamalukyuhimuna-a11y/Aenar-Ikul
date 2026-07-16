import Image from "next/image";

type Character = {
  image: string | null;
  name: string | null;
  title: string | null;
  kingdom: string | null;
  race: string | null;
  status: string | null;
  universe: string | null;
  quote: string | null;
  music: string | null;
};

type Props = {
  character: Character;
};

export default function CharacterProfile({ character }: Props) {
  return (
    <>
      {character.music && (
        <section
          style={{
            maxWidth: "980px",
            margin: "0 auto 70px",
            padding: "28px",
            borderRadius: "26px",
            background:
              "linear-gradient(135deg,#191919 0%,#101010 100%)",
            border: "1px solid rgba(215,181,109,.28)",
            boxShadow:
              "0 20px 60px rgba(0,0,0,.45),0 0 30px rgba(215,181,109,.08)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "22px",
            }}
          >
            <div
              style={{
                width: "86px",
                height: "86px",
                borderRadius: "22px",
                background:
                  "linear-gradient(135deg,#d7b56d,#8d6a2a)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "42px",
                color: "#fff",
                flexShrink: 0,
                boxShadow:
                  "0 12px 30px rgba(215,181,109,.35)",
              }}
            >
              ♫
            </div>

            <div
              style={{
                flex: 1,
              }}
            >
              <div
                style={{
                  color: "#ffffff",
                  fontSize: "26px",
                  fontWeight: 600,
                  marginBottom: "6px",
                }}
              >
                {character.name}
              </div>

              <div
                style={{
                  color: "#b8b8b8",
                  fontSize: "15px",
                  letterSpacing: "2px",
                  marginBottom: "18px",
                }}
              >
                CHARACTER THEME
              </div>

              <audio
                controls
                controlsList="nodownload"
                preload="metadata"
                src={character.music}
                style={{
                  width: "100%",
                  height: "56px",
                  borderRadius: "14px",
                }}
              />
            </div>
          </div>
        </section>
      )}

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "25px",
          margin: "50px 0",
        }}
      >
        <div
          style={{
            width: "220px",
            height: "1px",
            background:
              "linear-gradient(to right,transparent,#d7b56d)",
          }}
        />

        <div
          style={{
            fontSize: "34px",
          }}
        >
          👑
        </div>

        <div
          style={{
            width: "220px",
            height: "1px",
            background:
              "linear-gradient(to left,transparent,#d7b56d)",
          }}
        />
      </div>

      <section
        style={{
          display: "grid",
          gridTemplateColumns: "240px 1fr 240px",
          gap: "40px",
          alignItems: "center",
        }}
      >
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
              fontFamily: "Cinzel, serif",
              marginBottom: "25px",
              textAlign: "center",
            }}
          >
            DETAILS
          </h3>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "25px",
            }}
          >
            <div style={{ textAlign: "center", lineHeight: 1.8 }}>
              <strong>🏰 Kingdom</strong>
              <br />
              {character.kingdom || "Unknown"}
            </div>

            <div style={{ textAlign: "center", lineHeight: 1.8 }}>
              <strong>🧬 Race</strong>
              <br />
              {character.race || "Unknown"}
            </div>

            <div style={{ textAlign: "center", lineHeight: 1.8 }}>
              <strong>❤️ Status</strong>
              <br />
              {character.status || "Unknown"}
            </div>

            <div style={{ textAlign: "center", lineHeight: 1.8 }}>
              <strong>🌍 Universe</strong>
              <br />
              {character.universe || "Unknown"}
            </div>
          </div>
        </div>

        <div
          style={{
            position: "relative",
            height: "720px",
            borderRadius: "22px",
            overflow: "hidden",
            border: "1px solid rgba(200,164,77,.35)",
            background:
              "radial-gradient(circle,#2b1a40,#050505)",
            boxShadow:
              "0 0 60px rgba(215,181,109,.15)",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(circle,rgba(215,181,109,.15),transparent)",
              zIndex: 1,
            }}
          />

          {character.image && (
            <Image
              src={character.image}
              alt={character.name || "Character"}
              fill
              style={{
                objectFit: "contain",
                zIndex: 2,
              }}
            />
          )}
        </div>
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
              fontSize: "70px",
              marginBottom: "20px",
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
            }}
          >
            {character.title || "Unknown Title"}
          </h3>

          <div
            style={{
              width: "80px",
              height: "1px",
              background: "rgba(215,181,109,.5)",
              margin: "20px auto",
            }}
          />

          {character.quote && (
            <p
              style={{
                color: "#ccc",
                fontStyle: "italic",
                lineHeight: 1.9,
              }}
            >
              "{character.quote}"
            </p>
          )}

          <div
            style={{
              marginTop: "30px",
              padding: "14px",
              border: "1px solid rgba(200,164,77,.25)",
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
    </>
  );
}
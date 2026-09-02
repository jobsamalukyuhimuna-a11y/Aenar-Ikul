import type { Character } from "../components/CharacterProfile";

type Props = {
  character: Character;
};

export default function DemonTheme({
  character,
}: Props) {
  return (
    <main
      style={{
        minHeight: "100vh",
        width: "100%",
        padding:
          "clamp(45px, 7vw, 60px) clamp(12px, 4vw, 30px)",
        background:
          "radial-gradient(circle at top,#4a0010,#050505 70%)",
        color: "#f5dddd",
        boxSizing: "border-box",
        overflowX: "hidden",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1200px",
          margin: "0 auto",
          padding:
            "clamp(22px, 5vw, 50px)",
          borderRadius:
            "clamp(16px, 3vw, 30px)",
          background: "rgba(20,0,5,.85)",
          border:
            "1px solid rgba(180,40,60,.4)",
          boxShadow:
            "0 30px 80px rgba(0,0,0,.9)",
          boxSizing: "border-box",
        }}
      >
        {/* NAME */}

        <h1
          style={{
            width: "100%",
            margin: "0",
            textAlign: "center",
            fontFamily: "Cinzel,serif",
            fontSize:
              "clamp(34px, 7vw, 52px)",
            lineHeight: 1.15,
            fontWeight: 400,
            color: "#ffb0b0",
            letterSpacing:
              "clamp(1px, .4vw, 3px)",
            overflowWrap: "break-word",
            wordBreak: "break-word",
          }}
        >
          {character.name || "Unknown"}
        </h1>

        {/* TITLE */}

        <p
          style={{
            margin:
              "clamp(12px, 2.5vw, 18px) 0 0",
            textAlign: "center",
            color: "#d85b5b",
            letterSpacing:
              "clamp(1px, .7vw, 4px)",
            fontSize:
              "clamp(10px, 2.5vw, 14px)",
            lineHeight: 1.5,
            overflowWrap: "break-word",
          }}
        >
          ✦ {character.title || "Demon"} ✦
        </p>

        {/* QUOTE */}

        {character.quote && (
          <blockquote
            style={{
              width: "100%",
              margin:
                "clamp(28px, 5vw, 40px) 0 0",
              padding: 0,
              textAlign: "center",
              fontStyle: "italic",
              fontSize:
                "clamp(16px, 3vw, 22px)",
              lineHeight: 1.8,
              color: "#ff9999",
              overflowWrap: "break-word",
              wordBreak: "break-word",
              boxSizing: "border-box",
            }}
          >
            ❝ {character.quote} ❞
          </blockquote>
        )}

        {/* BIOGRAPHY */}

        <p
          style={{
            width: "100%",
            margin:
              "clamp(28px, 5vw, 40px) 0 0",
            fontFamily: "Georgia,serif",
            fontSize:
              "clamp(16px, 2.8vw, 20px)",
            lineHeight: 2,
            color: "#f5dddd",
            overflowWrap: "break-word",
            wordBreak: "break-word",
            boxSizing: "border-box",
          }}
        >
          {character.description ||
            "No biography available."}
        </p>
      </div>
    </main>
  );
}
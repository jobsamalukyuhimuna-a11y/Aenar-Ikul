import React from "react";

type Character = {
  name: string | null;
  title: string | null;
};

type Props = {
  character: Character;
};

export default function CharacterHeader({ character }: Props) {
  return (
    <>
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
          top: "120px",
          left: "50%",
          width: "450px",
          height: "450px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle,rgba(215,181,109,.18),transparent 70%)",
          filter: "blur(70px)",
          transform: "translate(-50%,-50%)",
          animation: "royalGlow 8s ease-in-out infinite",
          pointerEvents: "none",
        }}
      />

      <p
        style={{
          textAlign: "center",
          color: "#9d7d3d",
          letterSpacing: "8px",
          fontSize: "15px",
        }}
      >
        CHARACTER PROFILE
      </p>

      <h1
        style={{
          textAlign: "center",
          color: "#d7b56d",
          fontFamily: "Cinzel, serif",
          fontWeight: 400,
          fontSize: "72px",
          marginTop: "18px",
          textShadow: "0 0 30px rgba(215,181,109,.35)",
        }}
      >
        {character.name || "Unknown"}
      </h1>

      {character.title && (
        <p
          style={{
            textAlign: "center",
            color: "#b89452",
            fontSize: "18px",
            letterSpacing: "5px",
            marginTop: "15px",
            marginBottom: "45px",
          }}
        >
          ✦ {character.title.toUpperCase()} ✦
        </p>
      )}
    </>
  );
}
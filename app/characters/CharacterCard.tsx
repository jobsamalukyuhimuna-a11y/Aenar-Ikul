import Image from "next/image";
import Link from "next/link";

type Character = {
  id: number;
  slug: string;
  name: string;
  title: string;
  image: string;
  description: string;
  quote: string;
  kingdom: string;
  universe: string;
  race: string;
  status: string;
};

type Props = {
  character: Character;
};

export default function CharacterCard({ character }: Props) {
  return (
    <div
      style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: "24px",
        background: "rgba(15,15,15,.92)",
        border: "1px solid rgba(215,181,109,.25)",
        backdropFilter: "blur(10px)",
        boxShadow:
          "0 25px 60px rgba(0,0,0,.55), 0 0 40px rgba(215,181,109,.08)",
        transition: ".35s",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at top, rgba(215,181,109,.10), transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "relative",
          height: "520px",
          overflow: "hidden",
          background:
            "radial-gradient(circle at top,#2d1d45 0%,#111111 55%,#050505 100%)",
        }}
      >
        <Image
          src={character.image}
          alt={character.name}
          fill
          style={{
            objectFit: "contain",
            objectPosition: "center",
            padding: "20px",
            transition: ".4s",
          }}
        />

        <div
          style={{
            position: "absolute",
            inset: 0,
            border: "1px solid rgba(215,181,109,.18)",
            pointerEvents: "none",
          }}
        />
      </div>
            <div
        style={{
          padding: "30px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "18px",
          }}
        >
          <div
            style={{
              width: "90px",
              height: "2px",
              background:
                "linear-gradient(to right, transparent, #d7b56d, transparent)",
            }}
          />
        </div>

        <h2
          style={{
            color: "#f2dfb4",
            fontFamily: "Cinzel, serif",
            fontSize: "36px",
            fontWeight: 400,
            textAlign: "center",
            marginBottom: "10px",
            letterSpacing: "2px",
          }}
        >
          {character.name}
        </h2>

        <p
          style={{
            color: "#a98a4b",
            textAlign: "center",
            letterSpacing: "4px",
            fontSize: "13px",
            marginBottom: "28px",
          }}
        >
          ✦ {character.title.toUpperCase()} ✦
        </p>

        <blockquote
          style={{
            color: "#d7b56d",
            fontStyle: "italic",
            textAlign: "center",
            lineHeight: 1.8,
            fontSize: "19px",
            marginBottom: "30px",
          }}
        >
          ❝ {character.quote} ❞
        </blockquote>

        <p
          style={{
            color: "#d5d5d5",
            lineHeight: 1.9,
            textAlign: "center",
            marginBottom: "30px",
          }}
        >
          {character.description}
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "14px",
            marginBottom: "30px",
          }}
        >
          <div style={{ color: "#d7b56d" }}>🏰 {character.kingdom}</div>

          <div style={{ color: "#d7b56d" }}>🌍 {character.universe}</div>

          <div style={{ color: "#d7b56d" }}>🧬 {character.race}</div>

          <div style={{ color: "#d7b56d" }}>❤️ {character.status}</div>
        </div>
                <Link
          href={`/characters/${character.slug}`}
          style={{
            display: "block",
            textAlign: "center",
            padding: "16px",
            borderRadius: "14px",
            background:
              "linear-gradient(90deg,#5b4216,#d7b56d,#5b4216)",
            color: "#111",
            textDecoration: "none",
            fontWeight: 700,
            letterSpacing: "3px",
            fontFamily: "Cinzel, serif",
            transition: ".3s",
          }}
        >
          ✦ VIEW PROFILE ✦
        </Link>
      </div>
    </div>
  );
}
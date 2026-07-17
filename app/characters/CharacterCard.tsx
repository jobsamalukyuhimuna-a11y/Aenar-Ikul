import Image from "next/image";
import Link from "next/link";

type Character = {
  id: number;
  slug: string;
  name: string;
  title?: string | null;
  image?: string | null;
  description?: string | null;
  quote?: string | null;
  kingdom?: string | null;
  universe?: string | null;
  race?: string | null;
  status?: string | null;
  profileStyle?: string | null;
};

type Props = {
  character: Character;
};

export default function CharacterCard({
  character,
}: Props) {
  return (
    <div
      style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: "24px",
        background: "rgba(15,15,15,.92)",
        border:
          "1px solid rgba(215,181,109,.25)",
        backdropFilter: "blur(10px)",
        boxShadow:
          "0 25px 60px rgba(0,0,0,.55), 0 0 40px rgba(215,181,109,.08)",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at top, rgba(215,181,109,.10), transparent 70%)",
        }}
      />

      <div
        style={{
          position: "relative",
          height: "520px",
          overflow: "hidden",
          background:
            "radial-gradient(circle at top,#2d1d45 0%,#111 55%,#050505 100%)",
        }}
      >
        <Image
          src={
            character.image ||
            "/images/default-character.png"
          }
          alt={character.name}
          fill
          style={{
            objectFit: "contain",
            padding: "20px",
          }}
        />
      </div>


      <div
        style={{
          padding: "30px",
        }}
      >
        <h2
          style={{
            color: "#f2dfb4",
            fontFamily: "Cinzel, serif",
            fontSize: "36px",
            textAlign: "center",
            marginBottom: "10px",
          }}
        >
          {character.name}
        </h2>


        <p
          style={{
            color: "#a98a4b",
            textAlign: "center",
            letterSpacing: "4px",
          }}
        >
          ✦ {(character.title ?? "").toUpperCase()} ✦
        </p>


        {character.quote && (
          <blockquote
            style={{
              color: "#d7b56d",
              textAlign: "center",
              fontStyle: "italic",
              marginTop: "20px",
            }}
          >
            ❝ {character.quote} ❞
          </blockquote>
        )}


        {character.description && (
          <p
            style={{
              color: "#ccc",
              textAlign: "center",
              lineHeight: 1.8,
              marginTop: "20px",
            }}
          >
            {character.description}
          </p>
        )}


        <Link
          href={`/characters/${character.slug}`}
          style={{
            display: "block",
            textAlign: "center",
            marginTop: "30px",
            padding: "16px",
            borderRadius: "14px",
            background:
              "linear-gradient(90deg,#5b4216,#d7b56d,#5b4216)",
            color: "#111",
            textDecoration: "none",
            fontWeight: 700,
            letterSpacing: "3px",
          }}
        >
          ✦ VIEW PROFILE ✦
        </Link>
      </div>
    </div>
  );
}
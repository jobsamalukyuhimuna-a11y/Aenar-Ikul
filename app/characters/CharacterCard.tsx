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

export default function CharacterCard({ character }: Props) {
  const imageSrc =
    character.image && character.image.trim() !== ""
      ? character.image
      : "/images/default-character.png";

  return (
    <article
      style={{
        position: "relative",
        overflow: "hidden",
        width: "100%",
        maxWidth: "100%",
        borderRadius: "clamp(16px, 3vw, 24px)",
        background: "rgba(10,10,10,.96)",
        border: "1px solid rgba(215,181,109,.35)",
        boxShadow: "0 25px 70px rgba(0,0,0,.75)",
        boxSizing: "border-box",
      }}
    >
      {/* CHARACTER CARD GLOW */}

      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at top,rgba(139,92,246,.18),transparent 65%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* CHARACTER IMAGE */}

      <div
        style={{
          position: "relative",
          width: "100%",
          height: "clamp(280px, 72vw, 520px)",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background:
            "radial-gradient(circle at center,#26163d 0%,#080808 70%)",
          boxSizing: "border-box",
        }}
      >
        <Image
          src={imageSrc}
          alt={character.name}
          fill
          priority
          unoptimized
          sizes="
            (max-width: 480px) 94vw,
            (max-width: 768px) 90vw,
            (max-width: 1200px) 45vw,
            420px
          "
          style={{
            objectFit: "contain",
            objectPosition: "center center",
            width: "100%",
            height: "100%",
            padding: "clamp(10px, 2vw, 15px)",
            transform: "scale(.92)",
            filter:
              "drop-shadow(0 0 35px rgba(215,181,109,.35))",
          }}
        />
      </div>

      {/* INFO */}

      <div
        style={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          padding: "clamp(18px, 4vw, 30px)",
          textAlign: "center",
          boxSizing: "border-box",
        }}
      >
        {/* GOLD DIVIDER */}

        <div
          style={{
            width: "clamp(85px, 25vw, 120px)",
            maxWidth: "60%",
            height: "2px",
            margin: "0 auto clamp(15px, 3vw, 20px)",
            background:
              "linear-gradient(to right,transparent,#d7b56d,transparent)",
          }}
        />

        {/* CHARACTER NAME */}

        <h2
          style={{
            color: "#f2dfb4",
            fontFamily: "Cinzel, serif",
            fontSize: "clamp(22px, 6vw, 34px)",
            lineHeight: 1.2,
            fontWeight: 400,
            letterSpacing: "clamp(1px, .5vw, 2px)",
            margin: "0 0 clamp(10px, 2.5vw, 14px)",
            overflowWrap: "break-word",
            wordBreak: "break-word",
          }}
        >
          {character.name}
        </h2>

        {/* CHARACTER TITLE */}

        <p
          style={{
            color: "#d7b56d",
            letterSpacing: "clamp(1px, .8vw, 4px)",
            fontSize: "clamp(10px, 2.7vw, 13px)",
            lineHeight: 1.5,
            margin: "0 0 clamp(22px, 5vw, 30px)",
            overflowWrap: "break-word",
            wordBreak: "break-word",
          }}
        >
          ✦ {(character.title ?? "UNKNOWN").toUpperCase()} ✦
        </p>

        {/* PROFILE BUTTON */}

        <Link
          href={`/characters/${character.slug}`}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            minHeight: "clamp(48px, 12vw, 54px)",
            boxSizing: "border-box",
            padding: "clamp(12px, 3vw, 15px) clamp(14px, 4vw, 20px)",
            borderRadius: "clamp(10px, 2.5vw, 14px)",
            background:
              "linear-gradient(90deg,#5b4216,#d7b56d,#5b4216)",
            color: "#111",
            textDecoration: "none",
            fontWeight: 700,
            letterSpacing: "clamp(.7px, .6vw, 3px)",
            fontFamily: "Cinzel, serif",
            textAlign: "center",
            fontSize: "clamp(11px, 3vw, 16px)",
            lineHeight: 1.3,
          }}
        >
          ✦ VIEW PROFILE ✦
        </Link>
      </div>
    </article>
  );
}
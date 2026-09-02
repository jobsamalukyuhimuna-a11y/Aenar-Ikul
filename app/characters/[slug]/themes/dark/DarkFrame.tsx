import Image from "next/image";

type Props = {
  image: string | null;
  name: string | null;
};

export default function DarkFrame({
  image,
  name,
}: Props) {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "clamp(460px, 58vw, 750px)",
        minHeight: 0,
        borderRadius:
          "clamp(24px, 3vw, 45px)",
        overflow: "hidden",
        background:
          "radial-gradient(circle at center,#4a1680,#08030f 65%)",
        border:
          "2px solid rgba(170,110,255,.55)",
        boxShadow:
          "0 0 100px rgba(130,60,255,.45)",
        boxSizing: "border-box",
        isolation: "isolate",
      }}
    >
      {/* INNER FRAME */}

      <div
        style={{
          position: "absolute",
          inset:
            "clamp(10px, 2vw, 25px)",
          borderRadius:
            "clamp(18px, 2.5vw, 35px)",
          border:
            "1px solid rgba(220,190,255,.25)",
          pointerEvents: "none",
          zIndex: 3,
        }}
      />

      {/* DARK VIGNETTE */}

      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle,transparent 40%,rgba(0,0,0,.5))",
          pointerEvents: "none",
          zIndex: 2,
        }}
      />

      {/* CHARACTER IMAGE */}

      <Image
        src={
          image ||
          "/images/default-character.png"
        }
        alt={
          name ||
          "Character"
        }
        fill
        unoptimized
        sizes="
          (max-width: 600px) 88vw,
          (max-width: 1100px) 80vw,
          700px
        "
        style={{
          objectFit: "contain",
          objectPosition:
            "center center",
          padding:
            "clamp(10px, 3vw, 35px)",
          filter:
            "drop-shadow(0 0 40px rgba(160,90,255,.9))",
          zIndex: 1,
        }}
      />

      {/* TOP SYMBOL */}

      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top:
            "clamp(12px, 2vw, 25px)",
          left: "50%",
          transform:
            "translateX(-50%)",
          color: "#b78cff",
          fontSize:
            "clamp(14px, 2.5vw, 22px)",
          textShadow:
            "0 0 18px rgba(150,90,255,.8)",
          zIndex: 4,
        }}
      >
        ✦
      </div>

      {/* BOTTOM SYMBOL */}

      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom:
            "clamp(12px, 2vw, 25px)",
          left: "50%",
          transform:
            "translateX(-50%)",
          color: "#b78cff",
          fontSize:
            "clamp(14px, 2.5vw, 22px)",
          textShadow:
            "0 0 18px rgba(150,90,255,.8)",
          zIndex: 4,
        }}
      >
        ✦
      </div>

      {/* EDGE GLOW */}

      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          boxShadow:
            "inset 0 0 60px rgba(140,80,255,.12)",
          zIndex: 4,
        }}
      />
    </div>
  );
}
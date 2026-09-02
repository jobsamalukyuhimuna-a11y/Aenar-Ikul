import type { Character } from "../../components/CharacterTypes";

type Props = {
  character: Character;
};

export default function DarkDetails({
  character,
}: Props) {
  return (
    <aside
      style={{
        width: "100%",
        minWidth: 0,
        padding: "clamp(18px, 3vw, 35px)",
        borderRadius: "clamp(20px, 3vw, 30px)",
        background:
          "linear-gradient(180deg,rgba(35,20,60,.85),rgba(5,5,10,.85))",
        border:
          "1px solid rgba(150,90,255,.35)",
        boxShadow:
          "0 0 40px rgba(100,40,200,.2)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        boxSizing: "border-box",
        overflow: "hidden",
      }}
    >
      <h2
        style={{
          margin: "0 0 clamp(22px, 4vw, 30px)",
          fontFamily: "Cinzel,serif",
          color: "#d8caff",
          fontSize:
            "clamp(20px, 3vw, 25px)",
          lineHeight: 1.3,
          letterSpacing:
            "clamp(1px, .5vw, 3px)",
          overflowWrap: "break-word",
        }}
      >
        DETAILS
      </h2>

      <Info
        title="KINGDOM"
        value={character.kingdom}
      />

      <Info
        title="RACE"
        value={character.race}
      />

      <Info
        title="STATUS"
        value={character.status}
      />

      <Info
        title="UNIVERSE"
        value={character.universe}
      />
    </aside>
  );
}

function Info({
  title,
  value,
}: {
  title: string;
  value?: string | null;
}) {
  return (
    <div
      style={{
        width: "100%",
        minWidth: 0,
        marginBottom:
          "clamp(14px, 2vw, 20px)",
        padding:
          "clamp(14px, 2.5vw, 18px)",
        borderRadius:
          "clamp(14px, 2vw, 18px)",
        background:
          "rgba(255,255,255,.04)",
        border:
          "1px solid rgba(150,90,255,.18)",
        boxSizing: "border-box",
      }}
    >
      <h3
        style={{
          margin: "0 0 8px",
          color: "#9674ff",
          fontSize:
            "clamp(9px, 1.5vw, 12px)",
          lineHeight: 1.4,
          letterSpacing:
            "clamp(2px, .5vw, 4px)",
          textTransform: "uppercase",
          overflowWrap: "break-word",
        }}
      >
        {title}
      </h3>

      <p
        style={{
          margin: 0,
          color: "#fff",
          fontSize:
            "clamp(14px, 2vw, 16px)",
          lineHeight: 1.5,
          overflowWrap: "break-word",
          wordBreak: "break-word",
        }}
      >
        {value || "Unknown"}
      </p>
    </div>
  );
}
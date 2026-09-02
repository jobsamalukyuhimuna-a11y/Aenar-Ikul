export const dynamic = "force-dynamic";

import CharacterGrid from "./CharacterGrid";
import CharactersHero from "./CharactersHero";
import LeftQuotes from "./LeftQuotes";
import RightQuotes from "./RightQuotes";
import GoldenDust from "./GoldenDust";

export default function CharactersPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        width: "100%",
        background:
          "radial-gradient(circle at top,#251736 0%,#0b0b0b 45%,#050505 100%)",
        color: "#ffffff",
        padding: "clamp(60px, 8vw, 110px) clamp(12px, 4vw, 40px)",
        position: "relative",
        overflow: "hidden",
        boxSizing: "border-box",
      }}
    >
      <GoldenDust />

      <div
        style={{
          width: "100%",
          maxWidth: "1400px",
          margin: "0 auto",
          position: "relative",
          zIndex: 2,
          boxSizing: "border-box",
        }}
      >
        <CharactersHero />

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(min(100%, 320px), 1fr))",
            gap: "clamp(28px, 5vw, 60px)",
            alignItems: "start",
            marginBottom: "clamp(50px, 7vw, 80px)",
            width: "100%",
            boxSizing: "border-box",
          }}
        >
          <LeftQuotes />
          <RightQuotes />
        </div>

        <CharacterGrid />
      </div>
    </main>
  );
}
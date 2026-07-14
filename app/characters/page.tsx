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
        background:
          "radial-gradient(circle at top,#251736 0%,#0b0b0b 45%,#050505 100%)",
        color: "#ffffff",
        padding: "80px 20px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <GoldenDust />

      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          position: "relative",
          zIndex: 2,
        }}
      >
        <CharactersHero />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
            gap: "60px",
            alignItems: "start",
            marginBottom: "80px",
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
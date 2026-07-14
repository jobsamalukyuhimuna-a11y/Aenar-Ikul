import { characters } from "../library/data/characters";
import CharacterCard from "./CharacterCard";
import FadeIn from "./FadeIn";

export default function CharacterGrid() {
  return (
    <section
      style={{
        maxWidth: "1500px",
        margin: "0 auto",
        padding: "10px 0 40px",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(360px,1fr))",
          gap: "45px",
        }}
      >
        {characters.map((character) => (
          <FadeIn key={character.id}>
            <CharacterCard character={character} />
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
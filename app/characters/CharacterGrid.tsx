import { prisma } from "@/lib/prisma";
import CharacterCard from "./CharacterCard";
import FadeIn from "./FadeIn";

export default async function CharacterGrid() {
  const characters = await prisma.character.findMany({
    orderBy: {
      id: "desc",
    },
  });

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
          gridTemplateColumns:
            "repeat(auto-fit,minmax(360px,1fr))",
          gap: "45px",
        }}
      >
        {characters.map((character) => (
          <FadeIn key={character.id}>
            <CharacterCard
              character={{
                id: character.id,
                slug: character.slug ?? "",
                name: character.name ?? "",
                title: character.title ?? "",
                image: character.image ?? "",
                description: character.description ?? "",
                quote: character.quote ?? "",
                kingdom: character.kingdom ?? "",
                universe: character.universe ?? "Unknown",
                race: character.race ?? "",
                status: character.status ?? "Unknown",
              }}
            />
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";

import ThemeRenderer from "@/app/components/character-themes/ThemeRenderer";
import CharacterProfile from "./components/CharacterProfile";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function CharacterPage({
  params,
}: Props) {
  const { slug } = await params;

  const character = await prisma.character.findUnique({
    where: {
      slug,
    },
    include: {
      images: {
        orderBy: {
          sortOrder: "asc",
        },
      },
      musics: {
        orderBy: {
          createdAt: "asc",
        },
      },
    },
  });

  if (!character) {
    notFound();
  }

  console.log("================================");
  console.log("CHARACTER:", character.name);
  console.log("PROFILE STYLE:", character.profileStyle);
  console.log("================================");

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#050505",
        color: "#fff",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <ThemeRenderer
        profileStyle={character.profileStyle}
      />

      <div
        style={{
          position: "relative",
          zIndex: 2,
        }}
      >
        <CharacterProfile
          character={{
            id: character.id,
            slug: character.slug,
            image: character.image,
            name: character.name,
            title: character.title,
            kingdom: character.kingdom,
            race: character.race,
            status: character.status,
            universe: character.universe,
            quote: character.quote,
            description: character.description,
            music: character.music,
            profileStyle: character.profileStyle,

            images: character.images.map((img) => ({
              id: img.id,
              image: img.image,
            })),
          }}
        />
      </div>
    </main>
  );
}
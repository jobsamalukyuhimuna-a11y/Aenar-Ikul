import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";

import CharacterSideEffects from "../../components/CharacterSideEffects";

import CharacterHeader from "./components/CharacterHeader";
import CharacterProfile from "./components/CharacterProfile";
import CharacterBiography from "./components/CharacterBiography";
import CharacterGallery from "./components/CharacterGallery";
import CharacterFooter from "./components/CharacterFooter";


type Props = {
  params: Promise<{
    slug: string;
  }>;
};



export default async function CharacterPage({
  params,
}: Props) {


  const { slug } = await params;



  const character =
    await prisma.character.findUnique({

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



  return (

    <main
      style={{
        minHeight: "100vh",

        background:
          "radial-gradient(circle at top,#251736 0%,#0b0b0b 45%,#050505 100%)",

        color: "#ffffff",

        padding: "70px 20px 120px",

        overflow: "hidden",

        position: "relative",
      }}
    >


      <CharacterSideEffects />



      <div
        style={{
          maxWidth: "1300px",

          margin: "0 auto",

          position: "relative",

          zIndex: 2,
        }}
      >



        <CharacterHeader
          character={character}
        />



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

            music: character.music,
          }}
        />



        <CharacterBiography
          character={character}
        />



        <CharacterGallery
          character={character}
        />



        <CharacterFooter />



      </div>


    </main>

  );
}
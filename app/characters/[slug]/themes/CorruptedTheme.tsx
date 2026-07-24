"use client";

import "./styles/Corrupted.css";

import type { Character } from "../components/CharacterProfile";

import CorruptedSky from "./components/CorruptedSky";
import CorruptedForest from "./components/CorruptedForest";
import CorruptedParticles from "./components/CorruptedParticles";
import CorruptedHero from "./components/CorruptedHero";
import CorruptedMusic from "./components/CorruptedMusic";
import CorruptedBiography from "./components/CorruptedBiography";
import CorruptedGallery from "./components/CorruptedGallery";

type Props = {
  character: Character & {
    images?: {
      id: number;
      image: string;
    }[];
  };
};

export default function CorruptedTheme({
  character,
}: Props) {
  return (
    <main className="corrupted-world">

      <CorruptedSky />

      <CorruptedForest />

      <CorruptedParticles />

      <div className="corrupted-overlay" />

      <section className="corrupted-page">

        <CorruptedHero
          character={character}
        />

        <CorruptedMusic
          music={character.music}
          characterName={character.name}
        />

        <CorruptedBiography
          description={character.description}
        />

        <CorruptedGallery
          images={character.images ?? []}
        />

      </section>

    </main>
  );
}
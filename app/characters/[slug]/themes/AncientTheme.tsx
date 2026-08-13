"use client";

import "./styles/Ancient.css";

import type { Character } from "../components/CharacterProfile";

import AncientSky from "./components/AncientSky";
import AncientCity from "./components/AncientCity";
import AncientParticles from "./components/AncientParticles";
import AncientPortal from "./components/AncientPortal";
import AncientEffects from "./components/AncientEffects";
import AncientHero from "./components/AncientHero";
import AncientMusic from "./components/AncientMusic";
import AncientBiography from "./components/AncientBiography";
import AncientGallery from "./components/AncientGallery";

type Props = {
  character: Character & {
    images?: {
      id: number;
      image: string;
    }[];
  };
};

export default function AncientTheme({ character }: Props) {
  return (
    <main className="ancient-world">

      <AncientSky />

      <AncientCity />

      <AncientPortal />

      <AncientParticles />

      <AncientEffects />

      <div className="ancient-overlay" />

      <section className="ancient-page">

        <AncientHero character={character} />

        <AncientMusic
          music={character.music}
          characterName={character.name}
        />

        <AncientBiography
          description={character.description}
        />

        <AncientGallery
          images={character.images ?? []}
        />

      </section>

    </main>
  );
}
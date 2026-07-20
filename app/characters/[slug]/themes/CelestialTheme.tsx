"use client";

import "./styles/Celestial.css";

import type { Character } from "../components/CharacterProfile";

import CelestialSky from "./components/CelestialSky";
import CelestialTemple from "./components/CelestialTemple";
import CelestialHero from "./components/CelestialHero";
import CelestialBiography from "./components/CelestialBiography";
import CelestialParticles from "./components/CelestialParticles";

type Props = {
  character: Character;
};

export default function CelestialTheme({
  character,
}: Props) {

  return (

    <main className="celestial-world">

      <CelestialSky />

      <CelestialTemple />

      <CelestialParticles />

      <div className="page">

        <CelestialHero
          character={character}
        />

        <CelestialBiography
          description={character.description}
        />

      </div>

    </main>

  );

}
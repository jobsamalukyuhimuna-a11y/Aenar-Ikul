"use client";

import "./styles/Warrior.css";

import type { Character } from "../components/CharacterProfile";

import WarriorSky from "./components/WarriorSky";
import WarriorBattlefield from "./components/WarriorBattlefield";
import WarriorHero from "./components/WarriorHero";
import WarriorBiography from "./components/WarriorBiography";
import WarriorParticles from "./components/WarriorParticles";

type Props = {
  character: Character;
};

export default function WarriorTheme({
  character,
}: Props) {
  return (
    <main className="warrior-world">
      <WarriorSky />

      <WarriorBattlefield />

      <WarriorParticles />

      <div className="warrior-page">
        <WarriorHero character={character} />

        <WarriorBiography
          description={character.description}
        />
      </div>
    </main>
  );
}
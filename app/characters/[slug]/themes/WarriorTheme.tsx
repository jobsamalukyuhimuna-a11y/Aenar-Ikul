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
    <main
      className="warrior-world"
      style={{
        width: "100%",
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
        boxSizing: "border-box",
      }}
    >
      <WarriorSky />

      <WarriorBattlefield />

      <WarriorParticles />

      <div
        className="warrior-page"
        style={{
          width: "100%",
          minWidth: 0,
          boxSizing: "border-box",
        }}
      >
        <WarriorHero character={character} />

        <WarriorBiography
          description={character.description}
        />
      </div>
    </main>
  );
}
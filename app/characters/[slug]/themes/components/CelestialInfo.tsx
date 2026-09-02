"use client";

import type { Character } from "../../components/CharacterProfile";

type Props = {
  character: Character;
};

export default function CelestialInfo({
  character,
}: Props) {
  return (
    <section
      className="celestial-info"
      style={{
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      <InfoCard
        title="Kingdom"
        value={character.kingdom}
      />

      <InfoCard
        title="Race"
        value={character.race}
      />

      <InfoCard
        title="Status"
        value={character.status}
      />

      <InfoCard
        title="Universe"
        value={character.universe}
      />
    </section>
  );
}

function InfoCard({
  title,
  value,
}: {
  title: string;
  value?: string | null;
}) {
  return (
    <article
      className="info-card"
      style={{
        width: "100%",
        minWidth: 0,
        boxSizing: "border-box",
      }}
    >
      <span
        className="info-title"
        style={{
          overflowWrap: "break-word",
        }}
      >
        {title}
      </span>

      <span
        className="info-value"
        style={{
          overflowWrap: "break-word",
          wordBreak: "break-word",
        }}
      >
        {value || "Unknown"}
      </span>
    </article>
  );
}
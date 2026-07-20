"use client";

import type { Character } from "../../components/CharacterProfile";

type Props = {
  character: Character;
};

export default function CelestialInfo({
  character,
}: Props) {

  return (

    <section className="celestial-info">

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

}:{

  title:string;

  value?:string | null;

}){

  return(

    <article className="info-card">

      <span className="info-title">

        {title}

      </span>

      <span className="info-value">

        {value || "Unknown"}

      </span>

    </article>

  );

}
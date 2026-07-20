"use client";

import { useRef,useState } from "react";

import type { Character } from "../../components/CharacterProfile";

type Props={

  character:Character;

};

export default function CelestialMusic({

  character,

}:Props){

  const audioRef=

    useRef<HTMLAudioElement>(null);

  const [playing,setPlaying]=

    useState(false);

  function toggle(){

    if(!audioRef.current)

      return;

    if(!character.music)

      return;

    if(playing){

      audioRef.current.pause();

      setPlaying(false);

    }else{

      audioRef.current.volume=.35;

      audioRef.current.play();

      setPlaying(true);

    }

  }

  return(

    <section className="music-panel">

      <audio

        ref={audioRef}

        src={character.music || undefined}

        loop

      />

      <button

        onClick={toggle}

        className="music-button"

      >

        {playing ? "❚❚" : "▶"}

      </button>

      <span className="music-title">

        Celestial Resonance

      </span>

    </section>

  );

}
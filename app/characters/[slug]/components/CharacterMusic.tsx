"use client";

import { useRef, useState } from "react";

type Music = {
  id: string | number;
  name: string | null;
  file: string;
};

type Props = {
  character: {
    musics: Music[];
  };
};

export default function CharacterMusic({ character }: Props) {
  if (!character.musics || character.musics.length === 0) {
    return null;
  }

  return (
    <section
      style={{
        maxWidth: "950px",
        margin: "70px auto 0",
        padding: "45px",
        borderRadius: "30px",
        background:
          "linear-gradient(145deg,#151515,#050505)",
        border:
          "1px solid rgba(215,181,109,.35)",
        boxShadow:
          "0 30px 80px rgba(0,0,0,.65), 0 0 40px rgba(215,181,109,.08)",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          color: "#d7b56d",
          fontFamily: "Cinzel, serif",
          fontSize: "38px",
          fontWeight: 400,
          letterSpacing: "4px",
          marginBottom: "40px",
        }}
      >
        ♫ CHARACTER THEME ♫
      </h2>

      {character.musics.map((music) => (
        <Player
          key={music.id}
          music={music}
        />
      ))}
    </section>
  );
}


function Player({ music }: { music: Music }) {
  const audio = useRef<HTMLAudioElement>(null);

  const [playing, setPlaying] = useState(false);
  const [time, setTime] = useState(0);
  const [duration, setDuration] = useState(0);


  function playPause() {
    if (!audio.current) return;

    if (playing) {
      audio.current.pause();
    } else {
      audio.current.play();
    }

    setPlaying(!playing);
  }


  function updateTime() {
    if (!audio.current) return;

    setTime(audio.current.currentTime);
  }


  function loaded() {
    if (!audio.current) return;

    setDuration(audio.current.duration);
  }


  function changeProgress(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    if (!audio.current) return;

    audio.current.currentTime =
      Number(e.target.value);
  }


  const progress =
    duration > 0
      ? (time / duration) * 100
      : 0;


  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "30px",
        padding: "35px",
        borderRadius: "24px",
        background:
          "linear-gradient(135deg,rgba(215,181,109,.08),rgba(255,255,255,.03))",
        border:
          "1px solid rgba(215,181,109,.25)",
      }}
    >

      <button
        onClick={playPause}
        style={{
          width: "90px",
          height: "90px",
          flexShrink: 0,
          borderRadius: "50%",
          border:
            "2px solid rgba(255,220,140,.8)",
          cursor: "pointer",
          background:
            "radial-gradient(circle,#d7b56d,#8b6828)",
          color: "#111",
          fontSize: "32px",
          fontWeight: "bold",
          boxShadow:
            "0 0 35px rgba(215,181,109,.35)",
        }}
      >
        {playing ? "Ⅱ" : "▶"}
      </button>


      <div
        style={{
          flex: 1,
        }}
      >

        <h3
          style={{
            color: "#f0d28d",
            fontFamily: "Cinzel, serif",
            fontSize: "26px",
            fontWeight: 400,
            marginBottom: "20px",
          }}
        >
          {music.name || "Character Theme"}
        </h3>


        <input
          type="range"
          min="0"
          max={duration || 0}
          value={time}
          onChange={changeProgress}
          style={{
            width: "100%",
            cursor: "pointer",
            appearance: "none",
            height: "8px",
            borderRadius: "20px",
            outline: "none",
            background:
              `linear-gradient(90deg,#d7b56d ${progress}%,rgba(255,255,255,.15) ${progress}%)`,
          }}
        />


        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "12px",
            color: "#a98a4b",
            fontSize: "14px",
          }}
        >
          <span>
            {Math.floor(time)}s
          </span>

          <span>
            {Math.floor(duration)}s
          </span>
        </div>


        <audio
          ref={audio}
          src={music.file}
          onTimeUpdate={updateTime}
          onLoadedMetadata={loaded}
          onEnded={() => setPlaying(false)}
        />

      </div>

    </div>
  );
}
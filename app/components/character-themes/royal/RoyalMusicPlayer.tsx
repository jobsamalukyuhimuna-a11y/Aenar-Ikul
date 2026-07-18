"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  music?: string | null;
};

export default function RoyalMusicPlayer({
  music,
}: Props) {

  const audioRef = useRef<HTMLAudioElement | null>(null);

  const [playing, setPlaying] = useState(false);


  useEffect(() => {

    if (!audioRef.current) return;

    audioRef.current.volume = 0.35;

  }, []);



  function toggleMusic() {

    if (!audioRef.current || !music) return;


    if (playing) {

      audioRef.current.pause();

      setPlaying(false);

    } else {

      audioRef.current.play();

      setPlaying(true);

    }

  }



  if (!music) {

    return null;

  }



  return (

    <>

      <audio
        ref={audioRef}
        src={music}
        loop
      />


      <div
        onClick={toggleMusic}
        style={{
          cursor:"pointer",

          width:60,

          height:60,

          borderRadius:"50%",

          display:"flex",

          alignItems:"center",

          justifyContent:"center",

          fontSize:28,

          color:"#2b1800",

          background:
          "radial-gradient(circle,#ffe9a0,#b8862c)",

          boxShadow:
          playing
          ?
          "0 0 45px rgba(255,220,120,.8)"
          :
          "0 0 20px rgba(255,220,120,.4)",

          transition:"all .3s",
        }}
      >

        {playing ? "Ⅱ" : "♪"}

      </div>


    </>

  );

}
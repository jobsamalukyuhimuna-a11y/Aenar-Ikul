"use client";


import { useEffect, useRef, useState } from "react";


type Props = {
  music?: string | null;
};




export default function DarkMusic({
  music,
}:Props){


  const audioRef =
    useRef<HTMLAudioElement | null>(null);


  const [playing,setPlaying] =
    useState(false);




  useEffect(()=>{


    const audio =
      audioRef.current;


    if(!audio)
      return;



    audio.volume = 0.35;



    const start = ()=>{

      audio.play()
      .then(()=>{

        setPlaying(true);

      })
      .catch(()=>{});

    };



    start();



    const unlock = ()=>{

      start();

    };


    window.addEventListener(
      "click",
      unlock,
      {once:true}
    );



    return()=>{

      window.removeEventListener(
        "click",
        unlock
      );

    };


  },[]);






  function toggleMusic(){


    const audio =
      audioRef.current;


    if(!audio)
      return;



    if(audio.paused){

      audio.play();

      setPlaying(true);

    }else{

      audio.pause();

      setPlaying(false);

    }

  }






  if(!music)
    return null;






  return (

    <div
      style={{
        display:"flex",
        justifyContent:"center",
        marginTop:"60px",
      }}
    >


      <button
        onClick={toggleMusic}
        style={{
          width:"150px",
          height:"150px",
          borderRadius:"50%",
          border:
          "2px solid rgba(170,110,255,.6)",
          background:
          "radial-gradient(circle,#4a1680,#08030f)",
          boxShadow:
          "0 0 60px rgba(130,60,255,.7)",
          cursor:"pointer",
          color:"#e4d8ff",
          fontSize:"45px",
        }}
      >

        {playing ? "❚❚" : "▶"}

      </button>





      <audio
        ref={audioRef}
        src={music}
        loop
        preload="auto"
      />



    </div>

  );

}
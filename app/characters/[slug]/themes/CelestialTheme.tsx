"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import type { Character } from "../components/CharacterProfile";


type Props = {
  character: Character;
};



export default function CelestialTheme({
  character,
}: Props) {


  const audioRef = useRef<HTMLAudioElement | null>(null);

  const [playing,setPlaying] = useState(false);



  function toggleMusic(){

    if(!audioRef.current || !character.music)
      return;


    if(playing){

      audioRef.current.pause();

      setPlaying(false);

    }else{

      audioRef.current.volume = .35;

      audioRef.current.play();

      setPlaying(true);

    }

  }



  return (

    <main

      style={{

        minHeight:"100vh",

        position:"relative",

        overflow:"hidden",

        padding:"70px 30px",


        background:
        `
        radial-gradient(circle at 50% 20%,
        rgba(130,80,255,.25),
        transparent 35%),

        radial-gradient(circle at bottom,
        #17002c,
        #050508 70%)
        `,


        color:"#e8e8ff",

      }}

    >



      <audio

        ref={audioRef}

        src={character.music || undefined}

        loop

      />





      <style>

        {`

        @keyframes celestialDust {

          0%{
            transform:translateY(0);
            opacity:.2;
          }

          50%{
            transform:translateY(-60px);
            opacity:1;
          }

          100%{
            transform:translateY(0);
            opacity:.2;
          }

        }



        @keyframes nebulaPulse {

          0%,100%{
            transform:scale(1);
            opacity:.25;
          }


          50%{
            transform:scale(1.25);
            opacity:.55;
          }

        }



        @keyframes orbit {

          from{
            transform:rotate(0deg);
          }

          to{
            transform:rotate(360deg);
          }

        }



        @keyframes celestialGlow {

          0%,100%{
            box-shadow:
            0 0 30px rgba(150,100,255,.3);
          }


          50%{
            box-shadow:
            0 0 90px rgba(180,150,255,.7);
          }

        }

        `}

      </style>





      {/* COSMIC BACKGROUND */}



      <div

        style={{

          position:"absolute",

          inset:0,

          overflow:"hidden",

          pointerEvents:"none",

        }}

      >


        <div

          style={{

            position:"absolute",

            width:500,

            height:500,

            top:-120,

            left:"50%",

            transform:"translateX(-50%)",

            borderRadius:"50%",


            background:
            "radial-gradient(circle,rgba(140,90,255,.25),transparent 70%)",


            filter:"blur(50px)",


            animation:
            "nebulaPulse 12s infinite",

          }}

        />




        {Array.from({length:45}).map((_,i)=>(


          <span

            key={i}

            style={{


              position:"absolute",

              width:2+(i%4),

              height:2+(i%4),


              borderRadius:"50%",


              background:"#d9d4ff",


              boxShadow:
              "0 0 12px #bba8ff",


              top:`${(i*31)%100}%`,


              left:`${(i*53)%100}%`,


              animation:
              `celestialDust ${5+(i%6)}s infinite ease-in-out`,


              animationDelay:
              `${i*.3}s`,


            }}

          />


        ))}


      </div>
            <section

        style={{

          position:"relative",

          zIndex:2,

          maxWidth:1400,

          margin:"0 auto",


          borderRadius:40,


          overflow:"hidden",


          background:
          "rgba(5,5,12,.78)",


          border:
          "1px solid rgba(180,160,255,.25)",


          boxShadow:
          "0 40px 120px rgba(0,0,0,.8),0 0 80px rgba(120,80,255,.12)",

        }}

      >





        {/* CELESTIAL TOP LIGHT */}



        <div

          style={{

            height:4,


            background:
            "linear-gradient(90deg,transparent,#b9a4ff,#ffffff,#b9a4ff,transparent)",

          }}

        />







        {/* CHARACTER AREA */}



        <div

          style={{

            display:"grid",


            gridTemplateColumns:
            "420px 1fr",


            gap:60,


            padding:60,

          }}

        >





          {/* IMAGE PORTAL */}



          <div

            style={{

              position:"relative",


              aspectRatio:"3/4",


              borderRadius:35,


              overflow:"hidden",


              border:
              "1px solid rgba(210,200,255,.5)",


              boxShadow:
              "0 0 60px rgba(120,80,255,.35), inset 0 0 40px rgba(255,255,255,.08)",

            }}

          >



            <div

              style={{

                position:"absolute",


                inset:0,


                background:
                "radial-gradient(circle,transparent 40%,rgba(120,80,255,.25))",


                zIndex:1,


                pointerEvents:"none",

              }}

            />




            {character.image && (

              <Image

                src={character.image}

                alt={character.name || "character"}

                fill


                style={{

                  objectFit:"cover",

                }}

              />

            )}



          </div>







          {/* CHARACTER INFORMATION */}



          <div>



            <div

              style={{

                color:"#bca7ff",

                letterSpacing:8,

                fontSize:13,

                textTransform:"uppercase",

                marginBottom:20,

              }}

            >

              Celestial Entity

            </div>





            <h1

              style={{

                margin:0,


                fontFamily:
                "Cinzel, serif",


                fontSize:64,


                lineHeight:1.1,


                color:"#f4f2ff",


                textShadow:
                "0 0 30px rgba(180,160,255,.35)",

              }}

            >

              {character.name || "Unknown"}

            </h1>







            <div

              style={{

                marginTop:20,


                fontFamily:
                "Cinzel, serif",


                fontSize:26,


                color:"#c9b7ff",

              }}

            >

              {character.title || "Celestial Guardian"}

            </div>







            <div

              style={{

                width:240,


                height:1,


                marginTop:35,


                marginBottom:35,


                background:
                "linear-gradient(90deg,transparent,#c7b5ff,transparent)",

              }}

            />







            {character.quote && (


              <blockquote

                style={{

                  margin:0,


                  fontSize:22,


                  lineHeight:1.9,


                  fontStyle:"italic",


                  color:"#dedcff",

                }}

              >

                ❝ {character.quote} ❞

              </blockquote>


            )}







            <div

              style={{

                display:"grid",


                gridTemplateColumns:
                "repeat(2,minmax(180px,1fr))",


                gap:18,


                marginTop:45,

              }}

            >



              <CelestialInfo

                label="Kingdom"

                value={character.kingdom}

              />



              <CelestialInfo

                label="Race"

                value={character.race}

              />



              <CelestialInfo

                label="Status"

                value={character.status}

              />



              <CelestialInfo

                label="Universe"

                value={character.universe}

              />



            </div>



          </div>


        </div>






        {/* CELESTIAL MUSIC RESONANCE */}



        <div

          style={{

            padding:"0 60px 50px",

            display:"flex",

            justifyContent:"center",

          }}

        >


          <div

            style={{

              textAlign:"center",

              position:"relative",

              width:300,

            }}

          >



            <div

              onClick={toggleMusic}

              style={{

                margin:"0 auto",

                width:110,

                height:110,


                borderRadius:"50%",


                display:"flex",

                alignItems:"center",

                justifyContent:"center",


                cursor:
                character.music
                ?
                "pointer"
                :
                "default",


                fontSize:42,


                color:"#eeeaff",


                background:
                "radial-gradient(circle,#bda8ff,#3b216e)",


                border:
                "1px solid rgba(255,255,255,.4)",


                animation:
                playing
                ?
                "celestialGlow 3s infinite"
                :
                "none",


              }}

            >

              {playing ? "Ⅱ" : "✦"}

            </div>



            <div

              style={{

                position:"absolute",

                top:10,

                left:"50%",

                width:150,

                height:150,


                marginLeft:-75,


                borderRadius:"50%",


                border:
                "1px solid rgba(180,160,255,.35)",


                animation:
                "orbit 18s linear infinite",

              }}

            />




            <div

              style={{

                marginTop:25,

                color:"#d7ccff",

                fontFamily:
                "Cinzel,serif",

                letterSpacing:4,

                fontSize:15,

              }}

            >

              CELESTIAL RESONANCE

            </div>


          </div>


        </div>
                {/* BIOGRAPHY */}


        <div

          style={{

            maxWidth:900,


            margin:"20px auto 90px",


            padding:"35px 50px",


            textAlign:"center",


            fontFamily:
            "Georgia, serif",


            fontSize:22,


            lineHeight:2.2,


            color:"#e4e2ff",


            borderRadius:30,


            background:
            "rgba(120,90,200,.05)",


            border:
            "1px solid rgba(180,160,255,.15)",


            boxShadow:
            "inset 0 0 40px rgba(120,80,255,.08)",

          }}

        >


          {character.description ||
          "No biography available."}


        </div>





      </section>



    </main>

  );

}







function CelestialInfo({

  label,

  value,

}: {

  label:string;

  value?:string | null;

}) {


  return (


    <div

      style={{

        padding:20,


        borderRadius:20,


        background:
        "linear-gradient(180deg,rgba(255,255,255,.05),rgba(120,80,255,.05))",


        border:
        "1px solid rgba(180,160,255,.22)",


        boxShadow:
        "inset 0 0 25px rgba(120,80,255,.08)",

      }}

    >



      <div

        style={{

          color:"#bca7ff",


          fontSize:12,


          letterSpacing:4,


          textTransform:"uppercase",


          marginBottom:12,

        }}

      >

        ✦ {label}

      </div>




      <div

        style={{

          color:"#f0eeff",


          fontSize:18,

        }}

      >

        {value || "Unknown"}

      </div>



    </div>


  );

}
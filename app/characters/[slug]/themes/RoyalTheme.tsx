"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import type { Character } from "../components/CharacterProfile";

type Props = {
  character: Character;
};


export default function RoyalTheme({
  character,
}: Props) {


  const audioRef = useRef<HTMLAudioElement | null>(null);

  const [playing, setPlaying] = useState(false);



  function toggleMusic() {

    if (!audioRef.current || !character.music) return;


    if (playing) {

      audioRef.current.pause();

      setPlaying(false);

    } else {

      audioRef.current.volume = 0.35;

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
        "radial-gradient(circle at top,#80601f 0%,#2a1b08 40%,#050505 100%)",

        color:"#f5e6bd",
      }}
    >


      <audio
        ref={audioRef}
        src={character.music || undefined}
        loop
      />



      <style>
        {`

        @keyframes royalDust {

          0%{
            transform:translateY(0);
            opacity:.2;
          }

          50%{
            transform:translateY(-40px);
            opacity:1;
          }

          100%{
            transform:translateY(0);
            opacity:.2;
          }

        }



        @keyframes royalBorder {

          0%,100%{

            box-shadow:
            0 0 30px rgba(215,181,109,.15);

          }


          50%{

            box-shadow:
            0 0 80px rgba(215,181,109,.35);

          }

        }

        `}
      </style>



      <div
        style={{
          position:"absolute",

          inset:0,

          pointerEvents:"none",

          overflow:"hidden",
        }}
      >


        {Array.from({length:35}).map((_,i)=>(

          <span
            key={i}

            style={{

              position:"absolute",

              width:3 + (i % 3),

              height:3 + (i % 3),

              borderRadius:"50%",

              background:"#f3d27a",

              boxShadow:
              "0 0 15px #f3d27a",

              top:`${(i * 29)%100}%`,

              left:`${(i * 47)%100}%`,

              animation:
              `royalDust ${4+(i%5)}s infinite ease-in-out`,

              animationDelay:
              `${i*.2}s`,

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

          borderRadius:35,

          overflow:"hidden",

          background:
          "rgba(12,9,5,.94)",

          border:
          "1px solid rgba(215,181,109,.5)",

          animation:
          "royalBorder 8s infinite",

        }}

      >


        <div

          style={{

            height:7,

            background:
            "linear-gradient(90deg,#765316,#f5d77a,#fff3b0,#f5d77a,#765316)",

          }}

        />



        <div

          style={{

            display:"grid",

            gridTemplateColumns:
            "420px 1fr",

            gap:60,

            padding:60,

          }}

        >



          <div

            style={{

              position:"relative",

              aspectRatio:"3/4",

              borderRadius:30,

              overflow:"hidden",

              border:
              "2px solid rgba(215,181,109,.6)",

              boxShadow:
              "0 30px 70px rgba(0,0,0,.8)",

            }}

          >

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
                    <div>


            <div
              style={{
                color:"#d7b56d",

                fontSize:14,

                letterSpacing:7,

                textTransform:"uppercase",

                marginBottom:18,
              }}
            >
              Royal Character
            </div>




            <h1
              style={{

                margin:0,

                fontFamily:
                "Cinzel, serif",

                fontSize:64,

                lineHeight:1.1,

                color:"#fff4d2",

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

                color:"#d7b56d",

              }}
            >

              {character.title || "Royal Guardian"}

            </div>





            <div
              style={{

                width:220,

                height:2,

                marginTop:30,

                marginBottom:35,

                background:
                "linear-gradient(90deg,transparent,#d7b56d,transparent)",

              }}
            />





            {character.quote && (

              <blockquote
                style={{

                  margin:0,

                  fontSize:22,

                  lineHeight:1.8,

                  fontStyle:"italic",

                  color:"#f5e7c3",

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


              <Info
                label="Kingdom"
                value={character.kingdom}
              />


              <Info
                label="Race"
                value={character.race}
              />


              <Info
                label="Status"
                value={character.status}
              />


              <Info
                label="Universe"
                value={character.universe}
              />


            </div>


          </div>


        </div>





        {/* MUSIC SECTION */}


        <div

          style={{

            padding:"0 60px 50px",

          }}

        >



          <div

            style={{

              height:2,

              background:
              "linear-gradient(90deg,transparent,#d7b56d,transparent)",

              marginBottom:40,

            }}

          />





          <div

            style={{

              display:"flex",

              alignItems:"center",

              gap:25,

              padding:"22px 35px",

              borderRadius:50,

              background:
              "linear-gradient(90deg,#251805,#70501a,#251805)",


              border:
              "1px solid rgba(215,181,109,.55)",


              boxShadow:
              "0 0 40px rgba(215,181,109,.18)",

            }}

          >




            <div

              onClick={toggleMusic}

              style={{

                width:60,

                height:60,

                borderRadius:"50%",

                display:"flex",

                alignItems:"center",

                justifyContent:"center",

                fontSize:28,

                cursor:
                character.music
                ?
                "pointer"
                :
                "default",

                color:"#2b1800",

                background:
                "radial-gradient(circle,#ffe9a0,#b8862c)",


                boxShadow:

                playing

                ?

                "0 0 45px rgba(255,220,120,.9)"

                :

                "0 0 25px rgba(255,220,120,.5)",


                transition:"all .3s",

              }}

            >

              {playing ? "Ⅱ" : "♪"}


            </div>





            <div
              style={{

                flex:1,

              }}
            >


              <div

                style={{

                  fontFamily:
                  "Cinzel,serif",

                  color:"#ffe5a0",

                  letterSpacing:3,

                  marginBottom:10,

                }}

              >

                Royal Theme Music

              </div>




              <div

                style={{

                  height:6,

                  borderRadius:10,

                  background:
                  "linear-gradient(90deg,#d7b56d 35%,rgba(255,255,255,.15) 35%)",

                }}

              />


            </div>





            <div

              style={{

                color:"#ffe9a5",

                fontSize:22,

              }}

            >

              ♛

            </div>



          </div>


        </div>
                {/* BIOGRAPHY */}


        <div

          style={{

            maxWidth:900,

            margin:"20px auto 80px",

            padding:"0 40px",

            textAlign:"center",

            fontFamily:
            "Georgia, serif",

            fontSize:22,

            lineHeight:2.2,

            color:"#f2e5c2",

          }}

        >

          {character.description ||
          "No biography available."}


        </div>



      </section>


    </main>

  );

}





function Info({

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

        borderRadius:18,

        background:

        "linear-gradient(180deg,rgba(255,255,255,.05),rgba(255,215,120,.03))",


        border:

        "1px solid rgba(215,181,109,.25)",

      }}

    >


      <div

        style={{

          color:"#d7b56d",

          fontSize:12,

          letterSpacing:3,

          textTransform:"uppercase",

          marginBottom:10,

        }}

      >

        {label}

      </div>




      <div

        style={{

          color:"#fff4d8",

          fontSize:18,

        }}

      >

        {value || "Unknown"}

      </div>



    </div>

  );

}
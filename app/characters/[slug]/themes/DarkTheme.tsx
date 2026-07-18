import type { Character } from "../components/CharacterTypes";
import Image from "next/image";
import DarkMusic from "./dark/DarkMusic";


type Props = {
  character: Character;
};


export default function DarkTheme({
  character,
}: Props) {


  return (

    <main
      style={{
        minHeight:"100vh",

        padding:"30px 20px",

        background:
        `
        radial-gradient(
          circle at top,
          rgba(139,92,246,.35),
          transparent 35%
        ),

        linear-gradient(
          180deg,
          #12051f,
          #050505 70%,
          #000
        )
        `,

        color:"#fff",

        overflow:"hidden",
      }}
    >



      <div
        style={{
          maxWidth:"1600px",

          margin:"0 auto",

          position:"relative",
        }}
      >



        {/* ========================= */}
        {/*       MUSIC BAR           */}
        {/* ========================= */}


        <section
          style={{
            position:"relative",

            marginBottom:"45px",

            padding:"25px 40px",

            borderRadius:"30px",

            border:
            "2px solid rgba(139,92,246,.55)",

            background:
            `
            linear-gradient(
              180deg,
              rgba(35,15,65,.95),
              rgba(8,5,15,.98)
            )
            `,

            boxShadow:
            `
            0 0 60px rgba(139,92,246,.35),
            inset 0 0 40px rgba(139,92,246,.15)
            `,
          }}
        >



          <div
            style={{
              position:"absolute",

              top:"10px",

              left:"20px",

              right:"20px",

              height:"2px",

              background:
              "linear-gradient(to right,transparent,#8b5cf6,transparent)",
            }}
          />



          <div
            style={{
              display:"flex",

              justifyContent:"center",

              alignItems:"center",

              gap:"20px",
            }}
          >

            <span
              style={{
                color:"#8b5cf6",

                fontSize:"25px",

                textShadow:
                "0 0 15px rgba(139,92,246,.8)",
              }}
            >
              ✦
            </span>



            <p
              style={{
                color:"#d8c7ff",

                fontFamily:"Cinzel,serif",

                letterSpacing:"8px",

                fontSize:"14px",
              }}
            >
              CHARACTER THEME
            </p>



            <span
              style={{
                color:"#8b5cf6",

                fontSize:"25px",

                textShadow:
                "0 0 15px rgba(139,92,246,.8)",
              }}
            >
              ✦
            </span>


          </div>




          <div
            style={{
              marginTop:"25px",

              padding:"15px",

              borderRadius:"20px",

              background:
              "rgba(139,92,246,.08)",

              border:
              "1px solid rgba(139,92,246,.35)",

              boxShadow:
              "inset 0 0 25px rgba(139,92,246,.15)",
            }}
          >

            <DarkMusic
              music={character.music}
            />

          </div>




          <div
            style={{
              position:"absolute",

              bottom:"10px",

              left:"20px",

              right:"20px",

              height:"2px",

              background:
              "linear-gradient(to right,transparent,#8b5cf6,transparent)",
            }}
          />



        </section>
                {/* ========================= */}
        {/*      MAIN PURPLE FRAME     */}
        {/* ========================= */}


        <div
          style={{
            position:"relative",

            padding:"55px",

            borderRadius:"40px",

            background:
            `
            linear-gradient(
              180deg,
              rgba(8,5,18,.98),
              rgba(3,3,8,.98)
            )
            `,

            border:
            "2px solid rgba(139,92,246,.55)",

            boxShadow:
            `
            0 0 90px rgba(139,92,246,.28),
            inset 0 0 50px rgba(139,92,246,.12)
            `,
          }}
        >



          {/* Purple Corners */}


          <div
            style={{
              position:"absolute",

              top:"18px",

              left:"18px",

              fontSize:"45px",

              color:"#8b5cf6",

              textShadow:
              "0 0 20px rgba(139,92,246,.8)",
            }}
          >
            ❖
          </div>



          <div
            style={{
              position:"absolute",

              top:"18px",

              right:"18px",

              fontSize:"45px",

              color:"#8b5cf6",

              textShadow:
              "0 0 20px rgba(139,92,246,.8)",
            }}
          >
            ❖
          </div>



          <div
            style={{
              position:"absolute",

              bottom:"18px",

              left:"18px",

              fontSize:"45px",

              color:"#8b5cf6",

              textShadow:
              "0 0 20px rgba(139,92,246,.8)",
            }}
          >
            ❖
          </div>



          <div
            style={{
              position:"absolute",

              bottom:"18px",

              right:"18px",

              fontSize:"45px",

              color:"#8b5cf6",

              textShadow:
              "0 0 20px rgba(139,92,246,.8)",
            }}
          >
            ❖
          </div>




          <header
            style={{
              textAlign:"center",

              marginBottom:"50px",
            }}
          >



            <p
              style={{
                color:"#a78bfa",

                letterSpacing:"9px",

                fontFamily:"Cinzel,serif",

                fontSize:"14px",
              }}
            >
              DARK REALM
            </p>



            <h1
              style={{
                marginTop:"25px",

                fontFamily:"Cinzel,serif",

                fontSize:"60px",

                letterSpacing:"5px",

                color:"#c7a8ff",

                textShadow:
                "0 0 35px rgba(139,92,246,.8)",
              }}
            >
              {character.name || "UNKNOWN"}
            </h1>



            <p
              style={{
                marginTop:"20px",

                color:"#c4b5fd",

                fontSize:"18px",

                letterSpacing:"5px",

                fontFamily:"Cinzel,serif",
              }}
            >
              {character.title || "CHARACTER"}
            </p>



          </header>





          <section
            style={{
              display:"grid",

              gridTemplateColumns:
              "280px 1fr 280px",

              gap:"35px",

              alignItems:"center",
            }}
          >



            {/* LEFT DETAILS */}


            <aside
              style={{
                padding:"30px",

                minHeight:"520px",

                borderRadius:"30px",

                background:
                "rgba(10,5,20,.85)",

                border:
                "2px solid rgba(139,92,246,.45)",

                boxShadow:
                "0 0 40px rgba(139,92,246,.18)",
              }}
            >



              <h2
                style={{
                  textAlign:"center",

                  color:"#a78bfa",

                  fontFamily:"Cinzel,serif",

                  letterSpacing:"4px",

                  marginBottom:"35px",
                }}
              >
                ✦ DETAILS ✦
              </h2>



              <Info
                title="TITLE"
                value={character.title}
              />


              <Info
                title="RACE"
                value={character.race}
              />


              <Info
                title="STATUS"
                value={character.status}
              />


              <Info
                title="KINGDOM"
                value={character.kingdom}
              />


              <Info
                title="UNIVERSE"
                value={character.universe}
              />



            </aside>
                        {/* CENTER IMAGE */}


            <div
              style={{
                position:"relative",

                height:"760px",

                borderRadius:"35px",

                overflow:"hidden",

                background:
                `
                radial-gradient(
                  circle at center,
                  rgba(139,92,246,.35),
                  #040404 80%
                )
                `,

                border:
                "2px solid rgba(139,92,246,.55)",

                boxShadow:
                `
                0 0 70px rgba(139,92,246,.35),
                inset 0 0 40px rgba(139,92,246,.15)
                `,
              }}
            >



              <div
                style={{
                  position:"absolute",

                  inset:"16px",

                  borderRadius:"28px",

                  border:
                  "1px solid rgba(139,92,246,.35)",

                  zIndex:1,
                }}
              />



              {/* Image Glow Decoration */}

              <div
                style={{
                  position:"absolute",

                  top:"50%",

                  left:"50%",

                  width:"420px",

                  height:"420px",

                  transform:
                  "translate(-50%,-50%)",

                  borderRadius:"50%",

                  background:
                  "radial-gradient(circle,rgba(139,92,246,.25),transparent 70%)",

                  filter:"blur(20px)",

                  zIndex:1,
                }}
              />



              <Image
                src={
                  character.image ??
                  "/images/default-character.png"
                }

                alt={
                  character.name ??
                  "Character"
                }

                fill

                priority

                sizes="700px"

                style={{
                  objectFit:"contain",

                  objectPosition:"center",

                  padding:"15px",

                  transform:
                  "translateX(20px)",

                  filter:
                  `
                  drop-shadow(
                    0 0 55px rgba(139,92,246,.85)
                  )
                  `,

                  zIndex:2,
                }}
              />



              {/* Image Frame Symbols */}

              <div
                style={{
                  position:"absolute",

                  top:"20px",

                  left:"50%",

                  transform:"translateX(-50%)",

                  color:"#8b5cf6",

                  fontSize:"25px",

                  zIndex:3,
                }}
              >
                ✦
              </div>


              <div
                style={{
                  position:"absolute",

                  bottom:"20px",

                  left:"50%",

                  transform:"translateX(-50%)",

                  color:"#8b5cf6",

                  fontSize:"25px",

                  zIndex:3,
                }}
              >
                ✦
              </div>


            </div>





            {/* RIGHT PANEL */}



            <aside
              style={{
                padding:"30px",

                minHeight:"520px",

                borderRadius:"30px",

                background:
                "rgba(10,5,20,.85)",

                border:
                "2px solid rgba(139,92,246,.45)",

                textAlign:"center",

                boxShadow:
                "0 0 40px rgba(139,92,246,.18)",
              }}
            >



              <div
                style={{
                  fontSize:"70px",

                  color:"#8b5cf6",

                  textShadow:
                  "0 0 30px rgba(139,92,246,.8)",
                }}
              >
                ✦
              </div>



              <h2
                style={{
                  marginTop:"20px",

                  fontFamily:"Cinzel,serif",

                  color:"#c7a8ff",

                  letterSpacing:"3px",
                }}
              >
                {character.title}
              </h2>



              <div
                style={{
                  width:"160px",

                  height:"2px",

                  margin:"25px auto",

                  background:
                  "linear-gradient(to right,transparent,#8b5cf6,transparent)",
                }}
              />



              <p
                style={{
                  marginTop:"35px",

                  color:"#ddd",

                  lineHeight:2,

                  fontStyle:"italic",
                }}
              >
                ❝ {character.quote || "The darkness remembers."} ❞
              </p>



            </aside>



          </section>
                    {/* ========================= */}
          {/*        BIOGRAPHY          */}
          {/* ========================= */}

          <section
            style={{
              marginTop:"60px",

              padding:"60px",

              borderRadius:"35px",

              background:"rgba(12,8,20,.85)",

              border:"2px solid rgba(139,92,246,.45)",

              boxShadow:
                "0 0 50px rgba(139,92,246,.18)",
            }}
          >

            <h2
              style={{
                textAlign:"center",

                fontFamily:"Cinzel,serif",

                color:"#a78bfa",

                fontSize:"34px",

                letterSpacing:"5px",
              }}
            >
              ✦ BIOGRAPHY ✦
            </h2>

            <div
              style={{
                width:"240px",

                height:"2px",

                margin:"25px auto 40px",

                background:
                  "linear-gradient(to right,transparent,#8b5cf6,transparent)",
              }}
            />

            <p
              style={{
                textAlign:"center",

                color:"#ddd",

                fontFamily:"Georgia,serif",

                fontSize:"20px",

                lineHeight:2.35,

                whiteSpace:"pre-line",
              }}
            >
              {character.description || "No biography available."}
            </p>

          </section>

        </div>

      </div>

    </main>

  );

}



function Info({
  title,
  value,
}:{
  title:string;
  value?:string|null;
}){

  return(

    <div
      style={{
        marginBottom:"24px",
      }}
    >

      <h3
        style={{
          color:"#a78bfa",

          fontFamily:"Cinzel,serif",

          fontSize:"12px",

          letterSpacing:"4px",
        }}
      >
        {title}
      </h3>

      <p
        style={{
          marginTop:"8px",

          color:"#fff",

          fontSize:"17px",
        }}
      >
        {value || "Unknown"}
      </p>

    </div>

  );

}
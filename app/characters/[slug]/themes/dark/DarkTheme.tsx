import type { Character } from "../../components/CharacterTypes";
import Image from "next/image";
import DarkMusic from "./DarkMusic";


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
          circle at 50% 0%,
          rgba(90,60,130,.25),
          transparent 35%
        ),
        radial-gradient(
          circle at bottom,
          rgba(40,40,60,.25),
          transparent 45%
        ),
        #020202
        `,

        color:"#fff",

        position:"relative",

        overflow:"hidden",
      }}
    >


      <div
        style={{
          maxWidth:"1500px",
          margin:"auto",

          position:"relative",

          zIndex:2,

          padding:"35px",

          borderRadius:"35px",

          background:
          "rgba(5,5,8,.78)",

          border:
          "1px solid rgba(255,255,255,.06)",

          boxShadow:
          "0 40px 120px rgba(0,0,0,.9)",
        }}
      >



        <DarkMusic
          music={character.music}
        />



        <header
          style={{
            textAlign:"center",
            marginBottom:"55px",
          }}
        >


          <p
            style={{
              color:"#666",
              letterSpacing:"10px",
              fontSize:"11px",
            }}
          >
            DARK CHARACTER
          </p>


          <h1
            style={{
              marginTop:"20px",

              fontFamily:
              "Cinzel,serif",

              fontSize:"62px",

              letterSpacing:"7px",

              color:"#fff",

              textShadow:
              "0 0 35px rgba(255,255,255,.15)",
            }}
          >
            {character.name || "UNKNOWN"}
          </h1>


          <p
            style={{
              marginTop:"15px",

              color:"#999",

              letterSpacing:"5px",

              fontSize:"18px",
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
                    <aside
            style={{
              padding:"30px",

              borderRadius:"25px",

              background:
              "rgba(255,255,255,.025)",

              border:
              "1px solid rgba(255,255,255,.07)",

              backdropFilter:
              "blur(10px)",
            }}
          >


            <h2
              style={{
                fontFamily:
                "Cinzel,serif",

                color:"#ddd",

                marginBottom:"30px",

                letterSpacing:"2px",
              }}
            >
              DETAILS
            </h2>


            <Info
              title="RACE"
              value={character.race}
            />

            <Info
              title="KINGDOM"
              value={character.kingdom}
            />

            <Info
              title="STATUS"
              value={character.status}
            />

            <Info
              title="UNIVERSE"
              value={character.universe}
            />


          </aside>





          <div
            style={{
              height:"760px",

              position:"relative",

              borderRadius:"45px",

              overflow:"hidden",

              background:
              `
              radial-gradient(
                circle at center,
                rgba(90,70,130,.35),
                rgba(0,0,0,.95) 70%
              )
              `,

              border:
              "1px solid rgba(255,255,255,.12)",

              boxShadow:
              `
              0 0 100px rgba(100,70,150,.35),
              inset 0 0 60px rgba(0,0,0,.8)
              `,
            }}
          >



            <div
              style={{
                position:"absolute",

                inset:"20px",

                borderRadius:"35px",

                border:
                "1px solid rgba(255,255,255,.08)",

                pointerEvents:"none",
              }}
            />



            <Image
              src={
                character.image ||
                "/images/default-character.png"
              }

              alt={
                character.name ||
                "Character"
              }

              fill

              style={{
                objectFit:"contain",

                padding:"25px",

                filter:
                "drop-shadow(0 0 45px rgba(120,100,180,.5))",
              }}
            />


          </div>





          <aside
            style={{
              padding:"30px",

              borderRadius:"25px",

              background:
              "rgba(255,255,255,.025)",

              border:
              "1px solid rgba(255,255,255,.07)",

              textAlign:"center",

              backdropFilter:
              "blur(10px)",
            }}
          >


            <h2
              style={{
                fontFamily:
                "Cinzel,serif",

                color:"#ddd",

                letterSpacing:"2px",
              }}
            >
              QUOTE
            </h2>



            <p
              style={{
                marginTop:"35px",

                color:"#aaa",

                fontSize:"19px",

                lineHeight:2,

                fontStyle:"italic",
              }}
            >
              ❝ {character.quote ||
              "The darkness remembers."} ❞
            </p>


          </aside>


        </section>
                <section
          style={{

            marginTop:"65px",

            padding:"45px",

            borderRadius:"30px",

            background:
            "rgba(255,255,255,.018)",

            border:
            "1px solid rgba(255,255,255,.07)",

            backdropFilter:
            "blur(12px)",
          }}
        >


          <h2
            style={{
              textAlign:"center",

              fontFamily:
              "Cinzel,serif",

              fontSize:"36px",

              color:"#ddd",

              letterSpacing:"3px",
            }}
          >
            BIOGRAPHY
          </h2>



          <p
            style={{

              marginTop:"30px",

              textAlign:"center",

              fontFamily:
              "Georgia,serif",

              fontSize:"21px",

              lineHeight:"2.3",

              color:"#bbb",

            }}
          >

            {character.description ||
            "No biography available."}

          </p>


        </section>



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


  return (

    <div
      style={{
        marginBottom:"22px",
      }}
    >


      <h3
        style={{
          color:"#666",

          fontSize:"11px",

          letterSpacing:"4px",

          textTransform:"uppercase",
        }}
      >
        {title}
      </h3>



      <p
        style={{
          marginTop:"8px",

          color:"#eee",

          fontSize:"17px",
        }}
      >
        {value || "Unknown"}
      </p>


    </div>

  );


}
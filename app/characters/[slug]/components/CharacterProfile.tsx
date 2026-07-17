import Image from "next/image";
import CharacterMusicPlayer from "./CharacterMusicPlayer";

type Character = {
  id?: number;
  slug?: string | null;

  image: string | null;
  name: string | null;
  title: string | null;

  kingdom: string | null;
  race: string | null;
  status: string | null;
  universe: string | null;

  quote: string | null;
  music: string | null;
};

type Props = {
  character: Character;
};


export default function CharacterProfile({
  character,
}: Props) {


  const profile =
    getProfileType(character.slug);


  return (
    <>

      {character.music && (

        <section
          style={{
            maxWidth:"980px",
            margin:"0 auto 70px",
            padding:"35px",
            borderRadius:"30px",
            background:
              "linear-gradient(145deg,#171717,#070707)",
            border:
              "1px solid rgba(215,181,109,.35)",
            boxShadow:
              "0 30px 80px rgba(0,0,0,.6)",
          }}
        >

          <CharacterMusicPlayer
            src={character.music}
          />

        </section>

      )}



      <div
        style={{
          display:"flex",
          justifyContent:"center",
          alignItems:"center",
          gap:"25px",
          margin:"50px 0",
        }}
      >

        <div
          style={{
            width:"220px",
            height:"1px",
            background:
              "linear-gradient(to right,transparent,#d7b56d)",
          }}
        />


        <div style={{fontSize:"34px"}}>
          👑
        </div>


        <div
          style={{
            width:"220px",
            height:"1px",
            background:
              "linear-gradient(to left,transparent,#d7b56d)",
          }}
        />

      </div>



      {profile === "royal" && (
        <RoyalProfile character={character}/>
      )}


      {profile === "dark" && (
        <DarkProfile character={character}/>
      )}


      {profile === "warrior" && (
        <WarriorProfile character={character}/>
      )}


    </>
  );
}



function getProfileType(slug?: string | null){

  switch(slug){

    case "hanimalith":
      return "dark";


    case "vlidross":
      return "warrior";


    default:
      return "royal";

  }

}
function RoyalProfile({
  character,
}: Props) {

  return (

    <section
      style={{
        display:"grid",
        gridTemplateColumns:"240px 1fr 240px",
        gap:"40px",
        alignItems:"center",
      }}
    >


      <Details character={character}/>



      <div
        style={{
          position:"relative",
          height:"720px",
          borderRadius:"22px",
          overflow:"hidden",
          border:
            "1px solid rgba(200,164,77,.35)",
          background:
            "radial-gradient(circle,#2b1a40,#050505)",
          boxShadow:
            "0 0 60px rgba(215,181,109,.15)",
        }}
      >


        <div
          style={{
            position:"absolute",
            inset:0,
            background:
              "radial-gradient(circle,rgba(215,181,109,.15),transparent)",
          }}
        />


        {character.image && (

          <Image
            src={character.image}
            alt={character.name || "Character"}
            fill
            style={{
              objectFit:"contain",
              zIndex:2,
            }}
          />

        )}


      </div>




      <div
        style={{
          padding:"30px",
          borderRadius:"18px",
          background:
            "rgba(17,17,17,.75)",
          border:
            "1px solid rgba(200,164,77,.25)",
          textAlign:"center",
          backdropFilter:"blur(12px)",
        }}
      >


        <div
          style={{
            fontSize:"70px",
            marginBottom:"20px",
          }}
        >
          👑
        </div>



        <h2
          style={{
            color:"#d7b56d",
            fontFamily:"Cinzel, serif",
            fontSize:"30px",
            fontWeight:400,
          }}
        >
          {character.title || "Unknown Title"}
        </h2>



        <div
          style={{
            width:"80px",
            height:"1px",
            background:
              "rgba(215,181,109,.5)",
            margin:"20px auto",
          }}
        />



        {character.quote && (

          <p
            style={{
              color:"#ccc",
              fontStyle:"italic",
              lineHeight:1.9,
            }}
          >
            ❝ {character.quote} ❞
          </p>

        )}



        <div
          style={{
            marginTop:"30px",
            padding:"14px",
            border:
              "1px solid rgba(200,164,77,.25)",
            borderRadius:"12px",
            color:"#9d7d3d",
            letterSpacing:"3px",
            fontSize:"13px",
          }}
        >
          FIRST OF HIS NAME
        </div>


      </div>


    </section>

  );

}





function DarkProfile({
  character,
}: Props) {


  return (

    <section
      style={{
        padding:"70px",
        borderRadius:"30px",
        background:
          "linear-gradient(145deg,#050505,#151515)",
        border:
          "1px solid rgba(120,120,120,.3)",
        textAlign:"center",
        boxShadow:
          "0 30px 80px rgba(0,0,0,.7)",
      }}
    >


      <h1
        style={{
          color:"#d7b56d",
          fontFamily:"Cinzel, serif",
          fontSize:"50px",
        }}
      >
        {character.name}
      </h1>



      <div
        style={{
          width:"120px",
          height:"1px",
          background:"#d7b56d",
          margin:"30px auto",
        }}
      />



      <p
        style={{
          color:"#ddd",
          fontSize:"24px",
          lineHeight:2,
          fontStyle:"italic",
        }}
      >
        ❝ {character.quote} ❞
      </p>



      {character.image && (

        <div
          style={{
            position:"relative",
            height:"700px",
            marginTop:"50px",
          }}
        >

          <Image
            src={character.image}
            alt={character.name || "Character"}
            fill
            style={{
              objectFit:"contain",
            }}
          />

        </div>

      )}


    </section>

  );

}
function WarriorProfile({
  character,
}: Props) {


  return (

    <section
      style={{
        padding:"60px",
        borderRadius:"30px",
        background:
          "linear-gradient(135deg,#250000,#080808)",
        border:
          "1px solid rgba(255,90,50,.35)",
        boxShadow:
          "0 30px 80px rgba(0,0,0,.8)",
        textAlign:"center",
      }}
    >


      <h1
        style={{
          color:"#ffb38a",
          fontFamily:"Cinzel, serif",
          fontSize:"55px",
        }}
      >
        {character.title || character.name}
      </h1>



      <div
        style={{
          width:"140px",
          height:"2px",
          background:"#ff8a50",
          margin:"30px auto",
        }}
      />



      {character.image && (

        <div
          style={{
            position:"relative",
            height:"650px",
            marginBottom:"40px",
          }}
        >

          <Image
            src={character.image}
            alt={character.name || "Character"}
            fill
            style={{
              objectFit:"contain",
            }}
          />

        </div>

      )}



      {character.quote && (

        <p
          style={{
            color:"#ddd",
            fontSize:"24px",
            lineHeight:2,
            fontStyle:"italic",
          }}
        >
          ❝ {character.quote} ❞
        </p>

      )}



    </section>

  );

}






function Details({
  character,
}: Props) {


  return (

    <div
      style={{
        border:
          "1px solid rgba(200,164,77,.25)",
        borderRadius:"18px",
        padding:"30px",
        background:
          "rgba(17,17,17,.75)",
        backdropFilter:
          "blur(12px)",
      }}
    >


      <h3
        style={{
          color:"#d7b56d",
          fontFamily:"Cinzel, serif",
          textAlign:"center",
          marginBottom:"25px",
        }}
      >
        DETAILS
      </h3>



      <div
        style={{
          display:"flex",
          flexDirection:"column",
          gap:"20px",
          color:"#ddd",
          textAlign:"center",
          lineHeight:1.8,
        }}
      >


        <div>
          🏰 Kingdom
          <br />
          {character.kingdom || "Unknown"}
        </div>



        <div>
          🧬 Race
          <br />
          {character.race || "Unknown"}
        </div>



        <div>
          ❤️ Status
          <br />
          {character.status || "Unknown"}
        </div>



        <div>
          🌍 Universe
          <br />
          {character.universe || "Unknown"}
        </div>



      </div>


    </div>

  );

}
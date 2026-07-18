import type { Character } from "../components/CharacterProfile";


type Props = {
  character: Character;
};


export default function AncientTheme({
  character,
}: Props) {

  return (
    <main
      style={{
        minHeight:"100vh",
        padding:"60px 30px",
        background:
          "radial-gradient(circle at top,#302515,#080808 70%)",
        color:"#eee4c8",
      }}
    >

      <div
        style={{
          maxWidth:"1200px",
          margin:"0 auto",
          padding:"50px",
          borderRadius:"30px",
          background:"rgba(20,15,8,.85)",
          border:
            "1px solid rgba(180,150,80,.35)",
          boxShadow:
            "0 30px 80px rgba(0,0,0,.85)",
        }}
      >

        <h1
          style={{
            textAlign:"center",
            fontFamily:"Cinzel,serif",
            fontSize:"52px",
            color:"#e6c77a",
            letterSpacing:"4px",
          }}
        >
          {character.name || "Unknown"}
        </h1>


        <p
          style={{
            textAlign:"center",
            marginTop:"15px",
            color:"#b89b55",
            letterSpacing:"4px",
          }}
        >
          ✦ {character.title || "Ancient Character"} ✦
        </p>


        {character.quote && (
          <blockquote
            style={{
              marginTop:"40px",
              padding:"25px",
              borderLeft:
                "3px solid #d7b56d",
              fontFamily:"Georgia,serif",
              fontSize:"22px",
              fontStyle:"italic",
              color:"#e6d3a0",
            }}
          >
            ❝ {character.quote} ❞
          </blockquote>
        )}


        <div
          style={{
            marginTop:"40px",
          }}
        >

          <h2
            style={{
              fontFamily:"Cinzel,serif",
              color:"#d7b56d",
              fontSize:"30px",
            }}
          >
            Ancient Biography
          </h2>


          <p
            style={{
              marginTop:"20px",
              fontFamily:"Georgia,serif",
              fontSize:"20px",
              lineHeight:2,
            }}
          >
            {character.description ||
              "No ancient records available."}
          </p>

        </div>


      </div>

    </main>
  );
}
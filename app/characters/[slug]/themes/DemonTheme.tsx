import type { Character } from "../components/CharacterProfile";


type Props = {
  character: Character;
};


export default function DemonTheme({
  character,
}: Props) {

  return (
    <main
      style={{
        minHeight:"100vh",
        padding:"60px 30px",
        background:
          "radial-gradient(circle at top,#4a0010,#050505 70%)",
        color:"#f5dddd",
      }}
    >

      <div
        style={{
          maxWidth:"1200px",
          margin:"0 auto",
          padding:"50px",
          borderRadius:"30px",
          background:"rgba(20,0,5,.85)",
          border:
            "1px solid rgba(180,40,60,.4)",
          boxShadow:
            "0 30px 80px rgba(0,0,0,.9)",
        }}
      >

        <h1
          style={{
            textAlign:"center",
            fontFamily:"Cinzel,serif",
            fontSize:"52px",
            color:"#ffb0b0",
          }}
        >
          {character.name || "Unknown"}
        </h1>


        <p
          style={{
            textAlign:"center",
            color:"#d85b5b",
            letterSpacing:"4px",
          }}
        >
          ✦ {character.title || "Demon"} ✦
        </p>


        {character.quote && (
          <blockquote
            style={{
              marginTop:"40px",
              textAlign:"center",
              fontStyle:"italic",
              fontSize:"22px",
              color:"#ff9999",
            }}
          >
            ❝ {character.quote} ❞
          </blockquote>
        )}


        <p
          style={{
            marginTop:"40px",
            fontFamily:"Georgia,serif",
            fontSize:"20px",
            lineHeight:2,
          }}
        >
          {character.description ||
            "No biography available."}
        </p>

      </div>

    </main>
  );
}
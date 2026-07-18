import type { Character } from "../components/CharacterProfile";


type Props = {
  character: Character;
};


export default function WarriorTheme({
  character,
}: Props) {

  return (
    <main
      style={{
        minHeight:"100vh",
        padding:"60px 30px",
        background:
          "radial-gradient(circle at top,#3a1a0b,#050505 70%)",
        color:"#eee",
      }}
    >

      <div
        style={{
          maxWidth:"1200px",
          margin:"0 auto",
          padding:"50px",
          borderRadius:"30px",
          background:"rgba(15,10,5,.85)",
          border:
            "1px solid rgba(180,120,50,.35)",
          boxShadow:
            "0 30px 80px rgba(0,0,0,.8)",
        }}
      >

        <h1
          style={{
            textAlign:"center",
            fontFamily:"Cinzel,serif",
            fontSize:"52px",
            color:"#f0c27b",
          }}
        >
          {character.name || "Unknown"}
        </h1>


        <p
          style={{
            textAlign:"center",
            color:"#c98b45",
            letterSpacing:"4px",
          }}
        >
          ✦ {character.title || "Warrior"} ✦
        </p>


        {character.quote && (
          <blockquote
            style={{
              marginTop:"40px",
              textAlign:"center",
              fontStyle:"italic",
              fontSize:"22px",
              color:"#e5b76b",
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
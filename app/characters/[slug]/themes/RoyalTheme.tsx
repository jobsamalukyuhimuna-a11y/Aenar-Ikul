import type { Character } from "../components/CharacterProfile";


type Props = {
  character: Character;
};


export default function RoyalTheme({
  character,
}: Props) {

  return (
    <main
      style={{
        minHeight:"100vh",
        padding:"60px 30px",
        background:
          "radial-gradient(circle at top,#4b3510,#080808 70%)",
        color:"#f5e6b8",
      }}
    >

      <div
        style={{
          maxWidth:"1200px",
          margin:"0 auto",
          padding:"50px",
          borderRadius:"30px",
          background:"rgba(20,15,5,.8)",
          border:
            "1px solid rgba(215,181,109,.45)",
          boxShadow:
            "0 30px 80px rgba(0,0,0,.8)",
        }}
      >

        <h1
          style={{
            textAlign:"center",
            fontFamily:"Cinzel,serif",
            fontSize:"52px",
          }}
        >
          {character.name || "Unknown"}
        </h1>


        <p
          style={{
            textAlign:"center",
            color:"#d7b56d",
            letterSpacing:"4px",
          }}
        >
          ✦ {character.title || "Royal Character"} ✦
        </p>


        {character.quote && (
          <blockquote
            style={{
              marginTop:"40px",
              textAlign:"center",
              fontStyle:"italic",
              fontSize:"22px",
            }}
          >
            ❝ {character.quote} ❞
          </blockquote>
        )}


        <p
          style={{
            marginTop:"40px",
            fontFamily:"Georgia,serif",
            lineHeight:2,
            fontSize:"20px",
          }}
        >
          {character.description ||
            "No biography available."}
        </p>

      </div>

    </main>
  );
}
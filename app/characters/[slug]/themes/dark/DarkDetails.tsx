import type { Character } from "../../components/CharacterTypes";


type Props = {
  character: Character;
};



export default function DarkDetails({
  character,
}: Props) {


  return (

    <aside
      style={{
        padding:"35px",
        borderRadius:"30px",
        background:
        "linear-gradient(180deg,rgba(35,20,60,.85),rgba(5,5,10,.85))",
        border:
        "1px solid rgba(150,90,255,.35)",
        boxShadow:
        "0 0 40px rgba(100,40,200,.2)",
      }}
    >


      <h2
        style={{
          fontFamily:"Cinzel,serif",
          color:"#d8caff",
          fontSize:"25px",
          letterSpacing:"3px",
          marginBottom:"30px",
        }}
      >
        DETAILS
      </h2>




      <Info
        title="KINGDOM"
        value={character.kingdom}
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
        title="UNIVERSE"
        value={character.universe}
      />


    </aside>

  );

}





function Info({
  title,
  value,
}:{
  title:string;
  value?:string|null;
}) {


  return (

    <div
      style={{
        marginBottom:"20px",
        padding:"18px",
        borderRadius:"18px",
        background:
        "rgba(255,255,255,.04)",
        border:
        "1px solid rgba(150,90,255,.18)",
      }}
    >


      <h3
        style={{
          color:"#9674ff",
          fontSize:"12px",
          letterSpacing:"4px",
          marginBottom:"8px",
        }}
      >
        {title}
      </h3>



      <p
        style={{
          color:"#fff",
          fontSize:"16px",
        }}
      >
        {value || "Unknown"}
      </p>


    </div>

  );

}
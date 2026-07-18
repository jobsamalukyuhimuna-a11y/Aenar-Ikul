import Image from "next/image";
import Link from "next/link";

type Character = {
  id: number;
  slug: string;
  name: string;
  title?: string | null;
  image?: string | null;
  description?: string | null;
  quote?: string | null;
  kingdom?: string | null;
  universe?: string | null;
  race?: string | null;
  status?: string | null;
  profileStyle?: string | null;
};

type Props = {
  character: Character;
};

export default function CharacterCard({
  character,
}: Props) {

  return (
    <article
      style={{
        position:"relative",
        overflow:"hidden",
        borderRadius:"24px",
        background:"rgba(10,10,10,.96)",
        border:
        "1px solid rgba(215,181,109,.35)",
        boxShadow:
        "0 25px 70px rgba(0,0,0,.75)",
      }}
    >


      <div
        style={{
          position:"absolute",
          inset:0,
          background:
          "radial-gradient(circle at top,rgba(139,92,246,.18),transparent 65%)",
          pointerEvents:"none",
        }}
      />




      {/* CHARACTER IMAGE */}

      <div
        style={{
          position:"relative",
          height:"520px",
          overflow:"hidden",
          display:"flex",
          alignItems:"center",
          justifyContent:"center",
          background:
          "radial-gradient(circle at center,#26163d 0%,#080808 70%)",
        }}
      >


        <Image
          src={
            character.image ||
            "/images/default-character.png"
          }

          alt={character.name}

          fill

          sizes="(max-width:768px) 100vw, 360px"

          style={{

            objectFit:"contain",

            objectPosition:"center center",

            padding:"0",

            transform:"scale(.88)",

            filter:
            "drop-shadow(0 0 35px rgba(215,181,109,.35))",

          }}

        />


      </div>





      {/* INFO */}

      <div
        style={{
          position:"relative",
          zIndex:2,
          padding:"30px",
          textAlign:"center",
        }}
      >



        <div
          style={{
            width:"120px",
            height:"2px",
            margin:"0 auto 20px",

            background:
            "linear-gradient(to right,transparent,#d7b56d,transparent)",
          }}
        />



        <h2
          style={{
            color:"#f2dfb4",

            fontFamily:"Cinzel, serif",

            fontSize:"34px",

            fontWeight:400,

            letterSpacing:"2px",

            marginBottom:"14px",
          }}
        >
          {character.name}
        </h2>




        <p
          style={{
            color:"#d7b56d",

            letterSpacing:"4px",

            fontSize:"13px",

            marginBottom:"30px",
          }}
        >
          ✦ {(character.title ?? "UNKNOWN").toUpperCase()} ✦
        </p>





        <Link
          href={`/characters/${character.slug}`}

          style={{
            display:"block",

            padding:"15px",

            borderRadius:"14px",

            background:
            "linear-gradient(90deg,#5b4216,#d7b56d,#5b4216)",

            color:"#111",

            textDecoration:"none",

            fontWeight:700,

            letterSpacing:"3px",

            fontFamily:"Cinzel, serif",
          }}
        >
          ✦ VIEW PROFILE ✦
        </Link>



      </div>


    </article>
  );
}
import Image from "next/image";


type Props = {
  image:string|null;
  name:string|null;
};



export default function DarkFrame({
  image,
  name,
}:Props){


  return (

    <div
      style={{
        position:"relative",
        height:"750px",
        borderRadius:"45px",
        overflow:"hidden",
        background:
        "radial-gradient(circle at center,#4a1680,#08030f 65%)",
        border:
        "2px solid rgba(170,110,255,.55)",
        boxShadow:
        "0 0 100px rgba(130,60,255,.45)",
      }}
    >



      <div
        style={{
          position:"absolute",
          inset:"25px",
          borderRadius:"35px",
          border:
          "1px solid rgba(220,190,255,.25)",
          pointerEvents:"none",
        }}
      />



      <div
        style={{
          position:"absolute",
          inset:0,
          background:
          "radial-gradient(circle,transparent 40%,rgba(0,0,0,.5))",
          pointerEvents:"none",
        }}
      />



      <Image
        src={
          image ||
          "/images/default-character.png"
        }
        alt={
          name ||
          "Character"
        }
        fill
        style={{
          objectFit:"contain",
          padding:"35px",
          filter:
          "drop-shadow(0 0 40px rgba(160,90,255,.9))",
        }}
      />


    </div>

  );

}
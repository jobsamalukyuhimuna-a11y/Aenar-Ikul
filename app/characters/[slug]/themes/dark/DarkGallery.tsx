type Props = {
  name:string|null;
  title:string|null;
  quote:string|null;
};



export default function DarkGallery({
  name,
  title,
  quote,
}:Props){


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
        textAlign:"center",
      }}
    >



      <p
        style={{
          color:"#9674ff",
          letterSpacing:"5px",
          fontSize:"12px",
        }}
      >
        CHARACTER
      </p>



      <h2
        style={{
          marginTop:"20px",
          fontFamily:"Cinzel,serif",
          color:"#eee6ff",
          fontSize:"28px",
          letterSpacing:"2px",
        }}
      >
        {name || "Unknown"}
      </h2>




      <h3
        style={{
          marginTop:"15px",
          color:"#b89cff",
          fontFamily:"Cinzel,serif",
          fontSize:"18px",
        }}
      >
        {title || "Unknown Title"}
      </h3>





      {quote && (

        <p
          style={{
            marginTop:"35px",
            color:"#ddd",
            fontSize:"18px",
            lineHeight:"2",
            fontStyle:"italic",
          }}
        >
          ❝ {quote} ❞
        </p>

      )}



    </aside>

  );

}
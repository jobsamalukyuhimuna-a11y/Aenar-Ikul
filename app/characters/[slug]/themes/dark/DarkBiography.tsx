type Props = {
  description:string|null;
};



export default function DarkBiography({
  description,
}:Props){


  return (

    <section
      style={{
        marginTop:"70px",
        padding:"50px",
        borderRadius:"35px",
        background:
        "linear-gradient(180deg,rgba(15,10,25,.9),rgba(5,5,10,.9))",
        border:
        "1px solid rgba(150,90,255,.25)",
        boxShadow:
        "0 0 50px rgba(100,40,200,.15)",
      }}
    >



      <h2
        style={{
          textAlign:"center",
          fontFamily:"Cinzel,serif",
          fontSize:"38px",
          letterSpacing:"4px",
          color:"#d8caff",
        }}
      >
        BIOGRAPHY
      </h2>





      <div
        style={{
          width:"80px",
          height:"2px",
          margin:"25px auto",
          background:
          "linear-gradient(90deg,transparent,#9674ff,transparent)",
        }}
      />





      <p
        style={{
          marginTop:"35px",
          textAlign:"center",
          fontFamily:"Georgia,serif",
          fontSize:"21px",
          lineHeight:"2.3",
          color:"#ddd",
        }}
      >
        {description ||
        "No biography available."}
      </p>



    </section>

  );

}
export default function CharactersHero() {
  return (
    <section
      style={{
        position: "relative",
        textAlign: "center",
        padding: "20px 0 70px",
        overflow: "hidden",
      }}
    >
      {/* Golden Aura */}

      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "45%",
          transform: "translate(-50%,-50%)",
          width: "420px",
          height: "420px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(215,181,109,.18), transparent 70%)",
          filter: "blur(70px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 2,
        }}
      >
        <p
          style={{
            color: "#9d7d3d",
            letterSpacing: "10px",
            fontSize: "13px",
            marginBottom: "18px",
            textTransform: "uppercase",
          }}
        >
          ✦ LEGENDS OF THE REALM ✦
        </p>

        <h1
          style={{
            fontFamily: "Cinzel, serif",
            fontWeight: 400,
            fontSize: "clamp(46px,7vw,78px)",
            color: "#e4c77d",
            marginBottom: "18px",
            textShadow: "0 0 25px rgba(215,181,109,.25)",
          }}
        >
          Characters
        </h1>

        <div
          style={{
            width: "220px",
            height: "2px",
            margin: "0 auto 30px",
            background:
              "linear-gradient(to right, transparent,#d7b56d,transparent)",
          }}
        />

        <p
          style={{
            maxWidth: "760px",
            margin: "0 auto",
            color: "#cfcfcf",
            lineHeight: 2,
            fontSize: "18px",
          }}
        >
          Every soul has a legend...
          <br />
          Every crown has a story...
          <br />
          Welcome to the Royal Archive of Aenar Ikul.
        </p>
      </div>
    </section>
  );
}
export default function CharactersHero() {
  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        textAlign: "center",
        padding: "clamp(15px, 3vw, 20px) 0 clamp(45px, 8vw, 70px)",
        overflow: "hidden",
        boxSizing: "border-box",
      }}
    >
      {/* Golden Aura */}

      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "45%",
          transform: "translate(-50%, -50%)",
          width: "clamp(260px, 55vw, 420px)",
          height: "clamp(260px, 55vw, 420px)",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(215,181,109,.18), transparent 70%)",
          filter: "blur(clamp(45px, 8vw, 70px))",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          maxWidth: "1000px",
          margin: "0 auto",
          padding: "0 clamp(10px, 3vw, 20px)",
          boxSizing: "border-box",
        }}
      >
        {/* Small Title */}

        <p
          style={{
            width: "100%",
            margin: "0 0 clamp(14px, 3vw, 18px)",
            color: "#9d7d3d",
            letterSpacing: "clamp(2px, 1vw, 10px)",
            fontSize: "clamp(9px, 2.2vw, 13px)",
            lineHeight: 1.5,
            textTransform: "uppercase",
            overflowWrap: "break-word",
            boxSizing: "border-box",
          }}
        >
          ✦ LEGENDS OF THE REALM ✦
        </p>

        {/* Main Title */}

        <h1
          style={{
            width: "100%",
            margin: "0 0 clamp(14px, 3vw, 18px)",
            fontFamily: "Cinzel, serif",
            fontWeight: 400,
            fontSize: "clamp(38px, 8vw, 78px)",
            lineHeight: 1.1,
            color: "#e4c77d",
            letterSpacing: "clamp(1px, .5vw, 4px)",
            textShadow: "0 0 25px rgba(215,181,109,.25)",
            overflowWrap: "break-word",
          }}
        >
          Characters
        </h1>

        {/* Decorative Line */}

        <div
          style={{
            width: "clamp(100px, 32vw, 220px)",
            maxWidth: "80%",
            height: "2px",
            margin: "0 auto clamp(22px, 5vw, 30px)",
            background:
              "linear-gradient(to right, transparent,#d7b56d,transparent)",
          }}
        />

        {/* Description */}

        <p
          style={{
            width: "100%",
            maxWidth: "760px",
            margin: "0 auto",
            color: "#cfcfcf",
            lineHeight: 1.9,
            fontSize: "clamp(15px, 2.8vw, 18px)",
            overflowWrap: "break-word",
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
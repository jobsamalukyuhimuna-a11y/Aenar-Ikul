export default function About() {
  return (
    <section
      style={{
        background: "#080808",
        padding: "clamp(80px, 12vw, 160px) clamp(16px, 5vw, 40px)",
        position: "relative",
        overflow: "hidden",
        boxSizing: "border-box",
        width: "100%",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1100px",
          margin: "0 auto",
          textAlign: "center",
          boxSizing: "border-box",
        }}
      >
        {/* Small Title */}

        <p
          style={{
            color: "#9d7d3d",
            letterSpacing: "clamp(2px, 1vw, 8px)",
            fontSize: "clamp(10px, 2vw, 15px)",
            lineHeight: 1.5,
            fontFamily: "Cinzel, serif",
            textTransform: "uppercase",
            margin: "0 0 clamp(20px, 4vw, 30px)",
            overflowWrap: "break-word",
          }}
        >
          ABOUT THE ARCHIVE
        </p>

        {/* Decorative Line */}

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "clamp(8px, 2vw, 18px)",
            marginBottom: "clamp(28px, 5vw, 40px)",
            width: "100%",
            boxSizing: "border-box",
          }}
        >
          <div
            style={{
              width: "clamp(45px, 14vw, 160px)",
              maxWidth: "30vw",
              height: "1px",
              background:
                "linear-gradient(to right, transparent, rgba(186,146,71,.9))",
              flexShrink: 1,
            }}
          />

          <div
            style={{
              color: "#c8a44d",
              fontSize: "clamp(14px, 2.5vw, 18px)",
              flexShrink: 0,
            }}
          >
            ✦
          </div>

          <div
            style={{
              width: "clamp(45px, 14vw, 160px)",
              maxWidth: "30vw",
              height: "1px",
              background:
                "linear-gradient(to left, transparent, rgba(186,146,71,.9))",
              flexShrink: 1,
            }}
          />
        </div>

        {/* Main Title */}

        <h2
          style={{
            margin: "0 0 clamp(30px, 5vw, 45px)",
            fontSize: "clamp(38px, 7vw, 62px)",
            lineHeight: 1.15,
            color: "#f2efe8",
            fontWeight: 400,
            fontFamily: "'Cinzel Decorative', serif",
            letterSpacing: "clamp(1px, .6vw, 4px)",
            overflowWrap: "break-word",
          }}
        >
          Welcome to
          <br />
          <span
            style={{
              color: "#c8a44d",
              display: "inline-block",
              maxWidth: "100%",
            }}
          >
            AENAR IKUL
          </span>
        </h2>

        {/* First Paragraph */}

        <p
          style={{
            width: "100%",
            maxWidth: "900px",
            margin: "0 auto",
            color: "#d2d2d2",
            fontSize: "clamp(18px, 3vw, 25px)",
            lineHeight: 1.8,
            fontFamily: "'Cormorant Garamond', serif",
            overflowWrap: "break-word",
            boxSizing: "border-box",
          }}
        >
          Aenar Ikul is more than a digital library. It is the official
          archive of worlds, kingdoms, stories, philosophies, music and
          timeless legends.
        </p>

        {/* Second Paragraph */}

        <p
          style={{
            width: "100%",
            maxWidth: "860px",
            margin: "clamp(28px, 5vw, 40px) auto 0",
            color: "#8f8f8f",
            fontSize: "clamp(16px, 2.7vw, 22px)",
            lineHeight: 1.8,
            fontFamily: "'Cormorant Garamond', serif",
            overflowWrap: "break-word",
            boxSizing: "border-box",
          }}
        >
          Every universe is connected. Every character has a purpose. Every
          story leaves a mark that echoes through history.
        </p>

        {/* Bottom Ornament */}

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "clamp(8px, 2vw, 18px)",
            marginTop: "clamp(45px, 7vw, 70px)",
            width: "100%",
            boxSizing: "border-box",
          }}
        >
          <div
            style={{
              width: "clamp(55px, 18vw, 220px)",
              maxWidth: "32vw",
              height: "1px",
              background:
                "linear-gradient(to right, transparent, rgba(186,146,71,.9))",
              flexShrink: 1,
            }}
          />

          <div
            style={{
              color: "#c8a44d",
              fontSize: "clamp(15px, 2.5vw, 20px)",
              flexShrink: 0,
            }}
          >
            ✦
          </div>

          <div
            style={{
              width: "clamp(55px, 18vw, 220px)",
              maxWidth: "32vw",
              height: "1px",
              background:
                "linear-gradient(to left, transparent, rgba(186,146,71,.9))",
              flexShrink: 1,
            }}
          />
        </div>
      </div>
    </section>
  );
}
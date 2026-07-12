export default function About() {
  return (
    <section
      style={{
        background: "#080808",
        padding: "160px 40px",
        position: "relative",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        {/* Small Title */}

        <p
          style={{
            color: "#9d7d3d",
            letterSpacing: "8px",
            fontSize: "15px",
            fontFamily: "Cinzel, serif",
            textTransform: "uppercase",
            marginBottom: "30px",
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
            gap: "18px",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              width: "160px",
              height: "1px",
              background:
                "linear-gradient(to right, transparent, rgba(186,146,71,.9))",
            }}
          />

          <div
            style={{
              color: "#c8a44d",
              fontSize: "18px",
            }}
          >
            ✦
          </div>

          <div
            style={{
              width: "160px",
              height: "1px",
              background:
                "linear-gradient(to left, transparent, rgba(186,146,71,.9))",
            }}
          />
        </div>

        {/* Main Title */}

        <h2
          style={{
            margin: 0,
            fontSize: "62px",
            color: "#f2efe8",
            fontWeight: 400,
            fontFamily: "'Cinzel Decorative', serif",
            letterSpacing: "4px",
            marginBottom: "45px",
          }}
        >
          Welcome to
          <br />
          <span
            style={{
              color: "#c8a44d",
            }}
          >
            AENAR IKUL
          </span>
        </h2>

        {/* First Paragraph */}

        <p
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            color: "#d2d2d2",
            fontSize: "25px",
            lineHeight: 1.9,
            fontFamily: "'Cormorant Garamond', serif",
          }}
        >
          Aenar Ikul is more than a digital library.
          It is the official archive of worlds,
          kingdoms, stories, philosophies,
          music and timeless legends.
        </p>

        {/* Second Paragraph */}

        <p
          style={{
            maxWidth: "860px",
            margin: "40px auto 0",
            color: "#8f8f8f",
            fontSize: "22px",
            lineHeight: 1.9,
            fontFamily: "'Cormorant Garamond', serif",
          }}
        >
          Every universe is connected.
          Every character has a purpose.
          Every story leaves a mark that echoes through history.
        </p>

        {/* Bottom Ornament */}

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "18px",
            marginTop: "70px",
          }}
        >
          <div
            style={{
              width: "220px",
              height: "1px",
              background:
                "linear-gradient(to right, transparent, rgba(186,146,71,.9))",
            }}
          />

          <div
            style={{
              color: "#c8a44d",
              fontSize: "20px",
            }}
          >
            ✦
          </div>

          <div
            style={{
              width: "220px",
              height: "1px",
              background:
                "linear-gradient(to left, transparent, rgba(186,146,71,.9))",
            }}
          />
        </div>
      </div>
    </section>
  );
}
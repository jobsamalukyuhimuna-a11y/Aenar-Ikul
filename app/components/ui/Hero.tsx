import Link from "next/link";

export default function Hero() {
  return (
    <section
      style={{
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        backgroundImage: "url('/images/hero/hero.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPositionX: "center",
        backgroundPositionY: "-180px",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Background Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, rgba(0,0,0,.40), rgba(0,0,0,.82))",
          backdropFilter: "blur(.5px)",
        }}
      />

      {/* Golden Glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at center, rgba(180,140,55,.08), transparent 60%)",
          mixBlendMode: "screen",
        }}
      />

      {/* Left Navigation */}
      <div
        style={{
          position: "absolute",
          top: "55px",
          left: "60px",
          display: "flex",
          flexDirection: "column",
          gap: "22px",
          zIndex: 20,
        }}
      >
        <Link
          href="/"
          style={{
            color: "#e2c67d",
            fontFamily: "Cinzel, serif",
            fontSize: "18px",
            letterSpacing: "5px",
            textTransform: "uppercase",
            textDecoration: "none",
            textShadow: "0 0 14px rgba(212,178,90,.30)",
            transition: "all .3s ease",
          }}
        >
          HOME
        </Link>

        <Link
          href="/universes"
          style={{
            color: "#e2c67d",
            fontFamily: "Cinzel, serif",
            fontSize: "18px",
            letterSpacing: "5px",
            textTransform: "uppercase",
            textDecoration: "none",
            textShadow: "0 0 14px rgba(212,178,90,.30)",
            transition: "all .3s ease",
          }}
        >
          UNIVERSES
        </Link>
      </div>

      {/* Right Navigation */}
      <div
        style={{
          position: "absolute",
          top: "55px",
          right: "60px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          gap: "22px",
          zIndex: 20,
        }}
      >
        <Link
          href="/library"
          style={{
            color: "#e2c67d",
            fontFamily: "Cinzel, serif",
            fontSize: "18px",
            letterSpacing: "5px",
            textTransform: "uppercase",
            textDecoration: "none",
            textShadow: "0 0 14px rgba(212,178,90,.30)",
            transition: "all .3s ease",
          }}
        >
          LIBRARY
        </Link>

        <Link
          href="/characters"
          style={{
            color: "#e2c67d",
            fontFamily: "Cinzel, serif",
            fontSize: "18px",
            letterSpacing: "5px",
            textTransform: "uppercase",
            textDecoration: "none",
            textShadow: "0 0 14px rgba(212,178,90,.30)",
            transition: "all .3s ease",
          }}
        >
          CHARACTERS
        </Link>
      </div>
            {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          width: "100%",
          maxWidth: "1200px",
          padding: "0 30px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Top Title */}
        <p
          style={{
            margin: 0,
            marginBottom: "145px",
            color: "#a98a4d",
            fontSize: "clamp(14px, 2.8vw, 16px)",
            letterSpacing: "8px",
            textTransform: "uppercase",
            fontFamily: "Cinzel, serif",
            fontWeight: 500,
            textShadow: "0 0 15px rgba(0,0,0,.8)",
          }}
        >
          THE ROYAL ARCHIVE
        </p>

        {/* Decorative Line */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "18px",
            marginBottom: "28px",
          }}
        >
          <div
            style={{
              width: "140px",
              height: "1px",
              background:
                "linear-gradient(to right, transparent, #8f6b2d)",
            }}
          />

          <div
            style={{
              color: "#b78d3c",
              fontSize: "18px",
            }}
          >
            ✦
          </div>

          <div
            style={{
              width: "140px",
              height: "1px",
              background:
                "linear-gradient(to left, transparent, #8f6b2d)",
            }}
          />
        </div>

        {/* Main Title */}
        <h1
          style={{
            margin: 0,
            fontSize: "clamp(52px, 10vw, 88px)",
            fontWeight: 400,
            letterSpacing: "11px",
            textTransform: "uppercase",
            fontFamily: "'Cinzel Decorative', 'Cinzel', serif",
            background:
              "linear-gradient(180deg,#fff8d7 0%,#f4d67d 25%,#d9b15a 55%,#8d6122 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textShadow:
              "0 0 8px rgba(255,220,120,.15),0 8px 30px rgba(0,0,0,.75)",
          }}
        >
          AENAR IKUL
        </h1>

        {/* Decorative Divider */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "18px",
            marginTop: "90px",
            marginBottom: "42px",
          }}
        >
          <div
            style={{
              width: "180px",
              height: "1px",
              background:
                "linear-gradient(to right, transparent, rgba(186,146,71,.95))",
            }}
          />

          <div
            style={{
              color: "#c7a258",
              fontSize: "16px",
              textShadow: "0 0 15px rgba(215,181,109,.35)",
            }}
          >
            ✦
          </div>

          <div
            style={{
              width: "180px",
              height: "1px",
              background:
                "linear-gradient(to left, transparent, rgba(186,146,71,.95))",
            }}
          />
        </div>

        {/* Subtitle */}
        <p
          style={{
            maxWidth: "900px",
            width: "100%",
            padding: "0 16px",
            margin: 0,
            color: "#e7e0d0",
            fontSize: "clamp(22px, 5vw, 32px)",
            lineHeight: 1.85,
            letterSpacing: "1px",
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 400,
            textShadow: "0 2px 18px rgba(0,0,0,.9)",
          }}
        >
          The Official Archive of Worlds & Stories
        </p>

        <p
          style={{
            marginTop: "14px",
            marginBottom: "70px",
            color: "#9d8757",
            fontSize: "clamp(16px, 3.8vw, 20px)",
            letterSpacing: "3px",
            textTransform: "uppercase",
            fontFamily: "Cinzel, serif",
          }}
        >
          Philosophy ✦ Music ✦ Art ✦ Stories
        </p>

        <Link
          href="/library"
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "14px",
            padding: "18px 48px",
            textDecoration: "none",
            color: "#e3c57c",
            border: "1px solid rgba(183,141,60,.9)",
            background: "rgba(0,0,0,.18)",
            backdropFilter: "blur(8px)",
            letterSpacing: "3px",
            textTransform: "uppercase",
            fontSize: "clamp(15px, 3vw, 17px)",
            fontFamily: "Cinzel, serif",
            boxShadow:
              "0 0 30px rgba(183,141,60,.12), inset 0 0 18px rgba(183,141,60,.08)",
            transition: ".35s",
          }}
        >
          <span>ENTER THE ARCHIVE</span>

          <span
            style={{
              fontSize: "18px",
            }}
          >
            →
          </span>
        </Link>
                {/* Scroll Indicator */}
        <div
          style={{
            marginTop: "85px",
            color: "#8d6b30",
            fontSize: "clamp(13px, 2.8vw, 15px)",
            letterSpacing: "5px",
            textTransform: "uppercase",
            fontFamily: "Cinzel, serif",
          }}
        >
          SCROLL
        </div>

        <div
          style={{
            marginTop: "10px",
            width: "1px",
            height: "70px",
            background:
              "linear-gradient(to bottom,#8d6b30,transparent)",
          }}
        />
      </div>

      {/* Bottom Fade */}
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          height: "260px",
          background:
            "linear-gradient(to bottom, transparent, rgba(8,8,8,.95), #080808)",
          pointerEvents: "none",
        }}
      />

      {/* Decorative Vignette */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          boxShadow: "inset 0 0 220px rgba(0,0,0,.65)",
        }}
      />
    </section>
  );
}

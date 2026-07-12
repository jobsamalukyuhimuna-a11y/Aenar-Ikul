import Link from "next/link";

export default function Hero() {
  const isMobileNav = {
    display: "none",
  };

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
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Background Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, rgba(0,0,0,.35), rgba(0,0,0,.88))",
          backdropFilter: "blur(.6px)",
        }}
      />

      {/* Golden Glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at center, rgba(180,140,55,.10), transparent 65%)",
          mixBlendMode: "screen",
        }}
      />

      {/* Left Navigation */}
      <div
        style={{
          position: "absolute",
          left: "90px",
          top: "32%",
          transform: "translateY(-50%)",
          display: "flex",
          flexDirection: "column",
          gap: "26px",
          zIndex: 30,
        }}
      >
        <Link
          href="/"
          style={{
            color: "#d6b76a",
            textDecoration: "none",
            fontFamily: "Cinzel, serif",
            fontSize: "18px",
            letterSpacing: "5px",
            textTransform: "uppercase",
            paddingBottom: "12px",
            borderBottom: "1px solid rgba(200,164,77,.35)",
            minWidth: "170px",
          }}
        >
          HOME
        </Link>

        <Link
          href="/universes"
          style={{
            color: "#d6b76a",
            textDecoration: "none",
            fontFamily: "Cinzel, serif",
            fontSize: "18px",
            letterSpacing: "5px",
            textTransform: "uppercase",
            paddingBottom: "12px",
            borderBottom: "1px solid rgba(200,164,77,.35)",
            minWidth: "170px",
          }}
        >
          UNIVERSES
        </Link>
      </div>
            {/* Right Navigation */}
      <div
        style={{
          position: "absolute",
          right: "90px",
          top: "32%",
          transform: "translateY(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          gap: "26px",
          zIndex: 30,
        }}
      >
        <Link
          href="/library"
          style={{
            color: "#d6b76a",
            textDecoration: "none",
            fontFamily: "Cinzel, serif",
            fontSize: "18px",
            letterSpacing: "5px",
            textTransform: "uppercase",
            paddingBottom: "12px",
            borderBottom: "1px solid rgba(200,164,77,.35)",
            minWidth: "170px",
            textAlign: "right",
          }}
        >
          LIBRARY
        </Link>

        <Link
          href="/characters"
          style={{
            color: "#d6b76a",
            textDecoration: "none",
            fontFamily: "Cinzel, serif",
            fontSize: "18px",
            letterSpacing: "5px",
            textTransform: "uppercase",
            paddingBottom: "12px",
            borderBottom: "1px solid rgba(200,164,77,.35)",
            minWidth: "170px",
            textAlign: "right",
          }}
        >
          CHARACTERS
        </Link>
      </div>

      {/* Main Content */}
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
            marginBottom: "120px",
            color: "#c8a44d",
            fontSize: "clamp(18px,4vw,24px)",
            letterSpacing: "10px",
            textTransform: "uppercase",
            fontFamily: "Cinzel, serif",
            fontWeight: 600,
            textShadow: "0 0 20px rgba(0,0,0,.9)",
          }}
        >
          THE ROYAL ARCHIVE
        </p>

        {/* Decorative Divider */}
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
              width: "180px",
              height: "1px",
              background:
                "linear-gradient(to right, transparent, rgba(186,146,71,.95))",
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
              width: "180px",
              height: "1px",
              background:
                "linear-gradient(to left, transparent, rgba(186,146,71,.95))",
            }}
          />
        </div>
                {/* Main Title */}
        <h1
          style={{
            margin: 0,
            fontSize: "clamp(58px,10vw,96px)",
            fontWeight: 400,
            letterSpacing: "10px",
            textTransform: "uppercase",
            fontFamily: "'Cinzel Decorative','Cinzel',serif",
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
            marginTop: "70px",
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
            fontSize: "clamp(24px,4vw,32px)",
            lineHeight: 1.7,
            fontFamily: "'Cormorant Garamond', serif",
            textShadow: "0 2px 18px rgba(0,0,0,.9)",
          }}
        >
          The Official Archive of Worlds & Stories
        </p>

        <p
          style={{
            marginTop: "16px",
            marginBottom: "70px",
            color: "#9d8757",
            fontSize: "clamp(17px,3vw,21px)",
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
            padding: "20px 56px",
            textDecoration: "none",
            color: "#e3c57c",
            border: "1px solid rgba(183,141,60,.9)",
            background: "rgba(0,0,0,.22)",
            backdropFilter: "blur(10px)",
            letterSpacing: "3px",
            textTransform: "uppercase",
            fontSize: "clamp(16px,3vw,18px)",
            fontFamily: "Cinzel, serif",
            borderRadius: "6px",
            boxShadow:
              "0 0 35px rgba(183,141,60,.18), inset 0 0 18px rgba(183,141,60,.08)",
            transition: ".35s",
          }}
        >
          <span>ENTER THE ARCHIVE</span>

          <span
            style={{
              fontSize: "20px",
            }}
          >
            →
          </span>
        </Link>

        {/* Scroll Indicator */}
        <div
          style={{
            marginTop: "90px",
            color: "#8d6b30",
            fontSize: "clamp(13px,2vw,15px)",
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

      {/* Mobile Navigation (يظهر على الهواتف فقط بعد إضافة CSS) */}
      <div className="mobile-nav">
        <Link href="/">HOME</Link>
        <Link href="/universes">UNIVERSES</Link>
        <Link href="/library">LIBRARY</Link>
        <Link href="/characters">CHARACTERS</Link>
      </div>
          </section>
  );
}
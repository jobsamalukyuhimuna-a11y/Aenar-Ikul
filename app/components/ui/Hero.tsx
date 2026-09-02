import Link from "next/link";
import "./Hero.css";

export default function Hero() {
  return (
    <section
      className="hero-section"
      style={{
        minHeight: "100svh",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        backgroundImage: "url('/images/hero/hero.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
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
          WebkitBackdropFilter: "blur(.5px)",
          pointerEvents: "none",
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
          pointerEvents: "none",
        }}
      />

      {/* Left Navigation */}
      <div
        className="desktop-nav desktop-nav-left"
        style={{
          position: "absolute",
          top: "clamp(32px, 5vw, 55px)",
          left: "clamp(20px, 4vw, 60px)",
          display: "flex",
          flexDirection: "column",
          gap: "clamp(14px, 2vw, 22px)",
          zIndex: 20,
        }}
      >
        <Link
          href="/"
          style={{
            color: "#e2c67d",
            fontFamily: "Cinzel, serif",
            fontSize: "clamp(13px, 1.5vw, 18px)",
            letterSpacing: "clamp(2px, .4vw, 5px)",
            textTransform: "uppercase",
            textDecoration: "none",
            textShadow: "0 0 14px rgba(212,178,90,.30)",
            transition: "all .3s ease",
            whiteSpace: "nowrap",
          }}
        >
          HOME
        </Link>

        <Link
          href="/universes"
          style={{
            color: "#e2c67d",
            fontFamily: "Cinzel, serif",
            fontSize: "clamp(13px, 1.5vw, 18px)",
            letterSpacing: "clamp(2px, .4vw, 5px)",
            textTransform: "uppercase",
            textDecoration: "none",
            textShadow: "0 0 14px rgba(212,178,90,.30)",
            transition: "all .3s ease",
            whiteSpace: "nowrap",
          }}
        >
          UNIVERSES
        </Link>
      </div>

      {/* Right Navigation */}
      <div
        className="desktop-nav desktop-nav-right"
        style={{
          position: "absolute",
          top: "clamp(32px, 5vw, 55px)",
          right: "clamp(20px, 4vw, 60px)",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          gap: "clamp(14px, 2vw, 22px)",
          zIndex: 20,
        }}
      >
        <Link
          href="/library"
          style={{
            color: "#e2c67d",
            fontFamily: "Cinzel, serif",
            fontSize: "clamp(13px, 1.5vw, 18px)",
            letterSpacing: "clamp(2px, .4vw, 5px)",
            textTransform: "uppercase",
            textDecoration: "none",
            textShadow: "0 0 14px rgba(212,178,90,.30)",
            transition: "all .3s ease",
            whiteSpace: "nowrap",
          }}
        >
          LIBRARY
        </Link>

        <Link
          href="/characters"
          style={{
            color: "#e2c67d",
            fontFamily: "Cinzel, serif",
            fontSize: "clamp(13px, 1.5vw, 18px)",
            letterSpacing: "clamp(2px, .4vw, 5px)",
            textTransform: "uppercase",
            textDecoration: "none",
            textShadow: "0 0 14px rgba(212,178,90,.30)",
            transition: "all .3s ease",
            whiteSpace: "nowrap",
          }}
        >
          CHARACTERS
        </Link>
      </div>

      {/* Content */}
      <div
        className="hero-content"
        style={{
          position: "relative",
          zIndex: 10,
          width: "100%",
          maxWidth: "1200px",
          padding:
            "clamp(110px, 14vw, 150px) clamp(18px, 4vw, 30px) 100px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          boxSizing: "border-box",
        }}
      >
        {/* Top Title */}
        <p
          className="hero-top-title"
          style={{
            margin: 0,
            marginBottom: "clamp(70px, 11vw, 145px)",
            color: "#a98a4d",
            fontSize: "clamp(11px, 2vw, 16px)",
            letterSpacing: "clamp(3px, 1vw, 8px)",
            lineHeight: 1.5,
            textTransform: "uppercase",
            fontFamily: "Cinzel, serif",
            fontWeight: 500,
            textShadow: "0 0 15px rgba(0,0,0,.8)",
            maxWidth: "100%",
          }}
        >
          THE ROYAL ARCHIVE
        </p>

        {/* Decorative Line */}
        <div
          className="hero-divider"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "clamp(8px, 2vw, 18px)",
            marginBottom: "clamp(18px, 3vw, 28px)",
            width: "100%",
            maxWidth: "650px",
          }}
        >
          <div
            style={{
              width: "clamp(55px, 12vw, 140px)",
              height: "1px",
              background:
                "linear-gradient(to right, transparent, #8f6b2d)",
              flexShrink: 1,
            }}
          />

          <div
            style={{
              color: "#b78d3c",
              fontSize: "clamp(14px, 2vw, 18px)",
              flexShrink: 0,
            }}
          >
            ✦
          </div>

          <div
            style={{
              width: "clamp(55px, 12vw, 140px)",
              height: "1px",
              background:
                "linear-gradient(to left, transparent, #8f6b2d)",
              flexShrink: 1,
            }}
          />
        </div>

        {/* Main Title */}
        <h1
          className="hero-title"
          style={{
            margin: 0,
            maxWidth: "100%",
            fontSize: "clamp(40px, 10vw, 88px)",
            lineHeight: 1.05,
            fontWeight: 400,
            letterSpacing: "clamp(3px, 1.2vw, 11px)",
            textTransform: "uppercase",
            fontFamily: "'Cinzel Decorative', 'Cinzel', serif",
            background:
              "linear-gradient(180deg,#fff8d7 0%,#f4d67d 25%,#d9b15a 55%,#8d6122 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textShadow:
              "0 0 8px rgba(255,220,120,.15),0 8px 30px rgba(0,0,0,.75)",
            overflowWrap: "break-word",
          }}
        >
          AENAR IKUL
        </h1>

        {/* Decorative Divider */}
        <div
          className="hero-divider"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "clamp(8px, 2vw, 18px)",
            marginTop: "clamp(45px, 7vw, 90px)",
            marginBottom: "clamp(28px, 4vw, 42px)",
            width: "100%",
            maxWidth: "760px",
          }}
        >
          <div
            style={{
              width: "clamp(60px, 16vw, 180px)",
              height: "1px",
              background:
                "linear-gradient(to right, transparent, rgba(186,146,71,.95))",
              flexShrink: 1,
            }}
          />

          <div
            style={{
              color: "#c7a258",
              fontSize: "clamp(13px, 2vw, 16px)",
              textShadow: "0 0 15px rgba(215,181,109,.35)",
              flexShrink: 0,
            }}
          >
            ✦
          </div>

          <div
            style={{
              width: "clamp(60px, 16vw, 180px)",
              height: "1px",
              background:
                "linear-gradient(to left, transparent, rgba(186,146,71,.95))",
              flexShrink: 1,
            }}
          />
        </div>

        {/* Subtitle */}
        <p
          className="hero-subtitle"
          style={{
            maxWidth: "900px",
            width: "100%",
            padding: "0 clamp(8px, 3vw, 16px)",
            margin: 0,
            boxSizing: "border-box",
            color: "#e7e0d0",
            fontSize: "clamp(18px, 4.5vw, 32px)",
            lineHeight: 1.55,
            letterSpacing: "clamp(.5px, .2vw, 1px)",
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 400,
            textShadow: "0 2px 18px rgba(0,0,0,.9)",
          }}
        >
          The Official Archive of Worlds & Stories
        </p>

        {/* Tagline */}
        <p
          className="hero-tagline"
          style={{
            maxWidth: "100%",
            marginTop: "clamp(10px, 2vw, 14px)",
            marginBottom: "clamp(40px, 7vw, 70px)",
            padding: "0 8px",
            boxSizing: "border-box",
            color: "#9d8757",
            fontSize: "clamp(11px, 2.8vw, 20px)",
            lineHeight: 1.5,
            letterSpacing: "clamp(1px, .7vw, 3px)",
            textTransform: "uppercase",
            fontFamily: "Cinzel, serif",
          }}
        >
          Philosophy ✦ Music ✦ Art ✦ Stories
        </p>

        {/* Main Button */}
        <Link
          href="/library"
          className="hero-button"
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "clamp(8px, 2vw, 14px)",
            width: "min(100%, 420px)",
            boxSizing: "border-box",
            padding:
              "clamp(14px, 3vw, 18px) clamp(22px, 6vw, 48px)",
            textDecoration: "none",
            color: "#e3c57c",
            border: "1px solid rgba(183,141,60,.9)",
            background: "rgba(0,0,0,.18)",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
            letterSpacing: "clamp(1px, .7vw, 3px)",
            textTransform: "uppercase",
            fontSize: "clamp(12px, 2.8vw, 17px)",
            lineHeight: 1.3,
            fontFamily: "Cinzel, serif",
            boxShadow:
              "0 0 30px rgba(183,141,60,.12), inset 0 0 18px rgba(183,141,60,.08)",
            transition: ".35s",
            textAlign: "center",
          }}
        >
          <span>ENTER THE ARCHIVE</span>

          <span
            style={{
              fontSize: "clamp(15px, 3vw, 18px)",
              flexShrink: 0,
            }}
          >
            →
          </span>
        </Link>

        {/* Scroll Indicator */}
        <div
          className="hero-scroll"
          style={{
            marginTop: "clamp(50px, 8vw, 85px)",
            color: "#8d6b30",
            fontSize: "clamp(10px, 2vw, 15px)",
            letterSpacing: "clamp(2px, .8vw, 5px)",
            textTransform: "uppercase",
            fontFamily: "Cinzel, serif",
          }}
        >
          SCROLL
        </div>

        <div
          className="hero-scroll-line"
          style={{
            marginTop: "10px",
            width: "1px",
            height: "clamp(45px, 7vw, 70px)",
            background:
              "linear-gradient(to bottom,#8d6b30,transparent)",
          }}
        />
      </div>

      {/* Mobile Navigation */}
      <div className="mobile-nav">
        <Link href="/">HOME</Link>
        <Link href="/universes">UNIVERSES</Link>
        <Link href="/library">LIBRARY</Link>
        <Link href="/characters">CHARACTERS</Link>
      </div>

      {/* Bottom Fade */}
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          height: "clamp(180px, 26vw, 260px)",
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
          boxShadow: "inset 0 0 clamp(120px, 18vw, 220px) rgba(0,0,0,.65)",
        }}
      />
    </section>
  );
}
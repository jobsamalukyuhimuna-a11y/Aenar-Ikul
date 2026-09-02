"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header
      style={{
        position: "relative",
        width: "100%",
        zIndex: 1000,

        background: "rgba(8,8,8,0.88)",

        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",

        border: "none",
        borderBottom: "none",
        boxShadow: "none",

        outline: "none",

        boxSizing: "border-box",
      }}
    >
      <nav
        style={{
          width: "100%",
          maxWidth: "1400px",

          minHeight: "68px",

          margin: "0 auto",

          padding:
            "10px clamp(16px, 4vw, 40px)",

          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",

          gap: "20px",

          border: "none",
          outline: "none",
          boxShadow: "none",

          boxSizing: "border-box",
        }}
      >
        <Link
          href="/"
          style={{
            textDecoration: "none",
            color: "#C8A44D",

            fontSize:
              "clamp(21px, 3vw, 29px)",

            fontWeight: 800,

            letterSpacing:
              "clamp(1px, .4vw, 3px)",

            lineHeight: 1,

            whiteSpace: "nowrap",

            flexShrink: 0,
          }}
        >
          AENAR IKUL
        </Link>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",

            gap:
              "clamp(8px, 2vw, 26px)",

            flexWrap: "wrap",

            border: "none",
            boxShadow: "none",
          }}
        >
          <Link
            href="/music"
            style={linkStyle}
          >
            Music
          </Link>

          <Link
            href="/library"
            style={linkStyle}
          >
            Library
          </Link>

          <Link
            href="/gallery"
            style={linkStyle}
          >
            Gallery
          </Link>
        </div>
      </nav>
    </header>
  );
}

const linkStyle: React.CSSProperties = {
  color: "#ffffff",
  textDecoration: "none",

  fontSize:
    "clamp(13px, 1.8vw, 16px)",

  fontWeight: 500,

  letterSpacing: "0.5px",

  padding:
    "7px clamp(6px, 1vw, 12px)",

  borderRadius: "8px",

  whiteSpace: "nowrap",

  border: "none",

  outline: "none",

  boxShadow: "none",

  transition: "color .25s ease",

  WebkitTapHighlightColor:
    "transparent",
};
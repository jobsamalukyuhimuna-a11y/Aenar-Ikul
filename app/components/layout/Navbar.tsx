"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 1000,
        backdropFilter: "blur(14px)",
        background: "rgba(8,8,8,0.55)",
        borderBottom: "1px solid rgba(200,164,77,0.15)",
      }}
    >
      <nav
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "22px 40px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Link
          href="/"
          style={{
            textDecoration: "none",
            color: "#C8A44D",
            fontSize: "32px",
            fontWeight: 700,
            letterSpacing: "3px",
          }}
        >
          HUSNI TA
        </Link>

        <div
          style={{
            display: "flex",
            gap: "35px",
          }}
        >
          <Link href="/" style={linkStyle}>
            Home
          </Link>

          <Link href="/universes" style={linkStyle}>
            Universes
          </Link>

          <Link href="/library" style={linkStyle}>
            Library
          </Link>

          <Link href="/gallery" style={linkStyle}>
            Gallery
          </Link>
        </div>
      </nav>
    </header>
  );
}

const linkStyle = {
  color: "#ffffff",
  textDecoration: "none",
  fontSize: "17px",
  transition: "0.3s",
};
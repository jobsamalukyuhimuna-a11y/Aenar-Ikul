import Link from "next/link";

const cards = [
  {
    title: "📚 Stories",
    href: "/admin/stories",
    description: "Manage all stories",
  },
  {
    title: "👑 Characters",
    href: "/admin/characters",
    description: "Manage characters",
  },
  {
    title: "🌍 Universes",
    href: "/admin/universes",
    description: "Manage universes",
  },
  {
    title: "🎵 Music",
    href: "/admin/music",
    description: "Manage music",
  },
  {
    title: "🖼 Media",
    href: "/admin/media",
    description: "Images & files",
  },
  {
    title: "⚙ Settings",
    href: "/admin/settings",
    description: "Website settings",
  },
];

export default function AdminPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top,#2b1a43 0%,#090909 55%,#040404 100%)",
        color: "white",
      }}
    >
      <div
        style={{
          maxWidth: 1450,
          margin: "0 auto",
          padding: "60px",
        }}
      >
        <h1
          style={{
            fontSize: 54,
            color: "#d4af37",
            fontFamily: "Cinzel, serif",
            marginBottom: 12,
          }}
        >
          👑 Anas Library Admin
        </h1>

        <p
          style={{
            color: "#b9b9b9",
            marginBottom: 50,
            fontSize: 18,
          }}
        >
          Welcome to your control panel.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
            gap: 25,
          }}
        >
          {cards.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              style={{
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <div
                style={{
                  background: "rgba(255,255,255,.03)",
                  border: "1px solid rgba(212,175,55,.25)",
                  borderRadius: 20,
                  padding: 35,
                  transition: ".25s",
                  cursor: "pointer",
                  height: 180,
                }}
              >
                <h2
                  style={{
                    color: "#d4af37",
                    marginBottom: 18,
                    fontSize: 30,
                  }}
                >
                  {card.title}
                </h2>

                <p
                  style={{
                    color: "#cfcfcf",
                    lineHeight: 1.7,
                  }}
                >
                  {card.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
import Link from "next/link";
import "./FeaturedUniverses.css";

const universes = [
  {
    title: "Isan Ithan",
    subtitle: "The King Without A Kingdom Novel",
    href: "/universes",
  },
  {
    title: "Coming Soon...",
    subtitle: "A New World",
    href: "/universes",
  },
  {
    title: "Coming Soon...",
    subtitle: "A New World",
    href: "/universes",
  },
];

export default function FeaturedUniverses() {
  return (
    <section
      className="featured-universes"
      style={{
        background: "#0a0a0a",
        padding: "clamp(70px, 10vw, 120px) clamp(14px, 4vw, 60px)",
        width: "100%",
        boxSizing: "border-box",
        overflow: "hidden",
      }}
    >
      <h2
        style={{
          color: "#C8A44D",
          fontSize: "clamp(34px, 6vw, 52px)",
          lineHeight: 1.15,
          fontWeight: 400,
          textAlign: "center",
          margin: "0 0 clamp(40px, 7vw, 70px)",
          letterSpacing: "clamp(1px, .4vw, 4px)",
        }}
      >
        Universes
      </h2>

      <div
        className="featured-grid"
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
          gap: "clamp(18px, 3vw, 35px)",
          width: "100%",
          maxWidth: "1400px",
          margin: "0 auto",
          boxSizing: "border-box",
        }}
      >
        {universes.map((item, index) => (
          <Link
            key={`${item.title}-${index}`}
            href={item.href}
            style={{
              textDecoration: "none",
              display: "flex",
              justifyContent: "center",
              width: "100%",
              minWidth: 0,
            }}
          >
            <div
              className="featured-card"
              style={{
                background: "#161616",
                border: "1px solid rgba(200,164,77,.2)",
                borderRadius: "18px",
                padding: "clamp(24px, 4vw, 40px)",
                transition: ".3s",
                cursor: "pointer",
                minHeight: "clamp(190px, 24vw, 220px)",
                width: "100%",
                maxWidth: "380px",
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <h3
                style={{
                  color: "#C8A44D",
                  fontSize: "clamp(24px, 4vw, 32px)",
                  lineHeight: 1.2,
                  margin: "0 0 clamp(14px, 2vw, 20px)",
                  fontWeight: 400,
                  overflowWrap: "break-word",
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  color: "#bfbfbf",
                  fontSize: "clamp(16px, 2.5vw, 20px)",
                  lineHeight: 1.6,
                  margin: 0,
                  overflowWrap: "break-word",
                }}
              >
                {item.subtitle}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
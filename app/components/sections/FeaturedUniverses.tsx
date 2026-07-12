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
        padding: "120px 60px",
      }}
    >
      <h2
        style={{
          color: "#C8A44D",
          fontSize: "52px",
          textAlign: "center",
          marginBottom: "70px",
        }}
      >
        Universes
      </h2>

      <div
        className="featured-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
          gap: "35px",
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        {universes.map((item) => (
          <Link
            key={item.title}
            href={item.href}
            style={{
              textDecoration: "none",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div
              className="featured-card"
              style={{
                background: "#161616",
                border: "1px solid rgba(200,164,77,.2)",
                borderRadius: "18px",
                padding: "40px",
                transition: ".3s",
                cursor: "pointer",
                minHeight: "220px",
                width: "100%",
                maxWidth: "380px",
                boxSizing: "border-box",
              }}
            >
              <h3
                style={{
                  color: "#C8A44D",
                  fontSize: "32px",
                  marginBottom: "20px",
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  color: "#bfbfbf",
                  fontSize: "20px",
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
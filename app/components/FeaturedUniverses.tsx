import Link from "next/link";

const universes = [
  {
    title: "إيسان إيثان",
    subtitle: "الملك بلا عرش",
    href: "/universes",
  },
  {
    title: "قريبًا...",
    subtitle: "عالم جديد",
    href: "/universes",
  },
  {
    title: "قريبًا...",
    subtitle: "عالم جديد",
    href: "/universes",
  },
];

export default function FeaturedUniverses() {
  return (
    <section
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
        العوالم
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
          gap: "35px",
          maxWidth: "1400px",
          margin: "auto",
        }}
      >
        {universes.map((item) => (
          <Link
            key={item.title}
            href={item.href}
            style={{
              textDecoration: "none",
            }}
          >
            <div
              style={{
                background: "#161616",
                border: "1px solid rgba(200,164,77,.2)",
                borderRadius: "18px",
                padding: "40px",
                transition: ".3s",
                cursor: "pointer",
                minHeight: "220px",
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
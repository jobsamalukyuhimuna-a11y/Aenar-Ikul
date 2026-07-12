import Link from "next/link";

type FeaturedCardProps = {
  title: string;
  description: string;
  href: string;
};

export default function FeaturedCard({
  title,
  description,
  href,
}: FeaturedCardProps) {
  return (
    <Link
      href={href}
      style={{
        textDecoration: "none",
        color: "inherit",
      }}
    >
      <div
        style={{
          background: "#1a1a1a",
          border: "1px solid #2a2a2a",
          borderRadius: "16px",
          padding: "24px",
          width: "320px",
          cursor: "pointer",
          transition: "0.3s",
        }}
      >
        <h2
          style={{
            color: "#C8A44D",
            marginBottom: "16px",
          }}
        >
          {title}
        </h2>

        <p
          style={{
            color: "#bdbdbd",
            lineHeight: "28px",
          }}
        >
          {description}
        </p>
      </div>
    </Link>
  );
}
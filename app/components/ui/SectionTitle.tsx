type SectionTitleProps = {
  title: string;
  subtitle?: string;
};

export default function SectionTitle({
  title,
  subtitle,
}: SectionTitleProps) {
  return (
    <div
      style={{
        marginBottom: "50px",
      }}
    >
      <h2
        style={{
          fontSize: "48px",
          color: "#C8A44D",
          marginBottom: "10px",
          letterSpacing: "2px",
        }}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          style={{
            color: "#888",
            fontSize: "18px",
            maxWidth: "700px",
            lineHeight: "30px",
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
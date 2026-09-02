type Props = {
  description?: string | null;
};

export default function CelestialBiography({
  description,
}: Props) {
  return (
    <section
      className="biography"
      style={{
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      <div
        className="biography-header"
        style={{
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        <span className="line" />

        <h2>Biography</h2>

        <span className="line" />
      </div>

      <div
        className="biography-card"
        style={{
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        <p>
          {description || "No biography available."}
        </p>
      </div>
    </section>
  );
}
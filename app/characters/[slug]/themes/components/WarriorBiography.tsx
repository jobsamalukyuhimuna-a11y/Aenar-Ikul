type Props = {
  description?: string | null;
};

export default function WarriorBiography({
  description,
}: Props) {
  return (
    <section
      className="warrior-biography"
      style={{
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      <div
        className="warrior-section-title"
        style={{
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        <span className="warrior-line" />

        <h2>Biography</h2>

        <span className="warrior-line" />
      </div>

      <div
        className="warrior-biography-card"
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
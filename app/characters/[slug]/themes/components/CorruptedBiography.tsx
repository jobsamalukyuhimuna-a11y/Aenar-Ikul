"use client";

type Props = {
  description?: string | null;
};

export default function CorruptedBiography({
  description,
}: Props) {
  return (
    <section
      className="corrupted-biography"
      style={{
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      <div
        className="biography-divider"
        aria-hidden="true"
      />

      <h2>CHRONICLE</h2>

      <p
        style={{
          width: "100%",
          boxSizing: "border-box",
          overflowWrap: "break-word",
          wordBreak: "normal",
        }}
      >
        {description ||
          "No chronicle has been written for this corrupted soul."}
      </p>
    </section>
  );
}
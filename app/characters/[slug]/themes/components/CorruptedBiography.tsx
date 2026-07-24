"use client";

type Props = {
  description?: string | null;
};

export default function CorruptedBiography({
  description,
}: Props) {
  return (
    <section className="corrupted-biography">

      <div className="biography-divider" />

      <h2>CHRONICLE</h2>

      <p>
        {description ||
          "No chronicle has been written for this corrupted soul."}
      </p>

    </section>
  );
}
"use client";

type Props = {
  description?: string | null;
};

export default function AncientBiography({
  description,
}: Props) {
  return (
    <section className="ancient-biography">

      <div className="ancient-biography-title">

        <div className="title-glow" />

        <h2>
          The Eternal Chronicle
        </h2>

        <p>
          Preserved within the archives of the First Civilization
        </p>

      </div>

      <div className="ancient-scroll">

        <div className="scroll-light" />

        <div className="scroll-runes" />

        <div className="scroll-content">

          {description ? (
            description
              .split("\n")
              .filter((text) => text.trim() !== "")
              .map((paragraph, index) => (
                <p key={index}>
                  {paragraph}
                </p>
              ))
          ) : (
            <p>
              The ancient archives remain silent.
              No surviving records have ever revealed
              the true history of this legendary soul.
            </p>
          )}

        </div>

      </div>

    </section>
  );
}
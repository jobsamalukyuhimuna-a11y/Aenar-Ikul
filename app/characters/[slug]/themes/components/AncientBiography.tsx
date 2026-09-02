"use client";

type Props = {
  description?: string | null;
};

export default function AncientBiography({
  description,
}: Props) {
  const paragraphs = description
    ? description
        .split("\n")
        .map((text) => text.trim())
        .filter((text) => text !== "")
    : [];

  return (
    <section
      className="ancient-biography"
      style={{
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      <div
        className="ancient-biography-title"
        style={{
          width: "100%",
          maxWidth: "100%",
          boxSizing: "border-box",
          textAlign: "center",
        }}
      >
        <div
          className="title-glow"
          aria-hidden="true"
        />

        <h2
          style={{
            margin: 0,
            maxWidth: "100%",
            overflowWrap: "break-word",
            wordBreak: "break-word",
          }}
        >
          The Eternal Chronicle
        </h2>

        <p
          style={{
            maxWidth: "100%",
            overflowWrap: "break-word",
            wordBreak: "break-word",
          }}
        >
          Preserved within the archives of the First Civilization
        </p>
      </div>

      <div
        className="ancient-scroll"
        style={{
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        <div
          className="scroll-light"
          aria-hidden="true"
        />

        <div
          className="scroll-runes"
          aria-hidden="true"
        />

        <div
          className="scroll-content"
          style={{
            width: "100%",
            boxSizing: "border-box",
          }}
        >
          {paragraphs.length > 0 ? (
            paragraphs.map((paragraph, index) => (
              <p
                key={index}
                style={{
                  maxWidth: "100%",
                  overflowWrap: "break-word",
                  wordBreak: "normal",
                  boxSizing: "border-box",
                }}
              >
                {paragraph}
              </p>
            ))
          ) : (
            <p
              style={{
                maxWidth: "100%",
                overflowWrap: "break-word",
                boxSizing: "border-box",
              }}
            >
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
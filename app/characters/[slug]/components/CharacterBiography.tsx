type Character = {
  description: string | null;
};

type Props = {
  character: Character;
};

export default function CharacterBiography({
  character,
}: Props) {
  return (
    <section
      style={{
        marginTop: "70px",
        background: "rgba(17,17,17,.75)",
        border: "1px solid rgba(200,164,77,.25)",
        borderRadius: "20px",
        padding: "45px",
        backdropFilter: "blur(12px)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "220px",
          height: "2px",
          background:
            "linear-gradient(to right,transparent,rgba(215,181,109,.8),transparent)",
        }}
      />

      <h2
        style={{
          color: "#d7b56d",
          fontSize: "38px",
          fontFamily: "Cinzel, serif",
          fontWeight: 400,
          textAlign: "center",
          marginBottom: "30px",
        }}
      >
        Biography
      </h2>

      <p
        style={{
          color: "#d0d0d0",
          fontSize: "18px",
          lineHeight: 2.1,
          textAlign: "center",
          whiteSpace: "pre-wrap",
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        {character.description || "No biography available."}
      </p>
    </section>
  );
}
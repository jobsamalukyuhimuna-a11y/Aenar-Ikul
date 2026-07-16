type Character = {
  music: string | null;
};

type Props = {
  character: Character;
};

export default function CharacterTheme({ character }: Props) {
  if (!character.music) {
    return null;
  }

  return (
    <section
      style={{
        maxWidth: "900px",
        margin: "0 auto 60px",
        padding: "35px",
        borderRadius: "22px",
        border: "2px solid rgba(215,181,109,.35)",
        background:
          "linear-gradient(180deg,rgba(65,45,18,.65),rgba(18,18,18,.92))",
        boxShadow: "0 0 40px rgba(215,181,109,.18)",
        textAlign: "center",
      }}
    >
      <div
        style={{
          fontSize: "54px",
          marginBottom: "15px",
        }}
      >
        🎼
      </div>

      <h2
        style={{
          color: "#f0d28d",
          fontSize: "34px",
          fontFamily: "Cinzel, serif",
          fontWeight: 400,
          marginBottom: "12px",
        }}
      >
        Character Theme
      </h2>

      <p
        style={{
          color: "#c7a45a",
          letterSpacing: "4px",
          fontSize: "14px",
          marginBottom: "28px",
        }}
      >
        THE OFFICIAL SOUNDTRACK
      </p>

      <audio
        controls
        controlsList="nodownload"
        src={character.music}
        style={{
          width: "100%",
        }}
      />
    </section>
  );
}
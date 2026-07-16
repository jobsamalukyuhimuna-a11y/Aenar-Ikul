type Music = {
  id: string | number;
  name: string | null;
  file: string;
};

type Props = {
  character: {
    musics: Music[];
  };
};

export default function CharacterMusic({ character }: Props) {
  if (character.musics.length === 0) {
    return null;
  }

  return (
    <section
      style={{
        marginTop: "70px",
        background: "rgba(17,17,17,.75)",
        border: "1px solid rgba(200,164,77,.25)",
        borderRadius: "20px",
        padding: "45px",
      }}
    >
      <h2
        style={{
          color: "#d7b56d",
          fontSize: "38px",
          fontFamily: "Cinzel, serif",
          fontWeight: 400,
          textAlign: "center",
          marginBottom: "35px",
        }}
      >
        Additional Music
      </h2>

      {character.musics.map((music) => (
        <div
          key={music.id}
          style={{
            marginBottom: "30px",
            padding: "25px",
            border: "1px solid rgba(215,181,109,.25)",
            borderRadius: "16px",
            background:
              "linear-gradient(180deg,rgba(65,45,18,.35),rgba(20,20,20,.8))",
            textAlign: "center",
          }}
        >
          {music.name && (
            <h3
              style={{
                color: "#d7b56d",
                marginBottom: "18px",
                fontWeight: 400,
                fontFamily: "Cinzel, serif",
                fontSize: "26px",
              }}
            >
              {music.name}
            </h3>
          )}

          <audio
            controls
            controlsList="nodownload"
            src={music.file}
            style={{
              width: "100%",
            }}
          />
        </div>
      ))}
    </section>
  );
}
type Props = {
  title: string;
  music?: string | null;
};

export default function DarkHeader({
  title,
  music,
}: Props) {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "35px",
        borderRadius: "25px",
        border:
          "1px solid rgba(215,181,109,.25)",
        background:
          "rgba(0,0,0,.35)",
      }}
    >
      <p
        style={{
          color:"#777",
          letterSpacing:"4px",
          fontSize:"12px",
        }}
      >
        CHARACTER THEME
      </p>

      <h1
        style={{
          fontFamily:"Cinzel,serif",
          color:"#f2dfb4",
          fontSize:"42px",
          letterSpacing:"5px",
          marginTop:"15px",
        }}
      >
        {title}
      </h1>


      {music && (
        <p
          style={{
            color:"#d7b56d",
            marginTop:"20px",
          }}
        >
          ♫ Theme Available
        </p>
      )}

    </div>
  );
}
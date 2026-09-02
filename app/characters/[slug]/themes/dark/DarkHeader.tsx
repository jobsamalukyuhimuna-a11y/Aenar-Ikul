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
        width: "100%",
        minWidth: 0,
        padding: "clamp(20px, 4vw, 35px)",
        borderRadius: "clamp(18px, 3vw, 25px)",
        border:
          "1px solid rgba(215,181,109,.25)",
        background:
          "rgba(0,0,0,.35)",
        boxSizing: "border-box",
        overflow: "hidden",
        textAlign: "center",
      }}
    >
      <p
        style={{
          margin: 0,
          color: "#777",
          letterSpacing:
            "clamp(2px, .6vw, 4px)",
          fontSize:
            "clamp(9px, 1.8vw, 12px)",
          lineHeight: 1.5,
          overflowWrap: "break-word",
        }}
      >
        CHARACTER THEME
      </p>

      <h1
        style={{
          margin:
            "clamp(10px, 2vw, 15px) 0 0",
          fontFamily: "Cinzel,serif",
          color: "#f2dfb4",
          fontSize:
            "clamp(24px, 6vw, 42px)",
          lineHeight: 1.2,
          letterSpacing:
            "clamp(1px, .7vw, 5px)",
          overflowWrap: "break-word",
          wordBreak: "break-word",
        }}
      >
        {title || "CHARACTER"}
      </h1>

      {music && (
        <p
          style={{
            margin:
              "clamp(14px, 3vw, 20px) 0 0",
            color: "#d7b56d",
            fontSize:
              "clamp(12px, 2vw, 16px)",
            lineHeight: 1.5,
            overflowWrap: "break-word",
          }}
        >
          ♫ Theme Available
        </p>
      )}
    </div>
  );
}
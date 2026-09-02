type Props = {
  name: string | null;
  title: string | null;
  quote: string | null;
};

export default function DarkGallery({
  name,
  title,
  quote,
}: Props) {
  return (
    <aside
      style={{
        width: "100%",
        minWidth: 0,
        padding: "clamp(18px, 3vw, 35px)",
        borderRadius:
          "clamp(20px, 3vw, 30px)",
        background:
          "linear-gradient(180deg,rgba(35,20,60,.85),rgba(5,5,10,.85))",
        border:
          "1px solid rgba(150,90,255,.35)",
        boxShadow:
          "0 0 40px rgba(100,40,200,.2)",
        textAlign: "center",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        boxSizing: "border-box",
        overflow: "hidden",
      }}
    >
      <p
        style={{
          margin: 0,
          color: "#9674ff",
          letterSpacing:
            "clamp(2px, .6vw, 5px)",
          fontSize:
            "clamp(10px, 1.7vw, 12px)",
          lineHeight: 1.5,
        }}
      >
        CHARACTER
      </p>

      <h2
        style={{
          margin:
            "clamp(12px, 2vw, 20px) 0 0",
          fontFamily: "Cinzel,serif",
          color: "#eee6ff",
          fontSize:
            "clamp(21px, 4vw, 28px)",
          lineHeight: 1.3,
          letterSpacing:
            "clamp(1px, .4vw, 2px)",
          overflowWrap: "break-word",
          wordBreak: "break-word",
        }}
      >
        {name || "Unknown"}
      </h2>

      <h3
        style={{
          margin:
            "clamp(10px, 2vw, 15px) 0 0",
          color: "#b89cff",
          fontFamily: "Cinzel,serif",
          fontSize:
            "clamp(15px, 3vw, 18px)",
          lineHeight: 1.5,
          overflowWrap: "break-word",
          wordBreak: "break-word",
        }}
      >
        {title || "Unknown Title"}
      </h3>

      {quote && (
        <p
          style={{
            margin:
              "clamp(22px, 4vw, 35px) 0 0",
            color: "#ddd",
            fontSize:
              "clamp(14px, 2.5vw, 18px)",
            lineHeight: 2,
            fontStyle: "italic",
            overflowWrap: "break-word",
            wordBreak: "break-word",
          }}
        >
          ❝ {quote} ❞
        </p>
      )}
    </aside>
  );
}
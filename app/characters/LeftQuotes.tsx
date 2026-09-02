export default function LeftQuotes() {
  const quotes = [
    "Every soul carries a story the world has never heard.",
    "Legends begin where fear ends.",
    "The stars remember every promise ever spoken.",
    "Even the smallest light can challenge endless darkness.",
  ];

  return (
    <div
      style={{
        width: "100%",
        minWidth: 0,
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          textAlign: "center",
          marginBottom: "clamp(28px, 5vw, 40px)",
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            color: "#8f7750",
            letterSpacing: "clamp(2px, 1vw, 6px)",
            fontSize: "clamp(11px, 2vw, 14px)",
            lineHeight: 1.5,
          }}
        >
          ✦ ✦ ✦
        </div>

        <h2
          style={{
            color: "#e9d3a2",
            fontFamily: "Cinzel, serif",
            fontWeight: 400,
            fontSize: "clamp(24px, 4.5vw, 34px)",
            lineHeight: 1.2,
            letterSpacing: "clamp(2px, .8vw, 6px)",
            margin: "clamp(8px, 2vw, 12px) 0",
            textShadow: "0 0 18px rgba(215,181,109,.25)",
            overflowWrap: "break-word",
          }}
        >
          WHISPERS
        </h2>

        <div
          style={{
            width: "clamp(100px, 24vw, 170px)",
            maxWidth: "70%",
            height: "2px",
            margin: "0 auto",
            background:
              "linear-gradient(to right,transparent,#d7b56d,transparent)",
          }}
        />
      </div>

      {quotes.map((quote, index) => (
        <div
          key={index}
          style={{
            width: "100%",
            minWidth: 0,
            marginBottom: "clamp(20px, 4vw, 30px)",
            padding: "clamp(18px, 4vw, 24px)",
            border: "1px solid rgba(215,181,109,.25)",
            borderRadius: "clamp(14px, 3vw, 18px)",
            background: "rgba(255,255,255,.03)",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
            boxShadow: "0 0 20px rgba(215,181,109,.08)",
            boxSizing: "border-box",
          }}
        >
          <div
            style={{
              textAlign: "center",
              color: "#d7b56d",
              fontSize: "clamp(22px, 5vw, 28px)",
              lineHeight: 1,
              marginBottom: "clamp(9px, 2vw, 12px)",
            }}
          >
            ❝
          </div>

          <p
            style={{
              width: "100%",
              margin: 0,
              color: "#f2ead8",
              fontFamily: "Cormorant Garamond, serif",
              fontSize: "clamp(18px, 3.6vw, 28px)",
              fontStyle: "italic",
              lineHeight: 1.65,
              textAlign: "center",
              overflowWrap: "break-word",
              wordBreak: "normal",
              boxSizing: "border-box",
            }}
          >
            {quote}
          </p>

          <div
            style={{
              width: "clamp(70px, 20vw, 120px)",
              maxWidth: "60%",
              height: "1px",
              margin: "clamp(14px, 3vw, 18px) auto 0",
              background:
                "linear-gradient(to right,transparent,#d7b56d,transparent)",
            }}
          />

          <div
            style={{
              textAlign: "center",
              color: "#d7b56d",
              marginTop: "clamp(9px, 2vw, 12px)",
              fontSize: "clamp(13px, 2.5vw, 16px)",
            }}
          >
            ✦
          </div>
        </div>
      ))}
    </div>
  );
}
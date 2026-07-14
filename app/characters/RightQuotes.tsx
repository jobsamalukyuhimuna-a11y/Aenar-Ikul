export default function RightQuotes() {
  const quotes = [
    "A crown is earned, never inherited.",
    "Power without honor becomes tyranny.",
    "Kings are remembered by the hope they leave behind.",
    "Every throne carries the weight of countless destinies.",
  ];

  return (
    <div>
      <div
        style={{
          textAlign: "center",
          marginBottom: "40px",
        }}
      >
        <div
          style={{
            color: "#8f7750",
            letterSpacing: "6px",
            fontSize: "14px",
          }}
        >
          ✦ ✦ ✦
        </div>

        <h2
          style={{
            color: "#e9d3a2",
            fontFamily: "Cinzel, serif",
            fontWeight: 400,
            fontSize: "34px",
            letterSpacing: "6px",
            margin: "12px 0",
            textShadow: "0 0 18px rgba(215,181,109,.25)",
          }}
        >
          ROYAL WISDOM
        </h2>

        <div
          style={{
            width: "170px",
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
            marginBottom: "30px",
            padding: "24px",
            border: "1px solid rgba(215,181,109,.25)",
            borderRadius: "18px",
            background: "rgba(255,255,255,.03)",
            backdropFilter: "blur(8px)",
            boxShadow: "0 0 20px rgba(215,181,109,.08)",
          }}
        >
          <div
            style={{
              textAlign: "center",
              color: "#d7b56d",
              fontSize: "28px",
              marginBottom: "12px",
            }}
          >
            👑
          </div>

          <p
            style={{
              color: "#f2ead8",
              fontFamily: "Cormorant Garamond, serif",
              fontSize: "28px",
              fontStyle: "italic",
              lineHeight: 1.7,
              textAlign: "center",
              margin: 0,
            }}
          >
            {quote}
          </p>

          <div
            style={{
              width: "120px",
              height: "1px",
              margin: "18px auto 0",
              background:
                "linear-gradient(to right,transparent,#d7b56d,transparent)",
            }}
          />

          <div
            style={{
              textAlign: "center",
              color: "#d7b56d",
              marginTop: "12px",
              fontSize: "16px",
            }}
          >
            ✦
          </div>
        </div>
      ))}
    </div>
  );
}
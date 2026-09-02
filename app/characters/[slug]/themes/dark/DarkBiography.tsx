type Props = {
  description: string | null;
};

export default function DarkBiography({
  description,
}: Props) {
  return (
    <section
      style={{
        width: "100%",
        marginTop: "clamp(35px, 6vw, 70px)",
        padding: "clamp(20px, 5vw, 50px)",
        borderRadius: "clamp(20px, 3vw, 35px)",
        background:
          "linear-gradient(180deg,rgba(15,10,25,.9),rgba(5,5,10,.9))",
        border:
          "1px solid rgba(150,90,255,.25)",
        boxShadow:
          "0 0 50px rgba(100,40,200,.15)",
        boxSizing: "border-box",
        overflow: "hidden",
      }}
    >
      <h2
        style={{
          margin: 0,
          textAlign: "center",
          fontFamily: "Cinzel,serif",
          fontSize: "clamp(24px, 5vw, 38px)",
          lineHeight: 1.3,
          letterSpacing: "clamp(1px, .6vw, 4px)",
          color: "#d8caff",
          overflowWrap: "break-word",
        }}
      >
        BIOGRAPHY
      </h2>

      <div
        style={{
          width: "clamp(60px, 12vw, 80px)",
          maxWidth: "60%",
          height: "2px",
          margin:
            "clamp(18px, 3vw, 25px) auto",
          background:
            "linear-gradient(90deg,transparent,#9674ff,transparent)",
        }}
      />

      <p
        style={{
          width: "100%",
          maxWidth: "1100px",
          margin:
            "clamp(20px, 4vw, 35px) auto 0",
          textAlign: "center",
          fontFamily: "Georgia,serif",
          fontSize: "clamp(15px, 2.5vw, 21px)",
          lineHeight: "2.2",
          color: "#ddd",
          overflowWrap: "break-word",
          wordBreak: "normal",
          whiteSpace: "pre-line",
          boxSizing: "border-box",
        }}
      >
        {description || "No biography available."}
      </p>

      <style jsx>{`
        @media (max-width: 700px) {
          section {
            text-align: left;
          }

          p {
            text-align: left !important;
            line-height: 1.95 !important;
          }
        }

        @media (max-width: 400px) {
          p {
            font-size: 15px !important;
            line-height: 1.85 !important;
          }
        }
      `}</style>
    </section>
  );
}
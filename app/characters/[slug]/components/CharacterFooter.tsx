export default function CharacterFooter() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
        marginTop: "80px",
        marginBottom: "30px",
      }}
    >
      <div
        style={{
          width: "160px",
          height: "1px",
          background:
            "linear-gradient(to right,transparent,rgba(215,181,109,.6))",
        }}
      />

      <div
        style={{
          fontSize: "28px",
          color: "#d7b56d",
        }}
      >
        ✦
      </div>

      <div
        style={{
          width: "160px",
          height: "1px",
          background:
            "linear-gradient(to left,transparent,rgba(215,181,109,.6))",
        }}
      />
    </div>
  );
}
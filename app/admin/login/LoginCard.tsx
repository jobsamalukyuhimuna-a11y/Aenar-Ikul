"use client";

type Props = {
  username: string;
  password: string;
  loading: boolean;
  message: string;
  setUsername: (value: string) => void;
  setPassword: (value: string) => void;
  handleLogin: () => void;
};

export default function LoginCard({
  username,
  password,
  loading,
  message,
  setUsername,
  setPassword,
  handleLogin,
}: Props) {
  return (
    <div
      style={{
        width: 500,
        maxWidth: "90%",
        padding: 55,
        borderRadius: 30,
        position: "relative",
        zIndex: 2,

        background:
          "linear-gradient(145deg, rgba(15,12,8,.55), rgba(0,0,0,.35))",

        border:
          "1px solid rgba(212,175,55,.75)",

        boxShadow:
          "0 0 80px rgba(212,175,55,.45), inset 0 0 50px rgba(212,175,55,.12)",

        backdropFilter:
          "blur(10px)",

        animation:
          "cardAppear 1.2s ease",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "#d4af37",
          fontSize: 46,
          fontFamily: "Cinzel, serif",
          letterSpacing: 5,
          marginBottom: 15,

          textShadow:
            "0 0 35px rgba(212,175,55,1)",
        }}
      >
        ADMIN
      </h1>

      <p
        style={{
          textAlign: "center",
          color: "#f1d98a",
          marginBottom: 40,
          letterSpacing: 3,
          fontSize: 16,
        }}
      >
        ENTER THE ARCHIVE
      </p>

      <input
        placeholder="Username"
        value={username}
        onChange={(e) =>
          setUsername(e.target.value)
        }
        style={{
          width: "100%",
          padding: 18,
          marginBottom: 20,

          borderRadius: 15,

          background:
            "rgba(0,0,0,.25)",

          border:
            "1px solid rgba(212,175,55,.55)",

          color: "white",
          fontSize: 17,
          outline: "none",
        }}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) =>
          setPassword(e.target.value)
        }
        style={{
          width: "100%",
          padding: 18,
          marginBottom: 25,

          borderRadius: 15,

          background:
            "rgba(0,0,0,.25)",

          border:
            "1px solid rgba(212,175,55,.55)",

          color: "white",
          fontSize: 17,
          outline: "none",
        }}
      />

      <button
        onClick={handleLogin}
        disabled={loading}
        style={{
          width: "100%",
          padding: 18,

          borderRadius: 15,

          border:
            "1px solid #ffe28a",

          background:
            "linear-gradient(90deg,#9c7418,#f1c94b,#9c7418)",

          color: "#050505",

          fontSize: 18,
          fontWeight: "bold",

          cursor: "pointer",

          letterSpacing: 3,

          boxShadow:
            "0 0 45px rgba(212,175,55,.8)",
        }}
      >
        {loading
          ? "ENTERING..."
          : "ENTER THE LIBRARY"}
      </button>

      {message && (
        <p
          style={{
            marginTop: 25,
            textAlign: "center",
            color: "#ff8b8b",
          }}
        >
          {message}
        </p>
      )}
    </div>
  );
}
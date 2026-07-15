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
        padding: 45,
        borderRadius: 30,
        position: "relative",
        zIndex: 2,

        background:
          "linear-gradient(145deg, rgba(15,12,8,.65), rgba(0,0,0,.45))",

        border:
          "1px solid rgba(212,175,55,.75)",

        boxShadow:
          "0 0 80px rgba(212,175,55,.55), inset 0 0 40px rgba(212,175,55,.15)",

        backdropFilter:
          "blur(12px)",
      }}
    >

      {/* Golden Galaxy Symbol */}
      <div
        style={{
          textAlign: "center",
          marginBottom: 25,
          color: "#d4af37",
        }}
      >

        <div
          style={{
            width: 120,
            height: 2,
            margin: "0 auto 15px",
            background:
              "linear-gradient(90deg, transparent,#d4af37,transparent)",
          }}
        />

        <div
          style={{
            fontSize: 32,
            textShadow:
              "0 0 30px #d4af37",
          }}
        >
          ✦
        </div>

        <div
          style={{
            width: 80,
            height: 80,
            borderRadius: "50%",
            margin: "10px auto",
            border:
              "1px solid rgba(212,175,55,.5)",
            boxShadow:
              "0 0 35px rgba(212,175,55,.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#ffe28a",
            fontSize: 28,
          }}
        >
          ☄
        </div>

        <div
          style={{
            width: 120,
            height: 2,
            margin: "15px auto 0",
            background:
              "linear-gradient(90deg, transparent,#d4af37,transparent)",
          }}
        />

      </div>


      <div
        style={{
          textAlign: "center",
          marginBottom: 30,
        }}
      >

        <h1
          style={{
            color: "#f1d98a",
            fontSize: 28,
            fontFamily:
              "Cinzel, serif",
            letterSpacing: 2,
            marginBottom: 18,
            textShadow:
              "0 0 25px rgba(212,175,55,.9)",
          }}
        >
          To Anas...
        </h1>


        <p
          style={{
            color: "#e8d6a0",
            fontSize: 14,
            lineHeight: 1.9,
            fontFamily:
              "Georgia, serif",
          }}
        >
          Every line you drew and every word you wrote
          was proof that you never gave up.
          <br /><br />

          The world may not see the battles you overcame,
          but I saw your determination.
          <br /><br />

          Keep creating your worlds.
        </p>


        <div
          style={{
            margin: "22px auto",
            width: "65%",
            height: 1,
            background:
              "linear-gradient(90deg,transparent,#d4af37,transparent)",
          }}
        />


        <p
          style={{
            color:"#ffe28a",
            fontSize:16,
            lineHeight:1.8,
            fontFamily:
              "Cinzel, serif",
            textShadow:
              "0 0 20px rgba(212,175,55,.8)",
          }}
        >
          I believe in you.
          <br />
          I trust you.
          <br />
          I will always stand beside you.
        </p>

      </div>


      <input
        placeholder="Username"
        value={username}
        onChange={(e)=>setUsername(e.target.value)}
        style={{
          width:"100%",
          padding:16,
          marginBottom:18,
          borderRadius:14,
          background:"rgba(0,0,0,.35)",
          border:"1px solid rgba(212,175,55,.5)",
          color:"white",
          fontSize:16,
          outline:"none",
        }}
      />


      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        style={{
          width:"100%",
          padding:16,
          marginBottom:22,
          borderRadius:14,
          background:"rgba(0,0,0,.35)",
          border:"1px solid rgba(212,175,55,.5)",
          color:"white",
          fontSize:16,
          outline:"none",
        }}
      />


      <button
        onClick={handleLogin}
        disabled={loading}
        style={{
          width:"100%",
          padding:16,
          borderRadius:14,
          border:"1px solid #ffe28a",
          background:
            "linear-gradient(90deg,#9c7418,#f1c94b,#9c7418)",
          color:"#050505",
          fontSize:17,
          fontWeight:"bold",
          cursor:"pointer",
          letterSpacing:2,
          boxShadow:
            "0 0 40px rgba(212,175,55,.8)",
        }}
      >
        {loading
          ? "ENTERING..."
          : "ENTER THE LIBRARY"}
      </button>


      {message && (
        <p
          style={{
            marginTop:20,
            textAlign:"center",
            color:"#ff8b8b",
          }}
        >
          {message}
        </p>
      )}

    </div>
  );
}
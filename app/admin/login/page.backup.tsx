"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleLogin() {
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setMessage(data.message);
        setLoading(false);
        return;
      }

      localStorage.setItem("admin", JSON.stringify(data.admin));

      router.push("/admin");
    } catch {
      setMessage("Something went wrong.");
    }

    setLoading(false);
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background:
          "radial-gradient(circle at top,#2a1740 0%,#0b0b0b 45%,#050505 100%)",
      }}
    >
      <div
        style={{
          width: 500,
          padding: 50,
          borderRadius: 20,
          background: "rgba(20,20,20,.9)",
          border: "1px solid rgba(212,175,55,.3)",
        }}
      >
        <h1
          style={{
            color: "#d4af37",
            textAlign: "center",
            marginBottom: 40,
          }}
        >
          Admin Login
        </h1>

        <input
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{
            width: "100%",
            padding: 15,
            marginBottom: 20,
          }}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            width: "100%",
            padding: 15,
            marginBottom: 20,
          }}
        />

        <button
          onClick={handleLogin}
          disabled={loading}
          style={{
            width: "100%",
            padding: 16,
            cursor: "pointer",
          }}
        >
          {loading ? "Loading..." : "ENTER THE LIBRARY"}
        </button>

        {message && (
          <p
            style={{
              color: "red",
              marginTop: 20,
              textAlign: "center",
            }}
          >
            {message}
          </p>
        )}
      </div>
    </main>
  );
}
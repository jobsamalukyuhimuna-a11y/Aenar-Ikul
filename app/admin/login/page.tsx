"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import GalaxyBackground from "./GalaxyBackground";
import GoldenParticles from "./GoldenParticles";
import LoginCard from "./LoginCard";

import "./animations.css";

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

      localStorage.setItem(
        "admin",
        JSON.stringify(data.admin)
      );

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
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <GalaxyBackground />

      <GoldenParticles />

      <LoginCard
        username={username}
        password={password}
        loading={loading}
        message={message}
        setUsername={setUsername}
        setPassword={setPassword}
        handleLogin={handleLogin}
      />
    </main>
  );
}
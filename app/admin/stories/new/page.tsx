"use client";

import { useState } from "react";

export default function NewStoryPage() {
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [description, setDescription] = useState("");
  const [cover, setCover] = useState("");
  const [music, setMusic] = useState("");
  const [content, setContent] = useState("");

  async function saveStory() {
    const response = await fetch("/api/admin/stories", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        slug,
        description,
        cover,
        music,
        content,
      }),
    });

    const data = await response.json();

    alert(data.message);
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#090909",
        color: "white",
        padding: 60,
      }}
    >
      <h1
        style={{
          color: "#d4af37",
          fontSize: 46,
          marginBottom: 40,
        }}
      >
        Create New Story
      </h1>

      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={input}
      />

      <input
        placeholder="Slug"
        value={slug}
        onChange={(e) => setSlug(e.target.value)}
        style={input}
      />

      <input
        placeholder="Cover Image"
        value={cover}
        onChange={(e) => setCover(e.target.value)}
        style={input}
      />

      <input
        placeholder="Music File"
        value={music}
        onChange={(e) => setMusic(e.target.value)}
        style={input}
      />

      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        style={{
          ...input,
          height: 120,
        }}
      />

      <textarea
        placeholder="Story Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        style={{
          ...input,
          height: 350,
        }}
      />

      <button
        onClick={saveStory}
        style={{
          padding: "18px 35px",
          background: "#d4af37",
          color: "#111",
          border: "none",
          borderRadius: 10,
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        Save Story
      </button>
    </main>
  );
}

const input: React.CSSProperties = {
  width: "100%",
  marginBottom: 20,
  padding: 15,
  borderRadius: 10,
  border: "1px solid #555",
  background: "#151515",
  color: "white",
  fontSize: 16,
};
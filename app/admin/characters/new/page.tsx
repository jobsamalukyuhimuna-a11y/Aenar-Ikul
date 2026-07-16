"use client";

import { useState } from "react";

type CharacterMusic = {
  name: string;
  file: string;
};

export default function NewCharacterPage() {
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [title, setTitle] = useState("");
  const [kingdom, setKingdom] = useState("");
  const [race, setRace] = useState("");
  const [status, setStatus] = useState("");
  const [universe, setUniverse] = useState("");
  const [quote, setQuote] = useState("");
  const [description, setDescription] = useState("");

  // Main image
  const [image, setImage] = useState("");

  // Main music
  const [music, setMusic] = useState("");

  // Gallery
  const [images, setImages] = useState<string[]>([]);

  // Music list
  const [musics, setMusics] = useState<CharacterMusic[]>([]);

  const [uploadingImage, setUploadingImage] = useState(false);
  const [uploadingMusic, setUploadingMusic] = useState(false);

  async function uploadFile(
    file: File,
    type: "image" | "music"
  ) {
    const formData = new FormData();

    formData.append("file", file);
    formData.append("type", type);

    const response = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (!data.success) {
      throw new Error(data.message);
    }

    return data.url as string;
  }

  async function handleImageUpload(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    const file = e.target.files?.[0];

    if (!file) return;

    try {
      setUploadingImage(true);

      const url = await uploadFile(file, "image");

      setImage(url);
    } catch (error) {
      alert(
        error instanceof Error
          ? error.message
          : "Upload failed"
      );
    } finally {
      setUploadingImage(false);
    }
  }

  async function handleMusicUpload(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    const file = e.target.files?.[0];

    if (!file) return;

    try {
      setUploadingMusic(true);

      const url = await uploadFile(file, "music");

      setMusic(url);
    } catch (error) {
      alert(
        error instanceof Error
          ? error.message
          : "Upload failed"
      );
    } finally {
      setUploadingMusic(false);
    }
  }
    async function handleGalleryUpload(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    const files = e.target.files;

    if (!files || files.length === 0) return;

    try {
      setUploadingImage(true);

      const uploaded: string[] = [];

      for (const file of Array.from(files)) {
        const url = await uploadFile(file, "image");
        uploaded.push(url);
      }

      setImages((prev) => [...prev, ...uploaded]);
    } catch (error) {
      alert(
        error instanceof Error
          ? error.message
          : "Upload failed"
      );
    } finally {
      setUploadingImage(false);
    }
  }

  async function handleMusicListUpload(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    const files = e.target.files;

    if (!files || files.length === 0) return;

    try {
      setUploadingMusic(true);

      const uploaded: CharacterMusic[] = [];

      for (const file of Array.from(files)) {
        const url = await uploadFile(file, "music");

        uploaded.push({
          name: file.name,
          file: url,
        });
      }

      setMusics((prev) => [...prev, ...uploaded]);
    } catch (error) {
      alert(
        error instanceof Error
          ? error.message
          : "Upload failed"
      );
    } finally {
      setUploadingMusic(false);
    }
  }

  function removeGalleryImage(index: number) {
    setImages((prev) =>
      prev.filter((_, i) => i !== index)
    );
  }

  function removeMusic(index: number) {
    setMusics((prev) =>
      prev.filter((_, i) => i !== index)
    );
  }

  async function saveCharacter() {
    try {
      const response = await fetch(
        "/api/admin/characters",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            slug,
            title,
            kingdom,
            race,
            status,
            universe,
            quote,
            description,
            image,
            music,
            images,
            musics,
          }),
        }
      );

      const data = await response.json();

      alert(data.message);
    } catch {
      alert("Failed to save character.");
    }
  }
    return (
    <main
      style={{
        minHeight: "100vh",
        background: "#090909",
        color: "#fff",
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
        Create New Character
      </h1>

      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={input}
      />

      <input
        placeholder="Slug"
        value={slug}
        onChange={(e) => setSlug(e.target.value)}
        style={input}
      />

      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={input}
      />

      <input
        placeholder="Kingdom"
        value={kingdom}
        onChange={(e) => setKingdom(e.target.value)}
        style={input}
      />

      <input
        placeholder="Race"
        value={race}
        onChange={(e) => setRace(e.target.value)}
        style={input}
      />

      <input
        placeholder="Status"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        style={input}
      />

      <input
        placeholder="Universe"
        value={universe}
        onChange={(e) => setUniverse(e.target.value)}
        style={input}
      />

      <input
        placeholder="Quote"
        value={quote}
        onChange={(e) => setQuote(e.target.value)}
        style={input}
      />

      <label style={label}>
        Main Character Image
      </label>

      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        style={input}
      />

      {uploadingImage && (
        <p>Uploading image...</p>
      )}

      {image && (
        <p style={{ marginBottom: 20 }}>
          {image}
        </p>
      )}

      <label style={label}>
        Gallery Images
      </label>

      <input
        type="file"
        accept="image/*"
        multiple
        onChange={handleGalleryUpload}
        style={input}
      />

      {images.map((img, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 10,
          }}
        >
          <span>{img}</span>

          <button
            type="button"
            onClick={() =>
              removeGalleryImage(index)
            }
          >
            Remove
          </button>
        </div>
      ))}

      <label style={label}>
        Main Music
      </label>

      <input
        type="file"
        accept="audio/*"
        onChange={handleMusicUpload}
        style={input}
      />

      {uploadingMusic && (
        <p>Uploading music...</p>
      )}

      {music && (
        <p style={{ marginBottom: 20 }}>
          {music}
        </p>
      )}
            <label style={label}>
        Additional Music
      </label>

      <input
        type="file"
        accept="audio/*"
        multiple
        onChange={handleMusicListUpload}
        style={input}
      />

      {musics.map((item, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 10,
          }}
        >
          <span>{item.name}</span>

          <button
            type="button"
            onClick={() => removeMusic(index)}
          >
            Remove
          </button>
        </div>
      ))}

      <textarea
        placeholder="Biography"
        value={description}
        onChange={(e) =>
          setDescription(e.target.value)
        }
        style={{
          ...input,
          height: 250,
        }}
      />

      <button
        onClick={saveCharacter}
        style={{
          padding: "18px 35px",
          background: "#d4af37",
          color: "#111",
          border: "none",
          borderRadius: 10,
          cursor: "pointer",
          fontWeight: "bold",
          fontSize: 18,
          marginTop: 20,
        }}
      >
        Save Character
      </button>
    </main>
  );
}
const label: React.CSSProperties = {
  display: "block",
  marginTop: 30,
  marginBottom: 8,
  color: "#d4af37",
  fontSize: 18,
  fontWeight: "bold",
};

const input: React.CSSProperties = {
  width: "100%",
  padding: 15,
  marginBottom: 20,
  borderRadius: 10,
  border: "1px solid #555",
  background: "#151515",
  color: "#ffffff",
  fontSize: 16,
  outline: "none",
  boxSizing: "border-box",
};
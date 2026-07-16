"use client";

import { useState } from "react";

export default function NewStoryPage() {
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [description, setDescription] = useState("");
  const [cover, setCover] = useState("");
  const [music, setMusic] = useState("");
  const [content, setContent] = useState("");

  const [uploadingImage, setUploadingImage] =
    useState(false);

  const [uploadingMusic, setUploadingMusic] =
    useState(false);

  async function uploadFile(
    file: File,
    type: "image" | "music"
  ) {
    if (!file) {
      throw new Error("No file selected");
    }

    const maxImageSize =
      10 * 1024 * 1024;

    const maxMusicSize =
      50 * 1024 * 1024;

    if (
      type === "image" &&
      file.size > maxImageSize
    ) {
      throw new Error(
        "Image is too large. Maximum size is 10MB."
      );
    }

    if (
      type === "music" &&
      file.size > maxMusicSize
    ) {
      throw new Error(
        "Music file is too large. Maximum size is 50MB."
      );
    }

    const formData = new FormData();

    formData.append(
      "file",
      file,
      file.name
    );

    formData.append(
      "type",
      type
    );

    const response = await fetch(
      "/api/upload",
      {
        method: "POST",
        body: formData,
      }
    );

    const data =
      await response.json();

    if (!response.ok || !data.success) {
      throw new Error(
        data.message ||
          "Upload failed."
      );
    }

    return data.url;
  }
    async function handleImageUpload(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    const file = e.target.files?.[0];

    if (!file) return;

    try {
      setUploadingImage(true);

      const url = await uploadFile(
        file,
        "image"
      );

      setCover(url);
    } catch (error) {
      alert(
        error instanceof Error
          ? error.message
          : "Image upload failed."
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

      const url = await uploadFile(
        file,
        "music"
      );

      setMusic(url);
    } catch (error) {
      alert(
        error instanceof Error
          ? error.message
          : "Music upload failed."
      );
    } finally {
      setUploadingMusic(false);
    }
  }

  async function saveStory() {
    if (
      !title ||
      !slug ||
      !description ||
      !cover ||
      !content
    ) {
      alert(
        "Please fill all required fields."
      );
      return;
    }

    try {
      const response = await fetch(
        "/api/admin/stories",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            title,
            slug,
            description,
            cover,
            music,
            content,
          }),
        }
      );

      const data =
        await response.json();

      alert(data.message);

      if (data.success) {
        setTitle("");
        setSlug("");
        setDescription("");
        setCover("");
        setMusic("");
        setContent("");
      }
    } catch {
      alert(
        "Failed to save story."
      );
    }
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#090909",
        color: "#ffffff",
        padding: "60px",
      }}
    >
      <h1
        style={{
          color: "#d7b56d",
          fontSize: 46,
          marginBottom: 40,
        }}
      >
        Create New Story
      </h1>
            <input
        placeholder="Title"
        value={title}
        onChange={(e) =>
          setTitle(e.target.value)
        }
        style={input}
      />

      <input
        placeholder="Slug"
        value={slug}
        onChange={(e) =>
          setSlug(e.target.value)
        }
        style={input}
      />

      <label style={label}>
        Cover Image
      </label>

      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        style={input}
      />

      {uploadingImage && (
        <p
          style={{
            marginBottom: 20,
          }}
        >
          Uploading image...
        </p>
      )}

      {cover && (
        <p
          style={{
            marginBottom: 25,
            color: "#8dd48d",
            wordBreak: "break-all",
          }}
        >
          {cover}
        </p>
      )}

      <label style={label}>
        Music File
      </label>

      <input
        type="file"
        accept="audio/*"
        onChange={handleMusicUpload}
        style={input}
      />

      {uploadingMusic && (
        <p
          style={{
            marginBottom: 20,
          }}
        >
          Uploading music...
        </p>
      )}

      {music && (
        <p
          style={{
            marginBottom: 25,
            color: "#8dd48d",
            wordBreak: "break-all",
          }}
        >
          {music}
        </p>
      )}

      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) =>
          setDescription(e.target.value)
        }
        style={{
          ...input,
          height: 120,
          resize: "vertical",
        }}
      />

      <textarea
        placeholder="Story Content"
        value={content}
        onChange={(e) =>
          setContent(e.target.value)
        }
        style={{
          ...input,
          height: 350,
          resize: "vertical",
        }}
      />
            <button
        type="button"
        onClick={saveStory}
        style={{
          padding: "18px 35px",
          background: "#d7b56d",
          color: "#111",
          border: "none",
          borderRadius: 10,
          cursor: "pointer",
          fontWeight: "bold",
          fontSize: 16,
        }}
      >
        Save Story
      </button>
    </main>
  );
}

const label: React.CSSProperties = {
  display: "block",
  marginTop: 25,
  marginBottom: 8,
  color: "#d7b56d",
  fontWeight: "bold",
  fontSize: 16,
};

const input: React.CSSProperties = {
  width: "100%",
  marginBottom: 20,
  padding: 15,
  borderRadius: 10,
  border: "1px solid #555",
  background: "#151515",
  color: "#ffffff",
  fontSize: 16,
};
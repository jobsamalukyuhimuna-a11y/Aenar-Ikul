"use client";

import { useEffect, useState } from "react";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default function EditStoryPage({
  params,
}: Props) {
  const [id, setId] = useState("");

  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [description, setDescription] =
    useState("");
  const [cover, setCover] = useState("");
  const [music, setMusic] = useState("");
  const [content, setContent] = useState("");

  const [loading, setLoading] =
    useState(true);

  const [uploadingImage, setUploadingImage] =
    useState(false);

  const [uploadingMusic, setUploadingMusic] =
    useState(false);

  useEffect(() => {
    async function init() {
      const p = await params;

      setId(p.id);

      const response = await fetch(
        `/api/admin/stories/${p.id}`
      );

      const data = await response.json();

      if (data.success) {
        const story = data.story;

        setTitle(story.title ?? "");
        setSlug(story.slug ?? "");
        setDescription(
          story.description ?? ""
        );
        setCover(story.cover ?? "");
        setMusic(story.music ?? "");
        setContent(story.content ?? "");
      }

      setLoading(false);
    }

    init();
  }, [params]);

  async function uploadFile(
    file: File,
    type: "image" | "music"
  ) {
    const formData = new FormData();

    formData.append("file", file);
    formData.append("type", type);

    const response = await fetch(
      "/api/upload",
      {
        method: "POST",
        body: formData,
      }
    );

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
    try {
      const response = await fetch(
        `/api/admin/stories/${id}`,
        {
          method: "PUT",
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
        }
      );

      const data = await response.json();

      alert(data.message);
    } catch {
      alert("Failed to update story.");
    }
  }

  if (loading) {
    return (
      <main
        style={{
          minHeight: "100vh",
          background: "#090909",
          color: "#ffffff",
          display: "grid",
          placeItems: "center",
        }}
      >
        Loading...
      </main>
    );
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#090909",
        color: "#ffffff",
        padding: 60,
      }}
    >
      <h1
        style={{
          color: "#d7b56d",
          fontSize: 46,
          marginBottom: 40,
        }}
      >
        Edit Story
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
        <p>Uploading image...</p>
      )}

      {cover && (
        <p
          style={{
            color: "#999",
            marginBottom: 20,
            wordBreak: "break-all",
          }}
        >
          {cover}
        </p>
      )}
            <label style={label}>
        Theme Music
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
        <p
          style={{
            color: "#999",
            marginBottom: 20,
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
          height: 140,
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
          height: 420,
        }}
      />

      <button
        type="button"
        onClick={saveStory}
        style={{
          width: "100%",
          padding: "18px",
          marginTop: 20,
          border: "none",
          borderRadius: 10,
          background: "#d7b56d",
          color: "#111",
          fontSize: 17,
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        Save Changes
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
  color: "#fff",
  fontSize: 16,
  outline: "none",
};
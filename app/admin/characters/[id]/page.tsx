"use client";

import { useEffect, useState } from "react";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

type MusicItem = {
  name: string;
  file: string;
};

export default function EditCharacterPage({
  params,
}: Props) {
  const [id, setId] = useState("");

  const [loading, setLoading] = useState(true);

  const [uploadingImage, setUploadingImage] =
    useState(false);

  const [uploadingMusic, setUploadingMusic] =
    useState(false);

  const [name, setName] = useState("");

  const [slug, setSlug] = useState("");

  const [title, setTitle] = useState("");

  const [kingdom, setKingdom] =
    useState("");

  const [race, setRace] =
    useState("");

  const [status, setStatus] =
    useState("");

  const [universe, setUniverse] =
    useState("");

  const [quote, setQuote] =
    useState("");

  const [description, setDescription] =
    useState("");

  const [profileStyle, setProfileStyle] =
    useState("royal");

  const [image, setImage] =
    useState("");

  const [music, setMusic] =
    useState("");

  const [images, setImages] =
    useState<string[]>([]);

  const [musics, setMusics] =
    useState<MusicItem[]>([]);

  useEffect(() => {
    async function loadCharacter() {
      const p = await params;

      setId(p.id);

      const response = await fetch(
        `/api/admin/characters/${p.id}`
      );

      const data =
        await response.json();

      if (data.success) {
        const c = data.character;

        setName(c.name ?? "");
        setSlug(c.slug ?? "");
        setTitle(c.title ?? "");

        setKingdom(c.kingdom ?? "");
        setRace(c.race ?? "");
        setStatus(c.status ?? "");
        setUniverse(c.universe ?? "");

        setQuote(c.quote ?? "");

        setDescription(
          c.description ?? ""
        );

        setImage(c.image ?? "");

        setMusic(c.music ?? "");

        setProfileStyle(
          c.profileStyle ?? "royal"
        );

        setImages(
          (c.images ?? []).map(
            (img: {
              image: string;
            }) => img.image
          )
        );

        setMusics(
          (c.musics ?? []).map(
            (item: {
              name: string | null;
              file: string;
            }) => ({
              name: item.name ?? "",
              file: item.file,
            })
          )
        );
      }

      setLoading(false);
    }

    loadCharacter();
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

    const data =
      await response.json();

    if (!data.success) {
      throw new Error(data.message);
    }

    return data.url as string;
  }

  async function handleImageUpload(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    const file =
      e.target.files?.[0];

    if (!file) return;

    try {
      setUploadingImage(true);

      const url =
        await uploadFile(
          file,
          "image"
        );

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
    const file =
      e.target.files?.[0];

    if (!file) return;

    try {
      setUploadingMusic(true);

      const url =
        await uploadFile(
          file,
          "music"
        );

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

    if (!files?.length) return;

    try {
      setUploadingImage(true);

      const uploaded: string[] = [];

      for (const file of Array.from(files)) {
        const url = await uploadFile(
          file,
          "image"
        );

        uploaded.push(url);
      }

      setImages((prev) => [
        ...prev,
        ...uploaded,
      ]);
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

    if (!files?.length) return;

    try {
      setUploadingMusic(true);

      const uploaded: MusicItem[] = [];

      for (const file of Array.from(files)) {
        const url = await uploadFile(
          file,
          "music"
        );

        uploaded.push({
          name: file.name,
          file: url,
        });
      }

      setMusics((prev) => [
        ...prev,
        ...uploaded,
      ]);
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

  function removeGalleryImage(
    index: number
  ) {
    setImages((prev) =>
      prev.filter(
        (_, i) => i !== index
      )
    );
  }

  function removeMusic(
    index: number
  ) {
    setMusics((prev) =>
      prev.filter(
        (_, i) => i !== index
      )
    );
  }

  async function saveCharacter() {
    try {
      const response = await fetch(
        `/api/admin/characters/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type":
              "application/json",
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
            profileStyle,
            image,
            music,
            images,
            musics,
          }),
        }
      );

      const data =
        await response.json();

      alert(data.message);
    } catch {
      alert(
        "Failed to save character."
      );
    }
  }

  if (loading) {
    return (
      <main
        style={{
          minHeight: "100vh",
          background: "#090909",
          color: "#fff",
          display: "grid",
          placeItems: "center",
          fontSize: 30,
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
        background:
          "radial-gradient(circle at top,#2b1740,#050505)",
        color: "#fff",
        padding: 60,
      }}
    >
      <div
        style={{
          maxWidth: 1000,
          margin: "0 auto",
        }}
      >
        <h1
          style={{
            color: "#d4af37",
            fontSize: 48,
            marginBottom: 40,
            fontFamily:
              "Cinzel, serif",
          }}
        >
          Edit Character
        </h1>
                <input
          placeholder="Name"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
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

        <input
          placeholder="Title"
          value={title}
          onChange={(e) =>
            setTitle(e.target.value)
          }
          style={input}
        />

        <input
          placeholder="Kingdom"
          value={kingdom}
          onChange={(e) =>
            setKingdom(e.target.value)
          }
          style={input}
        />

        <input
          placeholder="Race"
          value={race}
          onChange={(e) =>
            setRace(e.target.value)
          }
          style={input}
        />

        <input
          placeholder="Status"
          value={status}
          onChange={(e) =>
            setStatus(e.target.value)
          }
          style={input}
        />

        <input
          placeholder="Universe"
          value={universe}
          onChange={(e) =>
            setUniverse(e.target.value)
          }
          style={input}
        />

        <input
          placeholder="Quote"
          value={quote}
          onChange={(e) =>
            setQuote(e.target.value)
          }
          style={input}
        />

        <label style={label}>
          Internal Profile Design
        </label>

        <select
          value={profileStyle}
          onChange={(e) =>
            setProfileStyle(
              e.target.value
            )
          }
          style={input}
        >
          <option value="royal">
            👑 Royal
          </option>

          <option value="dark">
            🖤 Dark
          </option>

          <option value="warrior">
            ⚔ Warrior
          </option>

          <option value="demon">
            🔥 Demon
          </option>

          <option value="ancient">
            📜 Ancient
          </option>

          <option value="celestial">
            ✨ Celestial
          </option>

          <option value="corrupted">
            ☠ Corrupted
          </option>
        </select>

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
          <p
            style={{
              color: "#999",
              marginBottom: 20,
              wordBreak: "break-all",
            }}
          >
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
              padding: 12,
              marginBottom: 10,
              borderRadius: 10,
              background: "#161616",
            }}
          >
            <span
              style={{
                wordBreak: "break-all",
              }}
            >
              {img}
            </span>

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
              padding: 12,
              marginBottom: 10,
              borderRadius: 10,
              background: "#161616",
            }}
          >
            <span>
              {item.name}
            </span>

            <button
              type="button"
              onClick={() =>
                removeMusic(index)
              }
            >
              Remove
            </button>
          </div>
        ))}

        <textarea
          placeholder="Biography"
          value={description}
          onChange={(e) =>
            setDescription(
              e.target.value
            )
          }
          style={{
            ...input,
            height: 260,
            resize: "vertical",
          }}
        />

        <button
          onClick={saveCharacter}
          style={{
            width: "100%",
            padding: 18,
            marginTop: 30,
            border: "none",
            borderRadius: 12,
            background: "#d4af37",
            color: "#111",
            cursor: "pointer",
            fontWeight: "bold",
            fontSize: 18,
          }}
        >
          Save Changes
        </button>

      </div>
    </main>
  );
}
const label: React.CSSProperties = {
  display: "block",
  marginTop: 25,
  marginBottom: 8,
  color: "#d4af37",
  fontSize: 17,
  fontWeight: "bold",
};

const input: React.CSSProperties = {
  width: "100%",
  padding: 15,
  marginBottom: 20,
  borderRadius: 10,
  border: "1px solid #555",
  background: "#151515",
  color: "#fff",
  fontSize: 16,
  outline: "none",
  boxSizing: "border-box",
};
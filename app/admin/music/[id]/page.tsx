"use client";

import { useEffect, useState } from "react";

type MusicData = {
  id: number;
  name: string;
  file: string;
  cover: string;
  artist: string | null;
  genre: string | null;
  description: string | null;
  translation: string | null;
  duration: number | null;
  pageStyle: string | null;
};

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default function EditMusicPage({
  params,
}: Props) {
  const [musicId, setMusicId] =
    useState<number | null>(null);

  const [loading, setLoading] =
    useState(true);

  const [saving, setSaving] =
    useState(false);

  const [uploadingMusic, setUploadingMusic] =
    useState(false);

  const [uploadingCover, setUploadingCover] =
    useState(false);

  const [name, setName] = useState("");
  const [artist, setArtist] = useState("");
  const [genre, setGenre] = useState("");

  const [description, setDescription] =
    useState("");

  const [translation, setTranslation] =
    useState("");

  const [selectedPageStyle, setSelectedPageStyle] =
    useState("");

  const [file, setFile] = useState("");
  const [cover, setCover] = useState("");

  const [duration, setDuration] =
    useState<number | null>(null);

  useEffect(() => {
    let active = true;

    async function loadMusic() {
      try {
        const resolvedParams =
          await params;

        const id = Number(
          resolvedParams.id
        );

        if (!Number.isInteger(id)) {
          throw new Error(
            "Invalid music ID."
          );
        }

        if (active) {
          setMusicId(id);
        }

        const response = await fetch(
          `/api/admin/music/${id}`,
          {
            method: "GET",
            cache: "no-store",
          }
        );

        const data =
          await response.json();

        if (
          !response.ok ||
          !data.success ||
          !data.music
        ) {
          throw new Error(
            data.message ||
              "Failed to load music."
          );
        }

        const item =
          data.music as MusicData;

        if (!active) {
          return;
        }

        setName(item.name || "");
        setFile(item.file || "");
        setCover(item.cover || "");
        setArtist(item.artist || "");
        setGenre(item.genre || "");

        setDescription(
          item.description || ""
        );

        setTranslation(
          item.translation || ""
        );

        setDuration(
          item.duration ?? null
        );

        setSelectedPageStyle(
          item.pageStyle || ""
        );
      } catch (error) {
        alert(
          error instanceof Error
            ? error.message
            : "Failed to load music."
        );
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    }

    loadMusic();

    return () => {
      active = false;
    };
  }, [params]);

  async function uploadFile(
    selectedFile: File,
    type: "image" | "music"
  ) {
    if (!selectedFile) {
      throw new Error(
        "No file selected."
      );
    }

    const maxImageSize =
      10 * 1024 * 1024;

    const maxMusicSize =
      50 * 1024 * 1024;

    if (
      type === "image" &&
      selectedFile.size >
        maxImageSize
    ) {
      throw new Error(
        "Image is too large. Maximum size is 10MB."
      );
    }

    if (
      type === "music" &&
      selectedFile.size >
        maxMusicSize
    ) {
      throw new Error(
        "Music file is too large. Maximum size is 50MB."
      );
    }

    const formData =
      new FormData();

    formData.append(
      "file",
      selectedFile,
      selectedFile.name
    );

    formData.append(
      "type",
      type
    );

    const response =
      await fetch(
        "/api/upload",
        {
          method: "POST",
          body: formData,
        }
      );

    const data =
      await response.json();

    if (
      !response.ok ||
      !data.success
    ) {
      throw new Error(
        data.message ||
          "Upload failed."
      );
    }

    return data.url as string;
  }

  function readAudioDuration(
    selectedFile: File
  ) {
    return new Promise<number>(
      (resolve, reject) => {
        const audio =
          document.createElement(
            "audio"
          );

        const objectUrl =
          URL.createObjectURL(
            selectedFile
          );

        audio.preload = "metadata";
        audio.src = objectUrl;

        audio.onloadedmetadata =
          () => {
            const value =
              audio.duration;

            URL.revokeObjectURL(
              objectUrl
            );

            if (
              !Number.isFinite(value) ||
              value <= 0
            ) {
              reject(
                new Error(
                  "Could not read the music duration."
                )
              );

              return;
            }

            resolve(
              Math.round(value)
            );
          };

        audio.onerror = () => {
          URL.revokeObjectURL(
            objectUrl
          );

          reject(
            new Error(
              "Could not read the music file."
            )
          );
        };
      }
    );
  }

  async function handleMusicChange(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    const selectedFile =
      event.target.files?.[0];

    if (!selectedFile) {
      return;
    }

    try {
      setUploadingMusic(true);

      const detectedDuration =
        await readAudioDuration(
          selectedFile
        );

      const url =
        await uploadFile(
          selectedFile,
          "music"
        );

      setFile(url);

      setDuration(
        detectedDuration
      );
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

  async function handleCoverChange(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    const selectedFile =
      event.target.files?.[0];

    if (!selectedFile) {
      return;
    }

    try {
      setUploadingCover(true);

      const url =
        await uploadFile(
          selectedFile,
          "image"
        );

      setCover(url);
    } catch (error) {
      alert(
        error instanceof Error
          ? error.message
          : "Cover upload failed."
      );
    } finally {
      setUploadingCover(false);
    }
  }

  function formatDuration(
    value: number | null
  ) {
    if (
      value === null ||
      !Number.isFinite(value) ||
      value < 0
    ) {
      return "--:--";
    }

    const totalSeconds =
      Math.floor(value);

    const minutes =
      Math.floor(
        totalSeconds / 60
      );

    const seconds =
      totalSeconds % 60;

    return `${minutes}:${seconds
      .toString()
      .padStart(2, "0")}`;
  }

  async function saveMusic() {
    if (
      musicId === null
    ) {
      alert(
        "Music ID is missing."
      );

      return;
    }

    if (!name.trim()) {
      alert(
        "Music title is required."
      );

      return;
    }

    if (!file) {
      alert(
        "Music file is required."
      );

      return;
    }

    if (!cover) {
      alert(
        "Cover image is required."
      );

      return;
    }

    if (
      duration === null ||
      !Number.isFinite(duration)
    ) {
      alert(
        "Music duration is required."
      );

      return;
    }

    try {
      setSaving(true);

      const response =
        await fetch(
          `/api/admin/music/${musicId}`,
          {
            method: "PUT",
            headers: {
              "Content-Type":
                "application/json",
            },
            body: JSON.stringify({
              name: name.trim(),
              file,
              cover,

              artist:
                artist.trim() || null,

              genre:
                genre.trim() || null,

              description:
                description.trim() ||
                null,

              translation:
                translation.trim() ||
                null,

              duration:
                Math.round(duration),

              pageStyle:
                selectedPageStyle ||
                null,
            }),
          }
        );

      const data =
        await response.json();

      if (
        !response.ok ||
        !data.success
      ) {
        throw new Error(
          data.message ||
            "Failed to update music."
        );
      }

      alert(
        "Music updated successfully."
      );

      window.location.href =
        "/admin/music";
    } catch (error) {
      alert(
        error instanceof Error
          ? error.message
          : "Failed to update music."
      );
    } finally {
      setSaving(false);
    }
  }

  if (loading) {
    return (
      <main
        style={containerStyle}
      >
        <div
          style={{
            minHeight:
              "100vh",

            display:
              "flex",

            alignItems:
              "center",

            justifyContent:
              "center",

            color:
              "#d7b56d",

            fontSize:
              "18px",
          }}
        >
          Loading music...
        </div>
      </main>
    );
  }

  return (
    <main style={containerStyle}>
      <div
        style={{
          width: "100%",
          maxWidth: "1100px",
          margin: "0 auto",
          boxSizing:
            "border-box",
        }}
      >
        <div
          style={{
            marginBottom:
              "40px",
          }}
        >
          <p
            style={{
              margin:
                "0 0 10px",
              color:
                "#9d7d3d",
              letterSpacing:
                "clamp(3px, 1vw, 6px)",
              fontSize:
                "clamp(10px, 1.5vw, 14px)",
            }}
          >
            ADMIN PANEL
          </p>

          <h1
            style={{
              margin: 0,
              color:
                "#d7b56d",
              fontFamily:
                "Cinzel, serif",
              fontWeight: 400,
              fontSize:
                "clamp(32px, 5vw, 52px)",
              lineHeight: 1.15,
            }}
          >
            Edit Music
          </h1>
        </div>

        <section
          style={{
            width: "100%",
            padding:
              "clamp(20px, 4vw, 40px)",
            borderRadius:
              "clamp(18px, 3vw, 28px)",
            background:
              "rgba(20,20,20,.92)",
            border:
              "1px solid rgba(215,181,109,.25)",
            boxShadow:
              "0 25px 80px rgba(0,0,0,.35)",
            boxSizing:
              "border-box",
          }}
        >
          <label style={labelStyle}>
            Music Title *
          </label>

          <input
            type="text"
            value={name}
            onChange={(event) =>
              setName(
                event.target.value
              )
            }
            style={inputStyle}
          />

          <label style={labelStyle}>
            Artist / Composer
          </label>

          <input
            type="text"
            value={artist}
            onChange={(event) =>
              setArtist(
                event.target.value
              )
            }
            style={inputStyle}
          />

          <label style={labelStyle}>
            Genre
          </label>

          <input
            type="text"
            value={genre}
            onChange={(event) =>
              setGenre(
                event.target.value
              )
            }
            style={inputStyle}
          />

          <label style={labelStyle}>
            Current Music
          </label>

          {file && (
            <div
              style={{
                marginBottom:
                  "15px",
                padding: "14px",
                borderRadius:
                  "12px",
                background:
                  "rgba(255,255,255,.03)",
                border:
                  "1px solid rgba(255,255,255,.08)",
              }}
            >
              <audio
                controls
                preload="metadata"
                src={file}
                style={{
                  width:
                    "100%",
                }}
              />
            </div>
          )}

          <label style={labelStyle}>
            Replace Music File
          </label>

          <input
            id="music-file"
            type="file"
            accept="audio/*"
            onChange={
              handleMusicChange
            }
            style={inputStyle}
          />

          {uploadingMusic && (
            <p
              style={
                statusTextStyle
              }
            >
              Uploading new music...
            </p>
          )}

          <label style={labelStyle}>
            Duration
          </label>

          <div
            style={{
              marginBottom:
                "20px",
              padding: "15px",
              borderRadius:
                "10px",
              background:
                "rgba(255,255,255,.04)",
              border:
                "1px solid rgba(215,181,109,.16)",
              color:
                duration !== null
                  ? "#8dd48d"
                  : "#888",
              boxSizing:
                "border-box",
            }}
          >
            {duration !== null
              ? `${formatDuration(
                  duration
                )} — automatic`
              : "Not detected"}
          </div>

          <label style={labelStyle}>
            Current Cover
          </label>

          {cover && (
            <div
              style={{
                position:
                  "relative",
                width:
                  "220px",
                maxWidth:
                  "100%",
                aspectRatio:
                  "1 / 1",
                marginBottom:
                  "15px",
                borderRadius:
                  "18px",
                overflow:
                  "hidden",
                background:
                  "#111",
                border:
                  "1px solid rgba(215,181,109,.2)",
              }}
            >
              <img
                src={cover}
                alt="Current cover"
                style={{
                  width:
                    "100%",
                  height:
                    "100%",
                  objectFit:
                    "cover",
                  display:
                    "block",
                }}
              />
            </div>
          )}

          <label style={labelStyle}>
            Replace Cover Image
          </label>

          <input
            id="cover-file"
            type="file"
            accept="image/*"
            onChange={
              handleCoverChange
            }
            style={inputStyle}
          />

          {uploadingCover && (
            <p
              style={
                statusTextStyle
              }
            >
              Uploading new cover...
            </p>
          )}

          <label style={labelStyle}>
            Music Description
          </label>

          <textarea
            value={description}
            onChange={(event) =>
              setDescription(
                event.target.value
              )
            }
            style={{
              ...inputStyle,
              minHeight:
                "140px",
              resize:
                "vertical",
            }}
          />

          <label style={labelStyle}>
            Lyrics / Translation
          </label>

          <textarea
            value={translation}
            onChange={(event) =>
              setTranslation(
                event.target.value
              )
            }
            style={{
              ...inputStyle,
              minHeight:
                "180px",
              resize:
                "vertical",
            }}
          />

          <label style={labelStyle}>
            Page Style
          </label>

          <select
            value={
              selectedPageStyle
            }
            onChange={(event) =>
              setSelectedPageStyle(
                event.target.value
              )
            }
            style={inputStyle}
          >
            <option
              value=""
              style={{
                background:
                  "#151515",
                color:
                  "#fff",
              }}
            >
              Default
            </option>
          </select>

          <p
            style={{
              margin:
                "-5px 0 25px",
              color:
                "#777",
              fontSize:
                "13px",
              lineHeight:
                1.6,
            }}
          >
            Additional music page
            styles can be added later.
          </p>

          <div
            style={{
              display:
                "flex",
              gap: "12px",
              flexWrap:
                "wrap",
            }}
          >
            <button
              type="button"
              onClick={
                saveMusic
              }
              disabled={
                saving ||
                uploadingMusic ||
                uploadingCover
              }
              style={{
                width:
                  "min(100%, 240px)",
                minHeight:
                  "54px",
                border: "none",
                borderRadius:
                  "12px",
                background:
                  saving
                    ? "#7b673e"
                    : "#d7b56d",
                color:
                  "#111",
                fontWeight:
                  "bold",
                fontSize:
                  "16px",
                cursor:
                  saving
                    ? "not-allowed"
                    : "pointer",
                opacity:
                  saving
                    ? 0.75
                    : 1,
              }}
            >
              {saving
                ? "Saving..."
                : "Save Changes"}
            </button>

            <button
              type="button"
              onClick={() => {
                window.location.href =
                  "/admin/music";
              }}
              disabled={saving}
              style={{
                width:
                  "min(100%, 180px)",
                minHeight:
                  "54px",
                padding:
                  "14px 24px",
                border:
                  "1px solid rgba(215,181,109,.35)",
                borderRadius:
                  "12px",
                background:
                  "rgba(255,255,255,.03)",
                color:
                  "#d7b56d",
                fontWeight:
                  "bold",
                fontSize:
                  "16px",
                cursor:
                  saving
                    ? "not-allowed"
                    : "pointer",
              }}
            >
              Cancel
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}

const containerStyle: React.CSSProperties = {
  minHeight: "100vh",
  background:
    "radial-gradient(circle at top,#2a1740 0%,#0b0b0b 45%,#050505 100%)",
  color: "#fff",
  padding:
    "clamp(20px, 5vw, 60px)",
  boxSizing:
    "border-box",
  overflowX:
    "hidden",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  marginTop: "24px",
  marginBottom: "8px",
  color: "#d7b56d",
  fontWeight: "bold",
  fontSize: "15px",
  lineHeight: 1.5,
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  marginBottom: "20px",
  padding: "15px",
  borderRadius: "10px",
  border:
    "1px solid rgba(255,255,255,.18)",
  background: "#151515",
  color: "#ffffff",
  fontSize: "16px",
  outline: "none",
  boxSizing:
    "border-box",
};

const statusTextStyle: React.CSSProperties = {
  margin:
    "-5px 0 20px",
  color: "#d7b56d",
  fontSize: "14px",
};
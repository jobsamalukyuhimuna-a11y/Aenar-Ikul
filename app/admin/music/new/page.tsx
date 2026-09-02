"use client";

import { useState } from "react";

type PageStyleOption = {
  value: string;
  label: string;
};

const pageStyles: PageStyleOption[] = [
  {
    value: "",
    label: "Default",
  },
];

export default function NewMusicPage() {
  const [name, setName] = useState("");
  const [artist, setArtist] = useState("");
  const [genre, setGenre] = useState("");
  const [description, setDescription] = useState("");
  const [translation, setTranslation] = useState("");
  const [pageStyle, setPageStyle] = useState("");

  const [file, setFile] = useState("");
  const [cover, setCover] = useState("");

  const [duration, setDuration] = useState<number | null>(
    null
  );

  const [uploadingMusic, setUploadingMusic] =
    useState(false);

  const [uploadingCover, setUploadingCover] =
    useState(false);

  const [saving, setSaving] = useState(false);

  async function uploadFile(
    selectedFile: File,
    type: "image" | "music"
  ) {
    if (!selectedFile) {
      throw new Error("No file selected.");
    }

    const maxImageSize =
      10 * 1024 * 1024;

    const maxMusicSize =
      50 * 1024 * 1024;

    if (
      type === "image" &&
      selectedFile.size > maxImageSize
    ) {
      throw new Error(
        "Image is too large. Maximum size is 10MB."
      );
    }

    if (
      type === "music" &&
      selectedFile.size > maxMusicSize
    ) {
      throw new Error(
        "Music file is too large. Maximum size is 50MB."
      );
    }

    const formData = new FormData();

    formData.append(
      "file",
      selectedFile,
      selectedFile.name
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

    const data = await response.json();

    if (!response.ok || !data.success) {
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
          document.createElement("audio");

        const objectUrl =
          URL.createObjectURL(selectedFile);

        audio.preload = "metadata";
        audio.src = objectUrl;

        audio.onloadedmetadata = () => {
          const value = audio.duration;

          URL.revokeObjectURL(objectUrl);

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
          URL.revokeObjectURL(objectUrl);

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

      setDuration(
        detectedDuration
      );

      const url =
        await uploadFile(
          selectedFile,
          "music"
        );

      setFile(url);
    } catch (error) {
      setDuration(null);

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
      return "Not detected";
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
    if (!name.trim()) {
      alert(
        "Please enter the music title."
      );
      return;
    }

    if (!file) {
      alert(
        "Please upload the music file."
      );
      return;
    }

    if (!cover) {
      alert(
        "Please upload the cover image."
      );
      return;
    }

    if (
      duration === null ||
      !Number.isFinite(duration)
    ) {
      alert(
        "Music duration could not be detected."
      );
      return;
    }

    try {
      setSaving(true);

      const response = await fetch(
        "/api/admin/music",
        {
          method: "POST",
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
              description.trim() || null,
            translation:
              translation.trim() || null,
            duration,
            pageStyle:
              pageStyle || null,
          }),
        }
      );

      const data =
        await response.json();

      if (!response.ok || !data.success) {
        throw new Error(
          data.message ||
            "Failed to save music."
        );
      }

      alert(
        "Music created successfully."
      );

      setName("");
      setArtist("");
      setGenre("");
      setDescription("");
      setTranslation("");
      setPageStyle("");
      setFile("");
      setCover("");
      setDuration(null);

      const musicInput =
        document.getElementById(
          "music-file"
        ) as HTMLInputElement | null;

      const coverInput =
        document.getElementById(
          "cover-file"
        ) as HTMLInputElement | null;

      if (musicInput) {
        musicInput.value = "";
      }

      if (coverInput) {
        coverInput.value = "";
      }
    } catch (error) {
      alert(
        error instanceof Error
          ? error.message
          : "Failed to save music."
      );
    } finally {
      setSaving(false);
    }
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top,#2a1740 0%,#0b0b0b 45%,#050505 100%)",
        color: "#fff",
        padding:
          "clamp(20px, 5vw, 60px)",
        boxSizing: "border-box",
        overflowX: "hidden",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1100px",
          margin: "0 auto",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            marginBottom: "40px",
          }}
        >
          <p
            style={{
              margin: "0 0 10px",
              color: "#9d7d3d",
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
              margin: "0 0 12px",
              color: "#d7b56d",
              fontFamily:
                "Cinzel, serif",
              fontWeight: 400,
              fontSize:
                "clamp(32px, 5vw, 52px)",
              lineHeight: 1.15,
            }}
          >
            Add New Music
          </h1>

          <p
            style={{
              margin: 0,
              color: "#9d9d9d",
              fontSize:
                "clamp(14px, 2vw, 17px)",
            }}
          >
            Create an independent music entry.
          </p>
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
            boxSizing: "border-box",
          }}
        >
          {/* TITLE */}

          <label style={label}>
            Music Title *
          </label>

          <input
            type="text"
            placeholder="Enter music title"
            value={name}
            onChange={(event) =>
              setName(event.target.value)
            }
            style={input}
          />

          {/* ARTIST */}

          <label style={label}>
            Artist / Composer
          </label>

          <input
            type="text"
            placeholder="Optional"
            value={artist}
            onChange={(event) =>
              setArtist(event.target.value)
            }
            style={input}
          />

          {/* GENRE */}

          <label style={label}>
            Genre
          </label>

          <input
            type="text"
            placeholder="Optional"
            value={genre}
            onChange={(event) =>
              setGenre(event.target.value)
            }
            style={input}
          />

          {/* MUSIC FILE */}

          <label style={label}>
            Music File *
          </label>

          <input
            id="music-file"
            type="file"
            accept="audio/*"
            onChange={handleMusicChange}
            style={input}
          />

          {uploadingMusic && (
            <p style={statusText}>
              Uploading music...
            </p>
          )}

          {file && (
            <p
              style={{
                ...successText,
                wordBreak: "break-all",
              }}
            >
              Music uploaded successfully.
              <br />
              {file}
            </p>
          )}

          {/* DURATION */}

          <label style={label}>
            Duration
          </label>

          <div
            style={{
              width: "100%",
              marginBottom: "20px",
              padding: "15px",
              borderRadius: "10px",
              background:
                "rgba(255,255,255,.04)",
              border:
                "1px solid rgba(215,181,109,.16)",
              color:
                duration !== null
                  ? "#8dd48d"
                  : "#888",
              boxSizing: "border-box",
            }}
          >
            {duration !== null
              ? `${formatDuration(
                  duration
                )} — detected automatically`
              : "Will be detected automatically from the music file."}
          </div>

          {/* COVER */}

          <label style={label}>
            Cover Image *
          </label>

          <input
            id="cover-file"
            type="file"
            accept="image/*"
            onChange={handleCoverChange}
            style={input}
          />

          {uploadingCover && (
            <p style={statusText}>
              Uploading cover image...
            </p>
          )}

          {cover && (
            <p
              style={{
                ...successText,
                wordBreak: "break-all",
              }}
            >
              Cover uploaded successfully.
              <br />
              {cover}
            </p>
          )}

          {/* DESCRIPTION */}

          <label style={label}>
            Music Description
          </label>

          <textarea
            placeholder="Optional"
            value={description}
            onChange={(event) =>
              setDescription(
                event.target.value
              )
            }
            style={{
              ...input,
              minHeight: "140px",
              resize: "vertical",
            }}
          />

          {/* TRANSLATION */}

          <label style={label}>
            Lyrics / Translation
          </label>

          <textarea
            placeholder="Optional"
            value={translation}
            onChange={(event) =>
              setTranslation(
                event.target.value
              )
            }
            style={{
              ...input,
              minHeight: "180px",
              resize: "vertical",
            }}
          />

          {/* PAGE STYLE */}

          <label style={label}>
            Page Style
          </label>

          <select
            value={pageStyle}
            onChange={(event) =>
              setPageStyle(
                event.target.value
              )
            }
            style={input}
          >
            {pageStyles.map(
              (style) => (
                <option
                  key={style.value}
                  value={style.value}
                  style={{
                    background: "#151515",
                    color: "#fff",
                  }}
                >
                  {style.label}
                </option>
              )
            )}
          </select>

          <p
            style={{
              color: "#777",
              fontSize: "13px",
              lineHeight: 1.6,
              margin:
                "-6px 0 25px",
            }}
          >
            More music page styles can be added
            later.
          </p>

          {/* SAVE */}

          <div
            style={{
              display: "flex",
              gap: "12px",
              flexWrap: "wrap",
            }}
          >
            <button
              type="button"
              onClick={saveMusic}
              disabled={
                saving ||
                uploadingMusic ||
                uploadingCover
              }
              style={{
                width:
                  "min(100%, 240px)",
                minHeight: "54px",
                padding:
                  "14px 24px",
                border: "none",
                borderRadius: "12px",
                background:
                  saving
                    ? "#7b673e"
                    : "#d7b56d",
                color: "#111",
                fontWeight: "bold",
                fontSize: "16px",
                cursor:
                  saving
                    ? "not-allowed"
                    : "pointer",
                opacity:
                  saving ? 0.75 : 1,
              }}
            >
              {saving
                ? "Saving..."
                : "Save Music"}
            </button>

            <button
              type="button"
              onClick={() => {
                window.history.back();
              }}
              disabled={saving}
              style={{
                width:
                  "min(100%, 180px)",
                minHeight: "54px",
                padding:
                  "14px 24px",
                border:
                  "1px solid rgba(215,181,109,.35)",
                borderRadius: "12px",
                background:
                  "rgba(255,255,255,.03)",
                color: "#d7b56d",
                fontWeight: "bold",
                fontSize: "16px",
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

const label: React.CSSProperties = {
  display: "block",
  marginTop: "24px",
  marginBottom: "8px",
  color: "#d7b56d",
  fontWeight: "bold",
  fontSize: "15px",
  lineHeight: 1.5,
};

const input: React.CSSProperties = {
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
  boxSizing: "border-box",
};

const statusText: React.CSSProperties = {
  margin:
    "-5px 0 20px",
  color: "#d7b56d",
  fontSize: "14px",
};

const successText: React.CSSProperties = {
  margin:
    "-5px 0 20px",
  color: "#8dd48d",
  fontSize: "14px",
  lineHeight: 1.6,
};
"use client";

import { useEffect, useState } from "react";

type MediaResponse = {
  success: boolean;
  images: string[];
  music: string[];
};

export default function MediaPage() {
  const [images, setImages] = useState<string[]>([]);
  const [music, setMusic] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadMedia();
  }, []);

  async function loadMedia() {
    try {
      const response = await fetch("/api/media");
      const data: MediaResponse = await response.json();

      if (data.success) {
        setImages(data.images);
        setMusic(data.music);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0b0b0b",
        color: "#fff",
        padding: "60px",
      }}
    >
      <h1
        style={{
          fontSize: "48px",
          color: "#d4af37",
          marginBottom: "40px",
        }}
      >
        Media Manager
      </h1>

      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <>
          <section
            style={{
              marginBottom: "60px",
            }}
          >
            <h2
              style={{
                color: "#d4af37",
                marginBottom: "20px",
              }}
            >
              Images ({images.length})
            </h2>

            {images.length === 0 ? (
              <p>No images found.</p>
            ) : (
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill,minmax(220px,1fr))",
                  gap: "20px",
                }}
              >
                {images.map((image) => (
                  <div
                    key={image}
                    style={{
                      background: "#171717",
                      padding: "20px",
                      borderRadius: "12px",
                      border: "1px solid #333",
                    }}
                  >
                    <img
                      src={`/uploads/images/${image}`}
                      alt={image}
                      style={{
                        width: "100%",
                        height: "160px",
                        objectFit: "cover",
                        borderRadius: "8px",
                        marginBottom: "12px",
                      }}
                    />

                    <p
                      style={{
                        wordBreak: "break-word",
                      }}
                    >
                      {image}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </section>

          <section>
            <h2
              style={{
                color: "#d4af37",
                marginBottom: "20px",
              }}
            >
              Music ({music.length})
            </h2>

            {music.length === 0 ? (
              <p>No music found.</p>
            ) : (
              <div
                style={{
                  display: "grid",
                  gap: "15px",
                }}
              >
                {music.map((file) => (
                  <div
                    key={file}
                    style={{
                      background: "#171717",
                      padding: "20px",
                      borderRadius: "12px",
                      border: "1px solid #333",
                    }}
                  >
                    🎵 {file}
                  </div>
                ))}
              </div>
            )}
          </section>
        </>
      )}
    </main>
  );
}
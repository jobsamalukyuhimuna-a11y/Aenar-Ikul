"use client";

import Image from "next/image";

type GalleryImage = {
  id: number;
  image: string;
};

type Props = {
  images?: GalleryImage[];
};

export default function CorruptedGallery({
  images = [],
}: Props) {
  return (
    <section
      className="corrupted-gallery"
      style={{
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      <div
        className="gallery-header"
        style={{
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        <div
          className="gallery-line"
          aria-hidden="true"
        />

        <h2 className="corrupted-gallery-title">
          CORRUPTED VISIONS
        </h2>

        <div
          className="gallery-line"
          aria-hidden="true"
        />
      </div>

      {images.length > 0 ? (
        <div
          className="corrupted-gallery-grid"
          style={{
            width: "100%",
            boxSizing: "border-box",
          }}
        >
          {images.map((image) => (
            <article
              key={image.id}
              className="corrupted-card"
            >
              <div
                className="card-glow"
                aria-hidden="true"
              />

              <Image
                src={image.image}
                alt="Corrupted Vision"
                fill
                unoptimized
                priority={false}
                sizes="
                  (max-width: 700px) 92vw,
                  (max-width: 1200px) 46vw,
                  400px
                "
                className="corrupted-gallery-image"
              />

              <div
                className="card-overlay"
                aria-hidden="true"
              />
            </article>
          ))}
        </div>
      ) : (
        <div className="corrupted-empty">
          <div
            className="empty-icon"
            aria-hidden="true"
          >
            ☠
          </div>

          <h3>
            No Corrupted Visions
          </h3>

          <p>
            No memories have emerged from the corruption yet.
          </p>
        </div>
      )}
    </section>
  );
}
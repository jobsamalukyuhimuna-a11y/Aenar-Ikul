"use client";

import Image from "next/image";

type Props = {
  images: {
    id: number;
    image: string;
  }[];
};

export default function AncientGallery({
  images,
}: Props) {
  if (!images.length) {
    return null;
  }

  return (
    <section
      className="ancient-gallery"
      style={{
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      <div
        className="ancient-gallery-header"
        style={{
          width: "100%",
          boxSizing: "border-box",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            maxWidth: "100%",
            overflowWrap: "break-word",
          }}
        >
          Ancient Archive
        </h2>

        <p
          style={{
            maxWidth: "100%",
            overflowWrap: "break-word",
          }}
        >
          Sacred memories preserved through the ages
        </p>
      </div>

      <div
        className="ancient-gallery-grid"
        style={{
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        {images.map((img) => (
          <div
            key={img.id}
            className="ancient-card"
          >
            <Image
              src={img.image}
              alt=""
              fill
              unoptimized
              sizes="
                (max-width: 600px) 92vw,
                (max-width: 900px) 48vw,
                (max-width: 1200px) 31vw,
                400px
              "
              className="ancient-gallery-image"
            />

            <div
              className="card-shadow"
              aria-hidden="true"
            />

            <div
              className="card-glow"
              aria-hidden="true"
            />

            <div
              className="card-border"
              aria-hidden="true"
            />

            <div
              className="card-light"
              aria-hidden="true"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
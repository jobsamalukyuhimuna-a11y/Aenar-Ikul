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
    <section className="corrupted-gallery">

      <div className="gallery-header">

        <div className="gallery-line" />

        <h2 className="corrupted-gallery-title">
          CORRUPTED VISIONS
        </h2>

        <div className="gallery-line" />

      </div>

      {images.length > 0 ? (

        <div className="corrupted-gallery-grid">

          {images.map((image) => (

            <article
              key={image.id}
              className="corrupted-card"
            >

              <div className="card-glow" />

              <Image
                src={image.image}
                alt="Corrupted Vision"
                fill
                sizes="(max-width:768px) 100vw, 400px"
                className="corrupted-gallery-image"
                priority={false}
              />

              <div className="card-overlay" />

            </article>

          ))}

        </div>

      ) : (

        <div className="corrupted-empty">

          <div className="empty-icon">
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
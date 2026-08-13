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

  if (!images.length) return null;

  return (

    <section className="ancient-gallery">

      <div className="ancient-gallery-header">

        <h2>
          Ancient Archive
        </h2>

        <p>
          Sacred memories preserved through the ages
        </p>

      </div>

      <div className="ancient-gallery-grid">

        {images.map((img) => (

          <div
            key={img.id}
            className="ancient-card"
          >

            <Image
              src={img.image}
              alt=""
              fill
              className="ancient-gallery-image"
              sizes="(max-width:768px)100vw,33vw"
            />

            <div className="card-shadow" />

            <div className="card-glow" />

            <div className="card-border" />

            <div className="card-light" />

          </div>

        ))}

      </div>

    </section>

  );

}
"use client";

export default function AncientSky() {
  return (
    <>
      {/* MAIN SKY */}
      <div
        className="ancient-sky"
        aria-hidden="true"
      />

      {/* MOON / SUN */}
      <div
        className="ancient-sun"
        aria-hidden="true"
      />

      {/* GENERAL LIGHT */}
      <div
        className="ancient-light"
        aria-hidden="true"
      />

      {/* SUN RAYS */}
      <div
        className="ancient-rays"
        aria-hidden="true"
      >
        {Array.from({ length: 18 }).map((_, i) => (
          <span
            key={`ray-${i}`}
            className="ancient-ray"
            style={{
              transform: `translateX(-50%) rotate(${i * 20}deg)`,
            }}
          />
        ))}
      </div>

      {/* FLOATING CLOUDS */}
      <div
        className="ancient-cloud cloud-1"
        aria-hidden="true"
      />

      <div
        className="ancient-cloud cloud-2"
        aria-hidden="true"
      />

      <div
        className="ancient-cloud cloud-3"
        aria-hidden="true"
      />

      {/* MIST */}
      <div
        className="ancient-mist mist-1"
        aria-hidden="true"
      />

      <div
        className="ancient-mist mist-2"
        aria-hidden="true"
      />

      {/* FLOATING RINGS */}
      <div
        className="ancient-ring ring-1"
        aria-hidden="true"
      />

      <div
        className="ancient-ring ring-2"
        aria-hidden="true"
      />

      {/* STARS */}
      {Array.from({ length: 60 }).map((_, i) => (
        <span
          key={`star-${i}`}
          className="ancient-star"
          aria-hidden="true"
          style={{
            left: `${(i * 17) % 100}%`,
            top: `${(i * 11) % 35}%`,
            animationDelay: `${i * 0.2}s`,
          }}
        />
      ))}
    </>
  );
}
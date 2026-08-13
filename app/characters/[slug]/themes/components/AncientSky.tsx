"use client";

export default function AncientSky() {
  return (
    <>
      <div className="ancient-sky" />

      <div className="ancient-sun" />

      <div className="ancient-light" />

      {/* Sun Rays */}
      <div className="ancient-rays">
        {Array.from({ length: 18 }).map((_, i) => (
          <span
            key={i}
            className="ancient-ray"
            style={{
              transform: `translateX(-50%) rotate(${i * 20}deg)`,
            }}
          />
        ))}
      </div>

      {/* Floating Clouds */}
      <div className="ancient-cloud cloud-1" />
      <div className="ancient-cloud cloud-2" />
      <div className="ancient-cloud cloud-3" />

      {/* Golden Mist */}
      <div className="ancient-mist mist-1" />
      <div className="ancient-mist mist-2" />

      {/* Floating Rings */}
      <div className="ancient-ring ring-1" />
      <div className="ancient-ring ring-2" />

      {/* Stars */}
      {Array.from({ length: 60 }).map((_, i) => (
        <span
          key={`star-${i}`}
          className="ancient-star"
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
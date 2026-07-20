"use client";

export default function CelestialStars() {

  return (
    <>
      {Array.from({ length: 120 }).map((_, i) => {

        const size =
          i % 3 === 0
            ? "star-large"
            : i % 2 === 0
            ? "star-medium"
            : "star-small";

        return (
          <div
            key={i}
            className={`celestial-star ${size}`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
            }}
          />
        );
      })}
    </>
  );

}
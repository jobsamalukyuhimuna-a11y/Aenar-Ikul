"use client";

export default function CelestialParticles() {

  return (
    <>
      {Array.from({ length: 70 }).map((_, i) => {

        const size =
          i % 3 === 0
            ? "particle-large"
            : i % 2 === 0
            ? "particle-medium"
            : "particle-small";

        return (
          <div
            key={i}
            className={`celestial-particle ${size}`}
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 25}s`,
            }}
          />
        );
      })}
    </>
  );

}
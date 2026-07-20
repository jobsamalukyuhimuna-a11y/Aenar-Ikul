"use client";

export default function CelestialFeathers() {

  return (
    <>
      {Array.from({ length: 18 }).map((_, i) => {

        const size =
          i % 3 === 0
            ? "feather-large"
            : i % 2 === 0
            ? "feather-medium"
            : "feather-small";

        return (
          <div
            key={i}
            className={`celestial-feather ${size}`}
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 2}s`,
            }}
          />
        );
      })}
    </>
  );

}
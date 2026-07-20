"use client";

export default function CelestialAmbience() {

  return (
    <>
      <div className="celestial-lens lens-1" />
      <div className="celestial-lens lens-2" />
      <div className="celestial-lens lens-3" />

      <div className="celestial-refraction" />

      {Array.from({ length: 180 }).map((_, i) => (

        <div
          key={i}
          className="celestial-dust"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 30}s`,
          }}
        />

      ))}
    </>
  );

}
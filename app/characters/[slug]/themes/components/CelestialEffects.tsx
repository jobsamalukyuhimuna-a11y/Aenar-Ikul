"use client";

export default function CelestialEffects() {
  return (
    <>
      {/* LIGHT BEAMS */}

      <div
        className="light-beams"
        aria-hidden="true"
      >
        <span className="beam beam-1" />
        <span className="beam beam-2" />
        <span className="beam beam-3" />
        <span className="beam beam-4" />
        <span className="beam beam-5" />
      </div>

      {/* CELESTIAL HALOS */}

      <div
        className="celestial-halos"
        aria-hidden="true"
      >
        <span className="outer-halo" />
        <span className="middle-halo" />
        <span className="inner-halo" />
      </div>

      {/* FLOATING FOG */}

      <div
        className="floating-fog"
        aria-hidden="true"
      >
        <span className="fog fog-1" />
        <span className="fog fog-2" />
        <span className="fog fog-3" />
      </div>

      {/* DIVINE GLOW */}

      <div
        className="divine-glow"
        aria-hidden="true"
      />
    </>
  );
}
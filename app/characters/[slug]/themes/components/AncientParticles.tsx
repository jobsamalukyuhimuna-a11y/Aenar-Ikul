"use client";

export default function AncientParticles() {
  return (
    <>
      {/* Golden Dust */}
      {Array.from({ length: 90 }).map((_, i) => (
        <span
          key={`dust-${i}`}
          className="ancient-dust"
          style={{
            left: `${(i * 19) % 100}%`,
            animationDelay: `${i * 0.12}s`,
            animationDuration: `${10 + (i % 6)}s`,
          }}
        />
      ))}

      {/* Light Particles */}
      {Array.from({ length: 60 }).map((_, i) => (
        <span
          key={`light-${i}`}
          className="ancient-light-particle"
          style={{
            left: `${(i * 23) % 100}%`,
            top: `${(i * 17) % 100}%`,
            animationDelay: `${i * 0.18}s`,
            animationDuration: `${8 + (i % 4)}s`,
          }}
        />
      ))}

      {/* Floating Leaves */}
      {Array.from({ length: 24 }).map((_, i) => (
        <span
          key={`leaf-${i}`}
          className="ancient-leaf"
          style={{
            left: `${(i * 31) % 100}%`,
            animationDelay: `${i * 0.7}s`,
            animationDuration: `${14 + (i % 5)}s`,
          }}
        />
      ))}

      {/* Rune Sparks */}
      {Array.from({ length: 36 }).map((_, i) => (
        <span
          key={`rune-${i}`}
          className="ancient-rune"
          style={{
            left: `${(i * 29) % 100}%`,
            top: `${(i * 11) % 100}%`,
            animationDelay: `${i * 0.35}s`,
            animationDuration: `${6 + (i % 3)}s`,
          }}
        />
      ))}

      {/* Aura Orbs */}
      {Array.from({ length: 18 }).map((_, i) => (
        <span
          key={`orb-${i}`}
          className="ancient-orb"
          style={{
            left: `${(i * 37) % 100}%`,
            top: `${(i * 41) % 100}%`,
            animationDelay: `${i * 0.5}s`,
            animationDuration: `${12 + (i % 4)}s`,
          }}
        />
      ))}
    </>
  );
}
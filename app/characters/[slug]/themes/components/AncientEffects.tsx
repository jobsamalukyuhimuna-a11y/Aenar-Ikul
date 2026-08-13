"use client";

export default function AncientEffects() {
  return (
    <>
      <div className="ancient-global-aura" />

      {/* LIGHT RAYS */}
      {Array.from({ length: 10 }).map((_, i) => (
        <span
          key={`ray-${i}`}
          className="ancient-ray"
          style={{
            left: `${10 + i * 8}%`,
            animationDelay: `${i * 0.5}s`,
          }}
        />
      ))}

      {/* FLOATING RUNES */}
      {Array.from({ length: 40 }).map((_, i) => (
        <span
          key={`rune-${i}`}
          className="ancient-floating-rune"
          style={{
            left: `${(i * 17) % 100}%`,
            top: `${(i * 9) % 100}%`,
            animationDelay: `${i * 0.3}s`,
          }}
        >
          ✦
        </span>
      ))}

      {/* DIVINE DUST */}
      {Array.from({ length: 80 }).map((_, i) => (
        <span
          key={`dust-${i}`}
          className="ancient-divine-dust"
          style={{
            left: `${(i * 11) % 100}%`,
            animationDelay: `${i * 0.08}s`,
            animationDuration: `${8 + (i % 5)}s`,
          }}
        />
      ))}
    </>
  );
}
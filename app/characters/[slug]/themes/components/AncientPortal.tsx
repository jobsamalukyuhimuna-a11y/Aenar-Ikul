"use client";

export default function AncientPortal() {
  return (
    <>
      {/* MAIN SACRED PORTAL */}

      <div
        className="ancient-portal"
        aria-hidden="true"
      >
        {/* OUTER RING */}

        <div className="portal-ring portal-ring-1" />

        {/* MIDDLE RING */}

        <div className="portal-ring portal-ring-2" />

        {/* INNER RING */}

        <div className="portal-ring portal-ring-3" />

        {/* CORE */}

        <div className="portal-core" />

        {/* AURA */}

        <div className="portal-aura" />

        {/* ENERGY WAVES */}

        <div className="portal-wave wave-1" />
        <div className="portal-wave wave-2" />
        <div className="portal-wave wave-3" />

        {/* ANCIENT RUNES */}

        <div className="portal-runes">
          {Array.from({ length: 18 }).map((_, i) => (
            <span
              key={`portal-rune-${i}`}
              className="portal-rune"
              style={{
                transform: `rotate(${i * 20}deg) translateY(-215px)`,
              }}
            >
              ✦
            </span>
          ))}
        </div>
      </div>

      {/* LIGHT COLUMNS */}

      <div
        className="portal-light left-light"
        aria-hidden="true"
      />

      <div
        className="portal-light right-light"
        aria-hidden="true"
      />

      {/* FLOATING STONES */}

      {Array.from({ length: 10 }).map((_, i) => (
        <div
          key={`stone-${i}`}
          className="floating-stone"
          aria-hidden="true"
          style={{
            left: `${20 + i * 6}%`,
            animationDelay: `${i * 0.4}s`,
            animationDuration: `${8 + (i % 4)}s`,
          }}
        />
      ))}

      {/* DIVINE SPARKS */}

      {Array.from({ length: 24 }).map((_, i) => (
        <span
          key={`spark-${i}`}
          className="portal-spark"
          aria-hidden="true"
          style={{
            left: `${(i * 13) % 100}%`,
            top: `${20 + ((i * 7) % 40)}%`,
            animationDelay: `${i * 0.15}s`,
          }}
        />
      ))}
    </>
  );
}
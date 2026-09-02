"use client";

export default function AncientParticles() {
  const dustParticles = Array.from({
    length: 90,
  });

  const lightParticles = Array.from({
    length: 60,
  });

  const floatingLeaves = Array.from({
    length: 24,
  });

  const runeSparks = Array.from({
    length: 36,
  });

  const auraOrbs = Array.from({
    length: 18,
  });

  return (
    <>
      {/* =====================================================
          ANCIENT DUST
      ===================================================== */}

      {dustParticles.map((_, i) => (
        <span
          key={`dust-${i}`}
          className="ancient-dust"
          aria-hidden="true"
          style={{
            left: `${(i * 19) % 100}%`,
            animationDelay: `${i * 0.12}s`,
            animationDuration: `${10 + (i % 6)}s`,
          }}
        />
      ))}

      {/* =====================================================
          LIGHT PARTICLES
      ===================================================== */}

      {lightParticles.map((_, i) => (
        <span
          key={`light-${i}`}
          className="ancient-light-particle"
          aria-hidden="true"
          style={{
            left: `${(i * 23) % 100}%`,
            top: `${(i * 17) % 100}%`,
            animationDelay: `${i * 0.18}s`,
            animationDuration: `${8 + (i % 4)}s`,
          }}
        />
      ))}

      {/* =====================================================
          FLOATING LEAVES
      ===================================================== */}

      {floatingLeaves.map((_, i) => (
        <span
          key={`leaf-${i}`}
          className="ancient-leaf"
          aria-hidden="true"
          style={{
            left: `${(i * 31) % 100}%`,
            animationDelay: `${i * 0.7}s`,
            animationDuration: `${14 + (i % 5)}s`,
          }}
        />
      ))}

      {/* =====================================================
          RUNE SPARKS
      ===================================================== */}

      {runeSparks.map((_, i) => (
        <span
          key={`rune-${i}`}
          className="ancient-rune"
          aria-hidden="true"
          style={{
            left: `${(i * 29) % 100}%`,
            top: `${(i * 11) % 100}%`,
            animationDelay: `${i * 0.35}s`,
            animationDuration: `${6 + (i % 3)}s`,
          }}
        >
          ✦
        </span>
      ))}

      {/* =====================================================
          AURA ORBS
      ===================================================== */}

      {auraOrbs.map((_, i) => (
        <span
          key={`orb-${i}`}
          className="ancient-orb"
          aria-hidden="true"
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
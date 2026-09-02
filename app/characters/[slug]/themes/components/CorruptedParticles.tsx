"use client";

export default function CorruptedParticles() {
  const particles = Array.from({ length: 120 });
  const sparks = Array.from({ length: 60 });
  const ash = Array.from({ length: 40 });
  const smoke = Array.from({ length: 18 });
  const embers = Array.from({ length: 50 });

  return (
    <>
      {/* MAIN CORRUPTED PARTICLES */}

      {particles.map((_, i) => (
        <span
          key={`particle-${i}`}
          className="corrupted-particle"
          aria-hidden="true"
          style={{
            left: `${(i * 17) % 100}%`,
            animationDelay: `${i * 0.08}s`,
            animationDuration: `${9 + (i % 5)}s`,
          }}
        />
      ))}

      {/* PURPLE SPARKS */}

      {sparks.map((_, i) => (
        <span
          key={`spark-${i}`}
          className="corrupted-spark"
          aria-hidden="true"
          style={{
            left: `${(i * 21) % 100}%`,
            top: `${(i * 13) % 100}%`,
            animationDelay: `${i * 0.12}s`,
          }}
        />
      ))}

      {/* FLOATING ASH */}

      {ash.map((_, i) => (
        <span
          key={`ash-${i}`}
          className="corrupted-ash"
          aria-hidden="true"
          style={{
            left: `${(i * 31) % 100}%`,
            animationDelay: `${i * 0.22}s`,
            animationDuration: `${14 + (i % 4)}s`,
          }}
        />
      ))}

      {/* SMOKE */}

      {smoke.map((_, i) => (
        <span
          key={`smoke-${i}`}
          className="corrupted-smoke"
          aria-hidden="true"
          style={{
            left: `${(i * 29) % 100}%`,
            animationDelay: `${i * 0.8}s`,
            animationDuration: `${18 + (i % 5)}s`,
          }}
        />
      ))}

      {/* EMBERS */}

      {embers.map((_, i) => (
        <span
          key={`ember-${i}`}
          className="corrupted-ember"
          aria-hidden="true"
          style={{
            left: `${(i * 13) % 100}%`,
            animationDelay: `${i * 0.08}s`,
            animationDuration: `${8 + (i % 3)}s`,
          }}
        />
      ))}
    </>
  );
}
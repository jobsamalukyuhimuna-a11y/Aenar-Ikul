"use client";

export default function CorruptedParticles() {
  return (
    <>
      {/* Main Corrupted Particles */}
      {Array.from({ length: 120 }).map((_, i) => (
        <span
          key={`particle-${i}`}
          className="corrupted-particle"
          style={{
            left: `${(i * 17) % 100}%`,
            animationDelay: `${i * 0.08}s`,
            animationDuration: `${9 + (i % 5)}s`,
          }}
        />
      ))}

      {/* Purple Sparks */}
      {Array.from({ length: 60 }).map((_, i) => (
        <span
          key={`spark-${i}`}
          className="corrupted-spark"
          style={{
            left: `${(i * 21) % 100}%`,
            top: `${(i * 13) % 100}%`,
            animationDelay: `${i * 0.12}s`,
          }}
        />
      ))}

      {/* Floating Ash */}
      {Array.from({ length: 40 }).map((_, i) => (
        <span
          key={`ash-${i}`}
          className="corrupted-ash"
          style={{
            left: `${(i * 31) % 100}%`,
            animationDelay: `${i * 0.22}s`,
            animationDuration: `${14 + (i % 4)}s`,
          }}
        />
      ))}

      {/* Smoke */}
      {Array.from({ length: 18 }).map((_, i) => (
        <span
          key={`smoke-${i}`}
          className="corrupted-smoke"
          style={{
            left: `${(i * 29) % 100}%`,
            animationDelay: `${i * 0.8}s`,
            animationDuration: `${18 + (i % 5)}s`,
          }}
        />
      ))}

      {/* Embers */}
      {Array.from({ length: 50 }).map((_, i) => (
        <span
          key={`ember-${i}`}
          className="corrupted-ember"
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
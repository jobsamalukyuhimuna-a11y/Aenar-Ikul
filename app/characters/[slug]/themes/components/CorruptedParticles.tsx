"use client";

export default function CorruptedParticles() {
  return (
    <>
      {Array.from({ length: 220 }).map((_, i) => (
        <span
          key={`particle-${i}`}
          className="corrupted-particle"
          style={{
            left: `${(i * 17) % 100}%`,
            animationDelay: `${i * 0.06}s`,
            animationDuration: `${7 + (i % 6)}s`,
          }}
        />
      ))}

      {Array.from({ length: 120 }).map((_, i) => (
        <span
          key={`spark-${i}`}
          className="corrupted-spark"
          style={{
            left: `${(i * 21) % 100}%`,
            top: `${(i * 13) % 100}%`,
            animationDelay: `${i * 0.09}s`,
          }}
        />
      ))}

      {Array.from({ length: 80 }).map((_, i) => (
        <span
          key={`ash-${i}`}
          className="corrupted-ash"
          style={{
            left: `${(i * 31) % 100}%`,
            animationDelay: `${i * 0.18}s`,
            animationDuration: `${12 + (i % 5)}s`,
          }}
        />
      ))}

      {Array.from({ length: 35 }).map((_, i) => (
        <span
          key={`smoke-${i}`}
          className="corrupted-smoke"
          style={{
            left: `${(i * 29) % 100}%`,
            animationDelay: `${i * 0.6}s`,
            animationDuration: `${16 + (i % 6)}s`,
          }}
        />
      ))}

      {Array.from({ length: 120 }).map((_, i) => (
        <span
          key={`ember-${i}`}
          className="corrupted-ember"
          style={{
            left: `${(i * 13) % 100}%`,
            animationDelay: `${i * 0.05}s`,
            animationDuration: `${6 + (i % 4)}s`,
          }}
        />
      ))}
    </>
  );
}
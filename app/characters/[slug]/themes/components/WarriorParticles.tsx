export default function WarriorParticles() {
  const embers = Array.from({ length: 140 });
  const ashes = Array.from({ length: 80 });
  const sparks = Array.from({ length: 50 });

  return (
    <>
      {/* EMBERS */}

      {embers.map((_, index) => (
        <span
          key={`ember-${index}`}
          className="ember"
          style={{
            left: `${(index * 19) % 100}%`,
            animationDelay: `${index * 0.08}s`,
            animationDuration: `${8 + (index % 6)}s`,
          }}
        />
      ))}

      {/* ASH */}

      {ashes.map((_, index) => (
        <span
          key={`ash-${index}`}
          className="ash"
          style={{
            left: `${(index * 27) % 100}%`,
            animationDelay: `${index * 0.12}s`,
            animationDuration: `${14 + (index % 5)}s`,
          }}
        />
      ))}

      {/* SPARKS */}

      {sparks.map((_, index) => (
        <span
          key={`spark-${index}`}
          className="spark"
          style={{
            left: `${(index * 31) % 100}%`,
            top: `${(index * 13) % 100}%`,
            animationDelay: `${index * 0.15}s`,
          }}
        />
      ))}
    </>
  );
}
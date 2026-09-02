export default function CelestialParticles() {
  const particles = Array.from({ length: 180 });
  const stars = Array.from({ length: 70 });
  const feathers = Array.from({ length: 30 });

  return (
    <>
      {/* FLOATING PARTICLES */}

      {particles.map((_, index) => (
        <span
          key={`particle-${index}`}
          className="particle"
          style={{
            left: `${(index * 37) % 100}%`,
            animationDelay: `${index * 0.08}s`,
            animationDuration: `${10 + (index % 8)}s`,
          }}
        />
      ))}

      {/* STARS */}

      {stars.map((_, index) => (
        <span
          key={`star-${index}`}
          className="star"
          style={{
            left: `${(index * 17) % 100}%`,
            top: `${(index * 11) % 100}%`,
            animationDelay: `${index * 0.15}s`,
          }}
        />
      ))}

      {/* FEATHERS */}

      {feathers.map((_, index) => (
        <span
          key={`feather-${index}`}
          className="feather"
          style={{
            left: `${(index * 13) % 100}%`,
            animationDelay: `${index * 1.1}s`,
            animationDuration: `${18 + (index % 5)}s`,
          }}
        />
      ))}
    </>
  );
}
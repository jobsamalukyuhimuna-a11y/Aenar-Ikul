export default function CelestialParticles() {

  return (

    <>

      {Array.from({ length: 180 }).map((_, index) => (

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

      {Array.from({ length: 70 }).map((_, index) => (

        <span
          key={`star-${index}`}
          className="star"
          style={{
            left: `${(index * 17) % 100}%`,
            top: `${(index * 11) % 100}%`,
            animationDelay: `${index * .15}s`,
          }}
        />

      ))}

      {Array.from({ length: 30 }).map((_, index) => (

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
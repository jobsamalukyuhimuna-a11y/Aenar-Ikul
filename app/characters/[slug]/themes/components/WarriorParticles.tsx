export default function WarriorParticles() {

  return (

    <>
      {Array.from({ length: 140 }).map((_, index) => (

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

      {Array.from({ length: 80 }).map((_, index) => (

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

      {Array.from({ length: 50 }).map((_, index) => (

        <span
          key={`spark-${index}`}
          className="spark"
          style={{
            left: `${(index * 31) % 100}%`,
            top: `${(index * 13) % 100}%`,
            animationDelay: `${index * .15}s`,
          }}
        />

      ))}
    </>

  );

}
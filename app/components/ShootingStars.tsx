"use client";

const stars = Array.from({ length: 6 });

export default function ShootingStars() {
  return (
    <>
      {stars.map((_, i) => (
        <span
          key={i}
          style={{
            position: "absolute",
            top: `${10 + i * 12}%`,
            left: "-20%",
            width: "180px",
            height: "2px",
            background:
              "linear-gradient(to right, rgba(255,255,255,0), rgba(255,245,200,.95), rgba(255,255,255,0))",
            transform: "rotate(-25deg)",
            animation: `shoot ${8 + i * 3}s linear infinite`,
            animationDelay: `${i * 4}s`,
            opacity: 0,
            pointerEvents: "none",
            zIndex: 2,
            filter: "drop-shadow(0 0 8px rgba(255,230,150,.8))",
          }}
        />
      ))}

      <style jsx>{`
        @keyframes shoot {
          0% {
            transform: translateX(0) translateY(0) rotate(-25deg);
            opacity: 0;
          }

          5% {
            opacity: 1;
          }

          20% {
            transform: translateX(1600px) translateY(500px) rotate(-25deg);
            opacity: 0;
          }

          100% {
            transform: translateX(1600px) translateY(500px) rotate(-25deg);
            opacity: 0;
          }
        }
      `}</style>
    </>
  );
}
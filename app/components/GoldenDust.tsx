"use client";

const particles = Array.from({ length: 35 });

export default function GoldenDust() {
  return (
    <>
      {particles.map((_, i) => (
        <span
          key={i}
          style={{
            position: "absolute",
            width: `${2 + (i % 4)}px`,
            height: `${2 + (i % 4)}px`,
            borderRadius: "50%",
            background: "rgba(235,195,96,.9)",
            left: `${(i * 13) % 100}%`,
            top: `${(i * 17) % 100}%`,
            animation: `dustFloat ${8 + (i % 6)}s ease-in-out infinite`,
            animationDelay: `${i * 0.3}s`,
            opacity: 0.3 + (i % 4) * 0.15,
            pointerEvents: "none",
            zIndex: 1,
            boxShadow: "0 0 10px rgba(235,195,96,.8)",
          }}
        />
      ))}

      <style jsx>{`
        @keyframes dustFloat {
          0% {
            transform: translateY(0) translateX(0);
          }

          50% {
            transform: translateY(-40px) translateX(15px);
          }

          100% {
            transform: translateY(0) translateX(0);
          }
        }
      `}</style>
    </>
  );
}
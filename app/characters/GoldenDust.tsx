export default function GoldenDust() {
  return (
    <>
      <style>{`
        @keyframes dustFloat {
          from {
            transform: translateY(0px);
            opacity: .15;
          }

          50% {
            opacity: .55;
          }

          to {
            transform: translateY(-80px);
            opacity: .15;
          }
        }
      `}</style>

      {[...Array(30)].map((_, i) => (
        <span
          key={i}
          style={{
            position: "fixed",
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${4 + Math.random() * 6}px`,
            height: `${4 + Math.random() * 6}px`,
            borderRadius: "50%",
            background: "rgba(215,181,109,.45)",
            filter: "blur(2px)",
            animation: `dustFloat ${6 + Math.random() * 8}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 8}s`,
            pointerEvents: "none",
            zIndex: 1,
          }}
        />
      ))}
    </>
  );
}
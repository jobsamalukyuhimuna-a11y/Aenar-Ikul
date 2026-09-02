export default function GoldenDust() {
  return (
    <>
      <style>{`
        @keyframes dustFloat {
          from {
            transform: translateY(0);
            opacity: .12;
          }

          50% {
            opacity: .5;
          }

          to {
            transform: translateY(-80px);
            opacity: .12;
          }
        }

        .golden-dust {
          position: fixed;
          border-radius: 50%;
          background: rgba(215,181,109,.45);
          filter: blur(2px);
          pointer-events: none;
          z-index: 1;
          will-change: transform, opacity;
        }

        @media (max-width: 768px) {
          .golden-dust {
            filter: blur(1.5px);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .golden-dust {
            animation: none !important;
            opacity: .25 !important;
          }
        }
      `}</style>

      {[...Array(30)].map((_, i) => {
        const left = (i * 37) % 100;
        const top = (i * 61) % 100;
        const size = 4 + (i % 4);
        const duration = 6 + (i % 5);
        const delay = (i % 8);

        return (
          <span
            key={i}
            className="golden-dust"
            style={{
              left: `${left}%`,
              top: `${top}%`,
              width: `${size}px`,
              height: `${size}px`,
              animation: `dustFloat ${duration}s ease-in-out infinite`,
              animationDelay: `${delay}s`,
            }}
          />
        );
      })}
    </>
  );
}
"use client";

const stars = Array.from({ length: 3 });

export default function ShootingStars() {
  return (
    <>
      {stars.map((_, i) => (
        <span
          key={i}
          style={{
            position: "absolute",
            top: `${18 + i * 22}%`,
            left: "-30%",
            width: "240px",
            height: "2px",
            background:
              "linear-gradient(to right, transparent, rgba(255,245,200,.95), transparent)",
            transform: "rotate(-25deg)",
            animation: `shoot ${10 + i * 4}s linear infinite`,
            animationDelay: `${i * 5}s`,
            opacity: 0,
            pointerEvents: "none",
            zIndex: 1,
            filter:
              "drop-shadow(0 0 10px rgba(255,220,120,.9))",
          }}
        />
      ))}

      <style jsx>{`
        @keyframes shoot {

          0% {
            transform:
              translateX(0)
              translateY(0)
              rotate(-25deg);
            opacity:0;
          }


          8% {
            opacity:1;
          }


          25% {
            transform:
              translateX(1400px)
              translateY(420px)
              rotate(-25deg);
            opacity:0;
          }


          100% {
            transform:
              translateX(1400px)
              translateY(420px)
              rotate(-25deg);
            opacity:0;
          }

        }
      `}</style>
    </>
  );
}
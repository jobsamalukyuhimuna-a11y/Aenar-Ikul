"use client";

export default function NebulaBackground() {
  return (
    <>
      <div
        style={{
          position: "absolute",
          top: "-250px",
          left: "-180px",
          width: "650px",
          height: "650px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(133,74,255,.18) 0%, rgba(133,74,255,.08) 35%, transparent 70%)",
          filter: "blur(80px)",
          animation: "nebulaFloat1 18s ease-in-out infinite",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "absolute",
          bottom: "-220px",
          right: "-160px",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(0,175,255,.16) 0%, rgba(0,175,255,.06) 40%, transparent 72%)",
          filter: "blur(90px)",
          animation: "nebulaFloat2 22s ease-in-out infinite",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "absolute",
          top: "35%",
          left: "45%",
          width: "420px",
          height: "420px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(255,191,73,.12) 0%, transparent 70%)",
          filter: "blur(70px)",
          animation: "nebulaPulse 10s ease-in-out infinite",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
        }}
      />

      <style jsx>{`
        @keyframes nebulaFloat1 {
          0% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(60px, 40px) scale(1.12);
          }
          100% {
            transform: translate(0, 0) scale(1);
          }
        }

        @keyframes nebulaFloat2 {
          0% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(-70px, -50px) scale(1.15);
          }
          100% {
            transform: translate(0, 0) scale(1);
          }
        }

        @keyframes nebulaPulse {
          0% {
            opacity: .35;
            transform: translate(-50%, -50%) scale(1);
          }

          50% {
            opacity: .75;
            transform: translate(-50%, -50%) scale(1.2);
          }

          100% {
            opacity: .35;
            transform: translate(-50%, -50%) scale(1);
          }
        }
      `}</style>
    </>
  );
}
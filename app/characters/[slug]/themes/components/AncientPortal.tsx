"use client";

export default function AncientPortal() {
  return (
    <>
      {/* Main Sacred Portal */}
      <div className="ancient-portal">

        {/* Outer Ring */}
        <div className="portal-ring portal-ring-1" />

        {/* Middle Ring */}
        <div className="portal-ring portal-ring-2" />

        {/* Inner Ring */}
        <div className="portal-ring portal-ring-3" />

        {/* Golden Core */}
        <div className="portal-core" />

        {/* Sacred Aura */}
        <div className="portal-aura" />

        {/* Energy Waves */}
        <div className="portal-wave wave-1" />
        <div className="portal-wave wave-2" />
        <div className="portal-wave wave-3" />

        {/* Ancient Runes */}
        <div className="portal-runes">
          {Array.from({ length: 18 }).map((_, i) => (
            <span
              key={i}
              className="portal-rune"
              style={{
                transform: `rotate(${i * 20}deg) translateY(-215px)`,
              }}
            >
              ✦
            </span>
          ))}
        </div>

      </div>

      {/* Light Columns */}
      <div className="portal-light left-light" />
      <div className="portal-light right-light" />

      {/* Floating Stones */}
      {Array.from({ length: 10 }).map((_, i) => (
        <div
          key={`stone-${i}`}
          className="floating-stone"
          style={{
            left: `${20 + (i * 6)}%`,
            animationDelay: `${i * 0.4}s`,
            animationDuration: `${8 + (i % 4)}s`,
          }}
        />
      ))}

      {/* Divine Sparks */}
      {Array.from({ length: 24 }).map((_, i) => (
        <span
          key={`spark-${i}`}
          className="portal-spark"
          style={{
            left: `${(i * 13) % 100}%`,
            top: `${20 + ((i * 7) % 40)}%`,
            animationDelay: `${i * 0.15}s`,
          }}
        />
      ))}
    </>
  );
}
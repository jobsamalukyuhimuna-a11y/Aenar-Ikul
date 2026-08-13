"use client";

export default function AncientCity() {
  return (
    <>
      {/* Mountains */}
      <div className="ancient-mountains mountains-back" />
      <div className="ancient-mountains mountains-front" />

      {/* Clouds */}
      <div className="ancient-cloud cloud-1" />
      <div className="ancient-cloud cloud-2" />
      <div className="ancient-cloud cloud-3" />

      {/* Temple */}
      <div className="ancient-temple">

        <div className="temple-roof" />

        <div className="temple-body">

          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="temple-column"
            />
          ))}

        </div>

      </div>

      {/* Giant Statues */}
      <div className="guardian guardian-left">
        <div className="guardian-head" />
        <div className="guardian-body" />
      </div>

      <div className="guardian guardian-right">
        <div className="guardian-head" />
        <div className="guardian-body" />
      </div>

      {/* Floating Bridges */}
      <div className="ancient-bridge bridge-left" />
      <div className="ancient-bridge bridge-right" />

      {/* Golden Fog */}
      <div className="ancient-golden-fog fog-left" />
      <div className="ancient-golden-fog fog-right" />

      {/* Light Pillars */}
      {Array.from({ length: 8 }).map((_, i) => (
        <span
          key={i}
          className="light-pillar"
          style={{
            left: `${12 + i * 10}%`,
            animationDelay: `${i * 0.5}s`,
          }}
        />
      ))}
    </>
  );
}
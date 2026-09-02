"use client";

export default function AncientCity() {
  return (
    <>
      {/* Mountains */}
      <div
        className="ancient-mountains mountains-back"
        aria-hidden="true"
      />

      <div
        className="ancient-mountains mountains-front"
        aria-hidden="true"
      />

      {/* Clouds */}
      <div
        className="ancient-cloud cloud-1"
        aria-hidden="true"
      />

      <div
        className="ancient-cloud cloud-2"
        aria-hidden="true"
      />

      <div
        className="ancient-cloud cloud-3"
        aria-hidden="true"
      />

      {/* Temple */}
      <div
        className="ancient-temple"
        aria-hidden="true"
      >
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
      <div
        className="guardian guardian-left"
        aria-hidden="true"
      >
        <div className="guardian-head" />
        <div className="guardian-body" />
      </div>

      <div
        className="guardian guardian-right"
        aria-hidden="true"
      >
        <div className="guardian-head" />
        <div className="guardian-body" />
      </div>

      {/* Floating Bridges */}
      <div
        className="ancient-bridge bridge-left"
        aria-hidden="true"
      />

      <div
        className="ancient-bridge bridge-right"
        aria-hidden="true"
      />

      {/* Golden Fog */}
      <div
        className="ancient-golden-fog fog-left"
        aria-hidden="true"
      />

      <div
        className="ancient-golden-fog fog-right"
        aria-hidden="true"
      />

      {/* Light Pillars */}
      {Array.from({ length: 8 }).map((_, i) => (
        <span
          key={i}
          className="light-pillar"
          aria-hidden="true"
          style={{
            left: `${12 + i * 10}%`,
            animationDelay: `${i * 0.5}s`,
          }}
        />
      ))}
    </>
  );
}
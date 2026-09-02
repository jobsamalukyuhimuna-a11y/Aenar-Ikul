export default function CelestialTemple() {
  return (
    <>
      <div
        className="temple-horizon"
        aria-hidden="true"
      />

      <div
        className="temple-center"
        aria-hidden="true"
      >
        <div className="temple-dome" />

        <div className="temple-pillars">
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
      </div>

      <div
        className="temple-left"
        aria-hidden="true"
      >
        <div className="tower tower-1" />
        <div className="tower tower-2" />
        <div className="tower tower-3" />
      </div>

      <div
        className="temple-right"
        aria-hidden="true"
      >
        <div className="tower tower-1" />
        <div className="tower tower-2" />
        <div className="tower tower-3" />
      </div>

      <div
        className="temple-bridge"
        aria-hidden="true"
      />

      <div
        className="temple-platform"
        aria-hidden="true"
      />

      <div
        className="temple-glow"
        aria-hidden="true"
      />
    </>
  );
}
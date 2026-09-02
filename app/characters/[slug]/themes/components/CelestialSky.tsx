export default function CelestialSky() {
  return (
    <>
      <div
        className="sky-gradient"
        aria-hidden="true"
      />

      <div
        className="sun"
        aria-hidden="true"
      >
        <div className="sun-core" />
        <div className="sun-rays" />
        <div className="sun-ring ring-1" />
        <div className="sun-ring ring-2" />
        <div className="sun-ring ring-3" />
      </div>

      <div
        className="cloud cloud-1"
        aria-hidden="true"
      />

      <div
        className="cloud cloud-2"
        aria-hidden="true"
      />

      <div
        className="cloud cloud-3"
        aria-hidden="true"
      />

      <div
        className="cloud cloud-4"
        aria-hidden="true"
      />

      <div
        className="cloud cloud-5"
        aria-hidden="true"
      />

      <div
        className="mist mist-1"
        aria-hidden="true"
      />

      <div
        className="mist mist-2"
        aria-hidden="true"
      />

      <div
        className="mist mist-3"
        aria-hidden="true"
      />

      <div
        className="light-overlay"
        aria-hidden="true"
      />
    </>
  );
}
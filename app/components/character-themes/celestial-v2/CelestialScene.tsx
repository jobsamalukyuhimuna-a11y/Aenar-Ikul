"use client";

import "./Celestial.css";

import CelestialSky from "./CelestialSky";
import CelestialClouds from "./CelestialClouds";
import CelestialHero from "./CelestialHero";
import CelestialLayout from "./CelestialLayout";

export default function CelestialScene() {
  return (
    <main className="celestial-scene">

      <CelestialSky />

      <CelestialClouds />

      <section className="celestial-content">

        <CelestialHero />

        <CelestialLayout />

      </section>

    </main>
  );
}
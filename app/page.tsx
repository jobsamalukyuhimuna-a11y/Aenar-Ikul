import Hero from "./components/ui/Hero";
import About from "./components/sections/About";
import FeaturedUniverses from "./components/sections/FeaturedUniverses";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <FeaturedUniverses />
    </main>
  );
}
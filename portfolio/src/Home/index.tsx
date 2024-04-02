import { About } from "../components/About";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import { Navbar } from "../components/Navbar";
import { Project } from "../components/Projects";

export function Home() {
  return (
      <>
        <Navbar />
        <main className="overflow-x-hidden">
          <Hero />
          <Project />
          <About />
        </main>
        <Footer/>
      </>
  );
}

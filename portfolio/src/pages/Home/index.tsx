import { About } from "../../components/About";
import { Footer } from "../../components/Footer";
import { Hero } from "../../components/Hero";
import { Navbar } from "../../components/Navbar";
import { Project } from "../../components/Projects";

export function Home() {
  return (
      <div className="w-[100vw] h-[100vh] m-auto">
        <Navbar />
        <main className="overflow-x-hidden">
          <Hero />
          <Project />
          <About />
        </main>
        <Footer />
      </div>
  );
}

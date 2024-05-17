import { Navbar, Hero, Project, About, Footer } from '../../components/index';


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

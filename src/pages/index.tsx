import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
// import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import Cursor from "@/components/Cursor";

export default function Home() {
  return (
    <main className="relative px-16">
      <Cursor />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      {/* <Experience /> */}
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
};
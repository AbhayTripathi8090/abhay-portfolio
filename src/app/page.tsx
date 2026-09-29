
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import Hero from "@/components/sections/Hero";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        {/* Upcoming portfolio sections */}

        <section id="about" className="min-h-screen" />

        <section id="experience" className="min-h-screen" />

        <section id="skills" className="min-h-screen" />

        <section id="projects" className="min-h-screen" />

        <section id="testimonials" className="min-h-screen" />

        <section id="contact" className="min-h-screen" />
      </main>

      <Footer />
    </>
  );
}
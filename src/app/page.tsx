import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import projectsData from "../../public/data/projects.json";

export default function HomePage() {
  return (
    <div className="App">
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects initialProjects={projectsData.projects} />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}


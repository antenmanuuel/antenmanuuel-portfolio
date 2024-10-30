import { Routes, Route } from "react-router-dom";
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Experience from "../components/Experience";

const HomePage = () => (
  <>
    <Hero />
    <About />
    <Skills />
    <Projects />
    <Experience />
    <Contact />
  </>
);

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
};

export default Index;
import { Routes, Route } from "react-router-dom";
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Experience from "../components/Experience";

const HomePage = () => {
  const { education, workExperience } = Experience();
  
  return (
    <>
      <Hero />
      <About />
      <section id="education" className="section-padding bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground animate-fade-in">Education</h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div 
                key={index} 
                className="bg-card p-6 rounded-lg border border-border hover:shadow-lg transition-all duration-300 hover:scale-[1.02] animate-fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <h4 className="text-xl font-semibold text-card-foreground">{edu.degree}</h4>
                <p className="text-primary font-medium">{edu.institution}</p>
                <p className="text-muted-foreground text-sm">{edu.period}</p>
                <p className="mt-2 text-card-foreground">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="work-experience" className="section-padding bg-background">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground animate-fade-in">Work Experience</h2>
          <div className="space-y-6">
            {workExperience.map((job, index) => (
              <div 
                key={index} 
                className="bg-card p-6 rounded-lg border border-border hover:shadow-lg transition-all duration-300 hover:scale-[1.02] animate-fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <h4 className="text-xl font-semibold text-card-foreground">{job.title}</h4>
                <p className="text-primary font-medium">{job.company}</p>
                <p className="text-muted-foreground text-sm">{job.period}</p>
                <p className="mt-2 text-card-foreground">{job.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Skills />
      <Projects />
      <Contact />
    </>
  );
};

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
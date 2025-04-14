import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Experience from "../components/Experience";

const HomePage = () => {
  const { education, workExperience } = Experience();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <Navigation />
      <Hero />

      {/* Section divider */}
      <div className="w-full h-24 bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02]"></div>
      </div>

      <About />

      {/* Section divider */}
      <div className="w-full h-24 bg-gradient-to-b from-muted/30 via-background to-muted/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02]"></div>
      </div>

      <section id="education" className="section-padding bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent animate-fade-in">
            Education
          </h2>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div
                key={index}
                className="relative group bg-card/50 backdrop-blur-sm p-8 rounded-xl border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in overflow-hidden"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 relative z-10">
                  <div>
                    <h4 className="text-2xl font-bold text-primary mb-2 group-hover:text-primary/80 transition-colors">{edu.degree}</h4>
                    <p className="text-xl text-foreground/80 font-medium">{edu.institution}</p>
                  </div>
                  <div className="mt-4 md:mt-0 flex flex-col md:items-end">
                    <p className="text-muted-foreground">{edu.period}</p>
                  </div>
                </div>

                <div className="space-y-6 mt-6 relative z-10">
                  <div className="p-4 bg-background/50 rounded-lg border border-border/30">
                    <h5 className="text-lg font-semibold text-primary mb-2">Specialization</h5>
                    <p className="text-muted-foreground">{edu.specialization}</p>
                  </div>

                  <div className="p-4 bg-background/50 rounded-lg border border-border/30">
                    <h5 className="text-lg font-semibold text-primary mb-3">Key Coursework</h5>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {edu.coursework.map((course, i) => (
                        <li key={i} className="flex items-center gap-2 text-muted-foreground group-hover:text-foreground transition-colors">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary/70 group-hover:bg-primary transition-colors" />
                          <span>{course}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  
                </div>

                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section divider */}
      <div className="w-full h-24 bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02]"></div>
      </div>

      <section id="work-experience" className="section-padding bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent animate-fade-in">
            Work Experience
          </h2>
          <div className="relative">
            {/* Timeline line with gradient effect */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary/10 via-primary/40 to-primary/10 rounded-full" />

            <div className="space-y-16">
              {workExperience.map((job, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    } gap-8 animate-fade-in`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  {/* Timeline dot with pulse effect */}
                  <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-5 h-5 bg-primary rounded-full shadow-lg shadow-primary/50 z-10">
                    <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-30"></div>
                  </div>

                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div className="group relative bg-card/50 backdrop-blur-sm p-6 rounded-xl border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      <div className="relative z-10">
                        <h4 className="text-xl font-bold text-foreground mb-2 group-hover:text-foreground/80 transition-colors">{job.title}</h4>
                        <p className="text-lg font-medium text-foreground/90 mb-2">{job.company}</p>
                        <p className="text-sm text-muted-foreground mb-4">{job.period}</p>
                        <ul className="space-y-4">
                          {job.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start gap-3 text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                              <span className="min-w-[6px] h-[6px] rounded-full bg-primary/70 group-hover:bg-primary transition-colors mt-2" />
                              <span className="text-sm md:text-base">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section divider */}
      <div className="w-full h-24 bg-gradient-to-b from-muted/30 via-background to-muted/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02]"></div>
      </div>

      <Skills />

      {/* Section divider */}
      <div className="w-full h-24 bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02]"></div>
      </div>

      <Projects />

      {/* Section divider */}
      <div className="w-full h-24 bg-gradient-to-b from-muted/30 via-background to-muted/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02]"></div>
      </div>

      <Contact />

      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className={`fixed right-6 bottom-6 p-3 rounded-full bg-primary/90 backdrop-blur-sm text-primary-foreground shadow-lg transition-all duration-300 z-50 
          ${showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
      >
        <ChevronUp className="w-6 h-6" />
      </button>
    </>
  );
};

const Index = () => {
  return (
    <div className="min-h-screen">
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
};

export default Index;

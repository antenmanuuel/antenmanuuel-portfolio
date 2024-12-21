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
      <Navigation />
      <Hero />
      <About />
      <section id="education" className="section-padding bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground animate-fade-in">Education</h2>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div 
                key={index} 
                className="bg-card p-8 rounded-xl border border-border shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] animate-fade-in group"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h4 className="text-2xl font-bold text-primary mb-2 group-hover:text-primary/80 transition-colors">{edu.degree}</h4>
                    <p className="text-xl text-foreground/80 font-medium">{edu.institution}</p>
                  </div>
                  <div className="mt-2 md:mt-0 flex flex-col md:items-end">
                    <p className="text-muted-foreground">{edu.period}</p>
                    {edu.gpa && (
                      <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold mt-2">
                        GPA: {edu.gpa}
                      </span>
                    )}
                  </div>
                </div>
                
                <div className="space-y-4 mt-6">
                  <div>
                    <h5 className="text-lg font-semibold text-primary mb-2">Specialization</h5>
                    <p className="text-muted-foreground">{edu.specialization}</p>
                  </div>
                  
                  <div>
                    <h5 className="text-lg font-semibold text-primary mb-2">Key Coursework</h5>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {edu.coursework.map((course, i) => (
                        <li key={i} className="text-muted-foreground flex items-center gap-2">
                          <span className="text-primary">•</span>
                          {course}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="text-lg font-semibold text-primary mb-2">Activities</h5>
                    <ul className="space-y-2">
                      {edu.activities.map((activity, i) => (
                        <li key={i} className="text-muted-foreground flex items-center gap-2">
                          <span className="text-primary">•</span>
                          {activity}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="work-experience" className="section-padding bg-background">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground animate-fade-in">Work Experience</h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-primary/30"></div>
            
            <div className="space-y-12">
              {workExperience.map((job, index) => (
                <div 
                  key={index}
                  className={`relative flex flex-col ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } gap-8 animate-fade-in`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full"></div>
                  
                  {/* Content */}
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div className="bg-card p-6 rounded-xl border border-border shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] group">
                      <h4 className="text-xl font-bold text-primary mb-2 group-hover:text-primary/80 transition-colors">{job.title}</h4>
                      <p className="text-lg font-medium text-foreground/80 mb-2">{job.company}</p>
                      <p className="text-sm text-muted-foreground mb-4">{job.period}</p>
                      <p className="text-muted-foreground">{job.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
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
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
};

export default Index;
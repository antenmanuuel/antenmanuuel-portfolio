const Projects = () => {
  const projects = [
    {
      title: "Project 1",
      description: "A brief description of your first project. What problems did it solve? What technologies did you use?",
      technologies: ["React", "Node.js", "MongoDB"],
      link: "#"
    },
    {
      title: "Project 2",
      description: "Description of your second project. Highlight the key features and your role in development.",
      technologies: ["Python", "Django", "PostgreSQL"],
      link: "#"
    },
    {
      title: "Project 3",
      description: "Overview of your third project. What was the goal? What did you learn from this experience?",
      technologies: ["TypeScript", "Next.js", "Tailwind CSS"],
      link: "#"
    }
  ];

  return (
    <section id="projects" className="section-padding bg-background">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground animate-fade-in">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 border border-border animate-fade-in hover:scale-105"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-card-foreground">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="bg-muted text-muted-foreground px-3 py-1 rounded-full text-sm animate-fade-in"
                      style={{ animationDelay: `${(index * 200) + (techIndex * 100)}ms` }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.link}
                  className="text-primary hover:text-primary/80 font-medium inline-flex items-center group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Github 
                  <span className="ml-1 transform transition-transform group-hover:translate-x-1">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
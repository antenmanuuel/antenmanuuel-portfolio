const Projects = () => {
  const projects = [
    {
      title: "Medical360",
      description: "A hospital management tool for real-time resource tracking and staff coordination. Features instant updates with Socket.IO, deployed on Heroku using CI/CD pipelines for seamless updates and high reliability.",
      technologies: ["React", "Node.js", "MongoDB", "Node.js", "Socket.io", "Heroku", "Github CI/CD"],
      link: "https://github.com/antenmanuuel/Medical360"
    },
    {
      title: "Word Hunt",
      description: "A multiplayer word puzzle game featuring real-time chat, score tracking, and instant user retrieval with cookies. Utilizes RESTful APIs and WebSocket with Socket.IO for fast, responsive gameplay and smooth player interactions.",
      technologies: ["React.js", "Express.js", "MongoDB", "Node.js", "Heroku", "Tailwind CSS"],
      link: "https://github.com/Ifore134/WordHunt"
    },
    {
      title: "Dev Collab Net",
      description: "A StackOverflow-inspired platform with reputation scoring, user profiles, tagging, and comments to foster community engagement. Features a scalable RESTful API for fast interactions and secure user authentication with bcrypt and custom middleware.",
      technologies: ["React.js", "Express.js", "MongoDB", "Node.js"],
      link: "https://github.com/antenmanuuel/DevCollabNet"
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
const Projects = () => {
  const projects = [
    {
      title: "Medical360",
      description: "A hospital management tool for real-time resource tracking and staff coordination. Features instant updates with Socket.IO, deployed on Heroku using CI/CD pipelines for seamless updates and high reliability.",
      technologies: ["React", "Node.js", "MongoDB", "Node.js", "Socket.io", "Heroku", "Github CI/CD", "Tailwind CSS", "JavaScript", "Material-UI"
      ],
      link: "https://github.com/antenmanuuel/Medical360"
    },
    {
      title: "Word Hunt",
      description: "A multiplayer word puzzle game featuring real-time chat, score tracking, and instant user retrieval with cookies. Utilizes RESTful APIs and WebSocket with Socket.IO for fast, responsive gameplay and smooth player interactions.",
      technologies: ["React.js", "Express.js", "MongoDB", "Node.js", "Heroku", "Tailwind CSS", "Socket.io", "JavaScript"],
      link: "https://github.com/Ifore134/WordHunt"
    },
    {
      title: "Dev Collab Net",
      description: "A StackOverflow-inspired platform with reputation scoring, user profiles, tagging, and comments to foster community engagement. Features a scalable RESTful API for fast interactions and secure user authentication with bcrypt and custom middleware.",
      technologies: ["React.js", "Express.js", "MongoDB", "Node.js", "JavaScript", "Tailwind CSS", "Material-UI"],
      link: "https://github.com/antenmanuuel/DevCollabNet"
    }
  ];

  return (
    <section id="projects" className="section-padding bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent animate-gradient">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
              <div
                  key={index}
                  className="group relative bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 animate-slide-up border border-border/50 backdrop-blur-sm hover:-translate-y-2"
                  style={{animationDelay: `${index * 200}ms`}}
              >
                {/* Project Header with Floating Effect */}
                <div className="relative p-6 bg-gradient-to-br from-primary/10 to-primary/5 group-hover:bg-gradient-to-br group-hover:from-primary/20 group-hover:to-primary/10 transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-20"/>
                  <h3 className="relative text-2xl font-bold text-white mb-2 group-hover:text-white/80 transition-colors">
                    {project.title}
                  </h3>
                </div>

                {/* Project Content with Fade-in Effect */}
                <div className="p-6 transform transition-all duration-500 group-hover:scale-[1.02]">
                  <p className="text-muted-foreground mb-4 transition-colors group-hover:text-foreground">
                    {project.description}
                  </p>

                  {/* Technologies with Pop-in Effect */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                        <span
                            key={techIndex}
                            className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium animate-fade-in hover:bg-primary/20 transition-colors"
                            style={{
                              animationDelay: `${(index * 200) + (techIndex * 100)}ms`,
                              transform: `translateY(${Math.sin(techIndex) * 2}px)`
                            }}
                        >
                          {tech}
                        </span>
                    ))}
                  </div>

                  {/* GitHub Link with Hover Effect */}
                  <a
                      href={project.link}
                      className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium group/link relative overflow-hidden"
                      target="_blank"
                      rel="noopener noreferrer"
                  >
                    <svg
                        className="w-5 h-5 transition-transform group-hover/link:rotate-12 duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                      <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"
                      />
                    </svg>
                    <span className="relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary after:origin-left after:scale-x-0 after:transition-transform group-hover/link:after:scale-x-100">
                      View on GitHub
                    </span>
                  </a>
                </div>

                {/* Background Gradient Effect */}
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
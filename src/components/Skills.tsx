const Skills = () => {
  const skills = [
    { category: "Programming Languages", items: ["C", "C++", "Python", "Java", "HTML", "CSS3", "JavaScript", "TypeScript", "SQL"] },
    { category: "Frameworks/Libraries", items: ["React.js", "Node.js", "Express.js", "Spring Boot"] },
    { category: "Tools", items: ["Git", "Docker", "Postman", "Heroku", "Monday.com", "Microsoft Azure", "Google Cloud Platform"] },
    { category: "Database", items: ["MySQL", "MongoDB", "Oracle DB", "PostgreSQL"] }
  ];

  return (
    <section id="skills" className="section-padding bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent animate-fade-in">
          Technical Skills
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skillGroup, index) => (
            <div 
              key={index}
              className="group relative bg-card/50 backdrop-blur-sm p-6 rounded-xl border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in overflow-hidden"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <h3 className="text-xl font-semibold mb-4 text-white relative z-10">
                {skillGroup.category}
              </h3>
              
              <ul className="space-y-3 relative z-10">
                {skillGroup.items.map((skill, skillIndex) => (
                  <li 
                    key={skillIndex}
                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300"
                    style={{ animationDelay: `${(index * 200) + (skillIndex * 100)}ms` }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/70 group-hover:bg-primary transition-colors duration-300" />
                    <span className="text-sm md:text-base">{skill}</span>
                  </li>
                ))}
              </ul>

              {/* Hover effect decoration */}
              <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-primary/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
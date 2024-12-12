const Skills = () => {
  const skills = [
    { category: "Programming Languages", items: ["JavaScript", "TypeScript", "Python", "Java"] },
    { category: "Web Technologies", items: ["React", "Node.js", "HTML5", "CSS3"] },
    { category: "Tools & Platforms", items: ["Git", "Docker", "AWS", "VS Code"] },
    { category: "Soft Skills", items: ["Problem Solving", "Team Collaboration", "Communication", "Time Management"] }
  ];

  return (
    <section id="skills" className="section-padding bg-muted/30">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground animate-fade-in">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skillGroup, index) => (
            <div 
              key={index}
              className="bg-background p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-border animate-fade-in hover:scale-105"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <h3 className="text-xl font-semibold mb-4 text-primary">{skillGroup.category}</h3>
              <ul className="space-y-2">
                {skillGroup.items.map((skill, skillIndex) => (
                  <li 
                    key={skillIndex}
                    className="flex items-center text-muted-foreground hover:text-foreground transition-colors"
                    style={{ animationDelay: `${(index * 200) + (skillIndex * 100)}ms` }}
                  >
                    <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
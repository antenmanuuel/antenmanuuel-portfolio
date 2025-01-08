const About = () => {
  return (
    <section id="about" className="section-padding bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent animate-fade-in">
          About Me
        </h2>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 animate-fade-in [animation-delay:200ms]">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/50 to-primary/30 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
              <div className="relative aspect-square rounded-xl overflow-hidden shadow-xl">
                <img 
                  src="/images/me.jpeg"
                  alt="About Me" 
                  className="w-full h-full object-cover transform transition duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="space-y-6">
              <div className="relative group p-6 bg-card/50 backdrop-blur-sm rounded-xl border border-border/50 shadow-lg animate-fade-in [animation-delay:400ms]">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
                <p className="text-lg relative z-10 text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                  I am currently pursuing a degree in Computer Science at Stony Brook University, with an expected graduation date in Spring 2025. My academic journey has equipped me with strong foundations in software development, algorithms, and problem-solving.
                </p>
              </div>
              
              <div className="relative group p-6 bg-card/50 backdrop-blur-sm rounded-xl border border-border/50 shadow-lg animate-fade-in [animation-delay:600ms]">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
                <p className="text-lg relative z-10 text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                  During my studies, I focused on full-stack development and completed several projects 
                  that allowed me to apply my knowledge in real-world scenarios. I'm particularly 
                  interested in web technologies and their potential to create impactful user experiences.
                </p>
              </div>
              
              <div className="relative group p-6 bg-card/50 backdrop-blur-sm rounded-xl border border-border/50 shadow-lg animate-fade-in [animation-delay:800ms]">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
                <p className="text-lg relative z-10 text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                  I'm currently seeking opportunities where I can contribute to meaningful projects 
                  while continuing to grow as a professional developer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
const About = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground animate-fade-in">About Me</h2>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 animate-fade-in [animation-delay:200ms]">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-primary/50 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <img 
                  src="src/images/me.jpeg"
                  alt="About Me" 
                  className="w-full h-full object-cover transform transition duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="space-y-6 text-muted-foreground">
              <p className="text-lg animate-fade-in [animation-delay:400ms] hover:text-foreground transition-colors">
                I recently graduated from Stony Brook University with a degree in Computer Science. 
                My academic journey has equipped me with strong foundations in software development, 
                algorithms, and problem-solving.
              </p>
              <p className="text-lg animate-fade-in [animation-delay:600ms] hover:text-foreground transition-colors">
                During my studies, I focused on full-stack development and completed several projects 
                that allowed me to apply my knowledge in real-world scenarios. I'm particularly 
                interested in web technologies and their potential to create impactful user experiences.
              </p>
              <p className="text-lg animate-fade-in [animation-delay:800ms] hover:text-foreground transition-colors">
                I'm currently seeking opportunities where I can contribute to meaningful projects 
                while continuing to grow as a professional developer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
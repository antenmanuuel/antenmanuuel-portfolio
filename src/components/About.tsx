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
                  I am currently pursuing a degree in Computer Science at Stony Brook University, with an expected graduation in Spring 2026. My academic journey has equipped me with strong foundations in software engineering, algorithms, and machine learning.
                </p>
              </div>
              
              <div className="relative group p-6 bg-card/50 backdrop-blur-sm rounded-xl border border-border/50 shadow-lg animate-fade-in [animation-delay:600ms]">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
                <p className="text-lg relative z-10 text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                  Beyond full-stack development, I have a strong interest in machine learning research, particularly in natural language processing. I have worked on projects involving deep learning models, enhancing their efficiency and interpretability.
                </p>
              </div>
              
              <div className="relative group p-6 bg-card/50 backdrop-blur-sm rounded-xl border border-border/50 shadow-lg animate-fade-in [animation-delay:800ms]">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
                <p className="text-lg relative z-10 text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                  One of my recent projects, a BERT Attention Visualizer, enables researchers to analyze token interactions in Transformer-based models. By optimizing inference latency and API response handling, I improved processing efficiency by 20 percent.
                </p>
              </div>

              <div className="relative group p-6 bg-card/50 backdrop-blur-sm rounded-xl border border-border/50 shadow-lg animate-fade-in [animation-delay:1000ms]">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
                <p className="text-lg relative z-10 text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                  I'm actively looking for opportunities where I can apply my skills in software engineering and machine learning, contributing to impactful projects that push the boundaries of technology.
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

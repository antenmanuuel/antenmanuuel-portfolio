const About = () => {
  return (
    <section id="about" className="section-padding bg-gradient-to-b from-background to-muted/30 relative">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.015] pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] to-secondary/[0.03] pointer-events-none"></div>

      <div className="container mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent animate-fade-in">
          About Me
        </h2>

        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-12">
          {/* Profile image with floating elements */}
          <div className="md:w-1/2 animate-fade-in [animation-delay:200ms]">
            <div className="relative group perspective">
              {/* Main profile image with frame effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/50 to-primary/30 rounded-xl blur opacity-25 group-hover:opacity-100 transition duration-1000"></div>
              <div className="relative aspect-square rounded-xl overflow-hidden shadow-xl bg-card/80 p-3 transform transition-all duration-500 group-hover:rotate-y-6 group-hover:shadow-2xl">
                <div className="absolute inset-0 bg-card/50 rounded-xl backdrop-blur-sm"></div>
                <div className="relative h-full rounded-lg overflow-hidden z-10">
                  <img
                    src="/images/me.jpeg"
                    alt="About Me"
                    className="w-full h-full object-cover transform transition duration-700 group-hover:scale-110"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600";
                    }}
                  />
                  {/* Image overlay with subtle gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent opacity-50"></div>
                </div>

                {/* Film strip effect on image */}
                <div className="absolute top-5 left-5 right-5 h-4 bg-background/10 backdrop-blur-sm rounded-sm z-20"></div>
                <div className="absolute bottom-5 left-5 right-5 h-4 bg-background/10 backdrop-blur-sm rounded-sm z-20"></div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-xl opacity-60"></div>
              <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-primary/10 rounded-full blur-xl opacity-70"></div>
            </div>

            {/* Quick stats */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="bg-card/50 backdrop-blur-sm p-4 rounded-lg border border-border/50 text-center transition-all hover:shadow-md hover:bg-card/70">
                <span className="block text-2xl font-bold text-primary">3+ Years</span>
                <span className="text-sm text-muted-foreground">Coding Experience</span>
              </div>
              <div className="bg-card/50 backdrop-blur-sm p-4 rounded-lg border border-border/50 text-center transition-all hover:shadow-md hover:bg-card/70">
                <span className="block text-2xl font-bold text-primary">5+</span>
                <span className="text-sm text-muted-foreground">Projects Completed</span>
              </div>
            </div>
          </div>

          {/* Bio cards */}
          <div className="md:w-1/2">
            <div className="space-y-6">
              <div className="relative group p-6 bg-card/50 backdrop-blur-sm rounded-xl border border-border/50 shadow-lg animate-fade-in [animation-delay:400ms] hover:shadow-xl transition-all">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
                <h3 className="text-lg font-semibold mb-2 text-foreground">Academic Journey</h3>
                <p className="text-base relative z-10 text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                  I am currently pursuing a degree in Computer Science at Stony Brook University, graduating this May. My academic journey has equipped me with strong foundations in software engineering, algorithms, and machine learning.
                </p>
              </div>

              <div className="relative group p-6 bg-card/50 backdrop-blur-sm rounded-xl border border-border/50 shadow-lg animate-fade-in [animation-delay:600ms] hover:shadow-xl transition-all">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
                <h3 className="text-lg font-semibold mb-2 text-foreground">Research Interests</h3>
                <p className="text-base relative z-10 text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                  Beyond full-stack development, I have a strong interest in machine learning research, particularly in natural language processing. I have worked on projects involving deep learning models, enhancing their efficiency and interpretability.
                </p>
              </div>

              <div className="relative group p-6 bg-card/50 backdrop-blur-sm rounded-xl border border-border/50 shadow-lg animate-fade-in [animation-delay:800ms] hover:shadow-xl transition-all">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
                <h3 className="text-lg font-semibold mb-2 text-foreground">Highlight Project</h3>
                <p className="text-base relative z-10 text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                  One of my recent projects, a BERT Attention Visualizer, enables researchers to analyze token interactions in Transformer-based models. By optimizing inference latency and API response handling, I improved processing efficiency by 20 percent.
                </p>
              </div>

              <div className="relative group p-6 bg-card/50 backdrop-blur-sm rounded-xl border border-border/50 shadow-lg animate-fade-in [animation-delay:1000ms] hover:shadow-xl transition-all">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
                <h3 className="text-lg font-semibold mb-2 text-foreground">Career Goals</h3>
                <p className="text-base relative z-10 text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                  I'm actively looking for opportunities where I can apply my skills in software engineering and machine learning, contributing to impactful projects that push the boundaries of technology.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full max-w-6xl mx-auto my-16 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>

        <div className="max-w-6xl mx-auto animate-fade-in [animation-delay:1200ms]">
          {/* Photo gallery - masonry style */}
          <div className="mt-12">
            <h4 className="text-xl font-semibold mb-6 text-foreground text-center">Life in Snapshots</h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {/* Walgreens Internship image - polaroid style */}
              <div className="relative group/polaroid transform transition-all duration-300 hover:-rotate-2 hover:z-10">
                <div className="bg-card shadow-lg p-3 pb-8 rounded-sm">
                  <div className="relative aspect-[4/5] overflow-hidden mb-2">
                    <img
                      src="/images/walgreens-placeholder.jpg"
                      alt="Walgreens Internship"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "https://images.unsplash.com/photo-1587019158091-1a103c5dd17f?q=80&w=400";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent opacity-0 group-hover/polaroid:opacity-100 transition-opacity"></div>
                  </div>
                  <p className="text-center text-sm text-foreground font-medium">Walgreens Internship</p>
                </div>
                <div className="absolute inset-0 -z-10 transform rotate-3 bg-primary/5 rounded-sm"></div>
              </div>

              {/* TBD image - polaroid style */}
              <div className="relative group/polaroid transform transition-all duration-300 hover:rotate-2 hover:z-10">
                <div className="bg-card shadow-lg p-3 pb-8 rounded-sm">
                  <div className="relative aspect-[4/5] overflow-hidden mb-2">
                    <img
                      src="/images/travel.jpg"
                      alt="Traveling"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?q=80&w=400";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent opacity-0 group-hover/polaroid:opacity-100 transition-opacity"></div>
                  </div>
                  <p className="text-center text-sm text-foreground font-medium">Traveling</p>
                </div>
                <div className="absolute inset-0 -z-10 transform -rotate-2 bg-primary/5 rounded-sm"></div>
              </div>

              {/* Reading image - polaroid style */}
              <div className="relative group/polaroid transform transition-all duration-300 hover:-rotate-2 hover:z-10">
                <div className="bg-card shadow-lg p-3 pb-8 rounded-sm">
                  <div className="relative aspect-[4/5] overflow-hidden mb-2">
                    <img
                      src="/images/stony-brook-campus-aerial.jpg"
                      alt="Stony Brook Campus"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "https://live.staticflickr.com/65535/48016318812_2b5f2d9e22_b.jpg";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent opacity-0 group-hover/polaroid:opacity-100 transition-opacity"></div>
                  </div>
                  <p className="text-center text-sm text-foreground font-medium">Campus in Autumn</p>
                </div>
                <div className="absolute inset-0 -z-10 transform rotate-1 bg-primary/5 rounded-sm"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Clubs Involvement Section */}
        <div className="w-full max-w-6xl mx-auto my-16 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>

        <div className="max-w-6xl mx-auto animate-fade-in [animation-delay:1300ms]" id="club-involvement">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent text-center">
            Club Involvement
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Computing Society */}
            <div className="relative group bg-card/50 backdrop-blur-sm p-6 rounded-xl border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-primary"><path d="M18 16s-4-1-7-1-7 1-7 1" /><path d="M18 5v14M10 5v14M2 7v10M22 7v10" /></svg>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2 text-foreground">Stony Brook Computing Society</h4>
                  <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                    As an active member of the Stony Brook Computing Society, I collaborate with fellow CS enthusiasts on coding challenges and hackathon projects. The society provides a supportive community where we share knowledge, discuss emerging technologies, and organize workshops to help members develop practical skills that complement our academic coursework.
                  </p>
                </div>
              </div>
            </div>

            {/* AI Club */}
            <div className="relative group bg-card/50 backdrop-blur-sm p-6 rounded-xl border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-primary"><path d="M12 2a8 8 0 0 0-8 8c0 5.2 3.4 8 8 8 4.6 0 8-2.8 8-8a8 8 0 0 0-8-8Z" /><path d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z" /></svg>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2 text-foreground">Artificial Intelligence Club</h4>
                  <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                    Through the AI Club, I explore cutting-edge developments in machine learning and artificial intelligence. We work on projects ranging from computer vision applications to natural language processing models. The club hosts guest speakers from industry and academia, providing valuable insights into real-world AI applications and research opportunities that have directly influenced my interest in NLP and attention mechanisms.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <style>{`
          .perspective { perspective: 1000px; }
          .rotate-y-6 { transform: rotateY(6deg); }
        `}</style>
      </div>
    </section>
  );
};

export default About;

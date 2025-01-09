import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-primary/10 to-background animate-gradient">
        <div className="absolute inset-0 opacity-20" 
          style={{
            backgroundImage: 'linear-gradient(135deg, #000 25%, transparent 25%) -10px 0/ 20px 20px, linear-gradient(225deg, #000 25%, transparent 25%) -10px 0/ 20px 20px, linear-gradient(315deg, #000 25%, transparent 25%) 0px 0/ 20px 20px, linear-gradient(45deg, #000 25%, transparent 25%) 0px 0/ 20px 20px'
          }}>
        </div>
      </div>

      <div className="max-w-3xl mx-auto text-center px-4 relative z-10">
        <div className="flex flex-col items-center gap-6 mb-8">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20 flex-shrink-0 bg-primary/5 transition-all duration-500 hover:scale-105">
            <img
              src="/images/profile.jpg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h1 className="flex items-center justify-center gap-3 text-4xl md:text-6xl font-bold mb-4 text-primary animate-slide-up whitespace-nowrap">
              Hi, I'm Anten Manuuel
              <span className="animate-wave inline-block">👋</span>
            </h1>
            <div className="text-xl text-muted-foreground h-[32px] animate-fade-in">
              <TypeAnimation
                sequence={[
                  'Aspiring Software Engineer',
                  1000,
                  'Former Walgreens Software Engineer Intern',
                  1000,
                  'Computer Science Student',
                  1000,
                  'Full Stack Developer',
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center gap-4 mb-8 animate-slide-up">
          <a href="https://github.com/antenmanuuel" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors hover:scale-110 transform duration-300">
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
          </a>
          <a href="https://www.linkedin.com/in/anten-manuuel/" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors hover:scale-110 transform duration-300">
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>
        </div>
        {/*<a */}
        {/*  href="https://drive.google.com/file/d/1loqnHwogmhCGXY2BX_B4bd6wRp8qSHK4/view?usp=sharing"*/}
        {/*  target="_blank"*/}
        {/*  rel="noopener noreferrer"*/}
        {/*  className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-full text-lg font-semibold hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl animate-bounce-slow"*/}
        {/*>*/}
        {/*  View Resume*/}
        {/*</a>*/}
      </div>
    </section>
  );
};

export default Hero;
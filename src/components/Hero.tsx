import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="container mx-auto px-4 pt-20">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 text-center md:text-left animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
              Hi, I'm{" "}
              <span className="text-primary hover:scale-105 transition-transform inline-block">
                Anten Manuuel
              </span>
            </h1>
            <div className="text-xl md:text-2xl text-muted-foreground mb-8 h-[60px]">
              <TypeAnimation
                sequence={[
                  'A recent graduate',
                  1000,
                  'A Full Stack Developer',
                  1000,
                  'Passionate about technology',
                  1000,
                  'Ready to make an impact',
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="font-medium"
              />
            </div>
            <a 
              href="#contact"
              className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary/90 transition-all hover:scale-105 hover:shadow-lg"
            >
              Get in Touch
            </a>
          </div>
          <div className="md:w-1/2 mt-12 md:mt-0">
            <div className="relative animate-fade-in [animation-delay:200ms]">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden mx-auto border-4 border-primary hover:scale-105 transition-all duration-300 hover:shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
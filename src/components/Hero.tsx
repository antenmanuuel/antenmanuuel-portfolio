import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <section className="section-padding pt-32">
      <div className="max-w-3xl mx-auto text-center">
        <div className="flex flex-col items-center gap-6 mb-8">
          <div className="w-48 h-48 rounded-full overflow-hidden border-2 border-primary flex-shrink-0">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h1 className="text-4xl font-bold mb-2 text-foreground">
              Anten Manuuel
            </h1>
            <div className="text-xl text-muted-foreground h-[32px]">
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
              />
            </div>
          </div>
        </div>
        <p className="text-lg text-muted-foreground mb-8 mx-auto max-w-2xl">
          Recent Computer Science graduate passionate about building impactful web applications 
          and solving complex problems through elegant solutions.
        </p>
        <a 
          href="#contact"
          className="inline-block bg-primary text-primary-foreground px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors"
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
};

export default Hero;
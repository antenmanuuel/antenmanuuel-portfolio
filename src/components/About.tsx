const About = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">About Me</h2>
        <div className="max-w-3xl mx-auto">
          <div className="space-y-6 text-muted-foreground">
            <p className="text-lg">
              I recently graduated from [Your University] with a degree in [Your Major]. 
              My academic journey has equipped me with strong foundations in [relevant skills], 
              and I'm passionate about [your interests/specializations].
            </p>
            <p className="text-lg">
              During my studies, I focused on [specific areas] and completed several projects 
              that allowed me to apply my knowledge in real-world scenarios. I'm particularly 
              interested in [specific technology/field] and its potential to [solve specific problems].
            </p>
            <p className="text-lg">
              I'm currently seeking opportunities where I can contribute to meaningful projects 
              while continuing to grow as a professional.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
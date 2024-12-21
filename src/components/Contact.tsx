import { Github, Linkedin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-muted/30">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground animate-fade-in">Get in Touch</h2>
        <div className="max-w-xl mx-auto text-center">
          <p className="text-lg text-muted-foreground mb-8 animate-fade-in [animation-delay:200ms]">
            I'm currently looking for new opportunities and would love to hear from you.
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>
          <div className="space-y-4">
            <a 
              href="mailto:your.email@example.com"
              className="block bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary/90 transition-all duration-300 animate-fade-in [animation-delay:400ms] hover:scale-105 hover:shadow-lg"
            >
              Send me an email
            </a>
            <a 
              href="tel:+1234567890"
              className="block bg-secondary text-secondary-foreground px-8 py-3 rounded-lg hover:bg-secondary/90 transition-all duration-300 animate-fade-in [animation-delay:500ms] hover:scale-105 hover:shadow-lg"
            >
              <span className="flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" />
                +1 (234) 567-890
              </span>
            </a>
            <div className="flex justify-center space-x-6 mt-8">
              <a 
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-all duration-300 flex items-center gap-2 animate-fade-in [animation-delay:600ms] hover:scale-110"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
              <a 
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-all duration-300 flex items-center gap-2 animate-fade-in [animation-delay:800ms] hover:scale-110"
              >
                <Github className="w-5 h-5" />
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
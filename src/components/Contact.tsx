import { Github, Linkedin, Phone, Mail } from "lucide-react";

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
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in [animation-delay:400ms]">
              <a 
                href="mailto:your.email@example.com"
                className="flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <Mail className="w-5 h-5" />
                Send Email
              </a>
              <a 
                href="tel:+1234567890"
                className="flex items-center justify-center gap-2 bg-secondary text-secondary-foreground px-6 py-3 rounded-lg hover:bg-secondary/90 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <Phone className="w-5 h-5" />
                Call Me
              </a>
            </div>
            
            <div className="flex justify-center gap-4 animate-fade-in [animation-delay:600ms]">
              <a 
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#0077B5] text-white px-6 py-3 rounded-lg hover:bg-[#0077B5]/90 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
              <a 
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#333] text-white px-6 py-3 rounded-lg hover:bg-[#333]/90 transition-all duration-300 hover:scale-105 hover:shadow-lg"
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
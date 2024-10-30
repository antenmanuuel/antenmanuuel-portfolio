import { Github, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-muted/30">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">Get in Touch</h2>
        <div className="max-w-xl mx-auto text-center">
          <p className="text-lg text-muted-foreground mb-8">
            I'm currently looking for new opportunities and would love to hear from you.
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>
          <div className="space-y-4">
            <a 
              href="mailto:your.email@example.com"
              className="block bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors"
            >
              Send me an email
            </a>
            <div className="flex justify-center space-x-6 mt-8">
              <a 
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
              <a 
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
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
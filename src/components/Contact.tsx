import { Linkedin } from "lucide-react";
import { Phone } from "lucide-react";
import { Mail } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 pointer-events-none" />
      <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent animate-fade-in">
            Get in Touch
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto animate-fade-in">
            I'm always open to new opportunities and collaborations. Feel free to reach out through any of these channels.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Email Card */}
          <div className="group relative transform transition-all duration-300 hover:-translate-y-2">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-70 transition-all duration-500" />
            <a
              href="mailto:antenmanuuel01@gmail.com"
              className="block relative p-6 bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 shadow-lg transition-all duration-300 group-hover:shadow-2xl group-hover:border-primary/50"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-3 bg-primary/10 rounded-full transform transition-transform duration-300 group-hover:scale-110 group-hover:bg-primary/20">
                  <Mail className="w-6 h-6 text-primary transition-colors group-hover:text-primary/80" />
                </div>
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">Email</h3>
                <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors">antenmanuuel01@gmail.com</p>
              </div>
            </a>
          </div>

          {/* LinkedIn Card */}
          <div className="group relative transform transition-all duration-300 hover:-translate-y-2">
            <div className="absolute inset-0 bg-gradient-to-r from-[#0077B5]/20 to-[#0077B5]/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-70 transition-all duration-500" />
            <a
              href="https://www.linkedin.com/in/anten-manuuel"
              target="_blank"
              rel="noopener noreferrer"
              className="block relative p-6 bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 shadow-lg transition-all duration-300 group-hover:shadow-2xl group-hover:border-[#0077B5]/50"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-3 bg-[#0077B5]/10 rounded-full transform transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#0077B5]/20">
                  <Linkedin className="w-6 h-6 text-[#0077B5] transition-colors group-hover:text-[#0077B5]/80" />
                </div>
                <h3 className="text-xl font-semibold text-foreground group-hover:text-[#0077B5] transition-colors">LinkedIn</h3>
                <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors">Connect with me professionally</p>
              </div>
            </a>
          </div>

          {/* Phone Card */}
          <div className="group relative transform transition-all duration-300 hover:-translate-y-2">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-70 transition-all duration-500" />
            <a
              href="tel:+16312027772"
              className="block relative p-6 bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 shadow-lg transition-all duration-300 group-hover:shadow-2xl group-hover:border-primary/50"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-3 bg-primary/10 rounded-full transform transition-transform duration-300 group-hover:scale-110 group-hover:bg-primary/20">
                  <Phone className="w-6 h-6 text-primary transition-colors group-hover:text-primary/80" />
                </div>
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">Phone</h3>
                <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors">+1 (631) 202-7772</p>
              </div>
            </a>
          </div>
        </div>

        {/* Response Time Note */}
        <div className="mt-12 text-center">
          <div className="inline-block p-4 bg-card/50 backdrop-blur-sm rounded-xl border border-border/50 max-w-xl mx-auto hover:border-primary/50 transition-all duration-300">
            <p className="text-sm text-muted-foreground">
              I typically respond within 24 hours during business days. For urgent matters,
              please feel free to call directly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
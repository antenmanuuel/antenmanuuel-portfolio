import React, { useState } from "react";
import { useToast } from "@/hooks/use-toast.ts";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Linkedin } from "lucide-react";
import { Mail, Phone } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission delay
    setTimeout(() => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      
      // Reset the form
      const form = e.currentTarget as HTMLFormElement;
      form.reset();
      
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="section-padding bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 pointer-events-none" />
      <div className="absolute inset-0 opacity-30 bg-grid-pattern pointer-events-none" />
      
      <div className="container mx-auto max-w-5xl relative">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent animate-fade-in">
          Get in Touch
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto animate-fade-in">
          Feel free to reach out through the form below or connect with me directly through social media.
        </p>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="bg-card/50 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-border/50 hover:shadow-xl transition-all duration-300 animate-fade-in">
            <form 
              onSubmit={handleSubmit} 
              className="space-y-6"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  required
                  placeholder="Your name"
                  className="w-full bg-background/50 hover:bg-background/80 transition-colors"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="your.email@example.com"
                  className="w-full bg-background/50 hover:bg-background/80 transition-colors"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  placeholder="Your message"
                  className="w-full min-h-[150px] bg-background/50 hover:bg-background/80 transition-colors"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-all duration-300 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-2 border-primary-foreground border-t-transparent" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Mail className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8 animate-fade-in">
            <div className="bg-card/50 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-border/50 hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-6 text-foreground">Let's Connect</h3>
              <div className="space-y-6">
                <a
                  href="https://www.linkedin.com/in/anten-manuuel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg bg-[#0077B5]/10 hover:bg-[#0077B5]/20 transition-colors group"
                >
                  <Linkedin className="w-6 h-6 text-[#0077B5]" />
                  <div>
                    <p className="font-medium text-foreground">LinkedIn</p>
                    <p className="text-sm text-muted-foreground">Connect with me professionally</p>
                  </div>
                </a>
                
                <a
                  href="tel:+16312027772"
                  className="flex items-center gap-4 p-4 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors group"
                >
                  <Phone className="w-6 h-6 text-primary" />
                  <div>
                    <p className="font-medium text-foreground">Phone</p>
                    <p className="text-sm text-muted-foreground">+1 (631) 202-7772</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="bg-card/50 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-border/50">
              <h4 className="text-lg font-medium mb-4 text-foreground">Response Time</h4>
              <p className="text-muted-foreground">
                I typically respond within 24 hours during business days. For urgent matters, 
                please feel free to call directly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

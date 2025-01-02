import React, { useState } from "react";
import { useToast } from "@/hooks/use-toast.ts";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Linkedin } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Create form data object
    const form = e.currentTarget;
    new FormData(form);
    try {
      form.submit();
      
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      form.reset();
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error sending message",
        description: "Please try again later or contact me through other means.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-foreground animate-fade-in">
          Get in Touch
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-card p-6 rounded-xl shadow-lg">
            <form 
              action="https://formspree.io/f/mqaagkrn"
              method="POST"
              onSubmit={handleSubmit} 
              className="space-y-6"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  required
                  placeholder="Your name"
                  className="w-full"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="your.email@example.com"
                  className="w-full"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  placeholder="Your message"
                  className="w-full min-h-[150px]"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-white text-primary-foreground py-2 px-4 rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          <div className="flex flex-col justify-center space-y-6">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-semibold mb-4 text-foreground">Connect With Me</h3>
              <p className="text-muted-foreground mb-6">
                Feel free to reach out through the form or connect with me on social media.
              </p>
              <div className="flex justify-center md:justify-start space-x-4">
                <a
                    href="https://www.linkedin.com/in/anten-manuuel"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-[#0077B5] text-white px-6 py-3 rounded-lg hover:bg-[#0077B5]/90 transition-all duration-300"
                >
                  <Linkedin className="w-5 h-5"/>
                  LinkedIn
                </a>
                <a
                    href="tel:+16312027772"
                    className="flex items-center gap-2 bg-[#0077B5] text-white px-6 py-3 rounded-lg hover:bg-[#0077B5]/90 transition-all duration-300"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path
                        d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1.003 1.003 0 011.11-.21c1.12.45 2.33.69 3.58.69.55 0 1 .45 1 1v3.5c0 .55-.45 1-1 1C10.29 22 2 13.71 2 3.5 2 2.95 2.45 2.5 3 2.5H6.5c.55 0 1 .45 1 1 0 1.25.24 2.46.69 3.58.14.34.07.73-.21 1.11l-2.2 2.2z"/>
                  </svg>
                  +1 (631) 202-7772
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
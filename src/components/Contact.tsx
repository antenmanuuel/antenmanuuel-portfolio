import React, { useState } from "react";
import { useToast } from "../components/ui/use-toast";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Github, Linkedin } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      message: formData.get('message') as string,
    };

    try {
      const response = await fetch('https://formspree.io/f/mqaagkrn', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast({
          title: "Message sent successfully!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
        e.currentTarget.reset();
      } else {
        throw new Error('Failed to send message');
      }
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
            <form onSubmit={handleSubmit} className="space-y-6">
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
                className="w-full bg-primary text-primary-foreground py-2 px-4 rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50"
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
                  href="https://github.com/antenmanuuel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-[#333] text-white px-6 py-3 rounded-lg hover:bg-[#333]/90 transition-all duration-300"
                >
                  <Github className="w-5 h-5" />
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/anten-manuuel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-[#0077B5] text-white px-6 py-3 rounded-lg hover:bg-[#0077B5]/90 transition-all duration-300"
                >
                  <Linkedin className="w-5 h-5" />
                  LinkedIn
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
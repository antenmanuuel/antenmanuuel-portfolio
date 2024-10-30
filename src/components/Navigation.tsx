import { useState, useEffect } from 'react';
import { ThemeToggle } from './ThemeToggle';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-background shadow-md py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto flex justify-between items-center px-4">
        <a href="#" className="text-xl font-bold text-primary">Portfolio</a>
        <div className="flex items-center space-x-8">
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#education" className="hover:text-primary transition-colors">Education</a>
            <a href="#work-experience" className="hover:text-primary transition-colors">Experience</a>
            <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
            <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </div>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
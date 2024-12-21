import { useState, useEffect } from 'react';
import { ThemeToggle } from './ThemeToggle';
import { FileText } from 'lucide-react';

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
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-md shadow-md py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto flex justify-between items-center px-4">
        <a href="#" className="text-xl font-bold text-foreground hover:scale-105 transition-transform">Anten Manuuel</a>
        <div className="flex items-center space-x-8">
          <div className="hidden md:flex space-x-8">
            {['about', 'education', 'work-experience', 'skills', 'projects', 'contact'].map((item, index) => (
              <a 
                key={item}
                href={`#${item}`} 
                className="hover:text-primary transition-all hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
              </a>
            ))}
            <a 
              href="https://drive.google.com/your-resume-link"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-foreground hover:text-primary transition-all hover:scale-105 animate-fade-in"
            >
              <FileText className="w-4 h-4" />
              Resume
            </a>
          </div>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
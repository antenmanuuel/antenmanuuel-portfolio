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
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-md shadow-md py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto flex justify-between items-center px-4">
        <a href="#" className="text-xl font-bold text-primary hover:scale-105 transition-transform">Portfolio</a>
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
          </div>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
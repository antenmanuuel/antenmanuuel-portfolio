import { useState, useEffect } from 'react';
import { ThemeToggle } from './ThemeToggle';
import { FileText, Menu, X } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Education', href: '#education' },
    { label: 'Work Experience', href: '#work-experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  const NavLinks = () => (
    <>
      {navItems.map((item) => (
        <a
          key={item.label}
          href={item.href}
          className="hover:text-primary transition-all hover:scale-105 animate-fade-in"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          {item.label}
        </a>
      ))}
      <a
        href="https://drive.google.com/file/d/1NvtlFxF-TyhPHRbixecKv9bhOuSRDkmi/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-foreground hover:text-primary transition-all hover:scale-105 animate-fade-in"
        onClick={() => setIsMobileMenuOpen(false)}
      >
        <FileText className="w-4 h-4" />
        Resume
      </a>
    </>
  );

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/80 backdrop-blur-md shadow-md py-4' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto flex justify-between items-center px-4">
        <a href="#" className="text-xl font-bold text-foreground hover:scale-105 transition-transform">
          Anten Manuuel
        </a>
        
        <div className="flex items-center gap-4">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLinks />
          </div>

          <ThemeToggle />

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <button className="p-2 hover:bg-primary/10 rounded-lg">
                <Menu className="h-6 w-6" />
              </button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col space-y-4 mt-8">
                <NavLinks />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
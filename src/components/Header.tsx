import React, { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useApp } from '@/contexts/AppContext';

const translations = {
  es: {
    home: 'Inicio',
    services: 'Servicios', 
    projects: 'Proyectos',
    about: 'Nosotros',
    contact: 'Contacto'
  },
  en: {
    home: 'Home',
    services: 'Services',
    projects: 'Projects', 
    about: 'About Us',
    contact: 'Contact'
  }
};

export const Header: React.FC = () => {
  const { theme, language, toggleTheme, setLanguage } = useApp();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const t = translations[language];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { key: 'home', href: '#home' },
    { key: 'services', href: '#services' },
    { key: 'projects', href: '#projects' },
    { key: 'about', href: '#about' },
    { key: 'contact', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'glass-effect shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-16 px-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button onClick={() => scrollToSection('#home')} className="flex items-center">
              <span className="text-xl font-bold">
                <span className="text-primary italic">AV</span>
                <span className="text-foreground">-skallet</span>
              </span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map(item => (
              <button
                key={item.key}
                onClick={() => scrollToSection(item.href)}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200 relative group"
              >
                {t[item.key as keyof typeof t]}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </nav>

          {/* Controls */}
          <div className="flex items-center space-x-2">
            {/* Language Toggle */}
            <Button
              variant="ghost" 
              size="sm"
              onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
              className="hidden sm:flex text-muted-foreground hover:text-foreground hover:bg-secondary/50"
            >
              <Globe className="h-4 w-4 mr-1" />
              {language.toUpperCase()}
            </Button>

            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="sm" 
              onClick={toggleTheme}
              className="text-muted-foreground hover:text-foreground hover:bg-secondary/50"
            >
              {theme === 'light' ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden text-muted-foreground hover:text-foreground"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border/30 bg-background/95 backdrop-blur-xl animate-slide-down">
            <div className="px-4 py-4 space-y-3">
              {navItems.map(item => (
                <button
                  key={item.key}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200 py-2"
                >
                  {t[item.key as keyof typeof t]}
                </button>
              ))}
              <div className="pt-2 border-t border-border/30">
                <button
                  onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
                  className="flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200 py-2"
                >
                  <Globe className="h-4 w-4 mr-2" />
                  {language === 'es' ? 'English' : 'Español'}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

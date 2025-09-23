import React, { useState } from 'react';
import { Moon, Sun, Menu, X, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useApp } from '@/contexts/AppContext';
import { cn } from '@/lib/utils';

const translations = {
  es: {
    home: 'Inicio',
    services: 'Servicios', 
    projects: 'Proyectos',
    about: 'Sobre Mí',
    contact: 'Contacto'
  },
  en: {
    home: 'Home',
    services: 'Services',
    projects: 'Projects', 
    about: 'About Me',
    contact: 'Contact'
  }
};

export const Header: React.FC = () => {
  const { theme, language, toggleTheme, setLanguage } = useApp();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = translations[language];

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
    <header className="fixed top-0 w-full z-50 glass-effect border-b">
      <div className="section-container">
        <div className="flex items-center justify-between h-16 px-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-primary">av-skallet</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map(item => (
              <button
                key={item.key}
                onClick={() => scrollToSection(item.href)}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors duration-200"
              >
                {t[item.key as keyof typeof t]}
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
              className="hidden sm:flex"
            >
              <Globe className="h-4 w-4 mr-1" />
              {language.toUpperCase()}
            </Button>

            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="sm" 
              onClick={toggleTheme}
            >
              {theme === 'light' ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t bg-card animate-slide-down">
            <div className="px-4 py-4 space-y-3">
              {navItems.map(item => (
                <button
                  key={item.key}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left text-sm font-medium text-foreground hover:text-primary transition-colors duration-200"
                >
                  {t[item.key as keyof typeof t]}
                </button>
              ))}
              <div className="pt-2 border-t">
                <button
                  onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
                  className="flex items-center text-sm font-medium text-foreground hover:text-primary transition-colors duration-200"
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
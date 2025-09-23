import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useApp } from '@/contexts/AppContext';

const translations = {
  es: {
    description: 'Desarrollador de software freelance especializado en soluciones elegantes y escalables.',
    rights: 'Todos los derechos reservados.',
    madeWith: 'Hecho con',
    links: {
      services: 'Servicios',
      projects: 'Proyectos', 
      about: 'Sobre Mí',
      contact: 'Contacto'
    }
  },
  en: {
    description: 'Freelance software developer specializing in elegant and scalable solutions.',
    rights: 'All rights reserved.',
    madeWith: 'Made with',
    links: {
      services: 'Services',
      projects: 'Projects',
      about: 'About Me', 
      contact: 'Contact'
    }
  }
};

export const Footer: React.FC = () => {
  const { language } = useApp();
  const t = translations[language];
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/av-skallet', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/av-skallet', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:hello@av-skallet.com', label: 'Email' }
  ];

  const footerLinks = [
    { key: 'services', href: '#services' },
    { key: 'projects', href: '#projects' },
    { key: 'about', href: '#about' },
    { key: 'contact', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-card border-t">
      <div className="section-container section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-primary">av-skallet</h3>
            <p className="text-muted-foreground leading-relaxed">
              {t.description}
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-2">
              {socialLinks.map((link) => {
                const IconComponent = link.icon;
                return (
                  <Button
                    key={link.label}
                    variant="ghost"
                    size="sm"
                    asChild
                    className="hover-lift"
                  >
                    <a 
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.label}
                    >
                      <IconComponent className="h-5 w-5" />
                    </a>
                  </Button>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Enlaces Rápidos</h4>
            <div className="space-y-2">
              {footerLinks.map((link) => (
                <button
                  key={link.key}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-muted-foreground hover:text-primary transition-colors text-left"
                >
                  {t.links[link.key as keyof typeof t.links]}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Contacto</h4>
            <div className="space-y-2 text-muted-foreground">
              <div>hello@av-skallet.com</div>
              <div>+1 (555) 123-4567</div>
              <div>España</div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="text-sm text-muted-foreground">
              © {currentYear} av-skallet. {t.rights}
            </div>
            <div className="flex items-center text-sm text-muted-foreground">
              {t.madeWith} <Heart className="h-4 w-4 text-red-500 mx-1" /> en España
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
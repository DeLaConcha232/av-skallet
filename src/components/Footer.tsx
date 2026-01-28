import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useApp } from '@/contexts/AppContext';

const translations = {
  es: {
    description: 'Desarrollador de software freelance especializado en soluciones elegantes y escalables.',
    rights: 'Todos los derechos reservados.',
    madeWith: 'Hecho con',
    quickLinks: 'Enlaces Rápidos',
    contactTitle: 'Contacto',
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
    quickLinks: 'Quick Links',
    contactTitle: 'Contact',
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
    { icon: Github, href: 'https://github.com/DeLaConcha232', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/diego-díaz-de-la-concha-193488271', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:avskallet@gmail.com', label: 'Email' }
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
    <footer className="relative border-t border-border/30 bg-card/50 backdrop-blur-sm">
      <div className="absolute inset-0 gradient-mesh opacity-10" />
      
      <div className="section-container section-padding relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* Brand */}
          <div className="space-y-4">
            <button onClick={() => scrollToSection('#home')} className="flex items-center">
              <span className="text-2xl font-bold">
                <span className="text-primary italic">AV</span>
                <span className="text-foreground">-skallet</span>
              </span>
            </button>
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
                    className="hover:bg-primary/10 hover:text-primary transition-colors"
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
            <h4 className="font-semibold text-foreground">{t.quickLinks}</h4>
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
            <h4 className="font-semibold text-foreground">{t.contactTitle}</h4>
            <div className="space-y-2 text-muted-foreground">
              <div>avskallet@gmail.com</div>
              <div>449-143-1962</div>
              <div>Mexico</div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/30">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="text-sm text-muted-foreground">
              © {currentYear} av-skallet. {t.rights}
            </div>
            <div className="flex items-center text-sm text-muted-foreground">
              {t.madeWith} <Heart className="h-4 w-4 text-primary mx-1" /> en Mexico
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

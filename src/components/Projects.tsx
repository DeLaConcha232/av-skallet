import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { useApp } from '@/contexts/AppContext';

const translations = {
  es: {
    title: 'Proyectos Destacados',
    subtitle: 'Algunos de mis trabajos más recientes que demuestran mi experiencia técnica',
    viewProject: 'Ver Proyecto',
    viewCode: 'Ver Código',
    projects: [
      {
        title: 'Plataforma E-commerce',
        description: 'Plataforma de comercio electrónico para la compra de ropa, equipos y calzado clasificados por deportes, desarrollada como proyecto universitario.',
        image: '/project-ecommerce.webp',
        technologies: ['React', 'Vite', 'CSS Modules', 'C#', 'MySQL'],
        liveUrl: '#',
        codeUrl: '#'
      },
      {
        title: 'StartConsulting - Landing Page',
        description: 'Consultoría LandingPage que combina el desarrollo de soluciones tecnológicas personalizadas con una misión educativa.',
        image: '/project-consulting.webp', 
        technologies: ['Astro', 'Tailwind'],
        liveUrl: '#',
        codeUrl: '#'
      },
      {
        title: 'Body Calculator - Web App',
        description: 'Web App diseñada para ayudar a los usuarios a calcular su ingesta diaria de calorías y distribución de macronutrientes basada en métricas personales como edad, peso, altura y nivel de actividad física.',
        image: '/project-bodycalculator.webp',
        technologies: ['JS', 'CSS Modules', 'Vite', 'PWA'],
        liveUrl: 'https://bodycalculator.surge.sh/',
        codeUrl: '#'
      },
      {
        title: 'Sheet From Form - Automatización',
        description: 'Sistema de automatización que conecta formularios web con hojas de cálculo en tiempo real.',
        image: '/project-sheetform.webp',
        technologies: ['Node.js', 'React', 'Vite', 'Express', 'SQLite'],
        liveUrl: '#',
        codeUrl: '#'
      },
      {
        title: 'Zetio - App Deportiva',
        description: 'Web App Tournament Platform es una aplicación web progresiva diseñada para ayudar a los clubes deportivos a gestionar sus torneos, estadísticas y jugadores.',
        image: '/project-zetio.webp',
        technologies: ['React', 'Tailwind', 'Supabase', 'PostgreSQL', 'PWA'],
        liveUrl: '#',
        codeUrl: '#'
      },
      {
        title: 'Orpheon - Sistema de Lealtad',
        description: 'Sistema de lealtad diseñado para ayudar a la empresa a gestionar sus programas de fidelización de clientes.',
        image: '/Sistemas-de-lealtad-Responsive.webp',
        technologies: ['React', 'Tailwind', 'Supabase', 'PostgreSQL', 'PWA'],
        liveUrl: '#',
        codeUrl: '#'
      },
      {
        title: 'Portafolio Personal - Web',
        description: 'Portafolio personal que muestra tus proyectos y habilidades como desarrollador.',
        image: '/portafolio.webp',
        technologies: ['React', 'Vite', 'Tailwind', 'PWA'],
        liveUrl: '#',
        codeUrl: '#'
      },
      {
        title: 'Dashboard Admin - Web',
        description: 'Dashboard de administración que muestra métricas y estadísticas clave para la gestión de proyectos.',
        image: '/Dashboard.webp',
        technologies: ['React', 'Vite', 'Tailwind', 'Supabase'],
        liveUrl: '#',
        codeUrl: '#'
      },
      {
        title: 'Sistema de Tickets - Web',
        description: 'Sistema de gestión de tickets para soporte al cliente, permitiendo la creación, seguimiento y resolución de incidencias.',
        image: '/SistemaTickets.png',
        technologies: ['React', 'Vite', 'Tailwind', 'SQLite'],
        liveUrl: '#',
        codeUrl: '#'
      }
    ]
  },
  en: {
    title: 'Featured Projects',
    subtitle: 'Some of my most recent work showcasing my technical expertise',
    viewProject: 'View Project',
    viewCode: 'View Code',
    projects: [
      {
        title: 'E-commerce Platform',
        description: 'Sports E-commerce platform for purchasing clothing, gear, and footwear classified by various sports, developed as a university project.',
        image: '/project-ecommerce.webp',
        technologies: ['React', 'Vite', 'CSS Modules', 'C#', 'MySQL'],
        liveUrl: '#',
        codeUrl: '#'
      },
      {
        title: 'StartConsulting - Landing Page',
        description: 'LandingPage consultancy that combines the development of custom technology solutions with an educational mission.',
        image: '/project-consulting.webp',
        technologies: ['Astro', 'Tailwind'],
        liveUrl: '#',
        codeUrl: '#'
      },
      {
        title: 'Body Calculator - Web App',
        description: 'Web App designed to help users calculate their daily caloric intake and macronutrient distribution based on personal metrics such as age, weight, height, and physical activity level.',
        image: '/project-bodycalculator.webp',
        technologies: ['JS', 'CSS Modules', 'Vite', 'PWA'],
        liveUrl: 'https://bodycalculator.surge.sh/',
        codeUrl: '#'
      },
      {
        title: 'Sheet From Form - Automation',
        description: 'Automation system that connects web forms with spreadsheets in real time.',
        image: '/project-sheetform.webp',
        technologies: ['Node.js', 'React', 'Vite', 'Express', 'SQLite'],
        liveUrl: '',
        codeUrl: '#'
      },
      {
        title: 'Zetio - Sports App',
        description: 'Web App Tournament Platform is a progressive web application designed to help sports clubs manage their tournaments, statistics, and players.',
        image: '/project-zetio.webp',
        technologies: ['React', 'Tailwind', 'Supabase', 'PostgreSQL', 'PWA'],
        liveUrl: '#',
        codeUrl: '#'
      },
      {
        title: 'Orpheon - Loyalty System',
        description: 'A loyalty system designed to help companies manage their customer loyalty programs.',
        image: '/Sistemas-de-lealtad-Responsive.webp',
        technologies: ['React', 'Tailwind', 'Supabase', 'PostgreSQL', 'PWA'],
        liveUrl: '#',
        codeUrl: '#'
      },
      {
        title: 'Personal Portfolio - Web',
        description: 'Personal portfolio showcasing projects and developer skills.',
        image: '/portafolio.webp',
        technologies: ['React', 'Vite', 'Tailwind', 'PWA'],
        liveUrl: '#',
        codeUrl: '#'
      },
      {
        title: 'Admin Dashboard - Web',
        description: 'Admin dashboard that displays key metrics and statistics for project management.',
        image: '/Dashboard.webp',
        technologies: ['React', 'Vite', 'Tailwind', 'Supabase'],
        liveUrl: '#',
        codeUrl: '#'
      },
      {
        title: 'Tickets system - Web',
        description: 'Ticket management system for customer support, allowing the creation, tracking, and resolution of issues.',
        image: '/SistemaTickets.png',
        technologies: ['React', 'Vite', 'Tailwind', 'SQLite'],
        liveUrl: '#',
        codeUrl: '#'
      }
    ]
  }
};

export const Projects: React.FC = () => {
  const { language } = useApp();
  const t = translations[language];

  return (
    <section id="projects" className="relative section-padding overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 gradient-mesh opacity-20" />

      <div className="section-container relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">{t.title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {t.projects.map((project, index) => (
            <div 
              key={index}
              className="group glass-card rounded-xl overflow-hidden hover-lift animate-slide-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden h-48">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent opacity-60" />
                
                {/* Hover overlay with link */}
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  {project.liveUrl && project.liveUrl !== '#' && (
                    <a 
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-lg bg-primary text-primary-foreground font-medium flex items-center gap-2 hover:bg-primary-hover transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      {t.viewProject}
                    </a>
                  )}
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <Badge 
                      key={tech} 
                      variant="secondary" 
                      className="text-xs bg-secondary/50 text-muted-foreground border border-border/50 hover:bg-primary/10 hover:text-primary hover:border-primary/30 transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 4 && (
                    <Badge 
                      variant="secondary" 
                      className="text-xs bg-secondary/50 text-muted-foreground border border-border/50"
                    >
                      +{project.technologies.length - 4}
                    </Badge>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

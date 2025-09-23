import React from 'react';
import { Code, Smartphone, Globe, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useApp } from '@/contexts/AppContext';

const translations = {
  es: {
    title: 'Servicios',
    subtitle: 'Soluciones tecnológicas a medida para hacer crecer tu negocio',
    services: [
      {
        icon: Code,
        title: 'Desarrollo Web',
        description: 'Aplicaciones web modernas, rápidas y escalables usando las últimas tecnologías.'
      },
      {
        icon: Smartphone, 
        title: 'Aplicaciones Móviles',
        description: 'Apps nativas y cross-platform que ofrecen experiencias excepcionales.'
      },
      {
        icon: Globe,
        title: 'Consultoría Tecnológica',
        description: 'Asesoramiento estratégico para optimizar procesos y adoptar nuevas tecnologías.'
      },
      {
        icon: Zap,
        title: 'Automatización',
        description: 'Automatización de procesos para aumentar eficiencia y reducir costos operativos.'
      }
    ]
  },
  en: {
    title: 'Services',
    subtitle: 'Custom technology solutions to grow your business',
    services: [
      {
        icon: Code,
        title: 'Web Development', 
        description: 'Modern, fast and scalable web applications using the latest technologies.'
      },
      {
        icon: Smartphone,
        title: 'Mobile Applications',
        description: 'Native and cross-platform apps that deliver exceptional experiences.'
      },
      {
        icon: Globe,
        title: 'Technology Consulting',
        description: 'Strategic advisory to optimize processes and adopt new technologies.'
      },
      {
        icon: Zap,
        title: 'Automation',
        description: 'Process automation to increase efficiency and reduce operational costs.'
      }
    ]
  }
};

export const Services: React.FC = () => {
  const { language } = useApp();
  const t = translations[language];

  return (
    <section id="services" className="section-padding bg-muted/30">
      <div className="section-container">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">{t.title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index}
                className="h-full hover-lift hover-glow border-0 gradient-card animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 text-center h-full flex flex-col">
                  <div className="mb-6 flex-shrink-0">
                    <div className="w-16 h-16 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-4 flex-shrink-0">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed flex-grow">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
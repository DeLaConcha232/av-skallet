import React from 'react';
import { Code, Globe, Zap, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useApp } from '@/contexts/AppContext';

const translations = {
  es: {
    title: 'Nuestros servicios',
    subtitle: 'Atendemos necesidades tecnológicas con soluciones robustas y escalables. Siempre adaptadas a tu realidad de negocio.',
    learnMore: 'Saber más',
    services: [
      {
        icon: Code,
        title: 'Desarrollo a medida',
        description: 'Información para tu crecimiento de procesos.'
      },
      {
        icon: Globe, 
        title: 'Consultoría tecnológica',
        description: 'Obtengo y consultados, amplios en O4 y empresas.'
      },
      {
        icon: Zap,
        title: 'Optimización de procesos',
        description: 'Mantenimiento semi procesos y de tus equipos.'
      }
    ]
  },
  en: {
    title: 'Our services',
    subtitle: 'We address technology needs with robust and scalable solutions. Always adapted to your business reality.',
    learnMore: 'Learn more',
    services: [
      {
        icon: Code,
        title: 'Custom Development', 
        description: 'Information for your process growth.'
      },
      {
        icon: Globe,
        title: 'Technology Consulting',
        description: 'Comprehensive consulting for organizations and businesses.'
      },
      {
        icon: Zap,
        title: 'Process Optimization',
        description: 'Process maintenance and equipment optimization.'
      }
    ]
  }
};

export const Services: React.FC = () => {
  const { language } = useApp();
  const t = translations[language];

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="relative section-padding overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-hero opacity-50" />
      <div className="absolute inset-0 gradient-mesh opacity-30" />

      <div className="section-container relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">{t.title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index}
                className="group service-card hover-lift animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="h-7 w-7 text-primary" />
                  </div>
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* CTA Button */}
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={scrollToContact}
                  className="border-primary/30 text-primary hover:bg-primary/10 hover:border-primary/50 group/btn"
                >
                  {t.learnMore}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

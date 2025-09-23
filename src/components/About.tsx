import React from 'react';
import { Download, Award, Users, Coffee } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useApp } from '@/contexts/AppContext';

const translations = {
  es: {
    title: 'Sobre Mí',
    subtitle: 'Desarrollador apasionado por crear soluciones tecnológicas excepcionales',
    description: 'Me especializo en transformar ideas complejas en código limpio y eficiente. Mi metodología se basa en la colaboración estrecha, la transparencia y la búsqueda de la excelencia técnica. Con años de experiencia en desarrollo full-stack, ayudo a empresas y emprendedores a materializar sus visiones digitales.',
    downloadCV: 'Descargar CV',
    stats: [
      { icon: Award, label: 'Años de Experiencia', value: '5+' },
      { icon: Users, label: 'Proyectos Completados', value: '50+' },
      { icon: Coffee, label: 'Tazas de Café', value: '∞' }
    ]
  },
  en: {
    title: 'About Me',
    subtitle: 'Passionate developer creating exceptional technology solutions',
    description: 'I specialize in transforming complex ideas into clean and efficient code. My methodology is based on close collaboration, transparency and the pursuit of technical excellence. With years of full-stack development experience, I help companies and entrepreneurs materialize their digital visions.',
    downloadCV: 'Download CV',
    stats: [
      { icon: Award, label: 'Years of Experience', value: '5+' },
      { icon: Users, label: 'Completed Projects', value: '50+' },
      { icon: Coffee, label: 'Cups of Coffee', value: '∞' }
    ]
  }
};

export const About: React.FC = () => {
  const { language } = useApp();
  const t = translations[language];

  const handleDownloadCV = () => {
    // Replace with actual CV file path
    const cvUrl = '/cv-av-skallet.pdf';
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = `cv-av-skallet-${language}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Content */}
          <div className="animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">{t.title}</h2>
            <p className="text-xl text-muted-foreground mb-6">{t.subtitle}</p>
            
            <p className="text-muted-foreground leading-relaxed mb-8 text-lg">
              {t.description}
            </p>
            
            <Button 
              size="lg"
              onClick={handleDownloadCV}
              className="hover-lift"
            >
              <Download className="mr-2 h-5 w-5" />
              {t.downloadCV}
            </Button>
          </div>
          
          {/* Image & Stats */}
          <div className="animate-slide-up">
            <div className="relative mb-8">
              <div className="w-80 h-80 mx-auto rounded-3xl overflow-hidden hover-lift">
                <img 
                  src="/profile-photo.jpg"
                  alt="av-skallet profile"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full -z-10"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/20 rounded-full -z-10"></div>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {t.stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <Card 
                    key={index}
                    className="text-center hover-lift animate-slide-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="p-4">
                      <IconComponent className="h-8 w-8 text-primary mx-auto mb-2" />
                      <div className="text-2xl font-bold text-primary mb-1">
                        {stat.value}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {stat.label}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
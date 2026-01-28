import React from 'react';
import { Award, Users, Coffee, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useApp } from '@/contexts/AppContext';

const translations = {
  es: {
    title: 'Sobre nosotros',
    description: 'Orientamos a organizaciones en el desarrollo de software y modernización tecnológica con transparencia y criterio técnico.',
    features: [
      'Enfoque estratégico y basado en datos',
      'Compromiso con la claridad y la confiabilidad',
      'Socio tecnológico de organizaciones visionarias'
    ],
    stats: [
      { icon: Award, label: 'Años Construyendo', value: '3+' },
      { icon: Users, label: 'Soluciones Entregadas', value: '15+' },
      { icon: Coffee, label: 'Tazas de Café', value: '∞' }
    ]
  },
  en: {
    title: 'About us',
    description: 'We guide organizations in software development and technological modernization with transparency and technical criteria.',
    features: [
      'Strategic and data-driven approach',
      'Commitment to clarity and reliability',
      'Technology partner for visionary organizations'
    ],
    stats: [
      { icon: Award, label: 'Years Building', value: '3+' },
      { icon: Users, label: 'Delivered Solutions', value: '15+' },
      { icon: Coffee, label: 'Cups of Coffee', value: '∞' }
    ]
  }
};

export const About: React.FC = () => {
  const { language } = useApp();
  const t = translations[language];

  return (
    <section id="about" className="relative section-padding overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-hero" />
      <div className="absolute inset-0 gradient-mesh opacity-40" />

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Content */}
          <div className="animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-foreground">{t.title}</h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              {t.description}
            </p>

            {/* Features list */}
            <div className="space-y-4 mb-8">
              {t.features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-3 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {t.stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <Card 
                    key={index}
                    className="glass-card border-border/50 text-center hover-lift animate-slide-up"
                    style={{ animationDelay: `${(index + 3) * 0.1}s` }}
                  >
                    <CardContent className="p-4">
                      <IconComponent className="h-6 w-6 text-primary mx-auto mb-2" />
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
          
          {/* Visual Element - Orbiting circles */}
          <div className="animate-slide-up flex justify-center">
            <div className="relative">
              {/* Main visual container */}
              <div
                className="w-80 h-80 mx-auto rounded-3xl hover-lift relative"
                aria-label={language === 'es' ? 'Identidad visual de Av-skallet con círculo geométrico y tecnologías orbitando' : 'Av-skallet visual identity with geometric circle and orbiting technologies'}
              >
                {/* Central clean circle */}
                <div className="absolute inset-0 grid place-items-center">
                  <div className="relative size-48 rounded-full bg-gradient-to-br from-primary/20 via-accent/15 to-primary/10 border border-primary/30 shadow-glow-emerald">
                    {/* Dashed rotating ring */}
                    <div className="absolute -inset-2 rounded-full border-2 border-dashed border-primary/40 animate-[spin_8s_linear_infinite]"></div>
                    {/* Inner subtle grid */}
                    <div
                      className="absolute inset-4 rounded-full opacity-40"
                      style={{
                        backgroundImage:
                          'radial-gradient(hsl(var(--primary) / 0.2) 1px, transparent 1px)',
                        backgroundSize: '12px 12px',
                        backgroundPosition: '0 0',
                        mixBlendMode: 'overlay'
                      }}
                    ></div>
                    {/* Static geometric chord */}
                    <div className="absolute left-1/2 top-1/2 h-[2px] w-10 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-primary/40"></div>
                    <div className="absolute left-1/2 top-1/2 h-[2px] w-10 -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-accent-foreground/30"></div>
                  </div>
                </div>

                {/* Orbit ring: one spinning parent; child chips placed at different angles on exact circle */}
                <div className="absolute inset-0">
                  <div className="absolute inset-0 animate-[spin_50s_linear_infinite]">
                    {[
                      { label: 'React', angle: 10, color: 'primary' },
                      { label: 'Tailwind', angle: 55, color: 'accent' },
                      { label: 'Vercel', angle: 100, color: 'muted' },
                      { label: 'Node', angle: 150, color: 'primary' },
                      { label: 'SQL', angle: 200, color: 'accent' },
                      { label: 'Supabase', angle: 250, color: 'primary' },
                      { label: 'Java', angle: 295, color: 'accent' },
                      { label: 'JS', angle: 330, color: 'primary' },
                      { label: 'TS', angle: 0, color: 'accent' }
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="absolute left-1/2 top-1/2"
                        style={{
                          transform: `rotate(${item.angle}deg) translateX(6.9rem) rotate(-${item.angle}deg)`
                        }}
                      >
                        <div
                          className={`w-9 h-9 rounded-full grid place-items-center border backdrop-blur-sm shadow-sm animate-[spin_50s_linear_infinite_reverse]
                            ${item.color === 'primary' 
                              ? 'border-primary/40 bg-primary/20 text-primary' 
                              : item.color === 'accent'
                              ? 'border-accent-foreground/40 bg-accent/30 text-accent-foreground'
                              : 'border-muted-foreground/30 bg-muted/50 text-muted-foreground'
                            }`}
                          aria-label={item.label}
                          title={item.label}
                        >
                          <span className="text-[10px] font-bold leading-none">
                            {item.label.length > 4 ? item.label.slice(0, 4) : item.label}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Secondary orbit for depth (smaller, slower) */}
                <div className="absolute inset-6 animate-[spin_52s_linear_infinite]">
                  <div className="absolute left-1/2 -translate-x-1/2 -top-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/60"></div>
                  </div>
                  <div className="absolute -right-1 top-1/2 -translate-y-1/2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent-foreground/50"></div>
                  </div>
                  <div className="absolute left-1/2 -translate-x-1/2 -bottom-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/50"></div>
                  </div>
                  <div className="absolute -left-1 top-1/2 -translate-y-1/2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent-foreground/40"></div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full -z-10 blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/20 rounded-full -z-10 blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

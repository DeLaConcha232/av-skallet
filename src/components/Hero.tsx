import React, { useEffect, useState } from "react";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useApp } from "@/contexts/AppContext";

const translations = {
  es: {
    greeting: "Hola, soy",
    title: "Desarrollamos software a la medida",
    subtitle:
      "Soluciones estratégicas para organizaciones que buscan claridad técnica y escalabilidad.",
    cta1: "Nuestros servicios",
    cta2: "Contáctanos",
  },
  en: {
    greeting: "Hi, I'm",
    title: "We develop custom software",
    subtitle:
      "Strategic solutions for organizations seeking technical clarity and scalability.",
    cta1: "Our Services",
    cta2: "Contact Us",
  },
};

export const Hero: React.FC = () => {
  const { language } = useApp();
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const t = translations[language];

  const fullText = t.title;

  useEffect(() => {
    setDisplayedText("");
    setIsTyping(true);
  }, [language]);

  useEffect(() => {
    if (!isTyping) return;

    let index = 0;
    const timer = setInterval(() => {
      setDisplayedText(fullText.slice(0, index));
      index++;

      if (index > fullText.length) {
        setIsTyping(false);
        clearInterval(timer);
      }
    }, 50);

    return () => clearInterval(timer);
  }, [fullText, isTyping]);

  const scrollToServices = () => {
    const element = document.querySelector("#services");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen bg-gradient-to-b from-black/10 to-black/50 flex items-center overflow-hidden"
    >
      <div className="section-container section-padding w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="animate-fade-in">
            {/* Main Title with Typewriter */}
            <h1 className="text-5xl sm:text-5xl lg:text-6xl font-serif font-semibold md:mb-6 mb-2 md:leading-tight">
              <span className="text-foreground">{displayedText}</span>
              {isTyping && (
                <span className="animate-pulse text-primary">|</span>
              )}
            </h1>

            {/* Subtitle */}
            <p
              className="text-lg text-muted-foreground mb-10 max-w-xl leading-relaxed animate-slide-up"
              style={{ animationDelay: "0.3s" }}
            >
              {t.subtitle}
            </p>

            {/* CTAs */}
            <div
              className="flex flex-col sm:flex-row gap-4 animate-slide-up"
              style={{ animationDelay: "0.5s" }}
            >
              <Button
                size="lg"
                onClick={scrollToServices}
                className="group font-display [&_svg]:size-5 hover-lift md:text-xl text-lg bg-primary hover:bg-primary-hover text-primary-foreground"
              >
                {t.cta1}
                <ArrowRight
                  size={22}
                  strokeWidth={3}
                  className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1"
                />
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={scrollToContact}
                className="hover-lift  font-display [&_svg]:size-5 md:text-xl text-lg border-border/50 hover:bg-secondary/50 hover:border-primary/50"
              >
                <MessageCircle strokeWidth={3} className="mr-2  h-5 w-5" />
                {t.cta2}
              </Button>
            </div>
          </div>

          {/* Right decorative element - Brand logo/visual */}
          <div
            className="hidden lg:flex justify-center items-center animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="relative">
              {/* Main visual container */}
              <div className="relative w-80 h-80">
                {/* Glow effect behind */}
                <div
                  className="absolute inset-0 rounded-3xl animate-pulse-glow"
                  style={{
                    background:
                      "radial-gradient(circle, hsl(152 48% 50% / 0.2) 0%, transparent 70%)",
                    filter: "blur(30px)",
                  }}
                />

                {/* Main card */}
                <div className="relative w-full h-full glass-card rounded-3xl p-6 flex items-center justify-center">
                  <img
                    src="/Isotipo_Blanco.png"
                    alt="AV-skallet Logo"
                    className="w-48 h-auto object-contain opacity-90"
                  />
                </div>

                {/* Floating tech badges */}
                <div className="absolute top-3 -right-4 px-3 py-1.5 rounded-full glass-card text-xs font-medium text-primary border border-primary/30 animate-float">
                  Apps moviles
                </div>
                <div className="absolute bottom-4 -left-4 px-3 py-1.5 rounded-full glass-card text-xs font-medium text-amethyst-400 border border-amethyst-400/30 animate-float-slow">
                  Sistemas personalizados
                </div>
                <div className="absolute top-60 -right-8 px-3 py-1.5 rounded-full glass-card text-xs font-medium text-emerald-400 border border-emerald-500/30 animate-float-slower">
                  Paginas web
                </div>
                {/* <div className="absolute -top-4 -left-4 px-3 py-1.5 rounded-full glass-card text-xs font-medium text-amethyst-400 border border-amethyst-400/30 animate-float-slow">
                  Sistemas personalizados
                </div> */}
              </div>
            </div>
          </div>
        </div>

        {/* Brand name at bottom right */}
        {/* <div className="absolute bottom-8 right-8 hidden lg:block">
          <span className="text-3xl font-bold">
            <span className="text-primary italic">AV</span>
            <span className="text-foreground">-skallet</span>
          </span>
        </div> */}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 z-30 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground/50 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-muted-foreground/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

import React, { useEffect, useState } from "react";
import { ArrowRight, Download, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useApp } from "@/contexts/AppContext";

const translations = {
  es: {
    greeting: "Hola, soy",
    title: "Transformando ideas en realidades",
    subtitle: "Soluciones elegantes, escalables y con clase. No es solo tecnologia, es una forma de cambiar tu vida.",
    cta1: "Ver Proyectos",
    cta2: "Contáctame",
  },
  en: {
    greeting: "Hi, I'm",
    title: "Turning ideas into reality",
    subtitle: "Elegant, scalable and classy solutions. It’s not just technology, it’s a way to change your life.",
    cta1: "View Projects",
    cta2: "Contact Me",
  },
};

export const Hero: React.FC = () => {
  const { language } = useApp();
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const t = translations[language];

  const fullText = t.title;

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

  const scrollToProjects = () => {
    const element = document.querySelector("#projects");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center section-padding bg-gradient-to-b from-background to-muted/20"
    >
      <div className="section-container w-full">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          {/* Greeting */}
          <p className="text-muted-foreground text-lg mb-4 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            {t.greeting}
          </p>

          {/* Main Title */}
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            <span className="gradient-hero bg-clip-text text-transparent">Av-skallet Solutions</span>
          </h1>

          {/* Typewriter Effect */}
          <div className="h-32 sm:h-24 lg:h-20 mb-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-foreground leading-relaxed">
              {displayedText}
              {isTyping && <span className="animate-pulse">|</span>}
            </h2>
          </div>

          {/* Subtitle */}
          <p
            className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto animate-slide-up"
            style={{ animationDelay: "0.4s" }}
          >
            {t.subtitle}
          </p>

          {/* CTAs */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up"
            style={{ animationDelay: "0.5s" }}
          >
            <Button size="lg" onClick={scrollToProjects} className="group hover-lift">
              {t.cta1}
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>

            <Button variant="outline" size="lg" onClick={scrollToContact} className="hover-lift">
              <MessageCircle className="mr-2 h-5 w-5" />
              {t.cta2}
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
              <div className="w-1 h-2 bg-muted-foreground rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

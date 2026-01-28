import React from 'react';
import { MessageCircle } from 'lucide-react';

export const WhatsAppFloat: React.FC = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = '524491431962';
    const message = encodeURIComponent('Hola! Me interesa conocer más sobre tus servicios de desarrollo de software.');
    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={handleWhatsAppClick}
        className="relative group"
        aria-label="Contactar por WhatsApp"
      >
        {/* Glow effect */}
        <div className="absolute inset-0 rounded-full bg-primary/40 blur-lg group-hover:bg-primary/60 transition-all duration-300 animate-pulse-glow" />
        
        {/* Button */}
        <div className="relative w-14 h-14 rounded-full bg-primary flex items-center justify-center shadow-glow-emerald hover:scale-110 transition-transform duration-300">
          <MessageCircle className="h-7 w-7 text-primary-foreground" />
        </div>
      </button>
    </div>
  );
};

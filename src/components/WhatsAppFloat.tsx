import React from 'react';
import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const WhatsAppFloat: React.FC = () => {
  const handleWhatsAppClick = () => {
    // Replace with actual WhatsApp number
    const phoneNumber = '1234567890'; // Format: country code + number (without +)
    const message = encodeURIComponent('Hola! Me interesa conocer más sobre tus servicios de desarrollo de software.');
    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-scale-in">
      <Button
        onClick={handleWhatsAppClick}
        size="lg"
        className="rounded-full w-14 h-14 p-0 bg-success hover:bg-success/90 shadow-lg hover-lift group"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle className="h-6 w-6 text-white group-hover:scale-110 transition-transform" />
      </Button>
      
      {/* Pulse Animation */}
      <div className="absolute inset-0 rounded-full bg-success opacity-30 animate-ping pointer-events-none"></div>
    </div>
  );
};
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { useApp } from '@/contexts/AppContext';

const translations = {
  es: {
    title: 'Contacto',
    subtitle: 'Transformemos tu idea en realidad. Hablemos sobre tu próximo proyecto',
    form: {
      name: 'Nombre completo',
      email: 'Correo electrónico',
      subject: 'Asunto',
      message: 'Mensaje',
      send: 'Enviar Mensaje',
      sending: 'Enviando...'
    },
    info: [
      { icon: Mail, label: 'Email', value: 'avskallet@gmail.com' },
      { icon: Phone, label: 'Teléfono', value: '449-143-1962' },
      { icon: MapPin, label: 'Ubicación', value: 'Mexico' }
    ],
    success: 'Mensaje enviado correctamente. Te contactaré pronto!',
    guarantee: 'Respuesta Garantizada',
    guaranteeText: 'Te responderé en menos de 24 horas con una propuesta personalizada.'
  },
  en: {
    title: 'Contact',
    subtitle: 'Let\'s turn your idea into reality. Let\'s talk about your next project',
    form: {
      name: 'Full name',
      email: 'Email address', 
      subject: 'Subject',
      message: 'Message',
      send: 'Send Message',
      sending: 'Sending...'
    },
    info: [
      { icon: Mail, label: 'Email', value: 'avskallet@gmail.com' },
      { icon: Phone, label: 'Phone', value: '449-143-1962' },
      { icon: MapPin, label: 'Location', value: 'Mexico' }
    ],
    success: 'Message sent successfully. I\'ll contact you soon!',
    guarantee: 'Guaranteed Response',
    guaranteeText: 'I\'ll respond within 24 hours with a personalized proposal.'
  }
};

export const Contact: React.FC = () => {
  const { language } = useApp();
  const { toast } = useToast();
  const t = translations[language];
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const mailtoLink = `mailto:avskallet@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Nombre: ${formData.name}\n` +
      `Email: ${formData.email}\n\n` +
      `Mensaje:\n${formData.message}`
    )}`;
    
    window.location.href = mailtoLink;
    
    setTimeout(() => {
      toast({
        title: t.success,
        description: '',
        variant: 'default'
      });
      
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="relative section-padding overflow-hidden">
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Info */}
          <div className="animate-slide-up">
            <div className="space-y-6">
              {t.info.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div 
                    key={index}
                    className="flex items-center space-x-4 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/40 transition-all">
                      <IconComponent className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">{item.label}</div>
                      <div className="text-muted-foreground">{item.value}</div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Guarantee Card */}
            <Card className="mt-12 glass-card border-border/50">
              <CardContent className="p-8 text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">{t.guarantee}</h3>
                <p className="text-muted-foreground">
                  {t.guaranteeText}
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="glass-card border-border/50 animate-slide-up hover-glow" style={{ animationDelay: '0.2s' }}>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-foreground">{t.form.name}</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="mt-1 bg-secondary/50 border-border/50 focus:border-primary/50 focus:ring-primary/20"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-foreground">{t.form.email}</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="mt-1 bg-secondary/50 border-border/50 focus:border-primary/50 focus:ring-primary/20"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="subject" className="text-foreground">{t.form.subject}</Label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="mt-1 bg-secondary/50 border-border/50 focus:border-primary/50 focus:ring-primary/20"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-foreground">{t.form.message}</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    className="mt-1 resize-none bg-secondary/50 border-border/50 focus:border-primary/50 focus:ring-primary/20"
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg"
                  className="w-full hover-lift bg-primary hover:bg-primary-hover text-primary-foreground"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary-foreground mr-2"></div>
                      {t.form.sending}
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      {t.form.send}
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

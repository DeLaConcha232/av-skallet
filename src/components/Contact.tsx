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
      { icon: Mail, label: 'Email', value: 'hello@av-skallet.com' },
      { icon: Phone, label: 'Teléfono', value: '+1 (555) 123-4567' },
      { icon: MapPin, label: 'Ubicación', value: 'España' }
    ],
    success: 'Mensaje enviado correctamente. Te contactaré pronto!'
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
      { icon: Mail, label: 'Email', value: 'hello@av-skallet.com' },
      { icon: Phone, label: 'Phone', value: '+1 (555) 123-4567' },
      { icon: MapPin, label: 'Location', value: 'Spain' }
    ],
    success: 'Message sent successfully. I\'ll contact you soon!'
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
    
    // Simulate form submission
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
    }, 1500);
  };

  return (
    <section id="contact" className="section-padding">
      <div className="section-container">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">{t.title}</h2>
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
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">{item.label}</div>
                      <div className="text-muted-foreground">{item.value}</div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Decorative Card */}
            <Card className="mt-12 gradient-card border-0">
              <CardContent className="p-8 text-center">
                <CheckCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Respuesta Garantizada</h3>
                <p className="text-muted-foreground">
                  Te responderé en menos de 24 horas con una propuesta personalizada.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="animate-slide-up hover-glow" style={{ animationDelay: '0.2s' }}>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">{t.form.name}</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">{t.form.email}</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="mt-1"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="subject">{t.form.subject}</Label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="message">{t.form.message}</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    className="mt-1 resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg"
                  className="w-full hover-lift"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
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

import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { useIsMobile } from '../hooks/use-mobile';

const Contact = () => {
  const isMobile = useIsMobile();

  return (
    <section id="contact" className="section bg-transparent">
      <div className="container-custom py-12 sm:py-16 lg:py-20 px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <div className="inline-block bg-primary/20 text-primary font-medium px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm mb-4">
            Contato
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4 sm:mb-6">
            Entre em contato conosco
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            Estamos prontos para atender suas necessidades automotivas. 
            Entre em contato através dos nossos canais de atendimento.
          </p>
        </div>
        
        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {/* WhatsApp Card */}
          <div className="glass rounded-xl shadow-sm overflow-hidden animate-fade-in">
            <div className="bg-emerald-500 p-4 sm:p-6 flex items-center justify-center">
              <MessageCircle className="w-12 h-12 sm:w-16 sm:h-16 text-white" />
            </div>
            <div className="p-4 sm:p-6 text-center">
              <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2">WhatsApp</h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-4">Atendimento rápido e prático</p>
              <a 
                href="https://wa.me/5546999418304" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-accent hover:bg-accent/90 text-accent-foreground px-4 sm:px-6 py-2 rounded-md inline-flex items-center justify-center gap-2 transition-all font-medium text-sm sm:text-base w-full sm:w-auto"
                aria-label="Enviar mensagem via WhatsApp"
              >
                <span>Enviar mensagem</span>
              </a>
            </div>
          </div>
          
          {/* Phone Card */}
          <div className="glass rounded-xl shadow-sm overflow-hidden animate-fade-in" style={{
            animationDelay: '0.1s'
          }}>
            <div className="bg-primary p-4 sm:p-6 flex items-center justify-center">
              <Phone className="w-12 h-12 sm:w-16 sm:h-16 text-primary-foreground" />
            </div>
            <div className="p-4 sm:p-6 text-center">
              <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2">Telefone</h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-4">Fale diretamente conosco</p>
              <a 
                href="tel:+5546999418304" 
                className="bg-accent hover:bg-accent/90 text-accent-foreground px-4 sm:px-6 py-2 rounded-md inline-flex items-center justify-center gap-2 transition-all font-medium text-sm sm:text-base w-full sm:w-auto"
                aria-label="Ligar para a Mecânica Godin"
              >
                <span>(46) 99941-8304</span>
              </a>
            </div>
          </div>
          
          {/* Email Card */}
          <div className="glass rounded-xl shadow-sm overflow-hidden animate-fade-in sm:col-span-2 lg:col-span-1" style={{
            animationDelay: '0.2s'
          }}>
            <div className="bg-accent p-4 sm:p-6 flex items-center justify-center">
              <Mail className="w-12 h-12 sm:w-16 sm:h-16 text-accent-foreground" />
            </div>
            <div className="p-4 sm:p-6 text-center">
              <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2">E-mail</h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-4">Envie sua mensagem</p>
              <a 
                href="mailto:mecanicagodin2013@gmail.com" 
                className="bg-accent hover:bg-accent/90 text-accent-foreground px-4 sm:px-6 py-2 rounded-md inline-flex items-center justify-center gap-2 transition-all font-medium text-xs sm:text-sm w-full sm:w-auto break-all sm:break-normal"
                aria-label="Enviar email para a Mecânica Godin"
              >
                <span className="truncate sm:whitespace-normal">mecanicagodin2013@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
        
        {/* Address and Hours Card */}
        <div className="mt-8 sm:mt-12 glass rounded-xl shadow-sm p-4 sm:p-6 lg:p-8 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {/* Address */}
            <div>
              <div className="flex items-start mb-4 sm:mb-6">
                <div className="bg-primary/10 p-2 sm:p-3 rounded-full mr-3 sm:mr-4 flex-shrink-0">
                  <MapPin className="text-primary" size={20} />
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-foreground mb-2">Endereço</h4>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Avenida das Missões, 209<br />
                    Jardim Floresta - Ampére, PR
                  </p>
                  <a 
                    href="https://www.google.com/maps/place/Av.+das+Miss%C3%B5es,+209+-+Jardim+Floresta,+Amp%C3%A9re+-+PR/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-primary hover:text-primary/80 transition-colors duration-300 mt-2 inline-block text-sm sm:text-base"
                  >
                    Ver no mapa
                  </a>
                </div>
              </div>
              
              {/* Google Maps Embed */}
              <div className="w-full h-48 sm:h-64 mt-4 rounded-lg overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.9!2d-53.4753!3d-25.9116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDU0JzQxLjgiUyA1M8KwMjgnMzEuMSJX!5e0!3m2!1spt-BR!2sbr!4v1640000000000!5m2!1spt-BR!2sbr" 
                  width="100%" 
                  height="100%" 
                  style={{
                    border: 0
                  }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade" 
                  title="Localização da Mecânica Godin em Ampére PR"
                ></iframe>
              </div>
            </div>
            
            {/* Working Hours */}
            <div className="mt-6 lg:mt-0">
              <div className="flex items-center mb-4">
                <div className="bg-primary/10 p-2 sm:p-3 rounded-full mr-3 sm:mr-4 flex-shrink-0">
                  <Clock className="text-primary" size={20} />
                </div>
                <h4 className="text-base sm:text-lg font-semibold text-foreground">Horário de Atendimento</h4>
              </div>
              
              <div className="space-y-3 sm:space-y-2 mb-6">
                <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-0">
                  <span className="text-sm sm:text-base text-muted-foreground">Segunda - Sexta:</span>
                  <span className="font-medium text-foreground text-sm sm:text-base">08:00 - 18:00</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-0">
                  <span className="text-sm sm:text-base text-muted-foreground">Sábado:</span>
                  <span className="font-medium text-foreground text-sm sm:text-base">08:00 - 12:00</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-0">
                  <span className="text-sm sm:text-base text-muted-foreground">Domingo:</span>
                  <span className="font-medium text-foreground text-sm sm:text-base">Fechado</span>
                </div>
              </div>
              
              {/* Social Media */}
              <div className="border-t pt-6">
                <h5 className="text-base font-semibold text-foreground mb-3">Siga-nos nas redes sociais</h5>
                <a 
                  href="https://instagram.com/mecanicagodinn" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
                  aria-label="Seguir no Instagram"
                >
                  <span className="text-sm">@mecanicagodinn</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

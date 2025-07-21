
import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-accent text-accent-foreground">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="animate-fade-in">
            <h3 className="text-xl font-semibold mb-6">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="mr-3 mt-1 flex-shrink-0 text-primary" size={18} />
                <span>(46) 99941-8304</span>
              </li>
              <li className="flex items-start">
                <Mail className="mr-3 mt-1 flex-shrink-0 text-primary" size={18} />
                <span>mecanicagodin2013@gmail.com</span>
              </li>
              <li className="flex items-start">
                <MapPin className="mr-3 mt-1 flex-shrink-0 text-primary" size={18} />
                <span>Avenida das Missões, 209 - Jardim Floresta, Ampére - PR</span>
              </li>
            </ul>
          </div>
          
          {/* Quick Links */}
          <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <h3 className="text-xl font-semibold mb-6">Links Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="hover:text-primary transition-colors duration-300 inline-block">Sobre Nós</a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-colors duration-300 inline-block">Serviços</a>
              </li>
              <li>
                <a href="#team" className="hover:text-primary transition-colors duration-300 inline-block">Nossa Missão</a>
              </li>
              <li>
                <a href="#specialties" className="hover:text-primary transition-colors duration-300 inline-block">Especialidades</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary transition-colors duration-300 inline-block">Contato</a>
              </li>
            </ul>
          </div>
          
          {/* Hours and Social Media */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-xl font-semibold mb-6">Horário de Funcionamento</h3>
            <div className="space-y-2 mb-6">
              <div className="flex items-center">
                <Clock className="mr-2 text-primary" size={16} />
                <span className="text-sm">Segunda - Sexta: 08:00 - 18:00</span>
              </div>
              <div className="flex items-center">
                <Clock className="mr-2 text-primary" size={16} />
                <span className="text-sm">Sábado: 08:00 - 12:00</span>
              </div>
              <div className="flex items-center">
                <Clock className="mr-2 text-primary" size={16} />
                <span className="text-sm">Domingo: Fechado</span>
              </div>
            </div>
            
            <h4 className="text-lg font-semibold mb-4">Redes Sociais</h4>
            <div className="flex space-x-4">
              <a href="https://instagram.com/mecanicagodinn" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-primary hover:text-accent transition-colors duration-300 p-2 rounded-full">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-white/10 hover:bg-primary hover:text-accent transition-colors duration-300 p-2 rounded-full">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-white/10 hover:bg-primary hover:text-accent transition-colors duration-300 p-2 rounded-full">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-white/10 mt-10 pt-6 text-center text-sm text-white/70">
          <p>© {new Date().getFullYear()} Mecânica Godin. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

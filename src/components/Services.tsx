
import React from 'react';
import { Gauge, Wrench, Car, Battery, ArrowRight } from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'Câmbios Automáticos',
    description: 'Especialistas em manutenção e reparo de câmbios automáticos. Diagnóstico preciso, troca de fluidos e reparos completos com garantia.',
    icon: Gauge,
    delay: '0s',
    features: ['Diagnóstico computadorizado', 'Troca de fluidos', 'Reparos completos', 'Garantia de serviço']
  },
  {
    id: 2,
    title: 'Carros Elétricos e Híbridos',
    description: 'Atendimento especializado para veículos elétricos e híbridos. Manutenção de baterias, sistemas elétricos e componentes específicos.',
    icon: Battery,
    delay: '0.1s',
    features: ['Manutenção de baterias', 'Sistemas elétricos', 'Diagnóstico especializado', 'Técnicos certificados']
  },
  {
    id: 3,
    title: 'Revisão Completa',
    description: 'Revisão preventiva completa do seu veículo. Verificação de todos os sistemas, troca de filtros, fluidos e checklist detalhado.',
    icon: Wrench,
    delay: '0.2s',
    features: ['Checklist completo', 'Troca de filtros', 'Verificação de fluidos', 'Relatório detalhado']
  },
  {
    id: 4,
    title: 'Sistema de Freios',
    description: 'Manutenção e reparo completo do sistema de freios. Pastilhas, discos, fluido de freio e todo o sistema de segurança.',
    icon: Car,
    delay: '0.3s',
    features: ['Pastilhas e discos', 'Fluido de freio', 'Sistema ABS', 'Teste de segurança']
  }
];

const Services = () => {
  return (
    <section id="services" className="section bg-transparent">
      <div className="container-custom py-12 sm:py-16 lg:py-20">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 px-4">
          <div className="inline-block bg-primary/10 text-primary font-medium px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm mb-4 text-shadow-sm">
            Nossos Serviços
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4 sm:mb-6 text-shadow-md">
            Especialistas em Soluções Automotivas
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground text-shadow">
            Atendemos seu veículo com tecnologia de ponta e profissionais especializados, 
            oferecendo soluções completas para manutenção automotiva.
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 px-4 mb-8">
          {services.map(service => (
            <div 
              key={service.id} 
              style={{
                animationDelay: service.delay
              }} 
              className="glass rounded-lg p-6 sm:p-8 shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300 transform hover:scale-[1.02] animate-fade-in"
            >
              <div className="bg-primary/10 p-3 sm:p-4 rounded-lg inline-block mb-4 sm:mb-5">
                <service.icon className="text-primary" size={24} />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3 text-foreground text-shadow-sm">
                {service.title}
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-4 text-shadow-sm leading-relaxed">
                {service.description}
              </p>
              
              {/* Features List */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <a 
                href="https://wa.me/5546999418304" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors duration-300 text-shadow-sm text-sm sm:text-base"
                aria-label={`Solicitar orçamento para ${service.title} via WhatsApp`}
              >
                Solicitar orçamento <ArrowRight size={16} className="ml-1" />
              </a>
            </div>
          ))}
        </div>
        
        {/* CTA */}
        <div className="text-center px-4">
          <div className="glass rounded-lg p-6 sm:p-8 max-w-2xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
              Precisa de um orçamento personalizado?
            </h3>
            <p className="text-muted-foreground mb-6">
              Entre em contato conosco e receba um atendimento especializado para seu veículo.
            </p>
            <a 
              href="https://wa.me/5546999418304"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-md transition-all flex items-center justify-center gap-2 font-medium inline-flex text-shadow-sm text-sm sm:text-base"
              aria-label="Falar com especialistas via WhatsApp"
            >
              <span>Fale com nossos especialistas</span>
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

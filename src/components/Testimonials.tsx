
import React from 'react';
import { Gauge, Battery, Wrench, Car } from 'lucide-react';

const specialties = [
  {
    id: 1,
    title: 'Câmbios Automáticos',
    description: 'Especialistas em diagnóstico, manutenção e reparo de câmbios automáticos de todas as marcas.',
    icon: Gauge,
    features: ['Diagnóstico computadorizado', 'Troca de fluidos', 'Reparos completos']
  },
  {
    id: 2,
    title: 'Veículos Elétricos',
    description: 'Atendimento especializado para carros elétricos e híbridos com tecnologia de ponta.',
    icon: Battery,
    features: ['Manutenção de baterias', 'Sistemas elétricos', 'Diagnóstico avançado']
  },
  {
    id: 3,
    title: 'Manutenção Preventiva',
    description: 'Revisões completas para manter seu veículo sempre em perfeito funcionamento.',
    icon: Wrench,
    features: ['Checklist completo', 'Troca de filtros', 'Verificação geral']
  },
  {
    id: 4,
    title: 'Sistema de Freios',
    description: 'Manutenção completa do sistema de freios para sua segurança e tranquilidade.',
    icon: Car,
    features: ['Pastilhas e discos', 'Fluido de freio', 'Teste de segurança']
  }
];

const Testimonials = () => {
  return (
    <section id="specialties" className="section py-20 bg-transparent">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-6 text-shadow-md">Nossas Especialidades</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Conheça os serviços especializados que oferecemos com qualidade e tecnologia de ponta
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {specialties.map(specialty => (
            <div key={specialty.id} className="glass rounded-lg p-6 hover:shadow-md transition-all duration-300 transform hover:scale-[1.02]">
              <div className="bg-primary/10 p-4 rounded-lg inline-block mb-5">
                <specialty.icon className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{specialty.title}</h3>
              <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{specialty.description}</p>
              <ul className="space-y-2">
                {specialty.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

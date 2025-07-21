
import React from 'react';
import { Target, ThumbsUp, Wrench, Award, ShieldCheck, UserCheck } from 'lucide-react';

const Team = () => {
  return (
    <section id="team" className="section py-12 sm:py-16 lg:py-20 bg-transparent">
      <div className="container-custom px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16">
          {/* Nossa Missão */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="mb-6">
              <Target className="w-12 h-12 sm:w-16 sm:h-16 text-primary" />
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4 sm:mb-6 text-shadow-md">Nossa Missão</h2>
            <p className="text-base sm:text-lg mb-4 text-shadow text-muted-foreground leading-relaxed">
              Nossa missão é oferecer serviços automotivos de excelência, especializados em câmbios 
              automáticos e veículos elétricos/híbridos, sempre com tecnologia de ponta e atendimento 
              personalizado para garantir a satisfação e segurança dos nossos clientes.
            </p>
            <p className="text-base sm:text-lg text-shadow text-muted-foreground leading-relaxed">
              A Mecânica Godin traz inovação para o setor automotivo, sempre garantindo qualidade e 
              confiança em cada serviço prestado, desde manutenções preventivas até reparos complexos 
              em sistemas eletrônicos avançados.
            </p>
          </div>
          
          {/* Nossos Valores */}
          <div className="flex flex-col">
            <div className="flex items-center justify-center lg:justify-start mb-6">
              <ThumbsUp className="w-12 h-12 sm:w-16 sm:h-16 text-primary bg-transparent" />
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-6 sm:mb-8 text-shadow-md text-center lg:text-left">Nossos Valores</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {/* Qualidade */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left">
                <div className="bg-primary/10 p-3 sm:p-4 mb-3 sm:mb-0 sm:mr-4 flex items-center justify-center rounded-md flex-shrink-0">
                  <Award className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg sm:text-xl mb-2 text-shadow-sm">Qualidade</h3>
                  <p className="text-shadow-sm text-muted-foreground text-sm sm:text-base">Serviços executados com precisão e materiais de primeira linha.</p>
                </div>
              </div>
              
              {/* Especialização */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left">
                <div className="bg-primary/10 p-3 sm:p-4 mb-3 sm:mb-0 sm:mr-4 flex items-center justify-center rounded-md flex-shrink-0">
                  <Wrench className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg sm:text-xl mb-2 text-shadow-sm">Especialização</h3>
                  <p className="text-shadow-sm text-muted-foreground text-sm sm:text-base">Expertise em câmbios automáticos e veículos elétricos.</p>
                </div>
              </div>
              
              {/* Atendimento */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left">
                <div className="bg-primary/10 p-3 sm:p-4 mb-3 sm:mb-0 sm:mr-4 flex items-center justify-center rounded-md flex-shrink-0">
                  <UserCheck className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg sm:text-xl mb-2 text-shadow-sm">Atendimento</h3>
                  <p className="text-shadow-sm text-muted-foreground text-sm sm:text-base">Suporte personalizado e transparente em todos os serviços.</p>
                </div>
              </div>
              
              {/* Confiança */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left">
                <div className="bg-primary/10 p-3 sm:p-4 mb-3 sm:mb-0 sm:mr-4 flex items-center justify-center rounded-md flex-shrink-0">
                  <ShieldCheck className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg sm:text-xl mb-2 text-shadow-sm">Confiança</h3>
                  <p className="text-shadow-sm text-muted-foreground text-sm sm:text-base">Relacionamento duradouro baseado na honestidade e competência.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;

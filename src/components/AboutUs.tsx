
import React from 'react';
import { Check, Award, Users, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AboutUs = () => {
  return (
    <>
      {/* Light Section - Sobre a Mecânica Godin */}
      <section id="about" className="py-12 sm:py-16 lg:py-20 bg-transparent">
        <div className="container-custom px-4">
          <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 items-center">
            {/* Left Column - Content */}
            <div className="lg:w-1/2 text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-2">
                Mecânica Godin - Tradição e Inovação
              </h2>
              <p className="mb-4 sm:mb-6 text-muted-foreground text-sm sm:text-base leading-relaxed">
                Há mais de uma década cuidando do seu veículo com dedicação, qualidade e tecnologia de ponta.
              </p>
              
              <div className="space-y-4 sm:space-y-6 mb-4 sm:mb-6">
                <p className="text-foreground text-sm sm:text-base leading-relaxed">
                  A Mecânica Godin é especializada em serviços automotivos de alta qualidade, 
                  com foco especial em câmbios automáticos e veículos elétricos/híbridos. 
                  Nossa equipe de profissionais qualificados utiliza equipamentos modernos 
                  e técnicas avançadas para garantir o melhor atendimento.
                </p>
                
                <div className="glass p-4 sm:p-6 rounded-lg border-l-4 border-primary">
                  <p className="text-foreground text-sm sm:text-base leading-relaxed">
                    <strong>Nossa missão:</strong> Oferecer serviços automotivos de excelência, 
                    sempre atualizados com as mais recentes tecnologias do mercado, 
                    garantindo segurança e satisfação para nossos clientes.
                  </p>
                </div>
              </div>
              
              {/* Key Points */}
              <div className="space-y-3 sm:space-y-4">
                <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left">
                  <div className="bg-primary/10 p-1 rounded-full mb-2 sm:mb-0 sm:mr-3 sm:mt-1 flex-shrink-0">
                    <Check className="text-primary" size={16} />
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-semibold text-foreground">Especialização Técnica</h4>
                    <p className="text-muted-foreground text-sm sm:text-base">
                      Profissionais especializados em câmbios automáticos e veículos elétricos
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left">
                  <div className="bg-primary/10 p-1 rounded-full mb-2 sm:mb-0 sm:mr-3 sm:mt-1 flex-shrink-0">
                    <Check className="text-primary" size={16} />
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-semibold text-foreground">Equipamentos Modernos</h4>
                    <p className="text-muted-foreground text-sm sm:text-base">
                      Tecnologia de ponta para diagnósticos precisos e reparos eficientes
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Column - Image */}
            <div className="lg:w-1/2 w-full">
              <div className="relative max-w-md mx-auto lg:max-w-none">
                <div className="bg-primary/20 w-full h-full absolute -left-3 sm:-left-6 -top-3 sm:-top-6 rounded-lg"></div>
                <img 
                  alt="Equipe especializada da Mecânica Godin trabalhando em oficina moderna" 
                  className="relative z-10 rounded-lg shadow-lg w-full object-cover h-64 sm:h-80 lg:h-96" 
                  src="https://images.unsplash.com/photo-1487754180451-c456f719a1fc?q=80&w=1470&auto=format&fit=crop"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-12 sm:py-16 bg-accent text-accent-foreground">
        <div className="container-custom px-4">
          <div className="mb-8 sm:mb-12 text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
              Nossa Experiência em Números
            </h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <Card className="bg-white/10 border border-white/20 text-center">
              <CardContent className="p-6">
                <Award className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="text-2xl sm:text-3xl font-bold text-accent-foreground mb-2">10+</h3>
                <p className="text-accent-foreground/80">Anos de Experiência</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 border border-white/20 text-center">
              <CardContent className="p-6">
                <Users className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="text-2xl sm:text-3xl font-bold text-accent-foreground mb-2">500+</h3>
                <p className="text-accent-foreground/80">Clientes Satisfeitos</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 border border-white/20 text-center">
              <CardContent className="p-6">
                <Clock className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="text-2xl sm:text-3xl font-bold text-accent-foreground mb-2">24h</h3>
                <p className="text-accent-foreground/80">Atendimento Rápido</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 border border-white/20 text-center">
              <CardContent className="p-6">
                <Check className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="text-2xl sm:text-3xl font-bold text-accent-foreground mb-2">100%</h3>
                <p className="text-accent-foreground/80">Garantia de Qualidade</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;

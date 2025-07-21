
import React from 'react';
import { Check, Award, Users, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const AboutUs = () => {
  const carouselImages = [
    {
      src: "/lovable-uploads/0f3e57de-fc1e-4b5e-9392-f8452f5c647b.png",
      alt: "Volkswagen Golf modificado na oficina Mecânica Godin"
    },
    {
      src: "/lovable-uploads/2499744c-4788-4ae6-94fd-602e51796241.png", 
      alt: "Participação em evento técnico automotivo - Circuito Doutor-IE 2025"
    },
    {
      src: "/lovable-uploads/e49fe1b4-42cc-48ce-af4c-ae54edfbd279.png",
      alt: "Serviço de manutenção de freios - disco de freio desgastado"
    },
    {
      src: "/lovable-uploads/1475b112-5252-4270-a12e-9774b4f64305.png",
      alt: "Especialista trabalhando em câmbio automático na Mecânica Godin"
    },
    {
      src: "/lovable-uploads/1fa2a185-e590-4a80-abe7-7c6aa4900795.png",
      alt: "Especialista em câmbios automáticos - Mecânica Godin"
    },
    {
      src: "/lovable-uploads/c85f61f8-bff4-44ac-8f78-b4e3019b5abb.png",
      alt: "Serviço de alinhamento e balanceamento de pneus"
    }
  ];

  return (
    <>
      {/* Light Section - Sobre a Mecânica Godin */}
      <section id="about" className="py-12 sm:py-16 lg:py-20 bg-transparent">
        <div className="container-custom px-4">
          <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 items-center">
            {/* Left Column - Content */}
            <div className="lg:w-1/2 text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-2">
                Mecânica Godin – Especialistas em Câmbios Automáticos e Manutenção Completa
              </h2>
              <p className="mb-4 sm:mb-6 text-muted-foreground text-sm sm:text-base leading-relaxed">
                Localizada em Ampére/PR, unimos experiência, tecnologia e dedicação para cuidar do seu veículo como se fosse nosso.
              </p>
              
              <div className="space-y-4 sm:space-y-6 mb-4 sm:mb-6">
                <p className="text-foreground text-sm sm:text-base leading-relaxed">
                  Na Mecânica Godin, somos especializados em câmbios automáticos, mas também oferecemos 
                  serviços completos de manutenção preventiva e corretiva, diagnósticos precisos e 
                  reparos de alta qualidade.
                </p>
                
                <div className="glass p-4 sm:p-6 rounded-lg border-l-4 border-primary">
                  <p className="text-foreground text-sm sm:text-base leading-relaxed">
                    <strong>Nosso compromisso:</strong> Oferecer atendimento transparente, orçamentos justos 
                    e soluções rápidas para garantir a segurança e o desempenho do seu carro. Trabalhamos 
                    com peças de confiança e uma equipe de profissionais qualificados, prontos para 
                    superar suas expectativas.
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
                    <h4 className="text-base sm:text-lg font-semibold text-foreground">Especialização em Câmbios</h4>
                    <p className="text-muted-foreground text-sm sm:text-base">
                      Especialistas em câmbios automáticos com experiência e tecnologia avançada
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left">
                  <div className="bg-primary/10 p-1 rounded-full mb-2 sm:mb-0 sm:mr-3 sm:mt-1 flex-shrink-0">
                    <Check className="text-primary" size={16} />
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-semibold text-foreground">Atendimento Transparente</h4>
                    <p className="text-muted-foreground text-sm sm:text-base">
                      Orçamentos justos e atendimento claro para sua total tranquilidade
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

      {/* Carousel Section - Um pouco sobre nós */}
      <section className="py-12 sm:py-16 bg-muted/20">
        <div className="container-custom px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Um Pouco Sobre Nós
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto">
              Conheça nossos trabalhos, serviços especializados e a qualidade que oferecemos na Mecânica Godin.
            </p>
          </div>

          <div className="relative">
            <Carousel 
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full max-w-5xl mx-auto"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {carouselImages.map((image, index) => (
                  <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                      <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                        <CardContent className="p-0">
                          <div className="aspect-square relative">
                            <img
                              src={image.src}
                              alt={image.alt}
                              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                              loading="lazy"
                            />
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden sm:flex" />
              <CarouselNext className="hidden sm:flex" />
            </Carousel>
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

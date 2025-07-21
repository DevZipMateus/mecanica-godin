import React from 'react';
import { useIsMobile } from '../hooks/use-mobile';
import { Wrench, Car, Battery, Gauge } from 'lucide-react';

const Hero = () => {
  const isMobile = useIsMobile();

  return (
    <section className="relative h-screen min-h-[500px] sm:min-h-[600px] flex items-center pt-16 sm:pt-24">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/lovable-uploads/d8f36c75-7ee1-4dc2-9f2c-7bd95af99383.png" 
          alt="Fachada da Mecânica Godin" 
          className="w-full h-full object-cover object-center" 
          loading="eager"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-4xl py-0">
          <div className="animate-fade-in">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white text-shadow-header mb-4 sm:mb-6 leading-tight">
              Mecânica Godin
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 text-shadow-md mb-8 font-medium">
              Especialista em Câmbios Automáticos e Carros Elétricos
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 animate-fade-in mb-16 sm:mb-20" style={{
            animationDelay: '0.2s'
          }}>
            <a 
              href="#services" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 sm:px-8 py-3 rounded font-medium text-base sm:text-lg transition-all text-shadow-sm text-center inline-block"
            >
              NOSSOS SERVIÇOS
            </a>
            
            <a 
              href="#about" 
              className="bg-transparent border border-white text-white hover:bg-white/10 px-6 sm:px-8 py-3 rounded font-medium text-base sm:text-lg transition-all text-shadow text-center inline-block"
            >
              SOBRE NÓS
            </a>
          </div>

          {/* Service Categories */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 animate-fade-in" style={{
            animationDelay: '0.3s'
          }}>
            <div className="flex items-center bg-black/40 backdrop-blur-sm hover:bg-black/50 p-3 sm:p-4 rounded-lg transition-all group">
              <div className="w-10 h-10 sm:w-12 sm:h-12 mr-3 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                <Gauge className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <span className="text-white font-medium group-hover:text-primary transition-colors text-shadow text-sm sm:text-base">
                Câmbios Automáticos
              </span>
            </div>
            
            <div className="flex items-center bg-black/40 backdrop-blur-sm hover:bg-black/50 p-3 sm:p-4 rounded-lg transition-all group">
              <div className="w-10 h-10 sm:w-12 sm:h-12 mr-3 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                <Battery className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <span className="text-white font-medium group-hover:text-primary transition-colors text-shadow text-sm sm:text-base">
                Carros Elétricos
              </span>
            </div>
            
            <div className="flex items-center bg-black/40 backdrop-blur-sm hover:bg-black/50 p-3 sm:p-4 rounded-lg transition-all group">
              <div className="w-10 h-10 sm:w-12 sm:h-12 mr-3 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                <Wrench className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <span className="text-white font-medium group-hover:text-primary transition-colors text-shadow text-sm sm:text-base">
                Revisão Completa
              </span>
            </div>
            
            <div className="flex items-center bg-black/40 backdrop-blur-sm hover:bg-black/50 p-3 sm:p-4 rounded-lg transition-all group sm:col-span-2 lg:col-span-1">
              <div className="w-10 h-10 sm:w-12 sm:h-12 mr-3 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                <Car className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <span className="text-white font-medium group-hover:text-primary transition-colors text-shadow text-sm sm:text-base">
                Sistema de Freios
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

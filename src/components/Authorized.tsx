
import React from 'react';

const Authorized = () => {
  const authorizedCompanies = [
    {
      name: 'CAB',
      logo: '/lovable-uploads/8db8c71d-5d85-48a6-9b37-361acc777511.png',
      description: 'Câmbio Automático do Brasil'
    },
    {
      name: 'Doutor IE',
      logo: '/lovable-uploads/9c4c5428-cfa3-4611-bf7d-27eebbbd57c6.png',
      description: 'Especialista em Injeção Eletrônica'
    },
    {
      name: 'Bosch',
      logo: '/lovable-uploads/15903337-f580-4a2b-b316-59cd7a9ccac2.png',
      description: 'Tecnologia e Serviços'
    }
  ];

  return (
    <section id="authorized" className="section bg-white/95 backdrop-blur-sm">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Empresas Autorizadas
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trabalhamos em parceria com as principais marcas do mercado automotivo
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {authorizedCompanies.map((company, index) => (
            <div 
              key={company.name}
              className="glass rounded-lg p-8 text-center card-hover group"
            >
              <div className="flex justify-center items-center mb-6 h-24">
                <img
                  src={company.logo}
                  alt={`Logo ${company.name}`}
                  className="max-h-full max-w-full object-contain filter group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {company.name}
              </h3>
              
              <p className="text-muted-foreground text-sm">
                {company.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-sm font-medium">Parcerias oficiais garantem qualidade e confiabilidade</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Authorized;

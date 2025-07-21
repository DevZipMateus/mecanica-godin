
import React, { useState } from 'react';
import { Mail, Phone, Menu, X } from 'lucide-react';
import { useIsMobile } from '../../hooks/use-mobile';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-accent text-accent-foreground py-1 sm:py-2">
        <div className="container-custom flex justify-between items-center gap-2 sm:gap-6 text-xs sm:text-sm">
          <div className="flex items-center gap-4">
            <a href="tel:+5546999418304" className="flex items-center hover:text-primary transition-colors">
              <Phone size={14} className="mr-1 sm:mr-2" />
              <span className="hidden sm:inline">(46) 99941-8304</span>
              <span className="sm:hidden">Ligar</span>
            </a>
          </div>
          
          <div className="flex items-center gap-4">
            <a href="mailto:mecanicagodin2013@gmail.com" className="flex items-center hover:text-primary transition-colors">
              <Mail size={14} className="mr-1 sm:mr-2" />
              <span className="hidden sm:inline">mecanicagodin2013@gmail.com</span>
              <span className="sm:hidden">Email</span>
            </a>
          </div>
        </div>
      </div>
      
      {/* Main Header */}
      <header className="absolute w-full bg-transparent z-10 top-6 sm:top-10">
        <div className="container-custom py-2 sm:py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="text-xl sm:text-2xl font-bold transition-all duration-300 transform hover:scale-[1.02]">
              <div className="flex items-center">
                <div className="bg-primary text-primary-foreground px-3 py-2 rounded-lg font-bold text-lg sm:text-xl">
                  MECÂNICA GODIN
                </div>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-4 xl:space-x-6">
              <a 
                href="#about" 
                onClick={e => {
                  e.preventDefault();
                  scrollToSection('about');
                }} 
                className="nav-link text-white hover:text-primary cursor-pointer text-sm xl:text-base"
              >
                Sobre Nós
              </a>
              <a 
                href="#services" 
                onClick={e => {
                  e.preventDefault();
                  scrollToSection('services');
                }} 
                className="nav-link text-white hover:text-primary cursor-pointer text-sm xl:text-base"
              >
                Serviços
              </a>
              <a 
                href="#team" 
                onClick={e => {
                  e.preventDefault();
                  scrollToSection('team');
                }} 
                className="nav-link text-white hover:text-primary cursor-pointer text-sm xl:text-base"
              >
                Especialidades
              </a>
              <a 
                href="#testimonials" 
                onClick={e => {
                  e.preventDefault();
                  scrollToSection('testimonials');
                }} 
                className="nav-link text-white hover:text-primary cursor-pointer text-sm xl:text-base"
              >
                Depoimentos
              </a>
              <a 
                href="#contact" 
                onClick={e => {
                  e.preventDefault();
                  scrollToSection('contact');
                }} 
                className="nav-link text-white hover:text-primary cursor-pointer text-sm xl:text-base"
              >
                Contato
              </a>
              
              <a 
                href="#contact" 
                onClick={e => {
                  e.preventDefault();
                  scrollToSection('contact');
                }} 
                className="ml-2 xl:ml-4 bg-primary hover:bg-primary/90 text-primary-foreground px-4 xl:px-6 py-2 rounded font-medium transition-all text-sm xl:text-base"
              >
                SOLICITAR ORÇAMENTO
              </a>
            </nav>
            
            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden text-white hover:text-primary focus:outline-none p-2" 
              onClick={toggleMobileMenu}
              aria-label="Menu de navegação"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>
      
      {/* Mobile Navigation Menu */}
      <div className={`fixed top-0 left-0 w-full h-full bg-accent z-50 transform transition-transform duration-300 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="container-custom py-4 h-full flex flex-col">
          <div className="flex justify-between items-center mb-8 pt-4">
            <div className="text-xl font-bold">
              <div className="bg-primary text-primary-foreground px-3 py-2 rounded-lg font-bold">
                MECÂNICA GODIN
              </div>
            </div>
            <button 
              className="text-accent-foreground hover:text-primary focus:outline-none p-2" 
              onClick={toggleMobileMenu}
              aria-label="Fechar menu"
            >
              <X size={20} />
            </button>
          </div>
          
          <div className="flex flex-col space-y-6 text-base sm:text-lg">
            <a 
              href="#about" 
              onClick={e => {
                e.preventDefault();
                scrollToSection('about');
              }} 
              className="text-accent-foreground hover:text-primary cursor-pointer py-2"
            >
              Sobre Nós
            </a>
            <a 
              href="#services" 
              onClick={e => {
                e.preventDefault();
                scrollToSection('services');
              }} 
              className="text-accent-foreground hover:text-primary cursor-pointer py-2"
            >
              Serviços
            </a>
            <a 
              href="#team" 
              onClick={e => {
                e.preventDefault();
                scrollToSection('team');
              }} 
              className="text-accent-foreground hover:text-primary cursor-pointer py-2"
            >
              Especialidades
            </a>
            <a 
              href="#testimonials" 
              onClick={e => {
                e.preventDefault();
                scrollToSection('testimonials');
              }} 
              className="text-accent-foreground hover:text-primary cursor-pointer py-2"
            >
              Depoimentos
            </a>
            <a 
              href="#contact" 
              onClick={e => {
                e.preventDefault();
                scrollToSection('contact');
              }} 
              className="text-accent-foreground hover:text-primary cursor-pointer py-2"
            >
              Contato
            </a>
            
            <a 
              href="#contact" 
              onClick={e => {
                e.preventDefault();
                scrollToSection('contact');
              }} 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded font-medium transition-all text-center mt-4"
            >
              SOLICITAR ORÇAMENTO
            </a>
          </div>
          
          <div className="mt-auto pb-8">
            <div className="text-accent-foreground/70 space-y-4">
              <a 
                href="tel:+5546999418304" 
                className="flex items-center text-sm hover:text-primary transition-colors py-2"
              >
                <Phone size={16} className="mr-2" />
                (46) 99941-8304
              </a>
              <a 
                href="mailto:mecanicagodin2013@gmail.com" 
                className="flex items-center text-sm hover:text-primary transition-colors py-2"
              >
                <Mail size={16} className="mr-2" />
                mecanicagodin2013@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

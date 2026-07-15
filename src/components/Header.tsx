import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Scale, Menu, X, MessageSquareCode } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 90; // Header height offset
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const menuItems = [
    { label: 'Início', id: 'inicio' },
    { label: 'Sobre', id: 'sobre' },
    { label: 'Áreas de Atuação', id: 'areas' },
    { label: 'Depoimentos', id: 'depoimentos' },
    { label: 'Contato', id: 'contato' }
  ];

  const whatsappUrl = "https://wa.me/558333228854?text=Olá! Gostaria de agendar uma consulta jurídica com o Dr. João Carlos.";

  return (
    <header
      id="header-app"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-brand-blue/95 backdrop-blur-md shadow-md py-3 border-b border-brand-gold/20'
          : 'bg-gradient-to-b from-brand-blue/90 to-brand-blue/0 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Brand */}
          <button 
            onClick={() => handleScrollTo('inicio')} 
            className="flex items-center space-x-3 text-left focus:outline-none group cursor-pointer"
          >
            <div className="p-2 bg-brand-gold/10 rounded-lg border border-brand-gold/30 group-hover:bg-brand-gold/20 transition-all">
              <Scale className="h-6 w-6 text-brand-gold" />
            </div>
            <div>
              <span className="font-serif text-lg sm:text-xl font-semibold tracking-wider text-white block">
                JOÃO CARLOS
              </span>
              <span className="text-[10px] uppercase tracking-[0.25em] text-brand-gold block font-sans font-medium -mt-1">
                Advogados Associados
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleScrollTo(item.id)}
                className="text-gray-300 hover:text-brand-gold font-sans text-sm font-medium tracking-wide transition-colors cursor-pointer"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-5 py-2.5 bg-brand-gold hover:bg-brand-gold-light text-brand-blue font-sans text-sm font-semibold rounded-md shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0 duration-200"
            >
              <MessageSquareCode className="w-4 h-4 mr-2" />
              Fale no WhatsApp
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md text-gray-300 hover:text-white hover:bg-brand-blue-light/50 focus:outline-none"
              aria-label="Alternar Menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden bg-brand-blue border-b border-brand-gold/10"
          >
            <div className="px-4 pt-2 pb-6 space-y-3 shadow-inner">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleScrollTo(item.id)}
                  className="block w-full text-left px-3 py-2.5 rounded-md text-base font-medium text-gray-300 hover:text-brand-gold hover:bg-white/5 transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-4 px-3">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full px-4 py-3 bg-brand-gold text-brand-blue font-sans font-semibold rounded-md shadow-md hover:bg-brand-gold-light transition-all text-center"
                >
                  <MessageSquareCode className="w-5 h-5 mr-2" />
                  Fale no WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

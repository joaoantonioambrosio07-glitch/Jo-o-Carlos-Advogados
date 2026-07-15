import { motion } from 'motion/react';
import { MessageSquare, Award, CheckCircle2, ShieldCheck } from 'lucide-react';
import heroBackground from '../assets/images/hero_law_firm_1784157331146.jpg';

export default function Hero() {
  const whatsappUrl = "https://wa.me/558333228854?text=Olá! Gostaria de agendar uma consulta jurídica com o Dr. João Carlos.";

  const handleScrollToContact = () => {
    const element = document.getElementById('contato');
    if (element) {
      const offset = 90;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-24 pb-16 bg-brand-blue overflow-hidden">
      
      {/* Background Image with Layered Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBackground}
          alt="Escritório João Carlos Advogados Associados"
          className="w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
        />
        {/* Navy/Blue overlay with linear gradient to keep text readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-blue via-brand-blue/90 to-brand-blue/60 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-blue via-transparent to-brand-blue/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Content */}
          <div className="lg:col-span-7 text-left space-y-8">
            
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2 bg-brand-gold/15 border border-brand-gold/30 px-3 py-1.5 rounded-full"
            >
              <Award className="h-4 w-4 text-brand-gold animate-pulse" />
              <span className="text-xs uppercase font-sans tracking-[0.2em] text-brand-gold-light font-semibold">
                Advocacia de Alta Performance • Campina Grande
              </span>
            </motion.div>

            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white font-medium leading-tight tracking-tight"
              >
                Assessoria Jurídica de <span className="text-brand-gold italic">Confiança</span> em Campina Grande
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="font-sans text-gray-300 text-base sm:text-lg max-w-xl leading-relaxed"
              >
                Atuação pautada pela segurança jurídica, atendimento personalizado e compromisso irrestrito com cada cliente. Buscamos soluções eficientes e éticas para defender os seus direitos.
              </motion.p>
            </div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 pt-2"
            >
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center px-8 py-4 bg-brand-gold hover:bg-brand-gold-light text-brand-blue font-sans font-bold rounded-md shadow-xl transition-all transform hover:-translate-y-0.5 active:translate-y-0 text-center"
              >
                <MessageSquare className="w-5 h-5 mr-3 shrink-0" />
                Falar com um Advogado no WhatsApp
              </a>
              <button
                onClick={handleScrollToContact}
                className="flex items-center justify-center px-6 py-4 bg-transparent hover:bg-white/5 text-white font-sans font-semibold rounded-md border border-white/20 hover:border-white/40 transition-colors text-center cursor-pointer"
              >
                Conhecer Estrutura
              </button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10 max-w-lg"
            >
              <div className="flex items-center space-x-2">
                <ShieldCheck className="h-5 w-5 text-brand-gold shrink-0" />
                <span className="text-xs sm:text-sm text-gray-300 font-sans font-medium">Ética & Rigor</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="h-5 w-5 text-brand-gold shrink-0" />
                <span className="text-xs sm:text-sm text-gray-300 font-sans font-medium">Foco no Cliente</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="h-5 w-5 text-brand-gold shrink-0" />
                <span className="text-xs sm:text-sm text-gray-300 font-sans font-medium">Sólida Experiência</span>
              </div>
            </motion.div>

          </div>

          {/* Decorative Legal Crest / Card (Tablet/Desktop only) */}
          <div className="hidden lg:col-span-5 lg:flex justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-brand-blue/80 backdrop-blur-md border border-brand-gold/30 p-8 rounded-xl shadow-2xl max-w-sm w-full relative"
            >
              <div className="absolute top-0 right-0 transform translate-x-3 -translate-y-3 bg-brand-gold text-brand-blue text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-md font-sans">
                OAB/PB Ativo
              </div>
              
              <div className="space-y-6">
                <div className="pb-4 border-b border-white/10">
                  <h3 className="font-serif text-xl text-white font-medium">João Carlos</h3>
                  <p className="text-xs text-brand-gold uppercase tracking-wider font-sans font-medium">Sócio Fundador • OAB/PB</p>
                </div>
                
                <p className="font-sans text-sm text-gray-300 leading-relaxed">
                  "Nosso compromisso é ir além da representação processual. Atuamos com transparência e prontidão para assegurar soluções sólidas aos nossos constituintes."
                </p>

                <div className="pt-4 flex items-center justify-between text-xs text-gray-400 font-sans border-t border-white/10">
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-gray-500">Localidade</p>
                    <p className="text-white font-medium">Campina Grande, PB</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] uppercase tracking-wider text-gray-500">Atendimento</p>
                    <p className="text-white font-medium">Presencial e Digital</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

import { Scale, ArrowUp, Mail, Phone, MapPin, Instagram } from 'lucide-react';

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-blue text-gray-300 pt-16 pb-8 border-t border-brand-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-white/10">
          
          {/* Col 1: About / Branding (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-brand-gold/10 rounded-lg border border-brand-gold/30">
                <Scale className="h-5 w-5 text-brand-gold" />
              </div>
              <div>
                <span className="font-serif text-base sm:text-lg font-semibold tracking-wider text-white block">
                  JOÃO CARLOS
                </span>
                <span className="text-[9px] uppercase tracking-[0.25em] text-brand-gold block font-sans font-medium -mt-1">
                  Advogados Associados
                </span>
              </div>
            </div>
            
            <p className="font-sans text-xs sm:text-sm text-gray-400 leading-relaxed max-w-sm pt-2">
              Escritório de advocacia especializado e sediado em Campina Grande - PB. Atuamos com soluções éticas, preventivas e contenciosas nas áreas cível, trabalhista e consultiva.
            </p>

            {/* Local SEO keywords block */}
            <div className="pt-2 text-[10px] text-gray-500 font-sans max-w-xs leading-normal">
              Tags de busca: <span className="italic">advogado Campina Grande</span>, <span className="italic">advogado cível Campina Grande</span>, <span className="italic">advogado trabalhista Campina Grande</span>, <span className="italic">escritório de advocacia Campina Grande</span>.
            </div>
          </div>

          {/* Col 2: Useful links (3 cols) */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-serif text-sm font-semibold text-white uppercase tracking-wider">Navegação</h4>
            <ul className="space-y-2 text-xs sm:text-sm font-sans font-medium">
              <li>
                <a href="#inicio" className="hover:text-brand-gold transition-colors">Início</a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-brand-gold transition-colors">Sobre o Escritório</a>
              </li>
              <li>
                <a href="#areas" className="hover:text-brand-gold transition-colors">Áreas de Atuação</a>
              </li>
              <li>
                <a href="#depoimentos" className="hover:text-brand-gold transition-colors">Depoimentos</a>
              </li>
              <li>
                <a href="#contato" className="hover:text-brand-gold transition-colors">Contato & Localização</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct contact details (4 cols) */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-serif text-sm font-semibold text-white uppercase tracking-wider font-medium">Contatos Rápidos</h4>
            <ul className="space-y-3 text-xs sm:text-sm font-sans">
              <li className="flex items-start space-x-2.5">
                <MapPin className="h-4.5 w-4.5 text-brand-gold shrink-0 mt-0.5" />
                <span className="text-gray-400 leading-relaxed">
                  R. Santo Antônio, 806 - Santo Antônio,<br />
                  Campina Grande - PB, 58406-025
                </span>
              </li>
              <li className="flex items-center space-x-2.5">
                <Phone className="h-4.5 w-4.5 text-brand-gold shrink-0" />
                <a href="tel:+558333228854" className="hover:text-brand-gold transition-colors">+55 83 3322-8854</a>
              </li>
              <li className="flex items-center space-x-2.5">
                <Instagram className="h-4.5 w-4.5 text-brand-gold shrink-0" />
                <a href="https://instagram.com/joaocarlosadvogados" target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition-colors">@joaocarlosadvogados</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright and legal disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] text-gray-500 font-sans">
          
          <div className="space-y-1 text-center sm:text-left">
            <p>© {currentYear} João Carlos Advogados Associados. Todos os direitos reservados.</p>
            <p className="text-gray-600 max-w-2xl leading-relaxed">
              Informativo em conformidade com o Provimento nº 205/2021 do Conselho Federal da OAB. Este site possui caráter meramente informativo e de divulgação profissional institucional, não configurando captação indevida de clientela ou publicidade mercantil.
            </p>
          </div>

          {/* Back to top button */}
          <button
            onClick={handleScrollToTop}
            aria-label="Voltar ao Topo"
            className="flex items-center justify-center p-2.5 bg-brand-gold hover:bg-brand-gold-light text-brand-blue rounded-md shadow-md transition-colors cursor-pointer shrink-0"
          >
            <ArrowUp className="h-4 w-4" />
          </button>

        </div>

      </div>
    </footer>
  );
}

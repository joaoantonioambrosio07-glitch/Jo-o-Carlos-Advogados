import { motion } from 'motion/react';
import { Compass, CheckSquare, Users2, ShieldCheck, HeartHandshake } from 'lucide-react';

export default function Sobre() {
  return (
    <section id="sobre" className="py-24 bg-white relative overflow-hidden">
      
      {/* Decorative background element */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Column 1: Storytelling */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-6"
          >
            <p className="text-xs font-sans font-semibold tracking-[0.2em] text-brand-gold uppercase">
              Sobre Nós
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl text-brand-blue font-semibold tracking-tight leading-tight">
              Tradição, dedicação e compromisso com os seus direitos.
            </h2>
            <div className="w-16 h-1 bg-brand-gold" />
            
            <div className="font-sans text-gray-700 space-y-5 leading-relaxed text-sm sm:text-base">
              <p>
                O escritório <strong className="text-brand-blue font-semibold">João Carlos Advogados Associados</strong> foi fundado com a missão de oferecer uma assessoria jurídica de alto padrão técnico em Campina Grande - PB. Combinamos profundo conhecimento legal com uma abordagem humana e empática, entendendo que por trás de cada processo existe uma história e um objetivo de vida.
              </p>
              <p>
                Nossa atuação é marcada pelo rigor ético e pela busca contínua de soluções preventivas e contenciosas eficazes. Acreditamos que a advocacia de excelência se faz com transparência, acompanhamento constante e comunicação clara com o cliente.
              </p>
              <p className="border-l-4 border-brand-gold pl-4 italic text-gray-600 bg-gray-50 py-3 pr-2 rounded-r-lg">
                "Nossa prioridade absoluta é garantir que você se sinta seguro e respaldado em todas as etapas da sua jornada jurídica."
              </p>
            </div>
          </motion.div>

          {/* Column 2: Highlights / Infrastructure / Key values */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            className="lg:col-span-5 bg-brand-blue text-white p-8 sm:p-10 rounded-xl shadow-xl border border-brand-gold/20 space-y-8"
          >
            <h3 className="font-serif text-xl sm:text-2xl text-white font-medium">
              Nossa Estrutura & Valores
            </h3>
            
            <div className="space-y-6">
              
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-brand-gold/15 rounded-lg text-brand-gold shrink-0">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-sans font-semibold text-white text-base">Atuação Ética e Diligente</h4>
                  <p className="font-sans text-xs text-gray-300 mt-1">
                    Análise técnica precisa e acompanhamento em tempo real para tomada de decisões estratégicas seguras.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-2 bg-brand-gold/15 rounded-lg text-brand-gold shrink-0">
                  <HeartHandshake className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-sans font-semibold text-white text-base">Atendimento Humano</h4>
                  <p className="font-sans text-xs text-gray-300 mt-1">
                    Tratamento atencioso e respeito à individualidade de cada cliente, garantindo total conforto.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-2 bg-brand-gold/15 rounded-lg text-brand-gold shrink-0">
                  <Users2 className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-sans font-semibold text-white text-base">Acessibilidade Plena</h4>
                  <p className="font-sans text-xs text-gray-300 mt-1">
                    Instalações projetadas para receber com total dignidade e conforto. Contamos com estacionamento e banheiros adaptados para cadeirantes.
                  </p>
                </div>
              </div>

            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <div className="text-center">
                <p className="font-serif text-2xl text-brand-gold font-bold">100%</p>
                <p className="font-sans text-[10px] uppercase tracking-wider text-gray-400">Transparência</p>
              </div>
              <div className="text-center">
                <p className="font-serif text-2xl text-brand-gold font-bold">OAB/PB</p>
                <p className="font-sans text-[10px] uppercase tracking-wider text-gray-400">Certificado</p>
              </div>
              <div className="text-center">
                <p className="font-serif text-2xl text-brand-gold font-bold">Foco</p>
                <p className="font-sans text-[10px] uppercase tracking-wider text-gray-400">Em Resultados</p>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}

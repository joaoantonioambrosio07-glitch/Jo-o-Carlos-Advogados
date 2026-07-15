import { motion } from 'motion/react';
import { BookOpen, Briefcase, FileText, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function AreasAtuacao() {
  const areas = [
    {
      id: 'civil',
      title: 'Direito Cível',
      description: 'Atuação em questões relacionadas a relações civis, contratos, responsabilidades civis e defesa de direitos fundamentais.',
      icon: FileText,
      topics: [
        'Contratos e Obrigações',
        'Responsabilidade Civil & Danos',
        'Direito do Consumidor',
        'Direito de Família e Sucessões',
        'Propriedade e Reintegração'
      ],
      whatsappMsg: 'Olá! Gostaria de agendar uma consulta sobre Direito Cível.'
    },
    {
      id: 'trabalhista',
      title: 'Direito Trabalhista',
      description: 'Orientação e representação em questões envolvendo relações de trabalho, direitos de colaboradores e defesas empresariais.',
      icon: Briefcase,
      topics: [
        'Defesas e Ações Trabalhistas',
        'Cálculo de Verbas Rescisórias',
        'Horas Extras & Adicionais',
        'Rescisão Indireta e Assédio',
        'Acordos e Convenções Coletivas'
      ],
      whatsappMsg: 'Olá! Gostaria de agendar uma consulta sobre Direito Trabalhista.'
    },
    {
      id: 'consultivo',
      title: 'Consultivo Jurídico',
      description: 'Análise preventiva rigorosa e orientação jurídica altamente estratégica para subsidiar decisões mais seguras.',
      icon: BookOpen,
      topics: [
        'Pareceres Jurídicos Especializados',
        'Prevenção de Passivo Jurídico',
        'Análise e Elaboração de Riscos',
        'Mediação de Conflitos e Acordos',
        'Auditoria e Compliance Normativo'
      ],
      whatsappMsg: 'Olá! Gostaria de falar sobre Consultivo Jurídico.'
    }
  ];

  return (
    <section id="areas" className="py-24 bg-gray-50 border-t border-gray-150 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <p className="text-xs font-sans font-semibold tracking-[0.2em] text-brand-gold uppercase mb-2">
            Nossas Especialidades
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-brand-blue font-semibold tracking-tight">
            Áreas de Atuação Especializadas
          </h2>
          <p className="font-sans text-sm text-gray-500 mt-3 max-w-xl mx-auto">
            Oferecemos soluções jurídicas focadas em excelência, aliando rigor acadêmico a uma visão prática e focada no resultado.
          </p>
          <div className="w-16 h-1 bg-brand-gold mx-auto mt-4" />
        </motion.div>

        {/* Areas Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {areas.map((area, index) => {
            const IconComp = area.icon;
            const linkUrl = `https://wa.me/558333228854?text=${encodeURIComponent(area.whatsappMsg)}`;
            
            return (
              <motion.div
                key={area.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.15, ease: 'easeOut' }}
                className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group"
              >
                
                {/* Top Colored Bar */}
                <div className="h-1.5 bg-brand-blue group-hover:bg-brand-gold transition-colors duration-300" />
                
                <div className="p-8 flex-grow">
                  
                  {/* Icon & Title */}
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="p-3 bg-brand-blue/5 text-brand-blue rounded-lg group-hover:bg-brand-gold/15 group-hover:text-brand-gold transition-colors duration-300">
                      <IconComp className="h-6 w-6" />
                    </div>
                    <h3 className="font-serif text-xl text-brand-blue font-semibold group-hover:text-brand-gold-dark transition-colors duration-300">
                      {area.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="font-sans text-sm text-gray-600 leading-relaxed mb-6">
                    {area.description}
                  </p>

                  {/* Bullet points */}
                  <div className="border-t border-gray-100 pt-6 space-y-3">
                    <p className="text-xs uppercase font-sans tracking-widest text-gray-400 font-semibold mb-2">
                      Frentes de Atuação
                    </p>
                    {area.topics.map((topic, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-sm text-gray-700">
                        <CheckCircle2 className="h-4 w-4 text-brand-gold shrink-0" />
                        <span className="font-sans">{topic}</span>
                      </div>
                    ))}
                  </div>

                </div>

                {/* Card CTA Footer */}
                <div className="p-6 bg-gray-50 border-t border-gray-100">
                  <a
                    href={linkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-between w-full px-4 py-3 bg-white hover:bg-brand-blue hover:text-white border border-gray-200 hover:border-brand-blue rounded-lg text-sm font-sans font-semibold text-brand-blue transition-all duration-300 group/btn"
                  >
                    <span>Solicitar Consulta</span>
                    <ArrowRight className="h-4 w-4 text-brand-gold transition-transform group-hover/btn:translate-x-1" />
                  </a>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

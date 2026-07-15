import { motion } from 'motion/react';
import { UserCheck, CalendarCheck, Accessibility, ShieldCheck } from 'lucide-react';

export default function Diferenciais() {
  const list = [
    {
      id: '1',
      title: 'Atendimento Personalizado',
      description: 'Cada caso recebe uma análise cuidadosa e uma estratégia adequada às necessidades do cliente.',
      icon: UserCheck
    },
    {
      id: '2',
      title: 'Agendamento Facilitado',
      description: 'Entre em contato e marque uma conversa com nossa equipe presencialmente ou por videoconferência.',
      icon: CalendarCheck
    },
    {
      id: '3',
      title: 'Estrutura Acessível',
      description: 'Ambiente preparado para oferecer conforto e acessibilidade para pessoas com mobilidade reduzida e cadeirantes.',
      icon: Accessibility
    },
    {
      id: '4',
      title: 'Compromisso Jurídico',
      description: 'Atuação de alto padrão baseada em ética inabalável, responsabilidade, sigilo e transparência.',
      icon: ShieldCheck
    }
  ];

  return (
    <section className="py-20 bg-gray-50 border-y border-gray-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-xs font-sans font-semibold tracking-[0.2em] text-brand-gold uppercase mb-2">
            Nossos Valores
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-brand-blue font-semibold tracking-tight">
            Por que escolher João Carlos Advogados Associados?
          </h2>
          <div className="w-16 h-1 bg-brand-gold mx-auto mt-4" />
        </motion.div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {list.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
                className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md hover:border-brand-gold/30 group"
              >
                <div className="p-3 bg-brand-blue/5 text-brand-blue rounded-lg w-fit mb-6 group-hover:bg-brand-gold/15 group-hover:text-brand-gold transition-colors duration-300">
                  <IconComponent className="h-6 w-6" />
                </div>
                
                <h3 className="font-serif text-lg text-brand-blue font-medium mb-3 group-hover:text-brand-blue-light transition-colors">
                  {item.title}
                </h3>
                
                <p className="font-sans text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

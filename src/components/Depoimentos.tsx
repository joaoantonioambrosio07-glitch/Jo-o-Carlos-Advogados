import { motion } from 'motion/react';
import { Star, MessageSquareCode, Quote } from 'lucide-react';

export default function Depoimentos() {
  const reviews = [
    {
      id: '1',
      author: 'Marco Brandao',
      source: 'Google Avaliações',
      text: 'Ótimo atendimento, transmite confiabilidade e serviços excelentes, parabéns a este grupo!',
      stars: 5,
    },
    {
      id: '2',
      author: 'Carlos Jose Pinto de Arruda',
      source: 'Google Avaliações',
      text: 'Competência e credibilidade em cada ação.',
      stars: 5,
    },
    {
      id: '3',
      author: 'Cliente Google',
      source: 'Google Avaliações',
      text: 'Trabalho excelente, recomendo muito!',
      stars: 5,
    }
  ];

  return (
    <section id="depoimentos" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-xs font-sans font-semibold tracking-[0.2em] text-brand-gold uppercase mb-2">
            Prova Social
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-brand-blue font-semibold tracking-tight">
            O que dizem nossos clientes
          </h2>
          <p className="font-sans text-sm text-gray-500 mt-3">
            A satisfação e a segurança de nossos clientes são as bases do nosso sucesso. Confira opiniões reais retiradas do Google.
          </p>
          <div className="w-16 h-1 bg-brand-gold mx-auto mt-4" />
        </motion.div>

        {/* 3 Grid testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
              className="bg-gray-50 p-8 rounded-xl border border-gray-100 flex flex-col justify-between relative shadow-sm hover:shadow-md transition-all duration-300"
            >
              {/* Quote Mark background */}
              <div className="absolute top-6 right-6 text-brand-gold/15">
                <Quote className="h-10 w-10 fill-current" />
              </div>

              {/* Stars */}
              <div className="flex items-center space-x-1 mb-6">
                {[...Array(review.stars)].map((_, i) => (
                  <Star key={i} className="h-4.5 w-4.5 text-brand-gold fill-brand-gold" />
                ))}
              </div>

              {/* Text */}
              <p className="font-sans text-sm sm:text-base text-gray-700 italic leading-relaxed mb-6 z-10">
                "{review.text}"
              </p>

              {/* Author Info */}
              <div className="border-t border-gray-200/60 pt-4 flex items-center justify-between">
                <div>
                  <h4 className="font-sans font-semibold text-brand-blue text-sm">
                    {review.author}
                  </h4>
                  <p className="font-sans text-[10px] text-gray-400 font-medium tracking-wider uppercase mt-0.5">
                    {review.source}
                  </p>
                </div>
                
                {/* Visual marker of validation */}
                <div className="h-6 w-6 rounded-full bg-green-50 flex items-center justify-center text-green-500 shadow-inner">
                  <Star className="h-3 w-3 fill-current" />
                </div>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Bottom review aggregate trust note */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 bg-brand-blue/5 border border-brand-gold/20 rounded-lg p-6 max-w-lg mx-auto flex flex-col sm:flex-row items-center justify-between text-center sm:text-left gap-4"
        >
          <div>
            <p className="font-sans font-semibold text-brand-blue text-sm">Sólida reputação digital</p>
            <p className="font-sans text-xs text-gray-500 mt-1">Classificado com nota 5.0 estrelas com base em dezenas de avaliações locais.</p>
          </div>
          <div className="flex items-center space-x-1 bg-brand-gold text-brand-blue font-sans font-bold text-xs px-3.5 py-2 rounded-md shrink-0">
            <span>5.0 / 5.0 Excelente</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

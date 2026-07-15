import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';

export default function BotaoFlutuante() {
  const whatsappUrl = "https://wa.me/558333228854?text=Olá! Gostaria de agendar uma consulta jurídica com o Dr. João Carlos.";

  return (
    <div className="fixed bottom-6 right-6 z-50 pointer-events-auto">
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Fale conosco no WhatsApp"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.5, type: 'spring', stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="relative flex items-center justify-center w-14 h-14 bg-emerald-500 hover:bg-emerald-600 rounded-full shadow-2xl text-white transition-colors cursor-pointer group"
      >
        
        {/* Pulsing Outer Ring */}
        <span className="absolute inset-0 rounded-full bg-emerald-500/40 animate-ping -z-10" />

        {/* Floating Tooltip (Hover only) */}
        <span className="absolute right-16 bg-brand-blue/95 text-white text-xs font-sans font-medium px-3 py-1.5 rounded-lg shadow-md border border-brand-gold/20 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none hidden sm:inline">
          Falar com Advogado
        </span>

        {/* WhatsApp Icon */}
        <MessageCircle className="w-7 h-7 fill-current" />
      </motion.a>
    </div>
  );
}

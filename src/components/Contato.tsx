import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Instagram, MessageSquare, Clock, Accessibility, AlertCircle, Sparkles } from 'lucide-react';
import { ContactFormData } from '../types';

export default function Contato() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const phoneRaw = "+558333228854";
  const whatsappNumber = "558333228854";
  const instagramUser = "joaocarlosadvogados";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.message) return;

    setIsSubmitting(true);

    // Format message for WhatsApp
    const messageText = `Olá! Meu nome é *${formData.name}*.\n` +
                        `Contato: *${formData.phone}*\n\n` +
                        `*Mensagem:*\n${formData.message}`;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(messageText)}`;

    // Give a small premium visual transition before redirecting
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      window.location.href = whatsappUrl;
    }, 1200);
  };

  // Google Maps embed code
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.2612347101565!2d-35.89069502416397!3d-7.211029470857317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7a9ec793441a1eb%3A0xc3e68dfbe47ff5f5!2sR.%20Santo%20Ant%C3%B4nio%2C%20806%20-%20Santo%20Ant%C3%B4nio%2C%20Campina%20Grande%20-%20PB%2C%2058406-025!5e0!3m2!1spt-BR!2sbr!4v1710000000000!5m2!1spt-BR!2sbr";

  return (
    <section id="contato" className="py-24 bg-gray-50 border-t border-gray-200 overflow-hidden">
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
            Agende uma Consulta
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-brand-blue font-semibold tracking-tight">
            Canais de Atendimento e Contato
          </h2>
          <p className="font-sans text-sm text-gray-500 mt-3">
            Inicie seu atendimento de forma rápida preenchendo o formulário ou escolhendo um dos nossos canais oficiais abaixo.
          </p>
          <div className="w-16 h-1 bg-brand-gold mx-auto mt-4" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Column 1: Office info, table and map (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-8"
          >
            
            {/* Quick action buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-3 bg-emerald-600 hover:bg-emerald-700 text-white font-sans font-semibold text-sm py-3.5 px-4 rounded-lg shadow-sm transition-colors duration-200"
              >
                <MessageSquare className="h-5 w-5 shrink-0" />
                <span>WhatsApp</span>
              </a>
              <a
                href={`tel:${phoneRaw}`}
                className="flex items-center justify-center space-x-3 bg-brand-blue hover:bg-brand-blue/90 text-white font-sans font-semibold text-sm py-3.5 px-4 rounded-lg shadow-sm transition-colors duration-200"
              >
                <Phone className="h-5 w-5 shrink-0" />
                <span>Ligar Agora</span>
              </a>
              <a
                href={`https://instagram.com/${instagramUser}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-3 bg-white hover:bg-gray-100 text-gray-800 border border-gray-200 font-sans font-semibold text-sm py-3.5 px-4 rounded-lg shadow-sm transition-colors duration-200"
              >
                <Instagram className="h-5 w-5 text-pink-600 shrink-0" />
                <span>@{instagramUser}</span>
              </a>
            </div>

            {/* Address and Infrastructure Description */}
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm space-y-4">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-brand-blue/5 rounded-lg text-brand-blue shrink-0 mt-1">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-brand-blue font-semibold">Nosso Endereço</h3>
                  <p className="font-sans text-sm text-gray-600 mt-1">
                    R. Santo Antônio, 806 - Santo Antônio,<br />
                    Campina Grande - PB, 58406-025, Brasil
                  </p>
                </div>
              </div>

              {/* Infrastructure items */}
              <div className="border-t border-gray-150 pt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 text-xs text-gray-500 font-sans">
                <div className="flex items-center space-x-2">
                  <Accessibility className="h-4.5 w-4.5 text-brand-gold" />
                  <span>Estacionamento & WC acessíveis para cadeirantes</span>
                </div>
                <div className="flex items-center space-x-2">
                  <AlertCircle className="h-4.5 w-4.5 text-brand-gold" />
                  <span>Atendimento recomendado mediante agendamento</span>
                </div>
              </div>
            </div>

            {/* Hours table & embedded map split layout */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              
              {/* Table Hours */}
              <div className="md:col-span-5 bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center space-x-2 text-brand-blue mb-4">
                    <Clock className="h-5 w-5 text-brand-gold" />
                    <h3 className="font-serif text-base font-semibold">Horário</h3>
                  </div>
                  <div className="space-y-3 font-sans text-xs sm:text-sm">
                    <div className="flex justify-between pb-2 border-b border-gray-100">
                      <span className="text-gray-500 font-medium">Segunda a Quinta</span>
                      <span className="text-brand-blue font-semibold">09h às 17h</span>
                    </div>
                    <div className="flex justify-between pb-2 border-b border-gray-100">
                      <span className="text-gray-500 font-medium">Sexta-feira</span>
                      <span className="text-brand-blue font-semibold">09h às 16h</span>
                    </div>
                    <div className="flex justify-between text-rose-600 font-medium pt-1">
                      <span>Sábados e Domingos</span>
                      <span className="bg-rose-50 px-2 py-0.5 rounded text-[10px] uppercase font-bold">Fechado</span>
                    </div>
                  </div>
                </div>
                <p className="text-[11px] text-gray-400 mt-4 leading-relaxed font-sans">
                  * Atendimentos extraordinários fora do expediente podem ser combinados diretamente com o sócio responsável.
                </p>
              </div>

              {/* Map container */}
              <div className="md:col-span-7 h-64 md:h-full min-h-[220px] rounded-xl overflow-hidden border border-gray-100 shadow-sm relative">
                <iframe
                  title="Localização João Carlos Advogados Associados"
                  src={mapEmbedUrl}
                  className="absolute inset-0 w-full h-full border-0"
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

            </div>

          </motion.div>

          {/* Column 2: Elegant Form Card (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            className="lg:col-span-5 bg-white p-8 rounded-xl shadow-lg border border-gray-100 relative overflow-hidden"
          >
            
            {/* Visual golden line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-brand-gold" />

            <h3 className="font-serif text-xl text-brand-blue font-semibold mb-2">
              Envie sua Mensagem
            </h3>
            <p className="font-sans text-xs text-gray-500 mb-6 leading-relaxed">
              Preencha os campos abaixo para detalhar suas necessidades jurídicas. Você será redirecionado para concluir o agendamento de forma segura pelo WhatsApp.
            </p>

            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="h-12 w-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto shadow-inner animate-bounce">
                  <Sparkles className="h-6 w-6" />
                </div>
                <h4 className="font-serif text-lg text-brand-blue font-semibold">Redirecionando...</h4>
                <p className="font-sans text-sm text-gray-600 max-w-xs mx-auto">
                  Abertura segura do WhatsApp iniciada. Caso a janela não abra, clique no botão flutuante.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-xs font-sans font-semibold uppercase tracking-wider text-gray-500 mb-1.5">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Ex: João Silva de Souza"
                    className="w-full font-sans text-sm px-4 py-3 bg-gray-50 border border-gray-250 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:border-brand-gold focus:bg-white transition-all duration-200"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-xs font-sans font-semibold uppercase tracking-wider text-gray-500 mb-1.5">
                    WhatsApp ou Telefone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Ex: (83) 99999-9999"
                    className="w-full font-sans text-sm px-4 py-3 bg-gray-50 border border-gray-250 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:border-brand-gold focus:bg-white transition-all duration-200"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-sans font-semibold uppercase tracking-wider text-gray-500 mb-1.5">
                    Mensagem / Descrição do Caso
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Descreva brevemente sua situação (ex: dúvida contratual, rescisão, etc.)"
                    className="w-full font-sans text-sm px-4 py-3 bg-gray-50 border border-gray-250 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:border-brand-gold focus:bg-white resize-none transition-all duration-200"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-4 bg-brand-gold hover:bg-brand-gold-light text-brand-blue font-sans font-bold text-sm rounded-lg shadow-md transition-all duration-200 flex items-center justify-center space-x-2 disabled:opacity-50"
                >
                  <MessageSquare className="h-5 w-5" />
                  <span>
                    {isSubmitting ? 'Iniciando Conversa...' : 'Iniciar Conversa no WhatsApp'}
                  </span>
                </button>
              </form>
            )}

          </motion.div>

        </div>

      </div>
    </section>
  );
}

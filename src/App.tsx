/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import Hero from './components/Hero';
import Diferenciais from './components/Diferenciais';
import Sobre from './components/Sobre';
import AreasAtuacao from './components/AreasAtuacao';
import Depoimentos from './components/Depoimentos';
import Contato from './components/Contato';
import BotaoFlutuante from './components/BotaoFlutuante';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased text-gray-800 selection:bg-brand-gold/30 selection:text-brand-blue">
      {/* 1. Header (Navigation & Quick CTA) */}
      <Header />

      {/* 2. Hero (Primary Proposition) */}
      <Hero />

      {/* 3. Diferenciais (Core value card grid) */}
      <Diferenciais />

      {/* 4. Sobre (Institutional storytelling & physical accessibility) */}
      <Sobre />

      {/* 5. Áreas de Atuação (Practice Areas with details & direct CTAs) */}
      <AreasAtuacao />

      {/* 6. Depoimentos (Client Social Proof & local rating aggregate) */}
      <Depoimentos />

      {/* 7. Contato (Contact details, hours table, lead form & Google map) */}
      <Contato />

      {/* 8. Botão Flutuante (Persistent floating lead conversion anchor) */}
      <BotaoFlutuante />

      {/* 9. Footer (Credits, disclaimers & Local SEO tags) */}
      <Footer />
    </div>
  );
}

import React, { useState } from 'react';
import { ASSETS } from '../constants';
import { Button } from '../components/Button';
import { GlassCard } from '../components/GlassCard';
import { useLanguage } from '../LanguageContext';
import { ContactModal } from '../components/ContactModal';

export const Lab: React.FC = () => {
  const { t } = useLanguage();
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <section className="relative py-32 bg-metal-gradient text-white overflow-hidden">
      
      {/* Background Image with overlay */}
      <div className="absolute inset-0 opacity-20 z-0">
        <img src={ASSETS.labBg} alt="Lab" className="w-full h-full object-cover" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <span className="font-display font-bold text-spettro-orange tracking-[0.5em] uppercase mb-4 block animate-pulse">
          {t.lab.tag}
        </span>
        <h2 className="font-display text-5xl md:text-8xl font-bold mb-8">
          {t.lab.title}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-5xl mx-auto">
          {['Alberdingk Boley', 'MÜNZING', 'Covestro'].map((partner, idx) => (
            <GlassCard key={idx} className="p-8 flex items-center justify-center border-white/5 hover:border-spettro-orange/50 group">
              <div className="text-center">
                <p className="text-xs text-gray-500 uppercase tracking-widest mb-2">{t.lab.rawMaterials}</p>
                <h3 className="font-display text-2xl font-bold text-gray-300 group-hover:text-white transition-colors">{partner}</h3>
                <p className="text-xs text-spettro-orange mt-2 opacity-0 group-hover:opacity-100 transition-opacity">{t.lab.germany}</p>
              </div>
            </GlassCard>
          ))}
        </div>

        <div className="max-w-2xl mx-auto">
          <p className="text-xl md:text-2xl text-gray-300 font-light mb-10">
            {t.lab.description}
          </p>
          <Button onClick={() => setIsContactOpen(true)}>{t.lab.button}</Button>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-spettro-orange/30"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-spettro-orange/30"></div>

      {/* Modal Integration */}
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </section>
  );
};
import React, { useRef, useState, useEffect } from 'react';
import { SectionProps } from '../types';
import { useLanguage } from '../LanguageContext';
import { ASSETS } from '../constants';

export const CeramicPlaster: React.FC<SectionProps> = ({ id }) => {
  const { t } = useLanguage();
  const content = t.ceramic;
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id={id} ref={sectionRef} className="relative py-32 bg-[#050505] overflow-hidden">
      
      {/* BANNER BACKGROUND IMAGE */}
      <div className="absolute inset-0 z-0">
          {/* Mobile Image */}
          <img 
            src="/Ceramic-Mob.webp" 
            alt="Ceramic Plaster Banner Mobile" 
            className="md:hidden w-full h-full object-cover object-center opacity-100"
          />
          {/* Desktop Image */}
          <img 
            src="/Ceramic.webp" 
            alt="Ceramic Plaster Banner Desktop" 
            className="hidden md:block w-full h-full object-cover object-right md:object-center opacity-100 scale-105"
          />
          
          {/* Vertical Fades (Top/Bottom) */}
          <div className="absolute top-0 left-0 w-full h-48 bg-gradient-to-b from-[#050505] to-transparent" />
          <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-[#050505] to-transparent" />

          {/* Left Side Fade for Text Readability */}
          <div className="absolute inset-y-0 left-0 w-full md:w-1/2 bg-gradient-to-r from-black/90 via-black/40 to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
            
            {/* Left: Content */}
            <div className={`flex-1 transition-all duration-1000 transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
                
                {/* Banner Text Section */}
                <div className="mb-10 relative">
                     
                     <span className="inline-block px-4 py-1.5 bg-black/40 border border-spettro-orange/50 backdrop-blur-md rounded text-xs font-mono text-spettro-orange uppercase tracking-[0.2em] mb-4 shadow-lg font-bold">
                        Universal Acrylic Urethane
                     </span>
                     
                     <h2 className="font-display text-6xl md:text-8xl text-white font-bold leading-[0.9] mb-4 drop-shadow-2xl tracking-tight">
                        {content.title}
                     </h2>
                     
                     <p className="text-2xl text-white/90 font-light tracking-wide drop-shadow-lg font-display">
                        {content.subtitle}
                     </p>
                </div>
                
                {/* Details Box */}
                <div className="bg-black/40 backdrop-blur-xl p-6 md:p-8 border-l border-white/10 rounded-r-xl shadow-2xl">
                    <p className="text-gray-100 text-lg leading-relaxed mb-6 font-light">
                        {content.description}
                    </p>

                    <div className="grid grid-cols-2 gap-3 mb-6">
                        {content.features.map((feature, i) => (
                            <div key={i} className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 bg-spettro-orange rounded-full shadow-[0_0_5px_#FF5722] shrink-0"></div>
                                <span className="text-xs md:text-sm font-bold uppercase tracking-wide text-white leading-tight">{feature}</span>
                            </div>
                        ))}
                    </div>

                    <div className="grid grid-cols-3 gap-4 border-t border-white/10 pt-6">
                        {content.stats.map((stat, i) => (
                            <div key={i}>
                                <p className="text-[10px] text-gray-400 font-mono uppercase tracking-widest mb-1">{stat.label}</p>
                                <p className="text-xl font-display font-bold text-white">{stat.value}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Right: Video Placeholder / Visual Balance */}
            <div className={`flex-1 w-full transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
                <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 group cursor-pointer bg-black">
                    
                    {/* Background matching the banner */}
                    <img 
                        src="/Ceramic.webp" 
                        className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-overlay group-hover:scale-110 transition-transform duration-700" 
                        alt="Background"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-black/80"></div>
                    
                    {/* Play Button UI */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
                        <div className="w-20 h-20 rounded-full border border-white/20 bg-white/5 backdrop-blur-md flex items-center justify-center mb-4 group-hover:bg-spettro-orange group-hover:border-spettro-orange group-hover:scale-110 transition-all duration-300 shadow-xl">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-white ml-1"><path d="M8 5v14l11-7z"/></svg>
                        </div>
                        <span className="text-xs font-mono uppercase tracking-[0.2em] text-white/80 group-hover:text-white transition-colors">
                            Watch Application
                        </span>
                    </div>

                    {/* Corner accents */}
                    <div className="absolute top-4 left-4 w-4 h-4 border-l border-t border-white/30"></div>
                    <div className="absolute bottom-4 right-4 w-4 h-4 border-r border-b border-white/30"></div>
                </div>
                
                {/* Decorative Elements for Balance */}
                <div className="mt-6 flex justify-end gap-2">
                    <div className="w-2 h-2 rounded-full bg-white/20"></div>
                    <div className="w-2 h-2 rounded-full bg-white/20"></div>
                    <div className="w-2 h-2 rounded-full bg-spettro-orange animate-pulse"></div>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};

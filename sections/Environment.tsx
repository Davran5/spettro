import React, { useEffect, useState } from 'react';
import { ASSETS } from '../constants';
import { GlassCard } from '../components/GlassCard';
import { SectionProps } from '../types';
import { useLanguage } from '../LanguageContext';

export const Environment: React.FC<SectionProps> = ({ id }) => {
  const { t } = useLanguage();
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.scrollY * 0.1);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const rawAdvantages = t.environment.advantages;
  
  // Advanced Layered Icons
  const icons = [
    // 1. Chemistry That Breathes (Air/Wind)
    (
        <div className="relative w-16 h-16 flex items-center justify-center">
             {/* BG: Droplet/Blob Accent */}
            <svg className="absolute -right-2 -top-2 w-10 h-10 text-green-500 drop-shadow-[0_0_8px_rgba(34,197,94,0.6)] opacity-60" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
            </svg>
             {/* FG: Wind Lines */}
            <svg className="relative z-10 w-10 h-10 text-white drop-shadow-md" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2" />
            </svg>
        </div>
    ),
    // 2. Zero VOC (Leaf/Nature)
    (
        <div className="relative w-16 h-16 flex items-center justify-center">
             {/* BG: Shield Accent */}
            <svg className="absolute -right-2 -top-2 w-10 h-10 text-green-500 drop-shadow-[0_0_8px_rgba(34,197,94,0.6)] opacity-60" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
             {/* FG: Leaf */}
            <svg className="relative z-10 w-10 h-10 text-white drop-shadow-md" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.77 10-10 10Z" />
                <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
            </svg>
        </div>
    ),
    // 3. German Raw Materials (Flask/Tech)
    (
        <div className="relative w-16 h-16 flex items-center justify-center">
             {/* BG: Hexagon Accent */}
            <svg className="absolute -right-2 -top-2 w-10 h-10 text-green-500 drop-shadow-[0_0_8px_rgba(34,197,94,0.6)] opacity-60" viewBox="0 0 24 24" fill="currentColor">
                 <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
            </svg>
             {/* FG: Flask */}
            <svg className="relative z-10 w-10 h-10 text-white drop-shadow-md" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10 2v2.343a4 4 0 0 1-.828 2.528L2.071 18A3 3 0 0 0 5 22h14a3 3 0 0 0 2.929-4l-7.101-11.129A4 4 0 0 1 14 4.343V2" />
                <path d="M8.5 2h7" />
                <path d="M7 16h10" />
            </svg>
        </div>
    ),
    // 4. Silent Revolution (Feather/Soft)
    (
        <div className="relative w-16 h-16 flex items-center justify-center">
             {/* BG: Circle Accent */}
            <svg className="absolute -right-2 -top-2 w-10 h-10 text-green-500 drop-shadow-[0_0_8px_rgba(34,197,94,0.6)] opacity-60" viewBox="0 0 24 24" fill="currentColor">
                 <circle cx="12" cy="12" r="10" />
            </svg>
             {/* FG: Feather */}
            <svg className="relative z-10 w-10 h-10 text-white drop-shadow-md" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z" />
                <line x1="16" y1="8" x2="2" y2="22" />
                <line x1="17.5" y1="15" x2="9" y2="15" />
            </svg>
        </div>
    )
  ];

  const advantages = rawAdvantages.map((adv, i) => ({
      ...adv,
      icon: icons[i]
  }));

  return (
    <section id={id} className="relative min-h-screen flex items-center justify-center py-24 overflow-hidden bg-[#050f08]">
      
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 opacity-30 transition-transform duration-100 ease-out"
          style={{ transform: `translateY(${offsetY}px)` }}
        >
          <img src={ASSETS.envBg} alt="Nature Texture" className="w-full h-[120%] object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#0a1a0f]/80 to-[#050505]" />
        
        {/* Animated Particles/Dust */}
        <div className="absolute inset-0 opacity-20 bg-[url('/stardust.webp')] animate-pulse"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 w-full">
        
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          
          {/* LEFT: Branding / Text */}
          <div className="lg:w-1/2 text-left">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-1 rounded-full border border-green-500/30 bg-green-900/10 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
              <span className="text-green-400 text-xs font-bold tracking-widest uppercase">{t.environment.tag}</span>
            </div>

            <h2 className="font-display text-6xl md:text-8xl text-white mb-8 leading-none drop-shadow-2xl">
              {t.environment.titleLine1} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">{t.environment.titleLine2}</span>
            </h2>
            
            <p className="text-xl text-gray-200 font-light leading-relaxed max-w-xl border-l-2 border-green-500/50 pl-6">
              {t.environment.description}
            </p>

            {/* Interactive "Orb" moved to focus area */}
            <div className="mt-12 flex items-center gap-6">
                <div className="relative w-20 h-20 group">
                   <div className="absolute inset-0 rounded-full bg-green-500/20 animate-ping"></div>
                   <div className="absolute inset-0 rounded-full border border-green-400 flex items-center justify-center bg-black/50 backdrop-blur-sm">
                      <span className="font-display font-bold text-xl text-white">100%</span>
                   </div>
                </div>
                <div>
                   <h4 className="text-white font-bold uppercase tracking-wider">{t.environment.ecoPromise}</h4>
                   <p className="text-sm text-gray-300">{t.environment.ecoSub}</p>
                </div>
            </div>
          </div>

          {/* RIGHT: Floating Grid of Advantages */}
          <div className="lg:w-1/2 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {advantages.map((item, idx) => (
                <div 
                  key={idx}
                  className="transition-transform duration-[3000ms] ease-in-out"
                  style={{ 
                    animation: `float ${4 + idx}s ease-in-out infinite`,
                    animationDelay: `${idx * 0.5}s`
                  }}
                >
                  <GlassCard 
                    className="p-8 h-full min-h-[220px] flex flex-col justify-center border-green-500/10 hover:border-green-400/50 group bg-gradient-to-br from-white/5 to-transparent"
                    hoverEffect={true}
                  >
                    <div className="mb-4">
                      {item.icon}
                    </div>
                    <h3 className="font-display text-2xl text-white mb-3 group-hover:text-green-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-base text-gray-300 leading-relaxed group-hover:text-white transition-colors">
                      {item.desc}
                    </p>
                  </GlassCard>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* CSS for custom float animation */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }
      `}</style>
    </section>
  );
};

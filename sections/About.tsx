import React, { useState, useEffect, useRef } from 'react';
import { SectionProps } from '../types';
import { useLanguage } from '../LanguageContext';
import { ASSETS } from '../constants';

export const About: React.FC<SectionProps> = ({ id }) => {
  const { t } = useLanguage();
  
  // Track visibility of each point card
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Track visibility of the secondary grid section for the fixed background
  const [isGridSectionVisible, setIsGridSectionVisible] = useState(false);
  const gridSectionRef = useRef<HTMLDivElement>(null);

  const fullText = t.about.fullText;
  const keywords = [...t.about.keywords].sort((a, b) => b.length - a.length);

  // Observer for the grid cards
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.getAttribute('data-index'));
            setVisibleCards((prev) => {
              const newSet = new Set(prev);
              newSet.add(idx);
              return newSet;
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  // Observer for the Grid Section Background
  useEffect(() => {
    const observer = new IntersectionObserver(
        ([entry]) => {
            setIsGridSectionVisible(entry.isIntersecting);
        },
        { threshold: 0 }
    );
    
    if (gridSectionRef.current) {
        observer.observe(gridSectionRef.current);
    }
    return () => observer.disconnect();
  }, []);


  // --- GRID TEXT HIGHLIGHTING ---
  const escapeRegExp = (string: string) => {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  };

  const processText = (text: string) => {
    const pattern = new RegExp(`(${keywords.map(escapeRegExp).join('|')})`, 'gi');
    const parts = text.split(pattern);

    return parts.map((part, i) => {
      const isKeyword = keywords.some(k => k.toLowerCase() === part.toLowerCase());
      if (isKeyword) {
        return (
          <span key={i} className="highlight-animated text-white font-bold">
            {part}
          </span>
        );
      }
      return <span key={i}>{part}</span>;
    });
  };

  const points = t.about.points;
  const naturalTextParts = fullText.replace(/\s*\n\s*/g, ' ').split(/(SPETTRO|Spettro)/g);

  return (
    <section id={id} className="relative z-10 bg-[#050505] text-white font-sans border-t border-white/10 overflow-hidden">
        
        <style>{`
            @keyframes load-gradient-smooth {
                0% { background-position: 0% 50%; }
                50% { background-position: 100% 50%; }
                100% { background-position: 0% 50%; }
            }
            .animate-title-loading {
                background: linear-gradient(90deg, #ef4444 0%, #eab308 50%, #ef4444 100%);
                background-size: 200% auto;
                color: transparent;
                -webkit-background-clip: text;
                background-clip: text;
                animation: load-gradient-smooth 6s linear infinite;
            }

            .highlight-animated {
                position: relative;
                display: inline-block;
            }
            .highlight-animated::after {
                content: '';
                position: absolute;
                bottom: -2px;
                left: 0;
                width: 100%;
                height: 2px;
                background-color: #EF4444;
                transform: scaleX(0);
                transform-origin: left;
                animation: scale-in 4s ease-out forwards;
            }

            @keyframes scale-in {
                to { transform: scaleX(1); }
            }
            
            @keyframes light-pass-glow {
                0% { background-position: 130% center; }
                50% { background-position: -30% center; }
                100% { background-position: 130% center; }
            }
            .animate-inner-light {
                background: linear-gradient(
                    120deg, 
                    #9ca3af 40%, 
                    #ffffff 50%, 
                    #9ca3af 60%
                );
                background-size: 200% auto;
                color: transparent;
                -webkit-background-clip: text;
                background-clip: text;
                animation: light-pass-glow 10s ease-in-out infinite;
            }
        `}</style>

        {/* === PART 1: MAIN HEADER SECTION === */}
        <div className="relative pt-24 pb-24 md:pt-32 md:pb-32 bg-black z-20">
            {/* BACKGROUND IMAGE */}
            <div className="absolute inset-0 z-0">
                <img 
                    src={ASSETS.partnerBg} 
                    alt="Carbon Texture" 
                    className="w-full h-full object-cover opacity-60" 
                />
                <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/40 to-black/90"></div>
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl max-h-[500px] bg-white/5 blur-[120px] rounded-full pointer-events-none mix-blend-overlay"></div>
            </div>
            <div className="absolute inset-0 bg-[url('/stardust.webp')] opacity-10 pointer-events-none mix-blend-overlay z-0"></div>

            <div className="max-w-[1680px] mx-auto px-6 md:px-10 relative z-10">
                <div className="flex flex-col items-center text-center">
                    <span className="font-mono text-spettro-orange text-xs tracking-[0.4em] uppercase mb-6 drop-shadow-lg">
                        {t.about.est}
                    </span>
                    <h2 className="animate-title-loading font-display text-5xl md:text-8xl uppercase tracking-tighter leading-none mb-6 md:mb-10 pb-2 drop-shadow-2xl">
                        {t.about.title}
                    </h2>
                    <div className="h-8 md:h-16 w-px bg-white/20 mb-6 md:mb-10 shadow-[0_0_10px_rgba(255,255,255,0.3)]"></div>
                    
                    {/* STATIC TEXT CONTAINER */}
                    <div className="max-w-5xl mx-auto text-center px-4 md:px-8">
                        <p className="text-2xl md:text-4xl font-light leading-relaxed text-gray-100 drop-shadow-md">
                            {naturalTextParts.map((part, pIdx) => (
                                <span
                                    key={pIdx}
                                    className={part.toUpperCase() === 'SPETTRO' ? "animate-title-loading font-bold" : ""}
                                >
                                    {part}
                                </span>
                            ))}
                        </p>
                    </div>

                </div>
            </div>
        </div>

        {/* === PART 2: SECONDARY DETAILS GRID === */}
        <div ref={gridSectionRef} className="relative pt-0 pb-12 md:pb-24 border-t border-white/5 bg-transparent">
            
            {/* FIXED BACKGROUND LAYER */}
            <div className={`absolute inset-0 md:fixed z-0 transition-opacity duration-700 pointer-events-none ${isGridSectionVisible ? 'opacity-100' : 'opacity-0'}`}>
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                >
                    <source src={ASSETS.heroVideo} type="video/mp4" />
                </video>
                {/* Heavy overlays for readability against video */}
                <div className="absolute inset-0 bg-black/80 backdrop-blur-[3px]"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
                <div className="absolute inset-0 bg-[url('/stardust.webp')] opacity-5 pointer-events-none mix-blend-overlay"></div>
            </div>

            <div className="max-w-[1720px] mx-auto px-6 md:px-10 relative z-10">
                
                {/* TECHNICAL SPECS 2x2 GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-px border border-white/10 bg-white/10">
                    {points.map((item, index) => {
                        const isVisible = visibleCards.has(index);

                        return (
                            <div 
                                key={index}
                                data-index={index}
                                ref={(el) => { cardRefs.current[index] = el; }}
                                className={`
                                    relative p-8 md:p-12 lg:p-16 xl:p-20 group flex flex-col justify-center min-h-[260px] md:min-h-[320px] overflow-hidden bg-black/55
                                    transition-all duration-700 ease-out
                                    hover:bg-white/[0.05]
                                    ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                                `}
                            >
                                {/* TEXT CONTENT */}
                                <div className="relative z-10 flex flex-col items-start w-full pr-0 md:pr-14 lg:pr-20">
                                    <div className="flex flex-col gap-2 mb-6 w-full">
                                        <span className="font-mono text-sm text-spettro-orange tracking-widest font-bold">
                                            [ {(index + 1).toString().padStart(2, '0')} ]
                                        </span>
                                        <h3 className="font-display text-3xl text-white font-medium uppercase leading-tight drop-shadow-lg">
                                            {item.title}
                                        </h3>
                                    </div>
                                    <p className="text-gray-200 text-lg leading-relaxed font-light max-w-lg drop-shadow-md">
                                        {isVisible ? processText(item.text) : <span className="opacity-0">{item.text}</span>}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* FOOTER */}
                 <div className="mt-8 pt-4 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
                    <div className="flex flex-col">
                        <span className="font-display text-2xl uppercase tracking-widest animate-inner-light font-bold">
                            {t.about.footerTitle}
                        </span>
                        <span className="font-mono text-xs mt-1 animate-inner-light font-bold">
                            {t.about.footerSub}
                        </span>
                    </div>
                    <div className="font-mono text-xs tracking-widest animate-inner-light font-bold">
                        {t.about.footerIso}
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

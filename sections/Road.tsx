import React, { useRef, useState, useEffect } from 'react';
import { ASSETS } from '../constants';
import { SectionProps } from '../types';
import { useLanguage } from '../LanguageContext';

export const Road: React.FC<SectionProps> = ({ id }) => {
  const { t } = useLanguage();
  const specs = t.road.specs;

  // Durability Slider State
  const [sliderValue, setSliderValue] = useState(50);
  const sliderRef = useRef<HTMLDivElement>(null);

  // Slider Logic (Durability Test)
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    setSliderValue((x / rect.width) * 100);
  };
  const handleTouchMove = (e: React.TouchEvent) => {
     if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.touches[0].clientX - rect.left, rect.width));
    setSliderValue((x / rect.width) * 100);
  }

  // Active Spec Tracking for Scroll Spy
  const [activeSpecIndex, setActiveSpecIndex] = useState<number | null>(null);
  const specRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Durability Section Visibility for Background Video
  const [isDurabilityVisible, setIsDurabilityVisible] = useState(false);
  const durabilitySectionRef = useRef<HTMLDivElement>(null);

  // --- NEW: PRECISE SCROLL TRIGGER LOGIC ---
  useEffect(() => {
    const handleScroll = () => {
      const centerY = window.innerHeight / 2;
      let foundIndex = -1;

      // Check which element overlaps the center line of the viewport
      specRefs.current.forEach((el, index) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        
        // Active ONLY if the element occupies the middle pixel of the screen
        if (rect.top <= centerY && rect.bottom >= centerY) {
          foundIndex = index;
        }
      });

      // If we found an item in the middle, set it active.
      // If no item is in the middle (e.g. out of section), foundIndex is -1 => set null.
      setActiveSpecIndex(foundIndex !== -1 ? foundIndex : null);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial check in case we load already scrolled
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [specs]); // Re-run if specs change (language switch)

  // Observer for the Durability Section Background Reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
        ([entry]) => {
            setIsDurabilityVisible(entry.isIntersecting);
        },
        { 
            threshold: 0,
            rootMargin: "20% 0px 0px 0px" // Start fading in slightly before it enters the viewport
        } 
    );
    
    if (durabilitySectionRef.current) {
        observer.observe(durabilitySectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  // Helper to get visual content for each spec index
  const getVisualContent = (index: number) => {
    const visualData = t.road.visuals && t.road.visuals[index];
    
    switch(index) {
        case 0: return { src: ASSETS.hotTire, tag: visualData?.tag || "Standard Thermoplastic Failure", tagColor: "bg-red-600", hoverBorder: "group-hover:border-red-600", activeBorder: "border-red-600", title: visualData?.title || "vs. Spettro 2K Bio-PU", sub: visualData?.sub || "HEAT STABLE MATRIX" };
        case 1: return { src: ASSETS.adhesion, tag: visualData?.tag || "Pull-Off Test Analysis", tagColor: "bg-blue-600", hoverBorder: "group-hover:border-blue-600", activeBorder: "border-blue-600", title: visualData?.title || "Substrate Interlock", sub: visualData?.sub || "SUPERIOR ANCHORING" };
        case 2: return { src: ASSETS.abrasion, tag: visualData?.tag || "Accelerated Wear Test", tagColor: "bg-orange-600", hoverBorder: "group-hover:border-orange-600", activeBorder: "border-orange-600", title: visualData?.title || "4 Million Cycles", sub: visualData?.sub || "HEAVY LOAD RESISTANCE" };
        case 3: return { src: ASSETS.eco, tag: visualData?.tag || "C14 Isotope Verification", tagColor: "bg-green-600", hoverBorder: "group-hover:border-green-600", activeBorder: "border-green-600", title: visualData?.title || "45% Bio-Renewable", sub: visualData?.sub || "ECO-FRIENDLY BASE" };
        case 4: return { src: ASSETS.nightViz, tag: visualData?.tag || "Retro-Reflectometer", tagColor: "bg-yellow-600", hoverBorder: "group-hover:border-yellow-600", activeBorder: "border-yellow-600", title: visualData?.title || "R5 Night Visibility", sub: visualData?.sub || "ENHANCED OPTICS" };
        default: return null;
    }
  };

  // --- Dynamic Visibility Logic ---
  // Hot Text (+120): Fades out as slider moves right (covering it). Fully gone by 80%.
  const hotTextOpacity = Math.max(0, Math.min(1, (75 - sliderValue) / 10));
  
  // Hot Box: Appears as slider moves left. 
  // Adjusted: Starts at 48% (immediately upon left drag), visible by 25%.
  const hotBoxOpacity = Math.max(0, Math.min(1, (48 - sliderValue) / 23));

  // Cold Box: Appears as slider moves right. 
  // Adjusted: Starts at 52% (immediately upon right drag), visible by 75%.
  const coldBoxOpacity = Math.max(0, Math.min(1, (sliderValue - 52) / 23));

  return (
    <section id={id} className="w-full relative">
      
      {/* FIXED BACKGROUND LAYER */}
      <div className={`fixed inset-0 z-0 pointer-events-none transition-opacity duration-1000 ${isDurabilityVisible ? 'opacity-100' : 'opacity-0'}`}>
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover opacity-40 scale-110"
          >
            <source src={ASSETS.heroVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black"></div>
      </div>

      <style>{`
        /* Beam Animation */
        @keyframes beam-cycle {
            0% { background-position: 100% 0; opacity: 0.8; }
            100% { background-position: 0% 0; opacity: 0.8; } 
        }
        .beam-layer {
            background-size: 200% auto;
            background-clip: text;
            -webkit-background-clip: text;
            color: transparent;
            animation: beam-cycle 5s linear infinite alternate;
            filter: blur(12px);
        }
        .beam-white { background-image: linear-gradient(115deg, transparent 42%, rgba(255, 255, 255, 1) 50%, transparent 58%); }
        .beam-gold { background-image: linear-gradient(115deg, transparent 42%, rgba(250, 204, 21, 1) 50%, transparent 58%); }

        /* ADVANCED FIRE ANIMATION */
        @keyframes fire-glow {
            0% { text-shadow: 0 0 10px rgba(255, 87, 34, 0.4), 0 0 20px rgba(255, 69, 0, 0.2); transform: scale(1); filter: blur(0px); }
            25% { text-shadow: 0 0 25px rgba(255, 150, 50, 0.6), 0 -5px 35px rgba(255, 0, 0, 0.4); }
            50% { text-shadow: 0 0 15px rgba(255, 87, 34, 0.8), 0 -10px 40px rgba(255, 69, 0, 0.5); transform: scale(1.02); filter: blur(0.5px); }
            75% { text-shadow: 0 0 25px rgba(255, 150, 50, 0.6), 0 -5px 35px rgba(255, 0, 0, 0.4); }
            100% { text-shadow: 0 0 10px rgba(255, 87, 34, 0.4), 0 0 20px rgba(255, 69, 0, 0.2); transform: scale(1); filter: blur(0px); }
        }
        .text-fire-advanced {
            color: #fff;
            animation: fire-glow 2.5s infinite linear;
        }

        /* ADVANCED ICE ANIMATION */
        @keyframes ice-shimmer {
            0% { text-shadow: 0 0 10px rgba(186, 230, 253, 0.4), 0 0 20px rgba(14, 165, 233, 0.2); }
            50% { text-shadow: 0 0 30px rgba(255, 255, 255, 0.8), 0 0 50px rgba(56, 189, 248, 0.6); }
            100% { text-shadow: 0 0 10px rgba(186, 230, 253, 0.4), 0 0 20px rgba(14, 165, 233, 0.2); }
        }
        .text-ice-advanced {
            background: linear-gradient(to bottom, #ffffff, #e0f2fe);
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
            animation: ice-shimmer 4s infinite ease-in-out;
            filter: drop-shadow(0 0 5px rgba(14, 165, 233, 0.5));
        }

        /* Title Loading Gradient (Matches About.tsx) */
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
      `}</style>

      {/* INTRO & SPECS SECTION (Opaque bg) */}
      <div className="relative z-10 bg-[#050505]">
          <div className="relative z-20 container mx-auto px-6 pt-24 pb-8 md:pb-16">
              <div className="flex flex-col lg:flex-row gap-10 lg:items-end border-b border-white/10 pb-8 md:pb-16">
                <div className="flex-none flex flex-col items-start relative">
                  <div className="flex items-center gap-4 mb-6 relative z-30">
                     <div className="h-px w-12 bg-yellow-500"></div>
                     <span className="text-yellow-500 font-mono text-xs uppercase tracking-[0.2em]">{t.road.tag}</span>
                  </div>
                  <div className="relative mb-6 lg:mb-0 select-none">
                     <h2 className="font-display text-5xl md:text-8xl leading-[0.9] tracking-tighter">
                        <span className="block relative">
                            <span className="absolute inset-0 beam-layer beam-white z-0" aria-hidden="true">{t.road.titleLine1.toUpperCase()}</span>
                            <span className="relative z-10 text-white font-bold">{t.road.titleLine1.toUpperCase()}</span>
                        </span>
                        <span className="block relative">
                             <span className="absolute inset-0 beam-layer beam-gold z-0" aria-hidden="true">{t.road.titleLine2.toUpperCase()}</span>
                            <span className="relative z-10 text-yellow-500 font-bold">{t.road.titleLine2.toUpperCase()}</span>
                        </span>
                     </h2>
                  </div>
                </div>
                <div className="flex-1 max-w-xl flex flex-col relative z-20">
                    <div className="pl-6 border-l-2 border-yellow-500/50 pb-2">
                        <h3 className="text-white font-display text-2xl md:text-4xl font-bold leading-tight uppercase mb-4 tracking-wide">{t.road.mainDescBold}</h3>
                        <p className="text-lg text-gray-200 leading-relaxed font-light">{t.road.mainDescText}</p>
                    </div>
                </div>
              </div>
          </div>

          <div className="relative w-full bg-[#050505] pb-24">
             <div className="container mx-auto px-6">
                <div className="flex flex-col">
                    {specs.map((spec, index) => {
                        const isActive = activeSpecIndex === index;
                        const visual = getVisualContent(index);
                        return (
                            <div 
                                key={index} data-index={index} ref={(el) => { specRefs.current[index] = el; }}
                                className={`group relative py-4 border-b border-white/10 transition-colors duration-500 ${isActive ? 'bg-white/[0.05]' : 'bg-transparent'} hover:bg-white/[0.05]`}
                            >
                                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
                                    <div className="lg:col-span-7 flex flex-col lg:justify-between justify-start gap-4 relative z-10">
                                        <div>
                                            <div className="flex items-baseline gap-3 mb-2 opacity-50">
                                                <span className="font-mono text-sm text-yellow-500">{(index + 1).toString().padStart(2, '0')}</span>
                                                <span className="font-mono text-xs text-gray-300 uppercase tracking-widest">// SPECIFICATION</span>
                                            </div>
                                            <h3 className="text-3xl md:text-4xl font-display font-bold uppercase text-white leading-none tracking-tight mb-2">{spec.title}</h3>
                                            <p className="text-yellow-500 font-mono text-sm tracking-wider uppercase mb-3 font-bold">{spec.subtitle}</p>
                                            <div className="pl-5 relative z-20 mb-3 max-w-2xl">
                                                <div className={`absolute left-0 top-0 bottom-0 w-0.5 bg-white/10 transition-colors duration-300 ${visual?.hoverBorder || 'group-hover:border-yellow-500'} ${isActive ? 'opacity-0' : 'opacity-100'} group-hover:bg-transparent`}></div>
                                                <div className={`absolute left-0 top-0 bottom-0 w-0.5 transition-colors duration-300 ${visual?.hoverBorder?.replace('group-hover:border', 'bg') || 'bg-yellow-500'} ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}></div>
                                                <p className={`text-gray-200 text-base leading-relaxed transition-colors duration-500 ease-out origin-left ${isActive ? 'text-white' : 'group-hover:text-white'}`}>{spec.description}</p>
                                            </div>
                                        </div>
                                        <div className="mt-auto pt-4 border-t border-white/10">
                                            <div className="grid grid-cols-3 gap-4">
                                                {spec.stats.map((stat, i) => (
                                                    <div key={i} className="flex flex-col">
                                                        <span className="text-xs text-gray-400 font-mono uppercase tracking-widest mb-1">{stat.label}</span>
                                                        <span className="text-xl font-display font-bold text-white leading-none">{stat.value}</span>
                                                    </div>
                                                ))}
                                            </div>
                                            <div className="w-full h-0.5 bg-gray-900 mt-3 overflow-hidden rounded-full">
                                                <div className={`h-full bg-yellow-500 transition-transform duration-1000 ease-out origin-left ${isActive ? 'scale-x-100' : 'scale-x-0'}`}></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="lg:col-span-5 relative min-h-[200px] lg:min-h-0">
                                        {visual && (
                                           <div className="w-full h-56 lg:h-full lg:absolute lg:inset-0 overflow-hidden rounded-lg border border-white/10 group/img bg-black">
                                               <div className={`absolute top-3 left-3 z-20 ${visual.tagColor} text-white text-[10px] font-bold px-2 py-1 uppercase tracking-widest rounded-sm shadow-lg`}>{visual.tag}</div>
                                               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 opacity-60"></div>
                                               <img 
                                                  src={visual.src} 
                                                  alt={spec.title} 
                                                  className={`w-full h-full object-cover object-center transition-all duration-700 ease-out transform will-change-transform ${isActive ? 'grayscale-0 opacity-100 scale-105' : 'grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105'}`} 
                                               />
                                               <div className={`absolute bottom-3 left-3 z-20 border-l-2 pl-3 transition-colors duration-300 ${isActive ? visual.activeBorder || 'border-yellow-500' : 'border-yellow-500'}`}>
                                                    <p className="text-white font-display uppercase text-lg leading-none mb-1 font-bold">{visual.title}</p>
                                                    <p className="text-xs text-gray-300 font-mono font-bold">{visual.sub}</p>
                                               </div>
                                           </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
             </div>
          </div>
      </div>

      {/* EXTREME CLIMATE TEST (TRANSPARENT REVEAL) */}
      <div ref={durabilitySectionRef} className="relative min-h-screen w-full flex flex-col items-center justify-center py-32 overflow-hidden bg-transparent z-20 border-t border-white/10">
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-[#050505] to-transparent z-10 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-[#050505] to-transparent z-10 pointer-events-none" />

        <div className="container mx-auto px-6 mb-16 relative z-20 text-center flex flex-col items-center">
            {/* Tag matches About style */}
            <span className="font-mono text-spettro-orange text-xs tracking-[0.4em] uppercase mb-6 drop-shadow-lg">
                {t.road.durabilityTag}
            </span>
            
            {/* Title matches About style */}
            <h2 className="animate-title-loading font-display text-5xl md:text-8xl uppercase tracking-tighter leading-none mb-4 pb-2 drop-shadow-2xl">
                {t.road.durabilityTitle}
            </h2>

            {/* Description */}
            <p className="text-xl text-gray-100 max-w-2xl mx-auto font-light drop-shadow-md">
                {t.road.durabilityDesc}
            </p>
        </div>

        <div 
          ref={sliderRef}
          className="relative w-full max-w-[90vw] h-[60vh] md:h-[70vh] cursor-ew-resize group overflow-hidden select-none border border-white/20 shadow-2xl rounded-sm z-20 bg-black"
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
        >
          {/* Layer 1: HOT (+120C) */}
          <div className="absolute inset-0 w-full h-full">
            <img src={ASSETS.fireBg} alt="Heat" className="w-full h-full object-cover opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-t from-red-900/50 via-transparent to-transparent mix-blend-overlay" />
            
            {/* HOT Text - Fades out when covered to prevent bleed */}
            <div 
              className="absolute top-1/2 right-12 md:right-24 transform -translate-y-1/2 text-right transition-transform duration-100 ease-out z-10 pointer-events-none"
              style={{ 
                  transform: `translate(${sliderValue < 45 ? '0' : '20px'}, -50%)`,
                  opacity: hotTextOpacity 
              }}
            >
              <div className="relative">
                 {/* Glow backing for better contrast */}
                 <div className="absolute inset-0 bg-red-600/20 blur-2xl rounded-full scale-150"></div>
                 <h3 className="font-display text-7xl md:text-[10rem] leading-none drop-shadow-2xl tracking-tighter text-fire-advanced relative z-10">
                   {t.road.hotTitle}
                 </h3>
                 <p className="text-red-500 font-mono text-sm md:text-lg uppercase tracking-[0.3em] mt-4 shadow-black drop-shadow-md font-bold relative z-10">
                   {t.road.hotSub}
                 </p>
              </div>
            </div>

            {/* HOT Info Box */}
            <div 
              className="absolute bottom-4 right-4 md:bottom-12 md:right-12 transition-all duration-500 z-20"
              style={{ 
                  opacity: hotBoxOpacity, 
                  transform: `translateY(${(1 - hotBoxOpacity) * 20}px)`,
                  pointerEvents: hotBoxOpacity > 0.1 ? 'auto' : 'none'
              }}
            >
              <div className="p-4 md:p-6 w-48 md:w-72 border-l-2 border-red-500 bg-black/80 backdrop-blur-md shadow-[0_0_30px_rgba(239,68,68,0.2)]">
                <h4 className="font-bold text-red-500 text-sm md:text-lg mb-1">{t.road.hotCardTitle}</h4>
                <p className="text-xs md:text-sm text-gray-200 font-light">{t.road.hotCardDesc}</p>
              </div>
            </div>
          </div>

          {/* Layer 2: COLD (-60C) - Clipped */}
          <div 
            className="absolute inset-0 h-full overflow-hidden border-r-2 border-white shadow-[0_0_50px_rgba(255,255,255,0.2)] bg-black"
            style={{ width: `${sliderValue}%` }}
          >
            <div className="absolute inset-0 w-[90vw] h-full">
                <img src={ASSETS.iceBg} alt="Cold" className="w-full h-full object-cover opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 via-transparent to-transparent mix-blend-overlay" />
            </div>

            {/* COLD Text - Always visible in its clipped container */}
            <div 
              className="absolute top-1/2 left-12 md:left-24 transform -translate-y-1/2 transition-transform duration-100 ease-out z-10 pointer-events-none"
              style={{ transform: `translate(${sliderValue > 55 ? '0' : '-20px'}, -50%)` }}
            >
              <div className="relative">
                  {/* Heavy dark backing to ensure legibility on ice */}
                  <div className="absolute inset-0 bg-black/40 blur-3xl rounded-full scale-150"></div>
                  
                  <h3 className="font-display text-7xl md:text-[10rem] leading-none drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)] tracking-tighter text-ice-advanced relative z-10">
                    {t.road.coldTitle}
                  </h3>
                  <p className="text-blue-300 font-mono text-sm md:text-lg uppercase tracking-[0.3em] mt-4 shadow-black drop-shadow-[0_2px_4px_rgba(0,0,0,1)] font-bold relative z-10">
                    {t.road.coldSub}
                  </p>
              </div>
            </div>

            {/* COLD Info Box */}
            <div 
              className="absolute bottom-4 left-4 md:bottom-12 md:left-12 transition-all duration-500 z-20"
              style={{ 
                  opacity: coldBoxOpacity, 
                  transform: `translateY(${(1 - coldBoxOpacity) * 20}px)`,
                  pointerEvents: coldBoxOpacity > 0.1 ? 'auto' : 'none'
              }}
            >
              <div className="p-4 md:p-6 w-48 md:w-72 border-l-2 border-blue-400 bg-black/80 backdrop-blur-md shadow-[0_0_30px_rgba(56,189,248,0.2)]">
                <h4 className="font-bold text-blue-400 text-sm md:text-lg mb-1">{t.road.coldCardTitle}</h4>
                <p className="text-xs md:text-sm text-gray-200 font-light">{t.road.coldCardDesc}</p>
              </div>
            </div>
          </div>

          {/* Slider Handle */}
          <div 
            className="absolute top-0 bottom-0 w-px bg-white/50 cursor-ew-resize z-30"
            style={{ left: `${sliderValue}%` }}
          >
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full border border-white/20 bg-black/50 backdrop-blur-md flex items-center justify-center shadow-2xl hover:scale-110 transition-transform">
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white drop-shadow-lg">
                  <path d="M15 18l-6-6 6-6" transform="translate(-4, 0)"/>
                  <path d="M9 18l6-6-6-6" transform="translate(4, 0)"/>
               </svg>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
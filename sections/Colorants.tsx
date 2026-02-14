import React, { useState, useRef, useEffect } from 'react';
import { SectionProps } from '../types';
import { useLanguage } from '../LanguageContext';
import { ASSETS, COLORANTS } from '../constants';

export const Colorants: React.FC<SectionProps> = ({ id }) => {
  const { t } = useLanguage();
  const content = t.colorants;
  const [activeColorIndex, setActiveColorIndex] = useState(0);

  const activeColor = COLORANTS[activeColorIndex];
  const activeColorName = content.colors[activeColorIndex] || activeColor.name;

  // Horizontal Scroll Logic for Mobile
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollContainerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
        setCanScrollLeft(scrollLeft > 10);
        setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
        container.addEventListener('scroll', checkScroll);
        window.addEventListener('resize', checkScroll);
        // Delay initial check slightly to ensure layout is computed
        setTimeout(checkScroll, 100);
    }
    return () => {
        container?.removeEventListener('scroll', checkScroll);
        window.removeEventListener('resize', checkScroll);
    }
  }, []);

  const scrollNav = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
        const container = scrollContainerRef.current;
        const scrollAmount = container.clientWidth * 0.75; // Scroll 75% of width
        container.scrollBy({
            left: direction === 'left' ? -scrollAmount : scrollAmount,
            behavior: 'smooth'
        });
    }
  };

  return (
    <section id={id} className="relative w-full bg-[#050505] flex flex-col">
      
      {/* 1. HEADER SECTION (Above Image) */}
      <div className="w-full px-6 pt-24 pb-8 md:px-12 md:pt-32 md:pb-16 bg-[#050505] relative z-20 border-b border-white/5">
         <div className="max-w-[1800px] mx-auto w-full">
             <div className="flex items-center gap-4 mb-4 md:mb-6">
                <div className="h-px w-12 bg-spettro-orange"></div>
                <span className="text-spettro-orange font-mono text-sm tracking-[0.3em] uppercase font-bold animate-pulse">
                    {content.subtitle}
                </span>
             </div>

             <div className="flex flex-col xl:flex-row gap-6 xl:items-end justify-between">
                {/* Title Group */}
                <div className="flex flex-col gap-4 max-w-4xl">
                    <h3 className="font-display text-6xl md:text-8xl text-white font-bold leading-[0.9] uppercase tracking-tighter drop-shadow-xl">
                        {content.title}
                    </h3>
                </div>

                {/* Description & Features */}
                <div className="max-w-2xl mt-2 xl:mt-0 flex flex-col gap-6">
                    <p className="text-gray-300 text-lg md:text-xl leading-relaxed font-light border-l-2 border-white/10 pl-6">
                        {content.description}
                    </p>

                    {/* Features Aligned with Text - Mobile alignment adjusted to left */}
                    <div className="flex flex-wrap gap-2 content-start pl-0 md:pl-6">
                        {content.marketingFeatures.map((f, i) => (
                            <span key={i} className="text-[10px] md:text-xs font-mono uppercase text-gray-400 border border-white/10 px-3 py-1.5 rounded bg-white/5 font-bold tracking-wider hover:text-white hover:border-white/30 transition-colors">
                                {f}
                            </span>
                        ))}
                    </div>
                </div>
             </div>
         </div>
      </div>

      {/* 2. SPLIT CONTENT (Visualizer & Grid) */}
      <div className="flex flex-col lg:flex-row lg:min-h-[600px]">
          
          {/* LEFT: VISUALIZER (60%) */}
          <div className="relative w-full lg:w-[60%] h-[50vh] lg:h-auto bg-black overflow-hidden group order-1">
              
              {/* Images */}
              <div className="absolute inset-0 z-0">
                 {COLORANTS.map((color, index) => (
                    <img 
                      key={index}
                      src={color.image}
                      alt={color.name}
                      className={`
                         absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out
                         ${activeColorIndex === index ? 'opacity-100 z-10' : 'opacity-0 z-0'}
                      `}
                    />
                 ))}
                 {/* Gradient Overlay for Label Readability */}
                 <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/90 via-transparent to-transparent pointer-events-none"></div>
              </div>

              {/* Active Color Label (Bottom Left) */}
              <div className="absolute bottom-0 left-0 w-full p-8 lg:p-12 z-30 pointer-events-none">
                 <div className="flex items-end justify-between">
                     <div>
                         <div className="inline-block px-3 py-1 mb-4 border border-white/20 bg-black/40 backdrop-blur-md rounded-full text-xs font-mono text-white/90 uppercase tracking-widest font-bold">
                            Preview Mode
                         </div>
                         <h2 className="text-5xl md:text-7xl font-display font-bold text-white drop-shadow-2xl tracking-tighter leading-none">
                            {activeColorName}
                         </h2>
                     </div>
                 </div>
              </div>
          </div>

          {/* RIGHT: CONTROLS GRID (40%) */}
          <div className="relative w-full lg:w-[40%] h-auto bg-[#0a0a0a] border-l border-white/10 flex flex-col order-2 group/list">
             
             {/* Mobile Navigation Arrows */}
             <div className={`lg:hidden absolute inset-y-0 left-0 flex items-center z-20 pl-2 pointer-events-none transition-opacity duration-300 ${canScrollLeft ? 'opacity-100' : 'opacity-0'}`}>
                <button 
                    onClick={() => scrollNav('left')}
                    className="pointer-events-auto w-10 h-10 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shadow-xl active:scale-95 transition-all hover:bg-white hover:text-black hover:border-white"
                >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6"></polyline></svg>
                </button>
             </div>
             <div className={`lg:hidden absolute inset-y-0 right-0 flex items-center z-20 pr-2 pointer-events-none transition-opacity duration-300 ${canScrollRight ? 'opacity-100' : 'opacity-0'}`}>
                <button 
                    onClick={() => scrollNav('right')}
                    className="pointer-events-auto w-10 h-10 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shadow-xl active:scale-95 transition-all hover:bg-white hover:text-black hover:border-white"
                >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
                </button>
             </div>

             <div 
                ref={scrollContainerRef}
                className="w-full h-auto overflow-x-auto lg:overflow-y-auto lg:overflow-x-hidden p-2 lg:p-8 snap-x snap-mandatory scrollbar-none [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']"
             >
                 {/* 
                    Mobile Layout: grid-rows-5 grid-flow-col (5 rows * 4 cols = 20 items). 
                    Auto cols ~42vw allows seeing 2 columns (~10 items) at once.
                    Desktop Layout: grid-cols-2 grid-flow-row (vertical scroll).
                 */}
                 <div className="grid grid-rows-5 grid-flow-col auto-cols-[42vw] md:auto-cols-[30vw] gap-3 content-start lg:grid-cols-2 lg:grid-rows-none lg:grid-flow-row lg:auto-cols-auto">
                    {COLORANTS.map((color, index) => {
                    const isActive = activeColorIndex === index;
                    const translatedName = content.colors[index] || color.name;
                    
                    return (
                        <button 
                        key={index}
                        onClick={() => setActiveColorIndex(index)}
                        className={`
                            snap-start relative group flex items-center gap-3 px-3 py-3 rounded border transition-all duration-200 w-full text-left
                            ${isActive ? 'border-white/40 bg-white/10 shadow-[0_0_15px_rgba(255,255,255,0.05)]' : 'border-white/5 hover:bg-white/5 hover:border-white/20'}
                        `}
                        >
                            {/* Color Chip */}
                            <div 
                            className="w-6 h-6 rounded-sm shadow-sm border border-white/10 shrink-0"
                            style={{ backgroundColor: color.hex }}
                            />
                            
                            {/* Label */}
                            <div className="flex flex-col items-start overflow-hidden min-w-0 flex-1">
                            <span className={`text-[10px] md:text-xs font-bold uppercase tracking-wider truncate w-full ${isActive ? 'text-white' : 'text-gray-400 group-hover:text-gray-200'}`}>
                                {translatedName}
                            </span>
                            </div>

                            {/* Active Indicator */}
                            <div className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${isActive ? 'bg-spettro-orange shadow-[0_0_5px_#FF5722] scale-100' : 'bg-transparent scale-0'}`} />
                        </button>
                    )
                    })}
                 </div>
             </div>
          </div>

      </div>

    </section>
  );
};
import React, { useState, useRef } from 'react';
import { ASSETS } from '../constants';
import { GlassCard } from '../components/GlassCard';
import { SectionProps } from '../types';

export const Science: React.FC<SectionProps> = ({ id }) => {
  const [sliderValue, setSliderValue] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const percent = (x / rect.width) * 100;
    setSliderValue(percent);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
     if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.touches[0].clientX - rect.left, rect.width));
    const percent = (x / rect.width) * 100;
    setSliderValue(percent);
  }

  return (
    <section id={id} className="relative min-h-screen w-full bg-black flex flex-col items-center justify-center py-20 overflow-hidden">
      
      <div className="container mx-auto px-6 mb-12 relative z-20 text-center">
        <h2 className="font-display text-5xl md:text-7xl text-white mb-4">The Science</h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Drag to test Spettro performance in extreme climates.
        </p>
      </div>

      <div 
        ref={containerRef}
        className="relative w-full h-[70vh] cursor-ew-resize group overflow-hidden select-none"
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
      >
        {/* Layer 1: HOT (+70C) */}
        <div className="absolute inset-0 w-full h-full">
          <img src={ASSETS.fireBg} alt="Heat" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-red-900/30 mix-blend-multiply" />
          
          <div 
            className="absolute top-1/2 right-10 md:right-32 transform -translate-y-1/2 text-right"
            style={{ opacity: sliderValue < 45 ? 1 : 0 }}
          >
            <h3 className="font-display text-6xl md:text-9xl text-white/90 drop-shadow-lg">+70°C</h3>
            <p className="text-red-200 text-xl font-bold uppercase tracking-widest mt-2">Uzbek Summer</p>
          </div>

          <div 
            className="absolute bottom-20 right-10"
            style={{ opacity: sliderValue < 45 ? 1 : 0 }}
          >
             <GlassCard className="p-6 w-64 border-red-500/50">
               <h4 className="font-bold text-red-400 text-lg mb-1">UV RESISTANT</h4>
               <p className="text-sm">Pigments do not fade under direct desert sun.</p>
             </GlassCard>
          </div>
        </div>

        {/* Layer 2: COLD (-25C) - Clipped */}
        <div 
          className="absolute inset-0 h-full overflow-hidden border-r-4 border-white shadow-[0_0_50px_rgba(255,255,255,0.5)]"
          style={{ width: `${sliderValue}%` }}
        >
          <img src={ASSETS.iceBg} alt="Cold" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-blue-900/30 mix-blend-multiply" />

          <div 
            className="absolute top-1/2 left-10 md:left-32 transform -translate-y-1/2 transition-opacity duration-300"
            style={{ opacity: sliderValue > 55 ? 1 : 0 }}
          >
            <h3 className="font-display text-6xl md:text-9xl text-white/90 drop-shadow-lg">-25°C</h3>
            <p className="text-blue-200 text-xl font-bold uppercase tracking-widest mt-2">Uzbek Winter</p>
          </div>

          <div 
            className="absolute bottom-20 left-10 transition-opacity duration-300"
            style={{ opacity: sliderValue > 55 ? 1 : 0 }}
          >
             <GlassCard className="p-6 w-64 border-blue-500/50">
               <h4 className="font-bold text-blue-400 text-lg mb-1">ELASTICITY</h4>
               <p className="text-sm">Stable polymer structure prevents cracking.</p>
             </GlassCard>
          </div>
        </div>

        {/* Slider Handle */}
        <div 
          className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-30 shadow-[0_0_20px_rgba(255,255,255,0.8)]"
          style={{ left: `${sliderValue}%` }}
        >
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-xl">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </div>
        </div>

      </div>
    </section>
  );
};
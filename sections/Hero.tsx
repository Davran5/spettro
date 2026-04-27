import React, { useEffect, useState } from 'react';
import { ASSETS } from '../constants';
import { SectionProps } from '../types';
import { useLanguage } from '../LanguageContext';
import { Button } from '../components/Button';
import { getLocalizedBrochurePath } from '../routing';

export const Hero: React.FC<SectionProps> = ({ id }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const { t, language } = useLanguage();
  const brochurePath = getLocalizedBrochurePath(language);

  useEffect(() => {
    // Trigger smooth entrance
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const renderTagline = (text: string) => {
    const parts = text.split('\u2022');
    if (parts.length > 1) {
      return (
        <>
          <span className="animate-shimmer-text">{parts[0]}</span>
          <span className="text-spettro-orange px-2">{'\u2022'}</span>
          <span className="animate-shimmer-text">{parts[1]}</span>
        </>
      );
    }
    return <span className="animate-shimmer-text">{text}</span>;
  };

  return (
    <section id={id} className="relative min-h-[100svh] md:h-screen w-full overflow-hidden font-sans">

      <style>{`
        @keyframes light-pass {
          0% { background-position: -250% center; }
          100% { background-position: 250% center; }
        }
        .animate-shimmer-text {
          background: linear-gradient(
            120deg, 
            #d1d5db 40%, 
            #ffffff 50%, 
            #d1d5db 60%
          );
          background-size: 250% 100%;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: light-pass 8s linear infinite;
        }

        /* Marquee Animation */
        @keyframes marquee-infinite {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
        }
        .animate-marquee-infinite {
            animation: marquee-infinite 30s linear infinite;
        }
      `}</style>

      {/* 
         BACKGROUND - FIXED
         Changed to fixed positioning to allow content to scroll over it.
      */}
      <div className="absolute inset-0 md:fixed w-full h-full z-0 pointer-events-none">
        <div className={`absolute inset-0 bg-black transition-opacity duration-1000 z-10 ${isLoaded ? 'opacity-0' : 'opacity-100'}`} />

        <video
          autoPlay
          muted
          loop
          playsInline
          poster={ASSETS.heroPoster}
          className="w-full h-full object-cover opacity-100 scale-105"
        >
          <source src={ASSETS.heroVideo} type="video/mp4" />
        </video>

        {/* Editorial Gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/80 z-0" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-0" />
      </div>

      {/* 
         CONTENT
      */}
      <div className="relative z-10 max-w-[1680px] mx-auto px-6 min-h-[100svh] md:h-full flex flex-col justify-center pt-24 pb-24 md:pb-0 w-full">

        {/* Layout Grid */}
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center w-full transition-all duration-1000 ease-out transform ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>

          {/* Left: Huge Logo & Tagline */}
          <div className="flex flex-col items-center lg:items-start">
            <img
              src={ASSETS.logo}
              alt="Spettro"
              className="w-64 md:w-96 lg:w-full max-w-2xl h-auto object-contain select-none drop-shadow-2xl mb-8"
            />

            {/* Tagline moved here - Left Aligned */}
            <div className="flex items-center pl-1">
              <div className="font-sans font-bold tracking-[0.2em] uppercase text-xs md:text-sm text-left">
                {renderTagline(t.hero.tagline)}
              </div>
            </div>

            <div className="mt-8 w-full flex justify-center lg:justify-start">
              <Button
                onClick={() => { window.location.href = brochurePath; }}
                className="px-6 py-3 text-sm md:text-base"
              >
                {t.partner.brochureButton}
              </Button>
            </div>
          </div>

          {/* Right: Text Column */}
          <div className="flex flex-col items-center lg:items-end text-center lg:text-right">

            {/* Core Value Proposition */}
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-white mb-6 md:mb-8 leading-[0.95] uppercase tracking-tighter max-w-3xl">
              <span className="font-bold block text-white">{t.hero.titleLine1}</span>
              <span className="font-black block text-white">{t.hero.titleLine2}</span>
              <span className="font-sans font-medium normal-case text-spettro-orange block mt-3 md:mt-4 text-lg md:text-3xl tracking-wide">
                {t.hero.titleLine3}
              </span>
            </h1>

            {/* Description */}
            <p className="text-base md:text-xl text-gray-300 font-light leading-relaxed mb-0 max-w-xl font-sans drop-shadow-lg">
              {t.hero.description}
            </p>

          </div>

        </div>

      </div>

      {/* 
        Bottom Bar
        Changed: Removed 'hidden md:block' to enable it on mobile.
        Added logic to split between static Desktop view and Marquee Mobile view.
      */}
      <div className={`absolute bottom-0 w-full transition-all duration-1000 delay-500 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'} z-20`}>

        {/* DESKTOP VIEW (Static Flex) */}
        <div className="hidden md:flex bg-black/60 backdrop-blur-md border-t border-white/10 w-full">
          <div className="container mx-auto px-6 py-4 flex justify-between items-center text-xs font-sans font-bold text-gray-500 uppercase tracking-[0.2em] gap-4">
            <div className="flex items-center gap-8">
              <span className="text-gray-400 hover:text-white transition-colors">{t.hero.iso}</span>
              <span className="text-white/10">|</span>
              <span className="text-gray-400 hover:text-white transition-colors">{t.hero.voc}</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_#22c55e]"></span>
              <span className="text-gray-300">{t.hero.active}</span>
            </div>
          </div>
        </div>

        {/* MOBILE VIEW (Marquee Scrolling) */}
        <div className="md:hidden w-full py-3 bg-black/80 backdrop-blur-md border-t border-white/10 overflow-hidden flex">
          {/* 
               We duplicate the content to ensure a seamless loop.
               The animation translates -50%, effectively showing the second half as the first half slides out.
            */}
          <div className="flex animate-marquee-infinite whitespace-nowrap">

            {/* Set 1 */}
            <div className="flex items-center gap-8 px-8 text-xs font-sans font-bold text-gray-400 uppercase tracking-[0.2em]">
              <span>{t.hero.iso}</span>
              <span className="text-white/20">|</span>
              <span>{t.hero.voc}</span>
              <span className="text-white/20">|</span>
              <span className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                {t.hero.active}
              </span>
            </div>

            {/* Set 2 (Duplicate) */}
            <div className="flex items-center gap-8 px-8 text-xs font-sans font-bold text-gray-400 uppercase tracking-[0.2em]">
              <span>{t.hero.iso}</span>
              <span className="text-white/20">|</span>
              <span>{t.hero.voc}</span>
              <span className="text-white/20">|</span>
              <span className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                {t.hero.active}
              </span>
            </div>

            {/* Set 3 (Duplicate for safety on wide mobile screens) */}
            <div className="flex items-center gap-8 px-8 text-xs font-sans font-bold text-gray-400 uppercase tracking-[0.2em]">
              <span>{t.hero.iso}</span>
              <span className="text-white/20">|</span>
              <span>{t.hero.voc}</span>
              <span className="text-white/20">|</span>
              <span className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                {t.hero.active}
              </span>
            </div>

          </div>
        </div>

      </div>

    </section>
  );
};

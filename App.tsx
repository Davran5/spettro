import React, { useState, useEffect, useRef } from 'react';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Interior } from './sections/Interior';
import { Road } from './sections/Road';
import { Partner } from './sections/Partner';
import { CeramicPlaster } from './sections/CeramicPlaster';
import { Colorants } from './sections/Colorants';
import { ASSETS, CONTACT } from './constants';
import { useLanguage } from './LanguageContext';
import { Language } from './translations';
import { ContactModal } from './components/ContactModal';

// Declare Lenis on window to avoid TS errors
declare global {
  interface Window {
    Lenis: any;
  }
}

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);
  const { t, language, setLanguage } = useLanguage();

  const lenisRef = useRef<any>(null);

  // Initialize Custom Smooth Scroll
  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia('(max-width: 767px)').matches) {
      return;
    }

    // Check if Lenis is loaded from the script tag
    if (typeof window.Lenis === 'function') {
      const lenis = new window.Lenis({
        duration: 2.2, // Higher = Slower/Smoother (Default ~1.0)
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        direction: 'vertical',
        gestureDirection: 'vertical',
        smooth: true,
        mouseMultiplier: 0.6, // Lower = Slower scroll speed per wheel tick
        smoothTouch: false,
        touchMultiplier: 2,
      });

      lenisRef.current = lenis;

      const raf = (time: number) => {
        lenis.raf(time);
        requestAnimationFrame(raf);
      };

      requestAnimationFrame(raf);

      return () => {
        lenis.destroy();
        lenisRef.current = null;
      };
    }
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    // slight delay to allow menu closing animation to start
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        if (lenisRef.current) {
          lenisRef.current.scrollTo(element, { duration: 2.5 });
        } else {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }, 500);
  };

  const navItems = [
    { label: t.nav.hero, id: 'hero', image: ASSETS.heroPoster, number: '01' },
    { label: t.nav.about, id: 'about', image: ASSETS.labBg, number: '02' },
    { label: t.nav.road, id: 'road', image: ASSETS.roadNight, number: '03' },
    { label: t.nav.interior, id: 'interior', image: ASSETS.interiorRoom, number: '04' },
    { label: t.nav.ceramic, id: 'ceramic', image: ASSETS.plasterTexture || ASSETS.bucketCeramic, number: '05' },
    { label: t.nav.colorants, id: 'colorants', image: ASSETS.bucketViso, number: '06' },
    { label: t.nav.partner, id: 'partner', image: ASSETS.partnerBg, number: '07' },
  ];

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      if (lenisRef.current) lenisRef.current.stop();
      document.body.style.overflow = 'hidden';
    } else {
      if (lenisRef.current) lenisRef.current.start();
      document.body.style.overflow = '';
    }
  }, [isMenuOpen]);

  // Close language dropdown when clicking outside
  useEffect(() => {
    const closeLang = () => setIsLangOpen(false);
    if (isLangOpen) {
      window.addEventListener('click', closeLang);
    }
    return () => window.removeEventListener('click', closeLang);
  }, [isLangOpen]);

  return (
    <main className="w-full bg-[#050505] text-white selection:bg-spettro-orange selection:text-white">

      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 w-full p-4 md:p-6 z-50 flex justify-between items-center pointer-events-none">

        {/* Logo Container */}
        <div
          className="flex items-center gap-2 md:gap-4 cursor-pointer pointer-events-auto mix-blend-difference"
          onClick={() => {
            if (lenisRef.current) {
              lenisRef.current.scrollTo(0, { duration: 2.0 });
            } else {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}
        >
          <img
            src={ASSETS.logoSymbol}
            alt="Spettro Logo"
            className="w-10 h-10 md:w-12 md:h-12 object-contain hover:rotate-90 transition-transform duration-700"
          />
          <img
            src={ASSETS.logo}
            alt="SPETTRO"
            className="h-6 md:h-9 object-contain"
          />
        </div>

        <div className="flex items-center gap-3 md:gap-4 pointer-events-auto">

          {/* 1. Language Dropdown */}
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setIsLangOpen(!isLangOpen)}
              className={`
                    w-14 h-14 rounded-full flex items-center justify-center 
                    font-mono text-lg font-bold transition-all duration-300 border shadow-2xl
                    ${isLangOpen
                  ? 'bg-spettro-orange border-spettro-orange text-white'
                  : 'bg-black/50 border-white/20 text-white backdrop-blur-md hover:bg-white/20 hover:border-white/40'
                }
                `}
              aria-label="Select Language"
            >
              {language}
            </button>

            {/* Dropdown Options */}
            <div className={`
                absolute top-full mt-3 left-1/2 -translate-x-1/2 w-14 py-3
                bg-[#111] border border-white/20 rounded-full
                flex flex-col items-center gap-3 shadow-2xl z-50
                transition-all duration-300 origin-top
                ${isLangOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'}
             `}>
              {(['UZ', 'RU'] as const).filter(l => l !== language).map(lang => (
                <button
                  key={lang}
                  onClick={() => { setLanguage(lang); setIsLangOpen(false); }}
                  className="w-10 h-10 rounded-full flex items-center justify-center font-mono text-xs text-gray-400 hover:text-white hover:bg-white/10 transition-colors font-bold"
                >
                  {lang}
                </button>
              ))}
            </div>
          </div>

          {/* 2. Contact Button */}
          <button
            onClick={() => setIsContactOpen(true)}
            className="
                group w-14 h-14 flex items-center justify-center
                rounded-full border border-white/20 bg-black/50 backdrop-blur-md 
                hover:bg-white/20 hover:border-white/40 transition-all duration-300 shadow-2xl
            "
            aria-label="Contact Us"
          >
            <svg
              className="w-8 h-8 text-gray-200 group-hover:text-spettro-orange transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </button>

          {/* 3. Menu Button */}
          <button
            onClick={toggleMenu}
            className={`
              group w-14 h-14 flex items-center justify-center
              rounded-full border transition-all duration-300 backdrop-blur-md shadow-2xl
              ${isMenuOpen
                ? 'bg-white border-white'
                : 'bg-black/50 border-white/20 hover:bg-white/20 hover:border-white/40'
              }
            `}
            aria-label="Menu"
          >
            <div className="relative w-8 h-8 flex flex-col justify-center items-center">
              <span
                className={`absolute w-full h-[2px] bg-current transition-all duration-300 ${isMenuOpen ? 'rotate-45 text-black' : 'translate-y-[-8px] text-white'}`}
              />
              <span
                className={`absolute w-full h-[2px] bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0 text-black' : 'text-white'}`}
              />
              <span
                className={`absolute w-full h-[2px] bg-current transition-all duration-300 ${isMenuOpen ? '-rotate-45 text-black' : 'translate-y-[8px] text-white'}`}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 transition-visibility duration-500 ${isMenuOpen ? 'visible' : 'invisible delay-500'}`}
      >
        <div
          className={`absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-500 cursor-pointer ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={toggleMenu}
        />

        <div
          className={`
                absolute top-0 right-0 h-full w-full md:w-[500px] lg:w-[30vw] bg-[#0c0c0c] border-l border-white/10
                transform transition-transform duration-[800ms] ease-[cubic-bezier(0.19,1,0.22,1)] shadow-2xl
                ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
                flex flex-col overflow-hidden
            `}
        >
          <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] via-black to-[#050505]" />
            {navItems.map((item) => (
              <div
                key={`bg-${item.id}`}
                className={`absolute inset-0 bg-cover bg-center transition-all duration-700 ease-in-out transform scale-105 ${hoveredNav === item.id ? 'opacity-30 blur-[2px] scale-100' : 'opacity-0'}`}
                style={{ backgroundImage: `url(${item.image})` }}
              />
            ))}
            <div className="absolute inset-0 bg-black/80"></div>
            <div className="absolute inset-0 opacity-10 mix-blend-overlay bg-[url('/stardust.webp')]"></div>
          </div>

          <div className="relative z-10 flex flex-col h-full justify-between py-24 px-10 md:px-16">

            <div className="flex flex-col gap-6 items-start w-full mt-10">
              <p className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-4">Navigation</p>
              <ul className="flex flex-col w-full space-y-4">
                {navItems.map((item, index) => (
                  <li key={item.id} className="w-full">
                    <button
                      onClick={() => scrollToSection(item.id)}
                      onMouseEnter={() => setHoveredNav(item.id)}
                      onMouseLeave={() => setHoveredNav(null)}
                      className={`
                             group flex items-center gap-6 w-full text-left
                             transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)]
                             ${isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-[50px] opacity-0'}
                         `}
                      style={{ transitionDelay: `${100 + (index * 50)}ms` }}
                    >
                      <span className="font-mono text-xs text-spettro-orange opacity-60 group-hover:opacity-100 transition-opacity">
                        {item.number}
                      </span>
                      <span
                        className="font-display text-3xl md:text-4xl font-bold uppercase tracking-wide text-gray-400 group-hover:text-white transition-all duration-300 group-hover:translate-x-2"
                      >
                        {item.label}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div
              className={`border-t border-white/10 pt-8 transition-opacity duration-700 delay-500 ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`}
            >
              <div className="flex flex-col gap-2">
                <p className="text-[10px] font-mono tracking-[0.3em] text-spettro-orange mb-2">{t.nav.contactTitle}</p>
                <p className="text-base text-white font-display uppercase tracking-wider">{t.nav.address}</p>
                <a
                  href={CONTACT.phoneHref}
                  className="w-fit font-mono text-lg md:text-xl text-white hover:text-spettro-orange transition-colors"
                >
                  {CONTACT.phoneDisplay}
                </a>
                <a
                  href={CONTACT.emailHref}
                  className="w-fit break-all font-mono text-base md:text-lg text-gray-300 hover:text-spettro-orange transition-colors"
                >
                  {CONTACT.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Hero id="hero" />
      <About id="about" />
      <Road id="road" />
      <Interior id="interior" />
      <CeramicPlaster id="ceramic" />
      <Colorants id="colorants" />
      <Partner id="partner" />

      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />

      {/* Footer */}
      <footer className="bg-black py-12 border-t border-white/10">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center opacity-50 text-sm">
          <p>&copy; 2026 Spettro Uzbekistan.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-spettro-orange">Instagram</a>
            <a href="#" className="hover:text-spettro-orange">Telegram</a>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default App;

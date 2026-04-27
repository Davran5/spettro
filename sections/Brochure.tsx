import React, { useState } from 'react';
import { ASSETS, COLORANTS, CONTACT } from '../constants';
import { TRANSLATIONS } from '../translations';
import { getLocalizedHomePath, getRouteLanguage } from '../routing';

const PageContainer: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
    <div
        className={`relative bg-[#050505] text-white overflow-hidden mx-auto shadow-2xl mb-8 print:mb-0 print:shadow-none ${className}`}
        style={{
            width: '216.3mm',
            height: '297mm',
            pageBreakAfter: 'always',
            breakAfter: 'page'
        }}
    >
        {children}

        {/* Footer Strip on every page */}
        <div className="absolute bottom-0 left-0 w-full h-16 border-t border-white/10 flex items-center justify-between px-10 bg-[#050505] z-50">
            <div className="flex items-center gap-2 opacity-70">
                <span className="font-mono text-[10px] tracking-widest text-gray-300">
                    {CONTACT.phoneDisplay} &nbsp;&nbsp;|&nbsp;&nbsp; {CONTACT.email}
                </span>
            </div>
            {/* We need to be careful with handling language here if we want dynamic footer text */}
            {/* But PageContainer takes children, it doesn't know lang. We can pass it or just use generic. */}
            {/* Let's try to infer or pass it. For now, hardcode generic or use English/RU as base since it's "GERMAN ENGINEERING...". */}
            {/* Actually, it's better to pass lang prop to PageContainer if we want localized footer. */}
            {/* I'll stick to a generic footer or the one from the context. */}
            <div className="text-[10px] font-mono text-spettro-orange tracking-widest">
                GERMAN ENGINEERING • UZBEK MANUFACTURING
            </div>
        </div>
    </div>
);

const BrochurePages: React.FC<{ lang: 'RU' | 'UZ' }> = ({ lang }) => {
    const t = TRANSLATIONS[lang];
    const architecturalProducts = t.interior.products;

    return (
        <>
            {/* ====================================================================================
        PAGE 1: COVER
        ==================================================================================== */}
            <PageContainer className="flex flex-col justify-between p-12">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <img src={ASSETS.heroPoster} className="w-full h-full object-cover opacity-60 grayscale" alt="Cover Background" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                </div>

                {/* Top: Logo & Date */}
                <div className="relative z-10 flex justify-between items-start border-b border-white/20 pb-8">
                    <img src={ASSETS.logo} className="h-32" alt="Spettro Logo" />
                    <div className="text-right">
                        <span className="block text-6xl font-display font-bold text-white leading-none">20</span>
                        <span className="block text-6xl font-display font-bold text-spettro-orange leading-none">26</span>
                    </div>
                </div>

                {/* Center: Title */}
                <div className="relative z-10 flex-1 flex flex-col justify-center items-center text-center">
                    {/* Large Logo Symbol */}
                    <img src={ASSETS.logoSymbol} className="h-64 w-auto object-contain mb-8 opacity-90 drop-shadow-2xl" alt="Regina Di Colore Symbol" />

                    <h1 className="font-display text-8xl font-black text-white tracking-tighter mb-4 leading-none uppercase">
                        {t.brochure.cover.title}
                    </h1>
                    <p className="font-mono text-xl text-gray-300 tracking-[0.5em] uppercase text-spettro-orange">
                        {t.brochure.cover.subtitle}
                    </p>
                </div>

                {/* Bottom: Footer Info */}
                <div className="relative z-10 border-t border-white/20 pt-8 flex justify-between items-end">
                    <div className="text-sm font-light text-gray-400 max-w-xs">
                        {t.brochure.cover.tagline}
                    </div>
                    <div className="text-right">
                        <p className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-1">www.spettro.uz</p>
                        <p className="text-xs font-mono text-gray-500 uppercase tracking-widest">{CONTACT.phoneDisplay}</p>
                    </div>
                </div>
            </PageContainer>

            {/* ====================================================================================
        PAGE 2: INTRODUCTION / ABOUT
        ==================================================================================== */}
            <PageContainer className="flex flex-col relative overflow-hidden">
                {/* Background Texture */}
                <div className="absolute inset-0 z-0">
                    <img src={ASSETS.labBg} className="w-full h-full object-cover opacity-20" alt="Lab Background" />
                </div>

                {/* Header */}
                <div className="relative z-10 p-12 pb-0">
                    <span className="text-spettro-orange font-mono text-xs tracking-[0.3em] uppercase mb-4 block">{t.about.est}</span>
                    <h2 className="font-display text-7xl text-white font-bold leading-tight mb-8">
                        SPETTRO<br /><span className="text-gray-500">INTERNATIONAL</span>
                    </h2>
                </div>

                {/* Content Split */}
                <div className="relative z-10 flex-1 flex flex-col p-12 pt-4 pb-20 justify-between">
                    <div>
                        <div className="w-24 h-1 bg-spettro-orange mb-8" />
                        <p className="text-xl text-gray-300 font-light leading-relaxed whitespace-pre-line max-w-3xl">
                            {t.about.fullText}
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-8">
                        {t.about.points.slice(0, 2).map((point, i) => (
                            <div key={i}>
                                <h3 className="text-white font-display font-bold text-lg mb-2">{point.title}</h3>
                                <p className="text-sm text-gray-400 leading-relaxed">{point.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </PageContainer>

            {/* ====================================================================================
        PAGE 3: ROAD MARKING
        ==================================================================================== */}
            <PageContainer className="flex flex-col">
                {/* Header Image */}
                <div className="h-[25%] relative overflow-hidden">
                    <img src={ASSETS.roadNight} className="w-full h-full object-cover" alt="Road" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent" />
                    <div className="absolute top-4 right-10">
                        <img src={ASSETS.logo} alt="Spettro" className="w-32" />
                    </div>
                </div>

                {/* Content */}
                <div className="flex-1 px-10 pb-20 flex flex-col">
                    <div className="mb-8">
                        <span className="text-spettro-orange font-mono text-xs tracking-[0.3em] uppercase font-bold">{t.brochure.road.heroSub}</span>
                        <h1 className="font-display text-6xl leading-tight text-white font-bold tracking-tighter mt-2 mb-4" dangerouslySetInnerHTML={{ __html: t.brochure.road.safetyTitle }} />
                        <p className="text-gray-400 text-sm leading-relaxed text-justify max-w-2xl border-l-2 border-spettro-orange pl-6">
                            {t.road.mainDescText}
                        </p>
                    </div>

                    {/* Specs Grid - Showing ALL 5 */}
                    <div className="grid grid-cols-2 gap-6 mt-4">
                        {t.road.specs.map((spec, i) => (
                            <div key={i} className={`bg-white/5 p-5 border border-white/10 ${i === 4 ? 'col-span-2' : ''}`}>
                                <h4 className="text-spettro-orange font-bold text-xs uppercase mb-1">{spec.title}</h4>
                                <h5 className="text-white font-display font-bold text-lg mb-2">{spec.subtitle}</h5>
                                <p className="text-[10px] text-gray-400 leading-snug mb-3">{spec.description}</p>
                                <div className="grid grid-cols-3 gap-2 border-t border-white/10 pt-2">
                                    {spec.stats.map((stat, j) => (
                                        <div key={j}>
                                            <span className="block text-[9px] text-gray-500 uppercase">{stat.label}</span>
                                            <span className="block text-xs text-white font-bold">{stat.value}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Footer Strip on every page - Added consistent footer */}
                    <div className="absolute bottom-0 left-0 w-full h-16 border-t border-white/10 flex items-center justify-between px-10 bg-[#050505] z-50">
                        <div className="flex items-center gap-2 opacity-70">
                            <span className="font-mono text-[10px] tracking-widest text-gray-300">
                                {CONTACT.phoneDisplay} &nbsp;&nbsp;|&nbsp;&nbsp; {CONTACT.email}
                            </span>
                        </div>
                        <div className="text-[10px] font-mono text-spettro-orange tracking-widest">
                            {t.brochure.footer.text}
                        </div>
                    </div>
                </div>
            </PageContainer>

            {/* ====================================================================================
        PAGE 4: ARCHITECTURAL PRODUCTS 1
        ==================================================================================== */}
            <PageContainer className="flex flex-col relative bg-[#111]">
                <div className="absolute inset-0 bg-neutral-900" />

                <div className="relative z-10 p-12 h-full flex flex-col">
                    {/* Header */}
                    <div className="flex justify-between items-end mb-12 border-b border-white/10 pb-6">
                        <div>
                            <span className="text-spettro-orange font-mono text-xs tracking-[0.3em] uppercase mb-2 block">{t.brochure.arch.title}</span>
                            <h2 className="font-display text-4xl text-white font-bold">{t.brochure.arch.subtitle}</h2>
                        </div>
                        <div className="text-right">
                            <span className="block text-3xl font-display font-bold text-white">01</span>
                            <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">{t.interior.title}</span>
                        </div>
                    </div>

                    {/* Products Grid */}
                    <div className="flex-1 flex flex-col gap-2 pb-16">
                        {architecturalProducts.slice(0, 3).map((product, i) => (
                            <div key={i} className="flex gap-4 p-3 border border-white/10 bg-white/[0.02] flex-1 min-h-0">
                                {/* Image - Left Side (35%) */}
                                <div className="w-[35%] shrink-0 flex flex-col justify-center">
                                    <div className="bg-gray-800 relative overflow-hidden border border-white/5 h-[80%]">
                                        <div className="absolute inset-0 bg-black/20 z-10" />
                                        <img src={product.image} className="w-full h-full object-cover" alt={product.name} />
                                    </div>
                                </div>

                                {/* Info - Right Side */}
                                <div className="flex-1 flex flex-col justify-between overflow-hidden">
                                    <div>
                                        <div className="flex justify-between items-start mb-2">
                                            <div>
                                                <h3 className="text-3xl font-display font-bold text-white mb-1">{product.name}</h3>
                                                <span className="text-xs font-mono text-spettro-orange uppercase tracking-wider">{product.type}</span>
                                            </div>
                                            <div className="text-right">
                                                <span className="block text-xs text-gray-500">{product.id.toUpperCase()}</span>
                                            </div>
                                        </div>
                                        <p className="text-[10px] text-gray-300 leading-relaxed mb-3 line-clamp-3">
                                            {product.description}
                                        </p>
                                    </div>

                                    {/* Specs Grid */}
                                    <div className="grid grid-cols-2 gap-x-4 gap-y-2 border-t border-white/10 pt-3">
                                        {product.dataSheet.slice(0, 4).map((spec, j) => (
                                            <div key={j} className="flex justify-between items-center text-[9px]">
                                                <span className="text-gray-500 uppercase">{spec.label}</span>
                                                <span className="text-white font-mono">{spec.value}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </PageContainer>

            {/* ====================================================================================
        PAGE 4: ARCHITECTURAL PRODUCTS 2
        ==================================================================================== */}
            <PageContainer className="flex flex-col relative bg-[#111]">
                <div className="absolute inset-0 bg-neutral-900" />

                <div className="relative z-10 p-12 h-full flex flex-col">
                    {/* Header */}
                    <div className="flex justify-between items-end mb-12 border-b border-white/10 pb-6">
                        <div>
                            <span className="text-spettro-orange font-mono text-xs tracking-[0.3em] uppercase mb-2 block">{t.brochure.arch.title}</span>
                            <h2 className="font-display text-4xl text-white font-bold">{t.brochure.arch.subtitle}</h2>
                        </div>
                        <div className="text-right">
                            <span className="block text-3xl font-display font-bold text-white">02</span>
                            <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">{t.interior.title}</span>
                        </div>
                    </div>

                    {/* Products Grid */}
                    <div className="flex-1 flex flex-col gap-2 pb-16">
                        {architecturalProducts.slice(3, 6).map((product, i) => (
                            <div key={i} className="flex gap-4 p-3 border border-white/10 bg-white/[0.02] flex-1 min-h-0">
                                {/* Image - Left Side (35%) */}
                                <div className="w-[35%] shrink-0 flex flex-col justify-center">
                                    <div className="bg-gray-800 relative overflow-hidden border border-white/5 h-[80%]">
                                        <div className="absolute inset-0 bg-black/20 z-10" />
                                        <img src={product.image} className="w-full h-full object-cover" alt={product.name} />
                                    </div>
                                </div>

                                {/* Info - Right Side */}
                                <div className="flex-1 flex flex-col justify-between overflow-hidden">
                                    <div>
                                        <div className="flex justify-between items-start mb-2">
                                            <div>
                                                <h3 className="text-3xl font-display font-bold text-white mb-1">{product.name}</h3>
                                                <span className="text-xs font-mono text-spettro-orange uppercase tracking-wider">{product.type}</span>
                                            </div>
                                            <div className="text-right">
                                                <span className="block text-xs text-gray-500">{product.id.toUpperCase()}</span>
                                            </div>
                                        </div>
                                        <p className="text-[10px] text-gray-300 leading-relaxed mb-3 line-clamp-3">
                                            {product.description}
                                        </p>
                                    </div>

                                    {/* Specs Grid */}
                                    <div className="grid grid-cols-2 gap-x-4 gap-y-2 border-t border-white/10 pt-3">
                                        {product.dataSheet.slice(0, 4).map((spec, j) => (
                                            <div key={j} className="flex justify-between items-center text-[9px]">
                                                <span className="text-gray-500 uppercase">{spec.label}</span>
                                                <span className="text-white font-mono">{spec.value}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </PageContainer>

            {/* ====================================================================================
        PAGE 5: CERAMIC & PRIMER (SPLIT)
        ==================================================================================== */}
            <PageContainer className="flex flex-col relative overflow-hidden">
                {/* TOP HALF: CERAMIC */}
                <div className="h-1/2 relative overflow-hidden border-b border-white/10">
                    {/* Background Image - Ceramic */}
                    <div className="absolute inset-0 z-0 bg-black">
                        <img src={ASSETS.bucketCeramic} className="w-full h-full object-cover opacity-80 z-0 relative" alt="Ceramic Texture" />
                        {/* Fade from Bottom (for text) - Increased Intensity */}
                        <div
                            className="absolute bottom-0 left-0 right-0 h-[80%] z-10"
                            style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.5) 40%, transparent 100%)' }}
                        />
                    </div>

                    {/* Content - Bottom Aligned, Full Width Row */}
                    <div className="absolute bottom-0 left-0 right-0 z-20 px-10 py-8 flex items-end gap-8">
                        {/* Left: Title & Tag */}
                        <div className="w-[40%] text-left border-r border-white/20 pr-8">
                            <span className="text-spettro-orange font-mono text-[12px] tracking-widest uppercase mb-2 font-bold block text-left whitespace-nowrap">{t.brochure.ceramic.tag}</span>
                            {/* Special handling for Ceramic Russian Title */}
                            {lang === 'RU' ? (
                                <h2 className="font-display text-white font-bold leading-none mb-2 text-left">
                                    <span className="block text-[40px] text-left">КЕРАМИЧЕСКАЯ</span>
                                    <span className="block text-[48px] mt-1 text-left">ШТУКАТУРКА</span>
                                </h2>
                            ) : lang === 'UZ' ? (
                                <h2 className="font-display text-white font-bold leading-none mb-2 text-left">
                                    <span className="block text-[40px] text-left">KERAMIK</span>
                                    <span className="block text-[48px] mt-1 text-left">SUVOQ</span>
                                </h2>
                            ) : (
                                <h2 className="font-display text-white font-bold leading-none mb-2 text-left">
                                    <span className="block text-[54px] text-left">{t.ceramic.title.toUpperCase()}</span>
                                </h2>
                            )}
                        </div>

                        {/* Right: Description & Stats */}
                        <div className="flex-1">
                            <p className="text-xs text-gray-300 leading-relaxed mb-4 font-light max-w-xl">
                                {t.ceramic.description}
                            </p>
                            <div className="flex gap-12">
                                {t.ceramic.stats.map((stat, i) => (
                                    <div key={i} className="flex flex-col">
                                        <span className="block text-[14px] font-display font-bold text-white leading-none">{stat.value}</span>
                                        <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest leading-none mt-0.5">{stat.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* BOTTOM HALF: PRIMER */}
                <div className="h-1/2 relative overflow-hidden bg-[#0A0A0A]">
                    {/* Background Image - Primer */}
                    <div className="absolute inset-0 z-0 bg-black">
                        <img src={ASSETS.bucketPrimer} className="w-full h-full object-cover opacity-80 z-0 relative" alt="Primer Texture" />
                        {/* Fade from Top (for text) - Increased Intensity */}
                        <div
                            className="absolute top-0 left-0 right-0 h-[80%] z-10"
                            style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.5) 40%, transparent 100%)' }}
                        />
                    </div>

                    {/* Content - Top Aligned, Full Width Row */}
                    <div className="absolute top-0 left-0 right-0 z-20 px-10 py-8 flex items-start gap-8">
                        {/* Left: Title & Tag */}
                        <div className="w-[40%] text-right border-r border-white/20 pr-8 pt-2">
                            <span className="text-spettro-orange font-mono text-[12px] tracking-[0.4em] uppercase font-bold block text-left mb-2">
                                {lang === 'RU' ? 'ПОДГОТОВКА ПОВЕРХНОСТИ' : 'SIRTNI TAYYORLASH'}
                            </span>
                            {/* Special handling for Primer Russian Title */}
                            {lang === 'RU' ? (
                                <h2 className="font-display text-white font-bold leading-none mb-2 text-left">
                                    <span className="block text-[50px] text-left">ГРУНТОВКА ГЛУБОКОГО</span>
                                    <span className="block text-[28px] tracking-widest mt-1 text-left">ПРОНИКНОВЕНИЯ</span>
                                </h2>
                            ) : lang === 'UZ' ? (
                                <h2 className="font-display text-white font-bold leading-none mb-2 text-left">
                                    <span className="block text-[50px] text-left">CHUQUR SINGUVCHI</span>
                                    <span className="block text-[40px] tracking-widest mt-1 text-left">GRUNT</span>
                                </h2>
                            ) : (
                                <h2 className="font-display text-white font-bold leading-none mb-2 text-left">
                                    <span className="block text-[60px] text-left">{t.primer.title.toUpperCase()}</span>
                                </h2>
                            )}
                        </div>

                        {/* Right: Description & Stats */}
                        <div className="flex-1">
                            <p className="text-xs text-gray-300 leading-relaxed mb-4 font-light max-w-xl">
                                {t.primer.description}
                            </p>
                            <div className="flex gap-12">
                                {t.primer.stats.map((stat, i) => (
                                    <div key={i} className="flex flex-col">
                                        <span className="block text-[14px] font-display font-bold text-white leading-none">{stat.value}</span>
                                        <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest leading-none mt-0.5">{stat.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </PageContainer>

            {/* ====================================================================================
        PAGE 6: COLORANTS (IMAGE GRID REDESIGN)
        ==================================================================================== */}
            <PageContainer className="flex flex-col relative overflow-hidden bg-[#0A0A0A]">
                {/* Subtle Background Texture */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-transparent opacity-80" />
                    <img src={ASSETS.plasterTexture} className="w-full h-full object-cover opacity-10 mix-blend-overlay" alt="Texture" />
                </div>

                {/* Header Section (25%) */}
                <div className="relative z-10 h-[25%] px-10 py-8 flex flex-col justify-end border-b border-white/10">
                    <div className="flex justify-between items-end">
                        <div>
                            <p className="font-mono text-spettro-orange text-[12px] tracking-[0.4em] uppercase mb-2 font-bold">{t.colorants.subtitle}</p>
                            <h2 className="font-display text-[60px] text-white font-bold leading-none mb-4">{t.colorants.title.toUpperCase()}</h2>
                            <p className="text-[12px] text-gray-400 font-light max-w-2xl leading-relaxed">
                                {t.colorants.description}
                            </p>
                        </div>
                        <div className="text-right">
                            <div className="py-2 px-4 border border-white/20 bg-white/5 backdrop-blur-sm">
                                <p className="text-spettro-orange font-mono text-[10px] uppercase tracking-widest mb-1">Quality</p>
                                <p className="text-[18px] font-display font-bold text-white leading-none">{t.brochure.pigments.german}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Grid Section (75%) */}
                <div className="relative z-10 flex-1 px-10 py-8 overflow-hidden">
                    <div className="grid grid-cols-4 gap-4 h-full content-start">
                        {COLORANTS.map((c, i) => (
                            <div key={i} className="group relative flex flex-col items-center border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-colors rounded-sm h-full overflow-hidden">
                                {/* Image Container */}
                                <div className="flex-1 w-full relative overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                                    {/* Pigment Image */}
                                    <img
                                        src={c.image || ASSETS.plasterTexture} // Fallback if image missing
                                        className="w-full h-[97%] object-cover group-hover:scale-110 transition-transform duration-500"
                                        alt={c.name}
                                        onError={(e) => {
                                            // Fallback to color circle if image fails
                                            e.currentTarget.style.display = 'none';
                                            e.currentTarget.parentElement!.style.backgroundColor = c.hex;
                                            e.currentTarget.parentElement!.classList.add('flex', 'items-center', 'justify-center');
                                            // Create a fake element for fallback visual
                                            const circle = document.createElement('div');
                                            circle.className = 'w-12 h-12 rounded-full shadow-lg';
                                            circle.style.backgroundColor = 'rgba(255,255,255,0.2)';
                                            e.currentTarget.parentElement!.appendChild(circle);
                                        }}
                                    />
                                </div>

                                {/* Label */}
                                <div className="w-full text-center border-t border-white/5 py-2 bg-black/40 backdrop-blur-sm relative z-20">
                                    <p className="text-[10px] font-mono text-gray-300 uppercase tracking-widest group-hover:text-white transition-colors truncate w-full px-2">
                                        {c.name}
                                    </p>
                                    <div className="flex justify-center mt-1 opacity-0 group-hover:opacity-100 transition-opacity absolute bottom-1 left-0 right-0 pointer-events-none">
                                        <div className="w-1 h-1 rounded-full" style={{ backgroundColor: c.hex }} />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </PageContainer>
        </>
    );
};

export const Brochure: React.FC = () => {
    const routeLanguage = typeof window === 'undefined' ? 'UZ' : getRouteLanguage(window.location.pathname);
    const brochureUi = TRANSLATIONS[routeLanguage].brochure.ui;
    const backPath = typeof window === 'undefined'
        ? '/uz/'
        : getLocalizedHomePath(routeLanguage);

    return (
        <div className="min-h-screen bg-neutral-900 py-10 print:py-0 print:bg-white">

            {/* Print Control - Hidden when printing */}
            <div className="fixed top-6 right-6 z-50 print:hidden flex gap-4">
                <button
                    onClick={() => window.location.href = backPath}
                    className="px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 text-white font-mono text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-colors"
                >
                    {brochureUi.back}
                </button>
                <button
                    onClick={() => window.print()}
                    className="px-6 py-3 bg-spettro-orange text-white font-mono text-xs uppercase tracking-widest shadow-lg hover:bg-white hover:text-spettro-orange transition-colors"
                >
                    {brochureUi.print}
                </button>
            </div>

            <style>{`
        @media print {
            @page { margin: 0; size: A4; }
            body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
        }
    `}</style>

            <div id="brochure-content">
                {/* Render both language versions for printing */}
                <BrochurePages lang="RU" />
                <BrochurePages lang="UZ" />
            </div>
        </div>
    );
};

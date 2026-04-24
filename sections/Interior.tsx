import React, { useState, useRef, useEffect } from 'react';
import { ASSETS, COLORS } from '../constants';
import { GlassCard } from '../components/GlassCard';
import { SectionProps, Product } from '../types';
import { useLanguage } from '../LanguageContext';
import { ProductModal } from '../components/ProductModal';

export const Interior: React.FC<SectionProps> = ({ id }) => {
    const { t } = useLanguage();
    const PRODUCTS = t.interior.products;

    const [activeIndex, setActiveIndex] = useState(0);

    // Modal State
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const [modalColor, setModalColor] = useState(COLORS[0]);

    // Container Drag State
    const [isDraggingContainer, setIsDraggingContainer] = useState(false);
    const [containerStartX, setContainerStartX] = useState(0);
    const [containerScrollLeft, setContainerScrollLeft] = useState(0);
    // Track if drag actually happened to distinguish click from drag
    const [wasDragged, setWasDragged] = useState(false);

    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

    // --------------------------------------------------------------------------
    // SCROLL SYNC LOGIC
    // --------------------------------------------------------------------------
    const handleScroll = () => {
        if (!scrollContainerRef.current) return;
        const container = scrollContainerRef.current;

        // Calculate Active Index based on center position
        const containerCenter = container.getBoundingClientRect().left + container.clientWidth / 2;
        let closestIndex = 0;
        let minDistance = Number.MAX_VALUE;

        cardsRef.current.forEach((card, index) => {
            if (!card) return;
            const cardRect = card.getBoundingClientRect();
            const cardCenter = cardRect.left + cardRect.width / 2;
            const distance = Math.abs(containerCenter - cardCenter);

            if (distance < minDistance) {
                minDistance = distance;
                closestIndex = index;
            }
        });
        setActiveIndex(closestIndex);
    };

    const scrollToProduct = (index: number) => {
        if (!scrollContainerRef.current || !cardsRef.current[index]) return;
        const card = cardsRef.current[index];
        const container = scrollContainerRef.current;

        // Calculate center position
        const cardLeft = card!.offsetLeft;
        const cardWidth = card!.offsetWidth;
        const containerWidth = container.offsetWidth;
        const scrollLeft = cardLeft - (containerWidth / 2) + (cardWidth / 2);

        container.scrollTo({
            left: scrollLeft,
            behavior: 'smooth'
        });
    };

    // Mobile Nav Helpers
    const scrollPrev = () => {
        const newIndex = Math.max(0, activeIndex - 1);
        scrollToProduct(newIndex);
    };

    const scrollNext = () => {
        const newIndex = Math.min(PRODUCTS.length - 1, activeIndex + 1);
        scrollToProduct(newIndex);
    };

    useEffect(() => {
        const container = scrollContainerRef.current;
        if (container) {
            container.addEventListener('scroll', handleScroll);
            handleScroll();
        }
        return () => container?.removeEventListener('scroll', handleScroll);
    }, [PRODUCTS]);

    // --------------------------------------------------------------------------
    // CONTAINER DRAG LOGIC
    // --------------------------------------------------------------------------
    const startContainerDrag = (e: React.MouseEvent) => {
        if (!scrollContainerRef.current) return;
        setIsDraggingContainer(true);
        setWasDragged(false);
        setContainerStartX(e.pageX - scrollContainerRef.current.offsetLeft);
        setContainerScrollLeft(scrollContainerRef.current.scrollLeft);
    };

    const onContainerMove = (e: React.MouseEvent) => {
        if (!isDraggingContainer || !scrollContainerRef.current) return;
        e.preventDefault();
        setWasDragged(true);
        const x = e.pageX - scrollContainerRef.current.offsetLeft;
        const walk = (x - containerStartX) * 2; // 2x Speed for easier navigation
        scrollContainerRef.current.scrollLeft = containerScrollLeft - walk;
    };

    useEffect(() => {
        const handleGlobalMouseUp = () => {
            setIsDraggingContainer(false);
        };

        if (isDraggingContainer) {
            window.addEventListener('mouseup', handleGlobalMouseUp);
        }
        return () => {
            window.removeEventListener('mouseup', handleGlobalMouseUp);
        };
    }, [isDraggingContainer]);


    // Active Color Theme
    const activeColor = COLORS[activeIndex % COLORS.length];


    return (
        <section id={id} className="relative py-24 min-h-screen overflow-hidden bg-[#050505] z-30 flex flex-col justify-center">

            {/* 
         1. BACKGROUND & ATMOSPHERE 
         - Dynamic background color overlay (activeColor.overlayColor)
      */}
            <div
                className="absolute inset-0 pointer-events-none transition-colors duration-1000 ease-in-out z-0"
                style={{ backgroundColor: activeColor.overlayColor }}
            />

            {/* Static Room Texture */}
            <div className="absolute inset-0 opacity-20 z-0 pointer-events-none">
                <img src={ASSETS.interiorRoom} className="w-full h-full object-cover grayscale" alt="Interior Background" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black"></div>
            </div>

            {/* TOP & BOTTOM FADE */}
            <div className="absolute top-0 left-0 w-full h-48 bg-gradient-to-b from-[#050505] to-transparent z-10 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-[#050505] to-transparent z-10 pointer-events-none" />


            {/* 
         2. CONTENT CONTAINER 
      */}
            <div className="w-full relative z-10 flex flex-col items-center">

                {/* Header - Reduced Mobile Margin */}
                <div className="container mx-auto px-6 text-center mb-2 lg:mb-10 select-none">
                    <h2 className="font-display text-5xl md:text-7xl text-white">{t.interior.title}</h2>
                    {/* Swapped Marketing Text into Subtitle position and style */}
                    <p className="text-xl text-gray-200 mt-2 max-w-3xl mx-auto font-light">
                        {t.interior.marketing}
                    </p>
                </div>

                {/* 
            3. PRODUCT NAVIGATION 
            - Reduced mobile margin since content is hidden
        */}
                <div className="container mx-auto px-0 lg:px-6 mb-0 lg:mb-12 relative z-20 w-full">

                    {/* DESKTOP VIEW (Horizontal Grid) - Hidden on Mobile/Tablet */}
                    <div className="hidden lg:flex flex-wrap justify-center gap-10 border-b border-white/10 pb-6">
                        {PRODUCTS.map((product, index) => {
                            const isActive = index === activeIndex;
                            return (
                                <button
                                    key={`nav-${index}`}
                                    onClick={() => scrollToProduct(index)}
                                    className={`group flex flex-col items-center gap-2 transition-all duration-300 outline-none`}
                                >
                                    <span className={`text-xs font-mono tracking-widest transition-colors duration-300 font-bold ${isActive ? 'text-spettro-orange' : 'text-gray-400 group-hover:text-gray-200'}`}>
                                        0{index + 1}
                                    </span>
                                    <span className={`font-display text-xl font-bold uppercase tracking-wide transition-all duration-300 ${isActive ? 'text-white scale-110' : 'text-white/40 group-hover:text-white/70'}`}>
                                        {product.type}
                                    </span>
                                    <span className={`h-0.5 bg-spettro-orange transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-1/2'}`} />
                                    <span className={`text-sm font-bold uppercase tracking-wider mt-1 transition-all duration-300 ${isActive ? 'text-spettro-orange opacity-100' : 'text-gray-600 opacity-60 group-hover:opacity-100 group-hover:text-gray-400'}`}>
                                        {product.name}
                                    </span>
                                </button>
                            )
                        })}
                    </div>

                </div>

                {/* 
            4. HORIZONTAL PRODUCT LIST WRAPPER
        */}
                <div className="relative w-full">

                    {/* Mobile Nav Arrows (Hidden on Desktop) */}
                    <div className="absolute inset-y-0 left-0 w-full pointer-events-none flex items-center justify-between z-30 md:hidden">
                        <button
                            onClick={(e) => { e.stopPropagation(); scrollPrev(); }}
                            className={`
                        w-10 h-20 bg-black/60 backdrop-blur-md border-y border-r border-white/20 
                        flex items-center justify-center text-white shadow-xl pointer-events-auto transition-all duration-300
                        ${activeIndex === 0 ? 'opacity-0 -translate-x-full' : 'opacity-100 translate-x-0'}
                    `}
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6"></polyline></svg>
                        </button>

                        <button
                            onClick={(e) => { e.stopPropagation(); scrollNext(); }}
                            className={`
                        w-10 h-20 bg-black/60 backdrop-blur-md border-y border-l border-white/20 
                        flex items-center justify-center text-white shadow-xl pointer-events-auto transition-all duration-300
                        ${activeIndex === PRODUCTS.length - 1 ? 'opacity-0 translate-x-full' : 'opacity-100 translate-x-0'}
                    `}
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
                        </button>
                    </div>

                    <div
                        ref={scrollContainerRef}
                        className={`
                flex overflow-x-auto pb-12 items-center w-full px-[4vw] md:px-[calc(50%-300px)] 
                scrollbar-none [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']
                ${isDraggingContainer ? 'cursor-grabbing snap-none' : 'cursor-grab snap-x snap-mandatory'}
            `}
                        onMouseDown={startContainerDrag}
                        onMouseMove={onContainerMove}
                        style={{ scrollBehavior: isDraggingContainer ? 'auto' : 'smooth' }}
                    >
                        {PRODUCTS.map((product, index) => {
                            const isActive = index === activeIndex;
                            const cardColor = COLORS[index % COLORS.length];

                            return (
                                <div
                                    key={`${product.id}-${index}`}
                                    ref={(el) => { cardsRef.current[index] = el; }}
                                    onClick={(e) => {
                                        if (!wasDragged) {
                                            scrollToProduct(index); // Auto-scroll on click
                                            setSelectedProduct(product);
                                            setModalColor(cardColor);
                                        }
                                    }}
                                    className={`
                        snap-center shrink-0 w-[92vw] md:w-[600px] h-[500px] md:h-[700px] relative transition-all duration-500 ease-out px-4 py-8 select-none
                        ${isActive ? 'scale-100 opacity-100 z-20' : 'scale-90 opacity-100 z-10 blur-0'}
                        cursor-pointer
                    `}
                                >

                                    <GlassCard className={`h-full w-full flex flex-col transition-all duration-500 ${isActive ? 'shadow-2xl border-white/40' : 'border-white/10'}`}>

                                        {/* TOP: Image Area (Mobile: 40%, Desktop: 55%) - Reduced desktop height to give text more space */}
                                        <div className="w-full relative bg-gradient-to-b from-gray-800 to-black overflow-hidden h-[40%] md:h-[55%]">

                                            {/* Background Texture */}
                                            <div className="absolute inset-0 bg-[url('/concrete-wall.webp')] opacity-20 mix-blend-overlay pointer-events-none z-10"></div>

                                            {/* 
                        Color Glow 
                        - Permanent color intensity regardless of active state
                        */}
                                            <div
                                                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full blur-3xl transition-all duration-1000 pointer-events-none z-0"
                                                style={{
                                                    backgroundColor: cardColor.hex,
                                                    opacity: 0.6, // Constant opacity
                                                    transform: `translate(-50%, -50%) ${isActive ? 'scale(1.5)' : 'scale(1.4)'}`
                                                }}
                                            />

                                            {/* Paint Bucket - Full Scale / Object Cover / No Padding */}
                                            <div className="relative z-0 w-full h-full">
                                                <img
                                                    src={product.image}
                                                    alt={product.name}
                                                    draggable={false}
                                                    className={`
                                    w-full h-full object-cover drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] 
                                    transition-transform duration-700 ease-out pointer-events-none
                                    ${isActive ? 'scale-100' : 'scale-110'}
                                `}
                                                />
                                            </div>
                                        </div>

                                        {/* BOTTOM: Info Area (Mobile: 60%, Desktop: 45%) - Increased desktop height */}
                                        <div className="p-5 md:p-8 flex flex-col justify-between bg-black/40 backdrop-blur-md border-t border-white/5 h-[60%] md:h-[45%] relative z-20">
                                            <div>
                                                {/* Reverted Title/Type */}
                                                <div className="mb-2">
                                                    <span className="font-mono text-spettro-orange text-xs uppercase tracking-widest font-bold">{product.type}</span>
                                                    <h3 className="font-display text-4xl text-white font-bold leading-none mt-1">{product.name}</h3>
                                                </div>

                                                <p className="font-bold tracking-wider uppercase text-sm mb-2 md:mb-4 text-white pt-2">{product.subhead}</p>
                                                <p className="text-gray-200 leading-relaxed line-clamp-2 text-sm md:text-base md:mb-6">{product.description}</p>
                                            </div>

                                            <div className="relative mt-2 md:mt-4 min-h-[40px] flex flex-col justify-end">
                                                {/* Specs Container */}
                                                <div className="grid grid-cols-2 gap-2 pr-8 md:pr-0 md:flex md:flex-wrap md:gap-2">
                                                    {product.specs.map((spec, i) => (
                                                        <span
                                                            key={i}
                                                            className="text-[10px] md:text-sm font-bold border border-white/20 rounded md:rounded-full px-2 py-1.5 md:px-3 md:py-1 text-white/90 uppercase text-center md:text-left truncate"
                                                            title={spec}
                                                        >
                                                            {spec}
                                                        </span>
                                                    ))}
                                                </div>

                                                {/* Tap Indicator Icon (Absolute on Mobile) */}
                                                <div className={`absolute bottom-0 right-0 md:hidden p-2 rounded-full border border-white/10 transition-colors duration-300 ${isActive ? 'bg-white text-black' : 'text-white'}`}>
                                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                                                </div>
                                            </div>
                                        </div>

                                    </GlassCard>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* 
            5. PRODUCT DETAILS MODAL 
        */}
                <ProductModal
                    product={selectedProduct}
                    colorSwatch={modalColor}
                    onClose={() => setSelectedProduct(null)}
                />
            </div>
        </section>
    );
};

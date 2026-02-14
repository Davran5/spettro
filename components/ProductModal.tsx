import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { Product, ColorSwatch } from '../types';
import { useLanguage } from '../LanguageContext';

interface ProductModalProps {
  product: Product | null;
  colorSwatch: ColorSwatch | null;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, colorSwatch, onClose }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const { t } = useLanguage();

  if (!product || !colorSwatch) return null;

  const gallery = product.gallery || [product.image];

  // Gallery Navigation
  const nextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % gallery.length);
  };
  const prevImage = () => {
    setActiveImageIndex((prev) => (prev - 1 + gallery.length) % gallery.length);
  };

  const modalContent = (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-0 md:p-6 overflow-hidden">
      
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/90 backdrop-blur-xl transition-opacity animate-fade-in"
        onClick={onClose}
      />
      
      {/* Modal Container */}
      <div className="relative w-full h-full md:max-w-6xl md:max-h-[90vh] bg-[#0c0c0c] border border-white/10 rounded-none md:rounded-2xl overflow-hidden flex flex-col md:flex-row shadow-2xl animate-scale-in">
        
        {/* Close Button Mobile */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-50 p-2 bg-black/50 rounded-full md:hidden text-white"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>

        {/* LEFT: Gallery Section (50%) - HIDDEN ON MOBILE */}
        <div className="hidden md:flex w-full md:w-1/2 h-full relative bg-black items-center justify-center group">
             {/* Main Image */}
             <div className="absolute inset-0">
                <img 
                    src={gallery[activeImageIndex]} 
                    alt={product.name}
                    className="w-full h-full object-cover transition-opacity duration-500"
                />
             </div>
             
             {/* Navigation Arrows */}
             {gallery.length > 1 && (
                <>
                    <button onClick={(e) => { e.stopPropagation(); prevImage(); }} className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/30 hover:bg-black/70 rounded-full text-white backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6"></polyline></svg>
                    </button>
                    <button onClick={(e) => { e.stopPropagation(); nextImage(); }} className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/30 hover:bg-black/70 rounded-full text-white backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
                         <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
                    </button>
                </>
             )}

             {/* Dots */}
             {gallery.length > 1 && (
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                    {gallery.map((_, idx) => (
                        <div 
                            key={idx} 
                            className={`w-1.5 h-1.5 rounded-full transition-all ${idx === activeImageIndex ? 'bg-white w-4' : 'bg-white/40'}`}
                        />
                    ))}
                </div>
             )}
        </div>

        {/* RIGHT: Info Section (50% desktop, 100% mobile) */}
        <div className="w-full md:w-1/2 h-full bg-[#0c0c0c] flex flex-col overflow-y-auto">
            {/* Scrollable Content */}
            <div className="p-8 md:p-12 pb-24">
                
                {/* Header */}
                <div className="flex justify-between items-start mb-2">
                     <div>
                        <span className="inline-block px-2 py-1 border border-white/20 rounded text-xs font-mono text-gray-300 mb-3 uppercase tracking-widest font-bold">
                            {product.type}
                        </span>
                        <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-2 leading-none">
                            {product.name}
                        </h2>
                        <p className="text-xl font-medium tracking-wide" style={{ color: colorSwatch.hex }}>
                            {product.subhead}
                        </p>
                     </div>
                     {/* Close Desktop */}
                     <button 
                        onClick={onClose} 
                        className="hidden md:block p-2 hover:bg-white/10 rounded-full transition-colors text-gray-300 hover:text-white"
                     >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                     </button>
                </div>

                <div className="h-px w-full bg-white/10 my-6"></div>

                {/* Description */}
                <p className="text-gray-200 leading-relaxed font-light mb-8 text-lg">
                    {product.description}
                </p>

                {/* Technical Data Sheet Table */}
                <h3 className="font-display text-lg uppercase tracking-widest text-white mb-6 flex items-center gap-3">
                    <span className="w-8 h-px bg-spettro-orange"></span>
                    {t.productModal?.techSheet || 'Technical Data Sheet'}
                </h3>

                <div className="bg-white/[0.03] border border-white/10 rounded-lg overflow-hidden mb-8">
                    {product.dataSheet ? (
                        <div className="divide-y divide-white/5">
                            {product.dataSheet.map((row, idx) => (
                                <div key={idx} className="grid grid-cols-2 px-6 py-4 hover:bg-white/[0.02] transition-colors">
                                    <span className="text-sm text-gray-300 font-mono uppercase tracking-wider">{row.label}</span>
                                    <span className="text-sm text-white font-medium text-right">{row.value}</span>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="p-6 text-center text-gray-400 text-sm italic">
                            Data sheet details coming soon.
                        </div>
                    )}
                </div>

            </div>
        </div>

      </div>

      <style>{`
        @keyframes scale-in {
            0% { opacity: 0; transform: scale(0.95); }
            100% { opacity: 1; transform: scale(1); }
        }
        @keyframes fade-in {
            0% { opacity: 0; }
            100% { opacity: 1; }
        }
        .animate-scale-in {
            animation: scale-in 0.4s ease-out forwards;
        }
        .animate-fade-in {
            animation: fade-in 0.4s ease-out forwards;
        }
      `}</style>
    </div>
  );

  return createPortal(modalContent, document.body);
};
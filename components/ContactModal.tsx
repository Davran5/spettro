import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { Button } from './Button';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Prevent rendering if not open
  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct mailto link
    const subject = `Inquiry from ${formData.name} - Spettro Lab`;
    const body = `${formData.message}\n\n----------------\nName: ${formData.name}\nEmail: ${formData.email}`;
    const mailtoLink = `mailto:info@spettro.uz?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Close modal
    onClose();
    
    // Reset form (optional, but good UX if they reopen)
    setFormData({ name: '', email: '', message: '' });
  };

  const modalContent = (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
      {/* Dimmed Backdrop with Blur */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity animate-fade-in"
        onClick={onClose}
      />
      
      {/* Modal Card */}
      <div className="relative z-10 w-full max-w-lg bg-[#0a0a0a] border border-white/10 shadow-[0_0_50px_rgba(255,87,34,0.15)] rounded-xl overflow-hidden animate-scale-in">
        
        {/* Top Decorative Line */}
        <div className="h-1 w-full bg-gradient-to-r from-spettro-orange via-red-500 to-spettro-orange" />
        
        <div className="p-8 md:p-10 relative">
          
          {/* Header */}
          <div className="flex justify-between items-start mb-8">
            <div>
              <h3 className="font-display text-3xl text-white uppercase tracking-wide">Contact Lab</h3>
              <p className="text-gray-400 text-sm mt-1 font-light">Direct line to Spettro R&D Facility.</p>
            </div>
            <button 
              onClick={onClose}
              className="group p-2 -mr-2 text-gray-500 hover:text-white transition-colors rounded-full hover:bg-white/5"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:rotate-90 transition-transform duration-300">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            
            <div className="space-y-2 group">
              <label className="text-[10px] font-mono text-spettro-orange uppercase tracking-[0.2em] group-focus-within:text-white transition-colors">Name</label>
              <input 
                type="text" 
                required
                className="w-full bg-white/5 border border-white/10 rounded-none p-3 text-white placeholder-gray-600 focus:outline-none focus:border-spettro-orange focus:bg-white/10 transition-all duration-300 font-sans"
                placeholder="Enter your name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>
            
            <div className="space-y-2 group">
              <label className="text-[10px] font-mono text-spettro-orange uppercase tracking-[0.2em] group-focus-within:text-white transition-colors">Email</label>
              <input 
                type="email" 
                required
                className="w-full bg-white/5 border border-white/10 rounded-none p-3 text-white placeholder-gray-600 focus:outline-none focus:border-spettro-orange focus:bg-white/10 transition-all duration-300 font-sans"
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>

            <div className="space-y-2 group">
              <label className="text-[10px] font-mono text-spettro-orange uppercase tracking-[0.2em] group-focus-within:text-white transition-colors">Message</label>
              <textarea 
                required
                rows={4}
                className="w-full bg-white/5 border border-white/10 rounded-none p-3 text-white placeholder-gray-600 focus:outline-none focus:border-spettro-orange focus:bg-white/10 transition-all duration-300 font-sans resize-none"
                placeholder="How can we assist you?"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              />
            </div>

            <div className="pt-4 flex justify-end">
              <Button type="submit" className="w-full md:w-auto">
                Send Request
              </Button>
            </div>
          </form>

          {/* Tech decoration corners */}
          <div className="absolute top-0 left-0 w-2 h-2 border-l border-t border-white/20"></div>
          <div className="absolute top-0 right-0 w-2 h-2 border-r border-t border-white/20"></div>
          <div className="absolute bottom-0 left-0 w-2 h-2 border-l border-b border-white/20"></div>
          <div className="absolute bottom-0 right-0 w-2 h-2 border-r border-b border-white/20"></div>
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
            animation: scale-in 0.3s ease-out forwards;
        }
        .animate-fade-in {
            animation: fade-in 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );

  return createPortal(modalContent, document.body);
};

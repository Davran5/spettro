import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  style?: React.CSSProperties;
}

export const GlassCard: React.FC<GlassCardProps> = ({ children, className = '', hoverEffect = false, style }) => {
  return (
    <div 
      className={`
        relative backdrop-blur-xl bg-white/5 border border-white/20 
        shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] 
        text-white overflow-hidden rounded-xl
        ${hoverEffect ? 'transition-all duration-500 hover:bg-white/10 hover:scale-[1.02] hover:shadow-[0_15px_40px_0_rgba(255,87,34,0.3)]' : ''}
        ${className}
      `}
      style={style}
    >
      {/* Glossy Reflection overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-50 pointer-events-none" />
      
      {/* Content Container - Fixed to take full height/width for layout control */}
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  );
};
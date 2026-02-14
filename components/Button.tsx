import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline';
}

export const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyles = "px-8 py-4 font-display font-bold uppercase tracking-wider transition-all duration-300 transform skew-x-[-10deg]";
  const variants = {
    primary: "bg-spettro-orange text-white hover:bg-white hover:text-spettro-orange shadow-[0_0_20px_rgba(255,87,34,0.5)] hover:shadow-[0_0_30px_rgba(255,255,255,0.8)]",
    outline: "border-2 border-white text-white hover:bg-white hover:text-black"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      <div className="skew-x-[10deg]">
        {children}
      </div>
    </button>
  );
};
import React from 'react';

//
const Button = ({ children, variant = 'primary', className = '', onClick }) => {
  const baseStyles = "px-8 py-3 rounded-xl font-semibold tracking-wide transition-all duration-300 active:scale-95";
  
  // Specific styles depending on the variant
  const variants = {
    primary: "bg-[#3B82F6] text-white hover:bg-[#2563EB] hover:shadow-[0_4px_20px_rgba(59,130,246,0.4)]",
    outline: "border-2 border-[#3B82F6] text-[#3B82F6] hover:bg-[#3B82F6] hover:text-white"
  };

  return (
    <button 
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
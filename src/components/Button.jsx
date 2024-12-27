import React from 'react';
import { FaArrowRight } from 'react-icons/fa6';

const Button = ({ children, onClick, className = '' }) => {
  return (
    <button
      onClick={onClick}
      className={`
        group
        relative
        px-8
        py-3
        mt-8
        text-lg
        font-bold
        text-white
        bg-gradient-to-r
        from-white/60
        to-white
        rounded-full
        shadow-lg
        shadow-white/30
        hover:shadow-white/50
        hover:scale-105
        hover:from-white/80
        hover:to-white
        transition-all
        duration-300
        ${className}
      `}
    >
      <span className="relative flex items-center gap-4">
        {children}
        <FaArrowRight className="transform group-hover:translate-x-2 group-hover:rotate-45 transition-all duration-300" />
      </span>
      <div className="absolute -inset-1 rounded-full blur-md bg-primary/30 group-hover:bg-primary/50 transition-all duration-300 -z-10"></div>
    </button>
  );
};

export default Button;

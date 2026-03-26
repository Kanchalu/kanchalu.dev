import React from 'react';
import { motion } from 'framer-motion'; 
import { FaArrowRight } from 'react-icons/fa';

const ServiceCard = ({ icon, title, description, isActive, onClick }) => {
  return (
    <motion.div 
      onClick={onClick}
      whileTap={{ scale: 0.98 }}
      className={`relative w-full min-h-[380px] lg:min-h-[420px] bg-[#1E293B] rounded-2xl p-8 flex flex-col items-center text-center cursor-pointer transition-all duration-500 overflow-hidden ${
        isActive ? 'ring-2 ring-[#3B82F6] shadow-2xl -translate-y-2' : 'hover:shadow-xl hover:-translate-y-1'
      }`}
    >
      {/* THE ROTATING LIGHT EFFECT */}
      <motion.div 
        animate={isActive ? { rotate: 360 } : { rotate: 0 }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        className={`absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_0deg,transparent_300deg,#3B82F6_360deg)] transition-opacity duration-500 ${
          isActive ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {/* INNER CONTENT WRAPPER (To keep text above the light) */}
      <div className="relative z-10 w-full h-full flex flex-col items-center">
        <div className={`text-4xl lg:text-5xl mb-6 transition-colors duration-300 ${isActive ? 'text-white' : 'text-[#3B82F6]'}`}>
          {icon}
        </div>

        <h3 className="text-xl lg:text-2xl font-bold font-poppins text-white mb-4">
          {title}
        </h3>

        <p className="text-[#94A3B8] font-inter leading-relaxed text-sm lg:text-base">
          {description}
        </p>

        <div className={`absolute left-0 right-0 flex justify-center transition-all duration-500 ease-in-out ${
          isActive ? 'bottom-8 opacity-100' : '-bottom-20 opacity-0'
        }`}>
          <a 
            href="https://wa.me/260764071616" 
            target="_blank" 
            rel="noreferrer"
            className="bg-[#3B82F6] text-white px-6 py-2 rounded-lg font-semibold flex items-center gap-2 hover:bg-[#2563EB] text-sm"
            onClick={(e) => e.stopPropagation()} 
          >
            Discuss Project <FaArrowRight />
          </a>
        </div>

        <div className={`absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#1E293B] to-transparent pointer-events-none transition-opacity duration-500 ${
          isActive ? 'opacity-100' : 'opacity-0'
        }`}></div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
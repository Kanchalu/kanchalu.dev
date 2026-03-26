import React from 'react';
import { motion } from 'framer-motion';

const Preloader = () => {
  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[999] bg-[#0F172A] flex flex-col items-center justify-center"
    >
      <div className="relative">
        {/* My Outer Glowing Ring */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-32 h-32 rounded-full border-2 border-[#3B82F6] blur-sm"
        />
        
        {/* My Central Logo Branding */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl font-bold font-poppins text-white tracking-widest"
          >
            GIVEN<span className="text-[#3B82F6]">.</span>
          </motion.span>
        </div>
      </div>

      {/* My Technical Loading Text */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-8 flex flex-col items-center gap-2"
      >
        <span className="text-[#475569] text-[10px] uppercase tracking-[0.3em] font-bold">
          System Initializing
        </span>
        <div className="w-48 h-[2px] bg-[#1E293B] rounded-full overflow-hidden">
          <motion.div 
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            className="w-full h-full bg-[#3B82F6]"
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Preloader;
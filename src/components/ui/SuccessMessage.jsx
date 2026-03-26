import React from 'react';
import { motion } from 'framer-motion';

const SuccessMessage = ({ fullName, email, onReset }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="w-full bg-white p-10 rounded-2xl border-2 border-[#3B82F6] shadow-xl text-center flex flex-col items-center justify-center min-h-[450px]"
    >
      {/* My Custom SVG Success Icon - High Standard & Manual */}
      <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mb-8 border border-green-100">
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
        </svg>
      </div>

      <h3 className="text-3xl font-bold text-[#0F172A] font-poppins mb-4">Submission Received</h3>
      
      <p className="text-[#64748B] max-w-sm leading-relaxed mb-10 font-inter">
        Thank you, {fullName}. Your technical request has been successfully logged into my system. I will review your requirements and reach out to you at {email} shortly.
      </p>

      {/* My Resized Back Button */}
      <button 
        onClick={onReset}
        className="text-[#3B82F6] font-bold text-sm uppercase tracking-widest hover:text-[#2563EB] transition-colors flex items-center gap-2"
      >
        <span className="text-xl">←</span> Return to Form
      </button>
    </motion.div>
  );
};

export default SuccessMessage;
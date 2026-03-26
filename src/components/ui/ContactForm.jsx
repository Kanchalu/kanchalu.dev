import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SuccessMessage from './SuccessMessage'; // My new decoupled component

const ContactForm = () => {
  // 1. My Professional States
  const [formData, setFormData] = useState({ fullName: "", email: "", projectType: "", message: "" });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // 2. My Meta Capstone Validation Logic
  const validateForm = () => {
    let tempErrors = {};
    const requiredMsg = "This field is required.";

    if (!formData.fullName.trim()) tempErrors.fullName = requiredMsg;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      tempErrors.email = requiredMsg;
    } else if (!emailRegex.test(formData.email)) {
      tempErrors.email = "Please enter a valid professional email.";
    }
    if (!formData.projectType || formData.projectType === "Select Project Type") tempErrors.projectType = requiredMsg;
    if (!formData.message.trim()) tempErrors.message = requiredMsg;

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) setErrors({ ...errors, [name]: null });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsLoading(true);
      // Simulating a high-standard system delay (2.5 seconds)
      setTimeout(() => {
        setIsLoading(false);
        setIsSubmitted(true);
      }, 2500);
    }
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setFormData({ fullName: "", email: "", projectType: "", message: "" });
  };

  return (
    <div className="w-full relative min-h-[450px]">
      <AnimatePresence mode="wait">
        {!isSubmitted ? (
          <motion.form 
            key="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, x: -20 }}
            className="flex flex-col gap-6 w-full"
          >
            {/* My Input Rows */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <input 
                  name="fullName" value={formData.fullName} onChange={handleChange}
                  type="text" placeholder="Full Name" 
                  className={`bg-white border ${errors.fullName ? 'border-red-500 ring-1 ring-red-500' : 'border-[#E2E8F0]'} rounded-xl p-4 text-[#0F172A] focus:border-[#3B82F6] outline-none transition-all shadow-sm font-inter`}
                />
                {errors.fullName && <span className="text-red-500 text-[10px] font-bold uppercase tracking-tight ml-2">{errors.fullName}</span>}
              </div>

              <div className="flex flex-col gap-2">
                <input 
                  name="email" value={formData.email} onChange={handleChange}
                  type="email" placeholder="Professional Email" 
                  className={`bg-white border ${errors.email ? 'border-red-500 ring-1 ring-red-500' : 'border-[#E2E8F0]'} rounded-xl p-4 text-[#0F172A] focus:border-[#3B82F6] outline-none transition-all shadow-sm font-inter`}
                />
                {errors.email && <span className="text-red-500 text-[10px] font-bold uppercase tracking-tight ml-2">{errors.email}</span>}
              </div>
            </div>
            
            <div className="flex flex-col gap-2">
              <select 
                name="projectType" value={formData.projectType} onChange={handleChange}
                className={`bg-white border ${errors.projectType ? 'border-red-500 ring-1 ring-red-500' : 'border-[#E2E8F0]'} rounded-xl p-4 text-[#64748B] focus:border-[#3B82F6] outline-none transition-all shadow-sm font-inter`}
              >
                <option>Select Project Type</option>
                <option>Full-Stack Web Development</option>
                <option>System Architecture (LMS/Governance)</option>
                <option>Technical ICT Consultation</option>
              </select>
              {errors.projectType && <span className="text-red-500 text-[10px] font-bold uppercase tracking-tight ml-2">{errors.projectType}</span>}
            </div>

            <div className="flex flex-col gap-2">
              <textarea 
                name="message" value={formData.message} onChange={handleChange}
                rows="5" placeholder="Describe your project requirements..." 
                className={`bg-white border ${errors.message ? 'border-red-500 ring-1 ring-red-500' : 'border-[#E2E8F0]'} rounded-xl p-4 text-[#0F172A] focus:border-[#3B82F6] outline-none transition-all shadow-sm font-inter`}
              ></textarea>
              {errors.message && <span className="text-red-500 text-[10px] font-bold uppercase tracking-tight ml-2">{errors.message}</span>}
            </div>
            
            {/* My High-Standard Submit Button with SVG Spinner */}
            <motion.button 
              type="submit"
              disabled={isLoading}
              className={`bg-[#3B82F6] text-white font-bold py-3.5 px-12 rounded-xl shadow-[0_10px_20px_rgba(59,130,246,0.15)] transition-all uppercase tracking-widest text-xs w-full md:w-max self-start flex items-center justify-center min-w-[160px] ${isLoading ? 'opacity-70 cursor-not-allowed' : 'hover:bg-[#2563EB]'}`}
            >
              {isLoading ? (
                <div className="flex items-center gap-3">
                  <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span>Processing...</span>
                </div>
              ) : "Submit"}
            </motion.button>
          </motion.form>
        ) : (
          /* Using my separate SuccessMessage component */
          <SuccessMessage 
            fullName={formData.fullName} 
            email={formData.email} 
            onReset={resetForm} 
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default ContactForm;
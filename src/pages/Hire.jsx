import React, { useEffect } from 'react';
import ContactForm from '../components/ui/ContactForm';

const Hire = () => {
  // This ensures the browser scrolls to the top when the page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full min-h-screen bg-[#0F172A] pt-[120px] pb-24 px-6 flex justify-center items-start">
      <div className="w-full max-w-3xl mt-8">
        
        {/* Simple, professional header for the form page */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold font-poppins text-white mb-4">
            Initialize <span className="text-[#3B82F6]">Deployment</span>
          </h1>
          <p className="text-[#94A3B8] font-inter text-lg">
            Submit your technical requirements below to begin the briefing process.
          </p>
        </div>

        {/* Your Hex Softwares / Meta Capstone Form */}
        <ContactForm />
        
      </div>
    </div>
  );
};

export default Hire;
import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import ContactForm from '../ui/ContactForm'; // Importing my extracted form component

const GetStarted = () => {
  return (
    <section id="contact" className="w-full bg-[#F8FAFC] py-20 lg:py-32 border-t border-[#E2E8F0]">
      {/* Main Container: Keeping max-width and lg:px-12 for perfect alignment */}
      <div className="w-full max-w-[1464px] mx-auto px-6 lg:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* LEFT COLUMN (7 Cols): The Professional Form
              I'm adding 'lg:pl-12' to keep the content aligned with my Figma grid.
          */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="col-span-1 lg:col-span-7 lg:pl-12"
          >
            <h4 className="text-[#3B82F6] font-bold tracking-[0.2em] uppercase text-sm mb-4">Engagement</h4>
            <h2 className="text-4xl lg:text-5xl font-bold font-poppins text-[#0F172A] mb-8">
              Start a <span className="text-[#3B82F6]">Consultation</span>
            </h2>
            
            <ContactForm />
          </motion.div>

          {/* RIGHT COLUMN (5 Cols): Professional Business Details
              I updated the card to white with a subtle shadow to match the 'Services' feel.
          */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="col-span-1 lg:col-span-5 lg:pr-12 flex flex-col gap-8"
          >
            <div className="bg-white p-8 rounded-2xl border border-[#E2E8F0] shadow-sm group">
              <h3 className="text-2xl font-bold text-[#0F172A] mb-8 font-poppins">Professional Channels</h3>
              
              <div className="flex flex-col gap-6">
                <a href="https://wa.me/260764071616" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-[#475569] hover:text-[#3B82F6] transition-all group">
                  <div className="p-3 bg-[#F1F5F9] rounded-lg text-[#3B82F6] group-hover:bg-[#3B82F6] group-hover:text-white transition-all">
                    <FaWhatsapp size={20} />
                  </div>
                  <span className="font-semibold">+260 764 071 616</span>
                </a>
                <div className="flex items-center gap-4 text-[#475569]">
                  <div className="p-3 bg-[#F1F5F9] rounded-lg text-[#3B82F6]"><FaEnvelope size={20} /></div>
                  <span className="font-medium">kanchalugiven@gmail.com</span>
                </div>
                <div className="flex items-center gap-4 text-[#475569]">
                  <div className="p-3 bg-[#F1F5F9] rounded-lg text-[#3B82F6]"><FaMapMarkerAlt size={20} /></div>
                  <span className="font-medium">Kaoma, Western Province, Zambia</span>
                </div>
                <div className="flex items-center gap-4 text-[#475569]">
                  <div className="p-3 bg-[#F1F5F9] rounded-lg text-[#3B82F6]"><FaClock size={20} /></div>
                  <span className="font-medium">Mon — Sat, 08:00 - 18:00 CAT</span>
                </div>
              </div>
            </div>

            {/* My Professional Philosophy Quote */}
            <div className="border-l-4 border-[#3B82F6] pl-6 py-2">
              <p className="text-[#64748B] text-sm leading-relaxed italic font-inter">
                Engineering scalable solutions for the modern web, grounded in industrial discipline and technical excellence.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default GetStarted;
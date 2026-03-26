import React from 'react';
import { motion } from 'framer-motion'; 
import Button from '../ui/Button';
import { FaDownload, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import profileImage from '../../assets/given.jpg'; 

const Hero = () => {
  // Defining my animation settings here for clean, reusable code
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="home" className="w-full max-w-[1464px] mx-auto px-6 lg:px-12 py-12 lg:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      
      <motion.div 
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.2 }}
        className="col-span-1 lg:col-span-7 px-4 lg:pl-12 flex flex-col items-center lg:items-start text-center lg:text-left gap-6"
      >
        
        <motion.div 
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1E293B] border border-[#334155] text-xs lg:text-sm font-medium text-[#94A3B8]"
        >
          <span className="w-2 h-2 rounded-full bg-[#3B82F6] animate-pulse"></span>
          Meta-Certified Developer
        </motion.div>

        <motion.h1 
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-7xl font-bold font-poppins text-white leading-tight"
        >
          Hi, I'm <span className="text-[#3B82F6]">Given Kanchalu</span>
        </motion.h1>
        
        <motion.h2 
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
          className="text-xl md:text-2xl lg:text-4xl font-semibold text-[#E2E8F0]"
        >
          Full-Stack Web Developer
        </motion.h2>

        <motion.p 
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
          className="text-base lg:text-lg text-[#94A3B8] font-inter max-w-2xl leading-relaxed"
        >
          I build modern, scalable, and human-centered digital experiences. Specializing in React, Django, and creating software that drives real business value.
        </motion.p>

        <motion.div 
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center lg:justify-start items-center gap-4 mt-4"
        >
          <Button variant="primary">Hire Me</Button>
          <Button variant="outline" className="flex items-center gap-2">
            My CV <FaDownload className="text-sm" />
          </Button>
        </motion.div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="col-span-1 lg:col-span-5 px-4 lg:pr-12 flex flex-col items-center lg:items-end gap-8"
      >
        <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[450px] lg:h-[450px]">
          <div className="absolute inset-0 bg-[#3B82F6] rounded-full blur-[60px] lg:blur-[100px] opacity-20"></div>
          <div className="relative z-10 w-full h-full rounded-2xl border-2 border-[#1E293B] overflow-hidden shadow-2xl">
            <img src={profileImage} alt="Given Kanchalu" className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="flex items-center gap-6">
          <a href="#" className="text-[#94A3B8] hover:text-[#3B82F6] text-2xl transition-all"><FaGithub /></a>
          <a href="#" className="text-[#94A3B8] hover:text-[#3B82F6] text-2xl transition-all"><FaLinkedin /></a>
          <a href="#" className="text-[#94A3B8] hover:text-[#3B82F6] text-2xl transition-all"><FaEnvelope /></a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
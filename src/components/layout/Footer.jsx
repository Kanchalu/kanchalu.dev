import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedinIn, FaWhatsapp, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // My Navigation Links for consistency across the site
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About Me", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];

  // My Professional Socials
  const socials = [
    { icon: <FaGithub />, href: "#", label: "GitHub" },
    { icon: <FaLinkedinIn />, href: "#", label: "LinkedIn" },
    { icon: <FaWhatsapp />, href: "https://wa.me/260764071616", label: "WhatsApp" }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#0F172A] pt-20 pb-10 border-t border-[#1E293B] flex justify-center overflow-hidden">
      <div className="w-full max-w-[1464px] px-6 lg:px-12">
        
        {/* My Main Footer Grid (12 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 mb-20">
          
          {/* 1. BRANDING & VISION (4 Columns) */}
          <div className="md:col-span-5 lg:col-span-4 flex flex-col gap-6">
            <div className="text-3xl font-bold font-poppins text-white tracking-wide">
              Kanchalu<span className="text-[#3B82F6]">.Dev</span>
            </div>
            <p className="text-[#94A3B8] text-lg leading-relaxed font-inter max-w-sm">
              Architecting scalable digital solutions and high-performance systems. Grounded in engineering discipline and focused on the future of ICT in Zambia.
            </p>
            <div className="flex gap-4 mt-2">
              {socials.map((social, index) => (
                <motion.a 
                  key={index}
                  href={social.href}
                  whileHover={{ y: -5, color: "#3B82F6" }}
                  className="w-12 h-12 bg-[#1E293B] rounded-xl flex items-center justify-center text-white border border-[#334155] transition-all"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* 2. QUICK NAVIGATION (3 Columns) */}
          <div className="md:col-span-3 lg:col-span-3 flex flex-col gap-6 lg:pl-12">
            <h4 className="text-white font-bold text-lg font-poppins">Navigation</h4>
            <ul className="flex flex-col gap-4">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-[#94A3B8] hover:text-[#3B82F6] transition-colors font-medium">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. CONTACT & LOCATION (4 Columns) */}
          <div className="md:col-span-4 lg:col-span-5 flex flex-col gap-6">
            <h4 className="text-white font-bold text-lg font-poppins">Get In Touch</h4>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col">
                <span className="text-[#475569] text-xs uppercase font-bold tracking-widest mb-1">Email</span>
                <a href="mailto:kanchalugiven@gmail.com" className="text-[#94A3B8] hover:text-[#3B82F6] transition-all font-medium">
                  kanchalugiven@gmail.com
                </a>
              </div>
              <div className="flex flex-col">
                <span className="text-[#475569] text-xs uppercase font-bold tracking-widest mb-1">Location</span>
                <p className="text-[#94A3B8] font-medium">
                  Kaoma, Western Province, Zambia
                </p>
              </div>
              <div className="flex flex-col">
                <span className="text-[#475569] text-xs uppercase font-bold tracking-widest mb-1">Status</span>
                <p className="text-[#3B82F6] font-bold">
                  Open for Full-Stack Opportunities
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* 4. COPYRIGHT AREA: The Final Professional Stamp */}
        <div className="pt-10 border-t border-[#1E293B] flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[#475569] text-sm font-medium">
            © {currentYear} <span className="text-[#94A3B8]">Kanchalu Technologies</span>. All rights reserved.
          </div>
          
          <div className="flex items-center gap-8 text-[#475569] text-sm font-medium">
            <span className="flex items-center gap-2 italic">
              Built with <span className="text-[#3B82F6] opacity-80 underline">React & Django</span>
            </span>
            {/* Scroll to Top Circle */}
            <motion.button 
              onClick={scrollToTop}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 bg-[#3B82F6] text-white rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.3)]"
            >
              <FaArrowUp size={14} />
            </motion.button>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi'; // High-standard modern icons
import Button from '../ui/Button';

const Header = () => {
  // 1. My Navigation State: Tracking if the mobile menu is open
  const [isOpen, setIsOpen] = useState(false);

  // My Navigation Links for easy maintenance
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Me', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="w-full fixed left-0 right-0 top-0 z-[100] bg-[#0F172A]/90 backdrop-blur-md py-8 border-b border-[#1E293B] flex justify-center">
      
      {/* My 12-Column Grid Container (Max Width 1464px to match Figma) */}
      <div className="w-full max-w-[1464px] px-6 lg:px-12 grid grid-cols-12 gap-6 items-center">
        
        {/* 1. LOGO: Stays visible on all devices */}
        <div className="col-span-8 lg:col-span-3 pl-4 lg:pl-12 text-3xl font-bold font-poppins text-white tracking-wide cursor-pointer">
          Kanchalu<span className="text-[#3B82F6]">.Dev</span>
        </div>

        {/* 2. DESKTOP NAV: Hidden on mobile, visible on LG screens (Columns 4 to 10) */}
        <nav className="hidden lg:flex col-span-7 justify-end pr-4 lg:pr-12 gap-10 text-[17px] font-medium">
          {navLinks.map((link, index) => (
            <a 
              key={index} 
              href={link.href} 
              className={`${link.name === 'Home' ? 'text-[#3B82F6]' : 'text-[#94A3B8]'} hover:text-white transition-colors duration-300`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* 3. DESKTOP BUTTON: Hidden on mobile (Columns 11 to 12) */}
        <div className="hidden lg:flex col-span-2 justify-end pr-8 lg:pr-12">
          <Button variant="primary">
            Hire Me
          </Button>
        </div>

        {/* 4. MOBILE HAMBURGER: Only visible on small screens */}
        <div className="col-span-4 lg:hidden flex justify-end pr-4">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-[#3B82F6] focus:outline-none"
          >
            {isOpen ? <HiX size={32} /> : <HiMenuAlt3 size={32} />}
          </button>
        </div>

      </div>

      {/* 5. MOBILE MENU OVERLAY: High-standard motional flow drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 top-[90px] w-full bg-[#0F172A] z-[90] lg:hidden flex flex-col items-center pt-16 px-6 overflow-hidden"
          >
            <div className="flex flex-col gap-8 text-center w-full">
              {navLinks.map((link, index) => (
                <motion.a 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-bold text-white hover:text-[#3B82F6] transition-all font-poppins"
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="pt-6"
              >
                <Button variant="primary" className="w-full">
                  Hire Me
                </Button>
              </motion.div>
            </div>

            {/* Subtle Business Branding in Mobile Menu */}
            <div className="mt-auto mb-32 text-[#475569] text-xs tracking-widest uppercase">
              Kanchalu Technologies © 2026
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
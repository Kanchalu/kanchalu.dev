import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi'; 
import Button from '../ui/Button';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation(); 

  // Navigation Links using 'id' to map to your homepage sections
  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About Me', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Services', id: 'services' },
    { name: 'Contact', id: 'contact' },
  ];

  // Bulletproof cross-page scrolling
  const handleNavClick = (e, targetId) => {
    e.preventDefault(); 
    setIsOpen(false); 

    if (location.pathname !== '/') {
      // If on the Hire page, go to Home first
      navigate('/');
      // Wait half a second for the Home page to render, then scroll down
      setTimeout(() => {
        document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
      }, 500); 
    } else {
      // If already on Home page, just scroll immediately
      document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="w-full fixed left-0 right-0 top-0 z-[100] bg-[#0F172A]/90 backdrop-blur-md py-8 border-b border-[#1E293B] flex justify-center">
      <div className="w-full max-w-[1464px] px-6 lg:px-12 grid grid-cols-12 gap-6 items-center">
        
        {/* 1. LOGO: Wrapped in Link to guarantee it routes home */}
        <Link 
          to="/" 
          onClick={() => window.scrollTo(0, 0)}
          className="col-span-8 lg:col-span-3 pl-4 lg:pl-12 text-3xl font-bold font-poppins text-white tracking-wide"
        >
          Kanchalu<span className="text-[#3B82F6]">.Dev</span>
        </Link>

        {/* 2. DESKTOP NAV */}
        <nav className="hidden lg:flex col-span-7 justify-end pr-4 lg:pr-12 gap-10 text-[17px] font-medium">
          {navLinks.map((link, index) => (
            <a 
              key={index} 
              href={`/#${link.id}`}
              onClick={(e) => handleNavClick(e, link.id)}
              className={`${link.name === 'Home' ? 'text-[#3B82F6]' : 'text-[#94A3B8]'} hover:text-white transition-colors duration-300 cursor-pointer`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* 3. DESKTOP BUTTON: Wrapped in a native Link */}
        <div className="hidden lg:flex col-span-2 justify-end pr-8 lg:pr-12">
          <Link to="/hire">
            <Button variant="primary">
              Hire Me
            </Button>
          </Link>
        </div>

        {/* 4. MOBILE HAMBURGER */}
        <div className="col-span-4 lg:hidden flex justify-end pr-4">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-[#3B82F6] focus:outline-none"
          >
            {isOpen ? <HiX size={32} /> : <HiMenuAlt3 size={32} />}
          </button>
        </div>

      </div>

      {/* 5. MOBILE MENU OVERLAY */}
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
                  href={`/#${link.id}`}
                  onClick={(e) => handleNavClick(e, link.id)}
                  className="text-2xl font-bold text-white hover:text-[#3B82F6] transition-all font-poppins cursor-pointer"
                >
                  {link.name}
                </motion.a>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="pt-6 w-full"
              >
                {/* Mobile Button: Closes menu AND routes via Link */}
                <Link to="/hire" onClick={() => setIsOpen(false)} className="block w-full">
                  <Button variant="primary" className="w-full">
                    Hire Me
                  </Button>
                </Link>
              </motion.div>
            </div>

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
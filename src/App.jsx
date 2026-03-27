import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

// --- NEW FEATURE: My React Router Imports ---
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import About from './components/sections/About';
import GetStarted from './components/sections/GetStarted';
import Footer from './components/layout/Footer';
import Preloader from './components/ui/Preloader'; 
import Dashboard from './pages/Dashboard';
import Hire from './pages/Hire'; 

function App() {
  // 1. My System State: Tracking the initial boot-up of the application
  const [isLoading, setIsLoading] = useState(true);

  // 2. My Initialization Logic: Simulating a professional system check
  useEffect(() => {
    // A 2.5s delay ensures the user sees the high-standard pulse effect
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    // 3. My React Router setup: Wrapping the entire app so routing works everywhere
    <Router>
      <div className="min-h-screen w-full bg-[#0F172A] flex flex-col items-center overflow-x-hidden relative">
        
        {/* 4. My Entry Preloader: Using AnimatePresence for a smooth fade-out exit */}
        <AnimatePresence>
          {isLoading && <Preloader />}
        </AnimatePresence>

        {!isLoading && (
          <>
            {/* 5. My Top Loading Bar: A subtle 2026-style progress indicator 
                   It glows at the very top of the screen during the first render.
            */}
            <motion.div 
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="fixed top-0 left-0 right-0 h-[3px] bg-[#3B82F6] z-[101] origin-left shadow-[0_0_15px_#3B82F6]"
            />

            <Header />
            
            {/* I'm using 'flex flex-col' to ensure sections stack vertically.
                The 'pt-[90px]' handles the fixed header on mobile, 
                while 'lg:pt-[120px]' provides the high-standard spacing on desktop.
            */}
            <main className="w-full flex flex-col pt-[90px] lg:pt-[120px]">
              
              {/* 6. My Routing Engine: Switching between my main site and my admin panel */}
              <Routes>
                
                {/* Route 1: My Main Portfolio Page */}
                <Route path="/" element={
                  <>
                    <Hero />
                    <Services />
                    <Skills />
                    <Projects />
                    <About />
                    <GetStarted />
                  </>
                } />

                {/* Route 2: My secure Client Dashboard page for reviewing proposals */}
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/hire" element={<Hire />} />
  
              </Routes>

            </main>
            
            <Footer />
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
import React, { useState } from 'react';
import { motion } from 'framer-motion'; // Importing motion for the scroll reveal flow
import ServiceCard from '../ui/ServiceCard';
import { FaCode, FaShieldAlt, FaBolt, FaDatabase, FaMicrochip } from 'react-icons/fa';
import { MdSpaceDashboard } from 'react-icons/md';

const Services = () => {
  const [activeCardIndex, setActiveCardIndex] = useState(null);

  const servicesData = [
    { icon: <FaCode />, title: "Web Development", description: "Building high-performance, secure web applications using React and Django." },
    { icon: <FaShieldAlt />, title: "Google IT Support", description: "Providing professional technical support, networking, and security solutions." },
    { icon: <FaBolt />, title: "Electrical Technology", description: "Expert industrial and domestic wiring and installations with safe power solutions." },
    { icon: <FaDatabase />, title: "Database Management", description: "Designing robust data structures and secure backend protocols for high-traffic platforms." },
    { icon: <FaMicrochip />, title: "Digital Solutions", description: "Delivering end-to-end digital tools tailored to your specific goals and workflows." },
    { icon: <MdSpaceDashboard />, title: "UI/UX Design", description: "Crafting intuitive, human-centered interfaces that prioritize the user journey." }
  ];

  return (
    <section id="services" className="w-full bg-[#F8FAFC] py-16 lg:py-32 border-t border-[#E2E8F0]">
      <div className="w-full max-w-[1464px] mx-auto px-6 lg:px-12">
        
        {/* My Section Header 
            I'm using 'whileInView' so this text fades up the moment the user scrolls to it.
        */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12 lg:mb-20 px-4"
        >
          <h2 className="text-3xl lg:text-5xl font-bold font-poppins text-[#0F172A] mb-4 lg:mb-6">
            My Services
          </h2>
          <p className="text-base lg:text-lg text-[#475569] font-inter leading-relaxed">
            Innovative ICT and electrical solutions tailored to your digital needs. 
            I deliver excellence across every pillar of Kanchalu Technologies.
          </p>
        </motion.div>

        {/* My Responsive Grid
            I'm wrapping each card in a motion.div to create a staggered entrance.
            The 'delay: index * 0.1' ensures card 1 pops up first, then card 2, then card 3.
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 px-4 lg:px-12">
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ServiceCard 
                icon={service.icon}
                title={service.title}
                description={service.description}
                isActive={activeCardIndex === index}
                onClick={() => setActiveCardIndex(activeCardIndex === index ? null : index)}
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
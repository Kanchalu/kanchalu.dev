import React from 'react';
import { motion } from 'framer-motion';
import profileImage from '../../assets/given.jpg'; 
import { FaCode, FaGraduationCap, FaServer } from 'react-icons/fa';

const About = () => {
  // My Key Milestones: Focused on my transition to Full-Stack Engineering
  const milestones = [
    { 
      icon: <FaCode className="text-[#3B82F6]" />, 
      title: "Software Engineer", 
      desc: "Intern at Hex Softwares Pvt. Ltd." 
    },
    { 
      icon: <FaGraduationCap className="text-[#3B82F6]" />, 
      title: "Academic Path", 
      desc: "BSc in ICT, Rockview University" 
    },
    { 
      icon: <FaServer className="text-[#3B82F6]" />, 
      title: "System Architect", 
      desc: "Architect of PUNZILA & KaluLearn" 
    }
  ];

  return (
    <section id="about" className="w-full bg-[#0F172A] py-20 lg:py-32 border-t border-[#1E293B]">
      {/* My Main Container: Padding matches Hero and Projects for perfect alignment */}
      <div className="w-full max-w-[1464px] mx-auto px-6 lg:px-12">
        
        {/* My 12-Column Grid: Gap matches our previous layout standards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* My Visual Column (Figma Style) 
              Added 'lg:pl-12' to make sure it aligns with my text in the Hero section above.
          */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="col-span-1 lg:col-span-5 px-4 lg:pl-12 relative"
          >
            <div className="relative w-full aspect-square max-w-[450px] mx-auto">
              {/* My Decorative Figma Border Accents */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-[#3B82F6] opacity-50" />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-[#3B82F6] opacity-50" />
              
              {/* My Profile Image Container */}
              <div className="w-full h-full rounded-2xl overflow-hidden border-2 border-[#1E293B] shadow-2xl relative z-10">
                <img 
                  src={profileImage} 
                  alt="Given Kanchalu" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>

              {/* My Background Ambient Glow */}
              <div className="absolute inset-0 bg-[#3B82F6] blur-[120px] opacity-10 -z-10" />
            </div>
          </motion.div>

          {/* My Story Column 
              Added 'lg:pr-12' so the text doesn't hit the right edge of the grid.
          */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="col-span-1 lg:col-span-7 px-4 lg:pr-12 flex flex-col gap-8"
          >
            <div>
              <h4 className="text-[#3B82F6] font-bold tracking-[0.2em] uppercase text-sm mb-4">The Developer Journey</h4>
              <h2 className="text-4xl lg:text-5xl font-bold font-poppins text-white leading-tight">
                About <span className="text-[#3B82F6]">Me</span>
              </h2>
            </div>

            <p className="text-lg text-[#94A3B8] font-inter leading-relaxed">
              I am a Full-Stack Developer currently completing a Bachelor of Science in ICT at Rockview University. My technical leadership and engineering mindset are currently being sharpened through a Full-Stack Web Development Internship at Hex Softwares Pvt. Ltd., where I focus on building and deploying scalable, high-standard digital products for complex environments.
            </p>

            <p className="text-lg text-[#94A3B8] font-inter leading-relaxed">
              Equipped with world-class certifications from Meta, Amazon, and Google, I specialize in the React and Django ecosystem. I translate this deep technical proficiency into flagship systems like PUNZILA and KaluLearn. Leveraging 7+ years of professional Electrical Technology, I bring a unique cross-disciplinary discipline to software architecture—ensuring every system I build is as secure, robust, and efficient as the industrial infrastructure I once wired.
            </p>

            {/* My Quick Stats Grid: Stays responsive across all screens */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
              {milestones.map((item, index) => (
                <div key={index} className="bg-[#1E293B] p-6 rounded-xl border border-[#334155] hover:border-[#3B82F6]/50 transition-all group">
                  <div className="text-2xl mb-3 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h5 className="text-white font-bold text-sm mb-1">{item.title}</h5>
                  <p className="text-[#94A3B8] text-xs leading-tight">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaReact, FaPython, FaHtml5, FaJs, FaGitAlt, FaFigma, FaAws, FaGraduationCap 
} from 'react-icons/fa';
import { SiDjango, SiTailwindcss, SiMysql, SiGooglecloud } from 'react-icons/si';
import { GiElectric } from 'react-icons/gi';

// 1. HIGH-STANDARD ANIMATED SKILL BAR
const SkillBar = ({ name, icon, percentage, isActive }) => {
  return (
    <div className="w-full mb-6 group/bar">
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-2 text-white">
          <motion.span 
            animate={isActive ? { rotate: [0, -10, 10, 0], scale: 1.2 } : {}}
            className="text-xl text-[#3B82F6]"
          >
            {icon}
          </motion.span>
          <span className="text-sm font-semibold font-inter uppercase tracking-wider">{name}</span>
        </div>
        <motion.span 
          animate={isActive ? { opacity: 1, scale: 1.1 } : { opacity: 0.5 }}
          className="text-xs font-bold text-[#3B82F6]"
        >
          {percentage}%
        </motion.span>
      </div>
      
      <div className="w-full h-3 bg-[#0F172A] rounded-full overflow-hidden border border-[#334155] relative shadow-inner">
        {/* THE PROGRESS FILL 
            When isActive is true, it runs a sequence: 0% -> Percentage -> (slight pulse).
        */}
        <motion.div 
          initial={{ width: 0 }}
          animate={isActive ? { 
            width: `${percentage}%`,
          } : { width: "0%" }}
          transition={{ 
            duration: 1.2, 
            ease: "circOut",
          }}
          className="h-full bg-gradient-to-r from-[#1E40AF] via-[#3B82F6] to-[#60A5FA] rounded-full relative"
        >
          {/* THE "LIGHTING FLOW" HEAD 
              A glowing 'comet' at the tip of the progress bar.
          */}
          <motion.div 
            animate={isActive ? { opacity: [0, 1, 0], x: ['0%', '100%'] } : { opacity: 0 }}
            transition={{ duration: 1.2, repeat: isActive ? Infinity : 0, repeatDelay: 0.5 }}
            className="absolute top-0 right-0 h-full w-8 bg-white/40 blur-md rounded-full"
          />

          {/* INTERNAL SHIMMER */}
          <motion.div 
            animate={{ x: ['-100%', '200%'] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
          />
        </motion.div>
      </div>
    </div>
  );
};

const Skills = () => {
  // State to track which card is "Tapped/Active"
  const [activeCategory, setActiveCategory] = useState(null);

  const skillCategories = [
    {
      id: "frontend",
      title: "Frontend Mastery",
      subtitle: "Meta Certified Stack",
      skills: [
        { name: "React.js", icon: <FaReact />, level: 95 },
        { name: "JavaScript", icon: <FaJs />, level: 90 },
        { name: "Tailwind CSS", icon: <SiTailwindcss />, level: 95 },
        { name: "UI/UX Design", icon: <FaFigma />, level: 85 },
      ]
    },
    {
      id: "backend",
      title: "Backend & Architecture",
      subtitle: "Harvard CS50 & Django",
      skills: [
        { name: "Django", icon: <SiDjango />, level: 90 },
        { name: "Python", icon: <FaPython />, level: 88 },
        { name: "MySQL Database", icon: <SiMysql />, level: 82 },
        { name: "AWS Cloud", icon: <FaAws />, level: 75 },
      ]
    },
    {
      id: "engineering",
      title: "Engineering & IT",
      subtitle: "Professional Solutions",
      skills: [
        { name: "Electrical Tech", icon: <GiElectric />, level: 98 },
        { name: "IT Support", icon: <SiGooglecloud />, level: 92 },
        { name: "Git/GitHub", icon: <FaGitAlt />, level: 90 },
        { name: "Computer Science", icon: <FaGraduationCap />, level: 85 },
      ]
    }
  ];

  return (
    <section id="skills" className="w-full bg-[#0F172A] py-20 lg:py-32 border-t border-[#1E293B]">
      <div className="w-full max-w-[1464px] mx-auto px-6 lg:px-12">
        
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20 px-4">
          <h2 className="text-3xl lg:text-5xl font-bold font-poppins text-white mb-6">
            Technical <span className="text-[#3B82F6]">Proficiency</span>
          </h2>
          <p className="text-base lg:text-lg text-[#94A3B8] font-inter leading-relaxed">
            Tap a card to "initialize" the diagnostic flow and visualize my technical depth.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:px-12">
          {skillCategories.map((category) => (
            <motion.div 
              key={category.id}
              onClick={() => setActiveCategory(activeCategory === category.id ? null : category.id)}
              className="relative p-[1px] rounded-2xl overflow-hidden group cursor-pointer"
            >
              {/* ROTATING BORDER LIGHT (Only shows on hover or active) */}
              <motion.div 
                animate={activeCategory === category.id ? { rotate: 360 } : { rotate: 0 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className={`absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_0deg,transparent_300deg,#3B82F6_360deg)] transition-opacity duration-500 ${
                  activeCategory === category.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-50'
                }`}
              />

              <div className={`relative bg-[#1E293B] p-8 rounded-2xl h-full z-10 transition-all duration-500 ${
                activeCategory === category.id ? 'bg-[#1e293b]' : 'bg-[#1E293B]/80'
              }`}>
                <div className="mb-8 flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold text-white font-poppins">{category.title}</h3>
                    <p className="text-xs text-[#3B82F6] font-medium uppercase tracking-tighter mt-1">{category.subtitle}</p>
                  </div>
                  {/* Status Indicator Light */}
                  <div className={`w-3 h-3 rounded-full blur-[2px] transition-all duration-500 ${
                    activeCategory === category.id ? 'bg-[#3B82F6] shadow-[0_0_10px_#3B82F6] animate-pulse' : 'bg-[#334155]'
                  }`} />
                </div>

                {category.skills.map((skill, index) => (
                  <SkillBar 
                    key={index}
                    name={skill.name}
                    icon={skill.icon}
                    percentage={skill.level}
                    isActive={activeCategory === category.id}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
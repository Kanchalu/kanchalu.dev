import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ title, description, tags, image, githubLink, liveLink }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-[#E2E8F0]"
    >
      {/* Project Image Container */}
      <div className="relative h-64 overflow-hidden">
        <div className="absolute inset-0 bg-[#3B82F6]/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
        <motion.img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Hover Overlay with Links */}
        <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 bg-[#0F172A]/60 backdrop-blur-sm">
          <a href={githubLink} target="_blank" rel="noreferrer" className="p-3 bg-white rounded-full text-[#0F172A] hover:bg-[#3B82F6] hover:text-white transition-all">
            <FaGithub size={20} />
          </a>
          <a href={liveLink} target="_blank" rel="noreferrer" className="p-3 bg-white rounded-full text-[#0F172A] hover:bg-[#3B82F6] hover:text-white transition-all">
            <FaExternalLinkAlt size={18} />
          </a>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-8">
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, i) => (
            <span key={i} className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider bg-[#F1F5F9] text-[#3B82F6] rounded-full border border-[#E2E8F0]">
              {tag}
            </span>
          ))}
        </div>
        
        <h3 className="text-2xl font-bold text-[#0F172A] mb-3 font-poppins">{title}</h3>
        <p className="text-[#64748B] text-sm leading-relaxed mb-6 font-inter">
          {description}
        </p>

        <div className="flex items-center gap-2 text-[#3B82F6] font-bold text-xs uppercase tracking-widest group-hover:gap-4 transition-all">
          View Case Study <span className="text-lg">→</span>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
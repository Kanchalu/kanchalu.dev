import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../ui/ProjectCard';

// Using your profile image as the placeholder for now
import placeholderImg from '../../assets/given.jpg'; 

const Projects = () => {
  const [activeCardIndex, setActiveCardIndex] = React.useState(null);

  const projectsData = [
    {
      title: "PUNZILA Governance",
      description: "A professional school management system built to handle complex administrative tasks. It manages student records, staff roles, and system governance with high-security data protocols.",
      tags: ["React", "Django", "MySQL", "JWT Security"],
      image: placeholderImg,
      githubLink: "#",
      liveLink: "#"
    },
    {
      title: "KaluLearn Platform",
      description: "An interactive Learning Management System (LMS) designed for modern digital classrooms. Features include course tracking, student progress monitoring, and a scalable architecture for high performance.",
      tags: ["React", "Django", "MySQL", "JWT Security"],
      image: placeholderImg,
      githubLink: "#",
      liveLink: "#"
    },
    {
      title: "Electrical Infrastructure",
      description: "Showcasing professional electrical engineering work since 2017. This project covers industrial wiring, domestic installations, and technical power solutions backed by a TEVETA trade certificate.",
      tags: ["React", "Django", "MySQL", "JWT Security"],
      image: placeholderImg,
      githubLink: "#",
      liveLink: "#"
    }
  ];

  return (
    <section id="projects" className="w-full bg-[#F8FAFC] py-20 lg:py-32 border-t border-[#E2E8F0]">
      <div className="w-full max-w-[1464px] mx-auto px-6 lg:px-12">
        
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl lg:text-5xl font-bold font-poppins text-[#0F172A] mb-6"
          >
            Featured <span className="text-[#3B82F6]">Case Studies</span>
          </motion.h2>
          <div className="w-20 h-1.5 bg-[#3B82F6] rounded-full mb-8" />
          <p className="text-lg text-[#475569] font-inter leading-relaxed">
            Real-world digital and technical solutions engineered for scalability, security, and high performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:px-12">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
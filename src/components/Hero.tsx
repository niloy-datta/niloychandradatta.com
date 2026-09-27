import React from "react";

import { portfolio } from "../data/portfolio";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa6";



const Hero: React.FC = () => {
  return (
    
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20">
      
      
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-12">
        
        
        <div className="flex-1 text-center md:text-left">
          <p className="text-blue-500 font-medium tracking-wider mb-2">CSE STUDENT · JAVA BACKEND FOCUS</p>
          
          
          <h1 className="text-5xl md:text-7xl font-bold text-slate-100 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-slate-100 to-slate-400">
            {portfolio.name}
          </h1>
          
          
          <h2 className="text-2xl md:text-3xl font-semibold text-blue-400 mb-6">
            {portfolio.role}
          </h2>
          <p className="text-lg text-slate-400 max-w-xl mb-8 mx-auto md:mx-0 leading-relaxed">
            {portfolio.tagline}
          </p>
          
          
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <a 
              href="#projects" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 shadow-lg shadow-blue-500/30 hover:-translate-y-1"
            >
              View Projects →
            </a>
            <a 
              href="#contact" 
              className="border border-slate-700 hover:border-slate-500 text-slate-300 px-8 py-3 rounded-full font-medium transition-all duration-300 hover:-translate-y-1"
            >
              Contact Me
            </a>
          </div>

          
          <div className="flex items-center justify-center md:justify-start gap-6 mt-8 pt-2">
            <a
              href={portfolio.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-400 hover:text-white text-sm font-medium transition-colors"
            >
              <FaGithub size={18} />
              <span>GitHub</span>
            </a>
            <a
              href={portfolio.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-400 hover:text-blue-400 text-sm font-medium transition-colors"
            >
              <FaLinkedin size={18} className="text-blue-400" />
              <span>LinkedIn</span>
            </a>
            <a
              href={`mailto:${portfolio.socials.email}`}
              className="flex items-center gap-2 text-slate-400 hover:text-blue-400 text-sm font-medium transition-colors"
            >
              <FaEnvelope size={18} className="text-blue-400" />
              <span>Email</span>
            </a>
          </div>
        </div>
        
        
        <div className="flex-1 flex justify-center mt-12 md:mt-0 relative group">
          
          <div className="absolute inset-4 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 rounded-full blur-2xl group-hover:blur-xl transition-all duration-500"></div>
          
          
          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-[2rem] overflow-hidden border border-slate-800 shadow-2xl shadow-blue-900/20 rotate-3 group-hover:rotate-0 transition-transform duration-500">
            
            <img 
              src={`${import.meta.env.BASE_URL}profile.jpg`} 
              alt={portfolio.name} 
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;

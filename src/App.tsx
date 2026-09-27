import React from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import CurrentFocus from "./components/CurrentFocus";
import CurrentlyLearning from "./components/CurrentlyLearning";
import ResearchInterest from "./components/ResearchInterest";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    
    
    <div className="min-h-screen text-slate-200 selection:bg-blue-500/30 selection:text-white font-sans">
      
      <Navbar />
      
      
      <main>
        <Hero />
        <About />
        
        
        <CurrentFocus />
        <CurrentlyLearning />
        
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <ResearchInterest />
        <Contact />
      </main>
      
      <Footer />

    </div>
  );
};

export default App;

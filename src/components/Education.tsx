import React from "react";
import { portfolio } from "../data/portfolio";

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <div className="text-center mb-16">
          <p className="text-blue-500 text-xs font-bold tracking-widest uppercase mb-1">EDUCATION</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100">Education</h2>
        </div>

        <div className="space-y-6">
          {portfolio.education.map((item, index) => (
            <div key={index} className="p-6 md:p-8 rounded-2xl bg-slate-900 border border-slate-800 shadow-xl hover:border-slate-700/80 transition-all">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
                <div>
                  <h3 className="text-xl font-bold text-slate-100">{item.degree}</h3>
                  {item.institution && <p className="text-blue-400 font-semibold mt-2">{item.institution}</p>}
                </div>
                <div className="text-left md:text-right shrink-0">
                  <p className="text-xs text-slate-500 font-medium tracking-wider uppercase">{item.duration}</p>
                  {item.result && <p className="text-slate-300 font-semibold mt-2">{item.result}</p>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

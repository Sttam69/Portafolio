import { Calendar, Briefcase, Building, Award } from 'lucide-react';
import { motion } from 'motion/react';
import { portfolioData } from '../data';

export default function Experience() {
  const { experience } = portfolioData;

  if (!experience || experience.length === 0) return null;

  return (
    <section id="experiencia" className="py-24 relative overflow-hidden bg-[#050505]">
      {/* Decorative vertical background grids */}
      <div className="absolute right-1/4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-emerald-500/10 to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="space-y-2 mb-16 text-center">
          <span className="text-xs font-mono text-emerald-400 tracking-widest uppercase">
            // 05. Trayectoria
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white">
            Experiencia Laboral
          </h2>
          <div className="w-12 h-1 bg-emerald-500 rounded-full mx-auto mt-2" />
        </div>

        {/* Clean Timeline Structure */}
        <div className="relative space-y-12 before:absolute before:inset-0 before:left-4 sm:before:left-1/2 before:w-0.5 before:bg-white/10 before:pointer-events-none">
          
          {experience.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={item.id}
                id={`exp-item-${item.id}`}
                className={`relative flex flex-col sm:flex-row items-start ${
                  isEven ? 'sm:flex-row-reverse' : ''
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-150px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                
                {/* Timeline center node dot */}
                <div className="absolute left-4 sm:left-1/2 -translate-x-[7px] w-4 h-4 rounded-full bg-[#050505] border-2 border-emerald-500 z-10 shadow-[0_0_8px_rgba(16,185,129,0.5)] mt-1.5" />

                {/* Left/Right content wrapper */}
                <div className={`w-full sm:w-1/2 pl-12 sm:pl-0 ${
                  isEven ? 'sm:pl-8' : 'sm:pr-8'
                }`}>
                  
                  {/* Glass Card Container */}
                  <div className="p-6 rounded-2xl glass-pf hover:border-emerald-500/25 transition-all duration-300 relative group glass-glow-emerald">
                    
                    {/* Metadata Header */}
                    <div className="space-y-1.5 mb-4">
                      <div className="flex items-center justify-between text-xs font-mono text-emerald-400">
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{item.period}</span>
                        </div>
                        <span className="text-gray-500">{item.location}</span>
                      </div>
                      
                      <h3 className="text-lg font-display font-bold text-white group-hover:text-emerald-300 transition-colors duration-300 flex items-center gap-1.5">
                        <Briefcase className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                        <span>{item.role}</span>
                      </h3>

                      <p className="text-xs sm:text-sm font-sans font-medium text-gray-300 flex items-center gap-1.5 pt-1">
                        <Building className="w-4 h-4 text-gray-400" />
                        {item.company}
                      </p>
                    </div>

                    {/* Brief description text */}
                    <p className="text-xs sm:text-sm text-gray-400 font-sans leading-relaxed mb-4">
                      {item.description}
                    </p>

                    {/* Sub bullet points / achievements with fine graphics */}
                    {item.highlights && item.highlights.length > 0 && (
                      <div className="space-y-2 pt-3 border-t border-white/5">
                        <span className="block text-[10px] font-mono text-gray-400 tracking-wider font-semibold uppercase flex items-center gap-1">
                          <Award className="w-3 h-3 text-emerald-400" />
                          <span>Funciones Principales:</span>
                        </span>
                        <ul className="space-y-1.5">
                          {item.highlights.map((highlight, idx) => (
                            <li key={idx} className="flex items-start text-[11px] sm:text-xs text-gray-300 font-sans leading-snug">
                              <span className="text-emerald-500 mr-2 flex-shrink-0 mt-1">▪</span>
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                  </div>
                </div>

                {/* Empty side layout spacer alignment for desktop view */}
                <div className="hidden sm:block sm:w-1/2" />

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}

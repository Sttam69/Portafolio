import { Code2, Server, Database, Wrench } from 'lucide-react';
import { motion } from 'motion/react';
import { portfolioData } from '../data';

export default function Skills() {
  const { skills } = portfolioData;

  // Icon mapping helper
  const getIcon = (iconName: string, className: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className={className} />;
      case 'Server':
        return <Server className={className} />;
      case 'Database':
        return <Database className={className} />;
      case 'Wrench':
        return <Wrench className={className} />;
      default:
        return <Wrench className={className} />;
    }
  };

  return (
    <section id="habilidades" className="py-24 relative overflow-hidden bg-radial from-[#050505] via-[#050505] to-black">
      {/* Decorative background lights */}
      <div className="absolute top-1/2 left-0 w-64 h-64 rounded-full bg-emerald-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="space-y-2 mb-16 text-center">
          <span className="text-xs font-mono text-emerald-400 tracking-widest uppercase">
            // 02. Especializaciones
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white">
            Habilidades Técnicas
          </h2>
          <div className="w-12 h-1 bg-emerald-500 rounded-full mx-auto mt-2" />
          <p className="text-gray-400 text-sm max-w-lg mx-auto font-sans mt-3">
            Competencias estructuradas a lo largo de mi formación académica y exploración de arquitecturas informáticas.
          </p>
        </div>

        {/* Skills Layout - Grid of Panels */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6" id="skills-grid">
          {skills.map((group, groupIndex) => (
            <motion.div
              key={group.categoryName}
              id={`skill-group-${groupIndex}`}
              className="p-6 rounded-2xl glass-pf hover:border-emerald-500/30 transition-all duration-500 glass-glow-emerald"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
            >
              <div className="flex items-center space-x-3 mb-6 pb-4 border-b border-white/5">
                <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                  {getIcon(group.iconName, "w-5 h-5")}
                </div>
                <h3 className="text-lg font-display font-bold text-white uppercase tracking-wide">
                  {group.categoryName}
                </h3>
              </div>

              {/* List of Skills with Seniority Badge tags */}
              <div className="space-y-3">
                {group.skills.map((skill) => (
                  <div 
                    key={skill.name} 
                    className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all duration-300 group"
                    id={`skill-${skill.name.toLowerCase().replace(/[^a-z0-9]/g, '')}`}
                  >
                    <span className="text-gray-200 font-medium text-sm font-sans group-hover:text-white transition-colors duration-200">{skill.name}</span>
                    <span className={`px-2.5 py-1 rounded-md text-[10px] font-mono font-semibold uppercase tracking-wider ${
                      skill.level === 'Avanzado'
                        ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shadow-[0_0_12px_rgba(16,185,129,0.1)]'
                        : skill.level === 'Intermedio'
                          ? 'bg-[#10b981]/10 text-emerald-300 border border-emerald-500/20'
                          : 'bg-zinc-500/10 text-zinc-400 border border-zinc-500/20'
                    }`}>
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

import { useState } from 'react';
import { Github, ExternalLink, ShieldAlert, Cpu, Network, LineChart, Database, Eye } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { portfolioData } from '../data';
import { Project } from '../types';

export default function Projects() {
  const [activeDetailsId, setActiveDetailsId] = useState<string | null>(null);

  const categories = [
    { id: 'all', name: 'Todos' },
    { id: 'web', name: 'Desarrollo Web' },
    { id: 'systems', name: 'Sistemas (C++/Java)' },
    { id: 'gamedev', name: 'Videojuegos' }
  ] as const;

  const [selectedCategory, setSelectedCategory] = useState<'all' | 'systems' | 'web' | 'gamedev'>('all');

  const filteredProjects = portfolioData.projects.filter(project => {
    if (selectedCategory === 'all') return true;
    return project.category === selectedCategory;
  });

  const getCardIcon = (imageName: string) => {
    switch (imageName) {
      case 'guardian-quill':
        return <Cpu className="w-8 h-8 text-emerald-400" />;
      case 'ligapro':
      case 'fmk':
        return <Database className="w-8 h-8 text-emerald-400" />;
      case 'estrucdb':
        return <Database className="w-8 h-8 text-emerald-400" />;
      default:
        return <Cpu className="w-8 h-8 text-emerald-400" />;
    }
  };

  // Helper to render customized interactive technical terminal mock representations
  const renderTechMockup = (imageName: string) => {
    switch (imageName) {
      case 'guardian-quill':
        return (
          <div className="absolute inset-0 bg-[#070b12] flex flex-col justify-between p-4 font-mono text-[10px] text-emerald-500/90 select-none overflow-hidden border-b border-white/10 group-hover:bg-[#090e18] transition-colors duration-300">
            <div className="flex items-center justify-between border-b border-emerald-500/10 pb-1.5">
              <span>GUARDIAN_QUILL_V1</span>
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            </div>
            <div className="space-y-1 my-auto text-center">
              <div>&gt;_ init_game_engine()</div>
              <div className="text-emerald-400">Loading Events... [OK]</div>
              <div className="text-gray-500">60 FPS Locked</div>
            </div>
            <div className="text-[9px] text-[#10b981]/50 truncate">Engine: GDevelop 5 WebGL</div>
          </div>
        );
      case 'ligapro':
      case 'fmk':
        return (
          <div className="absolute inset-0 bg-[#070b12] flex flex-col justify-between p-4 font-mono text-[10px] text-emerald-500/90 select-none overflow-hidden border-b border-white/10 group-hover:bg-[#090e18] transition-colors duration-300">
            <div className="flex items-center justify-between border-b border-emerald-500/10 pb-1.5">
              <span>SUPABASE_NETLIFY_DEPLOY</span>
              <span className="text-emerald-400 text-[10px]">LIVE</span>
            </div>
            <div className="space-y-2 my-auto">
              <div className="flex justify-between items-center text-xs">
                <span className="text-gray-400">PG Database:</span>
                <span className="text-white font-semibold">Connected</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-gray-400">Auth Service:</span>
                <span className="text-emerald-400 font-semibold">Active</span>
              </div>
            </div>
            <div className="flex items-end justify-between text-[9px] text-gray-500">
              <span>Edge Network: Netlify</span>
              <span>Latency: 10ms</span>
            </div>
          </div>
        );
      case 'estrucdb':
        return (
          <div className="absolute inset-0 bg-[#070b12] flex flex-col justify-between p-4 font-mono text-[10px] text-emerald-500/90 select-none overflow-hidden border-b border-white/10 group-hover:bg-[#090e18] transition-colors duration-300">
            <div className="flex items-center justify-between border-b border-emerald-500/10 pb-1.5">
              <span>ESTRUC_DB_ENGINE</span>
              <span>Java POO</span>
            </div>
            <div className="space-y-1 my-auto">
              <div>SELECT name, id FROM users;</div>
              <div className="text-gray-500">| name | id |</div>
              <div>| Boris| 01 |</div>
            </div>
            <div className="text-[9px] text-emerald-500/50 truncate">B-Tree Nodes: Cap 16, Height 2</div>
          </div>
        );
      case 'portfolio':
        return (
          <div className="absolute inset-0 bg-[#070b12] flex flex-col justify-between p-4 font-mono text-[10px] text-emerald-500/90 select-none overflow-hidden border-b border-white/10 group-hover:bg-[#090e18] transition-colors duration-300">
            <div className="flex items-center justify-between border-b border-emerald-500/10 pb-1.5">
              <span>PORTFOLIO_GLASS</span>
              <span>Vite React</span>
            </div>
            <div className="space-y-1 my-auto text-center py-2">
              <div className="text-md text-emerald-400 tracking-widest font-display font-light">GLASSMORPHISM</div>
              <div className="text-[9px] text-gray-400">Tailwind V4 + Motion</div>
            </div>
            <div className="text-[9px] text-gray-500 truncate">Clean Architecture & modular files</div>
          </div>
        );
      default:
        return (
          <div className="absolute inset-0 bg-neutral-950 flex items-center justify-center border-b border-white/10 text-emerald-400 font-mono text-xs">
            [Technical Schema Mock]
          </div>
        );
    }
  };

  return (
    <section id="proyectos" className="py-24 relative overflow-hidden bg-[#050505]">
      {/* Decorative grids */}
      <div className="absolute right-0 bottom-1/4 w-96 h-96 rounded-full bg-emerald-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="space-y-2 mb-12 text-center">
          <span className="text-xs font-mono text-emerald-400 tracking-widest uppercase">
            // 03. Demostraciones
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white">
            Portafolio de Proyectos
          </h2>
          <div className="w-12 h-1 bg-emerald-500 rounded-full mx-auto mt-2" />
          <p className="text-gray-400 text-sm max-w-lg mx-auto font-sans mt-3">
            Explora una selección clasificada de mis sistemas diseñados con rigor técnico y seguridad integral.
          </p>
        </div>

        {/* Filter Toolbar */}
        <div className="flex flex-wrap justify-center gap-2 mb-12" id="filter-toolbar">
          {categories.map((category) => (
            <button
              key={category.id}
              id={`filter-${category.id}`}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full font-sans text-xs sm:text-sm font-medium transition-all duration-300 pointer-events-auto cursor-pointer ${
                selectedCategory === category.id
                  ? 'bg-emerald-500 text-[#0b0f17] font-semibold shadow-sm'
                  : 'glass-pf text-gray-400 hover:text-white hover:bg-white/10'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* CSS GRID OF PROJECTS CARD LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="projects-grid">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              const isDetailsActive = activeDetailsId === project.id;
              
              return (
                <motion.div
                  key={project.id}
                  id={`project-card-${project.id}`}
                  className="rounded-2xl glass-pf hover:border-emerald-500/40 overflow-hidden flex flex-col h-full hover:shadow-[0_0_20px_-5px_rgba(16,185,129,0.25)] transition-all duration-500 group relative glass-glow-emerald"
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  {/* Aspect Ratio 16:9 for Simulated Terminal Image Preview */}
                  <div className="relative w-full h-44 overflow-hidden bg-neutral-950 flex-shrink-0">
                    {renderTechMockup(project.image)}
                    
                    {/* Dark gradient overlay on thumbnail bottom */}
                    <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-neutral-950 to-transparent opacity-60" />

                    {/* Quick trigger indicator overlay */}
                    <div className="absolute inset-0 bg-[#050505]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-3">
                      <button
                        onClick={() => setActiveDetailsId(isDetailsActive ? null : project.id)}
                        className="p-2.5 rounded-full bg-emerald-500 hover:bg-emerald-600 text-[#0b0f17] font-semibold transition-transform duration-300 hover:scale-115 cursor-pointer"
                        title={isDetailsActive ? "Ocultar detalles" : "Ver detalles técnicos"}
                      >
                        <Eye className="w-5 h-5" />
                      </button>
                    </div>
                  </div>

                  {/* Card Body Space */}
                  <div className="p-5 flex-1 flex flex-col">
                    <div className="flex-grow space-y-2">
                      <div className="flex items-center justify-between gap-2">
                        <h3 className="font-display font-bold text-base sm:text-lg text-white group-hover:text-emerald-400 transition-colors duration-300 truncate">
                          {project.title}
                        </h3>
                        <div className="flex-shrink-0">
                          {getCardIcon(project.image)}
                        </div>
                      </div>

                      {/* Project Tags */}
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.map(tag => (
                          <span key={tag} className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/10">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <p className="text-gray-350 text-xs sm:text-sm line-clamp-3 font-sans leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Bottom buttons actions */}
                    <div className="flex items-center justify-between pt-4 border-t border-white/5 mt-auto">
                      {project.liveUrl ? (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="text-xs font-mono text-emerald-400 hover:text-emerald-300 transition-colors inline-flex items-center space-x-1 cursor-pointer"
                        >
                          <span>[ Visitar Web ]</span>
                        </a>
                      ) : (
                        <button
                          onClick={() => setActiveDetailsId(isDetailsActive ? null : project.id)}
                          className="text-xs font-mono text-emerald-400 hover:text-emerald-300 transition-colors inline-flex items-center space-x-1 cursor-pointer"
                        >
                          <span>{isDetailsActive ? "[ Ocultar spec ]" : "[ Ver spec ]"}</span>
                        </button>
                      )}

                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="px-3.5 py-1.5 rounded-lg glass-pf hover:bg-white/10 text-gray-300 hover:text-white transition-all duration-300 text-xs flex items-center space-x-1.5"
                        >
                          <Github className="w-3.5 h-3.5" />
                          <span>Github</span>
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Sliding glass spec breakdown overlay */}
                  <AnimatePresence>
                    {isDetailsActive && (
                      <motion.div
                        className="absolute inset-0 bg-[#050505]/95 backdrop-blur-md p-6 overflow-y-auto flex flex-col justify-between z-10 border border-emerald-500/30 rounded-2xl"
                        initial={{ y: '100%' }}
                        animate={{ y: 0 }}
                        exit={{ y: '100%' }}
                        transition={{ duration: 0.35, ease: 'easeOut' }}
                      >
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <span className="text-[10px] font-mono text-emerald-400 tracking-wider font-bold">
                              ESPECIFICACIÓN TÉCNICA
                            </span>
                            <button
                              onClick={() => setActiveDetailsId(null)}
                              className="text-gray-500 hover:text-white text-xs font-mono cursor-pointer"
                            >
                              [ Cerrar ]
                            </button>
                          </div>
                          
                          <h4 className="text-lg font-display font-bold text-white">
                            {project.title}
                          </h4>

                          <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-sans">
                            {project.longDescription || project.description}
                          </p>

                          <div className="space-y-1.5">
                            <span className="block text-[10px] font-mono text-gray-400">Tecnologías Principales:</span>
                            <div className="flex flex-wrap gap-1.5">
                              {project.tags.map(tag => (
                                <span key={tag} className="px-2 py-1 rounded text-[10px] font-mono bg-white/5 text-gray-300 border border-white/5">
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div className="pt-4 border-t border-white/5 mt-4 flex justify-end">
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noreferrer noopener"
                            className="px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-[#0b0f17] font-semibold text-xs transition-all duration-300 flex items-center space-x-1.5"
                          >
                            <Github className="w-4 h-4" />
                            <span>Código en GitHub</span>
                          </a>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}

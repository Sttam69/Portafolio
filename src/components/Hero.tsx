import { useState } from 'react';
import { ArrowRight, FileCode2, MapPin, Sparkles, Download, UserCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { portfolioData } from '../data';

export default function Hero() {
  const { name, title, subtitle, tagline, location, avatarAlt } = portfolioData.personal;
  const [imgError, setImgError] = useState(false);

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const topOffset = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: topOffset, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden bg-radial from-emerald-950/15 via-[#050505] to-[#050505]"
    >
      {/* Dynamic Background Mesh Effect */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-emerald-500/5 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          
          {/* Text Presentation */}
          <motion.div
            className="flex-1 text-center lg:text-left space-y-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Tagline Badge */}
            <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-emerald-500/5 border border-emerald-500/20 text-emerald-400 text-xs font-mono tracking-wide">
              <Sparkles className="w-3.5 h-3.5 animate-pulse" />
              <span>Sistemas Robustos & Seguridad</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-display font-extrabold tracking-tight text-white leading-tight">
                {name}
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-emerald-400 font-display">
                {title}
              </p>
              <p className="text-sm sm:text-base font-mono text-gray-400 tracking-wider">
                {subtitle}
              </p>
            </div>

            {/* Summary */}
            <p className="text-gray-300 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed font-sans">
              {tagline}
            </p>

            {/* Metadata (Location) */}
            <div className="flex items-center justify-center lg:justify-start space-x-2 text-xs font-mono text-gray-500">
              <MapPin className="w-4 h-4 text-emerald-500" />
              <span>{location}</span>
              <span className="text-emerald-500/40">•</span>
              <span>Disponibilidad Académica e Investigación</span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4 flex-wrap">
              <button
                id="btn-projects"
                onClick={() => handleScrollTo('proyectos')}
                className="w-full sm:w-auto flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-[#0b0f17] font-semibold text-sm transition-all duration-300 hover:shadow-[0_0_20px_-2px_rgba(16,185,129,0.4)] cursor-pointer"
              >
                <span>Ver Proyectos</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              
              <button
                id="btn-contact"
                onClick={() => handleScrollTo('contacto')}
                className="w-full sm:w-auto flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-white font-semibold text-sm border border-white/10 hover:border-emerald-500/20 backdrop-blur-md transition-all duration-300 cursor-pointer flex-shrink-0"
              >
                <FileCode2 className="w-4 h-4 text-emerald-400" />
                <span>Contactar</span>
              </button>

              <a
                id="btn-cv"
                href="/cv.pdf"
                download="Boris_Jimenez_CV.pdf"
                className="w-full sm:w-auto flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-white font-semibold text-sm border border-white/10 hover:border-emerald-500/20 backdrop-blur-md transition-all duration-300 cursor-pointer flex-shrink-0"
              >
                <Download className="w-4 h-4 text-emerald-400" />
                <span>Descargar CV</span>
              </a>
            </div>
          </motion.div>

          {/* Technical Modular Profile Avatar */}
          <motion.div
            className="flex-shrink-0 relative w-64 h-64 sm:w-80 sm:h-80"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Decorative spinning orbits representing system scheduling */}
            <div className="absolute inset-0 rounded-full border border-emerald-500/10 animate-[spin_20s_linear_infinite]" />
            <div className="absolute -inset-2 rounded-full border border-dashed border-emerald-500/5 animate-[spin_35s_linear_infinite]" />
            <div className="absolute -inset-4 rounded-full border-t-2 border-emerald-500/10 animate-[spin_10s_linear_infinite]" />

            {/* Glass Container for Avatar */}
            <div className="absolute inset-2 bg-gradient-to-br from-emerald-500/5 via-white/3 to-[#050505]/80 rounded-full p-1 border border-white/10 backdrop-blur-md flex items-center justify-center overflow-hidden group shadow-lg glass-glow-emerald">
              
              {!imgError ? (
                <img
                  src="/Foto.png"
                  alt={avatarAlt || name}
                  className="w-full h-full object-cover rounded-full filter grayscale contrast-110 brightness-95 transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
                  onError={() => setImgError(true)}
                />
              ) : (
                <>
                  <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#10b981_1.5px,transparent_1.5px)] [background-size:12px_12px]" />
                  <div className="relative z-10 flex items-center justify-center">
                    <UserCircle className="w-16 h-16 text-emerald-400" />
                  </div>
                </>
              )}

              {/* Circular technical glow edge overlay */}
              <div className="absolute inset-0 bg-radial from-transparent via-transparent to-emerald-950/40 group-hover:to-emerald-950/20 transition-all duration-500 pointer-events-none" />
            </div>

            {/* Orbiting technical badges */}
            <div className="absolute -top-1 -right-1 bg-white/5 border border-white/10 backdrop-blur-md px-3 py-1 rounded-lg text-[10px] font-mono text-emerald-400 shadow-md">
              <span>System.out.println()</span>
            </div>
            <div className="absolute -bottom-1 -left-1 bg-white/5 border border-white/10 backdrop-blur-md px-3 py-1 rounded-lg text-[10px] font-mono text-emerald-400 shadow-md">
              <span>std::cout</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

import { ShieldAlert, Cpu, Heart, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { portfolioData } from '../data';

export default function About() {
  const { aboutLong } = portfolioData.personal;

  const corePillars = [
    {
      id: "pillar-1",
      icon: <Cpu className="w-6 h-6 text-emerald-400" />,
      title: "Rendimiento y Algoritmos",
      description: "Interés continuo en optimizar el uso de memoria y CPU, aplicando estructuras de datos eficientes en C++."
    },
    {
      id: "pillar-2",
      icon: <ShieldAlert className="w-6 h-6 text-emerald-400" />,
      title: "Desarrollo Seguro",
      description: "Protección integral desde el diseño del código. Integración de cifrado (AES/RSA) y prevención activa del OWASP Top 10."
    },
    {
      id: "pillar-3",
      icon: <Heart className="w-6 h-6 text-emerald-400" />,
      title: "Prácticas de Código Limpio",
      description: "Arquitecturas altamente legibles y fáciles de mantener con fuerte enfoque en modularidad y herencia (POO)."
    }
  ];

  return (
    <section id="sobre-mi" className="py-24 relative overflow-hidden bg-[#050505]">
      {/* Decorative Blur Accent */}
      <div className="absolute right-0 top-1/4 w-80 h-80 rounded-full bg-emerald-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 font-sans">
        
        {/* Section Heading */}
        <div className="space-y-2 mb-12 text-center lg:text-left">
          <span className="text-xs font-mono text-emerald-400 tracking-widest uppercase">
            // 01. Perfil Profesional
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white font-sans">
            Sobre Mí
          </h2>
          <div className="w-12 h-1 bg-emerald-500 rounded-full lg:mx-0 mx-auto mt-2" />
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Biography Column */}
          <motion.div
            className="lg:col-span-7 space-y-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="p-6 sm:p-8 rounded-2xl glass-pf glass-glow-emerald space-y-4">
              <p className="text-gray-300 leading-relaxed font-sans text-base sm:text-lg">
                {aboutLong}
              </p>
              <p className="text-gray-400 font-sans text-sm sm:text-base">
                Mi enfoque actual está alineado con metodologías modernas de desarrollo seguro de software y la resolución de cuellos de botella informáticos. Disfruto colaborar en equipos que valoren la disciplina de diseño técnico y la experimentación prudente con nuevas tecnologías.
              </p>
            </div>

            {/* Facts summary banner */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl glass-pf text-center">
                <span className="block text-3xl font-display font-bold text-emerald-400">90%+</span>
                <span className="text-xs text-gray-400 font-sans font-medium">Rendimiento Académico</span>
              </div>
              <div className="p-4 rounded-xl glass-pf text-center">
                <span className="block text-3xl font-display font-bold text-emerald-400">6+</span>
                <span className="text-xs text-gray-400 font-sans font-medium">Proyectos de Código Completo</span>
              </div>
            </div>
          </motion.div>

          {/* Pillars List Column */}
          <motion.div
            className="lg:col-span-5 space-y-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-lg font-display font-semibold text-white tracking-wide font-sans">
              Metodología y Filosofía de Desarrollo
            </h3>

            <div className="space-y-4">
              {corePillars.map((pillar) => (
                <div
                  key={pillar.id}
                  className="p-5 rounded-2xl glass-pf flex items-start space-x-4 hover:border-emerald-500/30 transition-all duration-300"
                >
                  <div className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex-shrink-0">
                    {pillar.icon}
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-semibold text-white font-sans">
                      {pillar.title}
                    </h4>
                    <p className="text-xs text-gray-400 leading-relaxed font-sans">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

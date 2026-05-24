import { Code2 } from 'lucide-react';
import { portfolioData } from '../data';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { name, title } = portfolioData.personal;

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="footer" className="py-12 border-t border-white/5 bg-[#050505] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          
          {/* Logo & Info */}
          <div className="space-y-1.5 flex flex-col md:items-start items-center">
            <button
              onClick={handleScrollToTop}
              className="flex items-center space-x-2 text-left group cursor-pointer"
            >
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500/20 transition-all duration-300">
                <Code2 className="w-4.5 h-4.5" />
              </div>
              <span className="font-display font-bold text-sm tracking-widest text-white uppercase group-hover:text-emerald-400 transition-colors">
                {name}
              </span>
            </button>
            <p className="text-xs text-gray-500 font-sans">
              {title} • Prácticas de Ingeniería Segura
            </p>
          </div>

          {/* Inspirational Tagline */}
          <div className="text-xs font-mono text-gray-500 max-w-xs md:text-right text-center space-y-1">
            <span className="block text-emerald-500/80">&gt;_ Code_with_rigor.Secure_by_default.</span>
            <span className="block">Compilado con React, Tailwind &amp; Motion.</span>
          </div>

        </div>

        {/* Dynamic separator & copyright */}
        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-gray-600">
          <p>© {currentYear} {name}. Todos los derechos reservados.</p>
          <div className="flex items-center space-x-4">
            <a href="https://github.com" target="_blank" rel="noreferrer noopener" className="hover:text-emerald-400 transition-colors">GitHub</a>
            <span>•</span>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer noopener" className="hover:text-emerald-400 transition-colors">LinkedIn</a>
          </div>
        </div>

      </div>
    </footer>
  );
}

import React, { useState, useEffect } from 'react';
import { Menu, X, Code2, User, BookOpen, MessageSquare, Briefcase } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  sections: { id: string; name: string; icon: React.ReactNode }[];
}

export default function Navbar({ sections }: NavbarProps) {
  const [activeSection, setActiveSection] = useState('inicio');
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll spy implementation
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const scrollPosition = window.scrollY + 150; // offset
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section.id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const topOffset = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: topOffset, behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3 bg-[#050505]/70 backdrop-blur-lg border-b border-white/8'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Title */}
          <button
            id="nav-logo"
            onClick={() => scrollToSection('inicio')}
            className="flex items-center space-x-2 text-left group cursor-pointer"
          >
            <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:border-emerald-400 group-hover:bg-emerald-500/20 transition-all duration-300">
              <Code2 className="w-5 h-5" />
            </div>
            <div>
              <span className="font-display font-semibold text-lg tracking-tight text-white group-hover:text-emerald-400 transition-colors duration-300">
                BORIS JIMENEZ
              </span>
              <span className="block text-[10px] font-mono text-emerald-500/80 tracking-wider">
                ENGINEERING
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1" id="desktop-nav">
            {sections.map((section) => {
              const isActive = activeSection === section.id;
              return (
                <button
                  key={section.id}
                  id={`nav-link-${section.id}`}
                  onClick={() => scrollToSection(section.id)}
                  className={`relative px-4 py-2 rounded-full font-sans text-sm font-medium transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'text-emerald-400 bg-emerald-500/5'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <span className="relative z-10 flex items-center space-x-1.5">
                    {section.name}
                  </span>
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute inset-0 bg-emerald-500/10 border border-emerald-500/20 rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Abrir menú"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Sliding Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu-dropdown"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#050505]/95 backdrop-blur-xl border-b border-white/8 overflow-hidden"
          >
            <div className="px-4 pt-3 pb-6 space-y-2">
              {sections.map((section) => {
                const isActive = activeSection === section.id;
                return (
                  <button
                    key={section.id}
                    id={`mobile-nav-link-${section.id}`}
                    onClick={() => scrollToSection(section.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl font-sans text-base font-medium transition-colors cursor-pointer ${
                      isActive
                        ? 'text-emerald-400 bg-emerald-500/10 border-l-4 border-emerald-500'
                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <span>{section.icon}</span>
                    <span>{section.name}</span>
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

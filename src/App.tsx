import { User, Code2, BookOpen, MessageSquare, ShieldCheck, ChevronUp, Briefcase } from 'lucide-react';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Monitor scroll height to conditionally render a Back to Top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const sections = [
    { id: 'inicio', name: 'Inicio', icon: <User className="w-4 h-4" /> },
    { id: 'sobre-mi', name: 'Sobre Mí', icon: <Briefcase className="w-4 h-4" /> },
    { id: 'habilidades', name: 'Habilidades', icon: <ShieldCheck className="w-4 h-4" /> },
    { id: 'proyectos', name: 'Proyectos', icon: <Code2 className="w-4 h-4" /> },
    { id: 'educacion', name: 'Estudios', icon: <BookOpen className="w-4 h-4" /> },
    { id: 'experiencia', name: 'Experiencia', icon: <Briefcase className="w-4 h-4" /> },
    { id: 'contacto', name: 'Contacto', icon: <MessageSquare className="w-4 h-4" /> }
  ];

  return (
    <div className="relative min-h-screen bg-[#0b0f17] text-gray-200 overflow-x-hidden selection:bg-emerald-500/30 selection:text-emerald-300">
      
      {/* Decorative ambient radial gradients */}
      <div className="absolute top-0 inset-x-0 h-[500px] bg-gradient-to-b from-emerald-950/20 to-transparent pointer-events-none" />

      {/* Floating Glass Navigation Header */}
      <Navbar sections={sections} />

      {/* Main Single Page Layout Content */}
      <main id="app-main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Experience />
        <Contact />
      </main>

      {/* Professional Footer */}
      <Footer />

      {/* Floating Back-to-Top Button */}
      {showScrollTop && (
        <button
          id="back-to-top"
          onClick={handleScrollToTop}
          className="fixed bottom-6 right-6 p-3 rounded-full bg-emerald-500/10 hover:bg-emerald-500 text-emerald-400 hover:text-[#0b0f17] border border-emerald-500/20 hover:border-emerald-500 backdrop-blur-md shadow-lg transition-all duration-300 transform hover:scale-110 cursor-pointer z-40"
          title="Subir al inicio"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
      )}

    </div>
  );
}

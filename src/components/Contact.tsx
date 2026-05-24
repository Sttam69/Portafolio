import React, { useState } from 'react';
import { Mail, Github, Linkedin, Send, CheckCircle2, AlertCircle, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { portfolioData } from '../data';

export default function Contact() {
  const { email } = portfolioData.personal;
  const socials = portfolioData.socials;

  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    asunto: '',
    mensaje: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const getPlatformIcon = (platform: string, className: string) => {
    switch (platform) {
      case 'github':
        return <Github className={className} />;
      case 'linkedin':
        return <Linkedin className={className} />;
      case 'email':
        return <Mail className={className} />;
      default:
        return <Mail className={className} />;
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.nombre.trim()) {
      newErrors.nombre = 'El nombre es obligatorio.';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'El correo electrónico es obligatorio.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Introduce un correo válido.';
    }
    if (!formData.asunto.trim()) {
      newErrors.asunto = 'El asunto es obligatorio.';
    }
    if (!formData.mensaje.trim()) {
      newErrors.mensaje = 'El mensaje no puede estar vacío.';
    } else if (formData.mensaje.trim().length < 10) {
      newErrors.mensaje = 'El mensaje debe tener al menos 10 caracteres.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setIsError(false);
    try {
      const response = await fetch('https://formspree.io/f/xjgzegqg', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setIsSuccess(true);
        setFormData({ nombre: '', email: '', asunto: '', mensaje: '' });
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        setIsError(true);
        setTimeout(() => setIsError(false), 5000);
      }
    } catch {
      setIsError(true);
      setTimeout(() => setIsError(false), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <section id="contacto" className="py-24 relative overflow-hidden bg-[#050505]">
      {/* Ambient glowing structures */}
      <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-96 h-96 rounded-full bg-emerald-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Heading */}
        <div className="space-y-2 mb-16 text-center">
          <span className="text-xs font-mono text-emerald-400 tracking-widest uppercase">
            // 06. Comunicación Directa
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white">
            Contacto
          </h2>
          <div className="w-12 h-1 bg-emerald-500 rounded-full mx-auto mt-2" />
          <p className="text-gray-400 text-sm max-w-lg mx-auto font-sans mt-3">
            ¿Tienes alguna consulta técnica, propuesta académica o proyecto en mente? ¡Hablemos!
          </p>
        </div>

        {/* Form Layout Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch" id="contact-wrapper">

          {/* Social Information Sidebar Card */}
          <motion.div
            className="lg:col-span-4 flex flex-col justify-between p-6 sm:p-8 rounded-2xl glass-pf relative overflow-hidden glass-glow-emerald"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            {/* Tech grid texture background inside widget */}
            <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:1.5rem_1.5rem]" />

            <div className="relative space-y-6">
              <div className="space-y-2">
                <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest">
                  Canales Digitales
                </span>
                <h3 className="text-xl font-display font-bold text-white">
                  Información de Contacto
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed font-sans">
                  Sigo con gran interés oportunidades de colaboración en ingeniería de sistemas operativos, criptografía básica aplicada y desarrollo completo de software robusto.
                </p>
              </div>

              {/* Email Direct Access widget */}
              <div className="p-4 rounded-xl bg-white/3 border border-white/8 flex items-center space-x-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 border border-emerald-500/20">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[10px] font-mono text-gray-400">CORREO DIRECTO</span>
                  <a
                    href={`mailto:${email}`}
                    className="text-xs sm:text-sm font-sans font-medium hover:text-emerald-400 transition-colors text-white break-all"
                  >
                    {email}
                  </a>
                </div>
              </div>
            </div>

            {/* Social Grid items */}
            <div className="relative space-y-3 pt-6 border-t border-white/5 mt-8 lg:mt-0">
              <span className="block text-[10px] font-mono text-gray-400 uppercase tracking-widest font-sans">
                Redes Profesionales
              </span>
              <div className="flex flex-col gap-2">
                {socials.map((social) => (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="flex items-center justify-between p-3 rounded-lg glass-pf hover:bg-emerald-500/10 hover:border-emerald-500/30 border border-white/5 text-gray-300 hover:text-white transition-all duration-300 group cursor-pointer"
                  >
                    <div className="flex items-center space-x-2.5">
                      {getPlatformIcon(social.platform, "w-4 h-4 text-emerald-400")}
                      <span className="text-xs font-sans font-semibold uppercase">{social.label}</span>
                    </div>
                    <span className="text-[10px] font-mono text-emerald-500/60 group-hover:text-emerald-400 transition-colors">
                      [ Abrir ]
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Interactive Form Display Card */}
          <motion.div
            className="lg:col-span-8 p-6 sm:p-8 rounded-2xl glass-pf glass-glow-emerald"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <form
              action="https://formspree.io/f/xjgzegqg"
              method="POST"
              onSubmit={handleSubmit}
              className="space-y-5"
              id="form-contact"
            >

              {/* Dual inputs layout row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label htmlFor="contacto-name" className="block text-xs font-mono text-gray-400">
                    Tu Nombre
                  </label>
                  <input
                    type="text"
                    id="contacto-name"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleInputChange}
                    placeholder="Ej. Roberto Rojas"
                    className={`w-full px-4 py-2.5 rounded-xl bg-[#050505]/60 border ${
                      errors.nombre ? 'border-red-500/80 focus:ring-red-500' : 'border-white/10 focus:border-emerald-500'
                    } focus:outline-none focus:ring-2 focus:ring-emerald-500/20 text-sm text-white placeholder-gray-500 transition-all duration-200`}
                  />
                  {errors.nombre && (
                    <span className="text-[10px] font-mono text-red-400 flex items-center space-x-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.nombre}</span>
                    </span>
                  )}
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="contacto-email" className="block text-xs font-mono text-gray-400">
                    Correo Electrónico
                  </label>
                  <input
                    type="email"
                    id="contacto-email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Ej. roberto@empresa.com"
                    className={`w-full px-4 py-2.5 rounded-xl bg-[#050505]/60 border ${
                      errors.email ? 'border-red-500/80 focus:ring-red-500' : 'border-white/10 focus:border-emerald-500'
                    } focus:outline-none focus:ring-2 focus:ring-emerald-500/20 text-sm text-white placeholder-gray-500 transition-all duration-200`}
                  />
                  {errors.email && (
                    <span className="text-[10px] font-mono text-red-400 flex items-center space-x-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.email}</span>
                    </span>
                  )}
                </div>
              </div>

              {/* Subject field */}
              <div className="space-y-1.5">
                <label htmlFor="contacto-subject" className="block text-xs font-mono text-gray-400">
                  Asunto del Mensaje
                </label>
                <input
                  type="text"
                  id="contacto-subject"
                  name="asunto"
                  value={formData.asunto}
                  onChange={handleInputChange}
                  placeholder="Ej. Propuesta de proyecto / Consulta académica"
                  className={`w-full px-4 py-2.5 rounded-xl bg-[#050505]/60 border ${
                    errors.asunto ? 'border-red-500/80 focus:ring-red-500' : 'border-white/10 focus:border-emerald-500'
                  } focus:outline-none focus:ring-2 focus:ring-emerald-500/20 text-sm text-white placeholder-gray-500 transition-all duration-200`}
                />
                {errors.asunto && (
                  <span className="text-[10px] font-mono text-red-400 flex items-center space-x-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.asunto}</span>
                  </span>
                )}
              </div>

              {/* Message field */}
              <div className="space-y-1.5">
                <label htmlFor="contacto-message" className="block text-xs font-mono text-gray-400">
                  Tu Mensaje
                </label>
                <textarea
                  id="contacto-message"
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="Detalla tu propuesta o consulta con libertad académica..."
                  className={`w-full px-4 py-2.5 rounded-xl bg-[#050505]/60 border ${
                    errors.mensaje ? 'border-red-500/80 focus:ring-red-500' : 'border-white/10 focus:border-emerald-500'
                  } focus:outline-none focus:ring-2 focus:ring-emerald-500/20 text-sm text-white placeholder-gray-500 transition-all duration-200 resize-none`}
                />
                {errors.mensaje && (
                  <span className="text-[10px] font-mono text-red-400 flex items-center space-x-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.mensaje}</span>
                  </span>
                )}
              </div>

              {/* Submit Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center sm:justify-between gap-4">

                {/* Success / Error banners */}
                <div className="h-6 w-full flex-1">
                  <AnimatePresence>
                    {isSuccess && (
                      <motion.div
                        id="form-success-banner"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        className="flex items-center space-x-2 text-emerald-400 text-xs font-mono"
                      >
                        <CheckCircle2 className="w-4 h-4" />
                        <span>¡Mensaje Enviado con éxito! Boris te responderá pronto.</span>
                      </motion.div>
                    )}
                    {isError && (
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        className="flex items-center space-x-2 text-red-400 text-xs font-mono"
                      >
                        <AlertCircle className="w-4 h-4" />
                        <span>Error al enviar. Por favor intenta de nuevo.</span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <button
                  type="submit"
                  id="contacto-submit-btn"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 disabled:bg-emerald-500/40 text-[#0b0f17] font-semibold text-sm transition-all duration-300 hover:shadow-[0_0_15px_-3px_rgba(16,185,129,0.4)] flex items-center justify-center space-x-2 cursor-pointer disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-4 h-4 border-2 border-[#0b0f17] border-t-transparent rounded-full animate-spin" />
                      <span>Procesando...</span>
                    </>
                  ) : (
                    <>
                      <span>Enviar Mensaje</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

            </form>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

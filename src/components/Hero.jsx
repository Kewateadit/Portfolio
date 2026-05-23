import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import profileImg from '../assets/portfolio-image.png';

export default function Hero() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const resumes = [
    { name: 'GenAI Resume', path: '/Rezume__5_ genAI.pdf' },
    { name: 'Quickheal Resume', path: '/Rezume__5_ quickheal.pdf' },
    { name: 'MeThree1 Resume', path: '/methree1.pdf' },
    { name: 'MThree Resume', path: '/mthree.pdf' },
    { name: 'New1 Resume', path: '/new1.pdf' },
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background glowing orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-cyan/20 glow-orb" />
      <div className="absolute top-1/3 left-1/3 w-[400px] h-[400px] bg-accent-blue/10 glow-orb" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10 grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="inline-block px-3 py-1 mb-6 rounded-full bg-white/50 border border-white/60 backdrop-blur-sm text-sm font-medium text-text-secondary">
            Hi, I'm
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-text-primary">
            Adit Kewate
          </h1>

          <p className="text-lg text-text-secondary mb-12 max-w-lg leading-relaxed mt-6">
            Building intelligent systems and modern digital experiences. Passionate about AI, full-stack development, and creating solutions with a calm and patient approach.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a href="#projects" className="group flex items-center gap-2 bg-text-primary text-white px-6 py-3 rounded-full font-medium transition-all hover:bg-gray-800 hover:shadow-lg hover:shadow-gray-900/20">
              View Projects
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>
            
            <div className="relative">
              <button 
                onClick={() => setIsResumeOpen(!isResumeOpen)}
                onBlur={() => setTimeout(() => setIsResumeOpen(false), 200)}
                className="group flex items-center gap-2 bg-white text-text-primary border border-gray-200 px-6 py-3 rounded-full font-medium transition-all hover:border-gray-300 hover:bg-gray-50"
              >
                <Download size={18} className="text-text-secondary group-hover:text-text-primary" />
                Download Resume
              </button>
              
              <AnimatePresence>
                {isResumeOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-100 rounded-2xl shadow-xl overflow-hidden z-50"
                  >
                    {resumes.map((resume) => (
                      <a
                        key={resume.name}
                        href={resume.path}
                        download
                        className="block px-4 py-3 text-sm font-medium text-text-secondary hover:text-text-primary hover:bg-gray-50 transition-colors"
                      >
                        {resume.name}
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <div className="flex items-center gap-4 mt-8">
            <a href="https://github.com/Kewateadit" target="_blank" rel="noreferrer" className="p-3 bg-white/50 border border-white/60 rounded-full text-text-secondary hover:text-text-primary hover:bg-white transition-all hover:-translate-y-1">
              <FaGithub size={20} />
            </a>
            <a href="https://linkedin.com/in/adit-kewate-a7708225a/" target="_blank" rel="noreferrer" className="p-3 bg-white/50 border border-white/60 rounded-full text-text-secondary hover:text-accent-blue hover:bg-white transition-all hover:-translate-y-1">
              <FaLinkedin size={20} />
            </a>
          </div>
        </motion.div>

        {/* Visual / Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.0, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative hidden md:block"
        >
          <motion.div 
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="w-full aspect-square max-w-md mx-auto"
          >
            <div className="w-full h-full rounded-3xl glass-card overflow-hidden relative flex items-center justify-center bg-gradient-to-br from-white/40 to-white/10">
               <div className="absolute inset-0 bg-gradient-to-tr from-accent-cyan/10 to-transparent z-10 pointer-events-none"></div>
               <img src={profileImg} alt="Adit Kewate" loading="eager" decoding="async" className="w-full h-full object-cover relative z-0" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

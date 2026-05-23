import { motion } from 'framer-motion';
import { Download, FileText } from 'lucide-react';

export default function Resume() {
  return (
    <section id="resume" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="glass-card overflow-hidden relative"
        >
          {/* Decorative background glow */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-accent-blue/20 rounded-full mix-blend-multiply filter blur-2xl opacity-50"></div>
          <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-accent-cyan/20 rounded-full mix-blend-multiply filter blur-2xl opacity-50"></div>

          <div className="p-10 md:p-16 text-center relative z-10 flex flex-col items-center">
            <div className="w-16 h-16 bg-white/50 border border-white/60 rounded-full flex items-center justify-center mb-6 shadow-sm">
              <FileText className="text-text-primary" size={32} />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Resume</h2>
            <p className="text-text-secondary max-w-lg mb-10 leading-relaxed">
              Interested in learning more about my background, technical skills, and professional experience? Download my comprehensive resume.
            </p>
            
            <a 
              href="#" 
              target="_blank" 
              rel="noreferrer"
              className="group flex items-center gap-3 bg-text-primary text-white px-8 py-4 rounded-full font-medium transition-all hover:bg-gray-800 hover:shadow-xl hover:-translate-y-1"
            >
              <Download size={20} className="group-hover:animate-bounce" />
              Download Resume (PDF)
            </a>
            
            <p className="text-xs text-text-secondary mt-6 opacity-70">
              * The resume link will be updated with the actual PDF soon.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

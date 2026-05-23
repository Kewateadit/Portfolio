import { motion } from 'framer-motion';
import aboutBg from '../assets/about-bg.png';

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Subtle Premium Abstract Background */}
      <div 
        className="absolute inset-0 z-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage: `url(${aboutBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      <div className="container mx-auto px-6 md:px-12 max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-accent-cyan mx-auto rounded-full opacity-50"></div>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 text-lg text-text-secondary leading-relaxed text-center md:text-left"
          >
            <p>
              Hello! I'm <span className="font-medium text-text-primary">Adit Kewate</span>, a final-year B.Tech Information Technology student at MIT ADT University, Pune.
            </p>
            <p>
              I’m deeply interested in building technology that is both intelligent and thoughtfully designed. My primary areas of interest include <span className="font-medium text-text-primary">Artificial Intelligence, Computer Vision, and Full Stack Development</span>.
            </p>
            <p>
              I enjoy working on projects that solve practical problems while also creating smooth and intuitive user experiences. Whether it’s developing an AI-based system or building a modern web application, I focus on creating solutions that are functional, clean, and user-centric.
            </p>
            <p>
              I approach challenges with patience and curiosity, breaking problems down step by step to find efficient and scalable solutions. As I move toward completing my graduation, I’m continuously learning, experimenting, and improving my skills through real-world projects and hands-on development.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

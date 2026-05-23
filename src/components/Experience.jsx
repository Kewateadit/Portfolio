import { motion } from 'framer-motion';

const experiences = [
  {
    role: 'Software Engineering Intern',
    company: 'Tech Startup Placeholder',
    duration: 'June 2024 - Present',
    description: 'Developing and optimizing full-stack features using React and Node.js. Integrating machine learning models into web applications to enhance user interactions.',
  },
  {
    role: 'AI / Computer Vision Researcher',
    company: 'University Lab',
    duration: 'January 2023 - May 2024',
    description: 'Researched and implemented 2D to 3D image conversion techniques. Optimized OpenCV pipelines for real-time monitoring applications.',
  },
  {
    role: 'Freelance Web Developer',
    company: 'Self-Employed',
    duration: '2022 - 2023',
    description: 'Designed and built responsive websites for local businesses focusing on performance and modern UI/UX principles.',
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative bg-white/30">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience</h2>
          <div className="w-20 h-1 bg-accent-cyan mx-auto rounded-full opacity-50 mb-4"></div>
        </motion.div>

        <div className="relative border-l border-gray-200 ml-3 md:ml-0">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="mb-12 ml-8 md:ml-12 relative"
            >
              {/* Timeline dot */}
              <div className="absolute -left-10 md:-left-[53px] top-1.5 w-4 h-4 bg-accent-cyan rounded-full border-4 border-base-beige shadow-sm"></div>
              
              <div className="glass-card p-6 md:p-8 relative">
                {/* Arrow pointing to timeline */}
                <div className="absolute top-4 -left-3 w-3 h-3 bg-white/40 rotate-45 border-l border-b border-white/60 hidden md:block"></div>
                
                <span className="text-sm font-medium text-accent-cyan mb-2 block">{exp.duration}</span>
                <h3 className="text-xl font-heading font-semibold text-text-primary mb-1">{exp.role}</h3>
                <h4 className="text-md font-medium text-text-secondary mb-4">{exp.company}</h4>
                <p className="text-text-secondary leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

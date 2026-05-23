import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: '2D to 3D Conversion using AI',
    description: 'An intelligent system that leverages AI models to accurately convert 2D images into detailed 3D structural models.',
    tech: ['Python', 'OpenCV', 'PyTorch', '3D Graphics'],
    github: '#',
    demo: '#',
  },
  {
    title: 'Construction Progress Monitoring',
    description: 'A comprehensive monitoring platform utilizing computer vision to track, analyze, and report real-time construction progress.',
    tech: ['Python', 'React', 'Node.js', 'MySQL'],
    github: '#',
    demo: '#',
  },
  {
    title: 'Reminder App with Smart Features',
    description: 'A contextual reminder application that integrates smart scheduling and notifications to enhance daily productivity.',
    tech: ['Java', 'Android SDK', 'SQLite'],
    github: '#',
    demo: '#',
  },
  {
    title: 'Emotion Recognition from Speech',
    description: 'An advanced machine learning pipeline using Recurrent Neural Networks (RNN) to accurately detect emotional states from audio data.',
    tech: ['Python', 'TensorFlow/Keras', 'Librosa'],
    github: '#',
    demo: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-accent-blue mx-auto rounded-full opacity-50 mb-4"></div>
          <p className="text-text-secondary max-w-2xl mx-auto">
            A selection of my recent work focusing on AI, computer vision, and full-stack development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1.0, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="glass-card group overflow-hidden flex flex-col h-full border-transparent group-hover:border-accent-cyan/30"
            >

              {/* Project Content */}
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-heading font-medium mb-3 text-text-primary group-hover:text-accent-blue transition-colors">
                  {project.title}
                </h3>
                <p className="text-text-secondary mb-6 flex-grow leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((tag) => (
                    <span key={tag} className="text-xs font-medium px-3 py-1 bg-gray-100 text-gray-600 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 mt-auto pt-4 border-t border-gray-100">
                  <a href={project.github} className="flex items-center gap-2 text-sm font-medium text-text-secondary hover:text-text-primary transition-colors">
                    <FaGithub size={18} />
                    Code
                  </a>

                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

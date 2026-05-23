import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Languages',
    skills: ['Java', 'Python', 'C++', 'JavaScript'],
  },
  {
    title: 'Frontend',
    skills: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'React', 'Tailwind CSS'],
  },
  {
    title: 'Backend',
    skills: ['Node.js'],
  },
  {
    title: 'Databases',
    skills: ['MySQL'],
  },
  {
    title: 'AI / ML',
    skills: ['OpenCV'],
  },
  {
    title: 'Tools',
    skills: ['Git', 'GitHub'],
  },
];

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section id="skills" className="py-24 relative bg-white/30">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-accent-cyan mx-auto rounded-full opacity-50 mb-4"></div>
          <p className="text-text-secondary max-w-2xl mx-auto">
            A comprehensive toolkit for building intelligent, modern, and scalable digital products.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category) => (
            <motion.div key={category.title} variants={itemVariants} className="glass-card bg-white/60 p-8 group">
              <h3 className="text-xl font-heading font-medium mb-6 text-text-primary group-hover:text-accent-cyan transition-colors">
                {category.title}
              </h3>
              <div className="flex flex-wrap items-center gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-full text-sm font-medium bg-white/60 border border-white/80 text-text-secondary shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

'use client';

import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Frontend',
    icon: '🎨',
    skills: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Redux', 'Vite'],
  },
  {
    title: 'Backend',
    icon: '⚙️',
    skills: ['Node.js', 'Express', 'Java', 'Spring Framework', 'Sequelize', 'JDBC', 'JPA'],
  },
  {
    title: 'Database',
    icon: '🗄️',
    skills: ['PostgreSQL', 'MySQL', 'MySQL Workbench'],
  },
  {
    title: 'Dev Tools',
    icon: '🔧',
    skills: ['Git', 'NPM', 'Vercel', 'Axios', 'Bootstrap', 'Bulma', 'Nodemon'],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 md:px-12" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-4xl md:text-5xl font-bold text-center mb-4"
        >
          Arsenal Tecnológico
        </motion.h2>
        <div className="section-divider max-w-xs mx-auto mb-16" />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
              className="card-vintage p-6 rounded-lg"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">{category.icon}</span>
                <h3 className="font-heading text-xl font-semibold" style={{ color: 'var(--accent)' }}>
                  {category.title}
                </h3>
              </div>

              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                    className="flex items-center justify-between group"
                  >
                    <span className="font-body text-sm" style={{ color: 'var(--text-secondary)' }}>
                      {skill}
                    </span>
                    <div className="h-1 rounded-full overflow-hidden" style={{ backgroundColor: 'var(--border)' }}>
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: '100%' }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + skillIndex * 0.1, duration: 0.6 }}
                        className="h-full rounded-full"
                        style={{
                          backgroundColor: 'var(--accent)',
                          boxShadow: '0 0 10px var(--accent)',
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

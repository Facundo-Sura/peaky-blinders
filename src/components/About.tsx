'use client';

import { motion } from 'framer-motion';

export const About = () => {
  return (
    <section id="about" className="py-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div
              className="w-64 h-80 mx-auto relative"
              style={{
                backgroundColor: 'var(--bg-secondary)',
                border: '3px solid var(--accent)',
                borderRadius: '8px',
              }}
            >
              <div
                className="absolute -top-2 -left-2 -right-2 -bottom-2 border-2 opacity-30"
                style={{ borderColor: 'var(--accent)' }}
              />
              <div className="absolute inset-4 overflow-hidden rounded">
                <img
                  src="/facundo-photo.webp"
                  alt="Facundo Sura"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl opacity-30">👤</span>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-6 py-2 rounded-full"
              style={{
                backgroundColor: 'var(--accent)',
                color: 'var(--bg)',
              }}
            >
              <span className="font-heading text-sm font-semibold tracking-wider">
                By Order of the Code
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Sobre Mí
            </h2>
            <div className="section-divider max-w-xs mb-8" />
            
            <div className="space-y-6 font-body text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              <p>
                Soy un desarrollador fullstack apasionado por transformar ideas en experiencias 
                digitales que impactan. Mi filosofía de trabajo es simple: <span className="italic" style={{ color: 'var(--accent)' }}>código limpio, 
                comunicación clara y resultados que superan expectativas</span>.
              </p>
              <p>
                Con experiencia en el stack completo desde React hasta PostgreSQL, me especializo 
                en construir aplicaciones escalables que no solo funcionan bien, sino que también 
                se sienten bien usadas.
              </p>
              <p>
                Cada proyecto es una oportunidad para demostrar que la tecnología y el diseño 
                pueden ir de la mano, creando productos que los usuarios realmente disfrutan.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <div className="px-4 py-2 rounded" style={{ backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border)' }}>
                <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>Ubicación</span>
                <p className="font-heading font-semibold" style={{ color: 'var(--accent)' }}>Buenos Aires, Argentina</p>
              </div>
              <div className="px-4 py-2 rounded" style={{ backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border)' }}>
                <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>Disponibilidad</span>
                <p className="font-heading font-semibold" style={{ color: 'var(--accent)' }}>Proyecto Fulltime</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

'use client';

import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';

const socialLinks = [
  {
    name: 'Facebook',
    icon: '📘',
    url: 'https://www.facebook.com/facundo.sura',
  },
  {
    name: 'Instagram',
    icon: '📷',
    url: 'https://www.instagram.com/facu_dev/',
  },
  {
    name: 'LinkedIn',
    icon: '💼',
    url: 'https://www.linkedin.com/in/dev-facundo-sura/',
  },
  {
    name: 'GitHub',
    icon: '🐙',
    url: 'https://github.com/Facundo-Sura',
  },
];

export const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors: typeof errors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es requerido';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'El email no es válido';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'El mensaje es requerido';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
      setTimeout(() => {
        setFormData({ name: '', email: '', message: '' });
        setSubmitted(false);
      }, 3000);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-4xl md:text-5xl font-bold text-center mb-4"
        >
          ¿Listo para el próximo movimiento?
        </motion.h2>
        <div className="section-divider max-w-xs mx-auto mb-16" />

        <div className="grid md:grid-cols-2 gap-12">
          <motion.form
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-8"
          >
            <div>
              <input
                type="text"
                placeholder="Tu nombre"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className={`input-vintage w-full ${errors.name ? 'border-red-500' : ''}`}
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">{errors.name}</p>
              )}
            </div>

            <div>
              <input
                type="email"
                placeholder="Tu email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className={`input-vintage w-full ${errors.email ? 'border-red-500' : ''}`}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <textarea
                placeholder="Tu mensaje..."
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className={`input-vintage w-full resize-none ${errors.message ? 'border-red-500' : ''}`}
              />
              {errors.message && (
                <p className="text-red-500 text-xs mt-1">{errors.message}</p>
              )}
            </div>

            <button type="submit" className="ink-button w-full relative overflow-hidden">
              {submitted ? (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex items-center justify-center gap-2"
                >
                  ✓ Mensaje enviado
                </motion.span>
              ) : (
                'Enviar mensaje'
              )}
            </button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="font-heading text-xl font-semibold mb-4" style={{ color: 'var(--accent)' }}>
                Redes Sociales
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 rounded-lg transition-all duration-300 glow-amber"
                    style={{
                      backgroundColor: 'var(--bg-secondary)',
                      border: '1px solid var(--border)',
                    }}
                  >
                    <span className="text-2xl">{social.icon}</span>
                    <span className="font-body text-sm">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-heading text-xl font-semibold mb-4" style={{ color: 'var(--accent)' }}>
                Datos de Contacto
              </h3>
              <div className="space-y-3 font-body" style={{ color: 'var(--text-secondary)' }}>
                <p>📧 facundo.sura@email.com</p>
                <p>📍 Buenos Aires, Argentina</p>
                <p>🕐 Disponible para proyectos fulltime</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

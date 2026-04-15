'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <main
      className="min-h-screen flex items-center justify-center px-6"
      style={{ backgroundColor: 'var(--bg)' }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-lg"
      >
        <div
          className="w-32 h-32 mx-auto mb-8 rounded-full flex items-center justify-center"
          style={{
            backgroundColor: 'var(--bg-secondary)',
            border: '3px solid var(--accent)',
          }}
        >
          <span className="text-6xl">📁</span>
        </div>

        <h1 className="font-heading text-5xl font-bold mb-4" style={{ color: 'var(--accent)' }}>
          404
        </h1>
        
        <h2 className="font-heading text-2xl font-semibold mb-4">
          Este expediente no existe...
        </h2>
        
        <p
          className="font-body text-lg mb-8"
          style={{ color: 'var(--text-secondary)' }}
        >
          ¿volvemos al archivo principal?
        </p>

        <Link
          href="/"
          className="ink-button inline-block"
        >
          Volver al inicio
        </Link>

        <div className="mt-12 pt-8 border-t" style={{ borderColor: 'var(--border)' }}>
          <p className="font-mono text-xs" style={{ color: 'var(--text-secondary)' }}>
            ERROR: EXPEDIENTE_NO_ENCONTRADO
          </p>
        </div>
      </motion.div>
    </main>
  );
}

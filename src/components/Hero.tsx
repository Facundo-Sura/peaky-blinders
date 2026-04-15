'use client';

import { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { useTypewriter } from '@/hooks/useTypewriter';
import { useTheme } from '@/contexts/ThemeContext';

const SmokeParticle = ({ delay, duration }: { delay: number; duration: number }) => (
  <div
    className="smoke-particle"
    style={{
      left: `${Math.random() * 100}%`,
      animationDelay: `${delay}s`,
      animationDuration: `${duration}s`,
      width: `${40 + Math.random() * 40}px`,
      height: `${40 + Math.random() * 40}px`,
      opacity: 0.03 + Math.random() * 0.05,
    }}
  />
);

interface HeroProps {
  onContactClick: () => void;
}

export const Hero = ({ onContactClick }: HeroProps) => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const { displayText, isComplete } = useTypewriter('Facundo Sura', 80);
  
  useEffect(() => setMounted(true), []);

  const particles = useMemo(() => {
    return Array.from({ length: 15 }, (_, i) => ({
      id: i,
      delay: Math.random() * 10,
      duration: 8 + Math.random() * 7,
    }));
  }, []);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: `linear-gradient(180deg, var(--bg) 0%, var(--bg-secondary) 100%)`,
      }}
    >
      {mounted && theme.effects.smoke && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {particles.map((p) => (
            <SmokeParticle key={p.id} delay={p.delay} duration={p.duration} />
          ))}
        </div>
      )}

      <div className="absolute top-8 right-8 hidden md:block">
        <svg
          width="60"
          height="40"
          viewBox="0 0 60 40"
          fill="none"
          className="opacity-10"
          style={{ fill: 'var(--accent)' }}
        >
          <path d="M5 35 L15 5 L45 5 L55 35 Z" />
          <rect x="10" y="8" width="40" height="4" />
          <rect x="12" y="16" width="36" height="2" />
          <rect x="14" y="22" width="32" height="2" />
        </svg>
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight"
          style={{ color: 'var(--text)' }}
        >
          {displayText}
          <span className="typewriter-cursor" />
        </motion.h1>

        {isComplete && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p
              className="font-body text-xl md:text-2xl mb-12"
              style={{ color: 'var(--text-secondary)' }}
            >
              Fullstack Developer | Construyendo imperios digitales
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={scrollToProjects} className="ink-button">
                Ver mis casos
              </button>
              <button onClick={onContactClick} className="ink-button">
                Contactar
              </button>
            </div>
          </motion.div>
        )}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div
          className="w-6 h-10 border-2 rounded-full flex justify-center pt-2"
          style={{ borderColor: 'var(--accent)' }}
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full"
            style={{ backgroundColor: 'var(--accent)' }}
          />
        </div>
      </motion.div>
    </section>
  );
};

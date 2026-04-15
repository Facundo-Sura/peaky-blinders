'use client';

import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Skills } from '@/components/Skills';
import { Projects } from '@/components/Projects';
import { Blog } from '@/components/Blog';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { useKonamiCode } from '@/hooks/useKonamiCode';
import { useTheme } from '@/contexts/ThemeContext';

const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(scrollPercent);
    };

    window.addEventListener('scroll', updateProgress);
    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  return (
    <div
      className="progress-bar"
      style={{ width: `${progress}%` }}
    />
  );
};

const ShelleyModeToast = ({ show }: { show: boolean }) => (
  <AnimatePresence>
    {show && (
      <motion.div
        initial={{ opacity: 0, y: -50, x: '-50%' }}
        animate={{ opacity: 1, y: 0, x: '-50%' }}
        exit={{ opacity: 0, y: -50, x: '-50%' }}
        className="fixed top-20 left-1/2 z-50 px-8 py-4 rounded-lg shadow-2xl text-center"
        style={{
          backgroundColor: 'var(--accent)',
          color: 'var(--bg)',
        }}
      >
        <p className="font-heading text-xl font-bold mb-1">Bienvenido al Shelby Gang 👑</p>
        <p className="font-body text-sm opacity-80">Modo Shelby activado por 10 segundos</p>
      </motion.div>
    )}
  </AnimatePresence>
);

export default function Home() {
  const [showContactModal, setShowContactModal] = useState(false);
  const [showShelleyToast, setShowShelleyToast] = useState(false);
  const { activateShelleyMode } = useTheme();

  useKonamiCode(() => {
    activateShelleyMode();
    setShowShelleyToast(true);
    setTimeout(() => setShowShelleyToast(false), 3000);
  });

  const handleContactClick = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main>
      <ScrollProgress />
      <ShelleyModeToast show={showShelleyToast} />
      
      <Hero onContactClick={handleContactClick} />
      <About />
      <Skills />
      <Projects />
      <Blog />
      <Contact />
      <Footer />
    </main>
  );
}

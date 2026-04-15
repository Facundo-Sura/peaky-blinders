'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface ThemeToggleProps {
  className?: string;
}

export const ThemeToggle = ({ className = '' }: ThemeToggleProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, themes, setTheme } = useTheme();

  return (
    <div className={`relative ${className}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300"
        style={{
          backgroundColor: 'var(--bg-secondary)',
          border: '1px solid var(--border)',
          color: 'var(--accent)',
        }}
        aria-label="Cambiar tema"
      >
        <span className="text-xl">{theme.icon}</span>
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute right-0 mt-2 py-2 rounded-lg shadow-xl min-w-[200px]"
          style={{
            backgroundColor: 'var(--bg-secondary)',
            border: '1px solid var(--border)',
          }}
        >
          {themes.map((t) => (
            <button
              key={t.id}
              onClick={() => {
                setTheme(t.id);
                setIsOpen(false);
              }}
              className={`w-full px-4 py-3 text-left flex items-center gap-3 transition-all duration-200 ${
                t.id === theme.id ? 'bg-opacity-20' : ''
              }`}
              style={{
                backgroundColor: t.id === theme.id ? 'var(--accent)' : 'transparent',
                color: t.id === theme.id ? 'var(--bg)' : 'var(--text)',
              }}
            >
              <span className="text-lg">{t.icon}</span>
              <span className="font-body text-sm">{t.name}</span>
            </button>
          ))}
        </motion.div>
      )}
    </div>
  );
};

import { useTheme } from '@/contexts/ThemeContext';

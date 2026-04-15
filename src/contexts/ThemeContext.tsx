'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Theme, themes, applyTheme } from '@/lib/themes';

interface ThemeContextType {
  theme: Theme;
  themeId: string;
  setTheme: (id: string) => void;
  themes: Theme[];
  shelleyMode: boolean;
  activateShelleyMode: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [themeId, setThemeId] = useState('midnight-birmingham');
  const [shelleyMode, setShelleyMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  const theme = themes.find((t) => t.id === themeId) || themes[0];

  useEffect(() => {
    const saved = localStorage.getItem('peaky-theme') || 'midnight-birmingham';
    setThemeId(saved);
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    const currentTheme = themes.find((t) => t.id === themeId) || themes[0];
    
    if (shelleyMode) {
      document.documentElement.style.setProperty('--bg', '#0D0D0D');
      document.documentElement.style.setProperty('--bg-secondary', '#1A1209');
      document.documentElement.style.setProperty('--text', '#D4AF37');
      document.documentElement.style.setProperty('--text-secondary', '#8B7355');
      document.documentElement.style.setProperty('--accent', '#B00907');
      document.documentElement.style.setProperty('--accent-secondary', '#D4AF37');
      document.documentElement.style.setProperty('--border', '#5E3115');
      document.body.classList.add('sepia-filter', 'shelley-mode');
    } else {
      applyTheme(currentTheme);
      document.body.classList.remove('shelley-mode');
    }
  }, [themeId, mounted, shelleyMode]);

  const handleSetTheme = (id: string) => {
    setThemeId(id);
    localStorage.setItem('peaky-theme', id);
  };

  const activateShelleyMode = () => {
    setShelleyMode(true);
    setTimeout(() => setShelleyMode(false), 10000);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        themeId,
        setTheme: handleSetTheme,
        themes,
        shelleyMode,
        activateShelleyMode,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

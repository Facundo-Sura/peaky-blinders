import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)',
        'bg-secondary': 'var(--bg-secondary)',
        text: 'var(--text)',
        'text-secondary': 'var(--text-secondary)',
        accent: 'var(--accent)',
        'accent-secondary': 'var(--accent-secondary)',
        border: 'var(--border)',
      },
      fontFamily: {
        heading: ['Playfair Display', 'serif'],
        body: ['Merriweather', 'serif'],
        mono: ['Fira Code', 'monospace'],
      },
      animation: {
        'smoke': 'smoke 15s ease-in-out infinite',
        'typewriter': 'typewriter 80ms steps(1) forwards',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'seal-melt': 'sealMelt 1.5s ease-out forwards',
      },
      keyframes: {
        smoke: {
          '0%': { transform: 'translateY(100vh) rotate(0deg)', opacity: '0' },
          '10%': { opacity: '0.08' },
          '90%': { opacity: '0.03' },
          '100%': { transform: 'translateY(-20vh) rotate(45deg)', opacity: '0' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px var(--accent), 0 0 10px var(--accent)' },
          '100%': { boxShadow: '0 0 20px var(--accent), 0 0 40px var(--accent)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        sealMelt: {
          '0%': { transform: 'scale(1.5) rotate(-10deg)', opacity: '0' },
          '50%': { opacity: '1' },
          '100%': { transform: 'scale(1) rotate(0deg)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};

export default config;

'use client';

import { ThemeToggle } from './ThemeToggle';

export const Footer = () => {
  return (
    <footer
      className="py-12 px-6 border-t"
      style={{
        backgroundColor: 'var(--bg)',
        borderColor: 'var(--border)',
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--accent)' }}>
              <span className="font-heading font-bold text-lg" style={{ color: 'var(--bg)' }}>FS</span>
            </div>
            <div>
              <p className="font-heading font-semibold">Facundo Sura</p>
              <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                Fullstack Developer
              </p>
            </div>
          </div>

          <ThemeToggle />

          <nav className="flex gap-6">
            {['Proyectos', 'Skills', 'Blog', 'Contacto'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="font-body text-sm transition-colors hover:opacity-100"
                style={{ color: 'var(--text-secondary)' }}
              >
                {item}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-8 pt-8 border-t text-center" style={{ borderColor: 'var(--border)' }}>
          <p className="font-body text-sm" style={{ color: 'var(--text-secondary)' }}>
            © 2026 Facundo Sura | Coded with precision in Birmingham style
          </p>
          <p className="font-body text-xs mt-2" style={{ color: 'var(--accent-secondary)' }}>
            Hecho con ☕ y código limpio
          </p>
        </div>
      </div>
    </footer>
  );
};

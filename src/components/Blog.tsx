'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { blogArticles, categories, BlogArticle } from '@/lib/blog-articles';

type CategoryKey = keyof typeof categories;

const ArticleCard = ({ article }: { article: BlogArticle }) => (
  <motion.article
    layout
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, scale: 0.95 }}
    className="card-vintage rounded-lg overflow-hidden group cursor-pointer"
  >
    <div className="relative h-48 overflow-hidden">
      <img
        src={article.image}
        alt={article.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.style.display = 'none';
          target.parentElement!.innerHTML = `
            <div class="w-full h-full flex items-center justify-center" style="background: var(--bg-secondary)">
              <span class="text-6xl opacity-30">📰</span>
            </div>
          `;
        }}
      />
      <div
        className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity"
        style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)' }}
      >
        <button className="ink-button text-xs py-2 self-start">
          Leer expediente
        </button>
      </div>
      <span
        className="absolute top-4 left-4 px-3 py-1 rounded text-xs font-semibold"
        style={{
          backgroundColor: 'var(--accent)',
          color: 'var(--bg)',
        }}
      >
        {categories[article.category].icon} {categories[article.category].label}
      </span>
    </div>

    <div className="p-6">
      <div className="flex items-center gap-4 mb-3 text-xs" style={{ color: 'var(--text-secondary)' }}>
        <span>{article.date}</span>
        <span>•</span>
        <span>{article.readTime} de lectura</span>
      </div>
      <h3
        className="font-heading text-xl font-semibold mb-3 leading-tight"
        style={{ color: 'var(--text)' }}
      >
        {article.title}
      </h3>
      <p className="font-body text-sm line-clamp-3" style={{ color: 'var(--text-secondary)' }}>
        {article.excerpt}
      </p>
    </div>
  </motion.article>
);

export const Blog = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryKey | 'all'>('all');

  const filteredArticles = useMemo(() => {
    if (activeCategory === 'all') return blogArticles;
    return blogArticles.filter((a) => a.category === activeCategory);
  }, [activeCategory]);

  const categoryKeys: (CategoryKey | 'all')[] = ['all', 'taller', 'casos', 'bitacora', 'manifiesto'];

  return (
    <section id="blog" className="py-24 px-6 md:px-12" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-4xl md:text-5xl font-bold text-center mb-4"
        >
          The Birmingham Gazette
        </motion.h2>
        <p
          className="text-center mb-8 font-body"
          style={{ color: 'var(--text-secondary)' }}
        >
          Taller Técnico | Casos Resueltos | Bitácora de Viaje | Manifiesto Code
        </p>
        <div className="section-divider max-w-xs mx-auto mb-12" />

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categoryKeys.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300"
              style={{
                backgroundColor: activeCategory === cat ? 'var(--accent)' : 'var(--bg)',
                color: activeCategory === cat ? 'var(--bg)' : 'var(--text)',
                border: `1px solid ${activeCategory === cat ? 'var(--accent)' : 'var(--border)'}`,
              }}
            >
              {cat === 'all' ? '📖 Todos' : `${categories[cat as CategoryKey].icon} ${categories[cat as CategoryKey].label}`}
            </button>
          ))}
        </div>

        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredArticles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredArticles.length === 0 && (
          <p className="text-center py-12" style={{ color: 'var(--text-secondary)' }}>
            No hay artículos en esta categoría aún.
          </p>
        )}
      </div>
    </section>
  );
};

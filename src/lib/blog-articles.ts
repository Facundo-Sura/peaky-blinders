export interface BlogArticle {
  id: string;
  title: string;
  excerpt: string;
  category: 'taller' | 'casos' | 'bitacora' | 'manifiesto';
  date: string;
  image: string;
  readTime: string;
}

export const categories = {
  taller: { label: 'Taller Técnico', icon: '🔧' },
  casos: { label: 'Casos Resueltos', icon: '🗂️' },
  bitacora: { label: 'Bitácora de Viaje', icon: '🧭' },
  manifiesto: { label: 'Manifiesto Code', icon: '📜' },
};

export const blogArticles: BlogArticle[] = [
  {
    id: 'optimizando-queries-postgres',
    title: 'Optimizando Queries en PostgreSQL: De 30s a 200ms',
    excerpt: 'Cómo identifiqué y solucioné un cuello de botella en una app de e-commerce con 100k+ productos.',
    category: 'casos',
    date: 'Marzo 2026',
    image: '/blog/optimizacion-postgres.webp',
    readTime: '8 min',
  },
  {
    id: 'docker-multi-stage-react',
    title: 'Docker Multi-Stage para React: Imágenes 10x más pequeñas',
    excerpt: 'Guía práctica para construir imágenes Docker optimizadas para aplicaciones React en producción.',
    category: 'taller',
    date: 'Febrero 2026',
    image: '/blog/docker-react.webp',
    readTime: '12 min',
  },
  {
    id: 'conferencia-nodebuenosaires',
    title: 'Mi experiencia en Node.js Buenos Aires 2026',
    excerpt: 'Key takeaways del meetup mensual: serverless, edge computing y el futuro de Node.',
    category: 'bitacora',
    date: 'Enero 2026',
    image: '/blog/nodeba.webp',
    readTime: '5 min',
  },
  {
    id: 'por-que-no-usar-any',
    title: 'El Manifesto Anti-any: Por qué TypeScript necesita tipos estrictos',
    excerpt: 'Un llamado a la comunidad para escribir mejor TypeScript. Los tipos son documentación, no obstáculos.',
    category: 'manifiesto',
    date: 'Diciembre 2025',
    image: '/blog/typescript-manifesto.webp',
    readTime: '6 min',
  },
  {
    id: 'crud-restful-nextjs',
    title: 'CRUD RESTful Completo con Next.js 14 y Server Actions',
    excerpt: 'Tutorial paso a paso para crear un API RESTful completo sin rutas API tradicionales.',
    category: 'taller',
    date: 'Noviembre 2025',
    image: '/blog/nextjs-crud.webp',
    readTime: '15 min',
  },
  {
    id: 'debugging-production',
    title: 'Debugging en Producción: Cuando los logs no son suficientes',
    excerpt: 'Estrategias advanced para identificar y resolver bugs en entornos de producción sin downtime.',
    category: 'casos',
    date: 'Octubre 2025',
    image: '/blog/debugging.webp',
    readTime: '10 min',
  },
];

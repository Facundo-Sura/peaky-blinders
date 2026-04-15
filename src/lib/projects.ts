export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  image: string;
  liveUrl: string;
  repoUrl?: string;
}

export const projects: Project[] = [
  {
    id: 'pintureria-casco-viejo',
    title: 'E-commerce Pinturería Casco Viejo',
    description: 'Tienda online de pinturas y ferretería con catálogo dinámico, carrito y tutoriales integrados.',
    tech: ['React', 'Tailwind', 'Node.js', 'PostgreSQL'],
    image: '/projects/pintureria-casco-viejo.webp',
    liveUrl: 'https://pintureria-casco-viejo.com.ar/',
  },
  {
    id: 'aby-doro',
    title: 'Portafolio Aby Doro',
    description: 'Portfolio para creadora UGC con galería interactiva, métricas animadas y formulario de contacto.',
    tech: ['Next.js', 'Framer Motion', 'Vercel'],
    image: '/projects/aby-doro.webp',
    liveUrl: 'https://aby-doro.vercel.app/',
  },
  {
    id: 'inmobiliaria-scotto',
    title: 'Business Inmobiliaria Scotto',
    description: 'Sitio para martillero público con listado de propiedades, vehículos y subastas en Alta Gracia.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'PHP'],
    image: '/projects/inmobiliaria-scotto.webp',
    liveUrl: 'https://inmobiliariascotto.com.ar/',
  },
  {
    id: 'titanium-team',
    title: 'Titanium Team',
    description: 'Web para escuela de Muay Thai con reservas de clases, testimonios y sección de disciplinas.',
    tech: ['React', 'Vite', 'Vercel'],
    image: '/projects/titanium-team.webp',
    liveUrl: 'https://titanium-team.vercel.app/',
  },
  {
    id: 'estudio-juridico-sura',
    title: 'Estudio Jurídico Sura',
    description: 'Sitio para estudio de abogados con áreas de práctica, formulario de citas y diseño corporativo.',
    tech: ['HTML5', 'CSS3', 'Bootstrap', 'PHP'],
    image: '/projects/estudio-juridico-sura.webp',
    liveUrl: 'https://estudio-juridico-sura.com.ar/',
  },
  {
    id: 'violeta-gomez',
    title: 'Profesora de Abogacía - Violeta Gómez',
    description: 'Portfolio académico con biografía, publicaciones y contacto para clases de derecho.',
    tech: ['Next.js', 'Tailwind', 'Vercel'],
    image: '/projects/violeta-gomez.webp',
    liveUrl: 'https://violeta-gomez.vercel.app/',
  },
];

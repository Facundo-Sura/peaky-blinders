# Peaky Portfolio - Facundo Sura

Portfolio profesional con estética inspirada en Peaky Blinders. Desarrollado con Next.js, Tailwind CSS, y Embla Carousel.

## 🚀 Instalación

```bash
# Clonar el repositorio
git clone https://github.com/Facundo-Sura/peaky-portfolio.git
cd peaky-portfolio

# Instalar dependencias
npm install

# Iniciar desarrollo
npm run dev

# Build para producción
npm run build
```

## 📁 Estructura del Proyecto

```
peaky-portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Layout principal con ThemeProvider
│   │   ├── page.tsx        # Página principal
│   │   └── not-found.tsx   # Página 404 custom
│   ├── components/
│   │   ├── Hero.tsx        # Hero con typewriter y partículas
│   │   ├── About.tsx        # Sección sobre mí
│   │   ├── Skills.tsx      # Grid de habilidades
│   │   ├── Projects.tsx    # Carousel de proyectos
│   │   ├── Blog.tsx        # Grid de artículos vintage
│   │   ├── Contact.tsx     # Formulario de contacto
│   │   ├── Footer.tsx      # Footer
│   │   ├── ThemeToggle.tsx # Selector de temas
│   │   └── LoadingScreen.tsx
│   ├── contexts/
│   │   └── ThemeContext.tsx # Gestión de temas
│   ├── hooks/
│   │   ├── useTypewriter.ts
│   │   └── useKonamiCode.ts
│   ├── lib/
│   │   ├── themes.ts       # Configuraciones de 5 temas
│   │   ├── projects.ts     # Datos de proyectos
│   │   └── blog-articles.ts
│   └── styles/
│       └── globals.css     # Estilos base y animaciones
├── public/
│   ├── projects/           # Imágenes de proyectos
│   ├── blog/               # Imágenes de blog
│   └── facundo-photo.webp  # Tu foto
└── tailwind.config.ts
```

## 🎨 Temas Disponibles

| Tema | Icono | Descripción |
|------|-------|-------------|
| Midnight Birmingham | 🌙 | Oscuro con humo sutil |
| Small Heath Dawn | 🌅 | Amanecer cálido |
| Whiskey Hour | 🥃 | Tonos ámbar |
| Industrial Winter | ❄️ | Frío industrial |
| Archive Mode | 🕯️ | Sepia vintage |

## 🔧 Personalización

### Cambiar Información Personal

Edita los archivos en `src/lib/`:
- `projects.ts` - Tus proyectos
- `blog-articles.ts` - Artículos del blog
- `themes.ts` - Paletas de colores

### Agregar Proyectos Reales

1. Coloca las screenshots en `public/projects/`
2. Actualiza `src/lib/projects.ts` con las URLs correctas

### Cambiar Foto

Reemplaza `public/facundo-photo.webp` con tu foto (recomendado: 400x600px)

## 🥃 Easter Eggs

- **Konami Code** (↑↑↓↓←→←→BA): Activa el "Modo Shelby" por 10 segundos
- **Loading Screen**: Animación de sello de cera al cargar
- **404 Custom**: Página de error estilizada

## 🔊 Agregar Sonidos (Opcional)

Los placeholders están listos. Para activar:

1. Agrega archivos MP3 en `public/sounds/`:
   - `typewriter-click.mp3`
   - `ink-stamp.mp3`
   - `match-strike.mp3`

2. Descomenta el código en los componentes correspondientes

## 🚀 Deploy

### Vercel (Recomendado)

```bash
npm install -g vercel
vercel
```

### GitHub Pages

```bash
npm run build
# Sube el contenido de /out a GitHub Pages
```

## 📱 Responsive

- Mobile: 320px - 767px
- Tablet: 768px - 1023px
- Desktop: 1024px+

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Carousel**: Embla Carousel
- **Animations**: Framer Motion
- **Language**: TypeScript

## 📄 Licencia

MIT - Hecho con ☕ y código limpio por Facundo Sura

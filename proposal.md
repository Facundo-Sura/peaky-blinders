# Proposal: Peaky Blinders Portfolio - Facundo Sura

## Intent

Crear un portafolio profesional fullstack para Facundo Sura con estética inspirada en Peaky Blinders (Birmingham 1920s). El objetivo es diferenciarse visualmente del portafolio Matrix existente, impresionar a reclutadores con una identidad de marca única, y demostrar habilidades técnicas de alto nivel mediante código limpio y arquitectura moderna.

## Scope

### In Scope
- Landing page completa con Hero, Sobre mí, Skills, Proyectos (carousel), Blog, Contacto, Footer
- Sistema de 5 temas dinámicos con toggle y localStorage persistence
- Carousel infinito de proyectos con Embla Carousel
- Animaciones: typewriter effect, hover glows, transiciones suaves
- Responsive design mobile-first
- SEO básico: meta tags, Open Graph
- Easter eggs: Konami code "Modo Shelby", cursor personalizado (opcional)

### Out of Scope
- Backend/API (portfolio estático)
- Sistema de blog con CMS (se muestra estructura visual, artículos placeholder)
- Sounds effects (placeholders .mp3 incluídos pero sin archivos reales)
- Deployment production (instrucciones en README)

## Capabilities

### New Capabilities
- `peaky-hero`: Hero section con typewriter effect, partículas de humo CSS
- `peaky-themes`: Sistema de 5 temas con transiciones y localStorage
- `peaky-carousel`: Carousel infinito de proyectos con Embla
- `peaky-blog`: Grid de artículos estilo periódico vintage con filtros
- `peaky-contact`: Formulario con validación y efectos de tinta
- `peaky-easter-eggs`: Konami code, loading screen, 404 page

### Modified Capabilities
- None (proyecto nuevo desde cero)

## Approach

**Stack:** Next.js 14 (App Router) + Tailwind CSS + Embla Carousel + Framer Motion

**Estructura:**
```
src/
├── app/
│   ├── layout.tsx      # Providers (theme, fonts)
│   ├── page.tsx        # Landing principal
│   └── not-found.tsx   # 404 custom
├── components/
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Projects.tsx     # Carousel wrapper
│   ├── Blog.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   ├── ThemeToggle.tsx
│   └── LoadingScreen.tsx
├── lib/
│   ├── themes.ts       # 5 theme configurations
│   └── projects.ts     # Data projects
└── styles/
    └── globals.css     # Tailwind + custom effects
```

**Theme System:** Objeto con 5 presets, toggle actualiza class en `<html>`, persiste en localStorage.

**Animations:** Framer Motion para enter/exit, CSS transitions para hover states.

## Affected Areas

| Area | Impact | Description |
|------|--------|-------------|
| `src/app/layout.tsx` | New | Theme provider, fonts setup |
| `src/app/page.tsx` | New | Main landing composition |
| `src/components/*.tsx` | New | 8 componentes principales |
| `tailwind.config.ts` | New | Custom colors, fonts, animations |
| `public/` | New | Placeholder images, favicon |

## Risks

| Risk | Likelihood | Mitigation |
|------|------------|------------|
| Performance animations | Low | Usar CSS transforms, will-change, lazy load |
| Tailwind config complejo | Low | Organizar con variables CSS para reuse |
| Embla Carousel SSR | Low | Dynamic import con ssr: false |

## Rollback Plan

1. Mantener backup del anterior portafolio Matrix
2. Git commit antes de empezar: "feat: init peaky portfolio structure"
3. Deploy a branch preview antes de merge a main

## Dependencies

- `embla-carousel-react` - Carousel
- `framer-motion` - Animaciones
- `next-themes` - Theme management (o custom implementation)

## Success Criteria

- [ ] Lighthouse score >90 en performance, accessibility, best practices
- [ ] Los 5 temas funcionan con transiciones suaves
- [ ] Carousel funciona en mobile con drag
- [ ] Konami code activa "Modo Shelby"
- [ ] Responsive en 320px, 768px, 1024px, 1440px
- [ ] README.md completo con instrucciones de deploy

# Peaky Portfolio - Style Guide

## 🎨 Filosofía de Diseño

El diseño toma inspiración de Peaky Blinders (Birmingham, 1920s) pero mantiene profesionalismo. El objetivo es elegancia vintage sin sacrificar usabilidad moderna.

## 🖌️ Paleta de Colores

### Tema Base: Midnight Birmingham

```css
--bg: #030202;           /* Negro profundo */
--bg-secondary: #141C26; /* Azul carbón */
--text: #E9E9E9;         /* Blanco hueso */
--text-secondary: #818081; /* Plata desgastada */
--accent: #F2A679;        /* Cobre envejecido */
--accent-secondary: #5E3115; /* Ámbar whiskey */
--border: #3B4B59;        /* Gris Birmingham */
```

### Guía de Uso

| Color | Uso |
|-------|-----|
| `--bg` | Fondo principal de secciones |
| `--bg-secondary` | Cards, elementos elevados |
| `--text` | Títulos, texto principal |
| `--text-secondary` | Texto auxiliar, descripciones |
| `--accent` | CTAs, highlights, hover glow |
| `--accent-secondary` | Acentos secundarios, badges |
| `--border` | Bordes de cards, separadores |

## ✒️ Tipografía

### Headings: Playfair Display
```css
font-family: 'Playfair Display', serif;
font-weight: 600-700;
```

Usar para: Títulos de sección, nombres de proyectos, H1-H3

### Body: Merriweather
```css
font-family: 'Merriweather', serif;
font-weight: 400;
```

Usar para: Párrafos, descripciones, texto largo

### Code/Tech: Fira Code
```css
font-family: 'Fira Code', monospace;
```

Usar para: Tecnologías, badges, código inline

## 📐 Espaciado

```
xs: 4px   (0.25rem)
sm: 8px   (0.5rem)
md: 16px  (1rem)
lg: 24px  (1.5rem)
xl: 32px  (2rem)
2xl: 48px (3rem)
3xl: 64px (4rem)
```

## 🎭 Componentes

### Cards Vintage
```css
.card-vintage {
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  transition: all 0.3s ease;
}

.card-vintage:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5), 0 0 20px var(--accent);
}
```

### Botón Ink
```css
.ink-button {
  background: transparent;
  border: 2px solid var(--accent);
  color: var(--accent);
  padding: 12px 32px;
  font-family: 'Playfair Display', serif;
  text-transform: uppercase;
  letter-spacing: 2px;
}
```

### Input Vintage
```css
.input-vintage {
  background: transparent;
  border: none;
  border-bottom: 2px solid var(--border);
  color: var(--text);
}
```

## ✨ Animaciones

| Animación | Duración | Uso |
|-----------|----------|-----|
| Hover glow | 300ms | Cards, botones |
| Fade in | 500ms | Elementos que entran |
| Smoke particles | 8-15s | Fondo Hero |
| Typewriter | 80ms/char | Título principal |

## 📐 Breakpoints

```css
/* Mobile first */
@media (min-width: 768px)  { /* Tablet */ }
@media (min-width: 1024px) { /* Desktop */ }
@media (min-width: 1440px) { /* Large */ }
```

## 🎪 Efectos Especiales

### Sepia Filter (Archive Mode)
```css
.sepia-filter {
  filter: sepia(0.3);
}
```

### Frost Effect (Industrial Winter)
```css
.frost-effect::before {
  background: radial-gradient(ellipse at center, transparent 0%, rgba(74, 144, 164, 0.02) 100%);
}
```

### Wax Seal
```css
.wax-seal {
  background: radial-gradient(circle at 30% 30%, var(--accent) 0%, var(--accent-secondary) 50%, #3D1F0D 100%);
  border-radius: 50%;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
}
```

## ✅ Checklist de Estilo

- [ ] Usar variables CSS para colores, no hardcodear
- [ ] Tipografía: Playfair para headings, Merriweather para body
- [ ] Cards con hover glow ámbar
- [ ] Transiciones suaves (300ms default)
- [ ] Separadores con gradiente sutil
- [ ] Accesibilidad: contraste WCAG AA

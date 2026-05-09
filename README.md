# Antigravity — Personal Landing Page

> Diseño & Desarrollo Premium · Next.js 14 · React Three Fiber · Framer Motion

![Preview](public/og.png)

## Stack

| Tecnología | Versión | Uso |
|---|---|---|
| Next.js | 14.2 | Framework principal |
| React | 18.3 | UI library |
| TypeScript | 5.5 | Type safety |
| Framer Motion | 11 | Animaciones |
| React Three Fiber | 8 | 3D canvas |
| Three.js | 0.166 | WebGL |
| Lucide React | 0.414 | Iconos |

## Paleta de Colores

| Token | Hex | Uso |
|---|---|---|
| `sky` | `#4C97EE` | Accent principal, CTA |
| `mid` | `#4080C9` | Gradientes secundarios |
| `steel` | `#3366A1` | Bordes hover, tags |
| `deep` | `#264C78` | Superficies de tarjetas |
| `abyss` | `#19324F` | Fondo de secciones |

## Arquitectura

```
src/
├── app/
│   ├── layout.tsx          # Root layout + metadata SEO
│   ├── page.tsx            # Página principal (orquesta componentes)
│   └── globals.css         # Reset + fuentes Google
│
├── components/
│   ├── Navbar/             # Navegación sticky + mobile drawer
│   ├── Hero/               # Hero full-screen + Three.js canvas
│   │   └── HeroCanvas.tsx  # StarField + FloatingSphere (R3F)
│   ├── About/              # Sobre mí + stats grid
│   ├── Services/           # Servicios en grid de tarjetas
│   │   └── ServiceIcon.tsx # Mapa de iconos Lucide
│   ├── Portfolio/          # Lista de proyectos interactiva
│   │   └── ProjectRow.tsx  # Fila con hover state
│   ├── Testimonials/       # Cards de testimonios
│   │   └── TestimonialCard.tsx
│   ├── CTA/                # Call to action final
│   ├── Footer/             # Footer con social links
│   └── UI/                 # Componentes reutilizables
│       ├── Button.tsx      # Botón primary/ghost con motion
│       ├── GlassCard.tsx   # Tarjeta glass morphism
│       ├── SectionLabel.tsx # Etiqueta monospace de sección
│       ├── CursorGlow.tsx  # Efecto glow que sigue el cursor
│       └── NoiseOverlay.tsx # Capa de grain cinematográfico
│
├── hooks/
│   ├── useMousePosition.ts # Posición del cursor
│   ├── useScrolled.ts      # Detectar scroll para navbar
│   └── useInView.ts        # Intersection Observer
│
├── styles/
│   └── tokens.ts           # Design tokens: colores, fuentes, radii
│
├── data/
│   └── index.ts            # Contenido: nav, stats, servicios, proyectos, testimonios
│
├── animations/
│   └── variants.ts         # Variantes Framer Motion reutilizables
│
└── types/
    └── index.ts            # Interfaces TypeScript
```

## Setup

```bash
# 1. Instalar dependencias
npm install

# 2. Servidor de desarrollo
npm run dev

# 3. Build de producción
npm run build
npm start
```

## Personalización

### Cambiar contenido
Edita `src/data/index.ts` — toda la data del sitio (proyectos, servicios, testimonios) está centralizada aquí.

### Cambiar colores
Edita `src/styles/tokens.ts` — los tokens se propagan automáticamente a todos los componentes.

### Cambiar 3D
Edita `src/components/Hero/HeroCanvas.tsx` — ajusta partículas, geometría y materiales.

## Performance

- **Lazy loading**: Three.js canvas usa `<Suspense>` con fallback null
- **Memoización**: Navbar con `memo()` para evitar re-renders innecesarios  
- **GPU-friendly**: Animaciones usando `transform` y `opacity` únicamente
- **Fonts**: Cargadas con `display=swap` para evitar FOIT

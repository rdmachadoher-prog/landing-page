import { Code2, Layers, Cpu, Globe, Zap, Star } from "lucide-react";
import type { LucideIcon } from "lucide-react";

// ─── NAVIGATION ──────────────────────────────────────────────────────────────

export const navLinks = [
  { label: "Sobre mí",    href: "#about"        },
  { label: "Servicios",   href: "#services"     },
  { label: "Portfolio",   href: "#portfolio"    },
  { label: "Testimonios", href: "#testimonials" },
  { label: "Contacto",    href: "#cta"          },
] as const;

// ─── ABOUT ───────────────────────────────────────────────────────────────────

export const stats = [
  { value: "5+",  label: "Años de experiencia" },
  { value: "50+", label: "Proyectos entregados" },
  { value: "30+", label: "Clientes satisfechos" },
  { value: "10",  label: "Países alcanzados"    },
] as const;

// ─── SERVICES ────────────────────────────────────────────────────────────────

export interface Service {
  iconName: string;
  title:    string;
  desc:     string;
  tag:      string;
}

export const services: Service[] = [
  {
    iconName: "Layers",
    title:    "Diseño de Producto",
    desc:     "UX research, wireframing, design systems y prototipos interactivos que convierten visión en interfaz.",
    tag:      "UX · UI · Systems",
  },
  {
    iconName: "Code2",
    title:    "Desarrollo Frontend",
    desc:     "React, Next.js, TypeScript y animaciones GPU-friendly. Performance y estética sin concesiones.",
    tag:      "React · Next.js · Motion",
  },
  {
    iconName: "Globe",
    title:    "Branding Digital",
    desc:     "Identidades visuales que escalan. Desde el logo hasta el design token del componente más pequeño.",
    tag:      "Brand · Identity · Scale",
  },
  {
    iconName: "Cpu",
    title:    "Producto Full-Stack",
    desc:     "MVPs y plataformas SaaS con arquitectura sólida, desde el wireframe hasta el deploy en producción.",
    tag:      "SaaS · API · Deploy",
  },
  {
    iconName: "Zap",
    title:    "Optimización & Perf",
    desc:     "Auditorías Core Web Vitals, lazy loading, bundle optimization y carga sub-segundo.",
    tag:      "Perf · SEO · Lighthouse",
  },
  {
    iconName: "Star",
    title:    "Consultoría Tech",
    desc:     "Estrategia de producto, elección de stack, arquitectura de componentes y acompañamiento de equipo.",
    tag:      "Strategy · Mentoring",
  },
];

// ─── PORTFOLIO ───────────────────────────────────────────────────────────────

export interface Project {
  title:    string;
  category: string;
  year:     string;
  desc:     string;
  href?:    string;
  image?:   string;
}

export const projects: Project[] = [
  {
    title:    "Orbit Dashboard",
    category: "SaaS · Product Design",
    year:     "2024",
    desc:     "Plataforma de analytics en tiempo real con 40+ widgets interactivos y design system propio.",
    image:    "/IMG_1694.JPG",
  },
  {
    title:    "Helix Finance",
    category: "Fintech · Branding",
    year:     "2024",
    desc:     "Identidad visual y web app para neobank latinoamericano. +180% conversión en onboarding.",
    image:    "/IMG_1702.JPG",
  },
  {
    title:    "Neuron CMS",
    category: "Full-Stack · Engineering",
    year:     "2023",
    desc:     "CMS headless con editor visual drag-and-drop, multi-idioma y entrega edge con Vercel.",
    image:    "/IMG_1723.JPG",
  },
  {
    title:    "Aura E-commerce",
    category: "Web3 · Creative",
    year:     "2023",
    desc:     "Experiencia de compra inmersiva en 3D para marca de moda urbana con pagos crypto.",
    image:    "/width_1531.png",
  },
];

// ─── TESTIMONIALS ────────────────────────────────────────────────────────────

export interface Testimonial {
  quote:    string;
  author:   string;
  role:     string;
  initials: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:    "Entregó un producto que superó completamente nuestras expectativas. La atención al detalle y el nivel técnico son de categoría mundial.",
    author:   "Valentina Torres",
    role:     "CPO · Helix Finance",
    initials: "VT",
  },
  {
    quote:    "Trabajar con este equipo transformó nuestra visión en una experiencia que nuestros usuarios aman. Métricas de retención subieron un 68%.",
    author:   "Carlos Mendoza",
    role:     "CEO · Orbit Labs",
    initials: "CM",
  },
  {
    quote:    "El design system que construyó nos ahorra semanas de trabajo cada sprint. Código limpio, documentado y un placer de mantener.",
    author:   "Sofía Reyes",
    role:     "Head of Design · Neuron",
    initials: "SR",
  },
];

// ─── SOCIAL LINKS ────────────────────────────────────────────────────────────

export const socialLinks = [
  { label: "LinkedIn",  href: "https://www.linkedin.com/in/raul-duvan-machado-herrera-7b7365202/" },
  { label: "Instagram", href: "https://www.instagram.com/theglobalbridge.01?igsh=MXBleXg4Nzc2MnJrYg==" },
  { label: "Twitter",   href: "https://x.com/RaulDuvanMacha1" },
] as const;

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
    iconName: "Users",
    title:    "Reclutamiento Internacional",
    desc:     "Búsqueda exhaustiva y selección de perfiles ejecutivos y técnicos para empresas que aterrizan en LATAM.",
    tag:      "Headhunting · LATAM",
  },
  {
    iconName: "HeartHandshake",
    title:    "Estrategia de Retención",
    desc:     "Diseño de planes de carrera, compensación y beneficios adaptados a mercados competitivos para fidelizar tu talento.",
    tag:      "Retention · Loyalty",
  },
  {
    iconName: "Globe",
    title:    "Onboarding Global",
    desc:     "Integración cultural y operativa para asegurar que tus nuevos talentos se alineen rápidamente con la visión de la empresa.",
    tag:      "Culture · Integration",
  },
  {
    iconName: "LineChart",
    title:    "Consultoría en Negocios",
    desc:     "Acompañamiento estratégico para empresas extranjeras que buscan establecer o escalar sus operaciones en Latinoamérica.",
    tag:      "Expansion · Strategy",
  },
  {
    iconName: "SmilePlus",
    title:    "Gestión de Cultura",
    desc:     "Implementación de prácticas de Diversidad e Inclusión, creando ambientes de trabajo saludables y productivos.",
    tag:      "DE&I · Wellness",
  },
  {
    iconName: "Languages",
    title:    "Asesoría Bilingüe",
    desc:     "Negociación, mediación y comunicación fluida en Inglés, Español y Portugués para eliminar barreras.",
    tag:      "ES | EN | PT",
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
    title:    "Expansión Tech Hub LATAM",
    category: "Reclutamiento Estratégico",
    year:     "2024",
    desc:     "Formación de un equipo de ingeniería de alto rendimiento (40+ perfiles) para un unicornio fintech europeo.",
    image:    "/IMG_1694.JPG",
  },
  {
    title:    "Estrategia de Retención",
    category: "Consultoría · Cultura",
    year:     "2024",
    desc:     "Rediseño del plan de beneficios y onboarding para una multinacional de retail, reduciendo la rotación en un 35%.",
    image:    "/IMG_1702.JPG",
  },
  {
    title:    "Aterrizaje Corporativo",
    category: "Negocios Internacionales",
    year:     "2023",
    desc:     "Asesoría y mediación trilingüe para establecer la primera sede operativa de una empresa asiática en Colombia.",
    image:    "/IMG_1723.JPG",
  },
  {
    title:    "Programa de Liderazgo",
    category: "Desarrollo de Talento",
    year:     "2023",
    desc:     "Diseño e implementación de un programa de formación ejecutiva conectando gerentes locales con directores globales.",
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
    quote:    "Raul transformó completamente nuestra forma de entender el talento en LATAM. Encontró a los líderes exactos que necesitábamos para escalar.",
    author:   "Valentina Torres",
    role:     "VP de Recursos Humanos · Helix Corp",
    initials: "VT",
  },
  {
    quote:    "Su capacidad para mediar en tres idiomas y alinear nuestra cultura corporativa europea con las operaciones locales fue clave para nuestro éxito.",
    author:   "Carlos Mendoza",
    role:     "Director de Expansión · Global Tech",
    initials: "CM",
  },
  {
    quote:    "El plan de retención que diseñó para nosotros redujo la rotación dramáticamente. Es un verdadero puente estratégico.",
    author:   "Sofía Reyes",
    role:     "Country Manager · LATAM Operations",
    initials: "SR",
  },
];

// ─── SOCIAL LINKS ────────────────────────────────────────────────────────────

export const socialLinks = [
  { label: "LinkedIn",  href: "https://www.linkedin.com/in/raul-duvan-machado-herrera-7b7365202/" },
  { label: "Instagram", href: "https://www.instagram.com/theglobalbridge.01?igsh=MXBleXg4Nzc2MnJrYg==" },
  { label: "Twitter",   href: "https://x.com/RaulDuvanMacha1" },
] as const;

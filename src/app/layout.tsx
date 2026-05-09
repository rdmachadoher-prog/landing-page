import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Raul Machado — Gestión del Talento Global",
  description:
    "Profesional Trilingüe en Negocios Internacionales. Puente estratégico entre empresas extranjeras y el ecosistema de talento en LATAM.",
  keywords: ["talento global", "negocios internacionales", "LATAM", "reclutamiento", "HR", "Raul Machado"],
  authors: [{ name: "Raul Machado" }],
  openGraph: {
    title: "Raul Machado — Gestión del Talento Global",
    description: "Conectando talento, sin fronteras.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}

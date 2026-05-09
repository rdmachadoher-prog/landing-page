"use client";
import { Twitter, Linkedin, Instagram } from "lucide-react";
import { socialLinks } from "@/data";
import { colors, fonts } from "@/styles/tokens";

const iconMap: Record<string, React.ComponentType<{ size: number }>> = {
  Instagram: Instagram,
  Twitter:  Twitter,
  LinkedIn: Linkedin,
};

export function Footer() {
  return (
    <footer
      role="contentinfo"
      style={{
        borderTop: `1px solid ${colors.border}`,
        padding: "48px 6vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: 24,
      }}
    >
      {/* Brand */}
      <div>
        <span
          style={{
            fontFamily: fonts.mono,
            fontSize: 16,
            fontWeight: 700,
            color: colors.sky,
          }}
        >
          Raul Machado.
        </span>
        <p style={{ color: colors.muted, fontSize: 13, marginTop: 6 }}>
          © {new Date().getFullYear()} · Gestión del Talento Global.
        </p>
      </div>

      {/* Social icons */}
      <div style={{ display: "flex", gap: 12 }}>
        {socialLinks.map((s) => {
          const Icon = iconMap[s.label];
          return (
            <a
              key={s.label}
              href={s.href}
              aria-label={s.label}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: 40,
                height: 40,
                borderRadius: 8,
                border: `1px solid ${colors.border}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: colors.muted,
                transition: "border-color 0.2s, color 0.2s, background 0.2s",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.borderColor = colors.sky;
                el.style.color = colors.sky;
                el.style.background = "rgba(76,151,238,0.08)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.borderColor = colors.border;
                el.style.color = colors.muted;
                el.style.background = "transparent";
              }}
            >
              {Icon && <Icon size={18} />}
            </a>
          );
        })}
      </div>

      {/* Tagline */}
      <span
        style={{
          fontFamily: fonts.mono,
          color: colors.muted,
          fontSize: 11,
          opacity: 0.4,
        }}
      >
        Diseñado con obsesión. Construido con precisión.
      </span>
    </footer>
  );
}

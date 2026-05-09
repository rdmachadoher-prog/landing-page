"use client";
import { useState, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useScrolled } from "@/hooks/useScrolled";
import { navLinks } from "@/data";
import { colors, fonts } from "@/styles/tokens";

export const Navbar = memo(function Navbar() {
  const scrolled = useScrolled(40);
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      role="navigation"
      aria-label="Navegación principal"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: "0 6vw",
        height: 72,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: scrolled ? "rgba(5,13,26,0.88)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? `1px solid ${colors.border}` : "none",
        transition: "background 0.4s, backdrop-filter 0.4s, border-color 0.4s",
      }}
    >
      {/* Logo */}
      <a href="#" aria-label="Raul Machado — Inicio" style={{ textDecoration: "none" }}>
        <span
          style={{
            fontFamily: fonts.mono,
            fontSize: 20,
            fontWeight: 700,
            color: colors.sky,
            letterSpacing: "-0.02em",
          }}
        >
          Raul Machado
          <span style={{ color: colors.text, opacity: 0.4 }}>.</span>
        </span>
      </a>

      {/* Desktop nav */}
      <ul
        style={{
          display: "flex",
          gap: 36,
          listStyle: "none",
          alignItems: "center",
        }}
      >
        {navLinks.map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              style={{
                color: colors.muted,
                textDecoration: "none",
                fontSize: 14,
                fontWeight: 500,
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.color = colors.text)
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color = colors.muted)
              }
            >
              {l.label}
            </a>
          </li>
        ))}
        <li>
          <motion.a
            href="#cta"
            whileHover={{ y: -2, boxShadow: "0 12px 40px rgba(76,151,238,0.4)" }}
            whileTap={{ scale: 0.97 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              padding: "10px 20px",
              background: "linear-gradient(135deg, #4C97EE, #3366A1)",
              color: "#fff",
              borderRadius: 8,
              textDecoration: "none",
              fontSize: 13,
              fontWeight: 600,
            }}
          >
            Hablemos <ArrowUpRight size={13} />
          </motion.a>
        </li>
      </ul>

      {/* Mobile toggle */}
      <button
        onClick={() => setOpen(!open)}
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={open}
        style={{
          display: "none",
          background: "none",
          border: "none",
          color: colors.text,
          cursor: "pointer",
          padding: 4,
        }}
        className="nav-mobile-toggle"
      >
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            style={{
              position: "fixed",
              inset: "72px 0 0 0",
              background: "rgba(5,13,26,0.97)",
              backdropFilter: "blur(20px)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 32,
              zIndex: 99,
            }}
          >
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                style={{
                  color: colors.text,
                  textDecoration: "none",
                  fontSize: 22,
                  fontWeight: 600,
                }}
              >
                {l.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          nav ul { display: none !important; }
          .nav-mobile-toggle { display: flex !important; }
        }
      `}</style>
    </motion.nav>
  );
});

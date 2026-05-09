"use client";
import { motion } from "framer-motion";
import { Zap, ArrowUpRight, Mail, Twitter, Linkedin, Instagram } from "lucide-react";
import { SectionLabel } from "@/components/UI/SectionLabel";
import { Button } from "@/components/UI/Button";
import { fadeUp, fadeIn, stagger } from "@/animations/variants";
import { colors } from "@/styles/tokens";
import { socialLinks } from "@/data";

export function CTA() {
  return (
    <section id="cta" style={{ padding: "120px 6vw" }}>
      <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
        >
          {/* Decorative rings */}
          <motion.div
            variants={fadeIn}
            aria-hidden="true"
            style={{
              width: 120,
              height: 120,
              borderRadius: "50%",
              border: `1px solid ${colors.border}`,
              margin: "0 auto 48px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "rgba(76,151,238,0.05)",
            }}
          >
            <div
              style={{
                width: 80,
                height: 80,
                borderRadius: "50%",
                border: `1px solid rgba(76,151,238,0.25)`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "rgba(76,151,238,0.08)",
              }}
            >
              <Zap size={28} color={colors.sky} />
            </div>
          </motion.div>

          <motion.div variants={fadeUp}>
            <SectionLabel label="// ¿listo para despegar?" />
          </motion.div>

          <motion.h2
            variants={fadeUp}
            style={{
              fontSize: "clamp(2.2rem, 5vw, 4rem)",
              fontWeight: 700,
              letterSpacing: "-0.04em",
              lineHeight: 1.0,
              marginBottom: 24,
            }}
          >
            Hagamos algo{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #4C97EE 0%, #e8f1ff 50%, #4C97EE 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              extraordinario
            </span>
            <br />
            juntos.
          </motion.h2>

          <motion.p
            variants={fadeUp}
            style={{
              color: colors.muted,
              fontSize: 17,
              lineHeight: 1.75,
              maxWidth: 560,
              margin: "0 auto 44px",
            }}
          >
            Tengo disponibilidad limitada para nuevos proyectos. Si tu visión
            merece ser llevada al siguiente nivel, hablemos.
          </motion.p>

          <motion.div
            variants={fadeUp}
            style={{
              display: "flex",
              gap: 16,
              justifyContent: "center",
              flexWrap: "wrap",
              marginBottom: 48,
            }}
          >
            <Button variant="primary" style={{ fontSize: 16, padding: "16px 36px" }}>
              Empezar proyecto <ArrowUpRight size={18} />
            </Button>
            <Button
              variant="ghost"
              href="mailto:rdmachadoher@ut.edu.co"
              style={{ fontSize: 16, padding: "16px 36px" }}
            >
              <Mail size={16} /> rdmachadoher@ut.edu.co
            </Button>
          </motion.div>

          {/* Social Links Grid */}
          <motion.div
            variants={fadeUp}
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 20,
              flexWrap: "wrap",
            }}
          >
            {socialLinks.map((s) => {
              const Icon = 
                s.label === "LinkedIn" ? Linkedin : 
                s.label === "Instagram" ? Instagram : 
                s.label === "Twitter" ? Twitter : null;
              
              return (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    color: colors.muted,
                    textDecoration: "none",
                    padding: "12px 24px",
                    borderRadius: 12,
                    border: `1px solid ${colors.border}`,
                    background: "rgba(255,255,255,0.02)",
                    transition: "all 0.2s ease",
                    fontSize: 14,
                    fontWeight: 500,
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget;
                    el.style.borderColor = colors.sky;
                    el.style.color = colors.sky;
                    el.style.background = "rgba(76,151,238,0.08)";
                    el.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget;
                    el.style.borderColor = colors.border;
                    el.style.color = colors.muted;
                    el.style.background = "rgba(255,255,255,0.02)";
                    el.style.transform = "translateY(0)";
                  }}
                >
                  {Icon && <Icon size={18} />} {s.label}
                </a>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

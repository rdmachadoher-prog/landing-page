"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionLabel } from "@/components/UI/SectionLabel";
import { GlassCard } from "@/components/UI/GlassCard";
import { Button } from "@/components/UI/Button";
import { fadeUp, stagger } from "@/animations/variants";
import { stats } from "@/data";
import { colors, fonts } from "@/styles/tokens";

export function About() {
  return (
    <section
      id="about"
      style={{ padding: "120px 6vw" }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "80px",
            alignItems: "center",
          }}
          className="about-grid"
        >
          {/* Text column */}
          <motion.div variants={fadeUp}>
            <SectionLabel label="// sobre mí" />
            <h2
              style={{
                fontSize: "clamp(2rem, 4vw, 3.2rem)",
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
                marginBottom: 24,
              }}
            >
              Conectando talento,{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #4C97EE 0%, #e8f1ff 50%, #4C97EE 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                sin fronteras.
              </span>
            </h2>
            <p
              style={{
                color: colors.muted,
                lineHeight: 1.85,
                marginBottom: 20,
                fontSize: 16,
              }}
            >
              Profesional Trilingüe en Negocios Internacionales especializado en la 
              Gestión del Talento Global. 
            </p>
            <p
              style={{
                color: colors.muted,
                lineHeight: 1.85,
                marginBottom: 40,
                fontSize: 16,
              }}
            >
              Con dominio de ES | EN | PT, actúo como el puente estratégico entre 
              empresas extranjeras y el ecosistema de talento en LATAM, facilitando 
              operaciones internacionales exitosas.
            </p>
            <Button variant="ghost" href="/cv.pdf">
              Descargar CV <ArrowUpRight size={15} />
            </Button>
          </motion.div>

          {/* Photo & Stats column */}
          <motion.div
            variants={stagger}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 40,
            }}
          >
            {/* Organic Photo Container */}
            <motion.div
              variants={fadeUp}
              style={{
                position: "relative",
                width: "100%",
                maxWidth: 480,
                aspectRatio: "4/5",
                margin: "0 auto",
              }}
            >
              {/* Background organic shape */}
              <div
                style={{
                  position: "absolute",
                  inset: "-20px",
                  background: "radial-gradient(circle at 70% 30%, rgba(76,151,238,0.15) 0%, transparent 70%)",
                  filter: "blur(40px)",
                  zIndex: 0,
                }}
              />
              
              {/* Glass frame */}
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "100%",
                  borderRadius: 24,
                  overflow: "hidden",
                  border: `1px solid ${colors.border}`,
                  background: "linear-gradient(180deg, rgba(25,50,79,0.1) 0%, rgba(38,76,120,0.3) 100%)",
                  zIndex: 1,
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/profile-main.png"
                  alt="Raul Machado"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    objectPosition: "bottom center",
                    filter: "contrast(1.05) brightness(1.05)",
                  }}
                />
              </div>

              {/* Float badge */}
              <GlassCard
                style={{
                  position: "absolute",
                  bottom: 30,
                  right: -20,
                  padding: "16px 20px",
                  zIndex: 2,
                }}
              >
                <div style={{ fontSize: 12, fontWeight: 600, color: colors.sky, letterSpacing: "0.1em", marginBottom: 4 }}>DISPONIBLE</div>
                <div style={{ fontSize: 14, fontWeight: 500 }}>Para nuevos proyectos</div>
              </GlassCard>
            </motion.div>

            {/* Stats grid (compact) */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 16,
              }}
            >
              {stats.map((s) => (
                <GlassCard key={s.label} style={{ padding: "20px" }}>
                  <div
                    style={{
                      fontFamily: fonts.mono,
                      fontSize: 32,
                      fontWeight: 700,
                      color: colors.sky,
                      lineHeight: 1,
                      marginBottom: 4,
                    }}
                  >
                    {s.value}
                  </div>
                  <div style={{ color: colors.muted, fontSize: 12 }}>
                    {s.label}
                  </div>
                </GlassCard>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </section>
  );
}

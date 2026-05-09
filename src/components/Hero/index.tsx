"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { HeroCanvas } from "./HeroCanvas";
import { Button } from "@/components/UI/Button";
import { SectionLabel } from "@/components/UI/SectionLabel";
import { fadeUp, stagger } from "@/animations/variants";
import { colors, fonts } from "@/styles/tokens";

export function Hero() {
  const { scrollYProgress } = useScroll();
  const y       = useTransform(scrollYProgress, [0, 0.5], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "120px 6vw 80px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <HeroCanvas />

      {/* Radial glow */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "40%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 700,
          height: 700,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(38,76,120,0.35) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />

      <motion.div style={{ y, opacity, position: "relative", zIndex: 2 }}>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          style={{ maxWidth: 820 }}
        >
          {/* Eyebrow */}
          <motion.span
            variants={fadeUp}
            style={{
              display: "inline-block",
              fontFamily: fonts.mono,
              fontSize: 12,
              letterSpacing: "0.2em",
              color: colors.sky,
              textTransform: "uppercase",
              marginBottom: 28,
              padding: "6px 16px",
              border: `1px solid ${colors.border}`,
              borderRadius: 4,
              background: "rgba(76,151,238,0.06)",
            }}
          >
            Diseño · Código · Estrategia
          </motion.span>

          {/* H1 */}
          <motion.h1
            variants={fadeUp}
            style={{
              fontSize: "clamp(3rem, 7vw, 6.5rem)",
              fontWeight: 700,
              lineHeight: 1.0,
              letterSpacing: "-0.04em",
              marginBottom: 28,
            }}
          >
            <span style={{ color: colors.text }}>Elevando ideas</span>
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, #4C97EE 0%, #e8f1ff 50%, #4C97EE 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              más allá de la
            </span>
            <br />
            <span style={{ color: colors.text }}>gravedad.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={fadeUp}
            style={{
              fontSize: "clamp(1rem, 2vw, 1.2rem)",
              color: colors.muted,
              maxWidth: 560,
              margin: "0 auto 44px",
              lineHeight: 1.75,
              fontWeight: 300,
            }}
          >
            Diseñador y desarrollador de productos digitales premium. Creo
            experiencias que combinan elegancia, tecnología y estrategia para
            transformar marcas en referentes.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            style={{
              display: "flex",
              gap: 16,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Button variant="primary" href="#portfolio">
              Ver Portfolio <ArrowUpRight size={16} />
            </Button>
            <Button variant="ghost" href="#cta">
              Hablemos
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        style={{
          position: "absolute",
          bottom: 36,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
          color: colors.muted,
          zIndex: 2,
        }}
      >
        <span
          style={{
            fontSize: 11,
            letterSpacing: "0.15em",
            fontFamily: fonts.mono,
          }}
        >
          SCROLL
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ChevronDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}

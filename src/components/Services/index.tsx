"use client";
import { motion } from "framer-motion";
import { SectionLabel } from "@/components/UI/SectionLabel";
import { GlassCard } from "@/components/UI/GlassCard";
import { ServiceIcon } from "./ServiceIcon";
import { fadeUp, stagger } from "@/animations/variants";
import { services } from "@/data";
import { colors, fonts } from "@/styles/tokens";

export function Services() {
  return (
    <section
      id="services"
      style={{
        padding: "120px 6vw",
        background:
          "linear-gradient(180deg, transparent, #080f1e 30%, #080f1e 70%, transparent)",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          style={{ textAlign: "center", marginBottom: 72 }}
        >
          <motion.div variants={fadeUp}>
            <SectionLabel label="// servicios" />
          </motion.div>
          <motion.h2
            variants={fadeUp}
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 700,
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
            }}
          >
            Lo que puedo hacer{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #4C97EE 0%, #e8f1ff 50%, #4C97EE 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              por ti
            </span>
          </motion.h2>
        </motion.div>

        {/* Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
            gap: 24,
          }}
        >
          {services.map((s) => (
            <GlassCard key={s.title} style={{ padding: "32px 28px" }}>
              {/* Icon */}
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 10,
                  background: "rgba(76,151,238,0.12)",
                  border: `1px solid ${colors.border}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: colors.sky,
                  marginBottom: 20,
                }}
              >
                <ServiceIcon name={s.iconName} size={24} />
              </div>

              <h3
                style={{
                  fontSize: 18,
                  fontWeight: 600,
                  marginBottom: 12,
                  letterSpacing: "-0.01em",
                }}
              >
                {s.title}
              </h3>
              <p
                style={{
                  color: colors.muted,
                  fontSize: 14,
                  lineHeight: 1.75,
                  marginBottom: 20,
                }}
              >
                {s.desc}
              </p>
              <span
                style={{
                  fontFamily: fonts.mono,
                  fontSize: 11,
                  color: colors.steel,
                  letterSpacing: "0.08em",
                  border: `1px solid rgba(51,102,161,0.3)`,
                  padding: "4px 10px",
                  borderRadius: 4,
                }}
              >
                {s.tag}
              </span>
            </GlassCard>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

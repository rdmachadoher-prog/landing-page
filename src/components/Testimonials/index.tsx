"use client";
import { motion } from "framer-motion";
import { SectionLabel } from "@/components/UI/SectionLabel";
import { TestimonialCard } from "./TestimonialCard";
import { fadeUp, stagger } from "@/animations/variants";
import { testimonials } from "@/data";

export function Testimonials() {
  return (
    <section
      id="testimonials"
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
            <SectionLabel label="// testimonios" />
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
            Lo que dicen{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #4C97EE 0%, #e8f1ff 50%, #4C97EE 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              quienes confían
            </span>
          </motion.h2>
        </motion.div>

        {/* Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: 24,
          }}
        >
          {testimonials.map((t) => (
            <motion.div key={t.author} variants={fadeUp}>
              <TestimonialCard testimonial={t} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionLabel } from "@/components/UI/SectionLabel";
import { Button } from "@/components/UI/Button";
import { ProjectRow } from "./ProjectRow";
import { fadeUp, stagger } from "@/animations/variants";
import { projects } from "@/data";

export function Portfolio() {
  return (
    <section id="portfolio" style={{ padding: "120px 6vw" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          style={{ marginBottom: 64 }}
        >
          <motion.div variants={fadeUp}>
            <SectionLabel label="// portfolio" />
          </motion.div>
          <motion.h2
            variants={fadeUp}
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 700,
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              maxWidth: 600,
            }}
          >
            Proyectos que{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #4C97EE 0%, #e8f1ff 50%, #4C97EE 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              definen el estándar
            </span>
          </motion.h2>
        </motion.div>

        {/* Project list */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          style={{ display: "flex", flexDirection: "column", gap: 2 }}
        >
          {projects.map((p, i) => (
            <motion.div key={p.title} variants={fadeUp}>
              <ProjectRow project={p} index={i} />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          style={{ textAlign: "center", marginTop: 56 }}
        >
          <Button variant="ghost">
            Ver todos los proyectos <ArrowUpRight size={15} />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

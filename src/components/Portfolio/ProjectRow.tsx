"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import type { Project } from "@/types";
import { colors, fonts } from "@/styles/tokens";

interface Props {
  project: Project;
  index:   number;
}

export function ProjectRow({ project, index }: Props) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      style={{
        padding: "32px 28px",
        borderBottom: `1px solid ${colors.border}`,
        cursor: "pointer",
        display: "grid",
        gridTemplateColumns: "40px auto 1fr auto",
        gap: 32,
        alignItems: "center",
        background: hovered ? "rgba(25,50,79,0.3)" : "transparent",
        borderRadius: 12,
        transition: "background 0.3s",
      }}
    >
      <span
        style={{
          fontFamily: fonts.mono,
          color: colors.muted,
          fontSize: 13,
          opacity: 0.5,
        }}
      >
        0{index + 1}
      </span>

      {project.image ? (
        <div style={{ width: 100, height: 70, borderRadius: 8, overflow: "hidden", border: `1px solid ${colors.border}`, opacity: hovered ? 1 : 0.6, transition: "opacity 0.3s" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={project.image} alt={project.title} style={{ width: "100%", height: "100%", objectFit: "cover", filter: hovered ? "none" : "grayscale(50%)", transition: "filter 0.3s" }} />
        </div>
      ) : (
        <div style={{ width: 100 }} />
      )}

      <div>
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: 16,
            marginBottom: 6,
            flexWrap: "wrap",
          }}
        >
          <h3
            style={{
              fontSize: "clamp(1.1rem, 2.5vw, 1.6rem)",
              fontWeight: 600,
              letterSpacing: "-0.02em",
            }}
          >
            {project.title}
          </h3>
          <span
            style={{
              fontFamily: fonts.mono,
              fontSize: 11,
              color: colors.muted,
              opacity: 0.6,
            }}
          >
            {project.year}
          </span>
        </div>
        <p style={{ color: colors.muted, fontSize: 14, lineHeight: 1.6 }}>
          {project.desc}
        </p>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          gap: 12,
        }}
      >
        <span style={{ fontSize: 12, color: colors.steel }}>{project.category}</span>
        <motion.div
          animate={{ x: hovered ? 0 : -8, opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ExternalLink size={16} color={colors.sky} />
        </motion.div>
      </div>
    </motion.div>
  );
}

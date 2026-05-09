"use client";
import { motion } from "framer-motion";
import { fadeUp } from "@/animations/variants";
import type { CSSProperties, ReactNode } from "react";

interface Props {
  children: ReactNode;
  style?:   CSSProperties;
  className?: string;
}

export function GlassCard({ children, style, className }: Props) {
  return (
    <motion.div
      variants={fadeUp}
      style={{
        background:   "rgba(25,50,79,0.25)",
        backdropFilter: "blur(20px)",
        border:       "1px solid rgba(76,151,238,0.15)",
        borderRadius: 16,
        transition:   "border-color 0.3s, transform 0.3s, box-shadow 0.3s",
        ...style,
      }}
      whileHover={{
        y: -4,
        borderColor: "rgba(76,151,238,0.4)",
        boxShadow: "0 24px 60px rgba(0,0,0,0.4), 0 0 40px rgba(76,151,238,0.08)",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

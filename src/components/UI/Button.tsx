"use client";
import { motion } from "framer-motion";
import type { ReactNode, CSSProperties } from "react";

interface ButtonProps {
  children:  ReactNode;
  variant?:  "primary" | "ghost";
  onClick?:  () => void;
  href?:     string;
  style?:    CSSProperties;
  type?:     "button" | "submit";
}

export function Button({
  children,
  variant = "primary",
  onClick,
  href,
  style,
  type = "button",
}: ButtonProps) {
  const base: CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    padding: "14px 28px",
    borderRadius: 8,
    fontFamily: "'Sora', sans-serif",
    fontSize: 15,
    fontWeight: 600,
    cursor: "pointer",
    textDecoration: "none",
    border: "none",
    transition: "transform 0.2s, box-shadow 0.3s",
  };

  const primaryStyle: CSSProperties = {
    ...base,
    background: "linear-gradient(135deg, #4C97EE, #3366A1)",
    color: "#fff",
  };

  const ghostStyle: CSSProperties = {
    ...base,
    background: "transparent",
    color: "#e8f1ff",
    border: "1px solid rgba(76,151,238,0.3)",
    fontWeight: 500,
  };

  const combined = {
    ...(variant === "primary" ? primaryStyle : ghostStyle),
    ...style,
  };

  if (href) {
    return (
      <motion.a
        href={href}
        style={combined}
        whileHover={{ y: -2, boxShadow: variant === "primary" ? "0 12px 40px rgba(76,151,238,0.4)" : undefined }}
        whileTap={{ scale: 0.97 }}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      style={combined}
      whileHover={{ y: -2, boxShadow: variant === "primary" ? "0 12px 40px rgba(76,151,238,0.4)" : undefined }}
      whileTap={{ scale: 0.97 }}
    >
      {children}
    </motion.button>
  );
}

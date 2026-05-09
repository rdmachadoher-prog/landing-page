/**
 * Design Tokens — Antigravity
 * Paleta: Adobe Color · Blues profundos + cielo eléctrico
 * #4C97EE · #4080C9 · #3366A1 · #264C78 · #19324F
 */

export const colors = {
  sky:    "#4C97EE",
  mid:    "#4080C9",
  steel:  "#3366A1",
  deep:   "#264C78",
  abyss:  "#19324F",
  bg:     "#050d1a",
  bg2:    "#080f1e",
  surface: "rgba(25,50,79,0.4)",
  text:   "#e8f1ff",
  muted:  "#7da8d4",
  border:      "rgba(76,151,238,0.15)",
  borderHover: "rgba(76,151,238,0.4)",
  glow:        "rgba(76,151,238,0.12)",
} as const;

export const fonts = {
  sans: "'Sora', sans-serif",
  mono: "'Space Mono', monospace",
} as const;

export const radius = {
  sm:   "4px",
  md:   "8px",
  lg:   "12px",
  xl:   "16px",
  full: "9999px",
} as const;

export type Colors = typeof colors;

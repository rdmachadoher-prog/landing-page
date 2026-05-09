"use client";
import { colors, fonts } from "@/styles/tokens";

interface Props {
  label: string;
}

export function SectionLabel({ label }: Props) {
  return (
    <span
      style={{
        fontFamily: fonts.mono,
        fontSize: 11,
        letterSpacing: "0.2em",
        color: colors.sky,
        textTransform: "uppercase" as const,
        display: "block",
        marginBottom: 16,
      }}
    >
      {label}
    </span>
  );
}

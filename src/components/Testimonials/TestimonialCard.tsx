"use client";
import { Star } from "lucide-react";
import { GlassCard } from "@/components/UI/GlassCard";
import type { Testimonial } from "@/types";
import { colors } from "@/styles/tokens";

interface Props {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: Props) {
  return (
    <GlassCard style={{ padding: "36px 28px" }}>
      {/* Stars */}
      <div style={{ display: "flex", gap: 4, marginBottom: 24 }}>
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={14} color={colors.sky} fill={colors.sky} />
        ))}
      </div>

      <p
        style={{
          color: colors.text,
          fontSize: 15,
          lineHeight: 1.8,
          marginBottom: 32,
          fontStyle: "italic",
          opacity: 0.9,
        }}
      >
        &ldquo;{testimonial.quote}&rdquo;
      </p>

      {/* Author */}
      <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
        <div
          style={{
            width: 42,
            height: 42,
            borderRadius: "50%",
            background: "linear-gradient(135deg, #264C78, #3366A1)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 13,
            fontWeight: 700,
            color: colors.sky,
            border: `1px solid ${colors.border}`,
            flexShrink: 0,
          }}
        >
          {testimonial.initials}
        </div>
        <div>
          <div style={{ fontWeight: 600, fontSize: 14 }}>{testimonial.author}</div>
          <div style={{ color: colors.muted, fontSize: 12 }}>{testimonial.role}</div>
        </div>
      </div>
    </GlassCard>
  );
}

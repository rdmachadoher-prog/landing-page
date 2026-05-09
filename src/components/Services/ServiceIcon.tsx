"use client";
import { Code2, Layers, Cpu, Globe, Zap, Star } from "lucide-react";
import type { LucideProps } from "lucide-react";

const iconMap: Record<string, React.ComponentType<LucideProps>> = {
  Code2,
  Layers,
  Cpu,
  Globe,
  Zap,
  Star,
};

interface Props {
  name: string;
  size?: number;
}

export function ServiceIcon({ name, size = 24 }: Props) {
  const Icon = iconMap[name];
  if (!Icon) return null;
  return <Icon size={size} />;
}

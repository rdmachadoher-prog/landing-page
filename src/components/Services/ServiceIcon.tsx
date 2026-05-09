"use client";
import { Users, HeartHandshake, LineChart, Globe, SmilePlus, Languages } from "lucide-react";
import type { LucideProps } from "lucide-react";

const iconMap: Record<string, React.ComponentType<LucideProps>> = {
  Users,
  HeartHandshake,
  LineChart,
  Globe,
  SmilePlus,
  Languages,
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

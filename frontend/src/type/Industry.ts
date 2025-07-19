import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

export interface Industry {
  icon: LucideIcon;        // New: Icon component for the modal
  title: string;
  description: string;
  image: string;         // Keep this for your existing cards
  gradient: string;      // New: Gradient class for the modal
  products: string[];
}

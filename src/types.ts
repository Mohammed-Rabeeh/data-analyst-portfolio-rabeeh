import { LucideIcon } from "lucide-react";

export interface Stat {
  id: string;
  value: number;
  suffix?: string;
  label: string;
}

export interface SkillItem {
  name: string;
  level: number; // percentage 0-100
}

export interface SkillGroup {
  category: string;
  items: SkillItem[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  category: "all" | "bi" | "python" | "sql";
  image: string;
  tags: string[];
  liveLink?: string;
  githubLink?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  type: "Internship" | "Freelance" | "Research";
  description: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  iconType: "google" | "microsoft" | "ibm" | "sql";
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  feedback: string;
  avatar: string;
}

// Interactive Dashboard types
export interface SalesData {
  month: string;
  activeUsers: number;
  revenue: number;
  orders: number;
  category: "Electronics" | "Apparel" | "Home" | "Office";
}

export interface RegionData {
  region: string;
  sales: number;
  share: number;
}

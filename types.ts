import { LucideIcon } from "lucide-react";

export enum SectionType {
  HOME = 'HOME',
  SUMMARY = 'SUMMARY',
  MATRIX = 'MATRIX',
  PIGEON_PEA = 'PIGEON_PEA',
  STRATEGY = 'STRATEGY',
  SOURCES = 'SOURCES'
}

export interface NavItem {
  id: SectionType;
  label: string;
  icon: LucideIcon;
}

export interface ImageRef {
  url: string;
  credit: string;
  alt: string;
}

export interface BuyerProfile {
  name: string;
  type: string;
  country?: string;
  website?: string;
  focus?: string;        // For Thai Buyers Directory
  products?: string[];   // For Product Matrix Buyers
  contactPerson?: string;
  email?: string;
  phone?: string;
  address?: string;
  note?: string;
  approach?: string;
  isPriority?: boolean;
  lastVerified?: string;
  sources?: string[];
}

export interface ProductItem {
  name: string;
  desc?: string;
  context?: string;
  statHighlight?: string; 
  priceSignal?: string;   
  pros: string[];
  cons: string[];
  targetBuyers: BuyerProfile[]; 
  images?: ImageRef[];
}

export interface CategoryData {
  id: string;
  title: string;
  topItems: ProductItem[];
  icon?: LucideIcon;
}

export interface TradeStat {
  name: string;
  value: number;
  label: string;
  subtext: string;
  insight?: string; // Expanded explanation
  trend?: 'up' | 'down' | 'stable'; // Visual trend indicator
}

export interface StrategyDetail {
  title: string;
  content: string;
}

export interface StrategyProduct {
  name: string;
  target: string;
  note: string;
  details: StrategyDetail[];
  images?: ImageRef[];
}
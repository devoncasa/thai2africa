import { LucideIcon } from "lucide-react";

export type Language = 'en' | 'fr' | 'sw' | 'ar' | 'pt';

export enum SectionType {
  HOME = 'HOME',
  SUMMARY = 'SUMMARY',
  MATRIX = 'MATRIX',
  PIGEON_PEA = 'PIGEON_PEA',
  STRATEGY = 'STRATEGY',
  LOGISTICS = 'LOGISTICS',
  VETTING_PORTFOLIO = 'VETTING_PORTFOLIO',
  FAQ = 'FAQ'
}

export interface NavItem {
  id: SectionType;
  label: string;
  icon: LucideIcon;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ImageRef {
  url: string;
  credit: string;
  alt: string;
}

export interface BuyerArchetype {
  title: string;
  description: string;
  requirements: string[];
  volumeTarget: string;
}

export interface ProductItem {
  name: string;
  hsCode?: string;
  context?: string;
  marketLogic2025?: string;
  pros: string[];
  cons: string[];
  archetypes: BuyerArchetype[];
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
  insight?: string; 
  trend?: 'up' | 'down' | 'stable'; 
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

export interface CostingRow {
  id: number;
  productName: string;
  fobPrice: number;    
  freightCost: number; 
  dutyRate: number;    
  facilitationFee: number;
  markup: number;      
}

export interface IntelSection {
  title: string;
  content: string;
  listItems?: string[];
}

export interface IntelTab {
  id: string;
  label: string;
  icon: LucideIcon;
  sections: IntelSection[];
}

export interface LogisticRoute {
  id: string;
  name: string;
  transitTime: string;
  carriers: string[];
  keyInsight: string;
  painPoints: string[];
  costEstimate: string;
}

export interface Regulation {
  country: string;
  name: string;
  description: string;
  criticalAction: string;
}
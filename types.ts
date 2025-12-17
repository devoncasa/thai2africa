import { LucideIcon } from "lucide-react";

export type Language = 'en' | 'fr' | 'sw' | 'ar' | 'pt';

export enum SectionType {
  HOME = 'HOME',
  SUMMARY = 'SUMMARY',
  MATRIX = 'MATRIX',
  PIGEON_PEA = 'PIGEON_PEA',
  STRATEGY = 'STRATEGY',
  LOGISTICS = 'LOGISTICS',
  DIRECTORY = 'DIRECTORY'
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
  focus?: string;        
  products?: string[];   
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

// NEW TYPES FOR LOGISTICS & DIRECTORY
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

export interface DirectoryCompany {
  name: string;
  category: string;
  location: string;
  description: string;
  contact?: string;
}
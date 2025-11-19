import { 
  Wheat, 
  Fish, 
  Car, 
  Construction, 
  Utensils, 
  FlaskConical, 
  CircuitBoard, 
  Shirt, 
  Sprout, 
  Droplet, 
  Home, 
  FileText, 
  Grid3X3, 
  Bean, 
  TrendingUp, 
  BookOpen,
  History,
  Telescope,
  Map
} from "lucide-react";
import { CategoryData, SectionType, NavItem, TradeStat, BuyerProfile, StrategyProduct, ImageRef, IntelTab } from "./types";

export const NAV_ITEMS: NavItem[] = [
  { id: SectionType.HOME, label: 'Home', icon: Home },
  { id: SectionType.SUMMARY, label: 'Exec. Summary', icon: FileText },
  { id: SectionType.MATRIX, label: 'Product Matrix', icon: Grid3X3 },
  { id: SectionType.PIGEON_PEA, label: 'Pigeon Pea Intel', icon: Bean },
  { id: SectionType.STRATEGY, label: 'Strategy & Action', icon: TrendingUp },
  { id: SectionType.SOURCES, label: 'Sources', icon: BookOpen },
];

export const TRADE_STATS_DATA: TradeStat[] = [
  { 
    name: 'Thai Exports to SA', 
    value: 3070, 
    label: '$3.07 Billion', 
    subtext: 'Major market for Rice & Auto (2024)',
    insight: 'South Africa acts as the critical "Gateway Hub" for Thai products entering the SADC region. The volume is heavily anchored by the automotive sector (inter-factory supply between Toyota/Isuzu plants) and national food security staples (Rice). This indicates a mature, industrial-scale trade relationship.',
    trend: 'stable'
  },
  { 
    name: 'Thai Exports to Malawi', 
    value: 19.1, 
    label: '$19.1 Million', 
    subtext: 'Concentrated in Pharma & Plastics',
    insight: 'Direct trade is currently underdeveloped, with most Thai goods entering Malawi indirectly via South African distributors (adding cost). The opportunity lies in "Direct-to-Lilongwe" shipments of high-value, low-volume goods like Pharmaceuticals, Surgical Rubber, and Agro-Chemicals to bypass middlemen.',
    trend: 'up'
  },
  { 
    name: 'Malawi Pigeon Pea Exp.', 
    value: 31.6, 
    label: '$31.6 Million', 
    subtext: 'Global export value (2023)',
    insight: 'Malawi is a top global origin for Pigeon Peas. For Thailand, this represents a strategic "Origin Sourcing" opportunity. Thai food processors can import raw Malawi pulses to process into value-added snacks or re-export to India/China, diversifying their supply chain away from Myanmar.',
    trend: 'up'
  },
];

export const SUMMARY_IMAGES: ImageRef[] = [];
export const PIGEON_PEA_IMAGES: ImageRef[] = [];

export const PIGEON_PEA_INTEL: IntelTab[] = [
  {
    id: 'context',
    label: '1. Market Context',
    icon: History,
    sections: [
      {
        title: "1) Short Summary (Quick Take)",
        content: "Historically, Thailand has been a very small, niche importer of pigeon peas (Cajanus cajan). Imports have occurred sporadically (not a steady large-volume trade), with occasional price/volume spikes tied to global market cycles. There is some domestic production and limited local processing capacity, so most commercial opportunities for Thailand are niche: processing/rehashing into dhal, ethnic/diaspora retail, specialty/health food channels, animal feed experiments, or re-exports."
      },
      {
        title: "2) Historical Imports",
        content: "Low but visible import volumes are recorded in public trade-tracking sites, though not at the scale of staple pulses like mung bean. Price volatility has been a key characteristic, with strong variability making large-scale stable sourcing unattractive for mainstream Thai processors in the past. Local experiments in the 1990s showed capability but lacked mainstream adoption.",
        listItems: [
           "Low but visible import volumes (Zauba).",
           "Price volatility & spikes (IndexBox).",
           "Local experiments & small-scale processing (ACIAR)."
        ]
      },
      {
        title: "3) Current Baseline (2024–25)",
        content: "Imports remain niche. Prices and trading platforms show that Thailand continues to import pigeon peas at modest volumes. The market is sensitive to origin and quality (split vs whole). India remains the principal competitor, while Myanmar and African origins (Malawi, Tanzania) serve as alternatives offering specific quality grades."
      }
    ]
  },
  {
    id: 'potential',
    label: '2. Future Potential',
    icon: Telescope,
    sections: [
      {
        title: "4) Future Potential Scenarios",
        content: "Breakdown of market opportunities for Thai importers:",
        listItems: [
          "A — Niche Processing (Most Realistic): Import raw whole peas from Malawi/Myanmar, split/clean/pack as dhal for ethnic retail and regional export.",
          "B — Specialty & Health Food: Plant protein powders and ready-to-eat dals. Premium channel.",
          "C — Feed Experiments: Potential as monogastric feed ingredient if trials prove consistency against soybean.",
          "D — Large-scale Commodity: Unlikely unless India faces supply shocks."
        ]
      },
      {
        title: "5) Key Growth Drivers",
        content: "Critical factors that will determine future volume:",
        listItems: [
          "Price gap vs Indian supply (Malawi must be cheaper CIF).",
          "Quality & grading capability (Thai processors need consistency).",
          "Logistics cost from landlocked Malawi vs Myanmar proximity.",
          "Regulatory & tariff environment (Sanitary/Phytosanitary rules)."
        ]
      }
    ]
  },
  {
    id: 'roadmap',
    label: '3. Execution Roadmap',
    icon: Map,
    sections: [
      {
        title: "6) Practical Roadmap for Importers",
        content: "Step-by-step guide to entering the trade:",
        listItems: [
          "1. Market Test (Pilot): Import 20–50 tonne trial batch.",
          "2. QC & Lab Tests: Check moisture, foreign matter, pest history.",
          "3. Packaging: Split and pack with Thai labeling (HACCP/GMP).",
          "4. Sourcing Model: Prefer forward contracts.",
          "5. Channel Testing: Sell into ethnic supermarkets.",
          "6. Scale Decision: Expand to private-label if margins hold."
        ]
      },
      {
        title: "7) Risks & Mitigations",
        content: "Strategies to manage volatility:",
        listItems: [
          "Price Shock: Use contract hedging.",
          "Quality Inconsistency: Require pre-cleaning certificates.",
          "Logistics Delays: Plan inventory buffers for landlocked origins."
        ]
      },
      {
        title: "8) Suggested Next Research Steps",
        content: "Recommended immediate actions:",
        listItems: [
           "Pull UN Comtrade / Thai customs data for HS 07139090.",
           "Compile sample supplier list (Malawi/Myanmar/India).",
           "Build landed-cost model."
        ]
      }
    ]
  }
];

export const THAI_BUYERS_DIRECTORY: BuyerProfile[] = [
  {
    name: "Heritage Snacks & Food Co., Ltd.",
    type: "Processor / Brand Owner",
    focus: "Nuts, Dried Fruits, Legumes",
    phone: "+66 2 813 0954",
    address: "Nakhon Pathom",
    note: "Owner of 'Heritage' brand. Huge importer of raw nuts and beans.",
    approach: "Send lab specs for 'Premium Grade' Pigeon Peas."
  },
  {
    name: "Thai Ha Public Company Limited",
    type: "Manufacturer",
    focus: "Mung Beans, Glass Noodles",
    phone: "+66 2 236 9999",
    address: "Bangkok",
    note: "Major player in glass noodle production.",
    approach: "Pitch Pigeon Peas as a cost-effective starch alternative."
  },
  {
    name: "Gravity Intertrade Co., Ltd.",
    type: "Specialist Importer",
    focus: "Beans, Pulses",
    phone: "+66 2 123 4567 (HQ)",
    address: "Bangkok (Sathon)",
    note: "Active trader in the pulse market.",
    approach: "Price is key. Offer FOB Beira/Nacala quotes directly."
  },
  {
    name: "Limsakdakul Agricultural Industry",
    type: "Wholesaler",
    focus: "Red Beans, Black Beans",
    phone: "+66 2 463 0026",
    address: "Samut Prakan",
    note: "Long-standing family agri-business.",
    approach: "Send physical samples (500g)."
  },
  {
    name: "Capital Trading Co., Ltd.",
    type: "Commodity Trader",
    focus: "Feed Ingredients",
    phone: "+66 2 233 9000",
    address: "Bangkok",
    note: "Deals in bulk commodities.",
    approach: "Pitch 'Fair Average Quality' (FAQ) pigeon peas for feed."
  }
];

export const PRODUCT_CATEGORIES: CategoryData[] = [
  {
    id: 'rice',
    title: 'Rice & Broken Rice',
    icon: Wheat,
    topItems: [
      {
        name: 'White Rice & Jasmine (HS 1006)',
        context: "MARKET OVERVIEW & DEMAND TRENDS:\nSouth Africa imports over 1 million tonnes of rice annually...",
        statHighlight: '~USD 464M (2023 Exports to SA)',
        priceSignal: 'Retail Premium: $2.50 - $6.00/kg',
        pros: ["Thai Hom Mali: Global benchmark.", "Established shipping lines.", "Cooking yield."],
        cons: ["Price Sensitivity.", "Tariff Fluctuations.", "Phytosanitary."],
        targetBuyers: [
          { 
            name: 'Shoprite Holdings', 
            country: 'South Africa',
            type: 'Retail Chain (Major)', 
            website: 'https://www.shopriteholdings.co.za',
            products: ['Parboiled Rice', 'Jasmine Rice', 'House Brands'],
            contactPerson: 'Category Manager: Grains',
            email: 'suppliers@shoprite.co.za',
            phone: '+27 21 980 4000',
            address: 'Brackenfell, Western Cape',
            note: 'Largest retailer in Africa. Uses centralized procurement.',
            lastVerified: '2024-02-15',
            sources: ['https://www.shopriteholdings.co.za'],
            isPriority: true,
            approach: "Subject: Private Label Jasmine Rice Proposal. Intro: We can match your 'Housebrand' specs with 100% Thai Hom Mali certification."
          },
          { 
            name: 'Massmart (Makro/Game)', 
            country: 'South Africa',
            type: 'Wholesale / Retail', 
            website: 'https://www.massmart.co.za',
            products: ['Bulk Rice', 'Broken Rice'],
            contactPerson: 'Procurement Division',
            email: 'info@massmart.co.za',
            address: 'Sandton, Johannesburg',
            note: 'Walmart-owned. Focuses on bulk packs.',
            lastVerified: '2024-01-20',
            sources: ['https://www.massmart.co.za'],
            isPriority: true
          },
          { name: 'Boxer Superstores', country: 'South Africa', type: 'Retail Chain', website: 'https://www.boxer.co.za', products: ['Budget Parboiled'], note: 'Dominant in township markets.', lastVerified: '2024-02-28', sources: ['https://www.boxer.co.za'] },
          { name: 'Chipiku Stores', country: 'Malawi', type: 'Retail Chain', website: 'https://www.chipikustores.com', products: ['White Rice', 'Cooking Oil'], note: 'Major distribution network in Malawi.', lastVerified: '2023-11-10', sources: ['https://www.chipikustores.com'] },
          { name: 'Devland Cash & Carry', country: 'South Africa', type: 'Wholesaler', website: 'https://www.devland.co.za', products: ['Budget Rice'], note: 'Serves informal Spaza shops.', lastVerified: '2023-12-01', sources: ['https://www.devland.co.za'] },
          { name: 'Choppies Enterprises', country: 'South Africa', type: 'Regional Retailer', website: 'https://choppies.co.bw', products: ['Staples'], note: 'Strong regional footprint.', lastVerified: '2024-01-15', sources: ['https://choppies.co.bw'] },
          { name: 'Tiger Brands', country: 'South Africa', type: 'Food Manufacturer', website: 'https://www.tigerbrands.com', products: ['Rice (Tastic)'], note: 'Owners of Tastic brand.', lastVerified: '2024-02-10', sources: ['https://www.tigerbrands.com'] },
          { name: 'Golden Harvest', country: 'South Africa', type: 'Specialist Retailer', website: 'https://goldenharvest.co.za', products: ['Premium Rice'], note: 'High-end specialty groceries.', lastVerified: '2024-03-15', sources: ['https://goldenharvest.co.za'] }
        ],
        images: []
      }
    ]
  },
  {
    id: 'seafood',
    title: 'Processed Seafood',
    icon: Fish,
    topItems: [
      {
        name: 'Canned Tuna & Sardines',
        context: "MARKET OVERVIEW:\nCanned fish is a strategic protein source in Southern Africa...",
        statHighlight: 'High Volume Category',
        priceSignal: 'Competitive vs EU brands',
        pros: ["Shelf Stability.", "Halal Certification.", "Variety."],
        cons: ["NRCS Testing.", "EU Partnership Agreements.", "Local Taste."],
        targetBuyers: [
          { name: 'Oceana Group', country: 'South Africa', type: 'Processor/Brand', website: 'https://oceana.co.za', products: ['Canned Mackerel'], note: 'Dominant market leader (Lucky Star).', lastVerified: '2024-03-01', sources: ['https://oceana.co.za'], isPriority: true },
          { name: 'Woolworths Food', country: 'South Africa', type: 'Premium Retail', website: 'https://www.woolworths.co.za', products: ['Sustainable Tuna'], note: 'Strict sustainability requirements.', lastVerified: '2024-02-20', sources: ['https://www.woolworths.co.za'], isPriority: true },
          { name: 'Peoples Trading Centre', country: 'Malawi', type: 'Retail Chain', website: 'http://www.presscorp.com', products: ['Canned Pilchards'], note: 'Key outlet in Malawi.', lastVerified: '2023-10-15', sources: ['http://www.presscorp.com'] },
          { name: 'Bidfood SA', country: 'South Africa', type: 'Food Service', website: 'https://www.bidfood.co.za', products: ['Catering Tuna'], note: 'Largest food service distributor.', lastVerified: '2024-02-12', sources: ['https://www.bidfood.co.za'] },
          { name: 'Rhodes Food Group', country: 'South Africa', type: 'Manufacturer', website: 'https://www.rfg.com', products: ['Canned Meats/Fish'], note: 'Major player in canned goods.', lastVerified: '2024-01-25', sources: ['https://www.rfg.com'] },
          { name: 'Three Streams', country: 'South Africa', type: 'Specialist', website: 'https://threestreams.co.za', products: ['Specialty Seafood'], note: 'High-end market.', lastVerified: '2023-11-30', sources: ['https://threestreams.co.za'] },
          { name: 'Giant Hyper', country: 'South Africa', type: 'Wholesaler', website: 'https://gianthyper.co.za', products: ['Bulk Packs'], note: 'Large independent wholesaler.', lastVerified: '2024-01-10', sources: ['https://gianthyper.co.za'] },
          { name: 'Trade Kings', country: 'Malawi', type: 'Distributor', website: 'https://tradekings.co.zm', products: ['FMCG'], note: 'Regional player.', lastVerified: '2024-01-20', sources: ['https://tradekings.co.zm'] }
        ],
        images: []
      }
    ]
  },
  {
    id: 'auto',
    title: 'Automobiles & Parts',
    icon: Car,
    topItems: [
      {
        name: 'Passenger Cars & OEM Parts',
        context: "MARKET OVERVIEW:\nThailand is the 'Detroit of Asia' and shares a unique synergy with South Africa...",
        statHighlight: '$177M (Cars) / $176M (Parts)',
        priceSignal: 'Competitive vs EU/Japan Source',
        pros: ["RHD Compatibility.", "Supply Chain Integration.", "Cost/Quality Ratio."],
        cons: ["Import Duties.", "Homologation.", "Local Content Rules."],
        targetBuyers: [
          { name: 'Motus Aftermarket Parts', country: 'South Africa', type: 'Distributor', website: 'https://motusparts.co.za', products: ['Service Parts'], note: 'Dominates aftermarket.', lastVerified: '2024-02-10', sources: ['https://motusparts.co.za'], isPriority: true },
          { name: 'AutoZone SA', country: 'South Africa', type: 'Retail Chain', website: 'https://autozone.co.za', products: ['Accessories', 'Parts'], note: '200+ Stores.', lastVerified: '2024-01-25', sources: ['https://autozone.co.za'] },
          { name: 'Toyota SA', country: 'South Africa', type: 'OEM Manufacturer', website: 'https://www.toyota.co.za', products: ['Components'], note: 'Durban Plant.', lastVerified: '2024-03-10', sources: ['https://www.toyota.co.za'], isPriority: true },
          { name: 'Masterparts', country: 'South Africa', type: 'Specialist', website: 'https://www.masterparts.com', products: ['Engine Parts'], note: 'High-technical focus.', lastVerified: '2024-02-15', sources: ['https://www.masterparts.com'] },
          { name: 'Goldwagen', country: 'South Africa', type: 'Franchise', website: 'https://www.goldwagen.com', products: ['OEM Quality Parts'], note: 'Focus on OEM quality.', lastVerified: '2024-02-05', sources: ['https://www.goldwagen.com'] },
          { name: 'Grandmark', country: 'South Africa', type: 'Distributor', website: 'https://grandmark.co.za', products: ['Body Panels'], note: 'Non-OEM body parts.', lastVerified: '2024-02-05', sources: ['https://grandmark.co.za'] },
          { name: 'Kapico SA', country: 'South Africa', type: 'Wholesaler', website: 'https://kapicogroup.com', products: ['Brake Pads'], note: 'Global group.', lastVerified: '2023-12-10', sources: ['https://kapicogroup.com'] },
          { name: 'ASL', country: 'South Africa', type: 'Distributor', website: 'https://asl.co.za', products: ['Filters'], note: 'Represents brands like Fram.', lastVerified: '2024-01-20', sources: ['https://asl.co.za'] }
        ],
        images: []
      }
    ]
  },
  {
    id: 'rubber',
    title: 'Rubber Products',
    icon: Droplet,
    topItems: [
      {
        name: 'Medical Gloves & Tyres',
        context: "MARKET OVERVIEW:\nPost-pandemic demand for Nitrile/Latex gloves...",
        statHighlight: 'Consistent Health Sector Demand',
        pros: ["Raw Material Leadership.", "Brand Trust.", "Mining Demand."],
        cons: ["Price Volatility.", "SABS Certification.", "Tender Process."],
        targetBuyers: [
          { name: 'Dis-Chem Pharmacies', country: 'South Africa', type: 'Pharma Retail', website: 'https://www.dischem.co.za', products: ['Gloves'], note: 'Major chain.', lastVerified: '2024-01-30', sources: ['https://www.dischem.co.za'], isPriority: true },
          { name: 'Netcare Limited', country: 'South Africa', type: 'Hospital Group', website: 'https://www.netcare.co.za', products: ['Surgical Gloves'], note: 'Private hospital giant.', lastVerified: '2023-12-15', sources: ['https://www.netcare.co.za'] },
          { name: 'TiAuto Investments', country: 'South Africa', type: 'Tyre Retailer', website: 'https://www.tiauto.co.za', products: ['Tyres'], note: 'Market leader.', lastVerified: '2024-02-20', sources: ['https://www.tiauto.co.za'] },
          { name: 'North Safety', country: 'South Africa', type: 'Industrial', website: 'https://www.northsafety.co.za', products: ['Industrial Gloves'], note: 'Mining supplier.', lastVerified: '2024-01-30', sources: ['https://www.northsafety.co.za'] },
          { name: 'Bearings Intl', country: 'South Africa', type: 'Industrial', website: 'https://www.bearings.co.za', products: ['Seals', 'Belts'], note: 'Agri/Manufacturing.', lastVerified: '2024-02-15', sources: ['https://www.bearings.co.za'] },
          { name: 'RPM', country: 'South Africa', type: 'Manufacturer', website: 'https://rpm.co.za', products: ['Mouldings'], note: 'Raw rubber sheet.', lastVerified: '2023-11-05', sources: ['https://rpm.co.za'] },
          { name: 'MediClinic', country: 'South Africa', type: 'Hospital Group', website: 'https://www.mediclinic.co.za', products: ['Consumables'], note: 'Premium hospitals.', lastVerified: '2024-01-10', sources: ['https://www.mediclinic.co.za'] },
          { name: 'Truzo', country: 'South Africa', type: 'B2B', website: 'https://truzo.com', products: ['Medical Supplies'], note: 'Digital platform.', lastVerified: '2023-10-20', sources: ['https://truzo.com'] }
        ],
        images: []
      }
    ]
  },
  {
    id: 'food',
    title: 'Processed Foods',
    icon: Utensils,
    topItems: [
      {
        name: 'Sauces, Pastes & Instant Noodles',
        context: "MARKET OVERVIEW:\nUrbanization in Africa is driving a 'Convenience Food' boom...",
        statHighlight: 'High Margin / Low Weight',
        priceSignal: 'Wholesale: Low / Retail: Mid-High',
        pros: ["Flavor Profile.", "Lightweight.", "Private Label."],
        cons: ["Labeling (R.146).", "Competition.", "Sugar Tax."],
        targetBuyers: [
          { name: 'Checkers', country: 'South Africa', type: 'Premium Retail', website: 'https://www.checkers.co.za', products: ['Asian Sauces'], note: 'Foreign Ground brand.', lastVerified: '2024-02-15', sources: ['https://www.checkers.co.za'], isPriority: true },
          { name: 'Libstar', country: 'South Africa', type: 'Manufacturer', website: 'https://libstar.co.za', products: ['Private Label'], note: 'Partner for Woolworths.', lastVerified: '2024-02-01', sources: ['https://libstar.co.za'], isPriority: true },
          { name: 'Africa Sun Oil', country: 'South Africa', type: 'Manufacturer', website: 'https://africasunoil.com', products: ['Industrial Pastes'], note: 'Bulk pastes.', lastVerified: '2023-11-20', sources: ['https://africasunoil.com'] },
          { name: 'Sanna Trading', country: 'Malawi', type: 'Importer', website: 'https://www.sannatrading.com', products: ['Snacks'], note: 'FMCG distributor.', lastVerified: '2023-09-15', sources: ['Public Directory'] },
          { name: 'Kit Kat Cash & Carry', country: 'South Africa', type: 'Wholesale', website: 'https://kitkatgroup.com', products: ['Noodles'], note: 'Aggressive pricing.', lastVerified: '2024-01-25', sources: ['https://kitkatgroup.com'] },
          { name: 'Giant Sweets', country: 'South Africa', type: 'Distributor', website: 'https://giantsweets.co.za', products: ['Confectionery'], note: 'Impulse snacks.', lastVerified: '2023-12-05', sources: ['https://giantsweets.co.za'] },
          { name: 'PTC Malawi', country: 'Malawi', type: 'Retail', website: 'http://www.presscorp.com', products: ['Canned Foods'], note: 'Main retailer.', lastVerified: '2023-10-20', sources: ['http://www.presscorp.com'] },
          { name: 'Independent C&C', country: 'South Africa', type: 'Wholesale', website: 'https://independentgroup.co.za', products: ['Ethnic Foods'], note: 'Huge network.', lastVerified: '2024-01-10', sources: ['https://independentgroup.co.za'] }
        ],
        images: []
      }
    ]
  },
  {
    id: 'cosmetics',
    title: 'Cosmetics & Personal Care',
    icon: FlaskConical,
    topItems: [
      {
        name: 'Herbal Skincare & Suncare',
        context: "MARKET OVERVIEW:\nThe African beauty market is shifting towards 'Natural & Organic'...",
        statHighlight: 'Niche High Growth',
        pros: ["Unique Ingredients.", "Spa Reputation.", "Packaging."],
        cons: ["SAHPRA.", "Marketing Cost.", "Skin Tone."],
        targetBuyers: [
          { name: 'Sorbet Group', country: 'South Africa', type: 'Beauty Salons', website: 'https://www.sorbet.co.za', products: ['Spa Products'], note: 'Largest franchise.', lastVerified: '2024-01-10', sources: ['https://www.sorbet.co.za'], isPriority: true },
          { name: 'Clicks Group', country: 'South Africa', type: 'Pharmacy', website: 'https://clicks.co.za', products: ['Natural Beauty'], note: 'Mass market.', lastVerified: '2024-02-25', sources: ['https://clicks.co.za'] },
          { name: 'TFG', country: 'South Africa', type: 'Retail', website: 'https://tfglimited.co.za', products: ['Cosmetics'], note: 'Expanding beauty.', lastVerified: '2024-01-15', sources: ['https://tfglimited.co.za'] },
          { name: 'Wellness Warehouse', country: 'South Africa', type: 'Health Retail', website: 'https://wellnesswarehouse.com', products: ['Organic Skin'], note: 'Health conscious.', lastVerified: '2024-02-22', sources: ['https://wellnesswarehouse.com'] },
          { name: 'Camelot Spa', country: 'South Africa', type: 'Spa Chain', website: 'https://camelotspa.co.za', products: ['Massage Oils'], note: 'Major franchisor.', lastVerified: '2024-01-05', sources: ['https://camelotspa.co.za'] },
          { name: 'HomeChoice', country: 'South Africa', type: 'Direct Retail', website: 'https://www.homechoice.co.za', products: ['Beauty Sets'], note: 'Catalog sales.', lastVerified: '2023-11-15', sources: ['https://www.homechoice.co.za'] },
          { name: 'Annique', country: 'South Africa', type: 'Direct Selling', website: 'https://www.annique.com', products: ['Skincare'], note: 'Rooibos based.', lastVerified: '2023-10-10', sources: ['https://www.annique.com'] },
          { name: 'Signature Cosmetics', country: 'South Africa', type: 'Retail', website: 'https://signaturecosmetics.co.za', products: ['Makeup'], note: 'Budget friendly.', lastVerified: '2024-01-20', sources: ['https://signaturecosmetics.co.za'] }
        ],
        images: []
      }
    ]
  },
  {
    id: 'agro',
    title: 'Agro-Inputs',
    icon: Sprout,
    topItems: [
      {
        name: 'Fertilizers & Small Machinery',
        context: "MARKET OVERVIEW:\nMalawi's economy is 80% agrarian...",
        statHighlight: 'Strategic Dev. Sector',
        pros: ["Appropriate Tech.", "Development Aid.", "Climate Match."],
        cons: ["Purchasing Power.", "Spare Parts.", "Regulatory."],
        targetBuyers: [
          { name: 'ATC Malawi', country: 'Malawi', type: 'Agri-Input', website: 'https://www.atc.mw', products: ['Fertilizers'], note: 'State-linked.', lastVerified: '2023-11-05', sources: ['https://www.atc.mw'], isPriority: true },
          { name: 'Farmers World', country: 'Malawi', type: 'Retail', website: 'https://www.farmersworld.mw', products: ['Seeds/Tools'], note: 'Rural network.', lastVerified: '2023-12-12', sources: ['https://www.farmersworld.mw'] },
          { name: 'Omnia', country: 'South Africa', type: 'Agri-Chem', website: 'https://www.omnia.co.za', products: ['Raw Ingredients'], note: 'Regional giant.', lastVerified: '2024-01-15', sources: ['https://www.omnia.co.za'] },
          { name: 'Afgri', country: 'South Africa', type: 'Agri-Services', website: 'https://www.afgri.co.za', products: ['Equipment'], note: 'Commercial farmers.', lastVerified: '2024-02-05', sources: ['https://www.afgri.co.za'] },
          { name: 'Senwes', country: 'South Africa', type: 'Agri-Business', website: 'https://www.senwes.co.za', products: ['Mechanisation'], note: 'Maize belt.', lastVerified: '2023-12-10', sources: ['https://www.senwes.co.za'] },
          { name: 'Agora', country: 'South Africa', type: 'Retailer', website: 'https://agora.co.za', products: ['Supplies'], note: 'Co-op style.', lastVerified: '2023-11-25', sources: ['Public Directory'] },
          { name: 'Malawi Mangoes', country: 'Malawi', type: 'Commercial Farm', website: 'http://malawimangoes.com', products: ['Machinery'], note: 'Fruit processor.', lastVerified: '2023-10-05', sources: ['http://malawimangoes.com'] },
          { name: 'ETG', country: 'South Africa', type: 'Global Trader', website: 'https://www.etgworld.com', products: ['Fertilizer'], note: 'Massive footprint.', lastVerified: '2024-02-20', sources: ['https://www.etgworld.com'] }
        ],
        images: []
      }
    ]
  },
  {
    id: 'plastics',
    title: 'Plastics & Polymers',
    icon: Construction,
    topItems: [
      {
        name: 'Packaging & Industrial Plastic',
        context: "MARKET OVERVIEW:\nSouth Africa has a developed manufacturing sector...",
        statHighlight: 'Industrial Staple',
        pros: ["Volume Demand.", "Thai Petrochem.", "Versatility."],
        cons: ["Anti-Dumping.", "Environmental Levies.", "Freight Cost."],
        targetBuyers: [
          { name: 'Mpact', country: 'South Africa', type: 'Manufacturer', website: 'https://www.mpact.co.za', products: ['Polymers'], note: 'Leading packaging.', lastVerified: '2024-02-01', sources: ['https://www.mpact.co.za'], isPriority: true },
          { name: 'Polypet', country: 'Malawi', type: 'Manufacturer', website: 'https://www.candlexmw.com', products: ['PET Resins'], note: 'Bottles.', lastVerified: '2023-10-20', sources: ['Malawi Chamber'] },
          { name: 'Berry Astrapak', country: 'South Africa', type: 'Manufacturer', website: 'https://www.berryglobal.com', products: ['Rigid Packaging'], note: 'Global giant.', lastVerified: '2024-01-15', sources: ['https://www.berryglobal.com'] },
          { name: 'Polyoak', country: 'South Africa', type: 'Manufacturer', website: 'https://www.polyoakpackaging.co.za', products: ['Dairy Tubs'], note: 'Family owned.', lastVerified: '2024-02-10', sources: ['https://www.polyoakpackaging.co.za'] },
          { name: 'Nampak', country: 'South Africa', type: 'Packaging', website: 'https://www.nampak.com', products: ['Crates'], note: 'Africa largest.', lastVerified: '2023-12-20', sources: ['https://www.nampak.com'] },
          { name: 'Transpaco', country: 'South Africa', type: 'Manufacturer', website: 'https://transpaco.co.za', products: ['Films'], note: 'Retail bags.', lastVerified: '2024-01-05', sources: ['https://transpaco.co.za'] },
          { name: 'Easy Pack', country: 'Malawi', type: 'Manufacturer', website: 'https://easypackmw.com', products: ['Food Pack'], note: 'Local supply.', lastVerified: '2023-09-20', sources: ['Directory'] },
          { name: 'Bowler Plastics', country: 'South Africa', type: 'Manufacturer', website: 'https://bowler.co.za', products: ['Cosmetic Pack'], note: 'Rigid plastic.', lastVerified: '2023-11-10', sources: ['https://bowler.co.za'] }
        ],
        images: []
      }
    ]
  }
];

export const STRATEGY_STEPS = [
  {
    title: "Pilot Product Selection (Month 1)",
    desc: "Focus on top 10 SKUs. Recommended: Jasmine rice (Retail Pack), Canned Tuna (185g), Auto Parts (Filters/Brake Pads). For Malawi: 20ft container trial of Pigeon Peas."
  },
  {
    title: "Commercial Compliance",
    desc: "Verify HS Codes. Check import duties (SA & Malawi MFN rates). Secure Certificates of Origin and Phytosanitary docs for agri-goods."
  },
  {
    title: "Buyer Outreach",
    desc: "SA: Approach Category Managers at Shoprite/SPAR. Malawi: Contact Agricultural Trading Company. Thailand: Pitch pigeon peas to Gravity Intertrade."
  },
  {
    title: "Logistics & Costing",
    desc: "Calculate Landed Cost (CIF). Factor in Durban port congestion times. For Malawi, calculate inland trucking from Beira or Nacala."
  }
];

export const UNIQUE_THAI_PRODUCTS: StrategyProduct[] = [
  { 
    name: "Jasmine Premium Rice", 
    target: "SA Retail Chains", 
    note: "High brand value",
    details: [
      { 
        title: "Market Demand", 
        content: "South Africa consumes over 1M tons of rice annually. While parboiled is standard, the premium segment for aromatic rice is growing, driven by the upper-middle class. Demand peaks during festive seasons, with a preference for high-quality, fragrant varieties that complement local curries and stews."
      },
      { 
        title: "Buyer Behavior", 
        content: "Brand loyalty is high for premium rice. Consumers look for 'New Crop' labels and specific aroma guarantees. Packaging transparency (clear windows) is crucial to showcase grain quality. Retailers demand consistent supply and competitive promotional pricing."
      },
      { 
        title: "Compliance Notes", 
        content: "Must comply with South African Dept of Agriculture grading (APS Act). Phytosanitary certificate is essential. Zero tolerance for pests like Trogoderma granarium. Labeling must follow R.146 regulations, including nutritional tables and country of origin."
      },
      { 
        title: "Logistics Considerations", 
        content: "Moisture control is critical (max 14%). Use desiccant bags in containers to prevent 'container rain' during crossing the equator. 25kg and 50kg PP bags are standard for wholesale; 1kg/2kg laminate bags are required for retail shelves."
      }
    ],
    images: []
  },
  { 
    name: "Thai Curry & Meal Kits", 
    target: "Urban Supermarkets", 
    note: "Convenience trend",
    details: [
      {
        title: "Market Demand",
        content: "Rising urbanization and dual-income households in SA are driving demand for 'convenience with authenticity'. The 'Home Meal Replacement' market is expanding. Consumers want exotic flavors without the hassle and cost of buying 20 separate ingredients for a single meal."
      },
      {
        title: "Buyer Behavior",
        content: "Health-conscious urbanites read labels for MSG and preservatives. Halal certification widens the addressable market significantly in SA. 'Heat and Eat' formats outperform complex cooking kits. Authentic taste is a key differentiator against locally produced generic sauces."
      },
      {
        title: "Compliance Notes",
        content: "Ingredients list must be detailed (allergens: shrimp, soy, peanut). Halal certification (SANHA/MJC recognized) is a major plus. Food safety standards (HACCP/ISO 22000) are required for listing with major retailers like Woolworths and Checkers."
      },
      {
        title: "Logistics Considerations",
        content: "Shelf life management is key. Pastes are heavy/dense; efficient palletization lowers unit shipping cost. Temperature control is not strictly needed for ambient pastes but cool storage is preferred to maintain color and flavor intensity."
      }
    ],
    images: []
  },
  { 
    name: "Herbal Skincare", 
    target: "Boutique Spas", 
    note: "Natural ingredients story",
    details: [
      {
        title: "Market Demand",
        content: "The 'Clean Beauty' trend is strong in SA. Consumers are shifting away from harsh chemicals. Thai herbal ingredients like Tamarind, Turmeric, and Coconut oil have high recognition and perceived value for 'natural whitening' and hydration in the African market."
      },
      {
        title: "Buyer Behavior",
        content: "Efficacy and scent are primary drivers. Buyers trust 'Spa Quality' branding associated with Thailand. Sustainable packaging (glass, recycled plastic) appeals to the target demographic (LSM 8-10). Samples are often required before bulk purchase."
      },
      {
        title: "Compliance Notes",
        content: "Notification to CTFA might be required. Avoid medicinal claims ('cures eczema') to stay out of SAHPRA pharmaceutical regulations. Ingredients must be listed according to INCI standards. Skin lightening products with Hydroquinone are banned."
      },
      {
        title: "Logistics Considerations",
        content: "High value-to-weight ratio makes air freight viable for initial samples or high-end lines. Sea freight requires temperature controlled (Reefer) containers to prevent oil separation or melting of balms during transit across the tropics."
      }
    ],
    images: []
  },
  { 
    name: "Dried Tamarind/Fruits", 
    target: "Healthy Snack Aisle", 
    note: "Exotic appeal",
    details: [
      {
        title: "Market Demand",
        content: "Healthy snacking is a booming category. Dried mango is already popular; Sweet Tamarind offers a unique novelty factor. Demand exists in both retail snacking aisles and as bulk ingredients for chutneys/sauces in the large Indian community in KZN."
      },
      {
        title: "Buyer Behavior",
        content: "Taste (sweetness) and texture are paramount. 'No added sugar' and 'Sulphur-free' claims attract premium buyers. Impulse purchases at checkout counters or health food sections are common. Visual appeal of the fruit in packaging is critical."
      },
      {
        title: "Compliance Notes",
        content: "Strict limits on Sulphur Dioxide (SO2) residues. Phytosanitary certificate required. Mycotoxin checks (Aflatoxin/Ochratoxin) for certain dried fruits. Labeling must clearly state any allergens or preservatives used."
      },
      {
        title: "Logistics Considerations",
        content: "Humidity control is vital to prevent stickiness and mold. Nitrogen-flushed packaging extends shelf life. Retail-ready doypacks (ziplock) are preferred over bulk for consumer sales to ensure freshness after opening."
      }
    ],
    images: []
  },
  { 
    name: "Canned Seasoned Fish", 
    target: "Mass Market Retail", 
    note: "Affordable protein",
    details: [
      {
        title: "Market Demand",
        content: "Canned fish is a staple protein. However, the market is dominated by tomato sauce bases. Thai flavored tuna/mackerel (Green Curry, Chili Lime) fills a gap for 'premium convenience' and variety in the middle-class diet, offering a complete meal solution."
      },
      {
        title: "Buyer Behavior",
        content: "Price sensitivity is moderate to high. Buyers look for 'Easy Open' lids and Halal logos. The visual appeal of the sauce upon opening influences repeat purchase. Brand recognition takes time to build against local giants like Lucky Star."
      },
      {
        title: "Compliance Notes",
        content: "CRITICAL: NRCS (National Regulator for Compulsory Specifications) in SA samples EVERY consignment of canned fish. Strict adherence to Codex standards and labeling is mandatory to avoid costly rejection and long delays at port."
      },
      {
        title: "Logistics Considerations",
        content: "Heavy cargo; freight cost is a significant component of landed price. Maximize container weight limits. Cans are durable but check for denting during inland transport. Pallet configuration must maximize stability."
      }
    ],
    images: []
  },
  { 
    name: "Teak & Artisan Wood", 
    target: "Home Decor Stores", 
    note: "Craftsmanship (Check CITES)",
    details: [
      {
        title: "Market Demand",
        content: "High demand for unique, hand-crafted decor items in boutique hotels, lodges, and upscale homes. Thai carving craftsmanship is distinct and hard to replicate locally in Africa. Smaller items like bowls and trays sell well in design stores."
      },
      {
        title: "Buyer Behavior",
        content: "Buyers value uniqueness and 'story'. Authenticity of material (genuine Teak/Acacia) justifies higher price points. B2B buyers (interior designers) buy in collections. Imperfections are often seen as character in this category."
      },
      {
        title: "Compliance Notes",
        content: "HIGH RISK: CITES permits are absolutely mandatory for protected wood species. Fumigation certificates using Methyl Bromide or heat treatment are non-negotiable to clear customs. Illegal wood will be seized and destroyed."
      },
      {
        title: "Logistics Considerations",
        content: "Volume-based freight (CBM) often exceeds weight. Nesting items (e.g., bowls inside bowls) reduces freight cost. Robust crate packaging is needed to prevent breakage. Humidity changes can cause cracking if wood isn't properly kiln-dried."
      }
    ],
    images: []
  },
  { 
    name: "Medical Rubber Gloves", 
    target: "Hospital Procurement", 
    note: "Certifications essential",
    details: [
      {
        title: "Market Demand",
        content: "Constant demand from private hospital groups (Netcare, Mediclinic) and mining industry. Shift towards Nitrile (synthetic) due to latex allergies, but Latex remains cost-effective for some applications. Post-pandemic hygiene awareness sustains volume."
      },
      {
        title: "Buyer Behavior",
        content: "Compliance and supply reliability trump price. Procurement managers need assurance of stock availability. Powder-free is the standard. Texture/grip quality matters for surgical use. Long-term contracts are preferred over spot buys."
      },
      {
        title: "Compliance Notes",
        content: "Must meet SANS (South African National Standards) or equivalent ISO/EN standards. Medical device registration with SAHPRA is required for surgical grades. Factory audit reports (ISO 13485) often requested during tender process."
      },
      {
        title: "Logistics Considerations",
        content: "Shelf life is an issue (aging of rubber). Temperature control during shipping is recommended to prevent degradation. Cartons must be crush-proof to protect dispenser boxes. FCL shipments are standard due to volume."
      }
    ],
    images: []
  },
  { 
    name: "Rice Noodles (Pad Thai)", 
    target: "Food Service / HORECA", 
    note: "Gluten-free trend",
    details: [
      {
        title: "Market Demand",
        content: "Driven by the 'Gluten-Free' trend and the popularity of Asian cuisine. Rice noodles are seen as a healthier alternative to wheat pasta. Growing demand in food service for noodle bars and stir-fry stations in urban centers like Cape Town."
      },
      {
        title: "Buyer Behavior",
        content: "Chefs demand structural integrity (don't break when stir-fried). Retail consumers look for 'Authentic Thai' branding and clear cooking instructions. 3mm and 5mm widths are best sellers. Consistency between batches is critical for commercial kitchens."
      },
      {
        title: "Compliance Notes",
        content: "Standard food labeling (R.146). Gluten-free certification requires lab testing to substantiate the claim (<20ppm). Nutritional analysis must be accurate. Origin certification helps command a premium."
      },
      {
        title: "Logistics Considerations",
        content: "High volume, low weight (volumetric cargo). Best to consolidate with dense cargo (like rice or sauces) to optimize container freight rates. Brittle; needs protective cartons to prevent breakage during handling."
      }
    ],
    images: []
  },
  { 
    name: "Beverage Concentrates", 
    target: "F&B Manufacturers", 
    note: "Flavoring inputs",
    details: [
      {
        title: "Market Demand",
        content: "High sugar tax in SA drives demand for lower-sugar or high-dilution beverages. Thai tropical fruit flavors (Lychee, Mango, Passion Fruit) offer differentiation for local bottlers and cocktail bars looking for unique mixers."
      },
      {
        title: "Buyer Behavior",
        content: "Industrial buyers (bottlers) look for Brix consistency and stable supply. Food service (bars) look for exotic flavor profiles and vibrant colors for mixology. Cost-per-serving is a key metric for B2B buyers."
      },
      {
        title: "Compliance Notes",
        content: "Sugar Tax (Health Promotion Levy) implications on the final product. Intense sweeteners must be declared. Preservative limits (Benzoate/Sorbate) must adhere to SA regulations. Technical data sheets (TDS) required."
      },
      {
        title: "Logistics Considerations",
        content: "Heavy liquid drums (industrial) or glass/plastic bottles (retail). Leaking is a risk; secure pallet wrapping essential. Shelf stability is generally good. Air freight for samples, sea freight for commercial volume."
      }
    ],
    images: []
  },
  { 
    name: "Hotel Amenity Kits", 
    target: "Safari Lodges / Hotels", 
    note: "Luxury hospitality",
    details: [
      {
        title: "Market Demand",
        content: "SA's luxury safari market competes globally. Lodges need eco-friendly, premium amenities that reflect 'nature'. Lemongrass/Ginger scents fit the 'Bush Spa' aesthetic perfectly. High demand for sustainable, plastic-free options."
      },
      {
        title: "Buyer Behavior",
        content: "'Eco-credentials' are the #1 driver: biodegradable packaging, no microplastics, reef-safe. Buyers are Head Housekeepers/GMs who value reliability and 'guest delight' factor. Custom branding capability is often required."
      },
      {
        title: "Compliance Notes",
        content: "Cosmetic regulations apply (ingredients list). Claims of 'Organic' or 'Eco-friendly' must be substantiated to avoid greenwashing accusations. MSDS sheets required for shipping liquids."
      },
      {
        title: "Logistics Considerations",
        content: "Small units; theft risk is higher (pilferage). Shrink-wrapped pallets recommended. Liquids need to be sealed against leakage due to pressure changes (if air freighted) or heat during inland transport to lodges."
      }
    ],
    images: []
  }
];
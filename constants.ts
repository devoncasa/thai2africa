import { 
  Wheat, 
  Car, 
  Construction, 
  Utensils, 
  FlaskConical, 
  Home, 
  FileText, 
  Grid3X3, 
  Bean, 
  TrendingUp, 
  BookOpen,
  History,
  Telescope,
  Map,
  Ship,
  Sparkles,
  Zap,
  Sprout,
  Settings,
  ShieldCheck,
  Shirt,
  HelpCircle,
  Boxes,
  Activity,
  Droplets,
  Zap as EnergyIcon,
  LineChart,
  Navigation,
  Globe
} from "lucide-react";
import { CategoryData, SectionType, NavItem, TradeStat, StrategyProduct, ImageRef, IntelTab, LogisticRoute, Regulation, BuyerArchetype, FAQItem } from "./types";

export const NAV_ITEMS: NavItem[] = [
  { id: SectionType.HOME, label: 'Home', icon: Home },
  { id: SectionType.SUMMARY, label: 'Corridor Intel', icon: FileText },
  { id: SectionType.MATRIX, label: 'Supply Matrix', icon: Grid3X3 },
  { id: SectionType.PIGEON_PEA, label: 'Sourcing Focus', icon: Bean },
  { id: SectionType.STRATEGY, label: 'Process Framework', icon: TrendingUp },
  { id: SectionType.LOGISTICS, label: 'Corridor Management', icon: Ship },
  { id: SectionType.VETTING_PORTFOLIO, label: 'Vetting Portfolio', icon: BookOpen },
  { id: SectionType.FAQ, label: 'Trade FAQ', icon: HelpCircle },
];

export const TRADE_STATS_DATA: TradeStat[] = [
  { 
    name: 'Thai-SADC Corridor', 
    value: 5820, 
    label: 'ZAR 5.82 Bn', 
    subtext: 'Q1 2025 Realized Trade Value',
    insight: 'The Southern African Development Community (SADC) continues to be the primary destination for Thai industrial polymers and parboiled rice. Our data indicates a 12% increase in Tier-2 automotive component sourcing by regional assemblers in Durban. This growth is driven by localized manufacturing incentives in South Africa and the demand for high-durability Thai-spec suspension components.',
    trend: 'up'
  },
  { 
    name: 'West Africa Commodity Hub', 
    value: 215, 
    label: 'USD ~215 M', 
    subtext: 'Monthly Facilitated Cargo Flow',
    insight: 'West Africa (ECOWAS) has emerged as a high-velocity hub for Thai FMCG and processed proteins. The implementation of AfCFTA rules of origin is incentivizing Thai producers to ship semi-finished goods for local final packaging in Lagos and Accra. This strategy optimizes import duties while leveraging Thailand\'s global benchmark in food processing technology.',
    trend: 'stable'
  },
  { 
    name: 'East Africa Agri-Flow', 
    value: 34.2, 
    label: 'USD 34.2 M', 
    subtext: 'Direct Ag-Trade Arbitrage',
    insight: 'The East African corridor is dominated by bidirectional agri-flow. We are tracking significant arbitrage opportunities between Thai processing demand for pigeon peas and East African production cycles. Despite Red Sea logistics volatility, the direct Durban-Mombasa-Laem Chabang routes remain cost-competitive for bulk grain and legume sourcing.',
    trend: 'up'
  },
];

export const TRADE_FAQS: FAQItem[] = [
  {
    question: "How does AfricanThaiTrade verify manufacturer reliability in Thailand?",
    answer: "Our vetting framework involves a 5-tier audit: 1. Financial health verification (3-year P&L audit). 2. Technical capacity assessment (factory floor inspection). 3. Export history verification (Customs data analysis). 4. Compliance certification audit (ISO, Halal, BRCGS). 5. ESG scoring. This ensures institutional partners only match with manufacturers capable of sustaining long-term, high-volume supply contracts."
  },
  {
    question: "What are the specific advantages of Thai-origin parboiled rice for Africa?",
    answer: "Thai parboiled rice is processed using hydrothermal treatment that gelatinizes the starch within the grain, resulting in superior hardness and reduced breakage. For African markets, this translates to longer shelf life in tropical humidity, better volume expansion after cooking, and higher nutritional retention compared to white rice. We match buyers with millers specializing in 5% broken parboiled grades specifically for SADC and ECOWAS standards."
  },
  {
    question: "How do you mitigate logistics risks for landlocked African markets?",
    answer: "For landlocked destinations like Zimbabwe, Zambia, and Ethiopia, we coordinate multimodal rail-bridge and bonded trucking solutions. We prioritize the 'Blue Corridor' routes, utilizing Beira (Mozambique) for SADC inland and Djibouti for Ethiopia, managing the documentation governance (Transit T1/T2) to prevent port-side demurrage."
  },
  {
    question: "Is Halal certification standard for all Thai processed food exports?",
    answer: "Yes, Thailand is a global leader in Halal food exports. The Central Islamic Council of Thailand (CICOT) provides certifications that are internationally recognized across North and West African markets. Our vetting process ensures that Halal certificates are current and valid for the specific HS codes being traded."
  }
];

const GENERAL_BUYER_ARCHETYPES: BuyerArchetype[] = [
  {
    title: "Institutional Food Security Desk",
    description: "National procurement agencies and large-scale NGOs in Nigeria, Ethiopia, and Egypt requiring certified staples.",
    requirements: ["Performance Bonds", "ISO 22000 Compliance", "36-Month Supply History", "Batch-level Traceability"],
    volumeTarget: "25,000+ MT per Annum"
  },
  {
    title: "Regional Logistics Hub Aggregator",
    description: "Tier-1 distributors with port-side warehousing and existing inland distribution fleets in Durban, Mombasa, or Abidjan.",
    requirements: ["Transit Insurance", "Private Label OEM Capacity", "Credit Facilities", "Multi-modal Clearance"],
    volumeTarget: "2,000 - 10,000 MT Monthly"
  },
  {
    title: "Industrial Manufacturing Converter",
    description: "Regional factories in Kenya or South Africa importing Thai intermediate goods (polymers, starches, components) for final assembly.",
    requirements: ["JIT Logistics", "Technical Fitment Guarantee", "Raw Material Chemical Analysis", "REACH Compliance"],
    volumeTarget: "Regular Container-level (FCL) Feed"
  },
  {
    title: "Modern Trade FMCG Partner",
    description: "Urban supermarket chains and retail groups in Lagos, Nairobi, and Luanda seeking premium Thai beverage and noodle brands.",
    requirements: ["NAFDAC/PVOC Readiness", "Halal Certification", "EAN Barcoding", "Ready-to-Shelf Packaging"],
    volumeTarget: "Monthly Consolidations"
  }
];

export const PRODUCT_CATEGORIES: CategoryData[] = [
  {
    id: 'grains',
    title: 'Grains & Rice Security',
    icon: Wheat,
    topItems: [
      {
        name: 'Institutional Grade Parboiled Rice',
        hsCode: '1006.30',
        context: "Thai parboiled rice is the global benchmark for institutional food security in Africa. We match government procurement desks and large-scale aggregators with millers verified for 2024-2025 production capacity.\n\n• Technical Edge: Zero-waste hydrothermal processing ensures grain hardness and nutritional density.\n• Logistics Logic: Primary corridors include Durban (SADC) and Port Harcourt (ECOWAS). We manage the pre-shipment inspection (SGS/BV) to ensure weight and grade compliance.",
        marketLogic2025: "Shift toward 'Fortified' grains to meet new West African dietary standards and the rise of local brown-rice milling initiatives under AfCFTA.",
        pros: ["Hydro-thermal stability (low breakage)", "High volume expansion", "Verified Halal & ISO 22000"],
        cons: ["Sea-freight rate volatility", "Port congestion in West Africa"],
        archetypes: [GENERAL_BUYER_ARCHETYPES[0], GENERAL_BUYER_ARCHETYPES[1]]
      }
    ]
  },
  {
    id: 'food',
    title: 'Value-Added F&B',
    icon: Utensils,
    topItems: [
      {
        name: 'Shelf-Stable Marine Proteins',
        hsCode: '1604.14',
        context: "Thailand is the world's most efficient processor of tuna and mackerel. This sub-category is critical for African markets with inconsistent cold-chains.\n\n• Processing: High-pressure retort sterilization ensures 36-month ambient shelf life.\n• Matching: We identify Thai canneries that offer private-label customization for regional African brands.\n• Compliance: Every batch is audited for histamine levels and metal-detection standards.",
        marketLogic2025: "Hyper-growth in Egyptian and DR Congo retail sectors for affordable, high-protein canned staples due to poultry price inflation.",
        pros: ["No refrigeration needed", "Global standard Halal certification", "High margin-to-weight ratio"],
        cons: ["Tinplate raw material volatility"],
        archetypes: [GENERAL_BUYER_ARCHETYPES[1], GENERAL_BUYER_ARCHETYPES[3]]
      }
    ]
  },
  {
    id: 'beverages',
    title: 'Functional Beverages',
    icon: Droplets,
    topItems: [
      {
        name: 'Aseptic Energy & Functional Juices',
        hsCode: '2202.99',
        context: "Thailand is the formulation hub for functional F&B. Includes Energy Drinks, 100% Coconut Water, and Isotonic solutions.\n\n• Processing: Aseptic cold-filling and UHT treatment preserve nutrient profiles without preservatives.\n• Shelf Life: 12-18 months ambient; critical for tropical distribution.\n• Halal: 100% compliant with CICOT standards for OIC markets in Africa.",
        marketLogic2025: "Massive demand in Nigerian and Kenyan urban youth segments for affordable energy formulations and health-conscious hydration.",
        pros: ["Aseptic shelf stability", "Proprietary formulation IP", "Durable PET/Can packaging"],
        cons: ["Freight weight-to-value sensitivity"],
        archetypes: [GENERAL_BUYER_ARCHETYPES[3]]
      }
    ]
  },
  {
    id: 'ready_meals',
    title: 'Ready Meals & Noodles',
    icon: Boxes,
    topItems: [
      {
        name: 'Instant Rice Vermicelli & Meals',
        hsCode: '1902.30',
        context: "High-velocity carbohydrates featuring authentic Thai flavor technology. Includes fried/air-dried rice and wheat noodles.\n\n• Processing: Advanced air-drying technology results in non-fried, lower-fat options for urban health trends.\n• Storage: Lightweight flexible packaging minimizes maritime freight costs per kcal.\n• Use Case: Rapid-prep household meals in Lagos and Accra.",
        marketLogic2025: "Urbanization in ECOWAS is driving a shift toward rapid-prep household carbohydrates. Thai rice noodles offer a premium gluten-free niche.",
        pros: ["Logistics efficiency", "High inventory turnover", "Culturally adaptable flavors"],
        cons: ["Requires high-volume FCL to be viable"],
        archetypes: [GENERAL_BUYER_ARCHETYPES[3], GENERAL_BUYER_ARCHETYPES[1]]
      }
    ]
  },
  {
    id: 'condiments',
    title: 'Sauces & Flavor Bases',
    icon: FlaskConical,
    topItems: [
      {
        name: 'Industrial Flavor Bases & Sauces',
        hsCode: '2103.90',
        context: "Concentrated flavor solutions for retail and industrial sectors. Includes Sriracha, Curry Pastes, and industrial-grade seasoning powders.\n\n• Advantage: High margin-to-weight ratio for long-distance corridor trade.\n• Formats: Retail glass/PET bottles to 1,000L industrial IBC tanks for local African food producers.",
        marketLogic2025: "Growth in African HORECA (Jo'burg, Nairobi) is creating demand for authentic, large-format flavor bases for 'fusion' cuisines.",
        pros: ["High value-to-weight ratio", "Unique flavor monopoly", "Natural fermentation stability"],
        cons: ["Glass packaging breakage risks"],
        archetypes: [GENERAL_BUYER_ARCHETYPES[2]]
      }
    ]
  },
  {
    id: 'textiles',
    title: 'Technical Textiles',
    icon: Shirt,
    topItems: [
      {
        name: 'OEM Technical Sportswear',
        hsCode: '6112.11',
        context: "Leveraging Thailand's role as the OEM base for top global activewear brands. We facilitate direct matching for African retail chains and sports federations.\n\n• Fabric Tech: Moisture-wicking polyester blends, anti-microbial treatments, and UV protection.\n• Vetting: Our audit includes fabric tension testing and color-fastness verification.\n• Strategic Use: National team kits and premium activewear for urban fitness centers in Lagos and Nairobi.",
        marketLogic2025: "Explosive growth in the 'Athleisure' segment across the African urban middle class, moving away from low-quality secondhand imports.",
        pros: ["Technical performance fabrics", "Low minimums for OEM", "Certified sustainable yarns (GRS)"],
        cons: ["Complex textile duty structures"],
        archetypes: [GENERAL_BUYER_ARCHETYPES[3]]
      }
    ]
  },
  {
    id: 'agro_inputs',
    title: 'Agro-Inputs & Tech',
    icon: Sprout,
    topItems: [
      {
        name: 'Advanced Fertilizers',
        hsCode: '3105.20',
        context: "Thai fertilizers specialize in high-solubility NPK and slow-release urea for tropical soils in Ethiopia and Nigeria.\n\n• Compliance: Aligning Thai technical specs with African National Agriculture Ministry guidelines.",
        marketLogic2025: "Shift toward foliar fertilizers to mitigate soil degradation across Sub-Saharan Africa.",
        pros: ["Tropicalized nutrient ratios", "ISO-standard analysis"],
        cons: ["Registration lead times"],
        archetypes: [GENERAL_BUYER_ARCHETYPES[0], GENERAL_BUYER_ARCHETYPES[1]]
      }
    ]
  },
  {
    id: 'auto',
    title: 'Automotive Spares',
    icon: Car,
    topItems: [
      {
        name: 'Tier-2 Suspension & Rubber',
        hsCode: '8708.99',
        context: "Thailand is the 'Detroit of the East' for 1-tonne pickups (Hilux, D-Max, Triton). We match African aftermarket hubs with Tier-2 factories producing OEM-standard components.\n\n• Durability: Components are specifically engineered for tropical heat and rough-road endurance.\n• Matching Logic: Identifying distributors in mining and security fleet sectors requiring fitment accuracy and bulk depth.",
        marketLogic2025: "Rising maintenance demand for pickup fleets in the SADC mining belt (Zambia, DRC, South Africa).",
        pros: ["Tropicalized rubber chemistry", "Fitment accuracy", "Industrial volume depth"],
        cons: ["Technical LOA requirements for specific markets"],
        archetypes: [GENERAL_BUYER_ARCHETYPES[1], GENERAL_BUYER_ARCHETYPES[2]]
      }
    ]
  },
  {
    id: 'beauty',
    title: 'Beauty & Skincare',
    icon: Sparkles,
    topItems: [
      {
        name: 'Thai Natural & Organic Cosmetics',
        hsCode: '3304.99',
        context: "High-tier Thai spa and beauty products utilizing indigenous herbal extracts (Turmeric, Rice Milk, Tamarind).\n\n• Processing: GMP-certified clean-room manufacturing; formulation stability for warm climates.\n• Use Case: Premium retail hubs in Cairo, Casablanca, and Johannesburg.\n• Halal: Alcohol-free formulations verified for North African market access.",
        marketLogic2025: "Middle-class African consumers are pivotting toward 'Natural' and 'Plant-Based' skincare, where Thai producers hold a significant IP advantage.",
        pros: ["High branding aesthetic", "Climatically stable formulas", "Strong herbal IP"],
        cons: ["Complex cosmetic registration regs"],
        archetypes: [GENERAL_BUYER_ARCHETYPES[3]]
      }
    ]
  },
  {
    id: 'construction',
    title: 'Building Materials',
    icon: Construction,
    topItems: [
      {
        name: 'Prefab Steel & Bonded Mortars',
        hsCode: '7308.90',
        context: "High-durability construction inputs for rapid infrastructure development. Includes Thai prefab steel structures and high-bond cement additives.\n\n• Logic: Matching Thai Tier-1 material suppliers with African national housing projects.\n• Durability: Engineered for coastal corrosion resistance (Salinity) and high thermal loads.",
        marketLogic2025: "Infrastructure booms in Egypt and Kenya are seeking reliable Tier-1 material sourcing that bypasses low-quality generic imports.",
        pros: ["Coastal corrosion resistance", "OEM technical support", "High weight-bearing certs"],
        cons: ["High maritime logistics weight"],
        archetypes: [GENERAL_BUYER_ARCHETYPES[2], GENERAL_BUYER_ARCHETYPES[0]]
      }
    ]
  },
  {
    id: 'medical',
    title: 'Medical Consumables',
    icon: Activity,
    topItems: [
      {
        name: 'Gloves & Healthcare PPE',
        hsCode: '4015.11',
        context: "Thailand is the world's leading producer of natural rubber and nitrile gloves. We facilitate institutional supply for African healthcare ministries.\n\n• Quality: ISO 13485 and CE-certified manufacturing for surgical and exam grades.\n• Supply Resilience: Thai production clusters ensure stability when global demand spikes.",
        marketLogic2025: "Post-2020 healthcare investment in Africa (Nigeria, South Africa) is focusing on securing direct-from-source PPE contracts.",
        pros: ["Global #1 supply stability", "Highest medical grade certs", "Direct cluster matching"],
        cons: ["Latex protein allergy sensitivities"],
        archetypes: [GENERAL_BUYER_ARCHETYPES[0], GENERAL_BUYER_ARCHETYPES[2]]
      }
    ]
  }
];

export const STRATEGY_STEPS = [
  {
    title: "1. Requisition & Spec Vetting",
    desc: "We analyze technical SKUs, volume mandates, and target African landing ports to establish a feasibility baseline for Thai supply matching."
  },
  {
    title: "2. Deep-Audit Matching",
    desc: "Utilizing our private vetting portfolio, we identify manufacturers that pass our 5-tier audit for financial health, technical capacity, and export reliability."
  },
  {
    title: "3. Governance & Structuring",
    desc: "Coordinating deal structures, arranging SBLC/LC trade finance protocols, and aligning documentation with regional compliance bodies (SONCAP, PVOC)."
  },
  {
    title: "4. Execution & Corridor Oversight",
    desc: "End-to-end management of the multimodal logistics corridor, from Thai factory release to destination port clearance and final delivery."
  }
];

export const UNIQUE_THAI_PRODUCTS: StrategyProduct[] = [
  { name: "High-Solubility NPK Foliars", target: "African Cocoa & Rice Clusters", note: "Concentrated Bio-Stimulants", details: [], images: [] },
  { name: "Solar-Integrated DC Pumps", target: "Off-Grid Smallholder Farming", note: "Resilient Agri-Tech", details: [], images: [] },
  { name: "Industrial Polypropylene Resins", target: "FMCG Packaging Converters", note: "Circular Economy Focus", details: [], images: [] }
];

export const LOGISTICS_ROUTES: LogisticRoute[] = [
    {
        id: "durban",
        name: "LCH (Thailand) → Durban (SADC Hub)",
        transitTime: "22 - 28 Days",
        carriers: ["One-Stop Global Alliances"],
        keyInsight: "Durban is the gatekeeper for Southern African trade. We coordinate the 'Blue Line' rail-bridge for efficient landlocked transit to Botswana and Zimbabwe.",
        painPoints: ["Port berth congestion", "Regional border post delays"],
        costEstimate: "2025 Dynamic Benchmarks"
    },
    {
        id: "lagos",
        name: "LCH (Thailand) → Lagos/Tema (ECOWAS Hub)",
        transitTime: "35 - 45 Days",
        carriers: ["Direct Feed Transshipment"],
        keyInsight: "West African corridors require rigorous pre-shipment documentation governance to avoid excessive demurrage. Direct transshipment via Singapore/Salalah is standard.",
        painPoints: ["Customs valuation volatility", "Inland trucking security"],
        costEstimate: "2025 Dynamic Benchmarks"
    }
];

export const REGULATORY_DATA: Regulation[] = [
    {
        country: "Regional Trade Blocs",
        name: "Pre-Export Verification (PVoC/SONCAP)",
        description: "Coordination of mandatory quality certificates for Kenya, Uganda, Tanzania, and Nigeria. We manage the interface between Thai exporters and inspection agencies.",
        criticalAction: "AfricanThaiTrade Nexus provides the 'Neutral Verification Letter' for institutional partners to expedite local clearance."
    },
    {
        country: "AfCFTA Compliance",
        name: "Rules of Origin Strategy",
        description: "Navigating value-added thresholds for products containing Thai raw materials but undergoing final processing in Africa.",
        criticalAction: "We ensure documentation alignment between Thai suppliers and African local content zones."
    }
];

export const SUMMARY_IMAGES: ImageRef[] = [
    { url: "https://placehold.co/800x600/2A6F97/FFFFFF?text=Trade+Corridor+Map", credit: "AfricanThaiTrade Nexus 2025", alt: "Strategic Trade Corridor Mapping" },
    { url: "https://placehold.co/800x600/2F5233/FFFFFF?text=Vetting+Workflow+Infographic", credit: "AfricanThaiTrade Nexus 2025", alt: "Supplier Vetting Lifecycle" },
    { url: "https://placehold.co/800x600/D4A017/1A1A1A?text=Port-to-Inland+Logistics", credit: "AfricanThaiTrade Nexus 2025", alt: "Logistics Hub Management" }
];

export const PIGEON_PEA_IMAGES: ImageRef[] = [
    { url: "https://images.unsplash.com/photo-1599590984817-0fc198766904?q=80&w=800", credit: "Unsplash / S. Varma (License: Free)", alt: "Pigeon Pea Sourcing Africa" },
    { url: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800", credit: "Unsplash / CHUTTERSNAP (License: Free)", alt: "Supplier Vetting Framework" }
];

export const PIGEON_PEA_INTEL: IntelTab[] = [
  {
    id: 'market_context',
    label: 'I. Market Context',
    icon: LineChart,
    sections: [
      {
        title: "Executive Summary",
        content: "Thailand’s protein landscape is undergoing a structural shift toward legume diversification. The current import relevance is anchored in bridging domestic shortages and supporting the high-growth 'Plant-Based' processed food sector. Malawi and Mozambique represent the primary counter-cyclical sourcing nodes."
      },
      {
        title: "Historical Imports",
        content: "Historically, Thailand has been a passive participant in the Global Pigeon Pea corridor, with trade volumes fluctuating based on Indian domestic harvest results. Recent trends (2022-2024) indicate an increasing appetite for non-GMO African origins to satisfy the 'Clean Label' requirements of Thai F&B exporters."
      },
      {
        title: "Current Baseline",
        content: "Baseline pricing for African origin (FOB Beira/Nacala) remains competitive against domestic Thai soy and pulse alternatives. Current sourcing patterns are characterized by spot-market transactions, though a shift toward long-term offtake is emerging among Tier-1 Thai processors."
      }
    ]
  },
  {
    id: 'future_potential',
    label: 'II. Future Potential',
    icon: Telescope,
    sections: [
      {
        title: "Niche Processing & Value-Added Products",
        content: "Thailand’s advanced milling and extrusion capabilities allow for the conversion of raw African peas into high-value protein isolates and textured vegetable proteins (TVP). These products are positioned for re-export to high-premium European and North American markets."
      },
      {
        title: "Specialty & Health Food Applications",
        content: "Incorporation of pigeon pea flour into traditional Thai starch-based snacks (e.g., rice crackers) to enhance fiber and protein density. This meets the 'Functional Snack' global trend."
      },
      {
        title: "Feed and Industrial Experiments",
        content: "Ongoing R&D at Thai universities is evaluating pigeon pea husk and meal as a sustainable alternative in aquaculture and swine feed, targeting a reduction in dependence on imported corn and soy meal."
      },
      {
        title: "Full-Scale Commodity Import Scenarios",
        content: "Modeling for 2026-2030 suggests that if Thailand implements a centralized Legume Strategic Reserve, African pigeon peas would constitute up to 15% of the total bulk protein import mix."
      }
    ]
  },
  {
    id: 'execution_roadmap',
    label: 'III. Execution Roadmap',
    icon: Navigation,
    sections: [
      {
        title: "Growth Drivers",
        content: "Driven by the 'Thailand: Kitchen of the World' policy, there is significant institutional support for raw material diversification. Consumer demand for non-soy protein alternatives is the primary commercial catalyst."
      },
      {
        title: "Practical Import & Market Entry Roadmap",
        content: "1. DOA (Department of Agriculture) permit verification. 2. Quarantine protocol alignment with African origins. 3. Direct matching with Thai milling clusters to avoid layer-heavy brokerage. 4. Multimodal logistics governance via Durban/Singapore transshipment."
      },
      {
        title: "Risks, Constraints & Mitigation Strategies",
        content: "Primary constraints: Red Sea logistics volatility and fragmented smallholder aggregation in Africa. Mitigation: Utilizing Beira/Nacala for direct Southern Route shipping and implementing digital traceability for batch-level quality control."
      },
      {
        title: "Actionable Next Steps",
        content: "Traders should prioritize securing warehouse capacity at origin during the August-October harvest window. Policymakers are encouraged to finalize G2G phytosanitary agreements to eliminate entry-point delays."
      }
    ]
  }
];

export const THAI_EXPORTERS: any[] = [];
export const LOGISTICS_PARTNERS: any[] = [];
export const THAI_BUYERS_DIRECTORY: any[] = [];

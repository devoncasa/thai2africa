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
  Map,
  Ship,
  ShieldCheck,
  Building,
  Anchor,
  Box
} from "lucide-react";
import { CategoryData, SectionType, NavItem, TradeStat, BuyerProfile, StrategyProduct, ImageRef, IntelTab, LogisticRoute, Regulation, DirectoryCompany } from "./types";

export const NAV_ITEMS: NavItem[] = [
  { id: SectionType.HOME, label: 'Home', icon: Home },
  { id: SectionType.SUMMARY, label: 'Market Intel', icon: FileText },
  { id: SectionType.MATRIX, label: 'Product Matrix', icon: Grid3X3 },
  { id: SectionType.PIGEON_PEA, label: 'Commodity Spotlight', icon: Bean },
  { id: SectionType.STRATEGY, label: 'Strategy Tools', icon: TrendingUp },
  { id: SectionType.LOGISTICS, label: 'Logistics & Regs', icon: Ship },
  { id: SectionType.DIRECTORY, label: 'Directory', icon: BookOpen },
];

export const TRADE_STATS_DATA: TradeStat[] = [
  { 
    name: 'Thai Exports to SA', 
    value: 5410, 
    label: 'ZAR 5.41 Bn', 
    subtext: 'Sept 2025 (Monthly)',
    insight: 'South Africa remains the industrial gateway. Trade surplus is heavily anchored by the automotive sector (Toyota/Isuzu inter-factory supply) and rice. The 2025 surge reflects "Thai-Spec" auto parts restocking.',
    trend: 'up'
  },
  { 
    name: 'Thai Exports to Nigeria', 
    value: 198, 
    label: 'USD ~198 M', 
    subtext: 'Projected 2025',
    insight: 'Driven by the "Hungry Giant" dynamic. Food inflation (39.5%) has forced waivers on brown rice duties. Thailand is pivoting from finished goods to supplying raw materials for Nigerian millers.',
    trend: 'stable'
  },
  { 
    name: 'Malawi Export Potential', 
    value: 31.6, 
    label: 'USD 31.6 M', 
    subtext: 'Pigeon Pea Global Value',
    insight: 'The "Reverse Trade" card. Thailand’s feed mills (Betagro/CP) are seeking alternatives to expensive soy. Malawi Pigeon Peas offer a strategic protein substitute, balancing the bilateral trade deficit.',
    trend: 'up'
  },
];

export const SUMMARY_IMAGES: ImageRef[] = [
    { url: "https://placehold.co/800x600/2A6F97/FFFFFF?text=Laem+Chabang+Port+Operations", credit: "Port Authority of Thailand", alt: "Laem Chabang Port" },
    { url: "https://placehold.co/800x600/2F5233/FFFFFF?text=South+African+Retail+Shelf", credit: "Market Research 2025", alt: "Retail Shelves SA" },
    { url: "https://placehold.co/800x600/D4A017/1A1A1A?text=Thai+Auto+Manufacturing", credit: "Industrial Estate Authority", alt: "Thai Auto Assembly" }
];

export const LOGISTICS_ROUTES: LogisticRoute[] = [
    {
        id: "durban",
        name: "Thailand (LCH) → South Africa (Durban)",
        transitTime: "21 - 25 Days",
        carriers: ["ONE", "Maersk", "MSC"],
        keyInsight: "Most reliable route. Durban serves as the transshipment hub for the SADC region (Botswana, Lesotho, Eswatini).",
        painPoints: ["Wind delays in Durban port", "Strict SABS inspections upon arrival"],
        costEstimate: "$2,200 - $2,500 (20ft)"
    },
    {
        id: "apapa",
        name: "Thailand (LCH) → Nigeria (Apapa/Lagos)",
        transitTime: "35 - 45 Days",
        carriers: ["CMA CGM", "Maersk"],
        keyInsight: "Direct access to the largest consumer market. Essential to negotiate 21 Free Days at destination.",
        painPoints: ["Legendary port congestion", "High demurrage risk", "Complex customs clearing"],
        costEstimate: "$3,800 - $4,200 (20ft)"
    },
    {
        id: "mombasa",
        name: "Thailand (LCH) → Kenya (Mombasa)",
        transitTime: "18 - 22 Days",
        carriers: ["Evergreen", "PIL"],
        keyInsight: "Gateway to East Africa (Uganda, S. Sudan). Efficient railway (SGR) connection to Nairobi.",
        painPoints: ["PVOC Compliance checks", "SGR Railway Development Levy (2%)"],
        costEstimate: "$2,600 - $3,000 (20ft)"
    }
];

export const REGULATORY_DATA: Regulation[] = [
    {
        country: "Nigeria",
        name: "Form M & SONCAP",
        description: "Mandatory initial import document (Form M) and Standards Organization of Nigeria Conformity Assessment Program (SONCAP).",
        criticalAction: "Must obtain Product Certificate (PC) in Thailand via SGS/Intertek before shipping. Failure = Seizure."
    },
    {
        country: "Kenya",
        name: "PVOC (Pre-Export Verification)",
        description: "Goods must be inspected in Thailand to receive a Certificate of Conformity (CoC).",
        criticalAction: "Without CoC, goods face a 15% penalty bond and indefinite testing delays at Mombasa."
    },
    {
        country: "South Africa",
        name: "SABS & LOA",
        description: "South African Bureau of Standards Letter of Authority. Critical for electrical and auto parts.",
        criticalAction: "LOA issuance can take 3-6 months. Do not ship regulated goods without a valid LOA in hand."
    },
    {
        country: "Malawi",
        name: "Pre-Shipment Inspection",
        description: "Mandatory inspection for specific goods to ensure value accuracy for taxation.",
        criticalAction: "Ensure invoice value matches the inspected value to avoid customs uplift penalties."
    }
];

export const PIGEON_PEA_IMAGES: ImageRef[] = [
    { url: "https://placehold.co/800x600/2F5233/FFFFFF?text=Malawi+Pigeon+Pea+Harvest", credit: "Agri-Malawi 2024", alt: "Harvest" },
    { url: "https://placehold.co/800x600/D4A017/1A1A1A?text=Thai+Feed+Mill+Processing", credit: "Feed Industry Assoc", alt: "Processing" },
    { url: "https://placehold.co/800x600/E85D04/FFFFFF?text=Split+Toor+Dhal+Processing", credit: "Thai Food Processors", alt: "Dhal Splitting" },
    { url: "https://placehold.co/800x600/1A1A1A/FFFFFF?text=Port+of+Beira+Loading", credit: "Logistics Weekly", alt: "Export Logistics" }
];

export const PIGEON_PEA_INTEL: IntelTab[] = [
  {
    id: 'context',
    label: '1. Market Context',
    icon: History,
    sections: [
      {
        title: "Summary: The Strategic Pivot",
        content: "Thailand is evolving from a passive observer to a niche player in the pigeon pea trade. Historically reliant on Mung beans (for vermicelli) and Soy (for feed), Thai processors are now hedging against global volatility. The market is defined by two distinct flows: low-grade imports for animal feed arbitrage and high-grade imports for value-added re-export."
      },
      {
        title: "Historical Imports",
        content: "Direct trade has been negligible, with Thailand historically sourcing pulses via re-exports from India or Myanmar. Previous volumes were sporadic, often aggregated under general 'Dried Legumes' HS codes, masking specific pigeon pea data."
      },
      {
        title: "Current Baseline (2025)",
        content: "Imports remain below 5,000 MT annually but are showing an upward trend. Key activity is driven by feed mills (Betagro/CP) running nutritional trials to test pigeon peas as a soy-substitute when soy meal prices exceed $550/MT."
      }
    ]
  },
  {
    id: 'potential',
    label: '2. Future Potential',
    icon: Telescope,
    sections: [
      {
        title: "Niche Processing (Value-Add Dhal)",
        content: "Thai factories possess excess capacity in de-hulling and splitting. The arbitrage play involves importing raw whole peas from Malawi (~$500/MT CIF), processing them into 'Toor Dhal' splits, and re-exporting to the Indian diaspora in Malaysia and Singapore at ~$800/MT."
      },
      {
        title: "Specialty & Health Food",
        content: "The 'Future Food' sector (e.g., Meat Avatar) is actively seeking non-soy, non-GMO proteins. Pigeon pea protein isolate is a strong candidate for allergen-free plant-based meat, though this remains an R&D niche."
      },
      {
        title: "Feed Experiments (The Volume Play)",
        content: "This is the 'Holy Grail'. If Malawian pigeon peas can land in Bangkok below $400/MT, they become a viable caloric and protein substitute for poultry feed, unlocking demand for tens of thousands of tonnes."
      },
      {
        title: "Commodity Import",
        content: "General trading for domestic wet markets (sprouts/fresh consumption) is minimal. The opportunity is strictly industrial."
      }
    ]
  },
  {
    id: 'roadmap',
    label: '3. Execution Roadmap',
    icon: Map,
    sections: [
      {
        title: "Growth Drivers",
        content: "1. Indian Export Bans: Creates global shortages, forcing buyers to look to Africa.\n2. Thai Baht Strength: Increases purchasing power against the Malawian Kwacha.\n3. Soy Volatility: High soy prices force feed mills to diversify."
      },
      {
        title: "Practical Roadmap",
        content: "Phase 1: Send 'Trial Containers' (20ft) of FAQ grade to feed mills for nutritional profiling.\nPhase 2: Secure 'Sortex' grade supply for human consumption processing via contract farming in Lilongwe."
      },
      {
        title: "Risks & Mitigations",
        content: "Risk: Weevil Infestation (45-day transit). \nMitigation: Mandatory Phostoxin fumigation in Beira port.\n\nRisk: Aflatoxin. \nMitigation: Pre-shipment SGS inspection is non-negotiable."
      },
      {
        title: "Next Steps",
        content: "Engage procurement heads at Nanapan Agri-Industrial and Betagro immediately. Provide 1kg samples for lab analysis."
      }
    ]
  }
];

// --- PRODUCT CATEGORIES (MATRIX) ---
export const PRODUCT_CATEGORIES: CategoryData[] = [
  {
    id: 'rice',
    title: 'Rice & Grains',
    icon: Wheat,
    topItems: [
      {
        name: 'Rice (HS 1006): Parboiled & White',
        context: "The Geopolitics of Rice: India's export bans have created a 10M tonne vacuum, positioning Thailand as the critical swing producer.\n\nStrategy by Region:\n• South Africa (Parboiled): A volume game. Thai parboiled is the benchmark for its 'Zero Waste' durability. The market rewards brand consistency (Tastic model).\n• Malawi (Lean Season): From Dec-Mar, import duties are often waived. The play here is 5-25% Broken White Rice shipped via Beira (Mozambique) to plug the food security gap.\n• Nigeria (Brown Rice): 2025 waivers target millers. Ship Brown Rice for local processing.",
        statHighlight: '75% SA Market Share',
        priceSignal: 'Global Price Volatility',
        pros: [
          "South Africa: Zero/Low Duty (Staple Food).",
          "Parboiled Quality: Superior grain hardness vs. Indian origin.",
          "Malawi: Counter-cyclical demand during 'Lean Season'."
        ],
        cons: [
          "Malawi: Landlocked logistics (Beira Corridor costs).",
          "Exchange Rate: ZAR/MWK volatility impacts buying power.",
          "Competition: Vietnam undercutting on White Rice price."
        ],
        targetBuyers: [
          { name: 'Africa Sun Oil', country: 'South Africa', type: 'Manufacturer', note: 'Imports bulk rice for local packaging/distribution.', isPriority: true },
          { name: 'Shoprite Checkers', country: 'South Africa', type: 'Retail Chain', note: 'Sources house-brand parboiled rice. strict compliance.', isPriority: true },
          { name: 'Stallion Group', country: 'Nigeria', type: 'Miller / Importer', note: 'Largest rice player. Needs bulk brown rice.', isPriority: true },
          { name: 'Costantini & Co', country: 'Malawi', type: 'Trader', note: 'Major commodity trader in Lilongwe.', isPriority: false },
          { name: 'Export Trading Group (ETG)', country: 'Regional', type: 'Agro-Conglomerate', note: 'Dominant player in East/Southern Africa.', isPriority: false }
        ],
        images: [
            { url: "https://placehold.co/800x600/F7EED3/1A1A1A?text=Thai+Parboiled+Rice+Sacks", credit: "Export Assoc.", alt: "Parboiled Rice" },
            { url: "https://placehold.co/800x600/2A6F97/FFFFFF?text=Rice+Loading+Laem+Chabang", credit: "Port Authority", alt: "Loading" }
        ]
      }
    ]
  },
  {
    id: 'auto',
    title: 'Automotive Parts (HS 8708)',
    icon: Car,
    topItems: [
      {
        name: 'Aftermarket (REM) & OEM Parts',
        context: "The 'Right to Repair' Revolution: South Africa's new guidelines allow independent workshops to service in-warranty cars, exploding demand for non-OEM parts.\n\nThailand's Structural Advantage:\n• The 'Detroit of Asia': Thailand builds the Toyota Hilux and Ford Ranger found in Africa. Thai parts are geometrically identical to OEM.\n• Malawi 'Rough Road' Spec: The grey import fleet (Used Toyotas) demands 'Heavy Duty' suspension (HS 8708.80) to survive rural roads. Standard parts fail; 'Tropicalized' Thai parts command a premium.",
        statHighlight: '$3.28 Bn Aftermarket (SA)',
        priceSignal: 'High Margin (20-40%)',
        pros: [
          "Fitment Guarantee: Thai parts fit perfectly (same tooling).",
          "Right to Repair: SA law boosts independent importers.",
          "Malawi Niche: Demand for 'Service Kits' (Filter+Spark Plug bundles)."
        ],
        cons: [
          "SABS LOA: South Africa requires 3-6 month approval for safety parts.",
          "Chinese Competition: Haval/Chery entry threatens long-term.",
          "Malawi Forex: Scarcity limits luxury accessory imports."
        ],
        targetBuyers: [
          { name: 'Motus Aftermarket', country: 'South Africa', type: 'Distributor', note: 'Dominant player (Midas/Alert). High volume, strict SABS.', isPriority: true },
          { name: 'AutoZone SA', country: 'South Africa', type: 'Retail Chain', note: '200+ stores. Massive importer of consumables.', isPriority: true },
          { name: 'Grandmark International', country: 'South Africa', type: 'Distributor', note: 'Specialists in body panels and glass.', isPriority: true },
          { name: 'Toyota Malawi (CFAO)', country: 'Malawi', type: 'Official Dealer', note: 'Requires OEM certified parts.', isPriority: false },
          { name: 'Mike Appel & Gatto', country: 'Malawi', type: 'Workshop', note: 'Engine rebuilding specialists.', isPriority: false }
        ],
        images: [
            { url: "https://placehold.co/800x600/1A1A1A/FFFFFF?text=Suspension+Parts+Factory", credit: "Thai Summit", alt: "Suspension" },
            { url: "https://placehold.co/800x600/D4A017/1A1A1A?text=Hilux+Revo+Bumpers", credit: "Aeroklas", alt: "Body Parts" }
        ]
      }
    ]
  },
  {
    id: 'construction',
    title: 'Construction Materials',
    icon: Construction,
    topItems: [
      {
        name: 'Materials: Steel Coils & Finishing',
        context: "Malawi 'ATM' Strategy (Agri, Tourism, Mining): Mega-projects like the Mpatamanga Hydropower dam drive demand.\n\nKey Strategic Shift:\n• Don't Ship Sheets, Ship Coils: Malawi raised duties on finished roofing sheets (25%) to protect local roll-formers. The play is exporting Galvanized/Aluzinc Steel Coils (HS 7210) which attract lower 'Raw Material' duties.\n• South Africa 'Masstige': The renovation market demands 'Mass-Prestige' ceramics. Thai brands (Cotto) sit perfectly between cheap Chinese tiles and expensive Italian ones.",
        statHighlight: 'Urbanization & Mega-Projects',
        priceSignal: 'Volume Play',
        pros: [
          "Tariff Optimization: Coils vs Finished Sheets.",
          "Masstige Niche: Thai ceramics perceived as premium in SA.",
          "Project Supply: Direct sales to construction JVs."
        ],
        cons: [
          "Weight Penalties: Heavy logistics costs on inland routes.",
          "Malawi Duty: 25% on finished goods if misclassified.",
          "Local Cement: Protectionist barriers on bagged cement."
        ],
        targetBuyers: [
          { name: 'Sawa Group', country: 'Malawi', type: 'Construction', note: 'Imports own project materials. Direct buyer.', isPriority: true },
          { name: 'Builders Warehouse (Massmart)', country: 'South Africa', type: 'Retail Giant', note: 'Part of Walmart group. Huge volume.', isPriority: true },
          { name: 'Hardware & General', country: 'Malawi', type: 'Retailer', note: 'Major hardware supplier in Blantyre.', isPriority: false },
          { name: 'Cashbuild', country: 'South Africa', type: 'Retail Chain', note: 'Focus on low-cost housing materials.', isPriority: false }
        ],
        images: [
            { url: "https://placehold.co/800x600/2F5233/FFFFFF?text=Steel+Coils+Export", credit: "Industrial Estate", alt: "Steel Coils" },
            { url: "https://placehold.co/800x600/F2F2F2/1A1A1A?text=Ceramic+Tile+Export", credit: "COTTO", alt: "Tiles" }
        ]
      }
    ]
  },
  {
    id: 'textiles',
    title: 'Textiles & Apparel',
    icon: Shirt,
    topItems: [
      {
        name: 'Sportswear & Synthetic Performance Fabrics',
        context: "The 'Athleisure' & Performance Boom: South Africa's activewear market is projected to reach $1.4bn. Retailers are pivoting from pure cotton to technical synthetics (Polyester/Spandex blends, Micro-fiber).\n\nThailand's Strategic Edge:\n• Circular Economy: Thailand is a global hub for rPET (Recycled Polyester) production (e.g., Indorama Ventures). This aligns with the sustainability mandates of SA retailers like Woolworths and TFG.\n• Technical Knitting: Superior capability in moisture-wicking and UV-protective fabric construction compared to commodity Chinese mills.",
        statHighlight: 'Global rPET Hub',
        priceSignal: 'Performance Premium',
        pros: [
          "Sustainability: GRS Certified rPET appeals to premium buyers.",
          "Technical Specs: Superior wicking/antimicrobial properties.",
          "Consistency: High-grade dyeing and finishing standards."
        ],
        cons: [
          "Price: Higher than commodity Chinese polyester.",
          "Lead Time: Longer shipping than India/Mauritius.",
          "Minimums: High MOQs for custom technical knits."
        ],
        targetBuyers: [
          { name: 'Mr Price Sport', country: 'South Africa', type: 'Retail Chain', note: 'Value activewear giant. Sourcing technical synthetics.', isPriority: true },
          { name: 'The Foschini Group (TFG)', country: 'South Africa', type: 'Retail/Mfg', note: 'Owns Prestige Clothing. Seeks quick-response fabric supply.', isPriority: true },
          { name: 'Woolworths Holdings', country: 'South Africa', type: 'Premium Retail', note: 'Demands sustainable (rPET) and high-tech fabrics.', isPriority: true },
          { name: 'Mass Supply (Barron)', country: 'South Africa', type: 'Distributor', note: 'Corporate sportswear. Needs consistent stock fabrics.', isPriority: false },
          { name: 'Kingsgate Clothing', country: 'South Africa', type: 'Manufacturer', note: 'Large contract manufacturer for retail chains.', isPriority: false }
        ],
        images: [
            { url: "https://placehold.co/800x600/2A6F97/FFFFFF?text=Performance+Fabric+Rolls", credit: "Thai Polyester", alt: "Tech Fabric" },
            { url: "https://placehold.co/800x600/1A1A1A/FFFFFF?text=Activewear+Production", credit: "Garment Factory", alt: "Sportswear" }
        ]
      },
      {
        name: 'Technical Fabrics & School Uniforms',
        context: "Bifurcated Strategy:\n• Malawi (The School Uniform Imperative): Uniforms are mandatory. Demand is recession-proof. Thai mills should supply Tetoron Rayon (TR) and TC suitings (Khaki, Navy, Bottle Green) in bulk rolls for local stitching. Do not ship finished uniforms.\n• South Africa (Technical Textiles): The mining sector requires high-spec workwear (fire retardant, acid resistant). Local SA mills lack capacity for these technical specs. This bypasses the 45% apparel duty.",
        statHighlight: 'Recession-Proof Niche',
        priceSignal: 'Consistent Volume',
        pros: [
          "Mandatory Demand: School uniforms are essential goods.",
          "Duty Bypass: Technical fabrics enter as industrial inputs.",
          "Durability: Thai TR fabric outlasts cheap Chinese alternatives."
        ],
        cons: [
          "SA Protectionism: 45% duty on finished apparel.",
          "Price Sensitivity: Malawi market is extremely cash-constrained.",
          "Ethiopia Competition: Low-cost regional garment hubs."
        ],
        targetBuyers: [
          { name: 'Pepkor', country: 'South Africa', type: 'Retail Group', note: 'Massive volume value apparel (school uniforms).', isPriority: true },
          { name: 'Jonsson Workwear', country: 'South Africa', type: 'Brand', note: 'Leader in industrial workwear. Needs tech fabrics.', isPriority: true },
          { name: 'Mapeto (DWSM)', country: 'Malawi', type: 'Manufacturer', note: 'Local textile giant (David Whitehead).', isPriority: false }
        ],
        images: [
            { url: "https://placehold.co/800x600/2A6F97/FFFFFF?text=School+Uniform+Fabric+Rolls", credit: "Nan Yang", alt: "Fabrics" },
            { url: "https://placehold.co/800x600/1A1A1A/FFFFFF?text=Garment+Factory+BKK", credit: "Thai Polyester", alt: "Factory" }
        ]
      }
    ]
  }
];

export const STRATEGY_STEPS = [
  {
    title: "Days 1-30: Intelligence & Setup",
    desc: "Validate 3 specific SKUs. Do not sell 'Auto Parts'; sell 'Hilux Revo 2018 Front Bumper'. Contact 5 suppliers from the directory and Get FOB Laem Chabang pricing."
  },
  {
    title: "Days 31-60: The 'Digital Twin'",
    desc: "Create perception of scale. Cold call procurement managers at target companies (Motus, West End). Pitch: 'I can land it in Durban for 15% less than your current blended cost.'"
  },
  {
    title: "Days 61-90: The Pilot Transaction",
    desc: "Secure a Back-to-Back arrangement or L/C. Book freight (ensure 21 free days for Nigeria). Secure CoC/SONCAP to prevent customs seizure."
  },
  {
    title: "Ongoing: Risk Management",
    desc: "Monitor FX rates daily. Manage the 'Silent Killers' (Demurrage, Port Levies). Ensure strict document compliance (Form M, LOA)."
  }
];

export const UNIQUE_THAI_PRODUCTS: StrategyProduct[] = [
  { name: "Tapioca Starch (Industrial)", target: "Nigeria Textile/Glue", note: "Thailand is World #1 Exporter", details: [], images: [] },
  { name: "Fishing Gear (Nylon Nets)", target: "Lake Victoria Region", note: "Premium Thai Brands (Khon Kaen)", details: [], images: [] },
  { name: "Refurbished Kubota Tractors", target: "African Smallholders", note: "'Thai-Used' > 'Chinese-New'", details: [], images: [] },
  { name: "Rubber Bands & Gloves", target: "Agri-Packaging / Medical", note: "Natural Rubber Advantage", details: [], images: [] }
];

// --- DIRECTORIES ---
export const THAI_EXPORTERS: DirectoryCompany[] = [
    { name: "Capital Rice Co., Ltd.", category: "Rice/Agri", location: "Bangkok", description: "Heavyweight exporter, silo storage pioneer. Ideal for vessel loads." },
    { name: "Nanapan Agri-Industrial", category: "Agri-Processing", location: "Bangkok", description: "Verified importer of beans/pulses and exporter of snacks." },
    { name: "Thai Summit Group", category: "Auto Parts", location: "Samut Prakan", description: "Major OEM supplier for chassis and body parts." },
    { name: "Aeroklas", category: "Auto Accessories", location: "Rayong", description: "World leader in pickup bed liners and canopies." },
    { name: "Siam Cement Group (SCG)", category: "Construction", location: "Bangkok", description: "Industrial conglomerate. Cement, chemicals, packaging." },
    { name: "Shera Public Company", category: "Construction", location: "Bangkok", description: "Fiber cement composites leader." },
    { name: "Srithai Superware", category: "Lifestyle", location: "Bangkok", description: "World's largest melamine manufacturer." },
    { name: "Betagro", category: "Food/Feed", location: "Bangkok", description: "Integrated agro-industrial food company." }
];

export const LOGISTICS_PARTNERS: DirectoryCompany[] = [
    { name: "V.Pack & Move", category: "Freight Forwarder", location: "Bangkok", description: "Specialists in packing and export logistics." },
    { name: "Eagles Air & Sea", category: "Freight Forwarder", location: "Bangkok", description: "Global logistics provider." },
    { name: "SGS Thailand", category: "Inspection", location: "Bangkok", description: "Critical for SONCAP/PVOC certification." },
    { name: "Bureau Veritas", category: "Inspection", location: "Bangkok", description: "Global testing, inspection and certification." }
];

// Re-export this for the Spotlight section, combining relevant entries
export const THAI_BUYERS_DIRECTORY: BuyerProfile[] = [
    { name: "Nanapan Agri-Industrial", type: "Importer", focus: "Beans/Pulses", note: "Verified importer." },
    { name: "Betagro", type: "Feed Mill", focus: "Animal Feed", note: "Major buyer of protein sources." },
    { name: "Charoen Pokphand (CPF)", type: "Conglomerate", focus: "Feed/Food", note: "Global giant." },
    { name: "Heritage Snacks", type: "Processor", focus: "Nuts/Legumes", note: "Premium snack brands." },
    { name: "Gravity Intertrade", type: "Trader", focus: "Specialist", note: "Bean and pulse trader." }
];

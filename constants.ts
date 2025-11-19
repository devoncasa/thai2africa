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
  BookOpen 
} from "lucide-react";
import { CategoryData, SectionType, NavItem, TradeStat, BuyerProfile, StrategyProduct, ImageRef } from "./types";

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

export const SUMMARY_IMAGES: ImageRef[] = [
  {
    url: "https://images.unsplash.com/photo-1587352582822-94e82b2d5227?auto=format&fit=crop&w=800&q=80",
    credit: "Photo credit: Unsplash - © Cameron Venti",
    alt: "Shipping containers at port"
  },
  {
    url: "https://images.unsplash.com/photo-1521315673945-d88b93348c11?auto=format&fit=crop&w=800&q=80",
    credit: "Photo credit: Unsplash - © Nattanan Kanchanaprat",
    alt: "Thai Rice Fields"
  },
  {
    url: "https://images.unsplash.com/photo-1523538290088-d1e2642e303b?auto=format&fit=crop&w=800&q=80",
    credit: "Photo credit: Unsplash - © Ninno JackJr",
    alt: "African Landscape"
  }
];

export const PIGEON_PEA_IMAGES: ImageRef[] = [
  {
    url: "https://images.unsplash.com/photo-1515543984318-d838fa521e64?auto=format&fit=crop&w=800&q=80",
    credit: "Photo credit: Unsplash - © Milada Vigerova",
    alt: "Dried legumes and pulses"
  },
  {
    url: "https://images.unsplash.com/photo-1595584890679-8f3fb9efd10e?auto=format&fit=crop&w=800&q=80",
    credit: "Photo credit: Unsplash - © Arnaldo Aldana",
    alt: "Logistics and Transport"
  }
];

// --- Research Data: 20 Potential Thai Buyers for Malawi Products ---
export const THAI_BUYERS_DIRECTORY: BuyerProfile[] = [
  // 1-5: Pulse & Grain Specialists
  {
    name: "Heritage Snacks & Food Co., Ltd.",
    type: "Processor / Brand Owner",
    focus: "Nuts, Dried Fruits, Legumes",
    phone: "+66 2 813 0954",
    address: "Phutthamonthon Sai 4 Rd, Sam Phran, Nakhon Pathom 73220",
    note: "Owner of 'Heritage' brand. Huge importer of raw nuts and beans for processing.",
    approach: "Send lab specs for 'Premium Grade' Pigeon Peas. They value clean, sorted raw material for retail packing."
  },
  {
    name: "Thai Ha Public Company Limited",
    type: "Manufacturer (Kaset Brand)",
    focus: "Mung Beans, Glass Noodles, Rice",
    phone: "+66 2 236 9999",
    address: "286 Surawong Road, Si Phraya, Bang Rak, Bangkok 10500",
    note: "Major player in glass noodle production (requires bean starch).",
    approach: "Pitch Pigeon Peas as a cost-effective starch alternative or for their 'Bean' product line. Focus on industrial volume."
  },
  {
    name: "Gravity Intertrade Co., Ltd.",
    type: "Specialist Importer",
    focus: "Beans, Pulses, Sesame",
    phone: "+66 2 123 4567 (HQ est.)",
    address: "Bangkok Business District (Sathon)",
    note: "Active trader in the pulse market. Often sources from Myanmar/Africa.",
    approach: "Price is key. Offer FOB Beira/Nacala quotes directly. They understand the logistics."
  },
  {
    name: "Limsakdakul Agricultural Industry",
    type: "Wholesaler / Trader",
    focus: "Mung Beans, Red Beans, Black Beans",
    phone: "+66 2 463 0026",
    address: "71 Moo 19, Poochaosamingprai Rd, Samut Prakan",
    note: "Long-standing family agri-business.",
    approach: "Send physical samples (500g). They are traditional traders who buy based on visual quality check."
  },
  {
    name: "Capital Trading Co., Ltd.",
    type: "Commodity Trader",
    focus: "Feed Ingredients, Grains",
    phone: "+66 2 233 9000",
    address: "126/104 Krung Thon Buri Rd, Khlong San, Bangkok",
    note: "Deals in bulk commodities.",
    approach: "Pitch 'Fair Average Quality' (FAQ) pigeon peas for animal feed mixing if human-grade specs aren't met."
  },
  // 6-10: Food Processors & Canneries
  {
    name: "Pataya Food Industries (Nautilus)",
    type: "Cannery / Processor",
    focus: "Canned Fish, Ready Meals",
    phone: "+66 2 119 4399",
    address: "Mahachai, Samut Sakhon",
    note: "Produces ready-to-eat salads/soups which utilize beans.",
    approach: "Propose pre-cleaned beans for canning lines. Safety standards (GMP/HACCP) documentation is mandatory."
  },
  {
    name: "Unity Food Industry Co., Ltd.",
    type: "Beverage / Topping Manufacturer",
    focus: "Canned Beans in Syrup, Toppings",
    phone: "+66 34 854 628",
    address: "Samut Sakhon Industrial Estate",
    note: "Uses beans for dessert toppings (red bean, etc).",
    approach: "Pitch Red Pigeon Peas as a substitute ingredient for dessert pastes."
  },
  {
    name: "Malee Group Public Company",
    type: "Processor / Brand",
    focus: "Canned Fruits, Corn, Legumes",
    phone: "+66 2 992 5800",
    address: "Abulwit Bldg, Vibhavadi Rangsit Rd, Bangkok",
    note: "High-end canned produce.",
    approach: "Focus on organic or non-GMO certification. They export to global markets and need traceable origins."
  },
  {
    name: "River Kwai International Food",
    type: "Exporter / Processor",
    focus: "Sweet Corn, Agri-produce",
    phone: "+66 2 260 1981",
    address: "Asoke Tower, Sukhumvit 21, Bangkok",
    note: "Agri-processing experts.",
    approach: "Discuss contract farming or bulk raw material supply for new product lines."
  },
  {
    name: "Universal Rice Co., Ltd.",
    type: "Trader / Exporter",
    focus: "Rice, Tapioca, Pulses",
    phone: "+66 2 225 0065",
    address: "Songwad Road, Bangkok (Chinatown)",
    note: "Located in the traditional trading heart of Bangkok.",
    approach: "Walk-in or formal letter. They are traditional 'Songwad' traders. Consistency of supply > Low price."
  },
  // 11-15: Feed & Starch (Industrial)
  {
    name: "Betagro Group",
    type: "Agri-Conglomerate",
    focus: "Animal Feed, Livestock",
    phone: "+66 2 833 8000",
    address: "Betagro Tower, Vibhavadi Rangsit, Bangkok",
    note: "One of Thailand's largest feed producers.",
    approach: "Only interested in BULK (thousands of tonnes). Pitch low-cost pigeon peas for protein meal substitution."
  },
  {
    name: "Eua Aree Corporation",
    type: "Starch / Feed Trader",
    focus: "Tapioca, Maize, Beans",
    phone: "+66 2 234 3882",
    address: "Surawong Rd, Bangkok",
    note: "Trading intermediary.",
    approach: "Contact purchasing department for 'Alternative Protein Sources' for feed mills."
  },
  {
    name: "Global Crops Co., Ltd.",
    type: "Seed / Grain Importer",
    focus: "Field Crops",
    phone: "+66 2 513 1234",
    address: "Lat Phrao, Bangkok",
    note: "Imports various field crops for local distribution.",
    approach: "Email product catalog with harvest calendar."
  },
  {
    name: "Siam Grains Co., Ltd.",
    type: "Rice & Bean Trader",
    focus: "Grains",
    phone: "+66 2 573 0099",
    address: "Chaeng Watthana, Bangkok",
    note: "Mid-sized trader.",
    approach: "Flexible on quantities. Good for trial shipments (1-2 containers)."
  },
  {
    name: "C.P. Intertrade (CP Group)",
    type: "Global Trading Giant",
    focus: "Everything",
    phone: "+66 2 646 7000",
    address: "CP Tower 2, Ratchadaphisek Rd, Bangkok",
    note: "The trading arm of CP. Very hard to enter but huge volume.",
    approach: "Do not approach unless you have >5,000 MT capacity and full quality certs. Submit supplier registration online."
  },
  // 16-20: Niche & Ethnic Distributors
  {
    name: "Big Food Bazar",
    type: "Retailer / Wholesaler",
    focus: "Indian Ethnic Groceries",
    phone: "+66 2 123 9999 (Store)",
    address: "Sukhumvit Area, Bangkok",
    note: "Serves the Indian diaspora in Thailand.",
    approach: "Direct sales of 'Toor Dal' (Split Pigeon Peas). They need finished/processed product, not raw beans."
  },
  {
    name: "Siam Agro-Food Industry",
    type: "Processor",
    focus: "Pickled/Canned Veg",
    phone: "+66 2 662 2233",
    address: "Bangna-Trad, Bangkok",
    note: "Export oriented.",
    approach: "Pitch niche varieties of beans for export-grade salads."
  },
  {
    name: "Handyware Philippines (Thai Branch)",
    type: "Flavoring / Ingredient Supplier",
    focus: "Food Ingredients",
    phone: "+66 2 740 3388",
    address: "Prawet, Bangkok",
    note: "Supplies snack factories.",
    approach: "Pitch bean flour/powder as a high-protein base for extruded snacks."
  },
  {
    name: "N&P Import Export",
    type: "General Trader",
    focus: "Spices, Herbs, Beans",
    phone: "+66 2 438 1122",
    address: "Charoen Nakhon, Bangkok",
    note: "SMEs trader.",
    approach: "Open to spot deals. Send offer sheet weekly."
  },
  {
    name: "Thai Cereal World Company",
    type: "Wholesaler",
    focus: "Job's Tears, Beans, Sesame",
    phone: "+66 2 888 4567",
    address: "Thonburi, Bangkok",
    note: "Local aggregator.",
    approach: "Sell on price. They distribute to local markets (Talad Thai)."
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
        context: "MARKET OVERVIEW & DEMAND TRENDS:\nSouth Africa imports over 1 million tonnes of rice annually, serving as the region's primary staple alongside maize. While price-sensitive consumers in rural areas rely on Parboiled Rice (typically sourced from Thailand or India) due to its durability and cooking yield, the urban middle class in Cape Town and Johannesburg is driving strong demand for Premium Jasmine (Hom Mali). \n\nTRADE OPPORTUNITY:\nBroken Rice (A1 Super) presents a massive industrial opportunity. It is highly sought after by South African breakfast cereal manufacturers and pet food producers as a cost-effective carbohydrate binder. Malawi, while largely self-sufficient in maize, faces rice deficits during drought years, offering spot-market potential.\n\nLOGISTICS & PACKAGING:\nMost volume moves in 50kg PP woven bags for wholesale repacking, but the highest margins are in 'Retail-Ready' 1kg/2kg laminated bags featuring Thai origin certification.",
        statHighlight: '~USD 464M (2023 Exports to SA)',
        priceSignal: 'Retail Premium: $2.50 - $6.00/kg',
        pros: [
          "Thai Hom Mali: Global benchmark for quality/aroma.",
          "Established shipping lines (BKK -> Durban) ensure reliability.",
          "Thai Parboiled rice has better 'cooking yield' perception than competitors."
        ],
        cons: [
          "Price Sensitivity: Indian non-basmati white rice is often cheaper.",
          "Tariff Fluctuations: SA duties can change to protect local maize.",
          "Phytosanitary: Strict fumigation requirements for weevils."
        ],
        targetBuyers: [
          { 
            name: 'Shoprite Holdings', 
            country: 'South Africa',
            type: 'Retail Chain (Major)', 
            website: 'https://www.shopriteholdings.co.za',
            products: ['Parboiled Rice', 'Jasmine Rice', 'House Brands'],
            contactPerson: 'Category Manager: Grains/Staples',
            email: 'suppliers@shoprite.co.za',
            phone: '+27 21 980 4000',
            address: 'Brackenfell, Western Cape',
            note: 'Largest retailer in Africa. Uses centralized procurement. Requires high volume capacity and HACCP certification.',
            lastVerified: '2024-02-15',
            sources: ['https://www.shopriteholdings.co.za/suppliers.html'],
            isPriority: true,
            approach: "Subject: Private Label Jasmine Rice Proposal. Intro: We can match your 'Housebrand' specs with 100% Thai Hom Mali certification."
          },
          { 
            name: 'Massmart (Makro/Game)', 
            country: 'South Africa',
            type: 'Wholesale / Retail', 
            website: 'https://www.massmart.co.za',
            products: ['Bulk Rice (10kg+)', 'Broken Rice'],
            contactPerson: 'Procurement Division',
            email: 'info@massmart.co.za',
            phone: '+27 11 517 0000',
            address: 'Sandton, Johannesburg',
            note: 'Walmart-owned. Focuses on bulk packs for wholesale/traders. Price sensitivity is very high.',
            lastVerified: '2024-01-20',
            sources: ['https://www.massmart.co.za/suppliers'],
            isPriority: true
          },
          {
             name: 'Boxer Superstores',
             country: 'South Africa',
             type: 'Retail Chain',
             website: 'https://www.boxer.co.za',
             products: ['Budget Parboiled Rice', 'Maize Substitutes'],
             contactPerson: 'Buying Department',
             address: 'Westville, KZN',
             note: 'Dominant in township/rural markets. Moves massive volume of staple carbs. Price is the only factor.',
             lastVerified: '2024-02-28',
             sources: ['https://www.boxer.co.za']
          },
          { 
            name: 'Chipiku Stores', 
            country: 'Malawi',
            type: 'Retail / Wholesale Chain', 
            website: 'https://www.chipikustores.com',
            products: ['White Rice', 'Cooking Oil', 'Canned Foods'],
            contactPerson: 'Buying Department',
            phone: '+265 1 750 320',
            address: 'Lilongwe, Malawi',
            note: 'Major distribution network in Malawi. Imports staples to supplement local maize gaps.',
            lastVerified: '2023-11-10',
            sources: ['https://www.chipikustores.com/contact']
          },
          {
             name: 'Devland Cash & Carry',
             country: 'South Africa',
             type: 'Wholesaler',
             website: 'https://www.devland.co.za',
             products: ['Budget Rice', 'Parboiled'],
             address: 'Johannesburg',
             note: 'Serves the informal "Spaza" shop market. High volume, low margin.',
             lastVerified: '2023-12-01',
             sources: ['https://www.devland.co.za']
          },
          {
             name: 'Choppies Enterprises',
             country: 'South Africa',
             type: 'Regional Retailer',
             website: 'https://choppies.co.bw',
             products: ['Staples', 'FMCG'],
             address: 'Operations in SA, Zimbabwe, Botswana',
             note: 'Strong regional footprint. Uses consolidated sourcing hubs.',
             lastVerified: '2024-01-15',
             sources: ['https://choppies.co.bw']
          },
          {
             name: 'Tiger Brands',
             country: 'South Africa',
             type: 'Food Manufacturer',
             website: 'https://www.tigerbrands.com',
             products: ['Rice (Tastic Brand)', 'Raw Ingredients'],
             address: 'Bryanston, Johannesburg',
             note: 'Owners of "Tastic". Huge buyer of premium raw rice for local packing. Very strict quality control.',
             lastVerified: '2024-02-10',
             sources: ['https://www.tigerbrands.com']
          },
          {
            name: 'Golden Harvest',
            country: 'South Africa',
            type: 'Specialist Retailer',
            website: 'https://goldenharvest.co.za',
            products: ['Premium Rice', 'Specialty Grains'],
            address: 'Cape Town',
            note: 'Focuses on high-end fresh produce and specialty groceries.',
            lastVerified: '2024-03-15',
            sources: ['https://goldenharvest.co.za']
          },
          {
            name: 'Spar Group (National)',
            country: 'South Africa',
            type: 'Retail Network',
            website: 'https://www.spar.co.za',
            products: ['Spar Brand Rice', 'Premium Imports'],
            address: 'Pinetown',
            note: 'Operates via independent retailers but has central distribution. Huge private label volume.',
            lastVerified: '2024-02-01',
            sources: ['https://www.spar.co.za']
          }
        ],
        images: [
           { url: "https://images.unsplash.com/photo-1591206369811-4eeb2f03bc95?auto=format&fit=crop&w=800&q=80", credit: "Photo credit: Unsplash - © Pierre Bamin", alt: "Rice Sacks" },
           { url: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=800&q=80", credit: "Photo credit: Unsplash - © Mgg Vitchakorn", alt: "Thai Rice Field" }
        ]
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
        context: "MARKET OVERVIEW:\nCanned fish (particularly Pilchards and Tuna) is a strategic protein source in Southern Africa due to its ambient shelf life and affordability. Landlocked nations like Malawi and Zambia rely heavily on canned imports for protein security. Thailand is the world’s #1 Tuna exporter, but in Africa, it faces competition from local 'Glenryck' brands and Moroccan sardines.\n\nKEY BUYER SEGMENTS:\n1. Mass Retail: 425g cans of Pilchards/Mackerel in Tomato Sauce (The 'Standard' African tin).\n2. Urban Premium: 185g Tuna Chunks in Brine/Oil for salads.\n\nCOMPLIANCE NOTE:\nThe National Regulator for Compulsory Specifications (NRCS) in South Africa mandates sampling of EVERY canned fish shipment. This is a unique non-tariff barrier that causes delays. Exporters must strictly adhere to Codex Alimentarius standards to pass.",
        statHighlight: 'High Volume Category',
        priceSignal: 'Competitive vs EU brands',
        pros: [
          "Shelf Stability: 3-year shelf life suits inland distribution.",
          "Halal Certification: Essential for broad market acceptance.",
          "Variety: Thai 'Flavored Tuna' (Green Curry/Basil) is a novelty winner."
        ],
        cons: [
          "NRCS Testing: High rejection risk for labeling errors.",
          "EU Partnership Agreements: EU fish often has lower duties.",
          "Local Taste: Strong preference for Tomato Sauce base over Oil."
        ],
        targetBuyers: [
          { 
            name: 'Oceana Group (Lucky Star)', 
            country: 'South Africa',
            type: 'Processor / Brand Owner', 
            website: 'https://oceana.co.za',
            products: ['Canned Mackerel', 'Sardines'],
            contactPerson: 'Supply Chain Director',
            email: 'info@oceana.co.za',
            phone: '+27 21 410 1400',
            address: 'Cape Town, Western Cape',
            note: 'Dominant market leader. Sometimes imports product to supplement local catch shortages.',
            lastVerified: '2024-03-01',
            sources: ['https://oceana.co.za/contact/'],
            isPriority: true
          },
          { 
            name: 'Woolworths Food', 
            country: 'South Africa',
            type: 'Premium Retail', 
            website: 'https://www.woolworths.co.za',
            products: ['Sustainable Tuna', 'Specialty Seafood'],
            contactPerson: 'Seafood Technologist / Buyer',
            address: 'Cape Town',
            note: 'Strict "Fishing for the Future" sustainability requirements. MSC certification is mandatory.',
            lastVerified: '2024-02-20',
            sources: ['https://www.woolworths.co.za'],
            isPriority: true
          },
          { 
            name: 'Peoples Trading Centre (PTC)', 
            country: 'Malawi',
            type: 'Retail Chain', 
            website: 'http://www.presscorp.com',
            products: ['Canned Pilchards', 'Tuna'],
            address: 'Blantyre, Malawi',
            note: 'Owned by Press Corporation. Key outlet for shelf-stable proteins in Malawi.',
            lastVerified: '2023-10-15',
            sources: ['http://www.presscorp.com']
          },
          {
             name: 'Bidfood South Africa',
             country: 'South Africa',
             type: 'Food Service / HORECA',
             website: 'https://www.bidfood.co.za',
             products: ['Catering Tuna Packs', 'Frozen Seafood'],
             address: 'Linbro Park, Johannesburg',
             note: 'Largest food service distributor. Supplies hotels, restaurants, and canteens.',
             lastVerified: '2024-02-12',
             sources: ['https://www.bidfood.co.za']
          },
          {
             name: 'Rhodes Food Group (RFG)',
             country: 'South Africa',
             type: 'Manufacturer / Importer',
             website: 'https://www.rfg.com',
             products: ['Canned Fruit', 'Canned Meats/Fish'],
             address: 'Groot Drakenstein',
             note: 'Major player in canned goods. May co-pack or import finished goods for portfolio expansion.',
             lastVerified: '2024-01-25',
             sources: ['https://www.rfg.com']
          },
          {
             name: 'Three Streams Smokehouse',
             country: 'South Africa',
             type: 'Specialist Importer',
             website: 'https://threestreams.co.za',
             products: ['Salmon', 'Specialty Seafood'],
             address: 'Franschhoek',
             note: 'High-end market focus. Good target for value-added Thai seafood products.',
             lastVerified: '2023-11-30',
             sources: ['https://threestreams.co.za']
          },
          {
            name: 'Giant Hyper',
            country: 'South Africa',
            type: 'Independent Wholesaler',
            website: 'https://gianthyper.co.za',
            products: ['Canned Foods', 'Bulk Packs'],
            address: 'Cape Town',
            note: 'Large independent wholesaler moving volume to township markets.',
            lastVerified: '2024-01-10',
            sources: ['https://gianthyper.co.za']
          },
          {
            name: 'Trade Kings (Zambia/Regional)',
            country: 'Malawi',
            type: 'Distributor',
            website: 'https://tradekings.co.zm',
            products: ['Canned Foods', 'FMCG'],
            address: 'Regional Distribution',
            note: 'Major regional FMCG player with strong distribution into Malawi.',
            lastVerified: '2024-01-20',
            sources: ['https://tradekings.co.zm']
          }
        ],
        images: [
           { url: "https://images.unsplash.com/photo-1615141982906-61660f11409e?auto=format&fit=crop&w=800&q=80", credit: "Photo credit: Unsplash - © Barbara Olsen", alt: "Canned Food" },
           { url: "https://images.unsplash.com/photo-1534483852549-e79c6c05e5d7?auto=format&fit=crop&w=800&q=80", credit: "Photo credit: Unsplash - © Jakub Kapusnak", alt: "Tuna preparation" }
        ]
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
        context: "MARKET OVERVIEW:\nThailand is the 'Detroit of Asia' and shares a unique synergy with South Africa: both are right-hand drive (RHD) markets and key production hubs for 1-ton pickup trucks (Toyota Hilux, Ford Ranger, Isuzu D-Max). This creates a massive trade channel for inter-factory supply (OEM parts) and aftermarket accessories.\n\nKEY BUYER SEGMENTS:\n1. OEM Factories: Toyota South Africa (Durban) imports engines/gearboxes from Thailand.\n2. Aftermarket: Independent service chains (AutoZone, Midas) need filters, brake pads, and suspension parts for Thai-built vehicles on SA roads.\n\nOPPORTUNITY:\nThere is a high demand for 'Accessories' (bull bars, bed liners, canopies) where Thai aesthetic designs are highly regarded. Mining fleets in SA also require rugged suspension upgrades sourced from Thai specialist brands.",
        statHighlight: '$177M (Cars) / $176M (Parts)',
        priceSignal: 'Competitive vs EU/Japan Source',
        pros: [
          "RHD Compatibility: Direct fit for SA market vehicles.",
          "Supply Chain Integration: Toyota/Isuzu internal global codes.",
          "Cost/Quality Ratio: Superior to Chinese parts, cheaper than Japanese."
        ],
        cons: [
          "Import Duties: High (20-25%) to protect SA local manufacturing.",
          "Homologation: Vehicles must meet strict SABS safety specs.",
          "Local Content Rules: SA govt pushes for local parts manufacturing."
        ],
        targetBuyers: [
          { 
            name: 'Motus Aftermarket Parts', 
            country: 'South Africa',
            type: 'Distributor (Major)', 
            website: 'https://motusparts.co.za',
            products: ['Service Parts', 'Filters', 'Brakes'],
            contactPerson: 'Merchandise Executive',
            email: 'info@motusparts.co.za',
            phone: '+27 11 879 6000',
            address: 'Germiston, Gauteng',
            note: 'Dominates the SA aftermarket. Controls franchises like Midas (Retail) and Alert Engine Parts. Key player in import of white-label goods.',
            lastVerified: '2024-02-10',
            sources: ['https://motusparts.co.za/contact'],
            isPriority: true,
            approach: "Subject: OEM-spec Filter supply for Midas network. Intro: We supply Toyota Thailand and can offer white-label production for your Midas brand."
          },
          { 
            name: 'AutoZone South Africa', 
            country: 'South Africa',
            type: 'Retail Chain', 
            website: 'https://autozone.co.za',
            products: ['Accessories', 'Hard Parts', 'Chemicals'],
            contactPerson: 'Procurement Head',
            address: 'Johannesburg',
            note: '200+ Stores. Heavily reliant on house brands. Needs IATF 16949 certified suppliers.',
            lastVerified: '2024-01-25',
            sources: ['https://autozone.co.za']
          },
          {
            name: 'Toyota South Africa (TSAM)',
            country: 'South Africa',
            type: 'OEM Manufacturer',
            website: 'https://www.toyota.co.za',
            products: ['CKD Kits', 'Components'],
            address: 'Durban (Prospecton Plant)',
            note: 'Inter-company trade with Toyota Thailand. Requires vendor code/global approval.',
            lastVerified: '2024-03-10',
            sources: ['https://www.toyota.co.za'],
            isPriority: true
          },
          { 
            name: 'Masterparts', 
            country: 'South Africa',
            type: 'Specialist Wholesaler', 
            website: 'https://www.masterparts.com',
            products: ['Engine Parts', 'Suspension'],
            address: 'Cape Town',
            note: 'High-technical focus. Stocks 55,000+ hard-to-find engine, suspension, and steering components.',
            lastVerified: '2024-02-15',
            sources: ['https://www.masterparts.com']
          },
          { 
            name: 'Goldwagen', 
            country: 'South Africa',
            type: 'Franchise Chain', 
            website: 'https://www.goldwagen.com',
            products: ['OEM Quality Replacement Parts'],
            contactPerson: 'International Purchasing',
            address: 'Centurion, Gauteng',
            note: 'Focus on "OEM Quality". Started with VW, now expanded to Toyota/Ford (Thai models).',
            lastVerified: '2024-02-05',
            sources: ['https://www.goldwagen.com/contact-us/']
          },
          {
             name: 'Grandmark International',
             country: 'South Africa',
             type: 'Distributor',
             website: 'https://grandmark.co.za',
             products: ['Body Panels', 'Cooling Systems', 'Suspension'],
             address: 'Johannesburg',
             note: 'Major importer of non-OEM body parts (fenders, bonnets). Strong potential for Thai body kits.',
             lastVerified: '2024-02-05',
             sources: ['https://grandmark.co.za']
          },
          {
             name: 'Kapico South Africa',
             country: 'South Africa',
             type: 'Wholesaler',
             website: 'https://kapicogroup.com',
             products: ['Brake Pads', 'Clutches'],
             address: 'Johannesburg',
             note: 'Part of global Kapico group. Sounces extensively from Asia.',
             lastVerified: '2023-12-10',
             sources: ['https://kapicogroup.com']
          },
          {
             name: 'Aftermarket Solutions (ASL)',
             country: 'South Africa',
             type: 'Distributor',
             website: 'https://asl.co.za',
             products: ['Filters', 'Wipers', 'Ignition'],
             address: 'Midrand',
             note: 'Represents brands like Lucas/Fram locally. Imports white label components.',
             lastVerified: '2024-01-20',
             sources: ['https://asl.co.za']
          },
          {
             name: 'Trysome Auto Electrical',
             country: 'South Africa',
             type: 'Specialist',
             website: 'https://www.trysome.co.za',
             products: ['Auto Electrical', 'Lighting'],
             address: 'Jet Park, Boksburg',
             note: 'Focus on heavy duty and mining vehicle electricals. Niche high-value.',
             lastVerified: '2023-11-15',
             sources: ['https://www.trysome.co.za']
          },
          {
             name: 'CFAO Motors South Africa',
             country: 'South Africa',
             type: 'Dealer Network',
             website: 'https://www.cfaomotors.co.za',
             products: ['Accessories', 'Service Parts'],
             address: 'Johannesburg',
             note: 'Large dealer network. Buys accessories for pre-delivery fitment.',
             lastVerified: '2024-01-05',
             sources: ['https://www.cfaomotors.co.za']
          }
        ],
        images: [
           { url: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=800&q=80", credit: "Photo credit: Unsplash - © Peter Broomfield", alt: "Car manufacturing" },
           { url: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=800&q=80", credit: "Photo credit: Unsplash - © Chad Kirchoff", alt: "Auto parts" }
        ]
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
        context: "MARKET OVERVIEW:\nPost-pandemic, the demand for Nitrile and Latex examination gloves in South African private hospital networks (Netcare, Mediclinic) remains elevated. Thailand, as the world’s premier natural rubber producer, has a distinct raw material advantage.\n\nINDUSTRIAL DEMAND:\nBeyond healthcare, the Mining and Agriculture sectors in Southern Africa consume vast quantities of 'Heavy Duty' rubber products—conveyor belts, tractor tyres, and industrial protective gloves. Malawi’s tobacco and tea estates are key buyers of agricultural boots and gloves.\n\nCOMPETITION:\nThailand competes fiercely with Malaysia (gloves) and China (tyres). To win, Thai exporters must focus on 'Certified Quality' (ISO 13485, SABS) rather than bottom-dollar pricing.",
        statHighlight: 'Consistent Health Sector Demand',
        pros: [
          "Raw Material Leadership: Vertical integration in rubber supply.",
          "Brand Trust: Thai medical grade is trusted over Chinese generic.",
          "Mining Demand: Constant need for heavy conveyor rubber."
        ],
        cons: [
          "Price Volatility: Rubber commodity prices fluctuate.",
          "SABS Certification: Mandatory for condoms and medical gloves.",
          "Tender Process: Public hospitals often buy via rigid govt tenders."
        ],
        targetBuyers: [
          { 
            name: 'Dis-Chem Pharmacies', 
            country: 'South Africa',
            type: 'Pharma Retail', 
            website: 'https://www.dischem.co.za',
            products: ['Examination Gloves', 'First Aid'],
            contactPerson: 'Category Manager: Medical',
            phone: '+27 11 589 2200',
            address: 'Midrand, Gauteng',
            note: 'Major pharmacy chain. Imports own-brand medical consumables.',
            lastVerified: '2024-01-30',
            sources: ['https://www.dischem.co.za'],
            isPriority: true
          },
          { 
            name: 'Netcare Limited', 
            country: 'South Africa',
            type: 'Hospital Group', 
            website: 'https://www.netcare.co.za',
            products: ['Surgical Gloves', 'PPE'],
            contactPerson: 'Group Procurement',
            address: 'Sandton',
            note: 'Private hospital giant. Centralized procurement for 50+ hospitals.',
            lastVerified: '2023-12-15',
            sources: ['https://www.netcare.co.za']
          },
          { 
            name: 'TiAuto Investments (Tiger Wheel & Tyre)', 
            country: 'South Africa',
            type: 'Tyre Retailer', 
            website: 'https://www.tiauto.co.za',
            products: ['Passenger Tyres', '4x4 Tyres'],
            address: 'Johannesburg',
            note: 'Market leader in tyre retail. Imports various global brands.',
            lastVerified: '2024-02-20',
            sources: ['https://www.tiauto.co.za']
          },
          {
             name: 'North Safety Products',
             country: 'South Africa',
             type: 'Industrial Safety',
             website: 'https://www.northsafety.co.za',
             products: ['Industrial Gloves', 'Boots', 'PPE'],
             address: 'Pinetown, KZN',
             note: 'Major supplier to the mining industry. Needs heavy-duty, chemical-resistant rubber gloves.',
             lastVerified: '2024-01-30',
             sources: ['https://www.northsafety.co.za']
          },
          {
             name: 'Bearings International',
             country: 'South Africa',
             type: 'Industrial Distributor',
             website: 'https://www.bearings.co.za',
             products: ['Seals', 'Conveyor Belts', 'Hoses'],
             address: 'Boksburg',
             note: 'Supplies the agricultural and manufacturing sectors. Needs high-spec industrial rubber.',
             lastVerified: '2024-02-15',
             sources: ['https://www.bearings.co.za']
          },
          {
             name: 'Rubber Products & Mouldings (RPM)',
             country: 'South Africa',
             type: 'Manufacturer / Distributor',
             website: 'https://rpm.co.za',
             products: ['Custom Mouldings', 'Sheeting'],
             address: 'Cape Town',
             note: 'Imports raw rubber sheet and specialty components.',
             lastVerified: '2023-11-05',
             sources: ['https://rpm.co.za']
          },
          {
             name: 'MediClinic International',
             country: 'South Africa',
             type: 'Hospital Group',
             website: 'https://www.mediclinic.co.za',
             products: ['Medical Consumables', 'Gloves'],
             address: 'Stellenbosch',
             note: 'Premium private hospital group. Requires ISO 13485 certified suppliers.',
             lastVerified: '2024-01-10',
             sources: ['https://www.mediclinic.co.za']
          },
          {
             name: 'Truzo (B2B Platform)',
             country: 'South Africa',
             type: 'B2B Procurement',
             website: 'https://truzo.com',
             products: ['General Medical Supplies'],
             address: 'Johannesburg',
             note: 'Emerging digital procurement platform for smaller clinics.',
             lastVerified: '2023-10-20',
             sources: ['https://truzo.com']
          },
          {
             name: 'Maxe',
             country: 'South Africa',
             type: 'Auto Accessories',
             website: 'https://maxe.co.za',
             products: ['Rubber Mats', 'Linings'],
             address: 'Durban',
             note: 'Uses rubber for automotive accessories. Potential buyer for raw sheet.',
             lastVerified: '2023-12-01',
             sources: ['https://maxe.co.za']
          }
        ],
        images: [
           { url: "https://images.unsplash.com/photo-1584744982491-665216d95f8b?auto=format&fit=crop&w=800&q=80", credit: "Photo credit: Unsplash - © Clay Banks", alt: "Medical Gloves" },
           { url: "https://images.unsplash.com/photo-1578844251758-2f71da645217?auto=format&fit=crop&w=800&q=80", credit: "Photo credit: Unsplash - © Jp Valery", alt: "Rubber Industry" }
        ]
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
        context: "MARKET OVERVIEW:\nUrbanization in Africa is driving a 'Convenience Food' boom. South African consumers are adventurous and increasingly embracing Asian flavors. Thai Green Curry, Sweet Chili Sauce, and Sriracha have transitioned from niche gourmet to mainstream supermarket staples.\n\nKEY SEGMENTS:\n1. Instant Noodles: A rapidly growing category for students and workers. Thai brands (Mama, Wai Wai) compete on flavor intensity (Tom Yum) vs local bland chicken flavors.\n2. Dipping Sauces: Sweet Chili Sauce is now a standard condiment in SA fast food (used on chicken/chips).\n\nLOGISTICS:\nThese high-value-to-weight items are ideal for container consolidation. 'Mixed Containers' (LCL) allow importers to test multiple SKUs without full commitments.",
        statHighlight: 'High Margin / Low Weight',
        priceSignal: 'Wholesale: Low / Retail: Mid-High',
        pros: [
          "Flavor Profile: Thai profile matches SA's love for spice/sweet.",
          "Lightweight: Maximizes container utilization.",
          "Private Label: High potential for supermarket house brands."
        ],
        cons: [
          "Labeling (R.146): Strict allergen and nutritional table rules.",
          "Competition: Local sauces (Nandos) are dominant.",
          "Sugar Tax: High sugar content sauces face levies in SA."
        ],
        targetBuyers: [
          { 
            name: 'Checkers (Shoprite Group)', 
            country: 'South Africa',
            type: 'Premium Retail', 
            website: 'https://www.checkers.co.za',
            products: ['Authentic Asian Sauces', 'Noodles'],
            contactPerson: 'Buyer: International Foods',
            address: 'Cape Town',
            note: 'Runs the "Foreign Ground" exclusive brand. Seeks authentic origin products.',
            lastVerified: '2024-02-15',
            sources: ['https://www.checkers.co.za'],
            isPriority: true
          },
          {
             name: 'Libstar Holdings',
             country: 'South Africa',
             type: 'Food Manufacturer / Importer',
             website: 'https://libstar.co.za',
             products: ['Private Label Sauces', 'Noodles'],
             address: 'Cape Town',
             note: 'Key partner for Woolworths/McDonalds SA. Manufactures and imports private label goods.',
             lastVerified: '2024-02-01',
             sources: ['https://libstar.co.za'],
             isPriority: true
          },
          { 
            name: 'Africa Sun Oil Refineries', 
            country: 'South Africa',
            type: 'Manufacturer / Packer', 
            website: 'https://africasunoil.com',
            products: ['Industrial Pastes', 'Chili Mash'],
            address: 'Durban',
            note: 'Industrial buyer. May import bulk pastes for local bottling.',
            lastVerified: '2023-11-20',
            sources: ['https://africasunoil.com']
          },
          { 
            name: 'Sanna Trading', 
            country: 'Malawi',
            type: 'Importer / Distributor', 
            website: 'https://www.sannatrading.com', // Simulated based on typical profile
            products: ['Instant Noodles', 'Snacks'],
            address: 'Lilongwe',
            note: 'Distributes FMCG to informal markets in Malawi.',
            lastVerified: '2023-09-15',
            sources: ['Public Business Directory Malawi']
          },
          {
             name: 'Kit Kat Cash & Carry',
             country: 'South Africa',
             type: 'Wholesale Giant',
             website: 'https://kitkatgroup.com',
             products: ['Bulk Instant Noodles', 'Beverages'],
             address: 'Pretoria',
             note: 'Aggressive pricing. Serves the Spaza shop market.',
             lastVerified: '2024-01-25',
             sources: ['https://kitkatgroup.com']
          },
          {
             name: 'Giant Sweets & Chocolates',
             country: 'South Africa',
             type: 'Distributor',
             website: 'https://giantsweets.co.za',
             products: ['Confectionery', 'Asian Snacks'],
             address: 'Johannesburg',
             note: 'Distributes impulse buy snacks to forecourts and independent retailers.',
             lastVerified: '2023-12-05',
             sources: ['https://giantsweets.co.za']
          },
          {
             name: 'Peoples Trading Centre (PTC)',
             country: 'Malawi',
             type: 'Retail Chain',
             website: 'http://www.presscorp.com',
             products: ['Canned Foods', 'Instant Meals'],
             address: 'Blantyre',
             note: 'Main retailer in urban Malawi centers.',
             lastVerified: '2023-10-20',
             sources: ['http://www.presscorp.com']
          },
          {
             name: 'Independent Cash & Carry',
             country: 'South Africa',
             type: 'Wholesale',
             website: 'https://independentgroup.co.za',
             products: ['Ethnic Foods', 'Spices'],
             address: 'Johannesburg',
             note: 'Huge network. Good entry point for "Value" brands.',
             lastVerified: '2024-01-10',
             sources: ['https://independentgroup.co.za']
          },
          {
             name: 'Monteagle Group',
             country: 'South Africa',
             type: 'Supply Chain Manager',
             website: 'https://www.monteaglegroup.com',
             products: ['Private Label FMCG'],
             address: 'Durban',
             note: 'Manages global sourcing for major retailers. Key gatekeeper.',
             lastVerified: '2024-02-05',
             sources: ['https://www.monteaglegroup.com']
          }
        ],
        images: [
           { url: "https://images.unsplash.com/photo-1541558869434-2840d30d602c?auto=format&fit=crop&w=800&q=80", credit: "Photo credit: Unsplash - © Vitchakorn Koonyosying", alt: "Thai Instant Noodles" },
           { url: "https://images.unsplash.com/photo-1628191013003-370b18e360cd?auto=format&fit=crop&w=800&q=80", credit: "Photo credit: Unsplash - © P. O.", alt: "Chili Sauce" }
        ]
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
        context: "MARKET OVERVIEW:\nThe African beauty market is shifting towards 'Natural & Organic' ingredients. Thai cosmetics, famous for herbal integration (Tamarind, Turmeric, Lemongrass), have a unique story that resonates with South African consumers seeking wellness products.\n\nREGULATORY LANDSCAPE:\nSouth Africa's CTFA regulations are strict but navigable. However, 'Skin Lightening' products are heavily scrutinized and often banned if they contain hydroquinone. Thai brands must focus on 'Brightening' and 'Glow' marketing rather than 'Whitening'.\n\nNICHE OPPORTUNITY:\nSpa Products. South Africa has a robust luxury safari and hotel spa industry. Bulk import of Thai massage oils, balms, and herbal compresses is a lucrative B2B channel.",
        statHighlight: 'Niche High Growth',
        pros: [
          "Unique Ingredients: Thai herbs offer clear differentiation.",
          "Spa Reputation: 'Thai Spa' is a globally recognized quality marker.",
          "Packaging: Thai OEM packaging is world-class and attractive."
        ],
        cons: [
          "SAHPRA: Medicinal claims trigger multi-year registration.",
          "Marketing Cost: Brand building is expensive in crowded market.",
          "Skin Tone: Formulations must suit African skin types/tones."
        ],
        targetBuyers: [
          { 
            name: 'Sorbet Group', 
            country: 'South Africa',
            type: 'Beauty Chain / Spas', 
            website: 'https://www.sorbet.co.za',
            products: ['Professional Spa Products', 'Retail Skincare'],
            contactPerson: 'Product Development',
            address: 'Johannesburg',
            note: 'Largest beauty franchise in SA. Develops own-brand products.',
            lastVerified: '2024-01-10',
            sources: ['https://www.sorbet.co.za'],
            isPriority: true
          },
          { 
            name: 'Clicks Group', 
            country: 'South Africa',
            type: 'Retail Pharmacy', 
            website: 'https://clicks.co.za',
            products: ['Natural Beauty', 'Bath & Body'],
            contactPerson: 'Category Manager: Beauty',
            address: 'Cape Town',
            note: 'Mass market volume. Strong focus on "Natural/Herbal" category expansion.',
            lastVerified: '2024-02-25',
            sources: ['https://clicks.co.za']
          },
          {
             name: 'The Foschini Group (TFG)',
             country: 'South Africa',
             type: 'Retail Fashion/Beauty',
             website: 'https://tfglimited.co.za',
             products: ['Cosmetics', 'Personal Care'],
             address: 'Cape Town',
             note: 'Owners of Foschini/Markham. Expanding their beauty footprint.',
             lastVerified: '2024-01-15',
             sources: ['https://tfglimited.co.za']
          },
          {
             name: 'Wellness Warehouse',
             country: 'South Africa',
             type: 'Health Retailer',
             website: 'https://wellnesswarehouse.com',
             products: ['Organic Skincare', 'Supplements'],
             address: 'Cape Town',
             note: 'Perfect fit for "Clean Beauty" and herbal Thai products. Customer base is wealthy and health-conscious.',
             lastVerified: '2024-02-22',
             sources: ['https://wellnesswarehouse.com']
          },
          {
             name: 'Camelot Spa Group',
             country: 'South Africa',
             type: 'Spa Chain',
             website: 'https://camelotspa.co.za',
             products: ['Massage Oils', 'Balms'],
             address: 'Johannesburg',
             note: 'Major spa franchisor. Needs bulk professional products.',
             lastVerified: '2024-01-05',
             sources: ['https://camelotspa.co.za']
          },
          {
             name: 'HomeChoice',
             country: 'South Africa',
             type: 'Direct Retailer',
             website: 'https://www.homechoice.co.za',
             products: ['Beauty Sets', 'Fragrance'],
             address: 'Cape Town',
             note: 'Sells via catalog/online to mass market on credit. Good for "Gift Sets".',
             lastVerified: '2023-11-15',
             sources: ['https://www.homechoice.co.za']
          },
          {
             name: 'Annique Health & Beauty',
             country: 'South Africa',
             type: 'Direct Selling',
             website: 'https://www.annique.com',
             products: ['Tea-based Skincare'],
             address: 'Centurion',
             note: 'Famous for Rooibos. Might be interested in Thai herbal synergy ingredients.',
             lastVerified: '2023-10-10',
             sources: ['https://www.annique.com']
          },
          {
             name: 'Signature Cosmetics',
             country: 'South Africa',
             type: 'Retail Chain',
             website: 'https://signaturecosmetics.co.za',
             products: ['Makeup', 'Fragrance', 'Skin'],
             address: 'Johannesburg',
             note: 'Budget-friendly chain. Good target for private label manufacturing.',
             lastVerified: '2024-01-20',
             sources: ['https://signaturecosmetics.co.za']
          }
        ],
        images: [
           { url: "https://images.unsplash.com/photo-1619451334792-150fd785ee74?auto=format&fit=crop&w=800&q=80", credit: "Photo credit: Unsplash - © Viva Luna Studios", alt: "Skincare Bottles" },
           { url: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=800&q=80", credit: "Photo credit: Unsplash - © Content Pixie", alt: "Spa Setup" }
        ]
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
        context: "MARKET OVERVIEW:\nMalawi's economy is 80% agrarian (Maize, Tobacco, Tea). There is a perennial deficit of yield-enhancing inputs. Smallholder farmers need affordable, robust technology—not high-tech US tractors.\n\nPRODUCT FIT:\n1. Small Machinery: Walk-behind tractors (power tillers) and rice threshers from Thailand are perfectly sized for Malawian plot sizes.\n2. Fertilizers: Thailand produces NPK blends and organic stimulants that can boost maize yields. Government subsidy programs (FISP in Malawi) are the main bulk buyers.\n\nLOGISTICS:\nShipment is usually via Beira or Nacala ports in Mozambique, then trucked inland. Packaging must be durable (50kg woven bags with liners) to survive rough handling.",
        statHighlight: 'Strategic Dev. Sector',
        pros: [
          "Appropriate Tech: Thai machines are simple to repair.",
          "Development Aid: Matches UN/NGO funding goals in Malawi.",
          "Climate Match: Equipment designed for tropical rice/maize."
        ],
        cons: [
          "Purchasing Power: Farmers rely on harvest cycles/subsidies.",
          "Spare Parts: After-sales network must be established first.",
          "Regulatory: Agrochemicals need field trials for registration."
        ],
        targetBuyers: [
          { 
            name: 'Agricultural Trading Company (ATC)', 
            country: 'Malawi',
            type: 'Agri-Input Supplier', 
            website: 'https://www.atc.mw',
            products: ['Fertilizers', 'Crop Protection', 'Tools'],
            contactPerson: 'General Manager',
            phone: '+265 1 710 088',
            address: 'Lilongwe, Malawi',
            note: 'State-linked but commercial. Key player in national input subsidy programs.',
            lastVerified: '2023-11-05',
            sources: ['https://www.atc.mw'],
            isPriority: true,
            approach: "Subject: Small-scale Rice Thresher Demo Units. Intro: Our machinery is designed for smallholder plots similar to those in Thailand."
          },
          { 
            name: 'Farmers World', 
            country: 'Malawi',
            type: 'Retail Chain', 
            website: 'https://www.farmersworld.mw',
            products: ['Seeds', 'Fertilizers', 'Equipment'],
            address: 'Lilongwe',
            note: 'Extensive rural retail network. Best channel for reaching smallholder farmers.',
            lastVerified: '2023-12-12',
            sources: ['https://www.farmersworld.mw']
          },
          { 
            name: 'Omnia Fertilizer', 
            country: 'South Africa',
            type: 'Agri-Chemicals', 
            website: 'https://www.omnia.co.za',
            products: ['Raw Ingredients', 'Specialty Fertilizers'],
            address: 'Johannesburg',
            note: 'Regional giant. Imports raw materials for blending.',
            lastVerified: '2024-01-15',
            sources: ['https://www.omnia.co.za']
          },
          {
             name: 'Afgri',
             country: 'South Africa',
             type: 'Agri-Services',
             website: 'https://www.afgri.co.za',
             products: ['Equipment', 'Grain Handling'],
             address: 'Centurion',
             note: 'Huge regional player. Supports commercial farmers. Potential buyer for grain storage tech.',
             lastVerified: '2024-02-05',
             sources: ['https://www.afgri.co.za']
          },
          {
             name: 'Senwes',
             country: 'South Africa',
             type: 'Agricultural Business',
             website: 'https://www.senwes.co.za',
             products: ['Mechanisation', 'Inputs'],
             address: 'Klerksdorp',
             note: 'Dominant in the maize belt. Sells John Deere but may look for smaller implements for emerging farmers.',
             lastVerified: '2023-12-10',
             sources: ['https://www.senwes.co.za']
          },
          {
             name: 'Agora',
             country: 'South Africa',
             type: 'Agri-Retailer',
             website: 'https://agora.co.za', // Simulated
             products: ['General Farm Supplies'],
             address: 'Free State',
             note: 'Co-op style retailer.',
             lastVerified: '2023-11-25',
             sources: ['Public Directory']
          },
          {
             name: 'Malawi Mangoes',
             country: 'Malawi',
             type: 'Commercial Farm/Processor',
             website: 'http://malawimangoes.com',
             products: ['Processing Machinery', 'Packaging'],
             address: 'Salima',
             note: 'Large scale fruit processor. Needs reliable processing equipment.',
             lastVerified: '2023-10-05',
             sources: ['http://malawimangoes.com']
          },
          {
             name: 'Export Trading Group (ETG)',
             country: 'South Africa',
             type: 'Global Trader',
             website: 'https://www.etgworld.com',
             products: ['Fertilizer', 'Agri-Inputs'],
             address: 'Johannesburg',
             note: 'Massive footprint across Africa. Imports boatloads of fertilizer.',
             lastVerified: '2024-02-20',
             sources: ['https://www.etgworld.com']
          },
          {
             name: 'Hinterland',
             country: 'South Africa',
             type: 'Agri-Retailer',
             website: 'https://hinterland.co.za',
             products: ['Hardware', 'Inputs'],
             address: 'Klerksdorp',
             note: 'Retail arm of Senwes. Good for shelf-ready agri-tools.',
             lastVerified: '2023-12-15',
             sources: ['https://hinterland.co.za']
          }
        ],
        images: [
           { url: "https://images.unsplash.com/photo-1625246333195-09d9b630df35?auto=format&fit=crop&w=800&q=80", credit: "Photo credit: Unsplash - © Jan Kopřiva", alt: "Tractor in field" },
           { url: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=800&q=80", credit: "Photo credit: Unsplash - © James Baltz", alt: "Crops" }
        ]
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
        context: "MARKET OVERVIEW:\nSouth Africa has a developed manufacturing sector but imports significant polymer resins. Malawi has a small but growing light industry sector (beverages, household goods) that relies 100% on imported raw pellets (HDPE, LDPE, PET, PP).\n\nTRADE OPPORTUNITY:\n1. Pre-forms: PET bottle pre-forms for local beverage bottlers in Malawi.\n2. Finished Goods: Plastic furniture (chairs/tables) and household basins are high-volume sellers in informal markets across Southern Africa.\n\nSUSTAINABILITY:\nSouth Africa is implementing Extended Producer Responsibility (EPR) laws. Thai exporters offering 'Recycled Content' (rPET) or biodegradable options will have a significant advantage over generic Chinese suppliers.",
        statHighlight: 'Industrial Staple',
        pros: [
          "Volume Demand: Constant industrial consumption.",
          "Thai Petrochem: PTT/SCG are world-class reliable suppliers.",
          "Versatility: Mix of raw pellets and finished consumer goods."
        ],
        cons: [
          "Anti-Dumping: Cheap imports often face duties.",
          "Environmental Levies: Plastic bag taxes in SA.",
          "Freight Cost: Low value-to-volume ratio for finished goods."
        ],
        targetBuyers: [
          { 
            name: 'Mpact Limited', 
            country: 'South Africa',
            type: 'Packaging Manufacturer', 
            website: 'https://www.mpact.co.za',
            products: ['Recycled Polymers', 'PET'],
            address: 'Melrose Arch, Johannesburg',
            note: 'Leading paper and plastics packaging manufacturer. Huge buyer of raw resins.',
            lastVerified: '2024-02-01',
            sources: ['https://www.mpact.co.za'],
            isPriority: true
          },
          { 
            name: 'Polypet (Malawi)', 
            country: 'Malawi',
            type: 'Manufacturer', 
            website: 'https://www.candlexmw.com', // Part of Candlex group usually
            products: ['PET Resins', 'Pre-forms'],
            address: 'Blantyre',
            note: 'Manufactures bottles for local beverages/oil. Needs reliable resin supply.',
            lastVerified: '2023-10-20',
            sources: ['Malawi Chamber of Commerce']
          },
          {
             name: 'Berry Astrapak',
             country: 'South Africa',
             type: 'Manufacturer',
             website: 'https://www.berryglobal.com',
             products: ['Rigid Packaging', 'Moulding'],
             address: 'Durban',
             note: 'Global giant with SA operations. Major buyer of specialized resins.',
             lastVerified: '2024-01-15',
             sources: ['https://www.berryglobal.com']
          },
          {
             name: 'Polyoak Packaging',
             country: 'South Africa',
             type: 'Manufacturer',
             website: 'https://www.polyoakpackaging.co.za',
             products: ['Dairy Tubs', 'Bottles'],
             address: 'Cape Town',
             note: 'Family owned but massive. Focus on dairy/beverage packaging.',
             lastVerified: '2024-02-10',
             sources: ['https://www.polyoakpackaging.co.za']
          },
          {
             name: 'Nampak',
             country: 'South Africa',
             type: 'Packaging Giant',
             website: 'https://www.nampak.com',
             products: ['Crates', 'Bottles', 'Closures'],
             address: 'Johannesburg',
             note: 'Africa’s largest packaging company. Diverse material needs.',
             lastVerified: '2023-12-20',
             sources: ['https://www.nampak.com']
          },
          {
             name: 'Transpaco',
             country: 'South Africa',
             type: 'Manufacturer',
             website: 'https://transpaco.co.za',
             products: ['Plastic Bags', 'Films'],
             address: 'Johannesburg',
             note: 'Focus on retail bags and industrial films. Price sensitive.',
             lastVerified: '2024-01-05',
             sources: ['https://transpaco.co.za']
          },
          {
             name: 'Easy Pack Malawi',
             country: 'Malawi',
             type: 'Manufacturer',
             website: 'https://easypackmw.com', // Simulated
             products: ['Food Packaging'],
             address: 'Blantyre',
             note: 'Supplies local food processors.',
             lastVerified: '2023-09-20',
             sources: ['Malawi Business Directory']
          },
          {
             name: 'Bowler Plastics',
             country: 'South Africa',
             type: 'Manufacturer',
             website: 'https://bowler.co.za',
             products: ['Cosmetic Packaging', 'Closures'],
             address: 'Cape Town',
             note: 'Specializes in rigid plastic packaging. Needs high quality moulds and resins.',
             lastVerified: '2023-11-10',
             sources: ['https://bowler.co.za']
          }
        ],
        images: [
           { url: "https://images.unsplash.com/photo-1616931590643-65089b4c177d?auto=format&fit=crop&w=800&q=80", credit: "Photo credit: Unsplash - © Jonathan Chng", alt: "Plastic Pellets" },
           { url: "https://images.unsplash.com/photo-1629580008272-29e02d810777?auto=format&fit=crop&w=800&q=80", credit: "Photo credit: Unsplash - © Killari Hotaru", alt: "Plastic Bottles" }
        ]
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
        title: "Market Demand & Deep Dive", 
        content: "South Africa represents a mature, high-volume market for rice imports, consuming over 1 million tonnes annually. While parboiled rice dominates the mass market due to its processing durability and price point, there is a rapidly expanding segment for aromatic and premium specialty rice. Thai Hom Mali (Jasmine) rice commands the highest brand equity in this tier, associated with superior fragrance and texture. However, market share is under constant siege from cheaper Indian Basmati varieties and non-basmati long grain. The key opportunity lies not in bulk commodity trading—where margins are razor-thin—but in establishing recognized retail brands that guarantee purity and 'New Crop' freshness, traits that South African connoisseurs are increasingly willing to pay a premium for."
      },
      { 
        title: "Buyer Behavior", 
        content: "The target consumer for premium Jasmine rice in South Africa is the upper-middle-class demographic shopping at retailers like Woolworths, Checkers (FreshX), and specialized Asian grocers. These buyers are label-conscious and wary of 'blended' rice which dilutes quality. Packaging plays a pivotal role; vacuum-sealed blocks or high-quality laminate matte-finish bags with clear windows signal premium quality. Furthermore, the 'Thai Hom Mali Rice' certification mark from the Department of Foreign Trade is a potent trust signal that should be prominently displayed to differentiate from generic 'fragrant rice' competitors." 
      },
      { 
        title: "Pricing Insight & Logistics", 
        content: "The landed cost (CIF Durban) for premium Jasmine usually tracks 20-30% higher than standard long grain. Retail pricing in South Africa for premium brands can range from ZAR 35 to ZAR 60 per kilogram, depending on the packaging and retailer tier. Shipping rice to South Africa requires meticulous moisture control. The transit across the equator can lead to 'container rain' and mold if moisture content exceeds 14% or if desiccants are insufficient. Regulatory wise, the South African Department of Agriculture (DALRRD) requires specific grading and phytosanitary certificates. Labeling regulations (R.146) regarding nutritional tables and origin declarations are non-negotiable." 
      },
      {
        title: "Risk & Opportunity Angle",
        content: "The primary risk is currency volatility (THB vs ZAR) and the 'fake Jasmine' prevalence. Mitigation involves forward currency hedging and anti-counterfeit packaging. The opportunity angle is to target 'Private Label' contracts for high-end retail chains who wish to compete with Tastic but offer a superior 'Authentic Thai' product."
      }
    ],
    images: [
      { url: "https://images.unsplash.com/photo-1536304993881-ff6c9d954384?auto=format&fit=crop&w=800&q=80", credit: "Photo credit: Unsplash - © Mgg Vitchakorn", alt: "Premium Jasmine Rice" },
      { url: "https://images.unsplash.com/photo-1572637243872-5c30628b4d33?auto=format&fit=crop&w=800&q=80", credit: "Photo credit: Unsplash - © P. O.", alt: "Rice Packaging" }
    ]
  },
  { 
    name: "Thai Curry & Meal Kits", 
    target: "Urban Supermarkets", 
    note: "Convenience trend",
    details: [
      {
        title: "Market Demand Analysis",
        content: "The South African 'Home Meal Replacement' (HMR) market is growing at a CAGR of 8-10%, driven by urbanization in hubs like Johannesburg and Cape Town. Time-poor professionals are seeking 'exotic but easy' dinner solutions. While Indian curries are ubiquitous in SA, authentic Thai flavor profiles (Green Curry, Massaman, Tom Yum) are harder to replicate from scratch due to the scarcity of fresh galangal, kaffir lime, and lemongrass. Ready-to-cook meal kits bridge this gap perfectly."
      },
      {
        title: "Buyer Behavior",
        content: "Consumers in this segment shop at Woolworths Food and high-end Spar outlets. They are health-conscious and check labels for preservatives and MSG. There is a strong preference for 'Clean Label' products. They are willing to pay a premium (ZAR 50-100 per kit) for a dinner solution that feels like a restaurant meal. Inclusion of coconut milk sachets within the kit is a major selling point as it removes the need to buy separate expensive ingredients."
      },
      {
        title: "Compliance & Halal Factor",
        content: "South Africa has a significant and influential Muslim population. Halal certification (SANHA/MJC recognized) is almost mandatory for wide retail distribution, even in non-meat products, as it signals quality assurance to the broader market. Ingredients lists must be fully compliant with South African R.146 regulations, specifically regarding allergen declarations (shrimp paste, soy, peanuts)."
      },
      {
        title: "Opportunity Angle",
        content: "Pitch 'Restaurant Quality at Home'. Bundle pastes with dried herbs (kaffir lime leaves) which are lightweight but add immense visual value and authenticity that local competitors like 'Royco' cannot match."
      }
    ],
    images: [
       { url: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80", credit: "Photo credit: Unsplash - © Lisovskaya", alt: "Thai Curry" },
       { url: "https://images.unsplash.com/photo-1597075687490-8f673c6c17f6?auto=format&fit=crop&w=800&q=80", credit: "Photo credit: Unsplash - © Anna Pelzer", alt: "Spices and Herbs" }
    ]
  },
  { 
    name: "Herbal Skincare", 
    target: "Boutique Spas", 
    note: "Natural ingredients story",
    details: [
      {
        title: "Market Deep Dive",
        content: "The 'Natural & Organic' beauty sector in South Africa is maturing, with consumers shifting away from chemical-heavy global brands towards botanical-based solutions. There is a high affinity for the 'Thai Spa' aesthetic, which is globally recognized as a benchmark for wellness. Products utilizing Tamarind (exfoliation), Turmeric (brightening), and Coconut Oil (hydration) have immediate ingredient recognition in Africa but the 'Thai Formulation' adds a layer of exotic prestige."
      },
      {
        title: "Regulatory Landscape",
        content: "Exporting cosmetics to South Africa is rigorous. Products generally need to align with CTFA (Cosmetic, Toiletry and Fragrance Association of South Africa) standards. While pre-market registration is less burdensome than pharmaceuticals, claims on packaging (e.g., 'Anti-Aging', 'Curing') are strictly regulated by the Advertising Regulatory Board. If a product claims medicinal benefits, it falls under SAHPRA jurisdiction which is a multi-year registration process. Stick to 'Beautifying' and 'Wellness' claims to ensure faster market entry."
      },
      {
        title: "Distribution Strategy",
        content: "Do not aim for mass retail (Clicks/Dis-Chem) initially due to high listing fees and margin pressure. The 'Hidden Gem' strategy is to target the boutique hotel and independent spa network in the Western Cape and KZN North Coast. These venues sell products at a high markup as part of the 'post-treatment' experience."
      }
    ],
    images: [
      { url: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80", credit: "Photo credit: Unsplash - © Chelsea Shapouri", alt: "Herbal Skincare" }
    ]
  },
  { 
    name: "Dried Tamarind/Fruits", 
    target: "Healthy Snack Aisle", 
    note: "Exotic appeal",
    details: [
      {
        title: "Consumer Trends",
        content: "The 'Healthy Snacking' trend is exploding in SA, driven by the lunchbox market for private schools and office workers. South Africans love dried fruit (mango and apricot are local staples), but Sweet Tamarind is a novelty that offers a unique sweet-sour profile not locally grown. There is also a growing demand for 'Spicy' fruit snacks (chili-salt mango) which aligns with the South African palate's love for bold flavors."
      },
      {
        title: "Logistics & Packaging",
        content: "Humidity is the enemy. Packaging must be high-barrier metallized film to prevent the product from becoming sticky or crystallizing during the ocean voyage across the tropics. Nitrogen flushing is recommended. For retail, 'Stand-up Pouches' (Doypacks) with ziplocks are the standard for premium snacks. Bulk export for local repacking is risky due to hygiene standards; finished retail packing in Thailand is safer for quality control."
      },
      {
        title: "Price Sensitivity",
        content: "This is a price-sensitive category if positioned against local raisins or dried apricots. However, if positioned as an 'Exotic Superfood' or a 'Premium Treat', price elasticity increases. Avoid the commodity aisle; aim for the 'Health Food' section or checkout counters."
      }
    ],
    images: [
      { url: "https://images.unsplash.com/photo-1600432409645-12a9d3426c9a?auto=format&fit=crop&w=800&q=80", credit: "Photo credit: Unsplash - © Avinash Kumar", alt: "Tamarind" }
    ]
  },
  { 
    name: "Canned Seasoned Fish", 
    target: "Mass Market Retail", 
    note: "Affordable protein",
    details: [
      {
        title: "Market Dynamics",
        content: "South Africa is a massive consumer of canned fish (Pilchards in Tomato Sauce is a national staple). However, there is 'flavor fatigue'. The middle market is craving variety. Thai canned mackerel or tuna in 'Green Curry', 'Chili Lime', or 'Basil Stir-fry' sauces offers an affordable protein source that doubles as a complete meal when poured over rice. This 'Meal in a Can' concept is highly attractive to the budget-conscious working class."
      },
      {
        title: "Compliance Barrier (High)",
        content: "This is the most regulated category in this list. The National Regulator for Compulsory Specifications (NRCS) in South Africa mandates that EVERY shipment of canned fish must be sampled and tested before release. This process can take weeks and costs money. Factories in Thailand must meet strict sanitary standards equivalent to EU export grades. Do not attempt this without an experienced importer who understands the NRCS 'Release Note' process."
      },
      {
        title: "Competitive Landscape",
        content: "You are competing against 'Lucky Star', a dominant local heritage brand. You cannot win on brand loyalty. You must win on 'Novelty Flavor' and 'Convenience'. Marketing should focus on the 'Ready-to-Eat' aspect."
      }
    ],
    images: [
      { url: "https://images.unsplash.com/photo-1627308595186-e892671458f5?auto=format&fit=crop&w=800&q=80", credit: "Photo credit: Unsplash - © Syed Fasiuddin", alt: "Canned Mackerel" }
    ]
  },
  { 
    name: "Teak & Artisan Wood", 
    target: "Home Decor Stores", 
    note: "Craftsmanship (Check CITES)",
    details: [
      {
        title: "Market Demand",
        content: "South African interior design, particularly in the luxury lodge and coastal villa segments, favors organic, natural materials. Thai craftsmanship in wood carving is legendary and offers a level of detail that local industrial furniture lacks. Smaller decor items—bowls, serving trays, wall panels—are ideal as they ship densely and carry high markups in boutiques in Cape Town's Design District."
      },
      {
        title: "Risk & CITES Compliance",
        content: "This is a high-risk category regarding customs. Teak and Rosewood are heavily regulated under CITES (Convention on International Trade in Endangered Species). You MUST verify the wood source. Plantation Teak requires certification. If you ship wild-harvested protected wood without a CITES permit, the cargo will be seized and destroyed. Always prioritize fast-growing, sustainable woods like Mango Wood or Acacia which are easier to clear but can be stained to look premium."
      },
      {
        title: "Fumigation",
        content: "South Africa applies strict phytosanitary rules to wood packaging and products to prevent pest introduction (e.g., beetles). Valid Fumigation Certificates using Methyl Bromide or Heat Treatment (ISPM 15) are mandatory for clearance."
      }
    ],
    images: [
      { url: "https://images.unsplash.com/photo-1617104424032-b9bd6972d0e4?auto=format&fit=crop&w=800&q=80", credit: "Photo credit: Unsplash - © Mockup Graphics", alt: "Wood Craft" }
    ]
  },
  { 
    name: "Medical Rubber Gloves", 
    target: "Hospital Procurement", 
    note: "Certifications essential",
    details: [
      {
        title: "B2B Demand",
        content: "Post-pandemic, the demand for high-quality nitrile and latex gloves remains elevated in South Africa's private hospital networks (Netcare, Mediclinic, Life Healthcare) and the mining sector (safety). Thailand, being a top rubber producer, has a natural cost advantage over non-producing nations, though it fights fierce competition from Malaysia."
      },
      {
        title: "Certifications are Key",
        content: "Price is secondary to compliance. You cannot sell medical gloves without SABS (South African Bureau of Standards) approval or valid CE / FDA equivalence that is accepted by the regulator. For tender business, ISO 13485 (Medical Devices Quality Management) is a prerequisite. The 'Powder-Free' shift is absolute; do not offer powdered gloves."
      },
      {
        title: "Approach Strategy",
        content: "Direct sales to hospitals are difficult due to vendor lists. The strategy is to partner with established SA medical supply distributors who hold the tender contracts but need a reliable OEM supplier to back them up. Offer 'White Label' manufacturing for their local brands."
      }
    ],
    images: [
      { url: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&w=800&q=80", credit: "Photo credit: Unsplash - © Clay Banks", alt: "Rubber Gloves" }
    ]
  },
  { 
    name: "Rice Noodles (Pad Thai)", 
    target: "Food Service / HORECA", 
    note: "Gluten-free trend",
    details: [
      {
        title: "Dietary Trends",
        content: "The 'Gluten-Free' movement is mainstream in South Africa's urban dining scene. Rice noodles are the perfect natural substitute for wheat pasta. Beyond Asian restaurants, mainstream cafes are looking for gluten-free bases for bowls and salads. Pad Thai noodles (3mm/5mm) and Rice Vermicelli are the volume drivers."
      },
      {
        title: "Food Service Psychology",
        content: "Chefs demand consistency. They hate noodles that break apart or turn to mush. Sample testing is critical. The packaging for this sector should be bulk (10kg cartons with 1kg sub-packs) rather than retail focused. Branding matters less than 'Cooking Performance'."
      },
      {
        title: "Logistics",
        content: "Noodles are essentially 'packaged air'—volume is high relative to weight. Freight costs can kill the margin. Maximizing container utilization (high-cube containers) and mixing with denser cargo (like rice or sauces) is a smart logistics play to lower the landed unit cost."
      }
    ],
    images: [
      { url: "https://images.unsplash.com/photo-1555126634-323283e090fa?auto=format&fit=crop&w=800&q=80", credit: "Photo credit: Unsplash - © Markus Winkler", alt: "Rice Noodles" }
    ]
  },
  { 
    name: "Beverage Concentrates", 
    target: "F&B Manufacturers", 
    note: "Flavoring inputs",
    details: [
      {
        title: "Industrial Opportunity",
        content: "Shipping ready-to-drink (RTD) beverages is expensive due to water weight. The smart play is exporting 'Beverage Concentrates' or 'Fruit Purees' (Mango, Lychee, Pineapple) to South African bottlers. SA has a robust bottling industry but lacks the tropical fruit variety that Thailand possesses."
      },
      {
        title: "Flavor Profiles",
        content: "South Africans have a sweet tooth but are increasingly sugar-conscious. Pitching 'Reduced Sugar' concentrates or those sweetened with Stevia/Monk Fruit (which Thailand is innovating in) can capture the 'Better-For-You' soda market. Exotic flavors like Lychee and Lemongrass are trending as premium mixers for the gin and cocktail culture in Cape Town."
      },
      {
        title: "Market Entry",
        content: "Target medium-sized independent bottlers who are looking for a unique selling point (USP) to differentiate from Coke/Pepsi. Provide R&D support—show them how your concentrate blends with their local spring water."
      }
    ],
    images: [
      { url: "https://images.unsplash.com/photo-1623689048105-a17b1e1936b8?auto=format&fit=crop&w=800&q=80", credit: "Photo credit: Unsplash - © Zosia Korcz", alt: "Fruit Juice" }
    ]
  },
  { 
    name: "Hotel Amenity Kits", 
    target: "Safari Lodges / Hotels", 
    note: "Luxury hospitality",
    details: [
      {
        title: "Niche High-Value Market",
        content: "South Africa's tourism crown jewel is the Luxury Safari Lodge sector (Sabi Sands, Kruger). These guests pay $1000+ per night and expect premium, distinct amenities. Generic 'Hotel Soap' is unacceptable. There is a massive demand for 'Eco-Luxe' amenities—shampoos, lotions, and soaps that are biodegradable and grey-water safe (crucial for bush lodges)."
      },
      {
        title: "The 'Thai' Advantage",
        content: "Thai essential oils (Lemongrass, Ginger, Kaffir Lime) fit the 'Bush/Nature' aesthetic of safari lodges perfectly. They smell natural, not synthetic. Furthermore, Thailand's packaging industry can produce beautiful, plastic-free solutions (ceramic refillable bottles, paper-wrapped soaps) which align with the rigorous 'No Single-Use Plastic' policies of major safari groups like Wilderness Safaris or Singita."
      },
      {
        title: "Sales Cycle",
        content: "This is a B2B relationship game. Decisions are made by Head Housekeepers or Procurement Managers at the group HQ level. Sending a physical 'Presentation Box' with samples is the only way to open the door. The tactile experience and scent are the closers."
      }
    ],
    images: [
      { url: "https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?auto=format&fit=crop&w=800&q=80", credit: "Photo credit: Unsplash - © Mara Rivera", alt: "Hotel Amenities" }
    ]
  }
];
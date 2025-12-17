import { Language } from "./types";

interface TranslationStructure {
  nav: {
    home: string;
    summary: string;
    matrix: string;
    pigeon: string;
    strategy: string;
    logistics: string;
    directory: string;
  };
  hero: {
    subtitle: string;
    title: string;
    desc: string;
    cta: string;
    sourcing: string;
    sourcing_desc: string;
    logistics: string;
    logistics_desc: string;
    compliance: string;
    compliance_desc: string;
  };
  summary: {
    title: string;
    intro_title: string;
    intro_desc: string;
    chart_title: string;
    chart_subtitle: string;
    pillars_title: string;
    future_title: string;
  };
  matrix: {
    title: string;
    subtitle: string;
    info_box: string;
    categories: string;
    tab_overview: string;
    tab_buyers: string;
    high_potential: string;
    export_ready: string;
    comp_adv: string;
    risks: string;
    active_leads: string;
    leads_found: string;
    contact_intel: string;
  };
  pigeon: {
    tag: string;
    title: string;
    subtitle: string;
    intro_quote: string;
    supply_title: string;
    price_title: string;
    deep_dive: string;
    directory_title: string;
  };
  strategy: {
    title: string;
    subtitle: string;
    roadmap_title: string;
    hidden_gems_title: string;
    calculator_title: string;
    calculator_desc: string;
    download_btn: string;
    generating: string;
    support_title: string;
    support_desc: string;
  };
  logistics: {
    title: string;
    subtitle: string;
    tab_routes: string;
    tab_regs: string;
    insight: string;
    pain_points: string;
    est_cost: string;
    transit: string;
    critical_action: string;
  };
  directory: {
    title: string;
    subtitle: string;
    sec_exporters: string;
    sec_logistics: string;
    sec_buyers: string;
  }
}

export const translations: Record<Language, TranslationStructure> = {
  en: {
    nav: {
      home: "Home",
      summary: "Market Intel",
      matrix: "Product Matrix",
      pigeon: "Commodity Spotlight",
      strategy: "Strategy Tools",
      logistics: "Logistics & Regs",
      directory: "Directory",
    },
    hero: {
      subtitle: "Strategic Trade Synergy: 2025-2030",
      title: "The Thailand-Africa Trade Corridor",
      desc: "A comprehensive operational blueprint for trade intermediaries. Connecting the 'Kitchen of the World' and the 'Detroit of Asia' with the high-growth markets of the Global South.",
      cta: "Access Intelligence Report",
      sourcing: "Sourcing",
      sourcing_desc: "Industrial Surplus",
      logistics: "Logistics",
      logistics_desc: "Route Optimization",
      compliance: "Compliance",
      compliance_desc: "Regulatory Intel"
    },
    summary: {
      title: "Macro-Economic Intelligence",
      intro_title: "The Pivot to the Global South",
      intro_desc: "Thailand's economic engine is at an inflection point. With 2024-2025 growth projected at a modest 1.8-2.5%, manufacturers are actively seeking 'secondary markets'.",
      chart_title: "Bilateral Trade Data",
      chart_subtitle: "2024/2025 Estimates",
      pillars_title: "Core Strategic Pillars",
      future_title: "Future Outlook: 2025 Trends"
    },
    matrix: {
      title: "Trade Intelligence Matrix",
      subtitle: "Detailed analysis of high-impact categories, matching Thai supply with specific African demand dynamics.",
      info_box: "This matrix highlights Thai-origin products that are export-ready and highly competitive for the Southern African market.",
      categories: "Categories",
      tab_overview: "Market Overview",
      tab_buyers: "Buyer Intel & Leads",
      high_potential: "High Potential",
      export_ready: "Export Ready",
      comp_adv: "Competitive Advantages",
      risks: "Risks & Barriers",
      active_leads: "Active Buyer Leads",
      leads_found: "Leads Found",
      contact_intel: "Contact Intel"
    },
    pigeon: {
      tag: "Special Commodity Report",
      title: "Pigeon Peas",
      subtitle: "Global Origin Analysis",
      intro_quote: "This report dissects the granular import dynamics, revealing a path for 'Origin Sourcing' that bypasses traditional middlemen.",
      supply_title: "Supply Chain Dynamics",
      price_title: "Price Structure",
      deep_dive: "Deep Dive: Thailand Import Analysis",
      directory_title: "Thailand Buyer Directory"
    },
    strategy: {
      title: "Execution Strategy",
      subtitle: "The 'Middle Person' is not a broker; they are a risk manager. This section provides the tools to bridge the gap with data and costing precision.",
      roadmap_title: "Operational Roadmap",
      hidden_gems_title: "High Margin / Low Competition",
      calculator_title: "Landed Cost Calculator",
      calculator_desc: "Estimating landed cost into Durban/Apapa including Freight, Duty, and Margin.",
      download_btn: "Download Full Blueprint",
      generating: "Generating PDF...",
      support_title: "Trade Desk Support",
      support_desc: "Contact our team for personalized market entry strategies and B2B matchmaking."
    },
    logistics: {
      title: "Logistics & Regulatory Intelligence",
      subtitle: "Mastering the route to market and compliance landscape is the difference between profit and seizure.",
      tab_routes: "Shipping Routes",
      tab_regs: "Regulatory Cheat Sheet",
      insight: "Insight",
      pain_points: "Pain Points",
      est_cost: "Est. Cost (20ft)",
      transit: "Transit",
      critical_action: "Critical Action"
    },
    directory: {
      title: "Business Directory & Network",
      subtitle: "A curated network of verified entities driving the Thailand-Africa trade corridor.",
      sec_exporters: "Verified Thai Exporters",
      sec_logistics: "Logistics & Inspection Partners",
      sec_buyers: "Thai Buyers (Reverse Trade)"
    }
  },
  fr: {
    nav: {
      home: "Accueil",
      summary: "Info Marché",
      matrix: "Matrice Produits",
      pigeon: "Focus Matières",
      strategy: "Outils Stratégiques",
      logistics: "Logistique & Lois",
      directory: "Annuaire",
    },
    hero: {
      subtitle: "Synergie Commerciale Stratégique : 2025-2030",
      title: "Le Corridor Commercial Thaïlande-Afrique",
      desc: "Un plan opérationnel complet pour les intermédiaires commerciaux. Relier la 'Cuisine du Monde' et le 'Détroit de l'Asie' aux marchés à forte croissance du Sud Global.",
      cta: "Accéder au Rapport",
      sourcing: "Approvisionnement",
      sourcing_desc: "Surplus Industriel",
      logistics: "Logistique",
      logistics_desc: "Optimisation des Routes",
      compliance: "Conformité",
      compliance_desc: "Veille Réglementaire"
    },
    summary: {
      title: "Intelligence Macro-Économique",
      intro_title: "Le Pivot vers le Sud Global",
      intro_desc: "Le moteur économique thaïlandais est à un tournant. Avec une croissance 2024-2025 projetée à 1,8-2,5%, les fabricants recherchent activement des 'marchés secondaires'.",
      chart_title: "Données Commerciales Bilatérales",
      chart_subtitle: "Estimations 2024/2025",
      pillars_title: "Piliers Stratégiques",
      future_title: "Perspectives 2025"
    },
    matrix: {
      title: "Matrice d'Intelligence Commerciale",
      subtitle: "Analyse détaillée des catégories à fort impact, alignant l'offre thaïlandaise avec la demande africaine.",
      info_box: "Cette matrice met en évidence les produits d'origine thaïlandaise prêts à l'exportation et compétitifs pour le marché sud-africain.",
      categories: "Catégories",
      tab_overview: "Aperçu du Marché",
      tab_buyers: "Pistes d'Acheteurs",
      high_potential: "Fort Potentiel",
      export_ready: "Prêt à l'Export",
      comp_adv: "Avantages Compétitifs",
      risks: "Risques et Barrières",
      active_leads: "Pistes Acheteurs Actifs",
      leads_found: "Pistes Trouvées",
      contact_intel: "Info Contact"
    },
    pigeon: {
      tag: "Rapport Spécial : Matières Premières",
      title: "Pois d'Angole",
      subtitle: "Analyse d'Origine Mondiale",
      intro_quote: "Ce rapport analyse la dynamique des importations, révélant une voie pour un 'Sourcing à l'Origine' contournant les intermédiaires traditionnels.",
      supply_title: "Dynamique de la Supply Chain",
      price_title: "Structure des Prix",
      deep_dive: "Analyse Approfondie : Importation Thaïlande",
      directory_title: "Répertoire des Acheteurs Thaïlandais"
    },
    strategy: {
      title: "Stratégie d'Exécution",
      subtitle: "L'intermédiaire n'est pas un courtier, c'est un gestionnaire de risques. Cette section fournit les outils pour combler le fossé avec précision.",
      roadmap_title: "Feuille de Route Opérationnelle",
      hidden_gems_title: "Marge Élevée / Faible Concurrence",
      calculator_title: "Calculateur de Coût Rendu",
      calculator_desc: "Estimation du coût rendu à Durban/Apapa incluant Fret, Droits et Marge.",
      download_btn: "Télécharger le Plan Complet",
      generating: "Génération PDF...",
      support_title: "Support Commercial",
      support_desc: "Contactez notre équipe pour des stratégies d'entrée sur le marché personnalisées."
    },
    logistics: {
      title: "Logistique & Intelligence Réglementaire",
      subtitle: "Maîtriser la route vers le marché et la conformité est la différence entre profit et saisie douanière.",
      tab_routes: "Routes Maritimes",
      tab_regs: "Fiche Réglementaire",
      insight: "Aperçu",
      pain_points: "Points Critiques",
      est_cost: "Coût Est. (20pd)",
      transit: "Transit",
      critical_action: "Action Critique"
    },
    directory: {
      title: "Annuaire & Réseau d'Affaires",
      subtitle: "Un réseau curaté d'entités vérifiées pilotant le corridor commercial Thaïlande-Afrique.",
      sec_exporters: "Exportateurs Thaïlandais Vérifiés",
      sec_logistics: "Partenaires Logistiques & Inspection",
      sec_buyers: "Acheteurs Thaïlandais (Commerce Inversé)"
    }
  },
  sw: {
    nav: {
      home: "Nyumbani",
      summary: "Taarifa za Soko",
      matrix: "Muundo wa Bidhaa",
      pigeon: "Anga la Bidhaa",
      strategy: "Zana za Mikakati",
      logistics: "Usafirishaji & Sheria",
      directory: "Orodha ya Biashara",
    },
    hero: {
      subtitle: "Ushirikiano wa Kimkakati wa Biashara: 2025-2030",
      title: "Ukorido wa Biashara wa Thailand-Afrika",
      desc: "Mpango kamili wa uendeshaji kwa waunganishaji wa biashara. Kuunganisha 'Jiko la Dunia' na 'Detroit ya Asia' na masoko yanayokua kwa kasi ya Kusini mwa Dunia.",
      cta: "Pata Ripoti ya Kijasusi",
      sourcing: "Utafutaji Bidhaa",
      sourcing_desc: "Ziada ya Viwanda",
      logistics: "Usafirishaji",
      logistics_desc: "Uboreshaji wa Njia",
      compliance: "Uzingatiaji",
      compliance_desc: "Taarifa za Sheria"
    },
    summary: {
      title: "Ujasusi wa Uchumi Mkuu",
      intro_title: "Mwelekeo kwa Kusini ya Dunia",
      intro_desc: "Uchumi wa Thailand uko katika hatua ya mabadiliko. Pamoja na ukuaji wa 2024-2025 kukadiriwa kuwa 1.8-2.5%, watengenezaji wanatafuta 'masoko ya pili'.",
      chart_title: "Data ya Biashara ya Pande Mbili",
      chart_subtitle: "Makadirio ya 2024/2025",
      pillars_title: "Nguzo Kuu za Kimkakati",
      future_title: "Mtazamo wa Baadaye: 2025"
    },
    matrix: {
      title: "Tumia Ujasusi wa Biashara",
      subtitle: "Uchambuzi wa kina wa bidhaa zenye athari kubwa, ukilinganisha usambazaji wa Thailand na mahitaji maalum ya Afrika.",
      info_box: "Jedwali hili linaangazia bidhaa zenye asili ya Thailand ambazo ziko tayari kusafirishwa na zenye ushindani mkubwa kwa soko la Kusini mwa Afrika.",
      categories: "Aina",
      tab_overview: "Tathmini ya Soko",
      tab_buyers: "Taarifa za Wanunuzi",
      high_potential: "Uwezo wa Juu",
      export_ready: "Tayari Kusafirishwa",
      comp_adv: "Faida za Ushindani",
      risks: "Hatari na Vizuizi",
      active_leads: "Wanunuzi Hai",
      leads_found: "Matokeo",
      contact_intel: "Mawasiliano"
    },
    pigeon: {
      tag: "Ripoti Maalum ya Bidhaa",
      title: "Mbaazi",
      subtitle: "Uchambuzi wa Asili ya Dunia",
      intro_quote: "Ripoti hii inachambua mienendo ya uagizaji, ikifunua njia ya 'Utafutaji wa Asili' ambayo inapita wa kati wa jadi.",
      supply_title: "Mienendo ya Ugavi",
      price_title: "Muundo wa Bei",
      deep_dive: "Uchambuzi wa Kina: Uagizaji Thailand",
      directory_title: "Orodha ya Wanunuzi Thailand"
    },
    strategy: {
      title: "Mkakati wa Utekelezaji",
      subtitle: "Mtu wa Kati si dalali; ni meneja wa hatari. Sehemu hii inatoa zana za kuziba pengo kwa kutumia data na usahihi wa gharama.",
      roadmap_title: "Ramani ya Uendeshaji",
      hidden_gems_title: "Faida Kubwa / Ushindani Mdogo",
      calculator_title: "Kikokotoo cha Gharama",
      calculator_desc: "Kukadiria gharama ya kufika Durban/Apapa ikijumuisha Usafirishaji, Ushuru na Faida.",
      download_btn: "Pakua Mpango Kamili",
      generating: "Inatengeneza PDF...",
      support_title: "Msaada wa Biashara",
      support_desc: "Wasiliana na timu yetu kwa mikakati maalum ya kuingia sokoni."
    },
    logistics: {
      title: "Ujasusi wa Usafirishaji na Sheria",
      subtitle: "Kumudu njia ya soko na uzingatiaji wa sheria ndio tofauti kati ya faida na kupoteza mizigo.",
      tab_routes: "Njia za Meli",
      tab_regs: "Muongozo wa Sheria",
      insight: "Ufahamu",
      pain_points: "Changamoto",
      est_cost: "Gharama (20ft)",
      transit: "Muda wa Kusafiri",
      critical_action: "Hatua Muhimu"
    },
    directory: {
      title: "Orodha ya Biashara & Mtandao",
      subtitle: "Mtandao uliothibitishwa wa mashirika yanayoendesha ukorido wa biashara wa Thailand-Afrika.",
      sec_exporters: "Wauzaji wa Thailand Waliothibitishwa",
      sec_logistics: "Wadau wa Usafirishaji & Ukaguzi",
      sec_buyers: "Wanunuzi wa Thailand"
    }
  },
  pt: {
    nav: {
      home: "Início",
      summary: "Info Mercado",
      matrix: "Matriz de Produtos",
      pigeon: "Destaque Commodities",
      strategy: "Estratégia",
      logistics: "Logística e Regulação",
      directory: "Diretório",
    },
    hero: {
      subtitle: "Sinergia Comercial Estratégica: 2025-2030",
      title: "O Corredor Comercial Tailândia-África",
      desc: "Um plano operacional abrangente para intermediários comerciais. Conectando a 'Cozinha do Mundo' e a 'Detroit da Ásia' aos mercados de alto crescimento do Sul Global.",
      cta: "Acessar Relatório",
      sourcing: "Abastecimento",
      sourcing_desc: "Excedente Industrial",
      logistics: "Logística",
      logistics_desc: "Otimização de Rotas",
      compliance: "Conformidade",
      compliance_desc: "Inteligência Regulatória"
    },
    summary: {
      title: "Inteligência Macroeconômica",
      intro_title: "O Pivô para o Sul Global",
      intro_desc: "O motor econômico da Tailândia está em um ponto de inflexão. Com o crescimento de 2024-2025 projetado em modestos 1,8-2,5%, os fabricantes buscam ativamente 'mercados secundários'.",
      chart_title: "Dados Comerciais Bilaterais",
      chart_subtitle: "Estimativas 2024/2025",
      pillars_title: "Pilares Estratégicos",
      future_title: "Perspectivas Futuras: 2025"
    },
    matrix: {
      title: "Matriz de Inteligência Comercial",
      subtitle: "Análise detalhada de categorias de alto impacto, alinhando a oferta tailandesa com a demanda africana específica.",
      info_box: "Esta matriz destaca produtos de origem tailandesa prontos para exportação e altamente competitivos para o mercado da África Austral.",
      categories: "Categorias",
      tab_overview: "Visão Geral",
      tab_buyers: "Dados de Compradores",
      high_potential: "Alto Potencial",
      export_ready: "Pronto p/ Exportar",
      comp_adv: "Vantagens Competitivas",
      risks: "Riscos e Barreiras",
      active_leads: "Leads Ativos",
      leads_found: "Leads Encontrados",
      contact_intel: "Contato"
    },
    pigeon: {
      tag: "Relatório Especial de Commodities",
      title: "Feijão Guandu",
      subtitle: "Análise de Origem Global",
      intro_quote: "Este relatório disseca a dinâmica de importação, revelando um caminho para 'Sourcing na Origem' que ignora os intermediários tradicionais.",
      supply_title: "Dinâmica da Cadeia de Suprimentos",
      price_title: "Estrutura de Preços",
      deep_dive: "Análise Profunda: Importação Tailândia",
      directory_title: "Diretório de Compradores"
    },
    strategy: {
      title: "Estratégia de Execução",
      subtitle: "O intermediário não é um corretor; é um gestor de riscos. Esta seção fornece as ferramentas para preencher a lacuna com dados e precisão de custos.",
      roadmap_title: "Roteiro Operacional",
      hidden_gems_title: "Margem Alta / Baixa Concorrência",
      calculator_title: "Calculadora de Custo",
      calculator_desc: "Estimativa de custo posto em Durban/Apapa incluindo Frete, Impostos e Margem.",
      download_btn: "Baixar Plano Completo",
      generating: "Gerando PDF...",
      support_title: "Suporte Comercial",
      support_desc: "Entre em contato com nossa equipe para estratégias personalizadas de entrada no mercado."
    },
    logistics: {
      title: "Logística e Inteligência Regulatória",
      subtitle: "Dominar a rota para o mercado e o cenário de conformidade é a diferença entre lucro e apreensão.",
      tab_routes: "Rotas de Navegação",
      tab_regs: "Guia Regulatório",
      insight: "Insight",
      pain_points: "Pontos Críticos",
      est_cost: "Custo Est. (20 pés)",
      transit: "Trânsito",
      critical_action: "Ação Crítica"
    },
    directory: {
      title: "Diretório de Negócios e Rede",
      subtitle: "Uma rede curada de entidades verificadas que impulsionam o corredor comercial Tailândia-África.",
      sec_exporters: "Exportadores Tailandeses",
      sec_logistics: "Parceiros Logísticos",
      sec_buyers: "Compradores Tailandeses"
    }
  },
  ar: {
    nav: {
      home: "الرئيسية",
      summary: "معلومات السوق",
      matrix: "مصفوفة المنتجات",
      pigeon: "تسليط الضوء على السلع",
      strategy: "أدوات الاستراتيجية",
      logistics: "اللوجستيات والأنظمة",
      directory: "الدليل التجاري",
    },
    hero: {
      subtitle: "التآزر التجاري الاستراتيجي: 2025-2030",
      title: "الممر التجاري بين تايلاند وأفريقيا",
      desc: "مخطط تشغيلي شامل للوسطاء التجاريين. ربط 'مطبخ العالم' و'ديترويت آسيا' بالأسواق عالية النمو في الجنوب العالمي.",
      cta: "الوصول إلى تقرير الاستخبارات",
      sourcing: "توفير المصادر",
      sourcing_desc: "الفائض الصناعي",
      logistics: "اللوجستيات",
      logistics_desc: "تحسين المسار",
      compliance: "الامتثال",
      compliance_desc: "المعلومات التنظيمية"
    },
    summary: {
      title: "استخبارات الاقتصاد الكلي",
      intro_title: "التحول إلى الجنوب العالمي",
      intro_desc: "محرك الاقتصاد التايلاندي في نقطة تحول. مع توقع نمو متواضع بنسبة 1.8-2.5٪ لعام 2024-2025، يبحث المصنعون بنشاط عن 'أسواق ثانوية'.",
      chart_title: "بيانات التجارة الثنائية",
      chart_subtitle: "تقديرات 2024/2025",
      pillars_title: "الركائز الاستراتيجية الأساسية",
      future_title: "توقعات المستقبل: 2025"
    },
    matrix: {
      title: "مصفوفة الاستخبارات التجارية",
      subtitle: "تحليل مفصل للفئات عالية التأثير، ومطابقة العرض التايلاندي مع ديناميكيات الطلب الأفريقي المحددة.",
      info_box: "تسلط هذه المصفوفة الضوء على المنتجات ذات الأصل التايلاندي الجاهزة للتصدير والتي تتمتع بقدرة تنافسية عالية لأسواق جنوب إفريقيا.",
      categories: "الفئات",
      tab_overview: "نظرة عامة على السوق",
      tab_buyers: "معلومات المشترين",
      high_potential: "إمكانات عالية",
      export_ready: "جاهز للتصدير",
      comp_adv: "المزايا التنافسية",
      risks: "المخاطر والعوائق",
      active_leads: "العملاء المحتملون",
      leads_found: "تم العثور عليهم",
      contact_intel: "معلومات الاتصال"
    },
    pigeon: {
      tag: "تقرير خاص بالسلع",
      title: "البازلاء الحمامة",
      subtitle: "تحليل المنشأ العالمي",
      intro_quote: "يفصل هذا التقرير ديناميكيات الاستيراد الدقيقة، ويكشف عن مسار لـ 'توفير المصادر من المنشأ' يتجاوز الوسطاء التقليديين.",
      supply_title: "ديناميكيات سلسلة التوريد",
      price_title: "هيكل الأسعار",
      deep_dive: "تحليل عميق: استيراد تايلاند",
      directory_title: "دليل المشترين في تايلاند"
    },
    strategy: {
      title: "استراتيجية التنفيذ",
      subtitle: "الشخص الوسيط ليس سمسارًا؛ بل هو مدير مخاطر. يوفر هذا القسم الأدوات لسد الفجوة بالبيانات ودقة التكلفة.",
      roadmap_title: "خارطة الطريق التشغيلية",
      hidden_gems_title: "هامش ربح مرتفع / منافسة منخفضة",
      calculator_title: "حاسبة التكلفة الإجمالية",
      calculator_desc: "تقدير التكلفة الإجمالية إلى ديربان/أبابا بما في ذلك الشحن والرسوم والهامش.",
      download_btn: "تنزيل المخطط الكامل",
      generating: "جاري إنشاء PDF...",
      support_title: "دعم المكتب التجاري",
      support_desc: "اتصل بفريقنا للحصول على استراتيجيات دخول السوق المخصصة."
    },
    logistics: {
      title: "الاستخبارات اللوجستية والتنظيمية",
      subtitle: "إتقان الطريق إلى السوق ومشهد الامتثال هو الفرق بين الربح والمصادرة.",
      tab_routes: "طرق الشحن",
      tab_regs: "ورقة الغش التنظيمية",
      insight: "رؤية",
      pain_points: "نقاط الألم",
      est_cost: "التكلفة التقديرية (20 قدم)",
      transit: "العبور",
      critical_action: "إجراء حاسم"
    },
    directory: {
      title: "دليل الأعمال والشبكة",
      subtitle: "شبكة من الكيانات الموثقة التي تقود الممر التجاري بين تايلاند وأفريقيا.",
      sec_exporters: "المصدرون التايلانديون الموثقون",
      sec_logistics: "شركاء اللوجستيات والتفتيش",
      sec_buyers: "المشترون التايلانديون (التجارة العكسية)"
    }
  }
};

export const t = (lang: Language, section: keyof TranslationStructure, key: string): string => {
  return (translations[lang][section] as any)?.[key] || (translations['en'][section] as any)?.[key] || key;
};
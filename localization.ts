import { Language } from "./types";

interface TranslationStructure {
  nav: {
    home: string;
    summary: string;
    matrix: string;
    pigeon: string;
    strategy: string;
    logistics: string;
    vetting: string;
    faq: string;
  };
  hero: {
    subtitle: string;
    title: string;
    desc: string;
    cta: string;
    process_1: string;
    process_1_desc: string;
    process_2: string;
    process_2_desc: string;
    process_3: string;
    process_3_desc: string;
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
    tab_archetypes: string;
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
    intro_summary: string;
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
  vetting: {
    title: string;
    subtitle: string;
    sec_audit: string;
    sec_matching: string;
    sec_confidential: string;
  };
  faq: {
    title: string;
    subtitle: string;
  }
}

export const translations: Record<Language, TranslationStructure> = {
  en: {
    nav: {
      home: "Home",
      summary: "Corridor Intel",
      matrix: "Supply Matrix",
      pigeon: "Sourcing Focus",
      strategy: "Process Framework",
      logistics: "Corridor Management",
      vetting: "Vetting Portfolio",
      faq: "Trade FAQ",
    },
    hero: {
      subtitle: "B2B Trade Facilitation & Documentation Governance",
      title: "How to Source from Thailand for Africa | B2B Sourcing",
      desc: "AfricanThaiTrade Nexus is an institutional intermediary specializing in Thailand Africa trade, business matching, and import documentation. We simplify sourcing from Thailand for African importers through rigorous vetting and supply chain corridor management.",
      cta: "Initiate Matching Request",
      process_1: "1. Vetting",
      process_1_desc: "Manufacturer Audit",
      process_2: "2. Matching",
      process_2_desc: "Institutional Linking",
      process_3: "3. Execution",
      process_3_desc: "Document Governance"
    },
    summary: {
      title: "Strategic Corridor Intelligence: Thailand-Africa",
      intro_title: "2025 Trade Framework",
      intro_desc: "Our nexus orchestrates high-value Africa Asia trade corridors by identifying verified supply-demand clusters privately. We prioritize supply-chain resilience and AfCFTA trade facilitation, supporting regional hubs like Durban, Mombasa, and Lagos.",
      chart_title: "Thailand-Africa Trade Flow",
      chart_subtitle: "Q1-Q2 2025 Performance Data",
      pillars_title: "B2B Governance Pillars",
      future_title: "Global South Trade Outlook"
    },
    matrix: {
      title: "Thai-African Supply Matrix",
      subtitle: "Technical analysis of high-demand Thai products for African importers, cooperatives, and government procurement. Optimizing B2B trade facilitation for food, tech, and industrial polymers.",
      info_box: "Explore sectors where we provide private vetting and regulatory coordination for institutional partners.",
      categories: "Sector Portfolios",
      tab_overview: "Market Logic",
      tab_archetypes: "Buyer Archetypes",
      high_potential: "Strategic Sourcing",
      export_ready: "Compliance Verified",
      comp_adv: "Supply Edge",
      risks: "Corridor Barriers",
      active_leads: "Open Requisitions",
      leads_found: "Vetted Archetypes",
      contact_intel: "Partnership Desk"
    },
    pigeon: {
      tag: "Commodity Arbitrage Analysis",
      title: "Legume Sourcing Optimization",
      subtitle: "Thailand-Africa Bidirectional Logic",
      intro_summary: "Thailand’s pigeon pea landscape is transitioning from experimental niche to strategic alternative. Current relevance is driven by the search for sustainable, non-GMO protein sources for the country’s advanced food processing and animal feed sectors. While domestic production remains limited, high-level opportunities exist in counter-cyclical sourcing from East Africa to stabilize Thai processing capacity, though constraints include complex phytosanitary protocols and traditional supply chain rigidity.",
      intro_quote: "Maximizing value by identifying counter-cyclical sourcing windows between East African production and Thai processing capacity.",
      supply_title: "Resilience Strategy",
      price_title: "Cost Modeling",
      deep_dive: "Trade Intelligence Architecture",
      directory_title: "Institutional Partners"
    },
    strategy: {
      title: "Execution Process: Thailand to Africa",
      subtitle: "Bridging cross-border trade gaps through rigorous deal structuring, documentation governance, and risk mitigation.",
      roadmap_title: "Facilitation Lifecycle",
      hidden_gems_title: "Strategic Niche Sectors",
      calculator_title: "Landed Cost Modeling",
      calculator_desc: "Estimate industrial landing costs including facilitation and compliance fees for African ports.",
      download_btn: "Download Service Portfolio",
      generating: "Compiling Portfolio...",
      support_title: "Institutional Trade Desk",
      support_desc: "Engage our corridor experts for bespoke deal structuring."
    },
    logistics: {
      title: "Corridor Management & African Compliance",
      subtitle: "Coordinating multimodal logistics (Durban, Mombasa, Lagos) and documentation to navigate global shipping disruptions.",
      tab_routes: "Strategic Routes",
      tab_regs: "Documentation Governance",
      insight: "Matching Logic",
      pain_points: "Risk Factors",
      est_cost: "Value Benchmarks",
      transit: "Lead Time",
      critical_action: "Compliance Action"
    },
    vetting: {
      title: "Bespoke Vetting Framework",
      subtitle: "Private, multi-tier auditing system for manufacturers in the Thailand-Africa corridor.",
      sec_audit: "Manufacturer Auditing",
      sec_matching: "Institutional Matching",
      sec_confidential: "Confidential Deal Flow"
    },
    faq: {
      title: "Trade FAQ & Answer Engine",
      subtitle: "Expert answers to the most common questions about importing from Thailand to Africa."
    }
  },
  fr: {
    nav: {
      home: "Accueil",
      summary: "Infos Corridor",
      matrix: "Matrice d'Offre",
      pigeon: "Sourcing Focus",
      strategy: "Processus",
      logistics: "Gestion de Corridor",
      vetting: "Vérification",
      faq: "FAQ Commerce",
    },
    hero: {
      subtitle: "Facilitation B2B et Gouvernance Documentaire",
      title: "Importation depuis la Thaïlande vers l'Afrique | Sourcing B2B",
      desc: "AfricanThaiTrade Nexus est un intermédiaire commercial Afrique Asie spécialisé dans le sourcing en Thaïlande et la facilitation du commerce international. Nous simplifions les échanges pour les importateurs africains via un audit rigoureux et une conformité douanière optimale.",
      cta: "Demander un Matching",
      process_1: "1. Audit",
      process_1_desc: "Audit Fabricant",
      process_2: "2. Matching",
      process_2_desc: "Lien Institutionnel",
      process_3: "3. Exécution",
      process_3_desc: "Gouvernance Documentaire"
    },
    summary: {
      title: "Intelligence de Corridor: Thaïlande-Afrique",
      intro_title: "Cadre Commercial 2025",
      intro_desc: "Nous orchestrons des flux commerciaux à haute valeur sur le corridor commercial Afrique Asie. Nous soutenons la ZLECAF (AfCFTA) et les hubs régionaux comme Abidjan, Dakar et Douala via une chaîne logistique optimisée.",
      chart_title: "Flux Commerciaux Thaïlande-Afrique",
      chart_subtitle: "Données de Performance 2025",
      pillars_title: "Piliers de Gouvernance",
      future_title: "Perspectives Sud-Sud"
    },
    matrix: {
      title: "Matrice d'Offre Thaïlande-Afrique",
      subtitle: "Analyse technique des exportations thaïlandaises pour les importateurs africains et les achats institutionnels. Optimisation de la facilitation des échanges pour l'agro-industrie et le secteur industriel.",
      info_box: "Découvrez les secteurs où nous assurons la coordination réglementaire.",
      categories: "Portefeuilles Sectoriels",
      tab_overview: "Logique Marché",
      tab_archetypes: "Archétypes d'Acheteurs",
      high_potential: "Sourcing Stratégique",
      export_ready: "Conformité Vérifiée",
      comp_adv: "Avantage Offre",
      risks: "Barrières Corridor",
      active_leads: "Requêtes Ouvertes",
      leads_found: "Archétypes Vérifiés",
      contact_intel: "Bureau Partenariat"
    },
    pigeon: {
      tag: "Arbitrage des Matières Premières",
      title: "Optimisation du Sourcing de Protéines",
      subtitle: "Thaïlande-Afrique",
      intro_summary: "Le paysage thaïlandais des pois d'Angole passe d'une niche expérimentale à une alternative stratégique. La pertinence actuelle est portée par la recherche de sources de protéines durables et sans OGM pour les secteurs de la transformation alimentaire et de l'alimentation animale. Bien que la production locale reste limitée, des opportunités existent dans l'approvisionnement contre-cyclique en Afrique de l'Est.",
      intro_quote: "Maximiser la valeur en identifiant des fenêtres de sourcing contre-cycliques.",
      supply_title: "Stratégie de Résilience",
      price_title: "Modélisation des Coûts",
      deep_dive: "Architecture de l'Intelligence Commerciale",
      directory_title: "Partenaires Institutionnels"
    },
    strategy: {
      title: "Processus d'Exécution: Thaïlande vers Afrique",
      subtitle: "Combler les lacunes par une structuration rigoureuse et une gouvernance documentaire.",
      roadmap_title: "Cycle de Facilitation",
      hidden_gems_title: "Niches Stratégiques",
      calculator_title: "Modélisation Coût Rendu",
      calculator_desc: "Estimer les coûts industriels incluant les frais de conformité pour les ports africains.",
      download_btn: "Télécharger Portfolio",
      generating: "Compilation...",
      support_title: "Bureau de Trading",
      support_desc: "Contactez nos experts pour la structuration de deals."
    },
    logistics: {
      title: "Gestion de Corridor et Conformité Africaine",
      subtitle: "Coordination logistique multimodale et documentation face aux perturbations mondiales.",
      tab_routes: "Routes Stratégiques",
      tab_regs: "Gouvernance Documentaire",
      insight: "Logique de Matching",
      pain_points: "Facteurs de Risque",
      est_cost: "Benchmarks Valeur",
      transit: "Délai de Transit",
      critical_action: "Action de Conformité"
    },
    vetting: {
      title: "Cadre de Vérification Sur Mesure",
      subtitle: "Système d'audit privé pour les fabricants du corridor Thaïlande-Afrique.",
      sec_audit: "Audit Fabricant",
      sec_matching: "Matching Institutionnel",
      sec_confidential: "Flux Confidentiel"
    },
    faq: {
      title: "FAQ Commerce et Réponses AI",
      subtitle: "Réponses expertes aux questions courantes sur l'importation de Thaïlande vers l'Afrique."
    }
  },
  sw: {
    nav: {
      home: "Nyumbani",
      summary: "Taarifa za Ukorido",
      matrix: "Jedwali la Bidhaa",
      pigeon: "Utafutaji Maalum",
      strategy: "Mfumo wa Utekelezaji",
      logistics: "Usimamizi wa Ukorido",
      vetting: "Orodha ya Uhakiki",
      faq: "Maswali ya Biashara",
    },
    hero: {
      subtitle: "Uwezeshaji wa Biashara na Nyaraka",
      title: "Jinsi ya Kuagiza kutoka Thailand kwenda Afrika | Biashara B2B",
      desc: "AfricanThaiTrade Nexus ni mpatanishi wa biashara Afrika anayesimamia uoanishaji wa biashara na nyaraka za uagizaji kati ya Thailand na Afrika. Tunarahisisha biashara ya kimataifa kupitia uhakiki na usimamizi wa mnyororo wa ugavi.",
      cta: "Omba Uoanishaji",
      process_1: "1. Uhakiki",
      process_1_desc: "Ukaguzi wa Mtengenezaji",
      process_2: "2. Uoanishaji",
      process_2_desc: "Uunganishaji wa Kitaasisi",
      process_3: "3. Utekelezaji",
      process_3_desc: "Usimamizi wa Nyaraka"
    },
    summary: {
      title: "Ujasusi wa Kimkakati: Thailand-Afrika",
      intro_title: "Mfumo wa Biashara 2025",
      intro_desc: "Tunaratibu mikondo ya biashara Afrika Asia kwa kutambua maeneo yaliyohakikiwa. Tunasaidia ununuzi wa serikali Afrika na bandari za Mombasa, Dar es Salaam na Durban.",
      chart_title: "Mtiririko wa Biashara Thailand-Afrika",
      chart_subtitle: "Matokeo ya Performance 2025",
      pillars_title: "Nguzo za Usimamizi",
      future_title: "Mtazamo wa Kusini mwa Dunia"
    },
    matrix: {
      title: "Jedwali la Bidhaa Thailand-Afrika",
      subtitle: "Uchambuzi wa bidhaa za Thailand kwa wasambazaji Afrika na waagizaji. Urahisishaji wa biashara kwa bidhaa za chakula, teknolojia na pembejeo za kilimo.",
      info_box: "Gundua sekta tunazoratibu kwa ajili ya washirika wa kitaasisi.",
      categories: "Sekta Maalum",
      tab_overview: "Mantiki ya Soko",
      tab_archetypes: "Aina za Wanunuzi",
      high_potential: "Utafutaji wa Kimkakati",
      export_ready: "Tayari kwa Sheria",
      comp_adv: "Faida ya Thailand",
      risks: "Vizuizi vya Ukorido",
      active_leads: "Maombi ya Uoanishaji",
      leads_found: "Aina Zilizohakikiwa",
      contact_intel: "Dawati la Ushirikiano"
    },
    pigeon: {
      tag: "Uchambuzi wa Bei za Bidhaa",
      title: "Utafutaji wa Protini",
      subtitle: "Mantiki ya Thailand-Afrika",
      intro_summary: "Mazingira ya mbaazi nchini Thailand yanabadilika kutoka kwa majaribio hadi njia mbadala ya kimkakati. Umuhimu wa sasa unachochewa na utafutaji wa vyanzo vya protini endelevu na visivyo vya GMO kwa sekta za kisasa za usindikaji wa chakula na mifugo.",
      intro_quote: "Kuongeza thamani kwa kutumia fursa za utafutaji kati ya Afrika na Thailand.",
      supply_title: "Mkakati wa Uhimilivu",
      price_title: "Makadirio ya Gharama",
      deep_dive: "Usanifu wa Ujasusi wa Biashara",
      directory_title: "Washirika wa Kitaasisi"
    },
    strategy: {
      title: "Mchakato wa Utekelezaji: Thailand kwenda Afrika",
      subtitle: "Kuziba mapengo ya biashara kupitia uundaji mikataba makini na usimamizi wa nyaraka.",
      roadmap_title: "Mzunguko wa Uwezeshaji",
      hidden_gems_title: "Sekta Maalum za Kimkakati",
      calculator_title: "Gharama za Kufika",
      calculator_desc: "Kadiri gharama za viwanda kwa bandari za Afrika.",
      download_btn: "Pakua Maelezo ya Huduma",
      generating: "Inatayarisha...",
      support_title: "Dawati la Biashara",
      support_desc: "Wasiliana na wataalamu wetu wa ukorido."
    },
    logistics: {
      title: "Usimamizi wa Ukorido na Sheria za Afrika",
      subtitle: "Kuratibu usafirishaji na nyaraka katika bandari za Mombasa na Durban.",
      tab_routes: "Njia za Kimkakati",
      tab_regs: "Usimamizi wa Nyaraka",
      insight: "Mantiki ya Uoanishaji",
      pain_points: "Vigezo vya Hatari",
      est_cost: "Viwango vya Thamani",
      transit: "Muda wa Safari",
      critical_action: "Hatua za Kisheria"
    },
    vetting: {
      title: "Mfumo Wetu wa Uhakiki",
      subtitle: "Mfumo binafsi wa ukaguzi kwa watengenezaji wa Thailand.",
      sec_audit: "Ukaguzi wa Mtengenezaji",
      sec_matching: "Uoanishaji wa Kitaasisi",
      sec_confidential: "Mzunguko wa Siri"
    },
    faq: {
      title: "Maswali ya Biashara na Majibu ya AI",
      subtitle: "Majibu ya kitaalamu kwa maswali ya kawaida kuhusu kununua kutoka Thailand kwenda Afrika."
    }
  },
  ar: {
    nav: {
      home: "الرئيسية",
      summary: "معلومات الممر",
      matrix: "مصفوفة التوريد",
      pigeon: "تركيز التوفير",
      strategy: "إطار العملية",
      logistics: "إدارة الممر",
      vetting: "محفظة الفحص",
      faq: "الأسئلة الشائعة",
    },
    hero: {
      subtitle: "تسهيل التجارة بين الشركات وحوكمة الوثائق",
      title: "الاستيراد من تايلاند إلى أفريقيا | التجارة بين تايلاند وأفريقيا",
      desc: "AfricanThaiTrade Nexus هو وسيط تجاري أفريقي متخصص في تسهيل التجارة الدولية ومطابقة الأعمال بين الشركات. نحن نبسط الاستيراد من تايلاند للمشترين المؤسسيين عبر التدقيق الصارم والامتثال الجمركي.",
      cta: "بدء طلب مطابقة",
      process_1: "1. الفحص",
      process_1_desc: "تدقيق المصنع",
      process_2: "2. المطابقة",
      process_2_desc: "الربط المؤسسي",
      process_3: "3. التنفيذ",
      process_3_desc: "حوكمة الوثائق"
    },
    summary: {
      title: "استخبارات الممر: تايلاند-أفريقيا",
      intro_title: "إطار التجارة 2025",
      intro_desc: "ننظم ممرات التجارة الدولية بين آسيا وأفريقيا من خلال تحديد مجموعات موثقة. ندعم المشتريات الحكومية وأفريقيا واتفاقية التجارة الحرة الأفريقية عبر موانئ الإسكندرية ولاغوس وديربان.",
      chart_title: "تدفق التجارة بين تايلاند وأفريقيا",
      chart_subtitle: "بيانات الأداء لعام 2025",
      pillars_title: "ركائز الحوكمة",
      future_title: "توقعات تجارة الجنوب العالمي"
    },
    matrix: {
      title: "مصفوفة التوريد التايلاندية الأفريقية",
      subtitle: "تحليل تقني للمنتجات التايلاندية والمصدرين التايلانديين للمستوردين الأفارقة. تحسين تسهيل التجارة B2B للمواد الغذائية والمنتجات الصناعية.",
      info_box: "اكتشف القطاعات التي نقدم فيها التنسيق التنظيمي للشركاء المؤسسيين.",
      categories: "محافظ القطاعات",
      tab_overview: "منطق السوق",
      tab_archetypes: "نماذج المشترين",
      high_potential: "التوفير الاستراتيجي",
      export_ready: "موثق الامتثال",
      comp_adv: "ميزة التوريد",
      risks: "عوائق الممر",
      active_leads: "طلبات مفتوحة",
      leads_found: "النماذج الموثقة",
      contact_intel: "مكتب الشراكات"
    },
    pigeon: {
      tag: "تحليل مراجحة السلع",
      title: "تحسين توفير البروتين",
      subtitle: "تايلاند وأفريقيا",
      intro_summary: "تنتقل زراعة البازلاء في تايلاند من كونها قطاعاً تجريبياً إلى بديل استراتيجي. واليوم، يتزايد الاهتمام بهذا المحصول مدفوعاً بالبحث عن مصادر بروتين مستدامة وغير معدلة وراثياً لقطاعي الصناعات الغذائية المتقدمة والأعلاف الحيوانية.",
      intro_quote: "تعظيم القيمة من خلال تحديد نوافذ توفير المصادر بين الإنتاج الأفريقي والمعالجة التايلاندية.",
      supply_title: "استراتيجية المرونة",
      price_title: "نمذجة التكلفة",
      deep_dive: "هيكل الاستخبارات التجارية",
      directory_title: "الشركاء المؤسسيون"
    },
    strategy: {
      title: "عملية التنفيذ: من تايلاند إلى أفريقيا",
      subtitle: "سد الفجوات التجارية من خلال هيكلة الصفقات وحوكمة الوثائق.",
      roadmap_title: "دورة التسهيل",
      hidden_gems_title: "القطاعات المتخصصة الاستراتيجية",
      calculator_title: "نمذجة تكلفة الوصول",
      calculator_desc: "تقدير التكاليف الصناعية للموانئ الأفريقية بما في ذلك رسوم التسهيل.",
      download_btn: "تنزيل محفظة الخدمة",
      generating: "جاري التجميع...",
      support_title: "مكتب التجارة المؤسسي",
      support_desc: "اتصل بخبراء الممر لدينا لهيكلة الصفقات."
    },
    logistics: {
      title: "إدارة الممر والامتثال في أفريقيا",
      subtitle: "تنسيق اللوجستيات والوثائق في موانئ ديربان ومومباسا ولاغوس.",
      tab_routes: "المسارات الاستراتيجية",
      tab_regs: "حوكمة الوثائق",
      insight: "منطق المطابقة",
      pain_points: "عوامل الخطر",
      est_cost: "معايير القيمة",
      transit: "وقت العبور",
      critical_action: "إجراء الامتثال"
    },
    vetting: {
      title: "إطار فحص مخصص",
      subtitle: "نظام تدقيق خاص للمصنعين في ممر تايلاند وأفريقيا.",
      sec_audit: "تدقيق المصنع",
      sec_matching: "المطابقة المؤسسية",
      sec_confidential: "تدفق الصفقات السري"
    },
    faq: {
      title: "الأسئلة الشائعة ومحرك الإجابات",
      subtitle: "إجابات الخبراء على الأسئلة الأكثر شيوعًا حول الاستيراد من تايلاند إلى أفريقيا."
    }
  },
  pt: {
    nav: {
      home: "Início",
      summary: "Info Corridor",
      matrix: "Matriz de Oferta",
      pigeon: "Sourcing Especializado",
      strategy: "Processo",
      logistics: "Gestão Corridor",
      vetting: "Portfolio de Vetting",
      faq: "FAQ Comércio",
    },
    hero: {
      subtitle: "Facilitação B2B e Governança Documental",
      title: "Como Importar da Tailândia para a África | Comércio B2B",
      desc: "AfricanThaiTrade Nexus é um intermediário comercial África Tailândia especializado na facilitação de comércio internacional e matchmaking de negócios. Simplificamos a importação da Tailândia para compradores institucionais através de auditoria e conformidade alfandegária.",
      cta: "Solicitar Matchmaking",
      process_1: "1. Vetting",
      process_1_desc: "Auditoria Fabricante",
      process_2: "2. Matching",
      process_2_desc: "Ligação Institucional",
      process_3: "3. Execução",
      process_3_desc: "Governança Documental"
    },
    summary: {
      title: "Inteligência de Corredor: Tailândia-África",
      intro_title: "Estrutura Comercial 2025",
      intro_desc: "Orquestramos corredores de comércio estratégico África e cadeia de suprimentos global. Apoiamos a AfCFTA e hubs regionais como Luanda, Maputo e Durban através de logística internacional robusta.",
      chart_title: "Fluxo Comercial Tailândia-África",
      chart_subtitle: "Dados de Performance 2025",
      pillars_title: "Pilares de Governança",
      future_title: "Perspectiva Sud-Sud"
    },
    matrix: {
      title: "Matriz de Oferta Tailândia-África",
      subtitle: "Análise técnica de produtos tailandeses para importadores africanos e distribuidores. Otimização da facilitação comercial B2B para alimentos, têxteis e bens de consumo.",
      info_box: "Descubra setores onde coordenamos a regulação para parceiros institucionais.",
      categories: "Portfólios Setoriais",
      tab_overview: "Lógica de Mercado",
      tab_archetypes: "Arquétipos de Comprador",
      high_potential: "Sourcing Estratégico",
      export_ready: "Conformidade Verificada",
      comp_adv: "Vantagem de Oferta",
      risks: "Barreiras Corredor",
      active_leads: "Requisições Abertas",
      leads_found: "Arquétipos Verificados",
      contact_intel: "Secretaria de Parceria"
    },
    pigeon: {
      tag: "Análise de Arbitragem",
      title: "Sourcing de Proteína",
      subtitle: "Tailândia-África",
      intro_summary: "O cenário do feijão-guandu na Tailândia está a transitar de um nicho experimental para uma alternativa estratégica. A relevância atual é impulsionada pela busca de fontes de proteína sustentáveis e não OGM para os setores avançados de processamento de alimentos e ração animal.",
      intro_quote: "Maximizando valor através de janelas de sourcing contra-cíclicas.",
      supply_title: "Estratégia de Resiliência",
      price_title: "Modelação de Custos",
      deep_dive: "Arquitetura de Inteligência Comercial",
      directory_title: "Parceiros Institucionais"
    },
    strategy: {
      title: "Processo de Execução: Tailândia para África",
      subtitle: "Unindo parceiros através de estruturação rigorosa e governança documental.",
      roadmap_title: "Ciclo de Facilitação",
      hidden_gems_title: "Nichos Estratégicos",
      calculator_title: "Modelação Custo Rendido",
      calculator_desc: "Estimar custos industriais para portos africanos incluindo taxas de facilitação.",
      download_btn: "Baixar Portfolio",
      generating: "Compilando...",
      support_title: "Balcão Comercial",
      support_desc: "Fale com nossos especialistas para estruturação de negócios."
    },
    logistics: {
      title: "Gestão de Corredor e Conformidade Africana",
      subtitle: "Coordenação logística e documental nos portos de Luanda, Durban e Mombasa.",
      tab_routes: "Rotas Estratégicas",
      tab_regs: "Governança Documental",
      insight: "Lógica Matchmaking",
      pain_points: "Fatores de Risco",
      est_cost: "Benchmarks Valor",
      transit: "Tempo de Trânsito",
      critical_action: "Ação de Conformidade"
    },
    vetting: {
      title: "Framework de Vetting Sob Medida",
      subtitle: "Sistema de auditoria privada para fabricantes no corredor Tailândia-África.",
      sec_audit: "Auditoria Fabricante",
      sec_matching: "Matchmaking Institucional",
      sec_confidential: "Fluxo Confidencial"
    },
    faq: {
      title: "FAQ Comércio e Respostas AI",
      subtitle: "Respostas de especialistas às perguntas comuns sobre importar da Tailândia para a África."
    }
  }
};

export const t = (lang: Language, section: keyof TranslationStructure, key: string): string => {
  return (translations[lang][section] as any)?.[key] || (translations['en'][section] as any)?.[key] || key;
};
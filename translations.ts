import { ASSETS } from './constants';

export type Language = 'EN' | 'UZ' | 'RU';

const EN_ENVIRONMENT = {
  tag: 'Sustainability',
  titleLine1: 'Chemistry That',
  titleLine2: 'Breathes',
  description: 'Our zero-VOC formulations represent a silent revolution in paint technology. By utilizing advanced German raw materials, we created a product that is as safe for the environment as it is durable on your walls.',
  ecoPromise: '100% ECO',
  ecoSub: 'Zero Harmful Emissions',
  advantages: [
    { title: 'Chemistry That Breathes', desc: 'Permeable structures allow walls to regulate moisture naturally.' },
    { title: 'Zero VOC', desc: 'No volatile organic compounds. Safe for nurseries and hospitals.' },
    { title: 'German Raw Materials', desc: 'Sourced from BASF, Alberdingk Boley, and MÜNZING.' },
    { title: 'Silent Revolution', desc: 'Advanced polymers that define the new standard of safety.' }
  ]
};

const RU_ENVIRONMENT = {
  tag: 'Экологичность',
  titleLine1: 'Химия, Которая',
  titleLine2: 'Дышит',
  description: 'Наши составы с нулевым содержанием ЛОС представляют собой тихую революцию в технологии красок. Используя передовое немецкое сырье, мы создали продукт, который так же безопасен для окружающей среды, как и долговечен на ваших стенах.',
  ecoPromise: '100% ЭКО',
  ecoSub: 'Ноль Вредных Выбросов',
  advantages: [
    { title: 'Химия, Которая Дышит', desc: 'Проницаемые структуры позволяют стенам естественно регулировать влажность.' },
    { title: 'Ноль ЛОС (VOC)', desc: 'Никаких летучих органических соединений. Безопасно для детских садов и больниц.' },
    { title: 'Немецкое Сырье', desc: 'Поставляется от BASF, Alberdingk Boley и MÜNZING.' },
    { title: 'Тихая Революция', desc: 'Передовые полимеры, определяющие новый стандарт безопасности.' }
  ]
};

const UZ_ENVIRONMENT = {
  tag: 'Barqarorlik',
  titleLine1: 'Nafas Oluvchi',
  titleLine2: 'Kimyo',
  description: 'Bizning nol-VOC formulalarimiz bo\'yoq texnologiyasida sokin inqilobni ifodalaydi. Ilg\'or nemis xomashyosidan foydalanib, biz atrof-muhit uchun xavfsiz va devorlaringiz uchun mustahkam mahsulot yaratdik.',
  ecoPromise: '100% EKO',
  ecoSub: 'Zararli Emissiyalar Yo\'q',
  advantages: [
    { title: 'Nafas Oluvchi Kimyo', desc: 'O\'tkazuvchan tuzilmalar devorlarga namlikni tabiiy ravishda boshqarish imkonini beradi.' },
    { title: 'Nol VOC', desc: 'Uchuvchi organik birikmalar yo\'q. Bolalar bog\'chalari va shifoxonalar uchun xavfsiz.' },
    { title: 'Nemis Xomashyosi', desc: 'BASF, Alberdingk Boley va MÜNZING dan keltirilgan.' },
    { title: 'Sokin Inqilob', desc: 'Xavfsizlikning yangi standartini belgilovchi ilg\'or polimerlar.' }
  ]
};

const EN_LAB = {
  tag: 'R&D Facility',
  title: 'The Spettro Lab',
  rawMaterials: 'Raw Material Supplier',
  germany: 'Germany',
  description: 'Quality is not an accident; it is the result of intelligent effort. Our laboratory in Tashkent collaborates directly with German chemical giants to adapt European standards to the Central Asian climate.',
  button: 'Contact Laboratory'
};

const RU_LAB = {
  tag: 'Лаборатория R&D',
  title: 'Лаборатория Spettro',
  rawMaterials: 'Поставщик Сырья',
  germany: 'Германия',
  description: 'Качество — это не случайность, а результат разумных усилий. Наша лаборатория в Ташкенте напрямую сотрудничает с немецкими химическими гигантами для адаптации европейских стандартов к климату Средней Азии.',
  button: 'Связаться с Лабораторией'
};

const UZ_LAB = {
  tag: 'R&D Laboratoriyasi',
  title: 'Spettro Laboratoriyasi',
  rawMaterials: 'Xom Ashyo Yetkazib Beruvchi',
  germany: 'Germaniya',
  description: 'Sifat tasodif emas; bu aqlli harakat natijasidir. Toshkentdagi laboratoriyamiz Yevropa standartlarini Markaziy Osiyo iqlimiga moslashtirish uchun nemis kimyo gigantlari bilan bevosita hamkorlik qiladi.',
  button: 'Laboratoriya Bilan Bog\'lanish'
};

const EN_PRODUCT_MODAL = {
  techSheet: 'Technical Data Sheet'
};

const RU_PRODUCT_MODAL = {
  techSheet: 'Технический Паспорт'
};

const UZ_PRODUCT_MODAL = {
  techSheet: 'Texnik Ma\'lumotnoma'
};

const EN_TRANSLATIONS = {
  nav: {
    hero: 'Hero',
    about: 'Philosophy',
    road: 'Technology',
    ceramic: 'Ceramic Plaster',
    interior: 'Products',
    colorants: 'Colorants',
    partner: 'Partnership',
    menu: 'Menu',
    close: 'Close',
    contactTitle: 'CONTACT',
    address: 'Tashkent, Uzbekistan'
  },
  hero: {
    tagline: 'Bridging German Innovation and Uzbek Ambition • Est. 2023',
    titleLine1: 'Innovative',
    titleLine2: 'Paint Producers',
    titleLine3: 'for the Extremes of Central Asia.',
    description: 'We don’t just cover surfaces. We upgrade them. As your technology partner, we provide advanced, eco-friendly formulations that solve complex construction challenges. Superior chemical engineering is no longer a luxury. It is the new local standard.',
    iso: 'ISO 9001:2015 Certified',
    voc: 'Zero VOC Emissions',
    active: 'Production Line: Active'
  },
  about: {
    est: 'Est. 2023 • Tashkent',
    title: 'The Philosophy',
    fullText: "At SPETTRO\nwe believe that superior chemical engineering\nshould be the industry standard, not a luxury.\nWe have curated a production model that respects\nboth the architectural integrity of your projects\nand the fiscal prudence of your budget.",
    keywords: [
      "German-grade", "localized manufacturing", "eliminate import tariffs", "logistical premiums", "premium German raw materials", "Uzbekistan",
      "True value", "extreme thermal cycles", "superior adhesion", "elasticity", "extend maintenance", "maximize operational",
      "Achieve 98%", "Class 2", "unparalleled visual depth", "light-fast durability", "signature silky-matte",
      "Innovation", "Lotus Effect", "non-toxic formulations", "environmental stewardship", "public safety", "sustainable chemical"
    ],
    points: [
      {
        title: "European Heritage, Domestic Advantage",
        text: "German-grade technology meets localized manufacturing. We eliminate import tariffs and logistical premiums by utilizing premium German raw materials for strategic production within Uzbekistan.",
      },
      {
        title: "The Economy of Longevity",
        text: "True value is measured in years. Engineered for extreme thermal cycles, our coatings feature superior adhesion and elasticity to extend maintenance intervals and maximize operational service life.",
      },
      {
        title: "Architectural Purity",
        text: "The finish defines the space. Achieve 98% whiteness and Class 2 coverage with finishes that provide unparalleled visual depth, light-fast durability, and a signature silky-matte interior texture.",
      },
      {
        title: "A Safer, Cleaner Future",
        text: "Innovation with purpose. From self-cleaning \"Lotus Effect\" varnishes to non-toxic formulations, we prioritize environmental stewardship and public safety through functional, sustainable chemical engineering.",
      }
    ],
    footerTitle: 'Spettro Industries',
    footerSub: 'GERMAN ENGINEERING • UZBEK MANUFACTURING',
    footerIso: 'ISO 9001:2015 COMPLIANT'
  },
  road: {
    tag: 'Bio-PU Technology',
    titleLine1: '2K Bio-PU',
    titleLine2: 'Road Marking',
    mainDescBold: 'The Sustainable Future of High-Performance Safety.',
    mainDescText: 'We combined bio-based innovation with extreme industrial durability to create a road marking paint that refuses to fail. Unlike traditional thermoplastics which soften at 90°C, our 2K Bio-PU matrix remains chemically stable up to 120°C.',
    featureText: 'High Visibility Night Reflection',
    durabilityTag: 'Durability Test',
    durabilityTitle: 'Spettro Line',
    durabilityDesc: 'Drag to see how Spettro 2K defies extreme climates.',
    hotTitle: '+120°C',
    hotSub: 'Extreme Heat',
    hotCardTitle: 'NO SOFTENING',
    hotCardDesc: 'Maintains structural integrity on super-heated asphalt.',
    coldTitle: '-60°C',
    coldSub: 'Extreme Cold',
    coldCardTitle: 'ELASTICITY',
    coldCardDesc: 'Flexible polymers prevent cracking during freeze-thaw cycles.',
    specs: [
      {
        title: "Thermal Stability",
        subtitle: "Heat & Tire Resistance",
        description: "Unlike traditional thermoplastics which soften at 90°C, our 2K Bio-PU matrix remains chemically stable up to 120°C. It completely eliminates 'tire tracking' and deformation during hot Uzbek summers.",
        stats: [
          { label: "Softening Point", value: ">120°C" },
          { label: "Hot Tire Test", value: "PASSED" },
          { label: "Deformation", value: "0%" },
        ]
      },
      {
        title: "Surface Bonding",
        subtitle: "Class 0 Adhesion",
        description: "Achieves a permanent molecular bond with porous substrates. Whether applied to aged asphalt, fresh concrete, or steel, the coating locks in and refuses to delaminate under shear stress.",
        stats: [
          { label: "Adhesion Class", value: "Class 0" },
          { label: "Pull-Off Strength", value: ">3.5 MPa" },
          { label: "Substrates", value: "All Types" },
        ]
      },
      {
        title: "Abrasion Control",
        subtitle: "Max Wear (Class AR3)",
        description: "Rated Class AR3 for extreme abrasion resistance. Designed for high-traffic zones, intersections, and highways where physical wear from tires and sand is constant.",
        stats: [
          { label: "Wear Rating", value: "AR3" },
          { label: "Roll-Over Cycles", value: "4,000,000" },
          { label: "Mass Loss", value: "<16mg" },
        ]
      },
      {
        title: "Sustainability",
        subtitle: "Bio-Based Formulation",
        description: "The first road marking paint to utilize 45% bio-renewable content without sacrificing durability. Low odor, zero heavy metals, and ultra-low VOCs for a safer application environment.",
        stats: [
          { label: "Bio Content", value: "45%" },
          { label: "VOC Level", value: "<14 g/L" },
          { label: "Heavy Metals", value: "0%" },
        ]
      },
      {
        title: "Optic Physics",
        subtitle: "Visibility & Shield",
        description: "High refractive index glass beads are embedded directly into the cross-linked polymer matrix. This provides superior night visibility (retro-reflectivity) and resistance to chemical spills.",
        stats: [
          { label: "Whiteness (L*)", value: "92.65" },
          { label: "Specular Gloss", value: "86.3" },
          { label: "Retro-Reflectivity", value: "R5" },
        ]
      }
    ],
    visuals: [
      { tag: "Standard Thermoplastic Failure", title: "vs. Spettro 2K Bio-PU", sub: "HEAT STABLE MATRIX" },
      { tag: "Pull-Off Test Analysis", title: "Substrate Interlock", sub: "SUPERIOR ANCHORING" },
      { tag: "Accelerated Wear Test", title: "4 Million Cycles", sub: "HEAVY LOAD RESISTANCE" },
      { tag: "C14 Isotope Verification", title: "45% Bio-Renewable", sub: "ECO-FRIENDLY BASE" },
      { tag: "Retro-Reflectometer", title: "R5 Night Visibility", sub: "ENHANCED OPTICS" }
    ]
  },
  ceramic: {
    title: "Ceramic Plaster",
    subtitle: "Structural Integrity Reimagined",
    description: "An acrylic urethane decorative coating that serves as a robust alternative to fiberglass mesh. Engineered for high elasticity and crack resistance, it requires no topcoat and delivers superior whiteness (97 CIELAB).",
    features: ["Easy Application", "Smooth Finish Upon Sanding", "Low Dusting", "Strong Adhesion", "Super White", "Ultra Smooth"],
    stats: [
      { label: "Density", value: "1.55 g/cm³" },
      { label: "Spreading Rate", value: "500 g/m²" },
      { label: "Resilience", value: "High Flex" }
    ]
  },
  primer: {
    title: "Deep Primer",
    subtitle: "Surface Stabilization",
    description: "High-penetration acrylic primer designed to consolidate porous substrates and ensure uniform absorption. Enhances adhesion for subsequent layers and prevents efflorescence.",
    features: ["Deep Penetration", "Alkali Resistant", "Dust Binding", "Water Based", "Eco Formulation"],
    stats: [
      { label: "Penetration", value: "Microporous" },
      { label: "Consumption", value: "100-150 g/m²" },
      { label: "Drying Time", value: "1-2 Hours" }
    ]
  },
  colorants: {
    title: "Spettro Colorants",
    subtitle: "High-Concentrate Pigment Pastes",
    description: "Highly cost-effective, UV-resistant pigment pastes designed for maximum color saturation. Compatible with all water-based materials.",
    marketingFeatures: [
      "High Color Saturation",
      "Highly Cost-Effective",
      "UV-Resistant Formula",
      "Water-Based Compatibility"
    ],
    colors: [
      "Camel", "Red Oxide", "Orange", "Tabacco",
      "Earthy", "Red Crimson", "Spruce", "Yellow Oxide",
      "Terracota", "Violet", "Yellow", "Blue",
      "White", "Magenta", "Red", "Choco",
      "Green", "Black", "Graphite", "Lemon"
    ]
  },
  interior: {
    title: 'Our Products',
    subtitle: 'Technical specifications per formulation.',
    marketing: 'Discover our premium formulations that define excellence in quality.',
    products: [
      {
        id: 'viso',
        name: 'VISO',
        type: 'ACRYLIC',
        subhead: 'Premium Interior Paint',
        description: 'Experience the purest finish designed for modern living. UV-Resistant formula suitable for metal, glass, wood, plastic, brick, and concrete.',
        image: ASSETS.bucketViso,
        specs: ['UV-Resistant', 'Matte/Satin', 'Interior Grade', 'No Brush Marks'],
        gallery: [ASSETS.bucketViso, ASSETS.interiorRoom, ASSETS.envBg],
        dataSheet: [
          { label: "Density", value: "1.42 g/cm³" },
          { label: "Gloss Levels", value: "Matte (5%) / Satin (10%) / Semi (20%)" },
          { label: "Surfaces", value: "Metal, Glass, Wood, Concrete" },
          { label: "Feature", value: "UV-Resistant" }
        ]
      },
      {
        id: 'bianco',
        name: 'BIANCO',
        type: 'UNIVERSAL ACRYLIC',
        subhead: 'Premium Universal Grade',
        description: 'A universal acrylic paint with high whiteness and durability. Ideal for both interior and exterior applications on various substrates.',
        image: ASSETS.bucketBianco,
        specs: ['Universal', 'UV-Resistant', 'Premium Grade', 'No Brush Marks'],
        gallery: [ASSETS.bucketBianco, ASSETS.interiorRoom, ASSETS.labBg],
        dataSheet: [
          { label: "Density", value: "1.42 g/cm³" },
          { label: "Gloss Levels", value: "Matte (5%) / Satin (10%) / Semi (20%)" },
          { label: "Surfaces", value: "Metal, Glass, Wood, Plastic, Brick" },
          { label: "Feature", value: "Premium Interior Grade" }
        ]
      },
      {
        id: 'celeste',
        name: 'CELESTE',
        type: 'LATEX',
        subhead: 'UV-Resistant Latex',
        description: 'High-performance latex paint offering excellent coverage and UV resistance. Dries in just 4 hours.',
        image: ASSETS.bucketCeleste,
        specs: ['UV-Resistant', 'Latex Base', 'Fast Dry', 'No Brush Marks'],
        gallery: [ASSETS.bucketCeleste, ASSETS.envBg, ASSETS.interiorRoom],
        dataSheet: [
          { label: "Type", value: "Latex Paint" },
          { label: "Gloss Levels", value: "Matte (5%) / Satin (10%)" },
          { label: "Drying Time", value: "4 hours" },
          { label: "Feature", value: "UV-Resistant" }
        ]
      },
      {
        id: 'perla',
        name: 'PERLA',
        type: 'ACRYLIC URETHANE',
        subhead: 'Universal Enamel',
        description: 'Universal Acrylic Urethane Enamel with a wide range of gloss levels up to 70%. Highly resistant to UV and wear.',
        image: ASSETS.bucketPerla,
        specs: ['High Gloss', 'Urethane', 'UV-Resistant', 'No Brush Marks'],
        gallery: [ASSETS.bucketPerla, ASSETS.heroPoster, ASSETS.labBg],
        dataSheet: [
          { label: "Type", value: "Universal Acrylic Urethane" },
          { label: "Gloss Levels", value: "Matte (5%) - Gloss (70%)" },
          { label: "Coverage", value: "100 ml/m² (single coat)" },
          { label: "Drying Time", value: "2 hours" }
        ]
      },
      {
        id: 'maestro',
        name: 'MAESTRO',
        type: 'ACRYLIC URETHANE',
        subhead: 'Universal Enamel',
        description: 'Professional grade Universal Acrylic Urethane Enamel. Balanced density and consumption for optimal application.',
        image: ASSETS.bucketMaestro,
        specs: ['Professional', 'UV-Resistant', 'Urethane', 'No Brush Marks'],
        gallery: [ASSETS.bucketMaestro, ASSETS.partnerBg],
        dataSheet: [
          { label: "Type", value: "Universal Acrylic Urethane" },
          { label: "Density", value: "1.40 g/cm³" },
          { label: "Consumption", value: "120 ml/m²" },
          { label: "Feature", value: "UV-Resistant" }
        ]
      },
      {
        id: 'sofia',
        name: 'SOFIA',
        type: 'POLYURETHANE',
        subhead: 'Polyurethane Decorative Coating',
        description: 'An innovative polyurethane decorative coating featuring a distinctive soft-touch finish. Highly decorative and engineered for premium aesthetic applications.',
        image: ASSETS.bucketSofia,
        specs: ['Decorative', 'Soft-Touch', 'Innovative', 'Polyurethane'],
        gallery: [ASSETS.bucketSofia, ASSETS.interiorRoom, ASSETS.partnerBg],
        dataSheet: [
          { label: "Density", value: "1.10 g/cm³" },
          { label: "Coverage", value: "110 ml/m² (single coat)" },
          { label: "Drying Time", value: "4 hours" },
          { label: "Feature", value: "Soft-touch finish" }
        ]
      },
      {
        id: 'primer',
        name: 'PRIMER',
        type: 'PRIMER',
        subhead: 'Deep Penetration',
        description: 'Nano-tech primer with 50nm particle size for deep penetration (8mm). Suitable for plaster, brick, concrete, and drywall.',
        image: ASSETS.bucketPrimer,
        specs: ['Nano-Tech', 'Deep Penetration', 'Mineral Surfaces'],
        gallery: [ASSETS.bucketPrimer, ASSETS.envBg],
        dataSheet: [
          { label: "Density", value: "1.00 g/cm³" },
          { label: "Consumption", value: "100 g/m²" },
          { label: "Particle Size", value: "50 nm" },
          { label: "Penetration", value: "8 mm" }
        ]
      }
    ]
  },
  environment: EN_ENVIRONMENT,
  partner: {
    tag: 'Strategic Cooperation',
    title: 'Partner with Spettro',
    description: 'We do not just sell paint; we build legacies. Whether you are a developer seeking volume precision or a distributor looking for exclusive territory, our "Partner Box" is your entry point. Experience the Spettro difference firsthand.',
    brochureButton: 'View Digital Brochure',
    form: {
      header: 'Start Application',
      subHeader: 'Select your area of interest below.',
      nameLabel: 'Full Name',
      phoneLabel: 'Phone Number',
      emailLabel: 'Email Address',
      messageLabel: 'Project Details / Message',
      submit: 'Submit Request',
      note: 'We typically respond within 24 hours.',
      interests: {
        roadMarking: 'Road Marking',
        decorative: 'Decorative Coatings',
        industrial: 'Industrial Coatings',
        distributor: 'Become Distributor'
      }
    }
  },
  brochure: {
    road: {
      heroSub: "Next Generation Road Marking Technology",
      safetyTitle: "The Sustainable Future<br/>of Safety",
      thermal: "Thermal Stability",
      cycles: "Wheel Cycles (AR3)",
      vis: "Night Visibility"
    },
    arch: {
      title: "ARCHITECTURAL",
      subtitle: "INTERIOR & EXTERIOR SERIES • 2026 COLLECTION",
      certified: "Certified Production"
    },
    ceramic: {
      tag: "Structural Alternative",
      consumption: "Consumption",
      density: "Density",
      whiteness: "Whiteness"
    },
    pigments: {
      bgTitle: "PIGMENTS",
      german: "German Raw Materials"
    },
    cover: {
      title: "REGINA DI COLORE",
      subtitle: "CATALOG 2026",
      tagline: "GERMAN ENGINEERING • UZBEK MANUFACTURING"
    },
    ui: {
      back: "Back to Site",
      print: "Print PDF"
    },
    footer: {
      company: "SPETTRO INDUSTRIES",
      text: "GERMAN ENGINEERING • UZBEK MANUFACTURING"
    }
  },
  lab: EN_LAB,
  productModal: EN_PRODUCT_MODAL
};

const RU_TRANSLATIONS = {
  nav: {
    hero: 'Главная',
    about: 'Философия',
    road: 'Технология',
    ceramic: 'Керамическая Штукатурка',
    interior: 'Продукция',
    colorants: 'Колеры',
    partner: 'Партнерство',
    menu: 'Меню',
    close: 'Закрыть',
    contactTitle: 'КОНТАКТЫ',
    address: 'Ташкент, Узбекистан'
  },
  hero: {
    tagline: 'Сочетая Немецкие Инновации и Узбекские Амбиции • Осн. 2023',
    titleLine1: 'Инновационные',
    titleLine2: 'Производители Красок',
    titleLine3: 'для Экстремальных Условий Средней Азии.',
    description: 'Мы не просто покрываем поверхности. Мы их улучшаем. Как ваш технологический партнер, мы предоставляем передовые, экологически чистые составы, решающие сложные строительные задачи. Превосходная химическая инженерия больше не роскошь. Это новый локальный стандарт.',
    iso: 'Сертификат ISO 9001:2015',
    voc: 'Нулевые Выбросы ЛОС',
    active: 'Линия Производства: Активна'
  },
  about: {
    est: 'Осн. 2023 • Ташкент',
    title: 'Философия',
    fullText: "В SPETTRO мы убеждены, что передовая инженерия\nдолжна быть отраслевым стандартом, а не роскошью.\nМы создали модель производства, которая уважает\nкак архитектурную целостность ваших проектов,\nи экономическую целесообразность вашего бюджета.",
    keywords: [
      "немецкого уровня", "локализованным производством", "устраняем импортные пошлины", "логистические наценки", "премиальное немецкое сырье", "Узбекистане",
      "Истинная ценность", "экстремальных тепловых циклов", "превосходной адгезией", "эластичностью", "увеличивает интервалы обслуживания", "максимизирует срок службы",
      "Достигните 98%", "2-го класса", "непревзойденную визуальную глубину", "светостойкость", "фирменную шелковисто-матовую",
      "Инновации", "эффектом лотоса", "нетоксичных составов", "защиту окружающей среды", "общественную безопасность", "устойчивую химическую"
    ],
    points: [
      {
        title: "Европейское Наследие, Локальное Преимущество",
        text: "Технологии немецкого уровня встречаются с локализованным производством. Мы устраняем импортные пошлины и логистические наценки, используя премиальное немецкое сырье для стратегического производства в Узбекистане.",
      },
      {
        title: "Экономика Долговечности",
        text: "Истинная ценность измеряется годами. Разработанные для экстремальных тепловых циклов, наши покрытия обладают превосходной адгезией и эластичностью, увеличивая интервалы обслуживания и максимизируя срок службы.",
      },
      {
        title: "Архитектурная Чистота",
        text: "Отделка определяет пространство. Достигните 98% белизны и покрытия 2-го класса с отделкой, обеспечивающей непревзойденную визуальную глубину, светостойкость и фирменную шелковисто-матовую текстуру интерьера.",
      },
      {
        title: "Безопасное, Чистое Будущее",
        text: "Инновации с целью. От самоочищающихся лаков с «Эффектом Лотоса» до нетоксичных составов, мы ставим во главу угла заботу об окружающей среде и общественную безопасность через функциональную, устойчивую химическую инженерию.",
      }
    ],
    footerTitle: 'Spettro Industries',
    footerSub: 'НЕМЕЦКАЯ ИНЖЕНЕРИЯ • УЗБЕКСКОЕ ПРОИЗВОДСТВО',
    footerIso: 'СООТВЕТСТВИЕ ISO 9001:2015'
  },
  road: {
    tag: 'Технология Bio-PU',
    titleLine1: '2K Bio-PU',
    titleLine2: 'Дорожная Разметка',
    mainDescBold: 'Устойчивое Будущее Высокоэффективной Безопасности.',
    mainDescText: 'Мы объединили био-инновации с экстремальной промышленной долговечностью, чтобы создать краску для дорожной разметки, которая не подведет. В отличие от традиционных термопластиков, которые размягчаются при 90°C, наша матрица 2K Bio-PU остается химически стабильной до 120°C.',
    featureText: 'Высокая Видимость Ночью',
    durabilityTag: 'Тест на Прочность',
    durabilityTitle: 'Линия Spettro',
    durabilityDesc: 'Перетащите, чтобы увидеть, как Spettro 2K противостоит экстремальному климату.',
    hotTitle: '+120°C',
    hotSub: 'Экстремальная Жара',
    hotCardTitle: 'НЕ РАЗМЯГЧАЕТСЯ',
    hotCardDesc: 'Сохраняет структурную целостность на перегретом асфальте.',
    coldTitle: '-60°C',
    coldSub: 'Экстремальный Холод',
    coldCardTitle: 'ЭЛАСТИЧНОСТЬ',
    coldCardDesc: 'Гибкие полимеры предотвращают растрескивание при циклах замораживания-оттаивания.',
    specs: [
      {
        title: "Термическая Стабильность",
        subtitle: "Устойчивость к Жаре и Шинам",
        description: "В отличие от традиционных термопластиков, которые размягчаются при 90°C, наша матрица 2K Bio-PU остается химически стабильной до 120°C. Это полностью исключает «следы от шин» и деформацию во время жаркого узбекского лета.",
        stats: [
          { label: "Точка Размягчения", value: ">120°C" },
          { label: "Тест Горячей Шины", value: "ПРОЙДЕН" },
          { label: "Деформация", value: "0%" },
        ]
      },
      {
        title: "Сцепление с Поверхностью",
        subtitle: "Адгезия Класса 0",
        description: "Достигает постоянной молекулярной связи с пористыми основаниями. Будь то старый асфальт, свежий бетон или сталь, покрытие закрепляется и не отслаивается при сдвиговом напряжении.",
        stats: [
          { label: "Класс Адгезии", value: "Класс 0" },
          { label: "Сила Отрыва", value: ">3.5 МПа" },
          { label: "Основания", value: "Все Типы" },
        ]
      },
      {
        title: "Контроль Истирания",
        subtitle: "Макс. Износ (Класс AR3)",
        description: "Класс AR3 по устойчивости к экстремальному истиранию. Предназначен для зон с высокой проходимостью, перекрестков и магистралей, где физический износ от шин и песка постоянен.",
        stats: [
          { label: "Рейтинг Износа", value: "AR3" },
          { label: "Циклы Проката", value: "4,000,000" },
          { label: "Потеря Массы", value: "<16мг" },
        ]
      },
      {
        title: "Устойчивость",
        subtitle: "Био-Основанная Формула",
        description: "Первая краска для дорожной разметки, использующая 45% био-возобновляемого содержимого без ущерба для долговечности. Слабый запах, отсутствие тяжелых металлов и ультранизкий уровень ЛОС для безопасного нанесения.",
        stats: [
          { label: "Био Содержание", value: "45%" },
          { label: "Уровень ЛОС", value: "<14 г/л" },
          { label: "Тяжелые Металлы", value: "0%" },
        ]
      },
      {
        title: "Оптическая Физика",
        subtitle: "Видимость и Защита",
        description: "Стеклянные микросферы с высоким коэффициентом преломления внедрены непосредственно в сшитую полимерную матрицу. Это обеспечивает превосходную видимость ночью (световозвращение) и устойчивость к химическим разливам.",
        stats: [
          { label: "Белизна (L*)", value: "92.65" },
          { label: "Зеркальный Блеск", value: "86.3" },
          { label: "Световозвращение", value: "R5" },
        ]
      }
    ],
    visuals: EN_TRANSLATIONS.road.visuals
  },
  ceramic: {
    title: "Керамическая Штукатурка",
    subtitle: "Переосмысление Структурной Целостности",
    description: "Акрилово-уретановое декоративное покрытие, служащее надежной альтернативой стеклосетке. Разработано для высокой эластичности и устойчивости к трещинам, не требует финишного покрытия и обеспечивает превосходную белизну (97 CIELAB).",
    features: ["Легкое Нанесение", "Гладкая Отделка после Шлифовки", "Низкое Пыление", "Сильная Адгезия", "Супер Белый", "Ультра Гладкий"],
    stats: [
      { label: "Плотность", value: "1.55 г/см³" },
      { label: "Расход", value: "500 г/м²" },
      { label: "Эластичность", value: "Высокая" }
    ]
  },
  primer: {
    title: "Грунтовка Глубокого Проникновения",
    subtitle: "Стабилизация Поверхности",
    description: "Акриловая грунтовка с высокой проникающей способностью для укрепления пористых оснований и выравнивания впитываемости. Улучшает адгезию последующих слоев и предотвращает высолы.",
    features: ["Глубокое Проникновение", "Щелочестойкость", "Связывание Пыли", "Водная Основа", "Эко Формула"],
    stats: [
      { label: "Проникновение", value: "Микропористое" },
      { label: "Расход", value: "100-150 г/м²" },
      { label: "Высыхание", value: "1-2 Часа" }
    ]
  },
  colorants: {
    title: "Колеры Spettro",
    subtitle: "Высококонцентрированные Пигментные Пасты",
    description: "Высокоэкономичные, устойчивые к УФ-излучению пигментные пасты, разработанные для максимальной насыщенности цвета. Совместимы со всеми материалами на водной основе.",
    marketingFeatures: [
      "Высокая Насыщенность Цвета",
      "Высокая Экономичность",
      "УФ-Устойчивая Формула",
      "Совместимость с Водной Основой"
    ],
    colors: [
      "Верблюжий (Camel)", "Красный Оксид", "Оранжевый", "Табак",
      "Землистый", "Темно-Красный", "Ель", "Желтый Оксид",
      "Терракота", "Фиолетовый", "Желтый", "Синий",
      "Белый", "Маджента", "Красный", "Шоколад",
      "Зеленый", "Черный", "Графит", "Лимон"
    ]
  },
  interior: {
    title: 'Наша Продукция',
    subtitle: 'Технические характеристики для каждой формулы.',
    marketing: 'Откройте для себя наши премиальные составы, определяющие превосходство в качестве.',
    products: [
      {
        id: 'viso',
        name: 'VISO',
        type: 'АКРИЛ',
        subhead: 'Премиальная Интерьерная Краска',
        description: 'Испытайте чистейшее покрытие, созданное для современной жизни. УФ-стойкая формула подходит для металла, стекла, дерева, пластика, кирпича и бетона.',
        image: ASSETS.bucketViso,
        specs: ['УФ-Стойкий', 'Мат/Сатин', 'Интерьер', 'Без Следов Кисти'],
        gallery: [ASSETS.bucketViso, ASSETS.interiorRoom, ASSETS.envBg],
        dataSheet: [
          { label: "Плотность", value: "1.42 г/см³" },
          { label: "Блеск", value: "Мат (5%) / Сатин (10%) / Полумат (20%)" },
          { label: "Поверхности", value: "Металл, Стекло, Дерево, Бетон" },
          { label: "Особенность", value: "УФ-Стойкий" }
        ]
      },
      {
        id: 'bianco',
        name: 'BIANCO',
        type: 'УНИВЕРСАЛЬНЫЙ АКРИЛ',
        subhead: 'Премиальный Универсальный Класс',
        description: 'Универсальная акриловая краска с высокой белизной и долговечностью. Идеально подходит как для внутренних, так и для наружных работ на различных основаниях.',
        image: ASSETS.bucketBianco,
        specs: ['Универсальный', 'УФ-Стойкий', 'Премиум', 'Без Следов Кисти'],
        gallery: [ASSETS.bucketBianco, ASSETS.interiorRoom, ASSETS.labBg],
        dataSheet: [
          { label: "Плотность", value: "1.42 г/см³" },
          { label: "Блеск", value: "Мат (5%) / Сатин (10%) / Полумат (20%)" },
          { label: "Поверхности", value: "Металл, Стекло, Дерево, Пластик" }
        ]
      },
      {
        id: 'celeste',
        name: 'CELESTE',
        type: 'ЛАТЕКС',
        subhead: 'УФ-Стойкий Латекс',
        description: 'Высокоэффективная латексная краска, обеспечивающая отличное покрытие и стойкость к ультрафиолету. Высыхает всего за 4 часа.',
        image: ASSETS.bucketCeleste,
        specs: ['УФ-Стойкий', 'Латекс', 'Быстрая Сушка', 'Без Следов Кисти'],
        gallery: [ASSETS.bucketCeleste, ASSETS.envBg, ASSETS.interiorRoom],
        dataSheet: [
          { label: "Тип", value: "Латексная Краска" },
          { label: "Блеск", value: "Мат (5%) / Сатин (10%)" },
          { label: "Время Высыхания", value: "4 часа" },
          { label: "Особенность", value: "УФ-Стойкий" }
        ]
      },
      {
        id: 'perla',
        name: 'PERLA',
        type: 'АКРИЛ-УРЕТАН',
        subhead: 'Универсальная Эмаль',
        description: 'Универсальная акрил-уретановая эмаль с широким диапазоном блеска до 70%. Высокая устойчивость к УФ и износу.',
        image: ASSETS.bucketPerla,
        specs: ['Высокий Глянец', 'Уретан', 'УФ-Стойкий', 'Без Следов Кисти'],
        gallery: [ASSETS.bucketPerla, ASSETS.heroPoster, ASSETS.labBg],
        dataSheet: [
          { label: "Тип", value: "Универсальный Акрил-Уретан" },
          { label: "Блеск", value: "Мат (5%) - Глянец (70%)" },
          { label: "Расход", value: "100 мл/м² (один слой)" },
          { label: "Время Высыхания", value: "2 часа" }
        ]
      },
      {
        id: 'maestro',
        name: 'MAESTRO',
        type: 'АКРИЛ-УРЕТАН',
        subhead: 'Универсальная Эмаль',
        description: 'Универсальная акрил-уретановая эмаль профессионального класса. Сбалансированная плотность и расход для оптимального нанесения.',
        image: ASSETS.bucketMaestro,
        specs: ['Профессиональный', 'УФ-Стойкий', 'Уретан', 'Без Следов Кисти'],
        gallery: [ASSETS.bucketMaestro, ASSETS.partnerBg],
        dataSheet: [
          { label: "Тип", value: "Универсальный Акрил-Уретан" },
          { label: "Плотность", value: "1.40 г/см³" },
          { label: "Расход", value: "120 мл/м²" },
          { label: "Особенность", value: "УФ-Стойкий" }
        ]
      },
      {
        id: 'sofia',
        name: 'SOFIA',
        type: 'ПОЛИУРЕТАН',
        subhead: 'Полиуретановое Декоративное Покрытие',
        description: 'Инновационное полиуретановое декоративное покрытие с характерной мягкой на ощупь (soft-touch) отделкой. Высокодекоративное и разработанное для премиальных эстетических решений.',
        image: ASSETS.bucketSofia,
        specs: ['Декоративный', 'Soft-Touch', 'Инновация', 'Полиуретан'],
        gallery: [ASSETS.bucketSofia, ASSETS.interiorRoom, ASSETS.partnerBg],
        dataSheet: [
          { label: "Плотность", value: "1.10 г/см³" },
          { label: "Расход", value: "110 мл/м² (один слой)" },
          { label: "Время Высыхания", value: "4 часа" },
          { label: "Особенность", value: "Покрытие Soft-touch" }
        ]
      },
      {
        id: 'primer',
        name: 'PRIMER',
        type: 'ГРУНТ',
        subhead: 'Глубокого Проникновения',
        description: 'Нано-технологичный грунт с размером частиц 50 нм для глубокого проникновения (8 мм). Подходит для штукатурки, кирпича, бетона и гипсокартона.',
        image: ASSETS.bucketPrimer,
        specs: ['Нано-Тех', 'Глубокое Проникновение', 'Минеральные Поверхности'],
        gallery: [ASSETS.bucketPrimer, ASSETS.envBg],
        dataSheet: [
          { label: "Плотность", value: "1.00 г/см³" },
          { label: "Расход", value: "100 г/м²" },
          { label: "Размер Частиц", value: "50 нм" },
          { label: "Проникновение", value: "8 мм" }
        ]
      }
    ]
  },
  environment: RU_ENVIRONMENT,
  partner: {
    tag: 'Стратегическое Сотрудничество',
    title: 'Партнерство со Spettro',
    description: 'Мы не просто продаем краску, мы строим наследие. Будь вы застройщиком, ищущим точность объемов, или дистрибьютором, ищущим эксклюзивную территорию, наша «Партнерская Коробка» — это ваша точка входа. Испытайте разницу Spettro на собственном опыте.',
    brochureButton: 'Посмотреть Цифровую Брошюру',
    form: {
      header: 'Начать Заявку',
      subHeader: 'Выберите интересующую вас область ниже.',
      nameLabel: 'ФИО',
      phoneLabel: 'Номер Телефона',
      emailLabel: 'Email Адрес',
      messageLabel: 'Детали Проекта / Сообщение',
      submit: 'Отправить Запрос',
      note: 'Обычно мы отвечаем в течение 24 часов.',
      interests: {
        roadMarking: 'Дорожная Разметка',
        decorative: 'Декоративные Покрытия',
        industrial: 'Промышленные Покрытия',
        distributor: 'Стать Дистрибьютором'
      }
    }
  },
  brochure: {
    road: {
      heroSub: "Технология Дорожной Разметки Нового Поколения",
      safetyTitle: "2K BioPU<br/>Road Marking",
      thermal: "Термостабильность",
      cycles: "Циклы Нагрузки (AR3)",
      vis: "Ночная Видимость"
    },
    arch: {
      title: "АРХИТЕКТУРНЫЕ",
      subtitle: "ИНТЕРЬЕРНЫЕ И ФАСАДНЫЕ СЕРИИ • КОЛЛЕКЦИЯ 2026",
      certified: "Сертифицированное Производство"
    },
    ceramic: {
      tag: "Структурная Альтернатива",
      consumption: "Расход",
      density: "Плотность",
      whiteness: "Белизна"
    },
    pigments: {
      bgTitle: "PIGМЕНТЫ",
      german: "Немецкое Сырье"
    },
    cover: {
      title: "REGINA DI COLORE",
      subtitle: "КАТАЛОГ 2026",
      tagline: "НЕМЕЦКАЯ ИНЖЕНЕРИЯ • УЗБЕКСКОЕ ПРОИЗВОДСТВО"
    },
    ui: {
      back: "Назад на сайт",
      print: "Печать PDF"
    },
    footer: {
      company: "SPETTRO INDUSTRIES",
      text: "НЕМЕЦКАЯ ИНЖЕНЕРИЯ • УЗБЕКСКОЕ ПРОИЗВОДСТВО"
    }
  },
  lab: RU_LAB,
  productModal: RU_PRODUCT_MODAL
};

const UZ_TRANSLATIONS = {
  nav: {
    hero: 'Asosiy',
    about: 'Falsafa',
    road: 'Texnologiya',
    ceramic: 'Keramik Suvoq',
    interior: 'Mahsulotlar',
    colorants: 'Ranglar',
    partner: 'Hamkorlik',
    menu: 'Menyu',
    close: 'Yopish',
    contactTitle: 'ALOQA',
    address: 'Toshkent, O\'zbekiston'
  },
  hero: {
    tagline: 'Nemis Innovatsiyasi va O\'zbek Ambitsiyasi • Tashkil etilgan 2023',
    titleLine1: 'Innovatsion',
    titleLine2: 'Bo\'yoq Ishlab Chiqaruvchilar',
    titleLine3: 'Markaziy Osiyo ekstremal sharoitlari uchun.',
    description: 'Biz shunchaki sirtlarni qoplamaymiz. Biz ularni yangilaymiz. Sizning texnologik hamkoringiz sifatida biz murakkab qurilish muammolarini hal qiladigan ilg\'or, ekologik toza formulalarni taqdim etamiz. Yuqori darajadagi kimyoviy muhandislik endi hashamat emas. Bu yangi mahalliy standartdir.',
    iso: 'ISO 9001:2015 Sertifikati',
    voc: 'Nol VOC Emissiyasi',
    active: 'Ishlab chiqarish liniyasi: Faol'
  },
  about: {
    est: 'Tashkil etilgan 2023 • Toshkent',
    title: 'Falsafa',
    fullText: "SPETTRO da biz yuqori kimyoviy muhandislik\nhashamat emas, sanoat standarti bo'lishiga ishonamiz.\nBiz loyihalaringizning arxitektura butunligini\nva byudjetingizning moliyaviy oqilonaligini\nhurmat qiluvchi ishlab chiqarish modelini yaratdik.",
    keywords: [
      "Nemis darajasidagi", "mahalliylashtirilgan ishlab chiqarish", "import bojlarini", "logistika ustamalarini", "premium nemis xomashyosidan", "O'zbekiston",
      "Haqiqiy qiymat", "Ekstremal termal tsikllar", "yuqori yopishqoqlik", "elastiklikka", "xizmat ko'rsatish oraliqlarini uzaytirish", "ishlash muddatini maksimal darajada oshirish",
      "98% oqlik", "2-sinf", "tengsiz vizual chuqurlik", "yorug'likka chidamlilik", "o'ziga xos ipak-mot",
      "innovatsiya", "Lotus effekti", "toksik bo'lmagan formulalar", "atrof-muhitni muhofaza qilish", "jamoat xavfsizligini", "barqaror kimyoviy"
    ],
    points: [
      {
        title: "Yevropa Merosi, Mahalliy Ustunlik",
        text: "Nemis darajasidagi texnologiya mahalliylashtirilgan ishlab chiqarish bilan uchrashadi. Biz O'zbekiston ichida strategik ishlab chiqarish uchun premium nemis xomashyosidan foydalangan holda import bojlarini va logistika ustamalarini yo'q qilamiz.",
      },
      {
        title: "Uzoq Umr Iqtisodiyoti",
        text: "Haqiqiy qiymat yillar bilan o'lchanadi. Ekstremal termal tsikllar uchun ishlab chiqilgan qoplamalarimiz xizmat ko'rsatish oraliqlarini uzaytirish va ishlash muddatini maksimal darajada oshirish uchun yuqori yopishqoqlik va elastiklikka ega.",
      },
      {
        title: "Arxitektura Sofligi",
        text: "Qoplama makonni belgilaydi. 98% oqlik va 2-sinf qoplash darajasiga erishing, bu qoplamalar tengsiz vizual chuqurlik, yorug'likka chidamlilik va o'ziga xos ipak-mot ichki teksturani ta'minlaydi.",
      },
      {
        title: "Xavfsiz, Toza Kelajak",
        text: "Maqsadli innovatsiya. O'z-o'zini tozalaydigan \"Lotus effekti\" laklaridan tortib, toksik bo'lmagan formulalargacha, biz funksional, barqaror kimyoviy muhandislik orqali atrof-muhitni muhofaza qilish va jamoat xavfsizligini birinchi o'ringa qo'yamiz.",
      }
    ],
    footerTitle: 'Spettro Industries',
    footerSub: 'NEMIS MUHANDISLIGI • O\'ZBEK ISHLAB CHIQARISHI',
    footerIso: 'ISO 9001:2015 MUVOFIQLIGI'
  },
  road: {
    tag: 'Bio-PU Texnologiyasi',
    titleLine1: '2K Bio-PU',
    titleLine2: 'Yo\'l Belgilari',
    mainDescBold: 'Yuqori Samarali Xavfsizlikning Barqaror Kelajagi.',
    mainDescText: 'Biz bio-innovatsiyalarni ekstremal sanoat chidamliligi bilan birlashtirib, pand bermaydigan yo\'l belgilari bo\'yog\'ini yaratdik. 90°C da yumshaydigan an\'anaviy termoplastikalardan farqli o\'laroq, bizning 2K Bio-PU matritsamiz 120°C gacha kimyoviy barqaror bo\'lib qoladi.',
    featureText: 'Tunda Yuqori Ko\'rinuvchanlik',
    durabilityTag: 'Chidamlilik Sinovi',
    durabilityTitle: 'Spettro Liniyasi',
    durabilityDesc: 'Spettro 2K ekstremal iqlimga qanday dosh berishini ko\'rish uchun suring.',
    hotTitle: '+120°C',
    hotSub: 'Ekstremal Issiq',
    hotCardTitle: 'YUMSHAMAYDI',
    hotCardDesc: 'O\'ta qizigan asfaltda strukturaviy butunlikni saqlaydi.',
    coldTitle: '-60°C',
    coldSub: 'Ekstremal Sovuq',
    coldCardTitle: 'ELASTIKLIK',
    coldCardDesc: 'Moslashuvchan polimerlar muzlash-erish tsikllarida yorilishning oldini oladi.',
    specs: [
      {
        title: "Termal Barqarorlik",
        subtitle: "Issiqlik va Shina Chidamliligi",
        description: "90°C da yumshaydigan an'anaviy termoplastikalardan farqli o'laroq, bizning 2K Bio-PU matritsamiz 120°C gacha kimyoviy barqaror bo'lib qoladi. Bu O'zbekistonning issiq yozlarida 'shina izlari' va deformatsiyani butunlay yo'q qiladi.",
        stats: [
          { label: "Yumshash nuqtasi", value: ">120°C" },
          { label: "Issiq Shina Sinovi", value: "O'TDI" },
          { label: "Deformatsiya", value: "0%" },
        ]
      },
      {
        title: "Sirt Bog'lanishi",
        subtitle: "0-Sinf Yopishqoqlik",
        description: "G'ovakli substratlar bilan doimiy molekulyar bog'lanishga erishadi. Eski asfaltga, yangi betonga yoki po'latga qo'llanilishidan qat'i nazar, qoplama qulflanadi va siljish kuchlanishi ostida ko'chmaydi.",
        stats: [
          { label: "Yopishqoqlik Sinfi", value: "Sinf 0" },
          { label: "Ajratish Kuchi", value: ">3.5 MPa" },
          { label: "Substratlar", value: "Barcha Turlar" },
        ]
      },
      {
        title: "Abraziv Nazorat",
        subtitle: "Maksimal Yeyilish (Sinf AR3)",
        description: "Ekstremal ishqalanishga chidamlilik uchun AR3 sinfi bilan baholangan. Shinalar va qumdan jismoniy yeyilish doimiy bo'lgan yuqori tirbandlik zonalari, chorrahalar va magistrallar uchun mo'ljallangan.",
        stats: [
          { label: "Yeyilish Reytingi", value: "AR3" },
          { label: "Aylanish Tsikllari", value: "4,000,000" },
          { label: "Massani Yo'qotish", value: "<16mg" },
        ]
      },
      {
        title: "Barqarorlik",
        subtitle: "Bio-Asosli Formula",
        description: "Chidamlilikni qurbon qilmasdan 45% bio-qayta tiklanadigan tarkibdan foydalanadigan birinchi yo'l belgilash bo'yog'i. Kam hid, og'ir metallar yo'q va xavfsizroq qo'llash muhiti uchun ultra past VOC.",
        stats: [
          { label: "Bio Tarkib", value: "45%" },
          { label: "VOC Darajasi", value: "<14 g/L" },
          { label: "Og'ir Metallar", value: "0%" },
        ]
      },
      {
        title: "Optik Fizika",
        subtitle: "Ko'rinuvchanlik va Qalqon",
        description: "Yuqori sindirish ko'rsatkichiga ega shisha munchoqlar to'g'ridan-to'g'ri o'zaro bog'langan polimer matritsasiga o'rnatilgan. Bu tunda yuqori ko'rinuvchanlikni (retro-reflektivlik) va kimyoviy to'kilishlarga chidamlilikni ta'minlaydi.",
        stats: [
          { label: "Oqlik (L*)", value: "92.65" },
          { label: "Yaltiroqlik", value: "86.3" },
          { label: "Retro-Reflektivlik", value: "R5" },
        ]
      }
    ],
    visuals: EN_TRANSLATIONS.road.visuals
  },
  ceramic: {
    title: "Keramik Suvoq",
    subtitle: "Strukturaviy Butunlik Qayta Ko'rib Chiqildi",
    description: "Shisha to'rga mustahkam alternativ bo'lib xizmat qiladigan akril uretan dekorativ qoplama. Yuqori elastiklik va yorilishga chidamlilik uchun ishlab chiqilgan, u oxirgi qoplamani talab qilmaydi va yuqori oqlikni (97 CIELAB) ta'minlaydi.",
    features: ["Oson Qo'llash", "Silliqlashdan Keyin Silliq Yuz", "Kam Changlanish", "Kuchli Yopishqoqlik", "Super Oq", "Ultra Silliq"],
    stats: [
      { label: "Zichlik", value: "1.55 g/cm³" },
      { label: "Sarf", value: "500 g/m²" },
      { label: "Elastiklik", value: "Yuqori" }
    ]
  },
  primer: {
    title: "Chuqur Singuvchi Grunt",
    subtitle: "Sirtni Mustahkamlash",
    description: "G'ovakli substratlarni mustahkamlash va bir xil singishni ta'minlash uchun mo'ljallangan yuqori singuvchan akril grunt. Keyingi qatlamlar uchun yopishqoqlikni yaxshilaydi va sho'rlanishning oldini oladi.",
    features: ["Chuqur Singish", "Ishqorga Chidamli", "Changni Bog'lash", "Suv Asosli", "Eko Formula"],
    stats: [
      { label: "Singish", value: "Mikrog'ovakli" },
      { label: "Sarf", value: "100-150 g/m²" },
      { label: "Qurish Vaqti", value: "1-2 Soat" }
    ]
  },
  colorants: {
    title: "Spettro Ranglari",
    subtitle: "Yuqori Konsentratsiyali Pigment Pastalari",
    description: "Maksimal rang to'yinganligi uchun yuqori tejamkor, UV-chidamli pigment pastalari. Barcha suv asosli materiallar bilan mos keladi.",
    marketingFeatures: [
      "Yuqori Rang To'yinganligi",
      "Yuqori Tejamkorlik",
      "UV-Chidamli Formula",
      "Suv Asosli Moslik"
    ],
    colors: [
      "Tuya (Camel)", "Qizil Oksid", "Apelsin", "Tamaki",
      "Tuproq Rang", "Qizil To'q", "Archa", "Sariq Oksid",
      "Terrakota", "Binafsha", "Sariq", "Ko'k",
      "Oq", "Magenta", "Qizil", "Shokolad",
      "Yashil", "Qora", "Grafit", "Limon"
    ]
  },
  interior: {
    title: 'Bizning Mahsulotlar',
    subtitle: 'Har bir formula uchun texnik xususiyatlar.',
    marketing: 'Sifat va murakkab sharoitlarga chidamlilik bo\'yicha mukammallik uchun yaratilgan premium to\'plamimiz bilan tanishing.',
    products: [
      {
        id: 'viso',
        name: 'VISO',
        type: 'AKRIL',
        subhead: 'Premium Interyer Bo\'yog\'i',
        description: 'Zamonaviy hayot uchun mo\'ljallangan eng toza qoplamani his eting. Metall, shisha, yog\'och, plastmassa, g\'isht va beton uchun mos keladigan UV-chidamli formula.',
        image: ASSETS.bucketViso,
        specs: ['UV-Chidamli', 'Mot/Satin', 'Interyer', 'Cho\'tka Izlari Yo\'q'],
        gallery: [ASSETS.bucketViso, ASSETS.interiorRoom, ASSETS.envBg],
        dataSheet: [
          { label: "Zichlik", value: "1.42 g/cm³" },
          { label: "Yaltiroqlik", value: "Mot (5%) / Satin (10%) / Yarim (20%)" },
          { label: "Yuzalar", value: "Metall, Shisha, Yog'och, Beton" },
          { label: "Xususiyat", value: "UV-Chidamli" }
        ]
      },
      {
        id: 'bianco',
        name: 'BIANCO',
        type: 'UNIVERSAL AKRIL',
        subhead: 'Premium Universal Daraja',
        description: 'Yuqori oqlik va chidamlilikka ega universal akril bo\'yoq. Turli substratlarda ichki va tashqi qo\'llash uchun ideal.',
        image: ASSETS.bucketBianco,
        specs: ['Universal', 'UV-Chidamli', 'Premium', 'Cho\'tka Izlari Yo\'q'],
        gallery: [ASSETS.bucketBianco, ASSETS.interiorRoom, ASSETS.labBg],
        dataSheet: [
          { label: "Zichlik", value: "1.42 g/cm³" },
          { label: "Yaltiroqlik", value: "Mot (5%) / Satin (10%) / Yarim (20%)" },
          { label: "Yuzalar", value: "Metall, Shisha, Yog'och, Plastik" }
        ]
      },
      {
        id: 'celeste',
        name: 'CELESTE',
        type: 'LATEKS',
        subhead: 'UV-Chidamli Lateks',
        description: 'Ajoyib qoplash va ultrabinafsha nurlarga chidamlilikni ta\'minlovchi yuqori samarali lateks bo\'yoq. Aigi 4 soatda quriydi.',
        image: ASSETS.bucketCeleste,
        specs: ['UV-Chidamli', 'Lateks', 'Tez Qurish', 'Cho\'tka Izlari Yo\'q'],
        gallery: [ASSETS.bucketCeleste, ASSETS.envBg, ASSETS.interiorRoom],
        dataSheet: [
          { label: "Tur", value: "Lateks Bo'yoq" },
          { label: "Yaltiroqlik", value: "Mot (5%) / Satin (10%)" },
          { label: "Qurish Vaqti", value: "4 soat" },
          { label: "Xususiyat", value: "UV-Chidamli" }
        ]
      },
      {
        id: 'perla',
        name: 'PERLA',
        type: 'AKRIL-URETAN',
        subhead: 'Universal Emal',
        description: '70% gacha yaltiroqlik darajasiga ega universal akril-uretan emal. UV va yeyilishga yuqori chidamli.',
        image: ASSETS.bucketPerla,
        specs: ['Yuqori Yaltiroq', 'Uretan', 'UV-Chidamli', 'Cho\'tka Izlari Yo\'q'],
        gallery: [ASSETS.bucketPerla, ASSETS.heroPoster, ASSETS.labBg],
        dataSheet: [
          { label: "Tur", value: "Universal Akril-Uretan" },
          { label: "Yaltiroqlik", value: "Mot (5%) - Yaltiroq (70%)" },
          { label: "Qoplash", value: "100 ml/m² (bir qatlam)" },
          { label: "Qurish Vaqti", value: "2 soat" }
        ]
      },
      {
        id: 'maestro',
        name: 'MAESTRO',
        type: 'AKRIL-URETAN',
        subhead: 'Universal Emal',
        description: 'Professional darajadagi universal akril-uretan emal. Optimal qo\'llash uchun muvozanatli zichlik va sarf.',
        image: ASSETS.bucketMaestro,
        specs: ['Professional', 'UV-Chidamli', 'Uretan', 'Cho\'tka Izlari Yo\'q'],
        gallery: [ASSETS.bucketMaestro, ASSETS.partnerBg],
        dataSheet: [
          { label: "Tur", value: "Universal Akril-Uretan" },
          { label: "Zichlik", value: "1.40 g/cm³" },
          { label: "Sarf", value: "120 ml/m²" },
          { label: "Xususiyat", value: "UV-Chidamli" }
        ]
      },
      {
        id: 'sofia',
        name: 'SOFIA',
        type: 'POLIURETAN',
        subhead: 'Poliuretan Dekorativ Qoplama',
        description: 'O\'ziga xos yumshoq (soft-touch) yuzaga ega innovatsion poliuretan dekorativ qoplama. Yuqori dekorativ va premium estetik ilovalar uchun ishlab chiqilgan.',
        image: ASSETS.bucketSofia,
        specs: ['Dekorativ', 'Soft-Touch', 'Innovatsiya', 'Poliuretan'],
        gallery: [ASSETS.bucketSofia, ASSETS.interiorRoom, ASSETS.partnerBg],
        dataSheet: [
          { label: "Zichlik", value: "1.10 g/cm³" },
          { label: "Qoplash", value: "110 ml/m² (bir qatlam)" },
          { label: "Qurish Vaqti", value: "4 soat" },
          { label: "Xususiyat", value: "Soft-touch qoplama" }
        ]
      },
      {
        id: 'primer',
        name: 'PRIMER',
        type: 'GRUNT',
        subhead: 'Chuqur Singuvchi',
        description: 'Chuqur singish (8 mm) uchun 50 nm zarracha o\'lchamiga ega nano-texnologik grunt. Suvoq, g\'isht, beton va gipsokarton uchun mos keladi.',
        image: ASSETS.bucketPrimer,
        specs: ['Nano-Tex', 'Chuqur Singish', 'Mineral Yuzalar'],
        gallery: [ASSETS.bucketPrimer, ASSETS.envBg],
        dataSheet: [
          { label: "Zichlik", value: "1.00 g/cm³" },
          { label: "Sarf", value: "100 g/m²" },
          { label: "Zarracha O'lchami", value: "50 nm" },
          { label: "Singish", value: "8 mm" }
        ]
      }
    ]
  },
  environment: UZ_ENVIRONMENT,
  partner: {
    tag: 'Strategik Hamkorlik',
    title: 'Spettro Bilan Hamkorlik',
    description: 'Biz shunchaki bo\'yoq sotmaymiz; biz meros quramiz. Siz hajmiy aniqlikni qidirayotgan quruvchi bo\'lasizmi yoki eksklyuziv hududni qidirayotgan distribyutor bo\'lasizmi, bizning "Hamkorlik Qutisi" kirish nuqtangizdir. Spettro farqini o\'z tajribangizda his eting.',
    brochureButton: 'Raqamli Broshurani Ko\'rish',
    form: {
      header: 'Arizani Boshlash',
      subHeader: 'Quyida qiziqish sohangizni tanlang.',
      nameLabel: 'To\'liq Ism',
      phoneLabel: 'Telefon Raqami',
      emailLabel: 'Email Manzil',
      messageLabel: 'Loyiha Tafsilotlari / Xabar',
      submit: 'So\'rov Yuborish',
      note: 'Biz odatda 24 soat ichida javob beramiz.',
      interests: {
        roadMarking: 'Yo\'l Belgilari',
        decorative: 'Dekorativ Qoplamalar',
        industrial: 'Sanoat Qoplamalari',
        distributor: 'Distribyutor Bo\'lish'
      }
    }
  },
  brochure: {
    road: {
      heroSub: "Keyingi Avlod Yo'l Belgilash Texnologiyasi",
      safetyTitle: "2K BioPU<br/>Road Marking",
      thermal: "Termal Barqarorlik",
      cycles: "G'ildirak Tsikllari (AR3)",
      vis: "Tungi Ko'rinuvchanlik"
    },
    arch: {
      title: "ARXITEKTURA",
      subtitle: "INTERYER VA EKSTERYER SERIYALARI • 2026 KOLLEKTSIYASI",
      certified: "Sertifikatlangan Ishlab Chiqarish"
    },
    ceramic: {
      tag: "Strukturaviy Alternativ",
      consumption: "Sarf",
      density: "Zichlik",
      whiteness: "Oqlik"
    },
    pigments: {
      bgTitle: "PIGMENTLAR",
      german: "Nemis Xomashyosi"
    },
    cover: {
      title: "REGINA DI COLORE",
      subtitle: "KATALOG 2026",
      tagline: "NEMIS MUHANDISLIGI • O'ZBEK ISHLAB CHIQARISHI"
    },
    ui: {
      back: "Ortga qaytish",
      print: "PDF Chop etish"
    },
    footer: {
      company: "SPETTRO INDUSTRIES",
      text: "NEMIS MUHANDISLIGI • O'ZBEK ISHLAB CHIQARISHI"
    }
  },
  lab: UZ_LAB,
  productModal: UZ_PRODUCT_MODAL
};

export const TRANSLATIONS = {
  EN: EN_TRANSLATIONS,
  RU: RU_TRANSLATIONS,
  UZ: UZ_TRANSLATIONS
};
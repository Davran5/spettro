export const SITE_URL = 'https://spettro.uz';

export const SEO_ROUTES = {
  uz: {
    code: 'uz',
    lang: 'uz',
    path: '/uz/',
    title: "Interyer va fasad bo'yoqlari | Spettro Uzbekistan",
    description:
      "Spettro Uzbekistan Toshkentda interyer bo'yoqlari, fasad qoplamalari, dekorativ qoplamalar va keramik suvoq ishlab chiqaradi. O'zbekiston iqlimi uchun mos 2K Bio-PU yo'l belgilash materiallari ham mavjud.",
    locale: 'uz_UZ',
    ogImage: '/prod_ceramic.webp',
    keywords: [
      "interyer bo'yoqlari",
      "fasad bo'yoqlari",
      "dekorativ qoplamalar",
      "keramik suvoq",
      "boyoq toshkent",
      "boyoq uzbekistan",
      "yo'l belgilash bo'yog'i",
      'Spettro Uzbekistan'
    ],
    staticContent: {
      heading: "O'zbekistonda interyer va fasad bo'yoqlari",
      lead:
        "Spettro Toshkentda Germaniya xomashyosi asosida interyer bo'yoqlari, fasad qoplamalari, dekorativ qoplamalar, keramik suvoq va rang beruvchi kolerlar ishlab chiqaradi.",
      sections: [
        "Mahsulotlar O'zbekistonning issiq yozlari, sovuq qishlari va murakkab qurilish obyektlari uchun ishlab chiqilgan.",
        "Keramik suvoq, chuqur singuvchi grunt va Regina Color kolerlari qurilish hamda pardozlash ishlari uchun bir tizim sifatida taklif qilinadi.",
        "2K Bio-PU yo'l belgilash materiali yuqori harorat, sovuq va abraziv yuklamalarda barqaror ishlash uchun ishlab chiqilgan."
      ]
    }
  },
  ru: {
    code: 'ru',
    lang: 'ru',
    path: '/ru/',
    title: 'Интерьерные и фасадные краски | Spettro Uzbekistan',
    description:
      'Spettro Uzbekistan производит в Ташкенте интерьерные и фасадные краски, декоративные покрытия и керамическую штукатурку. Для климата Узбекистана доступны также материалы 2K Bio-PU для дорожной разметки.',
    locale: 'ru_RU',
    ogImage: '/prod_ceramic.webp',
    keywords: [
      'интерьерные краски',
      'фасадные краски',
      'декоративные покрытия',
      'керамическая штукатурка',
      'краски ташкент',
      'краски узбекистан',
      'дорожная разметка 2K Bio-PU',
      'Spettro Uzbekistan'
    ],
    staticContent: {
      heading: 'Краски и покрытия для интерьера и фасада в Узбекистане',
      lead:
        'Spettro производит в Ташкенте интерьерные и фасадные краски, декоративные покрытия, керамическую штукатурку и колоранты на базе немецкого сырья.',
      sections: [
        'Линейка рассчитана на жаркое лето, холодную зиму и сложные строительные объекты в Узбекистане.',
        'Керамическая штукатурка, грунтовка глубокого проникновения и колоранты Regina Color поставляются как единая система для отделки и защиты поверхностей.',
        'Материал для дорожной разметки 2K Bio-PU сохраняет стабильность при высоких температурах, морозе и интенсивной абразивной нагрузке.'
      ]
    }
  }
};

export const ROUTE_LIST = [SEO_ROUTES.uz, SEO_ROUTES.ru];

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': ['Organization', 'LocalBusiness'],
  name: 'Spettro Uzbekistan',
  url: SITE_URL,
  logo: `${SITE_URL}/logo_sp.webp`,
  image: `${SITE_URL}/prod_ceramic.webp`,
  email: 'info@spettro.uz',
  telephone: '+998948145005',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Tashkent',
    addressCountry: 'UZ'
  },
  areaServed: [
    { '@type': 'Country', name: 'Uzbekistan' },
    { '@type': 'Place', name: 'Central Asia' }
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Spettro Uzbekistan coatings catalog',
    itemListElement: [
      {
        '@type': 'OfferCatalog',
        name: 'Architectural coatings',
        itemListElement: [
          { '@type': 'Thing', name: 'Interior paint' },
          { '@type': 'Thing', name: 'Facade paint' },
          { '@type': 'Thing', name: 'Decorative coating' }
        ]
      },
      {
        '@type': 'OfferCatalog',
        name: 'Decorative and surface systems',
        itemListElement: [
          { '@type': 'Thing', name: 'Ceramic plaster' },
          { '@type': 'Thing', name: 'Deep primer' },
          { '@type': 'Thing', name: 'Colorants' }
        ]
      },
      {
        '@type': 'OfferCatalog',
        name: 'Industrial marking systems',
        itemListElement: [
          { '@type': 'Thing', name: '2K Bio-PU road marking material' }
        ]
      }
    ]
  }
};

export const SITE_URL = 'https://spettro.uz';

export const SEO_ROUTES = {
  uz: {
    code: 'uz',
    lang: 'uz',
    path: '/uz/',
    title: "Spettro Uzbekistan | Bo'yoq, keramik suvoq va yo'l belgilash materiallari",
    description:
      "Spettro Uzbekistan Toshkentda ishlab chiqariladigan ekologik bo'yoqlar, keramik suvoq, kolerlar va 2K Bio-PU yo'l belgilash materiallarini taklif qiladi.",
    locale: 'uz_UZ',
    ogImage: '/prod_ceramic.webp',
    keywords: [
      "bo'yoq uzbekistan",
      "bo'yoq toshkent",
      'keramik suvoq',
      "yo'l belgilash bo'yog'i",
      'Spettro Uzbekistan',
      'ekologik boya',
      'fasad boya',
      'interyer boya'
    ],
    staticContent: {
      heading: "Spettro Uzbekistan - bo'yoq va qoplama materiallari",
      lead:
        "Spettro Toshkentda Germaniya xomashyosi asosida interyer bo'yoqlari, keramik suvoq, chuqur singuvchi grunt, Regina Color kolerlari va ekstremal iqlimga chidamli 2K Bio-PU yo'l belgilash materiallarini ishlab chiqaradi.",
      sections: [
        "O'zbekiston iqlimi uchun ishlab chiqilgan mustahkam, ekologik va kam VOC tarkibli qoplamalar.",
        "Keramik suvoq, dekorativ qoplamalar, fasad va interyer bo'yoqlari hamda rang beruvchi kolerlar.",
        "Yo'l belgilash uchun issiq, sovuq, abraziv yuklama va tungi ko'rinish talablariga mos texnologiyalar."
      ]
    }
  },
  ru: {
    code: 'ru',
    lang: 'ru',
    path: '/ru/',
    title: 'Spettro Uzbekistan | Краски, керамическая штукатурка и дорожная разметка',
    description:
      'Spettro Uzbekistan производит в Ташкенте экологичные краски, керамическую штукатурку, колеры и материалы 2K Bio-PU для дорожной разметки.',
    locale: 'ru_RU',
    ogImage: '/prod_ceramic.webp',
    keywords: [
      'краска узбекистан',
      'краска ташкент',
      'керамическая штукатурка',
      'дорожная разметка',
      'Spettro Uzbekistan',
      'экологичная краска',
      'фасадная краска',
      'интерьерная краска'
    ],
    staticContent: {
      heading: 'Spettro Uzbekistan - краски и защитные покрытия',
      lead:
        'Spettro производит в Ташкенте интерьерные краски, керамическую штукатурку, глубокопроникающий грунт, колеры Regina Color и материалы 2K Bio-PU для дорожной разметки на основе немецкого сырья.',
      sections: [
        'Прочные, экологичные покрытия с низким содержанием VOC, адаптированные к климату Узбекистана.',
        'Керамическая штукатурка, декоративные покрытия, фасадные и интерьерные краски, а также колеровочные системы.',
        'Технологии дорожной разметки для жары, холода, абразивной нагрузки и высокой ночной видимости.'
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
  makesOffer: [
    { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Interior paint' } },
    { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Ceramic plaster' } },
    { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Road marking material' } },
    { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Colorants' } }
  ]
};

import { ColorSwatch } from './types';

// Updated with reliable, high-quality sources
export const ASSETS = {
  // Hero Video: Vibrant ink mixing in water
  heroVideo: "https://www.pexels.com/download/video/7565450/",
  heroPoster: "/hero-poster.webp",

  // Logo
  logo: "/logo_sp.webp",
  logoSymbol: "/logo_s.webp",

  // Science Section: High contrast textures
  iceBg: "/cold_road.webp", // Frozen texture
  fireBg: "/hot_road.webp", // Lava/Fire texture

  // Products: Generic white paint bucket mocks with transparent backgrounds
  bucketViso: "/prod_viso.webp",
  bucketBianco: "/prod_bianco.webp",
  bucketCeleste: "/prod_celeste.webp",
  bucketPerla: "/prod_perla.webp",
  bucketCeramic: "/Ceramic.webp", // Using Ceramic.webp as it seems to be the one
  prodCeramic: "/prod_ceramic.webp",
  bucketMaestro: "/prod_maestro.webp",
  bucketPrimer: "/prod_primer.webp",
  bucketSofia: "/prod_safia.webp",

  // Interiors: Luxury dark room
  interiorRoom: "/interior-room.webp",

  // Road: Dark highway with lights
  roadNight: "/road-night.webp",

  // Environment: Macro leaf/nature
  envBg: "/environment-bg.webp",

  // Lab: Research & Development
  labBg: "/lab-bg.webp",

  // Partner: Architectural/Business context
  partnerBg: "/phil-back.webp",

  // Road Spec Visuals
  hotTire: "/Hot-Tire.webp",
  adhesion: "/Adhesion.webp",
  abrasion: "/Abrasion.webp",
  eco: "/Eco.webp",
  nightViz: "/Night.webp",

  // Plaster Texture
  plasterTexture: "/plaster-texture.webp",
};

export const COLORS: ColorSwatch[] = [
  // Existing
  { id: 'viso', name: 'Viso Blue', hex: '#005281', overlayColor: 'rgba(0, 82, 129, 0.5)' },
  { id: 'bianco', name: 'Bianco Purple', hex: '#350c58', overlayColor: 'rgba(53, 12, 88, 0.5)' },
  { id: 'celeste', name: 'Celeste Dark', hex: '#040404', overlayColor: 'rgba(4, 4, 4, 0.7)' },
  { id: 'perla', name: 'Perla Midnight', hex: '#010e30', overlayColor: 'rgba(1, 14, 48, 0.6)' },
  { id: 'ceramic', name: 'Ceramic Grey', hex: '#cfcfcd', overlayColor: 'rgba(207, 207, 205, 0.2)' },
  { id: 'hydrozol', name: 'Hydrozol Teal', hex: '#1DE9B6', overlayColor: 'rgba(29, 233, 182, 0.2)' },
  { id: 'maestro', name: 'Maestro Gold', hex: '#C5A059', overlayColor: 'rgba(197, 160, 89, 0.3)' },
  { id: 'primer', name: 'Primer White', hex: '#ffffff', overlayColor: 'rgba(255, 255, 255, 0.1)' },
];

export const COLORANTS = [
  { name: 'Camel', hex: '#C19A6B', image: '/Camel.webp' },
  { name: 'Red Oxide', hex: '#7A3530', image: '/Red-Oxide.webp' },
  { name: 'Orange', hex: '#E86A22', image: '/Orange.webp' },
  { name: 'Tabacco', hex: '#63493B', image: '/Tabacco.webp' },
  { name: 'Earthy', hex: '#87654E', image: '/Earthy.webp' },
  { name: 'Red Crimson', hex: '#9E1B32', image: '/Red-Crimson.webp' },
  { name: 'Spruce', hex: '#2C403B', image: '/Spruce.webp' },
  { name: 'Yellow Oxide', hex: '#D49E37', image: '/Yellow-Oxide.webp' },
  { name: 'Terracota', hex: '#B55E42', image: '/Terracota.webp' },
  { name: 'Violet', hex: '#7A4588', image: '/Violet.webp' },
  { name: 'Yellow', hex: '#F2C908', image: '/Yellow.webp' },
  { name: 'Blue', hex: '#1C4996', image: '/Blue.webp' },
  { name: 'White', hex: '#F0EFE9', image: '/White.webp' },
  { name: 'Magenta', hex: '#B33A88', image: '/Magenta.webp' },
  { name: 'Red', hex: '#CC1F27', image: '/Red.webp' },
  { name: 'Choco', hex: '#4A332A', image: '/Choco.webp' },
  { name: 'Green', hex: '#265C36', image: '/Green.webp' },
  { name: 'Black', hex: '#1A1A1A', image: '/Black.webp' },
  { name: 'Graphite', hex: '#3A3A3A', image: '/Graphite.webp' },
  { name: 'Lemon', hex: '#EFD622', image: '/Lemon.webp' },
];

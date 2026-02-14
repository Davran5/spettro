import { ColorSwatch } from './types';

// Updated with reliable, high-quality sources
export const ASSETS = {
  // Hero Video: Vibrant ink mixing in water
  heroVideo: "https://www.pexels.com/download/video/7565450/",
  heroPoster: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=2000&auto=format&fit=crop",

  // Logo
  logo: "/logo_sp.png",
  logoSymbol: "/logo_s.png",

  // Science Section: High contrast textures
  iceBg: "/cold_road.jpg", // Frozen texture
  fireBg: "/hot_road.jpg", // Lava/Fire texture

  // Products: Generic white paint bucket mocks with transparent backgrounds
  bucketViso: "/prod_viso.jpg",
  bucketBianco: "/prod_bianco.jpg",
  bucketCeleste: "/prod_celeste.jpg",
  bucketPerla: "/prod_perla.jpg",
  bucketCeramic: "/Ceramic.jpg", // Using Ceramic.jpg as it seems to be the one
  prodCeramic: "/prod_ceramic.png",
  bucketMaestro: "/prod_maestro.jpg",
  bucketPrimer: "/prod_primer.jpg",
  bucketSofia: "/prod_safia.jpg",

  // Interiors: Luxury dark room
  interiorRoom: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop",

  // Road: Dark highway with lights
  roadNight: "https://i.ibb.co/QvkgNjLL/upscaled-2-K.jpg",

  // Environment: Macro leaf/nature
  envBg: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=2000&auto=format&fit=crop",

  // Lab: Research & Development
  labBg: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2000&auto=format&fit=crop",

  // Partner: Architectural/Business context
  partnerBg: "/phil-back.jpg",

  // Road Spec Visuals
  hotTire: "/Hot-Tire.png",
  adhesion: "/Adhesion.png",
  abrasion: "/Abrasion.png",
  eco: "/Eco.png",
  nightViz: "/Night.png",

  // Plaster Texture
  plasterTexture: "https://images.unsplash.com/photo-1594904351111-a072f80b1a71?q=80&w=2000&auto=format&fit=crop",
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
  { name: 'Camel', hex: '#C19A6B', image: '/Camel.png' },
  { name: 'Red Oxide', hex: '#7A3530', image: '/Red-Oxide.png' },
  { name: 'Orange', hex: '#E86A22', image: '/Orange.png' },
  { name: 'Tabacco', hex: '#63493B', image: '/Tabacco.png' },
  { name: 'Earthy', hex: '#87654E', image: '/Earthy.png' },
  { name: 'Red Crimson', hex: '#9E1B32', image: '/Red-Crimson.png' },
  { name: 'Spruce', hex: '#2C403B', image: '/Spruce.png' },
  { name: 'Yellow Oxide', hex: '#D49E37', image: '/Yellow-Oxide.png' },
  { name: 'Terracota', hex: '#B55E42', image: '/Terracota.png' },
  { name: 'Violet', hex: '#7A4588', image: '/Violet.png' },
  { name: 'Yellow', hex: '#F2C908', image: '/Yellow.png' },
  { name: 'Blue', hex: '#1C4996', image: '/Blue.png' },
  { name: 'White', hex: '#F0EFE9', image: '/White.png' },
  { name: 'Magenta', hex: '#B33A88', image: '/Magenta.png' },
  { name: 'Red', hex: '#CC1F27', image: '/Red.png' },
  { name: 'Choco', hex: '#4A332A', image: '/Choco.png' },
  { name: 'Green', hex: '#265C36', image: '/Green.png' },
  { name: 'Black', hex: '#1A1A1A', image: '/Black.png' },
  { name: 'Graphite', hex: '#3A3A3A', image: '/Graphite.png' },
  { name: 'Lemon', hex: '#EFD622', image: '/Lemon.png' },
];
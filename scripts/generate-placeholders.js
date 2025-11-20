// Simple script to create placeholder images
// Run with: node scripts/generate-placeholders.js

const fs = require('fs');
const path = require('path');

// Create a simple SVG placeholder
function createSVGPlaceholder(width, height, text, bgColor = '#f3f4f6', textColor = '#6b7280') {
  return `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="${bgColor}"/>
  <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="16" fill="${textColor}" text-anchor="middle" dominant-baseline="middle">${text}</text>
</svg>`;
}

const images = [
  // Catering items
  { path: 'public/images/catering/veg-thali.jpg', name: 'Veg Thali', w: 400, h: 300 },
  { path: 'public/images/catering/nonveg-thali.jpg', name: 'Non-Veg Thali', w: 400, h: 300 },
  { path: 'public/images/catering/biryani.jpg', name: 'Biryani', w: 400, h: 300 },
  { path: 'public/images/catering/paneer-tikka.jpg', name: 'Paneer Tikka', w: 400, h: 300 },
  { path: 'public/images/catering/chicken-tikka.jpg', name: 'Chicken Tikka', w: 400, h: 300 },
  { path: 'public/images/catering/samosa.jpg', name: 'Samosa', w: 400, h: 300 },
  { path: 'public/images/catering/gulab-jamun.jpg', name: 'Gulab Jamun', w: 400, h: 300 },
  { path: 'public/images/catering/rasgulla.jpg', name: 'Rasgulla', w: 400, h: 300 },
  { path: 'public/images/catering/jalebi.jpg', name: 'Jalebi', w: 400, h: 300 },
  { path: 'public/images/catering/barfi.jpg', name: 'Barfi', w: 400, h: 300 },
  { path: 'public/images/catering/poha.jpg', name: 'Poha', w: 400, h: 300 },
  { path: 'public/images/catering/upma.jpg', name: 'Upma', w: 400, h: 300 },
  { path: 'public/images/catering/idli-sambar.jpg', name: 'Idli Sambar', w: 400, h: 300 },
  { path: 'public/images/catering/dosa.jpg', name: 'Dosa', w: 400, h: 300 },
  { path: 'public/images/catering/paratha.jpg', name: 'Paratha', w: 400, h: 300 },
  { path: 'public/images/catering/ice-cream.jpg', name: 'Ice Cream', w: 400, h: 300 },
  { path: 'public/images/catering/fruit-platter.jpg', name: 'Fruit Platter', w: 400, h: 300 },
  { path: 'public/images/catering/pastry.jpg', name: 'Pastry', w: 400, h: 300 },
  { path: 'public/images/catering/chaat.jpg', name: 'Chaat', w: 400, h: 300 },
  { path: 'public/images/catering/pasta.jpg', name: 'Pasta', w: 400, h: 300 },
  { path: 'public/images/catering/bbq.jpg', name: 'BBQ', w: 400, h: 300 },
  { path: 'public/images/catering/halwa.jpg', name: 'Halwa', w: 400, h: 300 },
  { path: 'public/images/catering/puri.jpg', name: 'Puri', w: 400, h: 300 },
  { path: 'public/images/catering/kachori.jpg', name: 'Kachori', w: 400, h: 300 },
  
  // DJ Services
  { path: 'public/images/dj/dj-basic.jpg', name: 'DJ Basic', w: 400, h: 400 },
  { path: 'public/images/dj/dj-premium.jpg', name: 'DJ Premium', w: 400, h: 400 },
  { path: 'public/images/dj/dj-deluxe.jpg', name: 'DJ Deluxe', w: 400, h: 400 },
  { path: 'public/images/dj/sound-system.jpg', name: 'Sound System', w: 400, h: 400 },
  { path: 'public/images/dj/karaoke.jpg', name: 'Karaoke', w: 400, h: 400 },
  { path: 'public/images/dj/live-band.jpg', name: 'Live Band', w: 400, h: 400 },
  
  // Categories
  { path: 'public/images/categories/breakfast.jpg', name: 'Breakfast', w: 400, h: 400 },
  { path: 'public/images/categories/lunch-dinner.jpg', name: 'Lunch/Dinner', w: 400, h: 400 },
  { path: 'public/images/categories/snacks.jpg', name: 'Snacks', w: 400, h: 400 },
  { path: 'public/images/categories/sweets.jpg', name: 'Sweets', w: 400, h: 400 },
  { path: 'public/images/categories/desserts.jpg', name: 'Desserts', w: 400, h: 400 },
  { path: 'public/images/categories/live-counters.jpg', name: 'Live Counters', w: 400, h: 400 },
  { path: 'public/images/categories/halwai.jpg', name: 'Halwai', w: 400, h: 400 },
  { path: 'public/images/categories/dj-sound.jpg', name: 'DJ & Sound', w: 400, h: 400 },
  
  // About
  { path: 'public/images/about/hero.jpg', name: 'About Hero', w: 1200, h: 600 },
];

images.forEach(({ path: filePath, name, w, h }) => {
  const fullPath = path.join(process.cwd(), filePath);
  const svg = createSVGPlaceholder(w, h, name, '#f97316', '#ffffff');
  // Save as SVG (Next.js Image component supports SVG)
  const svgPath = fullPath.replace('.jpg', '.svg');
  fs.writeFileSync(svgPath, svg);
  console.log(`Created: ${svgPath}`);
});

console.log('\n✅ All placeholder images created!');
console.log('Note: These are SVG placeholders. Replace with actual JPG/PNG images for production.');


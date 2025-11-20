import { Item } from '@/store/useStore';

// Catering Items with real image URLs
export const cateringItems: Item[] = [
  { id: 'cat-1', name: 'Veg Thali', category: 'Lunch/Dinner', image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&h=600&fit=crop', price: 250, description: 'Delicious vegetarian thali with multiple dishes' },
  { id: 'cat-2', name: 'Non-Veg Thali', category: 'Lunch/Dinner', image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800&h=600&fit=crop', price: 350, description: 'Hearty non-vegetarian thali with chicken curry' },
  { id: 'cat-3', name: 'Biryani', category: 'Lunch/Dinner', image: 'https://images.unsplash.com/photo-1563379091339-03246963d96a?w=800&h=600&fit=crop', price: 300, description: 'Aromatic basmati rice with spices and meat' },
  { id: 'cat-4', name: 'Paneer Tikka', category: 'Snacks', image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&h=600&fit=crop', price: 200, description: 'Grilled paneer cubes with spices' },
  { id: 'cat-5', name: 'Chicken Tikka', category: 'Snacks', image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=800&h=600&fit=crop', price: 250, description: 'Tender grilled chicken pieces' },
  { id: 'cat-6', name: 'Samosa', category: 'Snacks', image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&h=600&fit=crop', price: 50, description: 'Crispy fried samosas with filling' },
  { id: 'cat-7', name: 'Gulab Jamun', category: 'Sweets', image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&h=600&fit=crop', price: 150, description: 'Sweet milk dumplings in sugar syrup' },
  { id: 'cat-8', name: 'Rasgulla', category: 'Sweets', image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&h=600&fit=crop', price: 150, description: 'Soft spongy balls in sugar syrup' },
  { id: 'cat-9', name: 'Jalebi', category: 'Sweets', image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&h=600&fit=crop', price: 120, description: 'Crispy orange swirls in sugar syrup' },
  { id: 'cat-10', name: 'Barfi', category: 'Sweets', image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&h=600&fit=crop', price: 180, description: 'Traditional milk-based sweet' },
  { id: 'cat-11', name: 'Poha', category: 'Breakfast', image: 'https://images.unsplash.com/photo-1534939561126-855b8675edd7?w=800&h=600&fit=crop', price: 80, description: 'Flattened rice with vegetables and spices' },
  { id: 'cat-12', name: 'Upma', category: 'Breakfast', image: 'https://images.unsplash.com/photo-1534939561126-855b8675edd7?w=800&h=600&fit=crop', price: 80, description: 'Semolina cooked with vegetables' },
  { id: 'cat-13', name: 'Idli Sambar', category: 'Breakfast', image: 'https://images.unsplash.com/photo-1534939561126-855b8675edd7?w=800&h=600&fit=crop', price: 100, description: 'Steamed rice cakes with lentil curry' },
  { id: 'cat-14', name: 'Dosa', category: 'Breakfast', image: 'https://images.unsplash.com/photo-1534939561126-855b8675edd7?w=800&h=600&fit=crop', price: 120, description: 'Crispy fermented crepe with chutney' },
  { id: 'cat-15', name: 'Paratha', category: 'Breakfast', image: 'https://images.unsplash.com/photo-1534939561126-855b8675edd7?w=800&h=600&fit=crop', price: 100, description: 'Flaky flatbread with butter' },
  { id: 'cat-16', name: 'Ice Cream Counter', category: 'Desserts', image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&h=600&fit=crop', price: 200, description: 'Live ice cream counter with multiple flavors' },
  { id: 'cat-17', name: 'Fruit Platter', category: 'Desserts', image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&h=600&fit=crop', price: 250, description: 'Fresh seasonal fruits arranged beautifully' },
  { id: 'cat-18', name: 'Pastry Counter', category: 'Desserts', image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&h=600&fit=crop', price: 300, description: 'Assorted pastries and cakes' },
  { id: 'cat-19', name: 'Live Chaat Counter', category: 'Live Counters', image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&h=600&fit=crop', price: 150, description: 'Live preparation of various chaat items' },
  { id: 'cat-20', name: 'Live Pasta Counter', category: 'Live Counters', image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&h=600&fit=crop', price: 200, description: 'Fresh pasta made to order' },
  { id: 'cat-21', name: 'Live BBQ Counter', category: 'Live Counters', image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=800&h=600&fit=crop', price: 350, description: 'Grilled items prepared live' },
  { id: 'cat-22', name: 'Halwa', category: 'Halwai Items', image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&h=600&fit=crop', price: 180, description: 'Traditional semolina halwa' },
  { id: 'cat-23', name: 'Puri', category: 'Halwai Items', image: 'https://images.unsplash.com/photo-1534939561126-855b8675edd7?w=800&h=600&fit=crop', price: 100, description: 'Deep-fried puffed bread' },
  { id: 'cat-24', name: 'Kachori', category: 'Halwai Items', image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&h=600&fit=crop', price: 80, description: 'Spiced lentil-filled pastry' },
];

// DJ & Sound Services with real image URLs
export const djServices: Item[] = [
  { id: 'dj-1', name: 'DJ Package - Basic', category: 'DJ & Sound', image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&h=600&fit=crop', price: 5000, description: 'Basic DJ setup with sound system for small events' },
  { id: 'dj-2', name: 'DJ Package - Premium', category: 'DJ & Sound', image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&h=600&fit=crop', price: 10000, description: 'Premium DJ setup with professional sound system' },
  { id: 'dj-3', name: 'DJ Package - Deluxe', category: 'DJ & Sound', image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&h=600&fit=crop', price: 15000, description: 'Deluxe package with lighting and sound effects' },
  { id: 'dj-4', name: 'Sound System Only', category: 'DJ & Sound', image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&h=600&fit=crop', price: 3000, description: 'Professional sound system rental' },
  { id: 'dj-5', name: 'Karaoke Setup', category: 'DJ & Sound', image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&h=600&fit=crop', price: 4000, description: 'Complete karaoke system with microphones' },
  { id: 'dj-6', name: 'Live Band Setup', category: 'DJ & Sound', image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&h=600&fit=crop', price: 20000, description: 'Full setup for live band performance' },
];

export const categories = [
  'All',
  'Breakfast',
  'Lunch/Dinner',
  'Snacks',
  'Sweets',
  'Desserts',
  'Live Counters',
  'Halwai Items',
];

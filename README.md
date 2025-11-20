# A-Catters - Premium Catering & Event Services

A full-featured Next.js 14 website for a catering and event service provider with complete menu management, enquiry system, and DJ & sound services.

## Features

- 🏠 **Home Page** - Hero banner, category grid, and CTA buttons
- 🍽️ **Catering Page** - Browse items by category with "Add to Enquiry" functionality
- 🎵 **DJ & Sound Page** - View DJ packages and sound services
- 📋 **Selected Items Page** - Review selected items, remove items, proceed to query form
- 📝 **Query Form** - Submit enquiries with event details
- ℹ️ **About Page** - Company information and services
- 📞 **Contact Page** - Contact information and enquiry form
- 🎨 **Modern UI** - Responsive design with Tailwind CSS
- 🗃️ **Global State** - Zustand for managing selected items
- 🔌 **API Integration** - Query submission API endpoint

## Tech Stack

- **Next.js 14** (App Router)
- **React 18**
- **TypeScript**
- **Tailwind CSS**
- **Zustand** (State Management)

## Getting Started

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm start
```

## Project Structure

```
a-catters/
├── app/
│   ├── api/
│   │   └── query/
│   │       └── route.ts          # API endpoint for query submission
│   ├── about/
│   │   └── page.tsx              # About page
│   ├── catering/
│   │   └── page.tsx              # Catering menu page
│   ├── contact/
│   │   └── page.tsx              # Contact page
│   ├── dj-sound/
│   │   └── page.tsx              # DJ & Sound services page
│   ├── query-form/
│   │   └── page.tsx              # Query form page
│   ├── selected-items/
│   │   └── page.tsx              # Selected items page
│   ├── layout.tsx                # Root layout
│   ├── page.tsx                  # Home page
│   └── globals.css               # Global styles
├── components/
│   ├── Header.tsx                # Navigation header
│   └── Footer.tsx                # Footer component
├── data/
│   └── items.ts                  # Dummy data for items
├── store/
│   └── useStore.ts               # Zustand store for global state
├── public/
│   └── images/                   # Image assets
│       ├── catering/             # Catering item images
│       ├── dj/                   # DJ service images
│       ├── categories/           # Category images
│       └── about/                # About page images
└── scripts/
    └── generate-placeholders.js  # Script to generate placeholder images
```

## Image Placeholders

The project includes SVG placeholder images. To replace them with actual images:

1. Replace the SVG files in `/public/images/` with your actual JPG/PNG images
2. Update the image paths in `data/items.ts` to use `.jpg` or `.png` extensions
3. Ensure images are optimized for web (recommended: WebP format)

## API Endpoint

### POST `/api/query`

Submits an enquiry form with the following data:

```json
{
  "name": "John Doe",
  "phone": "+91 98765 43210",
  "eventDate": "2024-12-25",
  "location": "Event Venue Address",
  "message": "Additional information",
  "selectedItems": [...]
}
```

The API logs the data and saves it to `data/queries/` directory as JSON files.

## State Management

The application uses Zustand for global state management. The store manages:
- Selected items for enquiry
- Add/remove item functions
- Clear all items function

## Customization

### Adding New Items

Edit `data/items.ts` to add new catering items or DJ services:

```typescript
{
  id: 'unique-id',
  name: 'Item Name',
  category: 'Category Name',
  image: '/images/path/to/image.svg',
  price: 100,
  description: 'Item description'
}
```

### Styling

The project uses Tailwind CSS. Customize colors and styles in:
- `tailwind.config.ts` - Tailwind configuration
- `app/globals.css` - Global CSS styles

## License

This project is created for demonstration purposes.

"# A-Catters007" 

'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { useStore } from '@/store/useStore';
import { cateringItems, categories } from '@/data/items';
import { Item } from '@/store/useStore';

function CateringContent() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get('category');
  const [selectedCategory, setSelectedCategory] = useState(categoryParam || 'All');
  const [filteredItems, setFilteredItems] = useState<Item[]>(cateringItems);
  const addItem = useStore((state) => state.addItem);

  useEffect(() => {
    const category = searchParams.get('category');
    if (category) {
      setSelectedCategory(category);
    }
  }, [searchParams]);

  useEffect(() => {
    if (selectedCategory === 'All') {
      setFilteredItems(cateringItems);
    } else {
      setFilteredItems(cateringItems.filter(item => item.category === selectedCategory));
    }
  }, [selectedCategory]);

  const handleAddToEnquiry = (item: Item) => {
    addItem(item);
    alert(`${item.name} added to enquiry!`);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-4 text-gray-800">
        Our Catering Menu
      </h1>
      <p className="text-center text-gray-600 mb-8">
        Select items to add to your enquiry
      </p>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-2 rounded-full transition ${
              selectedCategory === category
                ? 'bg-[#d2ae6d] text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Items Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
          >
            <div className="relative h-48 w-full">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{item.name}</h3>
              <p className="text-sm text-gray-600 mb-2">{item.category}</p>
              {item.description && (
                <p className="text-sm text-gray-500 mb-3">{item.description}</p>
              )}
              {item.price && (
                <p className="text-lg font-bold text-[#d2ae6d] mb-3">
                  ₹{item.price}
                </p>
              )}
              <button
                onClick={() => handleAddToEnquiry(item)}
                className="w-full bg-[#d2ae6d] text-white py-2 rounded-lg text-sm font-medium hover:bg-[#b8955a] transition"
              >
                Add to Enquiry
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredItems.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-600 text-lg">No items found in this category.</p>
        </div>
      )}

      {/* CTA */}
      <div className="text-center mt-12">
        <Link
          href="/selected-items"
          className="inline-block bg-[#d2ae6d] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#b8955a] transition shadow-lg"
        >
          View Selected Items
        </Link>
      </div>
    </div>
  );
}

export default function CateringPage() {
  return (
    <Suspense fallback={
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-4 text-gray-800">
          Our Catering Menu
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Loading...
        </p>
      </div>
    }>
      <CateringContent />
    </Suspense>
  );
}


'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useStore } from '@/store/useStore';
import { djServices } from '@/data/items';
import { Item } from '@/store/useStore';

export default function DJSoundPage() {
  const addItem = useStore((state) => state.addItem);

  const handleAddToEnquiry = (item: Item) => {
    addItem(item);
    alert(`${item.name} added to enquiry!`);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-4 text-gray-800">
        DJ & Sound Services
      </h1>
      <p className="text-center text-gray-600 mb-12">
        Professional DJ and sound system services for your events
      </p>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {djServices.map((service) => (
          <div
            key={service.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
          >
            <div className="relative h-64 w-full">
              <Image
                src={service.image}
                alt={service.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2 text-gray-800">{service.name}</h3>
              {service.description && (
                <p className="text-gray-600 mb-4">{service.description}</p>
              )}
              {service.price && (
                <p className="text-2xl font-bold text-[#d2ae6d] mb-4">
                  ₹{service.price.toLocaleString()}
                </p>
              )}
              <button
                onClick={() => handleAddToEnquiry(service)}
                className="w-full bg-[#d2ae6d] text-white py-3 rounded-lg text-sm font-medium hover:bg-[#b8955a] transition"
              >
                Add to Enquiry
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Additional Info */}
      <div className="bg-gray-100 rounded-lg p-8 mb-12">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Why Choose Our DJ Services?</h2>
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start">
            <span className="text-[#d2ae6d] mr-2">✓</span>
            <span>Professional DJs with years of experience</span>
          </li>
          <li className="flex items-start">
            <span className="text-[#d2ae6d] mr-2">✓</span>
            <span>High-quality sound systems and equipment</span>
          </li>
          <li className="flex items-start">
            <span className="text-[#d2ae6d] mr-2">✓</span>
            <span>Customizable packages for all event sizes</span>
          </li>
          <li className="flex items-start">
            <span className="text-[#d2ae6d] mr-2">✓</span>
            <span>Lighting and special effects available</span>
          </li>
          <li className="flex items-start">
            <span className="text-[#d2ae6d] mr-2">✓</span>
            <span>On-time setup and professional service</span>
          </li>
        </ul>
      </div>

      {/* CTA */}
      <div className="text-center">
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


'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useStore } from '@/store/useStore';

export default function SelectedItemsPage() {
  const selectedItems = useStore((state) => state.selectedItems);
  const removeItem = useStore((state) => state.removeItem);

  const handleRemove = (itemId: string) => {
    removeItem(itemId);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-4 text-gray-800">
        Selected Items
      </h1>
      <p className="text-center text-gray-600 mb-8">
        Review your selected items and proceed to submit your enquiry
      </p>

      {selectedItems.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-xl text-gray-600 mb-6">No items selected yet.</p>
          <Link
            href="/catering"
            className="inline-block bg-[#d2ae6d] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#b8955a] transition"
          >
            Browse Catering Menu
          </Link>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {selectedItems.map((item) => (
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
                  {item.price && (
                    <p className="text-lg font-bold text-[#d2ae6d] mb-3">
                      ₹{item.price}
                    </p>
                  )}
                  <button
                    onClick={() => handleRemove(item.id)}
                    className="w-full bg-red-600 text-white py-2 rounded-lg font-semibold hover:bg-red-700 transition"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gray-100 rounded-lg p-6 mb-8">
            <div className="flex justify-between items-center mb-4">
              <span className="text-xl font-semibold text-gray-800">
                Total Items:
              </span>
              <span className="text-2xl font-bold text-[#d2ae6d]">
                {selectedItems.length}
              </span>
            </div>
            {selectedItems.reduce((sum, item) => sum + (item.price || 0), 0) > 0 && (
              <div className="flex justify-between items-center">
                <span className="text-xl font-semibold text-gray-800">
                  Estimated Total:
                </span>
                <span className="text-2xl font-bold text-[#d2ae6d]">
                  ₹{selectedItems.reduce((sum, item) => sum + (item.price || 0), 0).toLocaleString()}
                </span>
              </div>
            )}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/catering"
              className="bg-gray-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-700 transition text-center"
            >
              Add More Items
            </Link>
            <Link
              href="/query-form"
              className="bg-[#d2ae6d] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#b8955a] transition shadow-lg text-center"
            >
              Proceed to Query Form
            </Link>
          </div>
        </>
      )}
    </div>
  );
}


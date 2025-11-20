'use client';

import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { useStore } from '@/store/useStore';

export default function QueryFormPage() {
  const router = useRouter();
  const selectedItems = useStore((state) => state.selectedItems);
  const clearItems = useStore((state) => state.clearItems);
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    eventDate: '',
    location: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/query', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          selectedItems: selectedItems,
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        clearItems();
        // Reset form
        setFormData({
          name: '',
          phone: '',
          eventDate: '',
          location: '',
          message: '',
        });
        // Redirect after 3 seconds
        setTimeout(() => {
          router.push('/');
        }, 3000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-2xl">
      <h1 className="text-4xl font-bold text-center mb-4 text-gray-800">
        Submit Your Enquiry
      </h1>
      <p className="text-center text-gray-600 mb-8">
        Fill in the details below and we'll get back to you soon
      </p>

      {selectedItems.length > 0 && (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <p className="text-sm text-blue-800">
            <strong>{selectedItems.length} item(s)</strong> will be included in your enquiry.
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-8">
        <div className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
              Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d2ae6d] focus:border-transparent"
              placeholder="Your full name"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d2ae6d] focus:border-transparent"
              placeholder="+91 98765 43210"
            />
          </div>

          <div>
            <label htmlFor="eventDate" className="block text-sm font-semibold text-gray-700 mb-2">
              Event Date *
            </label>
            <input
              type="date"
              id="eventDate"
              name="eventDate"
              required
              value={formData.eventDate}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d2ae6d] focus:border-transparent"
            />
          </div>

          <div>
            <label htmlFor="location" className="block text-sm font-semibold text-gray-700 mb-2">
              Event Location *
            </label>
            <input
              type="text"
              id="location"
              name="location"
              required
              value={formData.location}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d2ae6d] focus:border-transparent"
              placeholder="Event venue address"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d2ae6d] focus:border-transparent"
              placeholder="Any special requirements or additional information..."
            />
          </div>

          {/* Hidden field for selected items */}
          <input
            type="hidden"
            name="selectedItems"
            value={JSON.stringify(selectedItems)}
          />

          {submitStatus === 'success' && (
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <p className="text-green-800 font-semibold">
                ✓ Enquiry submitted successfully! We'll contact you soon. Redirecting...
              </p>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <p className="text-red-800 font-semibold">
                ✗ There was an error submitting your enquiry. Please try again.
              </p>
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#d2ae6d] text-white py-3 rounded-lg font-semibold hover:bg-[#b8955a] transition disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Submitting...' : 'Submit Enquiry'}
          </button>
        </div>
      </form>
    </div>
  );
}


import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const categories = [
    { name: 'Breakfast', image: 'https://images.unsplash.com/photo-1534939561126-855b8675edd7?w=600&h=600&fit=crop', link: '/catering?category=Breakfast' },
    { name: 'Lunch/Dinner', image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&h=600&fit=crop', link: '/catering?category=Lunch/Dinner' },
    { name: 'Snacks', image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&h=600&fit=crop', link: '/catering?category=Snacks' },
    { name: 'Sweets', image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600&h=600&fit=crop', link: '/catering?category=Sweets' },
    { name: 'Desserts', image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600&h=600&fit=crop', link: '/catering?category=Desserts' },
    { name: 'Live Counters', image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&h=600&fit=crop', link: '/catering?category=Live Counters' },
    { name: 'Halwai Items', image: 'https://images.unsplash.com/photo-1534939561126-855b8675edd7?w=600&h=600&fit=crop', link: '/catering?category=Halwai Items' },
    { name: 'DJ & Sound', image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=600&h=600&fit=crop', link: '/dj-sound' },
  ];

  return (
    <div>
      {/* Hero Banner */}
      <section className="relative h-[600px] bg-gradient-to-r from-[#d2ae6d] to-[#b8955a] flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Premium Catering & Event Services
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Making your special occasions unforgettable with delicious food and professional services
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/catering"
              className="bg-white text-[#d2ae6d] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition shadow-lg"
            >
              Explore Catering
            </Link>
            <Link
              href="/contact"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#d2ae6d] transition"
            >
              Get Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Category Grid */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Our Services
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={category.link}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-square relative">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-semibold text-lg group-hover:text-[#d2ae6d] transition">
                    {category.name}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-gray-800">
            Ready to Plan Your Event?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Browse our menu, select your favorite items, and send us your enquiry. 
            We'll get back to you with the best quote!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/catering"
              className="bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition shadow-lg"
            >
              View Menu
            </Link>
            <Link
              href="/contact"
              className="bg-[#b8955a] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#a0824a] transition shadow-lg"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}


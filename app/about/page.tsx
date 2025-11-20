import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-4 text-gray-800">
        About A-Catters
      </h1>
      
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="relative h-64 md:h-96 rounded-lg overflow-hidden mb-12">
          <Image
            src="https://images.unsplash.com/photo-1556911220-bff31c812dba?w=1200&h=600&fit=crop"
            alt="About A-Catters"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="space-y-8 text-gray-700">
          <section>
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Our Story</h2>
            <p className="text-lg leading-relaxed">
              A-Catters has been serving exceptional catering and event services for over a decade. 
              We started with a simple mission: to make every event memorable through delicious food 
              and professional service. Today, we are one of the most trusted names in the catering 
              industry, known for our quality, reliability, and attention to detail.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4 text-gray-800">What We Offer</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-[#d2ae6d]">Catering Services</h3>
                <p>
                  From breakfast to dinner, we offer a complete range of catering services including 
                  traditional Indian cuisine, snacks, sweets, live counters, and desserts. Our menu 
                  is carefully crafted to suit all tastes and dietary preferences.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-[#d2ae6d]">DJ & Sound</h3>
                <p>
                  Complete DJ and sound system services for all types of events. We provide professional 
                  equipment, experienced DJs, and customizable packages to make your event truly special.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Why Choose Us</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-[#d2ae6d] mr-3 text-2xl">✓</span>
                <div>
                  <strong className="text-gray-800">Quality Food:</strong>
                  <span className="ml-2">We use only the freshest ingredients and follow strict hygiene standards.</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#d2ae6d] mr-3 text-2xl">✓</span>
                <div>
                  <strong className="text-gray-800">Experienced Team:</strong>
                  <span className="ml-2">Our chefs and staff have years of experience in the catering industry.</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#d2ae6d] mr-3 text-2xl">✓</span>
                <div>
                  <strong className="text-gray-800">Customizable Packages:</strong>
                  <span className="ml-2">We work with you to create packages that fit your budget and requirements.</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#d2ae6d] mr-3 text-2xl">✓</span>
                <div>
                  <strong className="text-gray-800">On-Time Service:</strong>
                  <span className="ml-2">We pride ourselves on punctuality and professional service delivery.</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#d2ae6d] mr-3 text-2xl">✓</span>
                <div>
                  <strong className="text-gray-800">Affordable Pricing:</strong>
                  <span className="ml-2">Competitive prices without compromising on quality.</span>
                </div>
              </li>
            </ul>
          </section>

          <section className="bg-[#d2ae6d]/10 rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Our Commitment</h2>
            <p className="text-lg leading-relaxed">
              At A-Catters, we believe that every event is special and deserves the best. Whether it's 
              a small family gathering or a large corporate event, we treat each occasion with the same 
              level of dedication and care. Our goal is to exceed your expectations and make your event 
              a resounding success.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}


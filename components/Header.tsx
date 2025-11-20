'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useStore } from '@/store/useStore';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const totalItems = useStore((state) => state.getTotalItems());

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-[#d2ae6d]">
            A-Catters
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-gray-700 hover:text-[#d2ae6d] transition">
              Home
            </Link>
            <Link href="/catering" className="text-gray-700 hover:text-[#d2ae6d] transition">
              Catering
            </Link>
            <Link href="/dj-sound" className="text-gray-700 hover:text-[#d2ae6d] transition">
              DJ & Sound
            </Link>
            <Link 
              href="/selected-items" 
              className="relative text-gray-700 hover:text-[#d2ae6d] transition"
            >
              Selected Items
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-6 bg-[#d2ae6d] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-[#d2ae6d] transition">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-[#d2ae6d] transition">
              Contact
            </Link>
          </div>

          {/* Mobile: Cart Icon and Hamburger */}
          <div className="md:hidden flex items-center gap-4">
            <Link 
              href="/selected-items" 
              className="relative text-gray-700"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#d2ae6d] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
            
            {/* Hamburger Menu Button */}
            <button
              onClick={toggleMenu}
              className="text-gray-700 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t pt-4 animate-fadeIn">
            <div className="flex flex-col space-y-3">
              <Link 
                href="/" 
                className="text-gray-700 hover:text-[#d2ae6d] transition py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/catering" 
                className="text-gray-700 hover:text-[#d2ae6d] transition py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Catering
              </Link>
              <Link 
                href="/dj-sound" 
                className="text-gray-700 hover:text-[#d2ae6d] transition py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                DJ & Sound
              </Link>
              <Link 
                href="/selected-items" 
                className="text-gray-700 hover:text-[#d2ae6d] transition py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Selected Items
              </Link>
              <Link 
                href="/about" 
                className="text-gray-700 hover:text-[#d2ae6d] transition py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/contact" 
                className="text-gray-700 hover:text-[#d2ae6d] transition py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

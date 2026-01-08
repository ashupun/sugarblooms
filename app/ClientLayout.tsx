"use client";

import type React from "react";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import {
  Menu,
  X,
  Instagram,
  Search,
  Heart,
  ArrowRightLeft,
} from "lucide-react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { SearchOverlay } from "@/components/ui/search-overlay";
import { useState, useEffect, useRef } from "react";

const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        menuButtonRef.current &&
        !menuButtonRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Close menu on any scroll
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }

      if (currentScrollY < lastScrollY) {
        // Scrolling up
        setIsVisible(true);
      } else if (
        currentScrollY > lastScrollY &&
        currentScrollY > window.innerHeight * 0.25
      ) {
        // Scrolling down and past 25% of viewport height
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, isMenuOpen]);

  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          href="/apple-touch-icon.png"
          sizes="180x180"
        />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <style>
          {`
            * {
              -webkit-user-select: none;
              -ms-user-select: none;
              user-select: none;
              -webkit-touch-callout: none;
            }
            img {
              -webkit-user-drag: none;
              -khtml-user-drag: none;
              -moz-user-drag: none;
              -o-user-drag: none;
              user-drag: none;
              pointer-events: none;
            }
            a, button, input, .clickable {
              user-select: none !important;
              -webkit-user-select: none !important;
              -webkit-touch-callout: none !important;
              cursor: pointer !important;
            }
          `}
        </style>
      </head>
      <body
        className={dmSans.className}
        onContextMenu={(e) => e.preventDefault()}
      >
        <div className="min-h-screen relative z-10">
          {/* Navigation */}
          <header
            className={`fixed left-0 right-0 z-50 transition-all duration-300 ${
              isVisible ? "top-0 opacity-100" : "-top-24 opacity-0"
            }`}
          >
            <div className="bg-pink-600 text-white text-center py-2 text-sm font-medium tracking-wide">
              Grand Opening: August 1st, 2026 | 20% off first orders!
            </div>
            <nav className="bg-white/95 backdrop-blur-sm border-b border-gray-100 px-2 md:px-10 py-1">
              <div className="flex items-center relative w-full max-w-7xl mx-auto">
                <button
                  ref={menuButtonRef}
                  onClick={toggleMenu}
                  className="absolute left-0 p-2 -ml-1 text-gray-600 hover:text-pink-600 transition-colors rounded-full hover:bg-gray-50 md:hidden"
                >
                  {isMenuOpen ? (
                    <X className="w-5 h-5" />
                  ) : (
                    <Menu className="w-5 h-5" />
                  )}
                </button>
                <div className="flex items-center justify-center w-full">
                  <a href="/" className="hover:opacity-80 transition-opacity">
                    <Image
                      src="/sugarbloomsbakery.png"
                      alt="Sugar Blooms Logo"
                      width={270}
                      height={270}
                      className="py-1 w-[270px]"
                    />
                  </a>
                </div>
                <button
                  onClick={() => setIsSearchOpen(true)}
                  className="absolute right-0 p-2 md:p-3 -mr-1 text-gray-600 hover:text-pink-600 transition-colors rounded-full hover:bg-gray-50"
                >
                  <Search className="w-5 h-5 md:w-6 md:h-6" />
                </button>
              </div>

              <div className="hidden md:flex items-center justify-center gap-12 py-2">
                <a href="/" className="text-base text-gray-700 hover:text-pink-600 font-medium transition-colors uppercase tracking-wider">
                  Home
                </a>
                <a href="/cupcakes" className="text-base text-gray-700 hover:text-pink-600 font-medium transition-colors uppercase tracking-wider">
                  Cupcakes
                </a>
                <a href="/about" className="text-base text-gray-700 hover:text-pink-600 font-medium transition-colors uppercase tracking-wider">
                  About
                </a>
                <a href="/recipes" className="text-base text-gray-700 hover:text-pink-600 font-medium transition-colors uppercase tracking-wider">
                  Recipes
                </a>
                <a href="/contact" className="text-base text-gray-700 hover:text-pink-600 font-medium transition-colors uppercase tracking-wider">
                  Contact
                </a>
              </div>

              <div
                ref={menuRef}
                className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${
                  isMenuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="flex flex-col items-center border-t border-gray-100 mt-1">
                  <a
                    href="/"
                    className="w-full text-center px-6 py-3 text-base text-gray-700 hover:text-pink-600 hover:bg-gray-50 font-medium transition-colors uppercase tracking-wider"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Home
                  </a>
                  <a
                    href="/cupcakes"
                    className="w-full text-center px-6 py-3 text-base text-gray-700 hover:text-pink-600 hover:bg-gray-50 font-medium transition-colors uppercase tracking-wider"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Cupcakes
                  </a>
                  <a
                    href="/about"
                    className="w-full text-center px-6 py-3 text-base text-gray-700 hover:text-pink-600 hover:bg-gray-50 font-medium transition-colors uppercase tracking-wider"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    About
                  </a>
                  <a
                    href="/recipes"
                    className="w-full text-center px-6 py-3 text-base text-gray-700 hover:text-pink-600 hover:bg-gray-50 font-medium transition-colors uppercase tracking-wider"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Recipes
                  </a>
                  <a
                    href="/contact"
                    className="w-full text-center px-6 py-3 text-base text-gray-700 hover:text-pink-600 hover:bg-gray-50 font-medium transition-colors uppercase tracking-wider"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contact
                  </a>
                </div>
              </div>
            </nav>
          </header>
          {children}
          <footer className="bg-gray-50 py-16 px-4 border-t border-gray-100">
            <div className="container mx-auto max-w-6xl">
              <div className="grid md:grid-cols-3 gap-12 mb-12">
                <div className="flex flex-col">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Sugar Blooms
                  </h3>
                  <p className="text-gray-500 mb-6 leading-relaxed">
                    Handcrafted cupcakes made with love in Derry, Northern Ireland.
                  </p>
                  <div className="flex gap-3">
                    <a
                      href="https://instagram.com/sugarbloomsco"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-pink-600 hover:bg-pink-700 flex items-center justify-center text-white shadow-md transition-all"
                    >
                      <Instagram className="w-5 h-5" />
                    </a>
                    <a
                      href="https://tiktok.com/@sugarbloomsco"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-pink-600 hover:bg-pink-700 flex items-center justify-center text-white shadow-md transition-all"
                    >
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                      </svg>
                    </a>
                    <a
                      href="https://www.facebook.com/profile.php?id=61578928634971"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-pink-600 hover:bg-pink-700 flex items-center justify-center text-white shadow-md transition-all"
                    >
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    </a>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Quick Links
                  </h3>
                  <nav className="flex flex-col space-y-2.5">
                    <a href="/" className="text-gray-500 hover:text-pink-600 transition-colors">Home</a>
                    <a href="/cupcakes" className="text-gray-500 hover:text-pink-600 transition-colors">Cupcakes</a>
                    <a href="/about" className="text-gray-500 hover:text-pink-600 transition-colors">About</a>
                    <a href="/recipes" className="text-gray-500 hover:text-pink-600 transition-colors">Recipes</a>
                    <a href="/contact" className="text-gray-500 hover:text-pink-600 transition-colors">Contact</a>
                    <a href="/faq" className="text-gray-500 hover:text-pink-600 transition-colors">FAQs</a>
                  </nav>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Tools
                  </h3>
                  <nav className="flex flex-col space-y-2.5">
                    <a href="/calculator" className="text-gray-500 hover:text-pink-600 transition-colors flex items-center gap-2">
                      <ArrowRightLeft className="w-4 h-4 text-pink-300" />
                      Baking Calculator
                    </a>
                    <a href="/recommendations" className="text-gray-500 hover:text-pink-600 transition-colors flex items-center gap-2">
                      <Heart className="w-4 h-4 text-pink-300" />
                      Recommendations
                    </a>
                  </nav>
                </div>
              </div>
              <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-gray-400 text-sm">© 2025 Sugar Blooms Co.</p>
                <p className="text-pink-600 text-sm font-medium">Made with love</p>
              </div>
            </div>
          </footer>
          <SpeedInsights />
          <SearchOverlay
            isOpen={isSearchOpen}
            onClose={() => setIsSearchOpen(false)}
          />
        </div>
      </body>
    </html>
  );
}

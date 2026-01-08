"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-40 pb-20">
      <section className="pt-8 pb-18 px-4 relative">
        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <h1 className="text-3xl md:text-4xl font-semibold text-gray-900">
                About Us
              </h1>
            </div>
            <p className="text-base md:text-lg text-gray-600 mb-8 font-light leading-relaxed max-w-2xl mx-auto">
              Where Dreams Meet Frosting and Every Bite Tells a Story
            </p>
          </div>
        </div>
      </section>
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-center gap-8 mb-20">
          <div className="relative max-w-2xl mx-auto">
          </div>

          <div className="grid md:grid-cols-2 gap-6 w-full max-w-4xl">
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
              <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
                My Story
              </h2>
              <p className="text-base text-gray-600 leading-relaxed mb-4">
                Sugar Blooms began not just as a hobby, but as a way to bring
                beauty and joy into the everyday. From my little Derry kitchen
                came the idea that cupcakes could be more than dessert - they
                could be a gift, a memory, an experience wrapped in pink and
                tied with a bow. Every swirl of buttercream and every carefully
                placed detail is designed to make you pause, smile, and feel a
                little bit more celebrated.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
              <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
                My Mission
              </h2>
              <p className="text-base text-gray-600 leading-relaxed">
                At Sugar Blooms, our mission is to create cupcakes that go
                beyond flavour - they capture a feeling. Each order is an
                invitation to slow down, indulge, and make an ordinary day feel
                extraordinary. We don't just bake treats, we craft moments of
                joy that stay with you long after the last crumb.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-2xl p-12 border border-gray-200 shadow-sm">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6">
              Why Sugar Blooms?
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="text-left">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Our Values
                </h3>
                <ul className="space-y-3 text-base text-gray-600">
                  <li className="flex items-start gap-3">
                    <Star className="w-4 h-4 text-pink-400 fill-pink-400 mt-1 flex-shrink-0" />
                    <span>Quality ingredients sourced with care</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Star className="w-4 h-4 text-pink-400 fill-pink-400 mt-1 flex-shrink-0" />
                    <span>Attention to every little detail</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Star className="w-4 h-4 text-pink-400 fill-pink-400 mt-1 flex-shrink-0" />
                    <span>Creating moments of pure joy</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Star className="w-4 h-4 text-pink-400 fill-pink-400 mt-1 flex-shrink-0" />
                    <span>Supporting your celebrations big and small</span>
                  </li>
                </ul>
              </div>

              <div className="text-left">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  What Makes Us Special
                </h3>
                <p className="text-base text-gray-600 leading-relaxed mb-4">
                  In a world of mass production, we believe in the magic of the
                  handmade. Each cupcake is a tiny work of art, crafted with the
                  same care you'd put into a gift for someone you love.
                </p>
                <p className="text-base text-gray-600 leading-relaxed">
                  Because that's exactly what it is - a little gift of sweetness
                  to brighten your day.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

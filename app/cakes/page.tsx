"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function CupcakesPage() {
  const cakeCategories = [
    {
      title: "",
      description: "",
      cakes: [
        {
          name: "Classic Vanilla",
          description:
            "A timeless vanilla cake layered with smooth buttercream and topped with elegant decorations.",
          price: "£40 - £60",
          image: "/vanilla-cake.png",
          popular: true,
          flavors: ["vanilla"],
        },
        {
          name: "Strawberry Delight",
          description:
            "Light and fluffy vanilla cake with fresh strawberry filling and buttercream frosting.",
          price: "£40 - £60",
          image: "/strawberry-cake.png",
          flavors: ["strawberry", "vanilla"],
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-40 pb-20">
      <section className="pt-8 pb-18 px-4 relative">
        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                Our Cake Selection
              </h1>
            </div>
            <p className="text-base md:text-lg text-gray-600 mb-8 font-light leading-relaxed max-w-2xl mx-auto">
              Our 6" cakes are perfect for any celebration, crafted with the
              finest ingredients and a touch of love.
            </p>
          </div>
        </div>
      </section>
      <div className="container mx-auto px-4">
        {cakeCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                {category.title}
              </h2>
              <p className="text-gray-500 italic mb-4">
                {category.description}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {category.cakes.map((cake, index) => (
                <Card
                  key={index}
                  className="bg-white border border-gray-100 rounded-xl shadow-soft hover:shadow-soft-md transition-all relative overflow-hidden"
                >
                  {cake.popular && (
                    <div className="absolute bottom-64 left-4 z-10">
                      <Badge className="bg-pink-600 text-white text-xs font-medium px-3 py-1 rounded-full">
                        <Star className="w-3 h-3 mr-1 fill-white" />
                        Popular
                      </Badge>
                    </div>
                  )}

                  <CardContent className="p-0">
                    <div className="relative overflow-hidden">
                      <Image
                        src={cake.image}
                        alt={cake.name}
                        width={400}
                        height={300}
                        className="w-full h-64 object-cover transition-transform hover:scale-105"
                      />
                      <div className="absolute top-3 right-3 bg-pink-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-soft">
                        {cake.price}
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {cake.name}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                        {cake.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {cake.flavors.map((flavor, flavorIndex) => (
                          <span
                            key={flavorIndex}
                            className="text-xs bg-gray-50 text-gray-600 px-3 py-1.5 rounded-full border border-gray-100 font-medium"
                          >
                            {flavor}
                          </span>
                        ))}
                      </div>

                      <Button
                        className="w-full bg-pink-600 hover:bg-pink-700 text-white font-medium rounded-full py-3 transition-colors"
                        asChild
                      >
                        <a
                          href={`https://wa.me/447907169798?text=Hi! I'd like to order the ${cake.name} cake.`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Order Now
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

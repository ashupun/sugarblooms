"use client";

import Image from "next/image";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function CupcakesPage() {
  const cupcakeCategories = [
    {
      title: "",
      description: "",
      cupcakes: [
        {
          name: "Bow Tie Elegance",
          description:
            "Vanilla cupcake with smooth buttercream and handcrafted pink fondant bow",
          price: "£12 for 4 | £15 for 6 | £24 for 12",
          image: "/cupcakes-bows.jpeg",
          flavors: ["vanilla"],
        },
        {
          name: "Rosé Swirl",
          description:
            "Delicate vanilla cupcake with rose pink buttercream swirls and pearl decorations",
          price: "£12 for 4 | £15 for 6 | £24 for 12",
          image: "/cupcakes-roses.jpeg",
          flavors: ["vanilla"],
        },
        {
          name: "Custom Design",
          description:
            "Cupcakes with your custom buttercream design & decorations",
          price: "£16 for 4 | £21 for 6 | £36 for 12",
          image: "/vanillacupcakes.jpeg",
          flavors: ["chocolate", "vanilla", "strawberry"],
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
              <h1 className="text-3xl md:text-4xl font-semibold text-gray-900">
                Our Cupcake Selection
              </h1>
            </div>
            <p className="text-base md:text-lg text-gray-600 mb-8 font-light leading-relaxed max-w-2xl mx-auto">
              Each cupcake is handcrafted with love, premium ingredients, and a
              signature feminine touch. Pretty pink designs that are as elegant
              as they are delicious.
            </p>
          </div>
        </div>
      </section>
      <div className="container mx-auto px-4">
        {cupcakeCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
                {category.title}
              </h2>
              <p className="text-gray-500 italic mb-4">
                {category.description}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {category.cupcakes.map((cupcake, index) => (
                <Card
                  key={index}
                  className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow relative overflow-hidden"
                >
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden">
                      <Image
                        src={cupcake.image}
                        alt={cupcake.name}
                        width={400}
                        height={300}
                        className="w-full h-64 object-cover transition-transform hover:scale-105"
                      />
                      <div className="absolute top-3 right-3 bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-full text-sm font-bold shadow-md transition-colors">
                        {cupcake.price}
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {cupcake.name}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                        {cupcake.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {cupcake.flavors.map((flavor, flavorIndex) => (
                          <span
                            key={flavorIndex}
                            className="text-xs bg-gray-100 text-gray-600 px-3 py-1.5 rounded-full border border-gray-200 font-medium hover:bg-gray-200 transition-colors"
                          >
                            {flavor}
                          </span>
                        ))}
                      </div>

                      <Button
                        className="w-full bg-pink-600 hover:bg-pink-700 text-white font-bold rounded-full py-3 shadow-md hover:shadow-lg transition-all"
                        asChild
                      >
                        <a
                          href={`https://wa.me/447907169798?text=Hi! I'd like to order ${cupcake.name} cupcakes.`}
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

        <div className="mt-20 text-center bg-gray-50 rounded-2xl p-8 border border-gray-200">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
            Custom Orders
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Have something special in mind? We love creating bespoke cupcakes
            for your celebrations!
          </p>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px bg-gray-200 flex-1 max-w-20" />
            <Heart className="w-4 h-4 text-pink-400 fill-pink-400" />
            <div className="h-px bg-gray-200 flex-1 max-w-20" />
          </div>
          <Button
            className="bg-pink-600 hover:bg-pink-700 text-white font-bold rounded-full px-8 py-3 shadow-md hover:shadow-lg transition-all"
            asChild
          >
            <a
              href="https://wa.me/447907169798"
              target="_blank"
              rel="noopener noreferrer"
            >
              Enquire Now
            </a>
          </Button>
        </div>

        <div className="mt-20 text-center bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
            Allergies Information
          </h2>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px bg-gray-200 flex-1 max-w-20" />
            <span className="text-gray-500 text-sm font-medium">
              Important Information
            </span>
            <div className="h-px bg-gray-200 flex-1 max-w-20" />
          </div>

          <div className="max-w-2xl mx-auto">
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our cupcakes are made in a kitchen that handles the following
              allergens:
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              {[
                "Eggs",
                "Milk",
                "Wheat (Gluten)",
                "Nuts",
                "Soy",
                "Food Coloring",
              ].map((allergen, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-3 rounded-xl border border-gray-200"
                >
                  <p className="text-gray-700 font-medium">{allergen}</p>
                </div>
              ))}
            </div>

            <div className="space-y-4 text-left">
              <p className="text-gray-600 text-sm leading-relaxed">
                <span className="font-semibold">Cross-contamination:</span>{" "}
                While we take every precaution to prevent cross-contamination,
                our products are made in a kitchen that handles these allergens.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                <span className="font-semibold">Special Requirements:</span>{" "}
                Please inform us of any allergies when placing your order. We'll
                do our best to accommodate your needs.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                <span className="font-semibold">Ingredients:</span> A full
                list of ingredients is available upon request. Don't hesitate to
                ask if you have any questions about specific ingredients.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

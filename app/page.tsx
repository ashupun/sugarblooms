"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Head from "next/head";
import "../styles/welcome-animation.css";
import { Star, Heart, Sparkles, Hand, Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

function MobileImageSlider() {
  const [currentPair, setCurrentPair] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [lastInteraction, setLastInteraction] = useState<number | null>(null);
  const totalImages = 2;
  const totalPairs = totalImages;
  const normalInterval = 5000;
  const extendedInterval = 10000;

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    let mounted = true;
    if (!isMobile) return;

    const timer = setInterval(() => {
      if (mounted) {
        const now = Date.now();
        if (lastInteraction && now - lastInteraction < extendedInterval) {
          return;
        }
        setCurrentPair((prev) => (prev + 1) % totalPairs);
      }
    }, normalInterval);

    return () => {
      mounted = false;
      clearInterval(timer);
    };
  }, [isMobile, totalPairs, lastInteraction]);

  const handleNext = () => {
    setCurrentPair((prev) => (prev + 1) % totalPairs);
    setLastInteraction(Date.now());
  };

  const handlePrev = () => {
    setCurrentPair((prev) => (prev - 1 + totalPairs) % totalPairs);
    setLastInteraction(Date.now());
  };

  return (
    <>
      <div className="hidden md:block relative">
        <div className="grid grid-cols-2 gap-6 max-w-4xl mx-auto">
          {[1, 2].map((index) => (
            <div
              key={index}
              className="group relative transform transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-200 via-pink-100 to-pink-200 rounded-3xl blur-sm opacity-50 group-hover:opacity-75 transition-opacity" />
              <div className="relative aspect-square w-full overflow-hidden rounded-2xl shadow-xl ring-1 ring-gray-100">
                <Image
                  src={`/carousel${index}.png`}
                  alt={`Sugar Blooms cupcakes showcase ${index}`}
                  fill
                  priority={index === 1}
                  className="object-cover transform transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="md:hidden relative max-w-[95vw] mx-auto">
        {!isLoaded && (
          <div className="absolute inset-0 bg-gray-50 rounded-2xl flex items-center justify-center z-10">
            <div className="w-8 h-8 border-4 border-pink-400 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
        <div
          className="relative aspect-square w-full overflow-hidden rounded-2xl shadow-xl cursor-grab active:cursor-grabbing"
          onTouchStart={(e) => {
            const touch = e.touches[0];
            const startX = touch.clientX;

            const handleTouchMove = (e: TouchEvent) => {
              const touch = e.touches[0];
              const diffX = touch.clientX - startX;

              if (Math.abs(diffX) > 50) {
                if (diffX > 0) {
                  handlePrev();
                } else {
                  handleNext();
                }
                document.removeEventListener("touchmove", handleTouchMove);
                document.removeEventListener("touchend", handleTouchEnd);
              }
            };

            const handleTouchEnd = () => {
              document.removeEventListener("touchmove", handleTouchMove);
              document.removeEventListener("touchend", handleTouchEnd);
            };

            document.addEventListener("touchmove", handleTouchMove);
            document.addEventListener("touchend", handleTouchEnd);
          }}
        >
          {[1, 2].map((index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                currentPair === index - 1 ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={`/carousel${index}.png`}
                alt={`Sugar Blooms cupcakes showcase ${index}`}
                fill
                priority={index === 1}
                loading={index === 1 ? "eager" : "lazy"}
                onLoad={() => index === 1 && setIsLoaded(true)}
                className={`object-cover transition-opacity duration-500 ${
                  isLoaded ? "opacity-100" : "opacity-0"
                }`}
                draggable={false}
              />
            </div>
          ))}
        </div>
        <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-full shadow-sm">
          {[0, 1].map((index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all ${
                currentPair === index ? "bg-pink-600 w-4" : "bg-gray-300"
              }`}
              onClick={() => {
                setCurrentPair(index);
                setLastInteraction(Date.now());
              }}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default function Component() {
  return (
    <main className="overflow-hidden">
      <Head>
        <title>Sugar Blooms | Handcrafted Cupcakes in Derry</title>
        <meta
          name="description"
          content="Sugar Blooms creates irresistible handcrafted cupcakes in Derry, Northern Ireland. Fluffy sponge, creamy buttercream, beautiful designs. Order now for your next celebration."
        />
        <meta
          name="keywords"
          content="Derry cupcakes, Northern Ireland bakery, handcrafted cupcakes, custom cupcakes, Sugar Blooms, order cupcakes online, sweet treats, birthday cupcakes, wedding cupcakes"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Bakery",
              name: "Sugar Blooms",
              image: "https://sugarblooms.co.uk/sb-logo.png",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Derry",
                addressRegion: "Northern Ireland",
                addressCountry: "UK",
              },
              url: "https://sugarblooms.co.uk",
              description:
                "Handcrafted cupcakes and sweet treats made with love in Derry, Northern Ireland.",
            }),
          }}
        />
      </Head>

      <section className="relative min-h-screen flex items-center justify-center px-4 pt-40 md:pt-48 pb-16">
        <div className="container mx-auto relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10 md:mb-14">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 mb-6 leading-tight tracking-tight">
                Handcrafted cupcakes,
                <span className="block text-pink-400">baked with love</span>
              </h1>

              <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
                Fluffy vanilla sponge. Silky buttercream. Beautiful designs.
                Each cupcake is baked fresh with love and the finest British ingredients.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
                <a
                  href="https://wa.me/447907169798"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-pink-600 hover:bg-pink-700 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
                >
                  <span>Order Now</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="/cupcakes"
                  className="inline-flex items-center justify-center gap-2 bg-white text-gray-700 hover:text-pink-600 border-2 border-gray-200 hover:border-pink-200 font-bold py-4 px-8 rounded-full shadow-md hover:shadow-lg transition-all"
                >
                  View Menu
                </a>
              </div>

              <p className="text-sm text-gray-500">
                Minimum order: 4 cupcakes • Collection from Derry
              </p>
            </div>

            <div>
              <MobileImageSlider />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
              {[
                {
                  icon: <Hand className="w-7 h-7 text-pink-600" />,
                  title: "Handcrafted",
                  description: "Every cupcake made with care",
                },
                {
                  icon: <Sparkles className="w-7 h-7 text-pink-600" />,
                  title: "Premium Ingredients",
                  description: "British flour & free-range eggs",
                },
                {
                  icon: <Check className="w-7 h-7 text-pink-600" />,
                  title: "Baked Fresh",
                  description: "Made to order, never frozen",
                },
                {
                  icon: <Heart className="w-7 h-7 text-pink-600" />,
                  title: "Made with Love",
                  description: "Passion in every bite",
                },
              ].map((feature, index) => (
                <div key={index} className="text-center p-4">
                  <div className="bg-pink-50 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-3">
                    {feature.icon}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1 text-sm md:text-base">
                    {feature.title}
                  </h3>
                  <p className="text-gray-500 text-xs md:text-sm">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
                What Our Customers Say
              </h2>
              <div className="flex items-center justify-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-500 text-sm">5-star reviews on Google</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  text: "Absolutely loved these cupcakes! Super fresh, fluffy, and full of flavor. You can tell a lot of care went into baking them.",
                  author: "Josh H.",
                },
                {
                  text: "The cupcakes had the cutest ribbon designs, and the icing was just the right kind of sweet. The cake stayed super soft!",
                  author: "Elvina L.",
                },
                {
                  text: "These gorgeous cupcakes exceeded all expectations! The rose flavoring is so unique and delicate. Pure perfection!",
                  author: "Charlotte W.",
                },
              ].map((review, index) => (
                <Card
                  key={index}
                  className="bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow p-6"
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 italic mb-4 leading-relaxed">
                    "{review.text}"
                  </p>
                  <p className="text-gray-900 font-medium text-sm">— {review.author}</p>
                </Card>
              ))}
            </div>

            <div className="text-center mt-10">
              <a
                href="https://g.page/r/CRNbbUdMowAzEAI/review"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-pink-600 hover:text-pink-600 font-medium transition-colors"
              >
                Leave us a review on Google
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-pink-600">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
              Ready to Taste the Magic?
            </h2>
            <p className="text-pink-100 text-base md:text-lg mb-8 max-w-xl mx-auto">
              Whether it's a birthday, wedding, baby shower, or just because —
              let's make your celebration unforgettable.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="https://wa.me/447907169798"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white text-pink-600 hover:text-pink-700 font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
              >
                <span>Order on WhatsApp</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-transparent text-white border-2 border-white/50 hover:border-white font-bold py-4 px-8 rounded-full transition-all"
              >
                Contact Us
              </a>
            </div>
            <p className="text-pink-200 text-sm mt-6">
              24-48 hours notice required • Collection from Derry
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

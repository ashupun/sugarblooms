"use client";

import Image from "next/image";
import Head from "next/head";

export default function RecommendationsPage() {
  const recommendations = [
    {
      name: "Kenwood kMix KMX754PP",
      description:
        "A stylish and powerful stand mixer to elevate your baking experience.",
      image: "/kenwoodkmix.png",
      link: "https://www.kenwoodworld.com/en-gb//kmix-stand-mixer-pastel-pink-kmx754pp/p/KMX754APP",
      attachments: "https://www.4kenwood.co.uk/product.pl?pid=5241478",
    },
    {
      name: "Pyrex Measuring Jug",
      description:
        "A durable and versatile measuring jug, perfect for all your baking needs.",
      image: "/pyrexjug.png",
      link: "https://www.amazon.co.uk/Pyrex-912S992-7041-Jug-Glass/dp/B076H7XL5B/ref=sr_1_5?crid=1HBN2ALM8XGQY&dib=eyJ2IjoiMSJ9.jT1NS1pScEv5WEhiC_817pfEAqvlRsKTP_Up2GLFyPV-L8xkbn_WwVI7Oeemr_Csz_T5K-tIbK9bSqkGFmOsKogBQpDWw0opjB6EMtw9NGkGmb4JV8kvM9dS2rZ2Cukfs0oJ15OKQ-Jkc2T-NsvkG_3ni2zERDcoTUYTkOV3e8pfbBeBMcSqHT8A3iio877Mfj2S5y9l-OJr-DyyCNpxHc-NrykUcb24A6ChdDr30DsDzdoLROXQCTPULRaeuIpIP3iSkzz-7Qo4TnEgkiLV9q0vqNxs9igNiVby5omciCI.KxgiS3X1blTg0EeN0b50ckTEmDxOWVLXV7lpoL127b8&dib_tag=se&keywords=Pyrex+jug&qid=1756028581&s=kitchen&sprefix=pyrex+jug%2Ckitchen%2C86&sr=1-5",
    },
    {
      name: "Cake Tins",
      description: "A useful product for your baking needs.",
      image: "/steelcaketins.png",
      link: "https://www.amazon.co.uk/dp/B08ZS2QQ2Y?ref=ppx_yo2ov_dt_b_fed_asin_title&th=1",
    },
    {
      name: "Mixing Bowls",
      description: "Another great addition to your kitchen.",
      image: "/pinkmixingbowls.png",
      link: "https://www.amazon.co.uk/dp/B0CWGFWSJK?ref=ppx_yo2ov_dt_b_fed_asin_title&th=1",
    },
    {
      name: "Cake Turntable",
      description: "Perfect for enhancing your baking experience.",
      image: "/caketurntable.png",
      link: "https://www.amazon.co.uk/dp/B0DZ28497R?ref_=ppx_hzsearch_conn_dt_b_fed_asin_title_1&th=1",
    },
  ];

  return (
    <>
      <Head>
        <title>Recommended Baking Tools | Sugar Blooms</title>
        <meta
          name="description"
          content="Discover our favorite baking tools to elevate your cupcake creations."
        />
        <meta
          name="keywords"
          content="baking tools, recommendations, Sugar Blooms"
        />
      </Head>
      <div className="min-h-screen pt-40 pb-20">
        <section className="pt-8 pb-18 px-4 relative">
          <div className="container mx-auto text-center relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="mb-6">
                <h1 className="text-3xl md:text-4xl font-semibold text-gray-900">
                  My Favourite Baking Tools
                </h1>
              </div>
              <p className="text-base md:text-lg text-gray-600 mb-8 font-light leading-relaxed max-w-2xl mx-auto">
                Here are some of my favorite tools that make baking a joy.
              </p>
            </div>
          </div>
        </section>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {recommendations.map((item, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow relative overflow-hidden w-full"
                style={{ maxWidth: "350px", margin: "0 auto" }}
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {item.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {item.description}
                  </p>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-pink-600 hover:bg-pink-700 text-white font-bold rounded-full py-3 text-center shadow-md transition-colors"
                  >
                    View Product
                  </a>
                  {item.attachments && (
                    <div className="flex gap-2 mt-2">
                      <a
                        href="https://www.4kenwood.co.uk/product.pl?pid=5354461"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold rounded-full py-2 text-center transition-colors"
                      >
                        Glass Bowl
                      </a>
                      <a
                        href="https://www.4kenwood.co.uk/product.pl?pid=5241478"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold rounded-full py-2 text-center transition-colors"
                      >
                        Beater
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

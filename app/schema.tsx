export const businessSchema = {
  "@context": "https://schema.org",
  "@type": "Bakery",
  "@id": "https://sugarblooms.co.uk",
  name: "Sugar Blooms",
  image: {
    "@type": "ImageObject",
    url: "https://sugarblooms.co.uk/sugarblooms.png",
    width: "512",
    height: "512",
  },
  url: "https://sugarblooms.co.uk",
  telephone: "+447907169798",
  priceRange: "££",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Derry",
    addressRegion: "Northern Ireland",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "54.9966",
    longitude: "-7.3086",
  },
  description:
    "Sugar Blooms is a Derry-based bakery specialising in handcrafted cupcakes, custom orders, and sweet treats made with love, sprinkles, and a touch of magic.",
  hasMenu: {
    "@type": "Menu",
    hasMenuSection: [
      {
        "@type": "MenuSection",
        name: "Cupcakes",
        hasMenuItem: [
          {
            "@type": "MenuItem",
            name: "Vanilla Cupcakes",
            description: "Classic vanilla cupcakes with buttercream frosting",
          },
          {
            "@type": "MenuItem",
            name: "Chocolate Cupcakes",
            description: "Rich chocolate cupcakes with chocolate frosting",
          },
          {
            "@type": "MenuItem",
            name: "Strawberry Cupcakes",
            description:
              "Fresh strawberry cupcakes with strawberry buttercream",
          },
        ],
      },
    ],
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    opens: "09:00",
    closes: "18:00",
  },
  sameAs: [
    "https://instagram.com/sugarbloomsco",
    "https://tiktok.com/@sugarbloomsco",
    "https://www.facebook.com/profile.php?id=61578928634971",
  ],
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://sugarblooms.co.uk/#website",
  url: "https://sugarblooms.co.uk",
  name: "Sugar Blooms",
  description:
    "Sugar Blooms is a Derry-based bakery specialising in handcrafted cupcakes, custom orders, and sweet treats made with love, sprinkles, and a touch of magic.",
  publisher: {
    "@type": "Organization",
    name: "Sugar Blooms",
    logo: {
      "@type": "ImageObject",
      url: "https://sugarblooms.co.uk/sugarblooms.png",
      width: 512,
      height: 512,
    },
  },
};

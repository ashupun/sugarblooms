import Image from "next/image";
import { Heart, Clock, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Head from "next/head";

export default function RecipesPage() {
  const cupcakeRecipes = [
    {
      name: "Classic Vanilla Cupcakes",
      prepTime: "20 mins",
      cookTime: "18 mins",
      serves: "12 cupcakes",
      ingredients: [
        "175g self-raising flour",
        "175g caster sugar",
        "175g butter, softened",
        "3 large eggs",
        "1 tsp vanilla extract",
        "2-3 tbsp milk",
      ],
      instructions: [
        "Preheat oven to 180°C. Line a 12-hole muffin tin with cupcake cases.",
        "Beat butter and sugar until light and fluffy (about 3-4 minutes).",
        "Add eggs one at a time, then vanilla extract.",
        "Fold in flour alternately with milk until just combined.",
        "Divide between cases and bake for 18-20 minutes until golden.",
        "Cool completely before frosting with your favorite buttercream!",
      ],
    },
    {
      name: "Chocolate Dream Cupcakes",
      prepTime: "25 mins",
      cookTime: "20 mins",
      serves: "12 cupcakes",
      ingredients: [
        "150g self-raising flour",
        "25g cocoa powder",
        "150g caster sugar",
        "150g butter, softened",
        "3 large eggs",
        "1 tsp vanilla extract",
        "100ml milk",
      ],
      instructions: [
        "Preheat oven to 180°C. Line a 12-hole muffin tin with cupcake cases.",
        "Sift together flour and cocoa powder.",
        "Cream butter and sugar until light and fluffy.",
        "Beat in eggs one at a time, then vanilla.",
        "Fold in dry ingredients alternately with milk.",
        "Bake for 18-20 minutes. Cool completely before frosting.",
      ],
    },
    {
      name: "Strawberry Bliss Cupcakes",
      prepTime: "30 mins",
      cookTime: "18 mins",
      serves: "12 cupcakes",
      ingredients: [
        "175g self-raising flour",
        "175g caster sugar",
        "175g butter, softened",
        "3 large eggs",
        "100g fresh strawberries, chopped",
        "Pink food coloring (optional)",
        "2 tbsp milk",
      ],
      instructions: [
        "Preheat oven to 180°C. Line cupcake tin with cases.",
        "Cream butter and sugar until fluffy.",
        "Add eggs one at a time, then fold in chopped strawberries.",
        "Add a few drops of pink coloring if desired.",
        "Fold in flour with milk until just combined.",
        "Bake for 18-20 minutes until risen and golden.",
      ],
    },
  ];

  const frostingRecipes = [
    {
      name: "Fluffy Vanilla Frosting (Ermine Frosting)",
      prepTime: "20 mins",
      serves: "Covers 12 cupcakes generously",
      ingredients: [
        "5 tbsp plain/all-purpose flour",
        "1 cup white sugar (can reduce to 1/2 cup for less sweet)",
        "1 cup milk, warmed (full fat best)",
        "1 1/2 tsp vanilla extract",
        "Pinch of salt",
        "225g (1 cup) unsalted butter, softened but not too soft",
      ],
      instructions: [
        "Place flour and sugar in a large saucepan over medium heat. Cook, stirring constantly, for 30 seconds.",
        "While whisking constantly, slowly pour the milk in to avoid lumps.",
        "Continue stirring as the milk gets hotter and thickens into a thick, dolloping custard.",
        "Remove from heat, scrape into a bowl, and cover with cling wrap pressed onto the surface. Cool completely.",
        "Beat butter until smooth and pale yellow (about 3 minutes).",
        "On medium speed, add the thickened roux one heaped tablespoon at a time, beating as you go.",
        "Once all roux is added, add vanilla and salt, then whip for 2-3 minutes until fluffy and able to hold peaks.",
        "Use to frost cakes or cupcakes. Can be piped or spread.",
      ],
      image: "/fluffyvanillafrosting.jpeg",
    },
    {
      name: "Smooth Buttercream",
      prepTime: "10 mins",
      serves: "Covers 12 cupcakes",
      ingredients: [
        "250g unsalted butter, softened",
        "400g icing sugar, sifted",
        "2-3 tbsp milk",
        "1 tsp vanilla extract",
      ],
      instructions: [
        "Beat butter until pale and creamy (about 3-5 minutes).",
        "Gradually add icing sugar, beating well after each addition.",
        "Add vanilla and milk, beat until smooth and fluffy.",
        "Use immediately or store covered for up to 2 days.",
      ],
      image: "/buttercream.jpeg",
    },
    {
      name: "Swiss Meringue Buttercream",
      prepTime: "20 mins",
      serves: "Covers 24 cupcakes",
      ingredients: [
        "5 large egg whites",
        "250g caster sugar",
        "340g unsalted butter, softened",
        "1 tsp vanilla extract",
      ],
      instructions: [
        "Combine egg whites and sugar in a heatproof bowl over simmering water.",
        "Whisk constantly until sugar dissolves and mixture is warm (about 65°C).",
        "Transfer to mixer, whisk on high until stiff peaks form and bowl is cool.",
        "Add butter gradually, then vanilla, and beat until silky and smooth.",
      ],
      image: "/swissmeringue.jpeg",
    },
  ];

  return (
    <>
      <Head>
        <title>Cupcake Recipes | Sugar Blooms</title>
        <meta
          name="description"
          content="Explore our collection of cupcake and frosting recipes to bake your own sweet treats."
        />
        <meta
          name="keywords"
          content="cupcake recipes, frosting recipes, Sugar Blooms"
        />
      </Head>
      <div className="min-h-screen pt-40 pb-20">
        <section className="pt-8 pb-18 px-4 relative">
          <div className="container mx-auto text-center relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="mb-6">
                <h1 className="text-3xl md:text-4xl font-semibold text-gray-900">
                  Sweet Recipes
                </h1>
              </div>
              <p className="text-base md:text-lg text-gray-600 mb-8 font-light leading-relaxed max-w-2xl mx-auto">
                Bake with Love and Create Your Own Sweet Magic at Home
              </p>
            </div>
          </div>
        </section>

        <section className="py-8 px-4 relative">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
                Cupcake Recipes
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
              {cupcakeRecipes.map((recipe, index) => (
                <Card
                  key={index}
                  className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow relative overflow-hidden"
                >
                  <div className="absolute top-4 right-4 w-10 h-10 bg-pink-50 rounded-full flex items-center justify-center">
                    <Heart className="w-5 h-5 text-pink-400 fill-pink-400" />
                  </div>
                  <CardHeader className="pb-4 relative">
                    <div className="relative mb-4 overflow-hidden rounded-xl">
                      <Image
                        src={
                          recipe.name === "Classic Vanilla Cupcakes"
                            ? "/vanillacupcakes.jpeg"
                            : recipe.name === "Chocolate Dream Cupcakes"
                            ? "/chocolatecupcakes.jpeg"
                            : recipe.name === "Strawberry Bliss Cupcakes"
                            ? "/strawberrycupcakes.jpeg"
                            : "/cupcakes-box.jpeg"
                        }
                        alt={recipe.name}
                        width={300}
                        height={200}
                        className="w-full h-48 object-cover"
                      />
                    </div>
                    <CardTitle className="text-xl font-semibold text-gray-900">
                      {recipe.name}
                    </CardTitle>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4 text-pink-400" />
                        <span>{recipe.prepTime}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4 text-pink-400" />
                        <span>{recipe.serves}</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="mb-4">
                      <h4 className="font-bold text-gray-900 mb-2">
                        Ingredients:
                      </h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {recipe.ingredients.map((ingredient, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <Heart className="w-3 h-3 text-pink-400 fill-pink-400 mt-1 flex-shrink-0" />
                            <span>{ingredient}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">
                        Instructions:
                      </h4>
                      <ol className="text-sm text-gray-600 space-y-2">
                        {recipe.instructions.map((step, i) => (
                          <li key={i} className="flex gap-2">
                            <span className="bg-pink-100 text-pink-600 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                              {i + 1}
                            </span>
                            <span>{step}</span>
                          </li>
                        ))}
                      </ol>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-4 relative">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
                Frosting Recipes
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
              {frostingRecipes.map((recipe, index) => (
                <Card
                  key={index}
                  className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow relative overflow-hidden"
                >
                  <div className="absolute top-4 right-4 w-10 h-10 bg-pink-50 rounded-full flex items-center justify-center">
                    <Heart className="w-5 h-5 text-pink-400 fill-pink-400" />
                  </div>
                  <CardHeader className="pb-4 relative">
                    <div className="relative mb-4 overflow-hidden rounded-xl">
                      <Image
                        src={recipe.image || "/placeholder.jpg"}
                        alt={recipe.name}
                        width={300}
                        height={200}
                        className="w-full h-48 object-cover"
                      />
                    </div>
                    <CardTitle className="text-xl font-semibold text-gray-900">
                      {recipe.name}
                    </CardTitle>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4 text-pink-400" />
                        <span>{recipe.prepTime}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4 text-pink-400" />
                        <span>{recipe.serves}</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="mb-4">
                      <h4 className="font-bold text-gray-900 mb-2">
                        Ingredients:
                      </h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {recipe.ingredients.map((ingredient, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <Heart className="w-3 h-3 text-pink-400 fill-pink-400 mt-1 flex-shrink-0" />
                            <span>{ingredient}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">
                        Instructions:
                      </h4>
                      <ol className="text-sm text-gray-600 space-y-2">
                        {recipe.instructions.map((step, i) => (
                          <li key={i} className="flex gap-2">
                            <span className="bg-pink-100 text-pink-600 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                              {i + 1}
                            </span>
                            <span>{step}</span>
                          </li>
                        ))}
                      </ol>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-4 relative">
          <div className="container mx-auto text-center">
            <div className="max-w-3xl mx-auto bg-gray-50 rounded-2xl p-12 border border-gray-200 shadow-sm">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Heart className="w-6 h-6 text-pink-400 fill-pink-400" />
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
                  Love These Recipes?
                </h2>
                <Heart className="w-6 h-6 text-pink-400 fill-pink-400" />
              </div>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Share your baking creations with us! We love seeing your sweet
                masterpieces
              </p>
              <Button
                className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-4 px-10 rounded-full shadow-md transition-colors"
                asChild
              >
                <a
                  href="https://instagram.com/sugarbloomsco"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Tag @sugarbloomsco
                </a>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

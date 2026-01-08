import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found | Sugar Blooms",
  description:
    "Oops! The page you're looking for doesn't exist. Return to Sugar Blooms and explore our delicious cupcakes.",
};

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-center">
      <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-200 max-w-md">
        <h1 className="text-6xl font-bold text-pink-600 mb-4">404</h1>
        <p className="text-lg text-gray-600 mb-6">
          Oops! The page you're looking for doesn't exist.
        </p>
        <Link
          href="/"
          className="inline-block bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-6 rounded-full shadow-md transition-colors"
        >
          Return to Home
        </Link>
      </div>
    </main>
  );
}

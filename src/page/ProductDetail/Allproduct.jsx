// src/page/AllProducts/AllProductsPage.jsx

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Sparkles } from "lucide-react";
import Hero from "../ProductDetail/Component/Hero";

export default function AllProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/products`);

        if (!res.ok) {
          throw new Error(`API Error: ${res.status}`);
        }

        const data = await res.json();

        if (!Array.isArray(data)) {
          throw new Error("API did not return a valid product list");
        }

        setProducts(data);
      } catch (err) {
        console.error("Failed to load products:", err);
        setError(err.message || "Unable to fetch products");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#e5e2d7] to-[#f5f2ea] py-20">
        <Hero />
        <div className="max-w-4xl mx-auto px-6 mt-5">
          <h3 className="text-5xl  font-bold text-center text-[#855d14] mb-16">
            The Collection
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="bg-white rounded-3xl shadow-2xl animate-pulse"
              >
                <div className="h-80 bg-gray-200 rounded-t-3xl" />
                <div className="p-8 space-y-4">
                  <div className="h-6 bg-gray-200 rounded w-3/4 mx-auto" />
                  <div className="h-10 bg-gray-200 rounded-full w-32 mx-auto" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#f5f2ea] px-6">
        <h2 className="text-4xl font-bold text-red-600 mb-4">Oops!</h2>
        <p className="text-lg text-gray-700 mb-6">{error}</p>
        <button
          onClick={() => window.location.reload()}
          className="px-6 py-3 bg-[#855d14] text-white rounded-full hover:bg-[#6b4a10] transition"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#e5e2d7] to-[#f5f2ea] py-20">
      <Hero />    
      <div className="max-w-7xl mx-auto px-6 py-25">
        <h1 className="text-5xl md:text-6xl font-bold text-center text-[#855d14] mb-4 tracking-tight">
          The Ceen Collection  
        </h1>

        <p className="text-center text-xl text-gray-700 mb-16">
          Discover German-engineered skincare luxury
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {products.map((product) => {
            const imgSrc = product?.image_url?.[0] || "/placeholder.jpg";

            return (
              <div
                key={product.id}
                className="group bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-8 border border-[#e5e2d7]"
              >
                <div className="relative overflow-hidden bg-gradient-to-b from-white to-[#fdfcfb]">
                  <img
                    src={imgSrc}
                    alt={product.name || "Product Image"}
                    className="w-full h-80 object-cover object-center group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />
                </div>
                <div className="p-8 text-center space-y-4">
                  <h3 className="text-xl font-bold text-[#855d14] line-clamp-2 leading-tight">
                    {product.name?.replace("CEEN ", "")}
                  </h3>

                  <Link
                    to={`/product/${product.id}`}
                    className="relative inline-flex items-center gap-3 px-10 py-4 text-[#855d14] border border-[#855d14] font-semibold rounded-full overflow-hidden transition-all duration-300"
                  >
                    <span className="relative z-10">View Details</span>

                    <span className="absolute inset-0 bg-[#855d14] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />

                    <span className="absolute inset-0 text-white flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      View Details
                    </span>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

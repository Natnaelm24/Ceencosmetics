
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import HeroCare from "../Hero.jsx";

function SkinAging() {
  const {slug} = useParams();
  const [product, setProduct] = useState(null);
  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`${API_URL}/skin-concerns`);
        if (!res.ok) throw new Error("Failed to fetch products");

        const data = await res.json();

        // Find the "Skin Aging" product
        const skinAgingProduct = data.find(
          (item) => item.slug === "skin-aging"
        );

        setProduct(skinAgingProduct);
      } catch (err) {
        console.error("Error fetching skin aging product:", err);
      }
    };

    fetchProduct();
  }, [API_URL]);

  if (!product) return <p className="text-center py-20">Loading...</p>;

  return (
    <div>
      {/* Hero Section */}
      <HeroCare
        title={product.title}
        backgroundImage={product.image_url[0] || "/default-hero.jpg"}
        overlayColor="from-white/70 via-white/50 to-white/70"
        topGlowColor="bg-yellow-200/20"
        bottomGlowColor="bg-blue-200/20"
      />

      {/* Content Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Text Content */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                {product.title}
              </h1>

              <p
                className="text-lg text-gray-700 mb-4"
                dangerouslySetInnerHTML={{ __html: product.description }}
              />

              <h2 className="text-2xl font-semibold mt-6 mb-3">
                Signs of Skin Aging
              </h2>
              <div
                className="text-gray-700 mb-4"
                dangerouslySetInnerHTML={{ __html: product.signs }}
              />

              <h2 className="text-2xl font-semibold mt-6 mb-3">
                Causes of Skin Aging
              </h2>
              <div
                className="text-gray-700 mb-3"
                dangerouslySetInnerHTML={{ __html: product.causes }}
              />

              <h2 className="text-2xl font-semibold mt-6 mb-3">
                Treatments
              </h2>
              <div
                className="text-gray-700 mb-3"
                dangerouslySetInnerHTML={{ __html: product.treatments }}
              />
            </div>

            {/* Image */}
            <div className="flex justify-center md:justify-end">
              <img
                src={product.image_url[0] || "/default-product.jpg"}
                alt={product.title}
                className="rounded-3xl shadow-lg object-cover w-full h-80 md:h-96 transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SkinAging;

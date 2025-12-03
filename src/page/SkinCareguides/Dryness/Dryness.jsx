import React, { useState, useEffect } from "react";
import HeroCare from "../Hero.jsx";

function Dryness() {
  const [product, setProduct] = useState(null);
  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`${API_URL}/skin-concerns`);
        if (!res.ok) throw new Error("Failed to fetch products");

        const data = await res.json();

        // Find the product related to "Dryness & Dehydration"
        const drynessProduct = data.find(
          (item) => item.slug === "dryness-and-dehydration"
        );

        setProduct(drynessProduct);
      } catch (err) {
        console.error("Error fetching dryness product:", err);
      }
    };

    fetchProduct();
  }, [API_URL]);

  if (!product)
    return <p className="text-center py-20">Loading dryness data...</p>;

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
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                {product.title}
              </h2>

              {product.description && (
                <p
                  className="text-lg text-gray-700 mb-4"
                  dangerouslySetInnerHTML={{ __html: product.description }}
                />
              )}

              {product.signs && (
                <>
                  <h3 className="text-2xl font-semibold mt-6 mb-3">
                    Signs
                  </h3>
                  <div
                    className="text-gray-700 mb-4"
                    dangerouslySetInnerHTML={{ __html: product.signs }}
                  />
                </>
              )}

              {product.causes && (
                <>
                  <h3 className="text-2xl font-semibold mt-6 mb-3">
                    Causes
                  </h3>
                  <div
                    className="text-gray-700 mb-4"
                    dangerouslySetInnerHTML={{ __html: product.causes }}
                  />
                </>
              )}

              {product.treatments && (
                <>
                  <h3 className="text-2xl font-semibold mt-6 mb-3">
                    Treatments
                  </h3>
                  <div
                    className="text-gray-700 mb-4"
                    dangerouslySetInnerHTML={{ __html: product.treatments }}
                  />
                </>
              )}

              {/* Example Static Recommendation */}
              <p className="text-gray-700 mb-4">
                <strong>CEEN Ceramide Moisturizer</strong> and{" "}
                <strong>Hyaluronic Acid Serum</strong> are effective in restoring hydration, strengthening the skin barrier, and preventing water loss.
              </p>
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

export default Dryness;
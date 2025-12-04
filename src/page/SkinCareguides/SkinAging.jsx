import React, { useState, useEffect } from "react";
import HeroCare from "./Hero.jsx";

function SkinAging() {
  const [product, setProduct] = useState(null);
  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`${API_URL}/skin-concerns`);
        if (!res.ok) throw new Error("Failed to fetch products");

        const data = await res.json();

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

  if (!product)
    return <p className="text-center py-20">Loading...</p>;

  return (
    <div>
      <HeroCare
        title={product.title}
        backgroundImage={product.image_url[0] || "/default-hero.jpg"}
      />

      <section className="py-20 bg-gradient-to-b from-white to-gray-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">{product.title}</h2>

          <div
            className="text-gray-700 mb-4"
            dangerouslySetInnerHTML={{ __html: product.description }}
          />

          <h3 className="text-2xl font-semibold mt-6 mb-3">Signs</h3>
          <div dangerouslySetInnerHTML={{ __html: product.signs }} />

          <h3 className="text-2xl font-semibold mt-6 mb-3">Causes</h3>
          <div dangerouslySetInnerHTML={{ __html: product.causes }} />

          <h3 className="text-2xl font-semibold mt-6 mb-3">Treatments</h3>
          <div dangerouslySetInnerHTML={{ __html: product.treatments }} />

          <img
            src={product.image_url[0]}
            alt={product.title}
            className="rounded-2xl mt-6 shadow-lg"
          />
        </div>
      </section>
    </div>
  );
}

export default SkinAging;




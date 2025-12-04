import React, { useState, useEffect } from "react";
import HeroCare from "./Hero.jsx";

function Dullness() {
  const [product, setProduct] = useState(null);
  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`${API_URL}/skin-concerns`);
        if (!res.ok) throw new Error("Failed to fetch products");

        const data = await res.json();

        const dullnessProduct = data.find(
          (item) => item.slug === "skin-dullness"
        );

        setProduct(dullnessProduct);
      } catch (err) {
        console.error("Error fetching dullness product:", err);
      }
    };

    fetchProduct();
  }, [API_URL]);

  if (!product)
    return <p className="text-center py-20">Loading product data...</p>;

  return (
    <div>
      <HeroCare
        title={product.title}
        backgroundImage={product.image_url[0] || "/default-hero.jpg"}
      />

      <section className="py-20 bg-gradient-to-b from-white to-gray-100">
        ...
      </section>
    </div>
  );
}

export default Dullness;

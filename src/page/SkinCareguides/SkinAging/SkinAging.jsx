// import React, { useState, useEffect } from "react";
// import HeroCare from "../Hero.jsx";
// import { useParams } from "react-router-dom";

// function SkinAging() {
//   const {slug} = useParams();
//   const [product, setProduct] = useState(null);
//   const API_URL = import.meta.env.VITE_API_URL;

//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         const res = await fetch(`${API_URL}/:slug`);
//         if (!res.ok) throw new Error("Failed to fetch products");

//         const data = await res.json();

//         // Find the "Skin Aging" product
//         const skinAgingProduct = data.find(
//           (item) => item.slug === "skin-aging"
//         );

//         setProduct(skinAgingProduct);
//       } catch (err) {
//         console.error(err);
//       }
//     };

//     fetchProduct();
//   }, [API_URL]);

//   if (!product) return <p className="text-center py-20">Loading...</p>;

//   return (
//     <div>
//       {/* Hero Section */}
//       <HeroCare
//         title={product.title}
//         backgroundImage={product.image_url[0] || "/default-hero.jpg"}
//         overlayColor="from-white/70 via-white/50 to-white/70"
//         topGlowColor="bg-yellow-200/20"
//         bottomGlowColor="bg-blue-200/20"
//       />

//       {/* Content Section */}
//       <section className="py-20 bg-gradient-to-b from-white to-gray-100">
//         <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid md:grid-cols-2 gap-10 items-center">
//             {/* Text Content */}
//             <div>
//               <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
//                 {product.title}
//               </h1>

//               <p
//                 className="text-lg text-gray-700 mb-4"
//                 dangerouslySetInnerHTML={{ __html: product.description }}
//               />

//               <h2 className="text-2xl font-semibold mt-6 mb-3">
//                 Signs of Skin Aging
//               </h2>
//               <div
//                 className="text-gray-700 mb-4"
//                 dangerouslySetInnerHTML={{ __html: product.signs }}
//               />

//               <h2 className="text-2xl font-semibold mt-6 mb-3">
//                 Causes of Skin Aging
//               </h2>
//               <div
//                 className="text-gray-700 mb-3"
//                 dangerouslySetInnerHTML={{ __html: product.causes }}
//               />

//               <h2 className="text-2xl font-semibold mt-6 mb-3">
//                 Treatments
//               </h2>
//               <div
//                 className="text-gray-700 mb-3"
//                 dangerouslySetInnerHTML={{ __html: product.treatments }}
//               />
//             </div>

//             {/* Image */}
//             <div className="flex justify-center md:justify-end">
//               <img
//                 src={product.image_url[0] || "/default-product.jpg"}
//                 alt={product.title}
//                 className="rounded-3xl shadow-lg object-cover w-full h-80 md:h-96 transition-transform duration-500 hover:scale-105"
//               />
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default SkinAging;



import React, { useEffect, useState } from "react";

const API_URL = "https://ceen.risegmbh.com/api"; // Your base API URL
const SLUG = "skin-aging"; 

const SkinAging = () => {
  const [skinConcern, setSkinConcern] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch skin concerns and filter by slug
  const fetchSkinConcern = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`${API_URL}/skin-concerns`);
      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }

      const data = await response.json();

      // Find the specific skin concern by slug
      const item = data.find((sc) => sc.slug === SLUG);

      if (!item) {
        throw new Error("Skin concern not found.");
      }

      setSkinConcern(item);
    } catch (err) {
      console.error(err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSkinConcern();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;
  if (!skinConcern) return null;

  return (
    <div>
      <h1>{skinConcern.title}</h1>
      <p>{skinConcern.description}</p>

      <h2>Signs</h2>
      <div dangerouslySetInnerHTML={{ __html: skinConcern.signs }} />

      <h2>Causes</h2>
      <div dangerouslySetInnerHTML={{ __html: skinConcern.causes }} />

      <h2>Treatments</h2>
      <div dangerouslySetInnerHTML={{ __html: skinConcern.treatments }} />

      {skinConcern.image_url && skinConcern.image_url.length > 0 && (
        <div>
          <h2>Images</h2>
          {skinConcern.image_url.map((url, index) => (
            <img key={index} src={url} alt={skinConcern.title} style={{ maxWidth: "300px", margin: "10px" }} />
          ))}
        </div>
      )}
    </div>
  );
};

export default SkinAging;




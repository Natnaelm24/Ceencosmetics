// src/components/ProductDetail/ProductGallery.jsx
import { useState } from "react";

const ProductGallery = ({ image }) => {
  const [mainImage, setMainImage] = useState(image);

  const thumbnails = [image, image, image, image]; // Replace with real alt images later

  return (
    <div className="space-y-6 sticky top-10">
      {/* Main Image */}
      <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
        <img
          src={mainImage}
          alt="Product"
          className="w-full h-96 md:h-[700px] object-contain p-10 hover:scale-105 transition-transform duration-700"
        />
      </div>

      {/* Thumbnails */}
      <div className="grid grid-cols-4 gap-4">
        {thumbnails.map((img, i) => (
          <button
            key={i}
            onClick={() => setMainImage(img)}
            className={`rounded-2xl overflow-hidden border-4 transition-all ${
              mainImage === img
                ? "border-[#855d14] shadow-xl"
                : "border-transparent hover:border-[#855d14]/30"
            }`}
          >
            <img src={img} alt={`View ${i + 1}`} className="w-full h-28 object-contain bg-white p-4" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;
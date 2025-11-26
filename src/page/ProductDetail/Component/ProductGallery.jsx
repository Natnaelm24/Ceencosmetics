// src/components/ProductDetail/ProductGallery.jsx
import { useState } from "react";

const ProductGallery = ({ images = [] }) => {
  const [mainImage, setMainImage] = useState(images[0] || "https://via.placeholder.com/600");

  return (
    <div className="space-y-6 sticky top-10">
      <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
        <img
          src={mainImage}
          alt="Product"
          className="w-full h- md:h-[400px] object-contain p-12 hover:scale-110 transition-transform duration-700"
        />
      </div>
      {images.length > 1 && (
        <div className="grid grid-cols-4 gap-4">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setMainImage(img)}
              className={`rounded-2xl overflow-hidden border-4 transition-all ${
                mainImage === img ? "border-[#855d14] shadow-xl" : "border-transparent hover:border-[#855d14]/30"
              }`}
            >
              <img src={img} alt="" className="w-full h-25 object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductGallery;
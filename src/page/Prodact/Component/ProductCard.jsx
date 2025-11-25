// src/components/ProductPage/ProductCard.jsx
import { useState } from 'react';
import { useCart } from '../../../component/ProductCard/CartContext';
import Toast from '../../../component/ProductCard/UI/Toast';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const [showToast, setShowToast] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    setShowToast(true);
  };

  return (
    <>
      <div className="bg-[#ffffff] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
        <div className="h-64 sm:h-80 overflow-hidden bg-[#e5e2d7]">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="p-6 text-center">
          <h3 className="text-lg font-medium text-[#855d14] mb-2">
            {product.name}
          </h3>

          <p className="text-2xl font-bold text-[#855d14] mb-4">
            ${product.price}
          </p>

          <button
            onClick={handleAddToCart}
            className="w-full bg-[#855d14] hover:bg-[#6d4a10] text-white font-semibold py-3 px-8 rounded-full transition transform hover:scale-105 active:scale-95"
          >
            Add to Bag
          </button>
        </div>
      </div>

      {showToast && (
        <Toast
          message={`${product.name} added to bag!`}
          onClose={() => setShowToast(false)}
        />
      )}
    </>
  );
};

export default ProductCard;

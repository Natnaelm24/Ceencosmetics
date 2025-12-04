import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ProductSection = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const sliderRef = useRef(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/products`);
        const data = await res.json();

        console.log("API Response:", data); // Remove this later

        // The real API returns an array directly
        // Sometimes it's wrapped like { products: [...] } – we handle both
        const productList = Array.isArray(data) ? data : data.products || [];

        setProducts(productList);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -320, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 320, behavior: "smooth" });
  };

  return (
    <section className="py-20 bg-[#e5e2d7]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#855d14] to-[#2c281a]">
            Featured Beauty Products
          </span>
        </h2>

        {/* Loading State */}
        {loading && (
          <div className="text-center py-10">
            <p className="text-xl text-gray-600">Loading amazing products...</p>
          </div>
        )}

        {/* No Products */}
        {!loading && products.length === 0 && (
          <div className="text-center py-10">
            <p className="text-xl text-gray-500">No products available at the moment.</p>
          </div>
        )}

        {/* Products Grid/Slider */}
        {!loading && products.length > 0 && (
          <div className="relative">
            <button
              onClick={scrollLeft}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white/90 backdrop-blur-sm text-[#855d14] p-4 rounded-full shadow-xl hover:bg-white hover:scale-110 transition-all duration-300 border border-[#855d14]/20"
              aria-label="Scroll left"
            >
              ←
            </button>

            <button
              onClick={scrollRight}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white/90 backdrop-blur-sm text-[#855d14] p-4 rounded-full shadow-xl hover:bg-white hover:scale-110 transition-all duration-300 border border-[#855d14]/20"
              aria-label="Scroll right"
            >
              →
            </button>

            <div
              ref={sliderRef}
              className="flex gap-8 overflow-x-auto scroll-smooth py-8 px-2 hide-scrollbar"
            >
              {products.map((product) => (
                <Link
                  key={product.id}
                  to={`/product/${product.id}`}
                  className="flex-shrink-0 w-72 bg-white rounded-3xl shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl group"
                >
                  <div className="h-80 bg-gradient-to-b from-[#fefcfb] to-white p-8">
                    <img
                      src={product.image_url?.[0] || product.image || "/placeholder-product.jpg"}
                      alt={product.name || product.title}
                      className="w-full h-full object-contain drop-shadow-lg group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  <div className="p-8 text-center bg-white">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">
                      {product.name || product.title}
                    </h3>
                    <span className="inline-block px-8 py-3 bg-gradient-to-r from-[#855d14] to-[#2c281a] text-white font-semibold rounded-full hover:shadow-lg transition-shadow">
                      View Product
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Hide Scrollbar */}
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default ProductSection;
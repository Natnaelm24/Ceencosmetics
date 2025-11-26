import { useRef } from "react";
import { Link } from "react-router-dom";

const ProductSection = () => {
  const products = [
    { id: 1, name: "Soft Glow Foundation", price: "34.99", image: "/img/foundation.jpg" },
    { id: 2, name: "Velvet Matte Lipstick", price: "19.99", image: "/img/lipstick.jpg" },
    { id: 3, name: "Luxury Liquid Blush", price: "24.99", image: "/img/blush.jpg" },
    { id: 4, name: "Hydra Glow Serum", price: "39.99", image: "/img/serum.jpg" },
    { id: 5, name: "Hydra Glow Serum", price: "39.99", image: "/img/serum.jpg" },
    { id: 6, name: "Hydra Glow Serum", price: "39.99", image: "/img/serum.jpg" },
    { id: 7, name: "Hydra Glow Serum", price: "39.99", image: "/img/serum.jpg" },
  ];

  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <section className="py-20 bg-[#e5e2d7]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#855d14] to-[#2c281a]">
            Featured Beauty Products
          </span>
        </h2>

        {/* Slider Container */}
        <div className="relative">
          {/* Left Button */}
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-[#855d14] text-white p-3 rounded-full shadow hover:bg-[#2c281a] transition"
          >
            &#8592;
          </button>

          {/* Right Button */}
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-[#855d14] text-white p-3 rounded-full shadow hover:bg-[#2c281a] transition"
          >
            &#8594;
          </button>

          {/* Products Slider */}
          <div
            ref={sliderRef}
            className="flex space-x-6 overflow-x-auto scroll-smooth py-4 hide-scrollbar"
          >
            {products.map((product) => (
              <div
                key={product.id}
                className="flex-shrink-0 w-64 bg-[#ffffff] rounded-2xl shadow-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-2xl"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-contain p-6 bg-[#fefcfb]"
                />
                <div className="p-6 text-center">
                  <h3 className="text-lg font-semibold text-[#000000]">{product.name}</h3>
                  <Link
                    to="/product"
                    className="mt-4 inline-block px-6 py-3 bg-[#ffffff] text-[#855d14] border-2 border-[#855d14] rounded-full font-semibold hover:scale-105 transition-transform"
                  >
                    Explore More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Custom CSS for hiding scrollbar */}
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
      `}</style>
    </section>
  );
};

export default ProductSection;


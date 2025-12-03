import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ProductSection = () => {
  const [products, setProducts] = useState([]);
  const sliderRef = useRef(null);

  // Fetch products from API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/products`);
        const data = await res.json();

        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <section className="py-20 bg-[#e5e2d7]">
      <div className="max-w-7xl mx-auto px-6">
        
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#855d14] to-[#2c281a]">
            Featured Beauty Products
          </span>
        </h2>

        <div className="relative">
          
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-[#855d14] text-white p-3 rounded-full shadow hover:bg-[#2c281a] transition"
          >
            &#8592;
          </button>

          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-[#855d14] text-white p-3 rounded-full shadow hover:bg-[#2c281a] transition"
          >
            &#8594;
          </button>

          <div
            ref={sliderRef}
            className="flex space-x-6 overflow-x-auto scroll-smooth py-4 hide-scrollbar"
          >
            {products.length === 0 ? (
              <p className="text-center w-full">Loading products...</p>
            ) : (
              products.map((product) => (
                <div
                  key={product.id}
                  className="flex-shrink-0 w-64 bg-white rounded-2xl shadow-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-2xl"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-contain p-6 bg-[#fefcfb]"
                  />
                  <div className="p-6 text-center">
                    <h3 className="text-lg font-semibold text-black">{product.name}</h3>

                    <Link
                      to={`/product/${product.id}`}
                      className="mt-4 inline-block px-6 py-3 bg-white text-[#855d14] border-2 border-[#855d14] rounded-full font-semibold hover:scale-105 transition-transform"
                    >
                      Explore More
                    </Link>  
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

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

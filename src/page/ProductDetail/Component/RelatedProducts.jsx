import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const RelatedProducts = ({ currentId }) => {
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRelated = async () => {
      try {
        setLoading(true);
        const res = await fetch(`${import.meta.env.VITE_API_URL}/products`);
        
        if (!res.ok) throw new Error("Failed to fetch products");

        const data = await res.json();

        const filtered = data
          .filter(product => product.id !== Number(currentId))
          .slice(0, 4);
        
        setRelatedProducts(filtered);
      } catch (err) {
        setError("Failed to load related products");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchRelated();
  }, [currentId]);

  if (loading) {
    return (
      <div className="py-20">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-[#855d14] mb-16">
          You May Also Love
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map(i => (
            <div key={i} className="bg-white rounded-3xl shadow-xl animate-pulse">
              <div className="h-64 bg-gray-200 rounded-t-3xl" />
              <div className="p-6 space-y-3">
                <div className="h-6 bg-gray-200 rounded w-3/4 mx-auto" />
                <div className="h-8 bg-gray-200 rounded w-1/2 mx-auto" />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) return null;

  return (
    <div className="py-20">
      <h2 className="text-4xl md:text-4xl font-bold text-center text-[#855d14] mb-16 tracking-tight">
        You May Also Love
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {relatedProducts.map(product => (
          <Link
            key={product.id}
            to={`/product/${product.id}`}
            className="group block bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-6 border border-[#e5e2d7]"
          >
            <div className="relative overflow-hidden bg-gradient-to-b from-white to-[#fdfcfb]">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-72 object-contain p-10 group-hover:scale-110 transition-transform duration-700"
              />
              {product.badge && (
                <span className="absolute top-4 left-4 px-5 py-2 bg-[#855d14] text-white text-xs font-bold rounded-full shadow-xl">
                  {product.badge}
                </span>
              )}
            </div>
            <div className="p-8 text-center space-y-3">
              <h3 className="font-bold text-[#855d14] text-lg line-clamp-2">
                {product.name}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;

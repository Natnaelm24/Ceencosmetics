// src/components/ProductDetail/RelatedProducts.jsx
import { Link } from "react-router-dom";
import { products } from "../../Prodact/Component/productsData";

const RelatedProducts = ({ currentId }) => {
  const related = products
    .filter(p => p.id !== currentId)
    .slice(0, 4);

  return (
    <div>
      <h2 className="text-4xl md:text-5xl font-bold text-center text-[#855d14] mb-16">
        You May Also Love
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {related.map(product => (
          <Link
            key={product.id}
            to={`/product/${product.id}`}
            className="group block bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all hover:-translate-y-4"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 object-contain p-8 group-hover:scale-110 transition-transform"
            />
            <div className="p-6 text-center">
              <h3 className="font-semibold text-[#855d14]">{product.name}</h3>
              <p className="text-2xl text-[#855d14] mt-2">${product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
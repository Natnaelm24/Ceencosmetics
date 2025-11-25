import ProductCard from "../../../component/ProductCard/ProductCard";

const ProductSection = () => {
  const products = [
    {
      id: 1,
      name: "Soft Glow Foundation",
      price: "34.99",
      image: "/img/foundation.jpg",
    },
    {
      id: 2,
      name: "Velvet Matte Lipstick",
      price: "19.99",
      image: "/img/lipstick.jpg",
    },
    {
      id: 3,
      name: "Luxury Liquid Blush",
      price: "24.99",
      image: "/img/blush.jpg",
    },
    {
      id: 4,
      name: "Hydra Glow Serum",
      price: "39.99",
      image: "/img/serum.jpg",
    },
  ];

  return (
    <section className="py-20 bg-[#e5e2d7]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#855d14] to-[#2c281a]">
            Featured Beauty Products
          </span>
        </h2>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="bg-[#ffffff] rounded-2xl shadow-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-2xl"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-contain p-6 bg-[#fefcfb]"
              />
              <div className="p-6 text-center">
                <h3 className="text-lg font-semibold text-[#855d14]">{product.name}</h3>
                <p className="mt-2 text-[#855d14] font-bold">${product.price}</p>
                <button className="mt-4 px-6 py-3 bg-[#ffffff] text-[#855d14] border-2 border-[#855d14] rounded-full font-semibold hover:scale-105 transition-transform">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProductSection;

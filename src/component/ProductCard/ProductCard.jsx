const ProductCard = ({ image, name, price }) => {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-4">
      <img
        src={image}
        alt={name}
        className="w-full h-56 object-cover rounded-lg mb-4"
      />

      <h3 className="text-lg font-semibold text-gray-900">{name}</h3>

      <p className="text-pink-600 text-xl font-bold mt-2">${price}</p>

      <button className="mt-4 w-full bg-pink-500 text-white py-2 rounded-lg 
        hover:bg-pink-600 transition font-semibold">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;

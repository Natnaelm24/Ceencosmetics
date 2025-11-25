// src/components/ProductPage/CategorySidebar.jsx
const CategorySidebar = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    <aside className="w-full lg:w-72">
      <div className="bg-white rounded-2xl shadow-md p-6 sticky top-6 border border-gray-100">
        {/* Clean Title */}
        <h2 className="text-xl font-semibold text-gray-800 mb-6">
          Categories
        </h2>

        {/* Simple List */}
        <ul className="space-y-2">
          {categories.map((cat) => (
            <li key={cat.id}>
              <button
                onClick={() => onSelectCategory(cat.id)}
                className={`
                  w-full text-left px-5 py-3 rounded-xl text-base font-medium
                  transition-all duration-200
                  ${selectedCategory === cat.id
                    ? 'bg-[#855d14] text-white'
                    : 'text-gray-700 hover:bg-[#e5e2d7] hover:text-[#855d14]'
                  }
                `}
              >
                {cat.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default CategorySidebar;
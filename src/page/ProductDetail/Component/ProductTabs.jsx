// src/components/ProductDetail/ProductTabs.jsx
import { useState } from "react";

const ProductTabs = ({ product }) => {
  const [activeTab, setActiveTab] = useState("description");

  const tabs = [
    { id: "description rdddddddddddr", label: "Description" },
    { id: "ingredients", label: "Key Ingredients" },
    { id: "reviews", label: "Reviews (24)" },
  ];

  return (
    <div className="bg-white rounded-3xl shadow-xl border border-[#e5e2d7] p-10">
      {/* Tab Buttons */}
      <div className="flex gap-10 border-b border-[#e5e2d7] mb-8">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`pb-4 px-2 text-lg font-medium transition-all relative ${
              activeTab === tab.id
                ? "text-[#855d14]"
                : "text-gray-600 hover:text-[#855d14]"
            }`}
          >
            {tab.label}
            {activeTab === tab.id && (
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#855d14] rounded-full" />
            )}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="text-gray-700 leading-relaxed text-lg">
        {activeTab === "description" && (
          <p>{product.description || "Experience luxury redefined. Crafted with the finest ingredients and timeless elegance, this masterpiece enhances your natural beauty with effortless sophistication."}</p>
        )}
        {activeTab === "ingredients" && (
          <p>24K Gold Flakes • Bulgarian Rose Oil • Hyaluronic Acid • Vitamin C • Pearl Extract • Caviar Complex</p>
        )}
        {activeTab === "reviews" && (
          <p className="italic">"Absolutely divine. My skin has never looked this radiant." — Sophie L.</p>
        )}
      </div>
    </div>
  );
};

export default ProductTabs;
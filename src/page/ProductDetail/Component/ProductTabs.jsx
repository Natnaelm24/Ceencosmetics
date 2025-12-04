import { useState } from "react";

const ProductTabs = ({ product }) => {
  const [activeTab, setActiveTab] = useState("description");

  if (!product) return <p>No product data.</p>;

  const tabs = [
    { id: "description", label: "Description" },
    { id: "key_benefits", label: "Key Benefits" },
    { id: "application_tip", label: "How to Use" },
  ];

  return (
    <div className="bg-white rounded-3xl shadow-xl border border-[#e5e2d7] p-10">
      <div className="flex gap-10 border-b border-[#e5e2d7] mb-8">
        {tabs.map((tab) => (
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

      <div className="text-gray-700 leading-relaxed text-lg">
        {activeTab === "description" && <p>{product.description}</p>}

        {activeTab === "key_benefits" && (
          <ul className="list-disc pl-5 space-y-2">
            {(product.key_benefits || []).map((b, i) => (
              <li key={i}>{b.benefit}</li>
            ))}
          </ul>
        )}

        {activeTab === "application_tip" && <p>{product.application_tip}</p>}
      </div>
    </div>
  );
};

export default ProductTabs;


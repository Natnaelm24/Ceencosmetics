// src/components/MissionVisionValuesModern.jsx
import React from 'react';
import { Heart, Leaf, Sparkles, Globe } from 'lucide-react';

export default function MissionVisionValuesModern() {
  const cards = [
    {
      title: "Mission",
      subtitle: "What we do",
      text: "Craft the purest, most effective clean skincare — so every woman can experience true radiance without compromise.",
      gradient: "from-[#855d14] to-[#e5e2d7]"
    },
    {
      title: "Vision",
      subtitle: "Where we’re going",
      text: "A world where luxury and conscience are inseparable — and caring for your skin feels like pure self-love.",
      gradient: "from-[#e5e2d7] to-[#855d14]"
    },
    {
      title: "Self-Love First",
      subtitle: "Our first value",
      text: "Every drop is a reminder: you deserve the very best.",
      gradient: "from-[#855d14] to-[#d4cbb8]" // softened version for variety
    },
    {
      title: "Clean & Conscious",
      subtitle: "Our promise",
      text: "100% natural. Cruelty-free. Planet-friendly. Always.",
      gradient: "from-[#e5e2d7] to-[#855d14]"
    },
    {
      title: "Real Results",
      subtitle: "No shortcuts",
      text: "Clinical actives. Small batches. Visible glow.",
      gradient: "from-[#855d14] to-[#a8894a]"
    },
    {
      title: "Give Back",
      subtitle: "Our impact",
      text: "One tree planted per order. Forever.",
      gradient: "from-[#a8894a] to-[#e5e2d7]"
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-white via-[#e5e2d7]/20 to-white overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">

        {/* Title */}
        <div className="text-center mb-20">
          <h2 className="text-6xl md:text-7xl font-bold text-gray-900 mb-4">
            Our Heart & Soul
          </h2>
          <p className="text-xl text-gray-600 font-light">
            Scroll to discover what drives us
          </p>
        </div>

        {/* Horizontal Scrollable Cards – Desktop */}
        <div className="hidden lg:block overflow-x-auto scrollbar-hide">
          <div className="flex gap-8 px-8" style={{ width: 'max-content' }}>
            {cards.map((card, i) => (
              <div
                key={i}
                className="group relative w-96 flex-shrink-0 bg-white rounded-3xl overflow-hidden
                           transition-all duration-500"
              >
                {/* Gradient Top Bar */}
                <div className={`h-2 bg-gradient-to-r ${card.gradient}`} />
                
                <div className="p-12 text-center">
                  <h3 className="text-4xl font-bold text-gray-900 mb-2">{card.title}</h3>
                  <p className="text-[#855d14] text-sm tracking-widest mb-6">{card.subtitle}</p>
                  <p className="text-lg text-gray-700 leading-relaxed">{card.text}</p>
                </div>

                {/* Hover glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              </div>
            ))}
          </div>
        </div>

        {/* Vertical Stack – Mobile */}
        <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-8">
          {cards.map((card, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl p-10 text-center border border-[#e5e2d7]"
            >
              <div className={`h-1.5 rounded-full bg-gradient-to-r ${card.gradient} mb-6`} />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{card.title}</h3>
              <p className="text-[#855d14] text-sm tracking-wider mb-4">{card.subtitle}</p>
              <p className="text-gray-700">{card.text}</p>
            </div>
          ))}
        </div>

        {/* Final touch */}
        <div className="text-center mt-20">
          <p className="text-2xl font-light italic text-gray-800">
            This is more than skincare.
          </p>
          <p className="text-3xl text-[#855d14] tracking-wider mt-4">
            This is CEEN.
          </p>
        </div>
      </div>

      {/* Hide scrollbar but keep functionality */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
}

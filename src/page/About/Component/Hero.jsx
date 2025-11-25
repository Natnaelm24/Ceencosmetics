// src/components/AboutHeroMinimal.jsx
import React from 'react';
import Contactbg from '../../../assets/Image/Contactbg.jpg';

export default function AboutHeroMinimal() {
  return (
    <section className="relative h-100 flex items-center justify-center">
      
      {/* Full Background Image */}
      <div className="absolute inset-0">
        <img
          src={Contactbg}
          alt="CEEN Luxury Skincare"
          className="w-full h-full object-cover object-center"
        />

        {/* Warm Beige Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#e5e2d7]/80 via-[#e5e2d7]/60 to-[#e5e2d7]/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <h1 className="text-4xl md:text-5xl font-serif text-[#855d14] mb-4 tracking-tight">
          About
        </h1>

        {/* Breadcrumb */}
        <div className="flex items-center justify-center gap-3 text-lg md:text-xl font-light text-gray-700">
          <span className="text-[#855d14]">Home</span>
          <span className="text-gray-400">—</span>
          <span className="text-[#855d14] font-medium">About</span>
        </div>
      </div>

      {/* Decorative Warm Glows */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-[#ffffff]/25 rounded-full blur-3xl" />
      <div className="absolute bottom-32 right-32 w-48 h-48 bg-[#e5e2d7]/40 rounded-full blur-3xl" />
    </section>
  );
}

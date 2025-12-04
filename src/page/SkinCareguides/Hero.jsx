// src/components/AboutHeroMinimal.jsx
import React from 'react';

export default function HeroCare({
  title = "CEEN Product",
  backgroundImage,
  overlayColor = "from-[#e5e2d7]/80 via-[#e5e2d7]/60 to-[#e5e2d7]/80",
  topGlowColor = "bg-[#ffffff]/25",
  bottomGlowColor = "bg-[#e5e2d7]/40",
}) {
  return (
    <section className="relative h-100 flex items-center justify-center">
      
      {/* Full Background Image */}
      <div className="absolute inset-0">
        <img
          src={backgroundImage}
          alt={title}
          className="w-full h-full object-cover object-center"
        />

        {/* Overlay */}
        <div className={`absolute inset-0 bg-linear-to-b ${overlayColor}`} />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <h1 className="text-4xl md:text-5xl font-serif text-[#855d14] mb-4 tracking-tight">
          {title}
        </h1>
      </div>

      {/* Decorative Warm Glows */}
      <div className={`absolute top-20 left-20 w-32 h-32 ${topGlowColor} rounded-full blur-3xl`} />
      <div className={`absolute bottom-32 right-32 w-48 h-48 ${bottomGlowColor} rounded-full blur-3xl`} />
    </section>
  );
}

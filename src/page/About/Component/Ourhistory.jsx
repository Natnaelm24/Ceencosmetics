// src/components/OurHistoryWithImage.jsx
import React from "react";
import about_img_1 from "../../../assets/Image/about_img_1.jpeg";

export default function OurHistoryWithImage() {
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-white via-[#e5e2d7]/40 to-white">
      <div className="container mx-auto px-6 max-w-7xl">
        
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* LEFT: Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={about_img_1}
                alt="CEEN Founder crafting the first serum in Paris"
                className="w-full h-auto object-cover"
              />

              {/* Elegant warm overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </div>

            {/* Soft Warm Decorative Glows */}
            <div className="absolute -top-8 -left-8 w-48 h-48 bg-[#e5e2d7]/50 rounded-full blur-3xl" />
            <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-[#e5e2d7]/40 rounded-full blur-3xl" />

          </div>

          {/* RIGHT: Text */}
          <div className="order-1 lg:order-2 text-center lg:text-left">
            
            <h2 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-8 leading-tight">
              Our Story
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#855d14] to-[#c49a4a]">
                Begins With You
              </span>
            </h2>

            <div className="space-y-6 text-lg md:text-xl text-gray-700 font-light leading-relaxed max-w-2xl">
              <p>In 2019, Amara Chen asked one question in Paris:</p>

              <p className="italic text-2xl text-gray-800 font-medium">
                “Why can’t clean beauty feel this luxurious?”
              </p>

              <p>
                That question became the{" "}
                <span className="font-semibold text-[#855d14]">
                  Rose Quartz Serum
                </span>{" "}
                — and CEEN was born.
              </p>

              <p>
                Today, thousands of women around the world choose CEEN not just
                for glowing skin — but for the quiet ritual of self-love it
                brings.
              </p>
            </div>

            {/* Stats */}
            <div className="mt-12 flex flex-col sm:flex-row gap-8 justify-center lg:justify-start">
              <div className="text-center">
                <div className="text-4xl font-bold text-[#855d14]">2019</div>
                <p className="text-sm text-gray-600 mt-1">Founded in Paris</p>
              </div>

              <div className="text-center">
                <div className="text-4xl font-bold text-[#855d14]">50,000+</div>
                <p className="text-sm text-gray-600 mt-1">
                  Radiant Souls Worldwide
                </p>
              </div>
            </div>

            {/* Quote */}
            <blockquote className="mt-16 text-2xl md:text-3xl font-light italic text-gray-800 max-w-xl mx-auto lg:mx-0">
              “I wanted to create something that makes women feel truly seen.”
            </blockquote>

            <p className="mt-4 text-right text-[#855d14] font-medium tracking-wider text-lg">
              — Amara Chen, Founder
            </p>

          </div>
        </div>
      </div>
    </section>
  );
}

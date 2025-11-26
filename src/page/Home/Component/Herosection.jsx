import React, { useState, useEffect } from "react";
import HeroImg from "../../../assets/Image/Hero.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <section
      className="relative flex flex-col md:flex-row items-center justify-start min-h-screen bg-cover bg-center bg-no-repeat px-6 md:px-20"
      style={{ backgroundImage: `url(${HeroImg})` }}
    >
      {/* Overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/25"></div>

      {/* Content */}
      <div
        className={`relative z-10 text-left space-y-6 transition-all duration-1000 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h1 className="text-5xl md:text-6xl font-serif font-bold text-white">
          Beauty that <span className="text-[#855d14]">Shines</span>
        </h1>
        <p className="text-white text-lg md:text-xl max-w-lg">
          Experience the glow of naturally radiant, healthy skin with CEEN
          products.
        </p>
        <div className="flex space-x-4 mt-4">
          <Link
            to="/product"
            className="px-6 py-3 bg-[#855d14] text-white rounded-lg shadow-lg hover:bg-[#e5e2d7] hover:text-[#855d14] transition-transform transform hover:scale-105 inline-block"
          >
            Shop Now
          </Link>

          <Link
            to="/about"
            className="px-6 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-[#855d14] transition-transform transform hover:scale-105 inline-block"
          >
            Learn More
          </Link>
        </div>
      </div>

      {/* Decorative floating circles using brand colors */}
      <div className="absolute top-10 left-10 w-16 h-16 bg-[#855d14]/40 rounded-full animate-float"></div>
      <div className="absolute bottom-10 right-10 w-24 h-24 bg-[#e5e2d7]/40 rounded-full animate-float animation-delay-2000"></div>
    </section>
  );
};

export default Hero;

import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

// Replace with your actual hero product image
import heroProduct from "../../../assets/Image/facecreamwithbox.png";

function AboutUs() {
  return (
    <section className="py-28 bg-[#ffffff] overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Floating Product */}
          <div className="relative flex justify-center lg:justify-start">
            <div className="relative group">
              <div className="absolute -inset-4 bg-[#855d14]/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <img
                src={heroProduct}
                alt="Signature Product"
                className="relative z-10 w-96 drop-shadow-2xl group-hover:-translate-y-4 transition-transform duration-700"
              />
            </div>
          </div>

          {/* Right: Text Content */}
          <div className="space-y-8">
            {/* Title */}
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight justify-start">
              TRADITION OF{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#855d14] to-[#d8c77d]">
                QUALITY
              </span>
            </h2>

            {/* Description */}
            <div className="space-y-5 text-lg text-gray-800 leading-relaxed max-w-xl">
              <p>
                We believe beauty should be timeless, effortless, and kind — to
                your skin and the planet.
              </p>
              <p>
                Every formula is crafted with the finest natural actives, backed
                by science and wrapped in luxury. From our signature glow serums
                to nourishing creams, each product is designed to reveal your
                most radiant, confident self.
              </p>
              <p>Clean. Cruelty-free. Clinically proven. Loved by thousands.</p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Link
                to="/about"
                className="group inline-flex items-center justify-center gap-3 px-10 py-5 border-2 border-[#855d14] text-[#855d14] font-semibold text-lg rounded-full hover:bg-[#855d14] hover:text-white transition-all duration-300"
              >
                Discover Our Story
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </Link>

              <Link to="/product" className="inline-flex items-center justify-center gap-2 px-8 py-5 bg-gradient-to-r from-[#855d14] to-[#d8c25f] text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                Shop Best Sellers
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;

// import React from 'react';
// import { ArrowRight } from 'lucide-react';

// // Images
// import moisturisersImg from '../../../assets/Image/facecream.png';
// import cleansersImg from '../../../assets/Image/cleanserfoam.png';
// import acidsImg from '../../../assets/Image/product333.png';
// import sunscreensImg from '../../../assets/Image/retinolserum.png';
// import masksImg from '../../../assets/Image/lotionspf50.png';
// import serumsImg from '../../../assets/Image/lotionspf50.png';

// const categories = [
//   { title: 'Moisturisers', image:  masksImg },
//   { title: 'Cleansers', image: cleansersImg },
//   { title: 'Acids', image: sunscreensImg  },
//   { title: 'Sunscreens', image: acidsImg },
//   { title: 'Masks', image: moisturisersImg },
//   { title: 'Serums', image: serumsImg },
// ];

// // Show ONLY first 3 products
// const displayedCategories = categories.slice(0, 3);

// function CategoryShowcase() {
//   return (
//     <section className="py-28 bg-[#ffffff] overflow-hidden">
//       <div className="container mx-auto px-6 max-w-7xl">

//         {/* Header */}
//         <div className="text-center mb-20">
//           <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
//             Shop By{' '}
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#855d14] via-[#e5e2d7] to-[#855d14]">
//               Category
//             </span>
//           </h2>
//           <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//             Indulge in science-backed luxury for your most radiant skin
//           </p>
//         </div>

//         {/* Grid — Only 3 items */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
//           {displayedCategories.map((cat, index) => (
//             <div key={index} className="group cursor-pointer">

//               {/* Background Circle */}
//               <div className="relative w-68 h-68 mx-auto mb-8">
//                 <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#e5e2d7]/50 via-[#855d14]/20 to-[#e5e2d7]/50 opacity-70 scale-0 group-hover:scale-110 transition-transform duration-700"></div>
//                 <div className="absolute inset-4 rounded-full bg-[#e5e2d7]/30 shadow-2xl ring-8 ring-[#e5e2d7]/20 group-hover:ring-[#855d14]/40 transition-all duration-700"></div>

//                 {/* Image */}
//                 <div className="absolute inset-0 flex items-center justify-center -top-8 transition-all duration-700 group-hover:-translate-y-10">
//                   <img
//                     src={cat.image}
//                     alt={cat.title}
//                     className="w-full h-64 object-contain drop-shadow-xl group-hover:scale-110 transition-transform duration-700"
//                   />
//                 </div>
//               </div>

//               {/* Title */}
//               <h3 className="text-center text-xl font-bold text-gray-800 mt-6 tracking-wide">
//                 <span className="relative">
//                   {cat.title}
//                   <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-transparent via-[#855d14] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
//                 </span>
//               </h3>
//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }

// export default CategoryShowcase;







import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";

// Images (keep your paths)
import moisturisersImg from "../../../assets/Image/facecream.png";
import cleansersImg from "../../../assets/Image/cleanserfoam.png";
import acidsImg from "../../../assets/Image/product333.png";
import sunscreensImg from "../../../assets/Image/retinolserum.png";
import masksImg from "../../../assets/Image/lotionspf50.png";
import serumsImg from "../../../assets/Image/lotionspf50.png";

const categories = [
  { title: "Moisturisers", image: moisturisersImg },
  { title: "Cleansers", image: cleansersImg },
  { title: "Acids", image: acidsImg },
  { title: "Sunscreens", image: sunscreensImg },
  { title: "Masks", image: masksImg },
  { title: "Serums", image: serumsImg },
];

const displayedCategories = categories.slice(0, 3);

export default function CategoryShowcase() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Floating Background Orbs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-10 w-96 h-96 bg-[#b48a2c]/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-[#d4af37]/10 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
        </div>

        {/* Heading */}
        <div className="text-center mb-20 relative">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-[#b48a2c]/10 to-[#d4af37]/10 rounded-full border border-[#b48a2c]/20 mb-6">
            {/* <Sparkles className="w-5 h-5 text-[#b48a2c]" /> */}
            <span className="text-[#b48a2c] text-xs tracking-[0.4em] uppercase font-light">
              Curated for You
            </span>
          </div>
          
          <h3 className="text-5xl md:text-6xl lg:text-7xl font-serif text-gray-900 leading-tight">
            Shop by{" "}
            <span className="relative">
              Category
              <span className="absolute -bottom-3 left-0 w-full h-1 bg-gradient-to-r from-[#b48a2c] via-[#d4af37] to-[#b48a2c] opacity-60"></span>
            </span>
          </h3>

          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            Discover science-backed luxury formulated for every skin ritual
          </p>
        </div>

        {/* Luxury Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 lg:gap-14">
          {displayedCategories.map((cat, index) => (
            <div
              key={index}
              className="group relative"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Glassmorphism + Gradient Border Card */}
              <div className="relative bg-white/70 backdrop-blur-xl rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-700 hover:-translate-y-6 border border-white/50">
                {/* Animated Gradient Border */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#b48a2c]/20 via-transparent to-[#d4af37]/20"></div>
                  <div className="absolute -inset-1 bg-gradient-to-br from-[#b48a2c] via-[#d4af37] to-[#b48a2c] blur-xl opacity-30 group-hover:opacity-70 transition-opacity duration-700"></div>
                </div>

                {/* Image Container */}
                <div className="relative aspect-square bg-gradient-to-br from-[#faf7f2] to-[#f0ebe2] p-10 overflow-hidden">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-contain drop-shadow-2xl transition-all duration-1000 group-hover:scale-110 group-hover:rotate-3"
                  />

                  {/* Shimmer Effect on Hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 skew-x-12"></div>
                  </div>
                </div>

                {/* Text + CTA */}
                <div className="relative p-8 text-center bg-gradient-to-t from-white/90 to-transparent">
                  <h4 className="text-2xl md:text-3xl font-serif text-gray-900 mb-4 tracking-wide">
                    {cat.title}
                  </h4>

                  <button className="inline-flex items-center gap-3 text-[#b48a2c] font-medium text-lg group/btn transition-all duration-500 hover:gap-6">
                    Explore Now
                    <ArrowRight
                      size={22}
                      className="transition-transform duration-500 group-hover/btn:translate-x-2"
                    />
                  </button>
                </div>

                {/* Floating Gold Accent */}
                {/* <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-[#b48a2c] to-[#d4af37] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 blur-xl"></div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
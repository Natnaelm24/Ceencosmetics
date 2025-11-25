// import React from "react";
// import { ArrowRight, Star, Phone, Mail, MessageCircle, HelpCircle, Users, ShoppingBag, Sparkles } from "lucide-react";
// import { heroHome, heroAbout, heroProducts, heroContact, heroTestimonial, heroFaq } from "../../assets/heroSample"; 


// // Background images – replace these with your actual CEEN high-res photos
// // Sample hero images from Unsplash
// export const heroHome = "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=1470&q=80"; // Soft woman with glowing skin
// export const heroAbout = "https://images.unsplash.com/photo-1581090700227-7b59e1fcebb4?auto=format&fit=crop&w=1470&q=80"; // Elegant lab / founder portrait
// export const heroProducts = "https://images.unsplash.com/photo-1588776814546-6f8a0e2cd64b?auto=format&fit=crop&w=1470&q=80"; // Beautiful product flatlay
// export const heroContact = "https://images.unsplash.com/photo-1590490360184-1e1e3b1b5c8c?auto=format&fit=crop&w=1470&q=80"; // Warm spa-like atmosphere
// export const heroTestimonial = "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=1470&q=80"; // Happy customer close-up
// export const heroFaq = "https://images.unsplash.com/photo-1588776814546-6f8a0e2cd64b?auto=format&fit=crop&w=1470&q=80"; // Clean, minimal skincare setup


// function HeroSection({ page = "home" }) {
//   const pageContent = {
//     home: {
//       title: "Natural Beauty, Perfected for You",
//       subtitle: "Experience the glow of naturally radiant, healthy skin with CEEN.",
//       bgImage: heroHome,
//       showButtons: true,
//       features: true,
//     },
//     about: {
//       title: "Our Story of Beauty & Care",
//       subtitle: "Crafted with passion, backed by science — welcome to the CEEN legacy.",
//       bgImage: heroAbout,
//       icon: <Users className="w-10 h-10 text-rose-600" />,
//     },
//     products: {
//       title: "Premium Skincare Collection",
//       subtitle: "Luxurious, clean, and clinically proven formulas for every skin journey.",
//       bgImage: heroProducts,
//       showButtons: true,
//       icon: <ShoppingBag className="w-10 h-10 text-emerald-600" />,
//     },
//     contact: {
//       title: "We’re Here for You",
//       subtitle: "Have questions? Ready for your glow-up? Let’s talk.",
//       bgImage: heroContact,
//       icon: <Phone className="w-10 h-10 text-purple-600" />,
//     },
//     testimonial: {
//       title: "Loved by Thousands",
//       subtitle: "Real people. Real results. Real glow.",
//       bgImage: heroTestimonial,
//       icon: <MessageCircle className="w-10 h-10 text-amber-600" />,
//     },
//     faq: {
//       title: "Your Questions, Answered",
//       subtitle: "Everything you need to know about CEEN and glowing skin.",
//       bgImage: heroFaq,
//       icon: <HelpCircle className="w-10 h-10 text-cyan-600" />,
//     },
//   };

//   const content = pageContent[page] || pageContent.home;

//   return (
//     <section className="relative h-screen min-h-[650px] flex items-center justify-center overflow-hidden">
//       {/* Full Background Image with Dark Overlay */}
//       <div
//         className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105"
//         style={{
//           backgroundImage: `url(${content.bgImage})`,
//           filter: "brightness(0.65) contrast(1.1)",
//         }}
//       />

//       {/* Optional: Parallax subtle movement on scroll */}
//       <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

//       {/* Content Container */}
//       <div className="container relative z-10 mx-auto px-6 text-center text-white">
//         <div className="max-w-5xl mx-auto">

//           {/* Page Icon (with subtle glow) */}
//           {content.icon && (
//             <div className="inline-flex p-5 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 shadow-2xl mb-8">
//               <div className="relative">
//                 {content.icon}
//                 <Sparkles className="absolute -top-2 -right-2 w-5 h-5 text-white/60 animate-pulse" />
//               </div>
//             </div>
//           )}

//           {/* Main Title */}
//           <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight">
//             <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-rose-100 to-white">
//               {content.title}
//             </span>
//           </h1>

//           {/* Subtitle */}
//           <p className="text-xl md:text-2xl lg:text-3xl font-light text-gray-100 mb-12 max-w-4xl mx-auto leading-relaxed opacity-95">
//             {content.subtitle}
//           </p>

//           {/* Home Page Features */}
//           {content.features && (
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
//               {[
//                 { text: "100% Clean", icon: "Leaf" },
//                 { text: "Cruelty-Free", icon: "Heart" },
//                 { text: "Dermatologist Approved", icon: "Check" },
//                 { text: "Luxury Results", icon: "Crown" },
//               ].map((item, i) => (
//                 <div
//                   key={i}
//                   className="flex flex-col items-center gap-3 opacity-90 hover:opacity-100 transition"
//                 >
//                   <div className="w-16 h-16 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center border border-white/30">
//                     <Sparkles className="w-8 h-8 text-rose-200" />
//                   </div>
//                   <span className="text-sm md:text-base font-medium tracking-wider">
//                     {item.text}
//                   </span>
//                 </div>
//               ))}
//             </div>
//           )}

//           {/* CTA Buttons */}
//           {content.showButtons && (
//             <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
//               <a
//                 href="/products"
//                 className="group relative px-10 py-5 bg-white text-gray-900 rounded-2xl font-bold text-lg tracking-wider overflow-hidden shadow-2xl hover:shadow-white/30 transition-all duration-500 hover:scale-105"
//               >
//                 <span className="relative z-10 flex items-center gap-3">
//                   Shop Collection
//                   <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
//                 </span>
//                 <div className="absolute inset-0 bg-gradient-to-r from-rose-400 to-pink-400 translate-y-full group-hover:translate-y-0 transition-transform duration-700" />
//               </a>

//               <a
//                 href="/contact"
//                 className="px-10 py-5 border-2 border-white/50 backdrop-blur-sm rounded-2xl font-semibold text-lg tracking-wider hover:bg-white/10 hover:border-white transition-all duration-300 flex items-center gap-3"
//               >
//                 <MessageCircle className="w-5 h-5" />
//                 Get Personal Advice
//               </a>
//             </div>
//           )}

//           {/* Page-Specific Bottom Info */}
//           {page === "testimonial" && (
//             <div className="mt-16 flex items-center justify-center gap-12 text-white/90">
//               <div className="flex items-center gap-3">
//                 <div className="flex -space-x-1">
//                   {[1, 2, 3, 4, 5].map((i) => (
//                     <Star key={i} className="w-7 h-7 text-yellow-300 fill-yellow-300" />
//                   ))}
//                 </div>
//                 <span className="text-2xl font-bold">4.9 / 5</span>
//               </div>
//               <span className="text-xl">•</span>
//               <span className="text-xl font-medium">10,000+ Happy Customers</span>
//             </div>
//           )}

//           {page === "contact" && (
//             <div className="mt-16 flex flex-col gap-6 text-white/90">
//               <div className="flex items-center justify-center gap-4 text-lg">
//                 <Phone className="w-6 h-6" /> +1 (555) 123-4567
//               </div>
//               <div className="flex items-center justify-center gap-4 text-lg">
//                 <Mail className="w-6 h-6" /> hello@ceen.com
//               </div>
//             </div>
//           )}

//         </div>
//       </div>

//       {/* Elegant Bottom Curve */}
//       <div className="absolute bottom-0 left-0 right-0">
//         <svg viewBox="0 0 1440 120" className="w-full h-24 md:h-32 text-white">
//           <path
//             fill="currentColor"
//             d="M0,0 C280,80 720,120 1440,40 L1440,120 L0,120 Z"
//           />
//         </svg>
//       </div>
//     </section>
//   );
// }

// export default HeroSection;
import React from 'react'

function Hero() {
  return (
    <div>Hero</div>
  )
}

export default Hero

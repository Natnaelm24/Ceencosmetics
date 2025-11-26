// import { FaCheckCircle, FaShieldAlt, FaBolt, FaUsers } from "react-icons/fa";

// export default function WhyChooseUs() {
//   const features = [
//     {
//       icon: <FaShieldAlt className="text-white text-3xl" />,
//       title: "Trusted & Secure",
//       desc: "We prioritize security to ensure your data and experience are fully protected.",
//       color: "from-indigo-500 to-purple-500",
//     },
//     {
//       icon: <FaBolt className="text-white text-3xl" />,
//       title: "Fast Performance",
//       desc: "Our optimized systems deliver fast loading times and smooth navigation.",
//       color: "from-yellow-400 to-orange-500",
//     },
//     {
//       icon: <FaUsers className="text-white text-3xl" />,
//       title: "User Friendly",
//       desc: "A simple and clean interface that anyone can use with ease.",
//       color: "from-green-400 to-teal-500",
//     },
//     {
//       icon: <FaCheckCircle className="text-white text-3xl" />,
//       title: "Quality Support",
//       desc: "Our support team is always here to help you with any issue.",
//       color: "from-pink-500 to-red-500",
//     },
//   ];

//   return (
//     <section className="py-20 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-6 text-center">
//         <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
//           Why <span className="text-indigo-600">Choose Us?</span>
//         </h2>
//         <p className="text-gray-600 max-w-2xl mx-auto mb-16">
//           We deliver innovative solutions with modern technology and dedicated support.
//         </p>

//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {features.map((item, i) => (
//             <div
//               key={i}
//               className="flex flex-col md:flex-row items-center bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300"
//             >
//               <div
//                 className={`flex-shrink-0 w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br ${item.color} mb-4 md:mb-0 md:mr-4 transform transition-transform duration-500 hover:scale-110`}
//               >
//                 {item.icon}
//               </div>
//               <div className="text-center md:text-left">
//                 <h3 className="text-xl font-semibold text-gray-800 mb-1">{item.title}</h3>
//                 <p className="text-gray-500 text-sm">{item.desc}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );








import React from "react";
import {
  Sparkles,
  Droplets,
  Leaf,
  Shield,
  CheckCircle2,
  HeartHandshake,
} from "lucide-react";

function WhyChooseUs() {
  const features = [
    {
      icon: Sparkles,
      title: "Glow-Enhancing Formulas",
      desc: "Clinically proven actives that deliver visible radiance and smoother skin.",
    },
    {
      icon: Droplets,
      title: "Deeply Hydrating",
      desc: "Multi-layer hydration that plumps, nourishes and locks in moisture all day.",
    },
    {
      icon: Leaf,
      title: "Clean & Natural",
      desc: "100% cruelty-free, vegan, and made with responsibly sourced botanical actives.",
    },
    {
      icon: Shield,
      title: "Dermatologist Approved",
      desc: "Gentle on sensitive skin. Fragrance-free options available.",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white via-[#e5e2d7]/20 to-white">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Elegant Golden Heading */}
        <h2 className="text-5xl md:text-6xl font-light text-[#855d14] mb-6">
          Why Women{" "}
          <span className="font-serif italic text-[#855d14]">Love Us</span>
        </h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-16 leading-relaxed font-light">
          Because your skin deserves the very best — science-backed luxury that feels like self-care.
        </p>

        {/* Golden Feature Cards */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border border-[#e5e2d7]"
              >
                {/* Golden Icon with Warm Glow */}
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#855d14] to-[#b48a2c] p-4 shadow-xl ring-8 ring-white/70 group-hover:ring-[#e5e2d7]/50 transition-all duration-500">
                  <Icon className="w-full h-full text-white" strokeWidth={2.5} />
                </div>

                <h3 className="text-xl font-medium text-[#855d14] mb-3 tracking-wide">
                  {item.title}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {item.desc}
                </p>

                {/* Subtle Golden Heart on Hover */}
                {/* <HeartHandshake className="absolute -top-4 -right-4 w-12 h-12 text-[#855d14]/15 opacity-0 group-hover:opacity-100 transition-all duration-700" /> */}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
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

 function WhyChooseUs() {
  const features = [
    {
      img: "/images/security.jpg",
      title: "Trusted & Secure",
      desc: "We prioritize security to ensure your data and experience are fully protected.",
    },
    {
      img: "/images/performance.jpg",
      title: "Fast Performance",
      desc: "Our optimized systems deliver fast loading times and smooth navigation.",
    },
    {
      img: "/images/user-friendly.jpg",
      title: "User Friendly",
      desc: "A simple and clean interface that anyone can use with ease.",
    },
    {
      img: "/images/support.jpg",
      title: "Quality Support",
      desc: "Our support team is always here to help you with any issue.",
    },
  ];

  return (
    <section className="py-24 bg-[#ffffff]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4">
          Why{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#855d14] to-[#3b3626]">
            Choose Us?
          </span>
        </h2>
        <p className="text-center text-gray-700 max-w-2xl mx-auto mb-16">
          We deliver innovative solutions backed by modern technology and dedicated support.
        </p>

        {/* Feature Cards */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-[#f9f7f5] rounded-3xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2 p-6 flex flex-col items-center text-center"
            >
              {/* Image in circular background */}
              <div className="w-24 h-24 flex items-center justify-center rounded-full bg-gradient-to-br from-[#855d14]/20 to-[#e5e2d7]/20 mb-6">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-12 h-12 object-contain"
                />
              </div>
              {/* Text */}
              <h3 className="text-xl font-semibold text-[#855d14] mb-2">{item.title}</h3>
              <p className="text-gray-700 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default WhyChooseUs;
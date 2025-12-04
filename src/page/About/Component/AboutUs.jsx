// import React from "react";
// import { FaLeaf, FaFlask, FaShieldAlt, FaHandsHelping, FaUsers } from "react-icons/fa";
import { Leaf, Flask, Shield, Users } from "lucide-react";


function AboutUs() {
  const features = [
    {
      icon: <Leaf className="text-[#855d14] w-6 h-6" />,
      title: "We believe",
      description:
        "Beauty is more than skin deep; it is about trust, care, and authenticity. Founded with the belief that skin care should be both effective and ethical, we create products that respect your skin and the planet.",
    },
    {
      icon: <Flask className="text-[#855d14] w-6 h-6" />,
      title: "Our philosophy",
      description:
        "We blend science with nature, using proven ingredients like hyaluronic acid, retinol, vitamin C, coenzyme Q10, and ceramides to support healthy, radiant skin. Each formula is thoughtfully designed to deliver visible results without compromise.",
    },
    {
      icon: <ShieldAlt className="text-[#855d14] w-6 h-6" />,
      title: "Transparency first",
      description:
        "Ingredient lists are clear, certifications matter, and we proudly uphold EU standards for safety and quality. Vegan, cruelty-free, and dermatologically tested — because you deserve skin care you can believe in.",
    },
    {
      icon: <HandsHelping className="text-[#855d14] w-6 h-6" />,
      title: "Our promise",
      description:
        "We’re committed to empowering you with knowledge. From ingredient spotlights to honest product stories, we want you to feel confident in every choice you make with us.",
    },
    {
      icon: <Users className="text-[#855d14] w-6 h-6" />,
      title: "Community",
      description:
        "CEEN is more than a cosmetics brand — it’s a community built on elegance, integrity, and care. Together, we’re redefining beauty with transparency and trust.",
    },
  ];

  return (
    <section className="py-16 bg-[#fdfcfb]">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-[#855d14] mb-12">
          About CEEN
        </h2>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white shadow-lg rounded-3xl p-6 flex space-x-4 hover:scale-[1.02] transition-transform duration-300"
            >
              <div className="flex-shrink-0">{feature.icon}</div>
              <div className="text-left">
                <h3 className="text-xl font-semibold text-[#855d14] mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutUs;

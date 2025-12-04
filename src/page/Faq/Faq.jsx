import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "react-feather";
import Hero from "./Component/Hero";

const faqs = [
  {
    question: "Are Ceen Products suitable for all skin types?",
    answer: (
      <>
        Yes. Our formulations are designed to be gentle yet effective:
        <ul className="list-disc list-inside mt-2 text-gray-700">
          <li>Hyaluronic Acid Serum hydrates dry skin</li>
          <li>Ceramide Moisturizer strengthens sensitive skin barriers</li>
          <li>Vitamin C Serum brightens dull complexions</li>
          <li>Retinol Serum is best introduced gradually for sensitive skin</li>
        </ul>
      </>
    ),
  },
  {
    question: "What makes your Hyaluronic Acid Serum special?",
    answer:
      "It delivers multi-layer hydration with lightweight molecules that plump and smooth the skin without heaviness.",
  },
  {
    question: "Can I use Retinol Serum every day?",
    answer:
      "We recommend starting Retinol Serum 2-3 times per week at night to reduce sensitivity, then gradually increasing frequency as your skin builds tolerance. Always apply sunscreen during the day.",
  },
  {
    question: "What is Coenzyme Q10 Cream used for?",
    answer:
      "Coenzyme Q10 energizes skin cells and defends against premature aging. It’s perfect for those seeking firmer, more resilient skin.",
  },
  {
    question: "Why include Ceramides in a moisturizer?",
    answer:
      "Ceramides are natural lipids that strengthen the skin barrier, lock in moisture, and protect against irritation — essential for healthy and balanced skin.",
  },
  {
    question: "How long does it take to see results with Ceen products?",
    answer: (
      <ul className="list-disc list-inside mt-2 text-gray-700">
        <li>
          Hyaluronic Acid Serum – Immediate hydration and plumping within days
        </li>
        <li>Vitamin C Serum – Brighter, more even skin tone in 2-4 weeks</li>
        <li>
          Retinol Serum – Smoother texture and reduced fine lines after 6-8
          weeks of consistent use
        </li>
        <li>
          Coenzyme Q10 Cream – Improved firmness and resilience in 4-6 weeks
        </li>
        <li>
          Ceramide Moisturizer – Strengthened skin barrier and reduced dryness
          within 1-2 weeks
        </li>
        <li>
          Foaming Cleanser – Fresh, balanced skin after the very first use
        </li>
      </ul>
    ),
  },
];

function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-[#fdfcfb]">
      <Hero />
      <div className="max-w-4xl mx-auto px-10">
        <h2 className="text-4xl md:text-5xl font-bold text-[#855d14] text-center mb-12 mt-15">
          Your Skincare Questions, Answered
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="border rounded-xl shadow-sm bg-white overflow-hidden"
            >
              <button
                onClick={() => toggleIndex(idx)}
                className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
              >
                <span className="font-semibold text-gray-900">
                  {faq.question}
                </span>
                {openIndex === idx ? (
                  <ChevronUp className="text-[#855d14]" />
                ) : (
                  <ChevronDown className="text-[#855d14]" />
                )}
              </button>

              {openIndex === idx && (
                <div className="px-6 pb-4 text-gray-700">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faq;

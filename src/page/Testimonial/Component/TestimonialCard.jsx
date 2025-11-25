// src/components/Testimonial/TestimonialCard.jsx
import { Star, Quote } from 'lucide-react';

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="relative bg-gradient-to-b from-white to-[#fbf8f2] rounded-3xl p-10 shadow-lg border border-[#e5e2d7] hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02]">

      {/* Decorative Quote Icon */}
      <Quote className="absolute top-6 right-6 w-10 h-10 text-[#e4d7bb] opacity-40" />

      {/* Stars */}
      <div className="flex gap-1 mb-6">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star
            key={i}
            className="w-6 h-6 text-[#855d14] fill-[#855d14] drop-shadow-[0_0_6px_rgba(133,93,20,0.4)] hover:scale-110 transition-transform duration-300"
          />
        ))}
      </div>

      {/* Quote Text */}
      <p className="text-gray-700 text-lg leading-relaxed italic mb-10 relative">
        <span className="text-[#d1c6a8] text-4xl absolute -left-4 -top-4">“</span>
        {testimonial.text}
        <span className="text-[#d1c6a8] text-4xl absolute -right-4 -bottom-4">”</span>
      </p>

      {/* Avatar + Info */}
      <div className="flex items-center gap-5">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className="w-16 h-16 rounded-full object-cover border-4 border-[#855d14]/20 shadow-md transition-all duration-500 hover:shadow-xl hover:scale-105"
        />
        <div>
          <h4 className="font-semibold text-[#855d14] text-xl">{testimonial.name}</h4>
          <p className="text-gray-600 text-sm">{testimonial.role}</p>
        </div>
      </div>

    </div>
  );
};

export default TestimonialCard;

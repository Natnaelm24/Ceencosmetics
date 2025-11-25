// src/components/Testimonial/TestimonialPage.jsx
import TestimonialCard from './TestimonialCard';
import { testimonials } from './testimonialsData';
import { Sparkles } from 'lucide-react';

const TestimonialPage = () => {
  return (
    <div className="min-h-screen bg-[#e5e2d7] py-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Hero Title */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold text-[#855d14] mb-6 tracking-wide">
            Loved by Beauty Lovers
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Join thousands of radiant women who have transformed their beauty routine
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        {/* Trust Badge */}
        <div className="text-center mt-20">
          <p className="text-3xl font-bold text-[#855d14]">
            10,000+ Happy Customers
          </p>
          <p className="text-gray-700 mt-3 text-lg">
            Rated 4.9/5 from verified reviews
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialPage;
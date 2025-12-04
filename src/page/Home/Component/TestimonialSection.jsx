// src/components/Home/TestimonialSection.jsx
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TestimonialCard from "../../Testimonial/Component/TestimonialCard";

const TestimonialSection = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        setLoading(true);
        const res = await fetch(`${import.meta.env.VITE_API_URL}/testimonials`);
        if (!res.ok) throw new Error("Failed to fetch testimonials");
        const json = await res.json();
        setTestimonials(json.data || []);
      } catch (err) {
        console.error(err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchTestimonials();
  }, []);

  if (loading) return <p className="text-center py-12 text-lg">Loading testimonials...</p>;
  if (error) return <p className="text-center py-12 text-red-600 text-lg">Failed to load testimonials</p>;

  // Show only 3 on the homepage
  const visibleTestimonials = testimonials.slice(0, 3);

  return (
    <section className="bg-[#fdfcfb] py-16 px-6">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-[#855d14] mb-4">
          Loved by Our Customers
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          See what people are saying about our skincare and beauty products
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {visibleTestimonials.map((t) => (
          <TestimonialCard
            key={t.id}
            testimonial={{
              text: t.comment,
              avatar: t.image_url?.[0] || "/default-user.jpg",
              name: t.author,
              role: t.title || "Customer",
              rating: 5,
            }}
          />
        ))}
      </div>

      {testimonials.length > 3 && (
        <div className="text-center mt-10">
          <button
            onClick={() => navigate("/testimonial")} 
            className="px-8 py-3 bg-[#855d14] text-white font-semibold rounded-full hover:bg-[#a17d39] transition"
          >
            Read More Reviews
          </button>
        </div>
      )}
    </section>
  );
};

export default TestimonialSection;

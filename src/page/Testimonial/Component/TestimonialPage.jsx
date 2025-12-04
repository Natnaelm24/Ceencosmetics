import { useEffect, useState } from "react";
import TestimonialCard from "./TestimonialCard";

const TestimonialPage = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [visibleCount, setVisibleCount] = useState(4); // Show first 4
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

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

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 4); // Load 4 more each click
  };

  if (loading) return <p className="text-center py-32 text-xl">Loading testimonials...</p>;
  if (error) return <p className="text-center py-32 text-red-600 text-xl">Failed to load testimonials</p>;

  const visibleTestimonials = testimonials.slice(0, visibleCount);

  return (
    <div className="min-h-screen bg-[#e5e2d7] py-20 px-6">
      <div className="max-w-7xl mx-auto text-center mb-20">
        <h1 className="text-5xl md:text-6xl font-bold text-[#855d14] mb-6 tracking-wide">
          Loved by Beauty Lovers
        </h1>
        <p className="text-xl text-gray-700 max-w-2xl mx-auto">
          Join thousands of radiant women who have transformed their beauty routine
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {visibleTestimonials.map((t) => (
          <TestimonialCard
            key={t.id}
            testimonial={{
              text: t.comment,
              avatar: t.image_url?.[0] || "/default-user.jpg",
              name: t.author,
              role: t.title || "Customer",
              rating: 5
            }}
          />
        ))}
      </div>

      {/* Load More Button */}
      {visibleCount < testimonials.length && (
        <div className="text-center mt-12">
          <button
            onClick={handleLoadMore}
            className="px-8 py-4 bg-[#855d14] text-white font-semibold rounded-full hover:bg-[#a17d39] transition"
          >
            Load More
          </button>
        </div>
      )}

      <div className="text-center mt-20">
        <p className="text-3xl font-bold text-[#855d14]">10,000+ Happy Customers</p>
        <p className="text-gray-700 mt-3 text-lg">Rated 4.9/5 from verified reviews</p>
      </div>
    </div>
  );
};

export default TestimonialPage;




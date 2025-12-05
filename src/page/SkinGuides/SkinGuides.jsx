// src/page/SkinGuides/SkinGuides.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import HeroCare from "./Component/Hero";

export default function SkinGuides() {
  const [guides, setGuides] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGuides = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/skin-care-guides`);
        if (!res.ok) throw new Error("Failed to load guides.");

        const data = await res.json();
        setGuides(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error("API Error:", err);
        setError("Could not load skin care guides. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchGuides();
  }, []);

  return (
    <>
      <HeroCare
        title="Skin Care Guides"
        backgroundImage="/images/guides-hero.jpg"
        overlayColor="from-black/60 via-black/40 to-black/60"
      />

      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6">
              Your Complete Skin Care Guide
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert tips, routines, and science-backed advice to help you achieve healthy, glowing skin — no matter your concern.
            </p>
          </div>

          {/* Loading */}
          {loading && (
            <div className="text-center py-20">
              <p className="text-2xl text-gray-500">Loading guides...</p>
            </div>
          )}

          {/* Error */}
          {error && (
            <div className="text-center py-20">
              <p className="text-xl text-red-600">{error}</p>
            </div>
          )}

          {/* No Guides */}
          {!loading && !error && guides.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-gray-500">No guides available yet.</p>
            </div>
          )}

          {/* Guides Grid */}
          {!loading && guides.length > 0 && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {guides.map((guide) => (
                <Link
                  key={guide.id}
                  to={`/guides/${guide.slug}`}
                  className="group block bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                >
                  
                  {/* Placeholder Image */}
                  <div className="h-56 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                    <span className="text-5xl text-gray-300">Skin</span>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-primary transition">
                      {guide.title}
                    </h3>

                    <p className="text-gray-600 line-clamp-3">
                      {guide.description?.substring(0, 120)}...
                    </p>

                    <span className="inline-block mt-6 text-primary font-semibold group-hover:translate-x-2 transition">
                      Read Guide →
                    </span>
                  </div>

                </Link>
              ))}
            </div>
          )}

        </div>
      </section>
    </>
  );
}

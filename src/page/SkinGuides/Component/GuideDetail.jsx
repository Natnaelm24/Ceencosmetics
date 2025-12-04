import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import HeroCare from "../Component/Hero";

export default function GuideDetail() {
  const { slug } = useParams();
  const [guide, setGuide] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGuide = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/skin-care-guides`);
        if (!res.ok) {
          setError("Failed to load guides.");
          return;
        }

        const data = await res.json();

        // Match guide based on slug
        const foundGuide = data.find((item) => {
          if (slug === "morning") return item.title.toLowerCase().includes("skin care guide");
          if (slug === "evening") return item.title.toLowerCase().includes("evening");
          return false;
        });

        if (!foundGuide) {
          setError("Guide not found.");
        } else {
          setGuide(foundGuide);
        }
      } catch (err) {
        console.error(err);
        setError("Network error. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchGuide();
  }, [slug]);

  if (loading)
    return (
      <p className="text-center py-32 text-3xl animate-pulse text-primary">
        Loading your guide...
      </p>
    );

  if (error)
    return (
      <p className="text-center py-32 text-4xl font-bold text-red-600">
        {error}
      </p>
    );

  return (
    <>
      <HeroCare
        title={guide.title}
        backgroundImage={guide.image_url?.[0] || "/images/guide-hero.jpg"}
        overlayColor="from-black/80 via-black/40 to-black/80"
      />

      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto px-6">

          {/* Title */}
          <h1 className="text-5xl font-extrabold text-gray-900 mb-8 text-center leading-tight">
            {guide.title}
          </h1>

          {/* Description */}
          <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-line mb-14 text-center max-w-3xl mx-auto">
            {guide.description}
          </p>

          {/* Steps */}
          <div className="space-y-10">
            {guide.steps?.map((stepObj, index) => {
              const lines = stepObj.details.split("\n");

              const getValue = (key) => {
                const line = lines.find((l) => l.toLowerCase().startsWith(key.toLowerCase()));
                if (!line) return null;
                return line.split("-")[1]?.trim() || null;
              };

              const goal = getValue("Goal");
              const ingredients = getValue("Ceen ingredients");
              const howToApply = getValue("How to Apply");

              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 hover:shadow-xl transition duration-300"
                >
                  <h2 className="text-3xl font-bold text-primary mb-6">
                    {stepObj.step}
                  </h2>

                  <div className="space-y-3 text-gray-700">
                    {goal && (
                      <p>
                        <strong className="font-semibold text-gray-900">Goal:</strong>{" "}
                        {goal}
                      </p>
                    )}

                    {ingredients && (
                      <p>
                        <strong className="font-semibold text-gray-900">
                          Key Ingredients:
                        </strong>{" "}
                        {ingredients}
                      </p>
                    )}

                    {howToApply && (
                      <p>
                        <strong className="font-semibold text-gray-900">
                          How to Apply:
                        </strong>{" "}
                        {howToApply}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Back Button */}
          <div className="mt-20 text-center">
            <Link
              to="/guides"
              className="inline-block px-10 py-4 bg-primary text-black font-semibold text-lg rounded-full shadow-md hover:shadow-xl hover:bg-primary/90 transition-transform duration-300 hover:-translate-y-1"
            >
              ← Back to All Guides
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

// src/page/SkinGuides/GuideDetail.jsx
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
        const res = await fetch(`${import.meta.env.VITE_API_URL}/skin-care-guides/${slug}`);

        if (!res.ok) {
          if (res.status === 404) {
            setError("Guide not found.");
          } else {
            setError("Failed to load guide. Please try again later.");
          }
          return;
        }

        const data = await res.json();
        setGuide(data);
      } catch (err) {
        console.error(err);
        setError("Network error. Please check your connection and try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchGuide();
  }, [slug]);

  if (loading) {
    return <p className="text-center py-32 text-2xl">Loading guide...</p>;
  }

  if (error) {
    return <p className="text-center py-32 text-4xl font-bold text-red-600">{error}</p>;
  }

  return (
    <>
      <HeroCare
        title={guide.title || guide.title_en}
        backgroundImage={guide.image_url?.[0] || "/images/guide-hero.jpg"}
        overlayColor="from-black/70 via-black/50 to-black/70"
      />

      <article className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-5xl font-bold text-gray-900 mb-8 text-center">
            {guide.title || guide.title_en}
          </h1>

          <div
            className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: guide.content || guide.description }}
          />

          <div className="mt-16 text-center">
            <Link
              to="/guides"
              className="inline-block px-8 py-4 bg-primary text-white font-semibold rounded-full hover:bg-primary/90 transition"
            >
              ← Back to All Guides
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}

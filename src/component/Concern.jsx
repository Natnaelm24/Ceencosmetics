import React, { Suspense, lazy } from "react";
import { useParams } from "react-router-dom";

// Fallback component if slug does not match
const NotFound = () => (
  <p className="text-xl text-gray-600 text-center py-20">
    Skin concern not found
  </p>
);

function SkinConcernPage() {
  const { slug } = useParams();

  // Lazy load component based on folder mapping
  const componentMap = {
    "dryness-and-dehydration": () => import("../page/SkinCareGuides/Dullnes/Dullnes"),
    "skin-aging": () => import("../page/SkinCareGuides/SkinAging/SkinAging"),
    "skin-dullness": () => import("../page/SkinCareGuides/Drynes/Drynes"),
    "uneven-skin-tone": () => import("../page/SkinCareGuides/UnevenSkinTone/UnevenSkinTone"),
    "uv-protection": () => import("../page/SkinCareGuides/UvProtection/UvProtection"),
  };

  const LazyComponent = slug && componentMap[slug] ? lazy(componentMap[slug]) : null;

  return (
    <section className="py-16 bg-[#fdfcfb] min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <Suspense fallback={<p className="text-center py-20">Loading...</p>}>
          {LazyComponent ? <LazyComponent /> : <NotFound />}
        </Suspense>
      </div>
    </section>
  );
}

export default SkinConcernPage;





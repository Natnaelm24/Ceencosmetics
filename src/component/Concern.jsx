// Concern.jsx
import React, { Suspense, lazy } from "react";

const componentMap = {
  "dryness-and-dehydration": lazy(() => import("../page/SkinCareGuides/Dryness/Dryness")),
  "skin-aging": lazy(() => import("../page/SkinCareGuides/SkinAging/SkinAging")),
  "skin-dullness": lazy(() => import("../page/SkinCareGuides/Dullness/Dullness")),
  "uneven-skin-tone": lazy(() => import("../page/SkinCareGuides/Unevenskintone/Unevenskintone")),
  "uv-protection": lazy(() => import("../page/SkinCareGuides/Uvprotection/Uvprotection")),
};

export default function Concern({ slug }) {
  const Component = componentMap[slug];

  if (!Component) {
    return <p className="text-center py-20 text-gray-600">Skin concern not found</p>;
  }

  return (
    <Suspense fallback={<p className="text-center py-20">Loading...</p>}>
      <Component />
    </Suspense>
  );
}



import React, { Suspense, lazy } from "react";

const componentMap = {
  "dryness-and-dehydration": lazy(() =>
    import("../page/SkinCareGuides/Dryness.jsx")
  ),
  "skin-aging": lazy(() =>
    import("../page/SkinCareGuides/SkinAging.jsx")
  ),
  "skin-dullness": lazy(() =>
    import("../page/SkinCareGuides/Dullness.jsx")
  ),
  "uneven-skin-tone": lazy(() =>
    import("../page/SkinCareGuides/UnevenSkinTone.jsx")
  ),
  "uv-protection": lazy(() =>
    import("../page/SkinCareGuides/UvProtection.jsx")
  ),
};

export default function Concern({ slug }) {
  const Component = componentMap[slug];

  if (!Component) {
    return (
      <p className="text-center py-20 text-gray-600">
        Skin concern not found
      </p>
    );
  }

  return (
    <Suspense fallback={<p className="text-center py-20">Loading...</p>}>
      <Component />
    </Suspense>
  );
}

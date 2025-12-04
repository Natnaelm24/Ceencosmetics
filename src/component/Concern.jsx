import React, { Suspense } from "react";
import { useParams } from "react-router-dom";

function Concern() {
  const { slug } = useParams();

  // Convert slug to component path
  const componentPathMap = {
    "dryness-and-dehydration": "Dryness/Dryness",
    "skin-aging": "SkinAging/SkinAging",
    "skin-dullness": "Dullness/Dullness",
    "uneven-skin-tone": "Unevenskintone/Unevenskintone",
    "uv-protection": "Uvprotection/Uvprotection",
  };

  const path = componentPathMap[slug];

  if (!path) {
    return (
      <div className="flex items-center justify-center h-screen text-white">
        <p className="text-xl text-gray-600">Skin concern not found</p>
      </div>
    );
  }

  // Dynamic import of the component
  const Component = React.lazy(() => import(`../page/SkinCareGuides/${path}.jsx`));

  return (
    <Suspense fallback={<div className="flex items-center justify-center h-screen text-white">Loading...</div>}>
      <Component />
    </Suspense>
  );
}

export default Concern;


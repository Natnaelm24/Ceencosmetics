// import React, { Suspense } from "react";
// import { useParams } from "react-router-dom";

// function Concern() {
//   const { slug } = useParams();

//   // Convert slug to component path
//   const componentPathMap = {
//     "dryness-and-dehydration": "Dryness/Dryness",
//     "skin-aging": "SkinAging/SkinAging",
//     "skin-dullness": "Dullness/Dullness",
//     "uneven-skin-tone": "Unevenskintone/Unevenskintone",
//     "uv-protection": "Uvprotection/Uvprotection",
//   };

//   const path = componentPathMap[slug];

//   if (!path) {
//     return (
//       <div className="flex items-center justify-center h-screen text-white">
//         <p className="text-xl text-gray-600">Skin concern not found</p>
//       </div>
//     );
//   }

//   // Dynamic import of the component
//   const Component = React.lazy(() => import(`../page/SkinCareGuides/${path}.jsx`));

//   return (
//     <Suspense fallback={<div className="flex items-center justify-center h-screen text-white">Loading...</div>}>
//       <Component />
//     </Suspense>
//   );
// }

// export default Concern;



import React, { Suspense, lazy } from "react";
import { useParams } from "react-router-dom";

// Import components manually
import Dryness from "../page/SkinCareGuides/Drynes/Drynes";
import SkinAging from "../page/SkinCareGuides/SkinAging/SkinAging";
import Dullnes from "../page/SkinCareGuides/Dullnes/Dullnes";
import Unevenskintone from "../page/SkinCareGuides/UnevenSkinTone/UnevenSkinTone";
import Uvprotection from "../page/SkinCareGuides/UvProtection/UvProtection";

// Map slugs from API to actual components
const componentMap = {
  "dryness-and-dehydration": Dryness,
  "skin-aging": SkinAging,
  "skin-dullness": Dullnes,
  "uneven-skin-tone": Unevenskintone,
  "uv-protection": Uvprotection,
};

function SkinConcernPage() {
  const { slug } = useParams();

  const Component = componentMap[slug];

  return (
    <section className="py-16 bg-[#fdfcfb] min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <Suspense fallback={<p className="text-center py-20">Loading...</p>}>
          {Component ? (
            <Component />
          ) : (
            <p className="text-xl text-gray-600 text-center py-20">
              Skin concern not found
            </p>
          )}
        </Suspense>
      </div>
    </section>
  );
}

export default SkinConcernPage;




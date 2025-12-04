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


import { useParams } from "react-router-dom";

import Dryness from "../page/SkinCareGuides/Dryness/Dryness.jsx";
import SkinAging from "../page/SkinCareGuides/SkinAging/SkinAging.jsx";
import Dullness from "../page/SkinCareGuides/Dullness/Dullness.jsx";
import UnevenSkinTone from "../page/SkinCareGuides/UnevenSkinTone/UnevenSkinTone.jsx";
import UVProtection from "../page/SkinCareGuides/UvProtection/UvProtection.jsx";

function Concern() {
  const { slug } = useParams();

  const componentMap = {
    "dryness-and-dehydration": Dryness,
    "skin-aging": SkinAging,
    "skin-dullness": Dullness,
    "uneven-skin-tone": UnevenSkinTone,
    "uv-protection": UVProtection,
  };

  const Component = componentMap[slug];

  if (!Component) {
    return (
      <div className="flex items-center justify-center h-screen text-white">
        <p className="text-xl text-gray-600">Skin concern not found</p>
      </div>
    );
  }

  return (
    <article>
      <div className="hidden lg:block h-screen" />
      <Component />
    </article>
  );
}

export default Concern;

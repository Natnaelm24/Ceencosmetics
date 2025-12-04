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

function SkinConcernPage() {
  const { slug } = useParams();

  // Dynamically import the component based on the slug
  const Component = lazy(() =>
    import(`./${slug.charAt(0).toUpperCase() + slug.slice(1).replace(/-([a-z])/g, (g) => g[1].toUpperCase())}/${slug.charAt(0).toUpperCase() + slug.slice(1).replace(/-([a-z])/g, (g) => g[1].toUpperCase())}`)
      .catch(() => ({ default: () => <p className="text-xl text-gray-600 text-center py-20">Skin concern not found</p> }))
  );

  return (
    <section className="py-16 bg-[#fdfcfb] min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <Suspense fallback={<p className="text-center py-20">Loading...</p>}>
          <Component />
        </Suspense>
      </div>
    </section>
  );
}

export default SkinConcernPage;



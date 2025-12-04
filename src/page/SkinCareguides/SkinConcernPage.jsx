// import React from "react";
// import { useParams } from "react-router-dom";
// import Dryness from "./Dryness/Dryness";
// import SkinAging from "./SkinAging/SkinAging";
// import Dullness from "./Dullness/Dullness";
// import UnevenSkinTone from "./Unevenskintone/Unevenskintone";
// import UVProtection from "./Uvprotection/Uvprotection";

// function SkinConcernPage() {
//   const { slug } = useParams();
//   console.log("Slug:", slug);

//   const componentMap = {
//     "dryness-and-dehydration": Dryness,
//     "skin-aging": SkinAging,
//     "skin-dullness": Dullness,
//     "uneven-skin-tone": UnevenSkinTone,
//     "uv-protection": UVProtection,
//   };

//   const Component = componentMap[slug];

//   if (!Component) {
//     return (
//       <div className="text-center py-20">
//         <p className="text-xl text-gray-600">Skin concern not found</p>
//       </div>
//     );
//   }

//   return <Component />;
// }

// export default SkinConcernPage;





// import React from "react";
import { useParams } from "react-router-dom";

import Dryness from "./Dryness/Dryness";
import SkinAging from "./SkinAging/SkinAging";
import Dullness from "./Dullness/Dullness";
import Unevenskintone from "./Unevenskintone/Unevenskintone";
import Uvprotection from "./Uvprotection/Uvprotection";

function SkinConcernPage() {
  const { slug } = useParams();
  console.log("Slug:", slug);


  const componentMap = {
    "dryness-and-dehydration": Dryness,
    "skin-aging": SkinAging,
    "skin-dullness": Dullness,
    "uneven-skin-tone": Unevenskintone,
    "uv-protection": Uvprotection,
  };

  const Component = componentMap[slug];

  if (!Component) {
    return (
      <div className="text-center py-20">
        <p className="text-xl text-gray-600">Skin concern not found</p>
      </div>
    );
  }

  return <Component />;
}

export default SkinConcernPage;


import { useParams } from "react-router-dom";

import Dryness from "../page/SkinCareGuides/Dryness/Dryness";
import SkinAging from "../page/SkinCareGuides/SkinAging/SkinAging";
import Dullness from "../page/SkinCareGuides/Dullness/Dullness";
import UnevenSkinTone from "../page/SkinCareGuides/Unevenskintone/Unevenskintone";
import UVProtection from "../page/SkinCareGuides/Uvprotection/Uvprotection";

function Concern() {
  const { slug } = useParams();

  // Map slugs to components
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

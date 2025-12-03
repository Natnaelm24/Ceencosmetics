import React from "react";
import { useParams } from "react-router-dom";
import Dryness from "./Dryness/Dryness";
import SkinAging from "./SkinAging/SkinAging";
import Dullness from "./Dullness/Dullness";
import UnevenSkinTone from "./Unevenskintone/Unevenskintone";
import UVProtection from "./Uvprotection/Uvprotection";

function SkinConcernPage() {
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
      <div className="text-center py-20">
        <p className="text-xl text-gray-600">Skin concern not found</p>
      </div>
    );
  }

  return <Component />;
}

export default SkinConcernPage;

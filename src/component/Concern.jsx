// import React from "react";
import { useParams } from "react-router-dom";
import Dryness from "../page/SkinCareGuides/Dryness/dryness";
import SkinAging from "../page/SkinCareGuides/SkinAging/SkinAging";
import Dullness from "../page/SkinCareGuides/Dullness/Dullness";
import UnevenSkinTone from "../page/SkinCareGuides/Unevenskintone/Unevenskintone";
import UVProtection from "../page/SkinCareGuides/Uvprotection/Uvprotection";


function Concern() {
  const { slug } = useParams();
  console.log("Slug:", slug);


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

export default Concern;
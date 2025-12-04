import { useParams } from "react-router-dom";

import Dryness from "./Dryness_temp";
import SkinAging from "./SkinAging";
import Dullness from "./Dullness";
import Unevenskintone from "./UnevenSkinTone";
import Uvprotection from "./UvProtection/UvProtection";

export default function Skins() {
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


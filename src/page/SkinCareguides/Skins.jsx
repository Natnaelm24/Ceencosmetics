import { useParams } from "react-router-dom";

import Dryness from "./Dryness";
import SkinAging from "./SkinAging";
import Dullness from "./Dullness";
import Unevenskintone from "./UnevenSkinTone";
import Uvprotection from "./UvProtection/UvProtection";
import { useEffect } from "react";

export default function Skins() {
  const { slug } = useParams();
  console.log("Slug:", slug);

  useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/${slug}`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log("API Response:", data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  }, []);


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


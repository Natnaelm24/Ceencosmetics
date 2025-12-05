import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ConcernDetail from "../page/SkinCareGuides/Detail";
// import ConcernDetail from "../components/ConcernDetail";

export default function Concern() {
  const { slug } = useParams();
  const API_URL = import.meta.env.VITE_API_URL;
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchDetail = async () => {
      const res = await fetch(`${API_URL}/skin-concerns/${slug}`);
      const json = await res.json();
      setData(json.singlepost);
    };

    fetchDetail();
  }, [slug]);

  return <ConcernDetail data={data} />;
}

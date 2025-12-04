



import React, { useEffect, useState } from "react";

const API_URL = "https://ceen.risegmbh.com/api"; // Your base API URL
const SLUG = "skin-aging"; 

const SkinAging = () => {
  const [skinConcern, setSkinConcern] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch skin concerns and filter by slug
  const fetchSkinConcern = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`${API_URL}/skin-concerns`);
      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }

      const data = await response.json();

      // Find the specific skin concern by slug
      const item = data.find((sc) => sc.slug === SLUG);

      if (!item) {
        throw new Error("Skin concern not found.");
      }

      setSkinConcern(item);
    } catch (err) {
      console.error(err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`${API_URL}/skin-concerns`);
        if (!res.ok) throw new Error("Failed to fetch products");

        const data = await res.json();

        // Find the "Skin Aging" product
        const skinAgingProduct = data.find(
          (item) => item.slug === "skin-aging"
        );

        setProduct(skinAgingProduct);
      } catch (err) {
        console.error("Error fetching skin aging product:", err);
      }
    };

    fetchProduct();
  }, [API_URL]);

  if (!product) return <p className="text-center py-20">Loading...</p>;

  return (
    <div>
      <h1>{skinConcern.title}</h1>
      <p>{skinConcern.description}</p>

      <h2>Signs</h2>
      <div dangerouslySetInnerHTML={{ __html: skinConcern.signs }} />

      <h2>Causes</h2>
      <div dangerouslySetInnerHTML={{ __html: skinConcern.causes }} />

      <h2>Treatments</h2>
      <div dangerouslySetInnerHTML={{ __html: skinConcern.treatments }} />

      {skinConcern.image_url && skinConcern.image_url.length > 0 && (
        <div>
          <h2>Images</h2>
          {skinConcern.image_url.map((url, index) => (
            <img key={index} src={url} alt={skinConcern.title} style={{ maxWidth: "300px", margin: "10px" }} />
          ))}
        </div>
      )}
    </div>
  );
};

export default SkinAging;




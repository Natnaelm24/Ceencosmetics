import React, { useState, useEffect } from "react";
import HorizontalTabs from "../Component/HorizontalTabs";
import Grid from "../Component/Grid";

function IngSection() {
  const [selectedTab, setSelectedTab] = useState("all");
  const [ingredients, setIngredients] = useState([]);
  const [tabs, setTabs] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchIngredients = async () => {
      if (!API_URL) {
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(`${API_URL}/ingeridents`);
        if (!response.ok) throw new Error("Failed to fetch ingredients");

        const data = await response.json();
        setIngredients(data);

        // Generate tabs for each individual ingredient
        const tabsWithCounts = [
          { id: "all", name: "All", count: data.length },
          ...data.map((item) => ({
            id: item.title,
            name: item.title,
            count: 1,
          })),
        ];

        setTabs(tabsWithCounts);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchIngredients();
  }, [API_URL]);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Horizontal Tabs */}
        <HorizontalTabs
          tabs={tabs}
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        />
        {/* Grid */}
        <Grid
          selectedTab={selectedTab}
          ingredients={ingredients}
          loading={loading}
          onSelectTab={setSelectedTab}
        />
      </div>
    </section>
  );
}

export default IngSection;

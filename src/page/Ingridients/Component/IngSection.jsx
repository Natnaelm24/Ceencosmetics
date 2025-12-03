import React, { useState } from "react";
import { tabs } from "../Component/mockData";
import HorizontalTabs from "../Component/HorizontalTabs";
import Grid from "../Component/Grid";

function IngSection() {
  const [selectedTab, setSelectedTab] = useState("all");

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
        <Grid selectedTab={selectedTab} tabs={tabs} />
      </div>
    </section>
  );
}

export default IngSection;

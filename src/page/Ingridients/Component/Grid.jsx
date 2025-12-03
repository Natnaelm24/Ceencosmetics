import React, { useState } from "react";

function Grid({ selectedTab, ingredients, loading, onSelectTab }) {
  const [expandedItems, setExpandedItems] = useState({});

  const toggleExpanded = (itemId) => {
    setExpandedItems((prev) => ({
      ...prev,
      [itemId]: !prev[itemId],
    }));
  };

  const items =
    selectedTab === "all"
      ? ingredients
      : ingredients.filter((item) => item.title === selectedTab);

  if (loading)
    return <p className="text-center py-20">Loading ingredients...</p>;

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-10">
            <div className="text-center lg:text-left">
              <h2 className="text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
                {selectedTab === "all" ? "All Ingredients" : items[0]?.title}
              </h2>

              <p className="mt-3 text-lg text-muted-foreground">
                Explore details and benefits of our key skincare ingredients.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {items.map((item) => {
                const isExpanded = expandedItems[item.id];
                const hasDetails = item.details && item.details.length > 0;
                
                return (
                <div key={item.id} className="p-6">
                  {/* Title */}
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {item.title}
                  </h3>

                  {/* Image */}
                  {item.image_url?.[0] && (
                    <img
                      src={item.image_url[0]}
                      alt={item.title}
                      className="w-full h-48 object-cover mb-4 rounded-xl"
                      onError={(e) => (e.target.src = "/placeholder.svg")}
                    />
                  )}

                  {/* Description */}
                  <p className="text-muted-foreground">
                    {item.description}
                  </p>

                  {/* Read More Button - Only show when NOT expanded */}
                  {hasDetails && !isExpanded && (
                    <button
                      onClick={() => toggleExpanded(item.id)}
                      className="mt-4 text-primary font-medium hover:underline focus:outline-none transition-all"
                    >
                      Read More
                    </button>
                  )}

                  {/* Details - Only show when expanded */}
                  {hasDetails && isExpanded && (
                    <div className="mt-4">
                      {item.details.map((d, index) => (
                        <div key={index} className="mt-4">
                          <h4 className="font-semibold">{d.Question}</h4>
                          <p className="text-sm text-muted-foreground">
                            {d.Answer}
                          </p>
                        </div>
                      ))}
                      
                      {/* Read Less Button - Below all details */}
                      <button
                        onClick={() => toggleExpanded(item.id)}
                        className="mt-4 text-primary font-medium hover:underline focus:outline-none transition-all"
                      >
                        Read Less
                      </button>
                    </div>
                  )}
                </div>
                );
              })}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-8">
              <div className="p-6">
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Quick Links
                </h3>

                <ul className="space-y-3">
                  {ingredients.map((item) => (
                    <li
                      key={item.id}
                      className="text-primary font-medium hover:underline cursor-pointer"
                      onClick={() => onSelectTab?.(item.title)}
                    >
                      {item.title}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default Grid;



export const CurrentlyBuildingSection = () => {
  const items = [
    {
      title: "CardMetric V2",
      description:
        "Expanding portfolio management, collection tools and user experience across the platform.",
    },
    {
      title: "Collection Intelligence",
      description:
        "Building deeper collection insights, ownership tracking and analytics features.",
    },
    {
      title: "Historical Pricing Engine",
      description:
        "Improving long-term price snapshots, market trends and valuation tracking.",
    },
    {
      title: "Portfolio Analytics",
      description:
        "Creating better visualisations and reporting for collectors and investors.",
    },
  ];

  return (
    <section className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Currently <span className="text-primary">Building</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Projects and features I'm actively working on outside of coursework.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((item) => (
            <div
              key={item.title}
              className="bg-card rounded-lg p-6 border card-hover"
            >
              <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
              <p className="text-muted-foreground text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
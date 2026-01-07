export default function MarketReadyProducts() {
  const features = [
    {
      title: "Sell Instantly",
      description:
        "Get ready-made products you can brand and sell immediately.",
      color: "bg-indigo-500",
    },
    {
      title: "Use for Marketing",
      description:
        "Use products as lead magnets, funnels, or content for your audience.",
      color: "bg-emerald-400",
    },
    {
      title: "Fully Customizable",
      description:
        "Edit text, cover, templates, and design to fit your brand.",
      color: "bg-pink-500",
    },
    {
      title: "Expand Your Portfolio",
      description:
        "Add multiple products to your digital library to boost credibility.",
      color: "bg-yellow-400",
    },
  ];

  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Sell or use market-ready products under your name
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Take instant ownership of professionally created digital products and
            either sell them, use them for lead generation, or provide value to
            your audience.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`rounded-2xl p-6 text-white ${feature.color} hover:scale-105 transition-transform shadow-lg`}
            >
              {/* Icon Placeholder */}
              <div className="mb-4 w-12 h-12 rounded-full bg-white/30 flex items-center justify-center text-lg font-bold">
                {feature.title.charAt(0)}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

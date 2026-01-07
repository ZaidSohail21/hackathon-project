export default function Hero() {
  const resources = [
    {
      badge: "Entrepedia Online Business Master Plan Preview",
      title: "Digital Product Funnels Blueprint",
      description:
        "10 proven funnels that turn your leads into customers using digital products.",
      button: "Copy proven funnels",
    },
    {
      badge: "Online Business Master Plan Box",
      title: "Online Business Master Plan",
      description:
        "Access a guide full of actionable steps and tips for growing your online business.",
      button: "Kickstart your business",
    },
    {
      badge: "Entrepedia Online Business Master Plan Preview",
      title: "Digital Product Pricing Strategies",
      description:
        "This free guide reveals the exact pricing frameworks used by top online sellers.",
      button: "View pricing strategies",
    },
  ];

  return (
    <section className="relative bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 py-32">

        {/* Heading */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white">
            Get started with{" "}
            <span className="bg-red-600 bg-clip-text text-transparent">
              free resources
            </span>
          </h1>

          <p className="mt-6 text-lg text-gray-400">
            Proven guides and frameworks to launch and scale your digital business.
          </p>
        </div>

        {/* ROW-wise Cards */}
        <div className="flex flex-col md:flex-row gap-8">

          {resources.map((item, idx) => (
            <div
              key={idx}
              className="flex-1 bg-gray-900 rounded-3xl p-8 shadow-xl flex flex-col justify-between"
            >
              <div className="flex flex-col gap-4">
                <span className="text-sm text-red-500 font-medium">
                  {item.badge}
                </span>

                <h2 className="text-2xl font-bold text-white">
                  {item.title}
                </h2>

                <p className="text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Button */}
              <button className="mt-8 w-fit px-6 py-3 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition">
                {item.button}
              </button>
            </div>
          ))}

        </div>

        {/* Background Glow */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-96 w-96 bg-red-600 opacity-20 blur-3xl rounded-full"></div>
      </div>
    </section>
  );
}

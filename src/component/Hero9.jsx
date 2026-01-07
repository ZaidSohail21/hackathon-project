import { useState } from "react";

export default function PLRLibrarySection() {
  const [search, setSearch] = useState("");

  const categories = ["All Products", "Ebooks", "Audios", "Guides"];

  const products = [
    {
      title: "Scale Your Business with Smart Chatbot",
      type: "Email Course",
      description:
        "Designed to help you guide customers on using chatbots to save time, generate leads, and grow small businesses while upselling your offering.",
    },
    {
      title: "Preparing SOPs for Automation",
      type: "Checklist",
      description:
        "Guides customers through preparing SOPs for automation by organizing tasks, improving documentation, and setting up systems.",
    },
    {
      title: "The 5-Step AI Lesson Planning Process",
      type: "Guide",
      description:
        "Helps teachers use AI tools to plan smarter lessons, save time, and improve teaching results with less stress.",
    },
    {
      title: "Winning Product Research - Workbook",
      type: "Workbook",
      description:
        "Practical exercises to identify market opportunities, analyze competition, and validate product ideas effectively.",
    },
    {
      title: "Master the Art of First Impressions",
      type: "Email Course",
      description:
        "Expert guidance on making strong first impressions while naturally upselling your services.",
    },
    {
      title: "The Power of Prototypes - Workbook",
      type: "Workbook",
      description:
        "Hands-on exercises for testing ideas, gathering feedback, and refining products for successful development.",
    },
    {
      title: "Business Websites Mastery - Guide",
      type: "Guide",
      description:
        "Helps customers build, optimize, and monitor professional business websites with launch and performance strategies.",
    },
    {
      title: "The A/B Test Starter",
      type: "Podcast",
      description:
        "Teaches how to run smart A/B tests, avoid common mistakes, and grow winning ad campaigns confidently.",
    },
    {
      title: "Discover Your True Values",
      type: "Checklist",
      description:
        "Guides customers through identifying core values to make better life and work decisions.",
    },
    {
      title: "7 Chatbot Cost Traps and How to Avoid Them",
      type: "Listicle",
      description:
        "Shows hidden chatbot cost traps that waste time, money, and customer trust—and how to avoid them.",
    },
    {
      title: "The Complete Customer Journey Mapping",
      type: "Guide",
      description:
        "Proven strategies for mapping customer journeys, optimizing touchpoints, and increasing conversions.",
    },
    {
      title: "Answer Engine Optimization Step-by-Step",
      type: "Email Course",
      description:
        "Teaches Answer Engine Optimization step-by-step while building trust and upselling services.",
    },
  ];

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="relative w-full bg-gray-50 py-32">

      {/* Header + Search */}
      <div className="max-w-7xl mx-auto px-4 mb-16 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900">
          Explore PLR products{" "}
          <span className="bg-red-600 bg-clip-text text-transparent">
            from the library
          </span>
        </h1>

        <p className="mt-6 text-lg text-gray-600">
          Find your next winning products
        </p>

        {/* Search Input */}
        <div className="mt-10 flex justify-center">
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full max-w-xl px-6 py-4 rounded-full border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent text-gray-800"
          />
        </div>
      </div>

      {/* Categories */}
      <div className="flex flex-wrap justify-center gap-4 mb-16">
        {categories.map((cat, idx) => (
          <button
            key={idx}
            className="px-6 py-2 rounded-full border border-gray-300 text-gray-700 font-medium hover:bg-black hover:text-white transition"
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((product, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-lg p-8 h-[340px] flex flex-col justify-between hover:shadow-2xl transition"
          >
            <div>
              <span className="inline-block mb-3 text-sm font-semibold text-red-600">
                {product.type}
              </span>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {product.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {product.description}
              </p>
            </div>

            <button className="mt-6 w-full py-2 rounded-lg bg-black text-white font-semibold hover:bg-gray-800 transition">
              View Product
            </button>
          </div>
        ))}
      </div>

    </section>
  );
}

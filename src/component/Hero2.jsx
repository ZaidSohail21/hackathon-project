
export default function MarketReadyHero() {
  return (
    <section className="relative w-full bg-gray-50 py-32 flex items-center justify-center">

      {/* Optional overlay / background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-white via-gray-50 to-white -z-10" />

      <div className="max-w-3xl text-center px-4 flex flex-col items-center justify-center gap-6">

        {/* Top Discover Button */}
        <button className="mb-6 w-60 py-2 rounded-full bg-red-600 text-white font-semibold hover:bg-red-700 transition">
          Discover Master Library
        </button>

        {/* Headline */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900">
          Sell or use market-ready{" "}
          <span className="bg-red-600 bg-clip-text text-transparent">
            Products under your name
          </span>
        </h1>

        {/* Subheading */}
        <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-xl">
          Skip the research, writing, designing, or costly outsourcing. Start using 
          done-for-you content to grow your sales, audience, and authority in no time.
        </p>

        {/* Watch Demo Button */}
        <button className="mt-0 inline-flex rounded-full items-center gap-2 rounded-xl bg-black px-8 py-3 text-white font-semibold hover:bg-gray-800 transition">
          ▶ Watch Demo
        </button>

      </div>
    </section>
  );
}

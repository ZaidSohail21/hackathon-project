
export default function MarketReadyHero() {
  const smallBoxes = ["Boost your community", "Educate your adiance", "Sell the Product", "Expand Product porfolio"];

  return (
    <section className="relative w-full bg-gray-50 py-32 flex items-center justify-center">

      {/* Optional overlay / background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-white via-gray-50 to-white -z-10" />

      <div className="max-w-3xl text-center px-4 flex flex-col items-center justify-center gap-8">

        {/* Top Black Button */}
        <button className="mb-6 w-72 py-3 rounded-full bg-black text-white font-semibold hover:bg-red-700 transition">
          Welcome to have Complete Freedom
        </button>

        {/* Headline */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-12">
          Unlimited options to{" "}
          <div className="bg-red-600 bg-clip-text text-transparent">
            Use the resources
          </div>
        </h1>

        {/* Small Boxes */}
        <div className="flex flex-wrap items-center justify-center gap-6 mb-12">
          {smallBoxes.map((box, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center text-1xl font-bold px-5 py-3 h-40 w-40 bg-white rounded-xl shadow hover:shadow-lg transition font-semibold text-gray-800 text-center"
            >
              {box}
            </div>
          ))}
        </div>

        {/* Bottom Red Button */}
        <button className="w-60 py-3 rounded-full bg-red-600 text-white font-semibold hover:bg-red-700 transition">
          Discover Master Library
        </button>

      </div>
    </section>
  );
}

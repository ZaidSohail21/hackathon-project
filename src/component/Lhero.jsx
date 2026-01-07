export default function lHero() {
  return (
    <section className="relative overflow-hidden bg-black">
      <div className="max-w-7xl mx-auto px-4 py-24">

        
        {/* Main Content */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">
            Discover done-for-you digital products you can {" "}
            <span className="bg-red-600 bg-clip-text text-transparent">
              sell or use in any way

            </span>
          </h1>

          <p className="mt-6 text-lg text-white">
           Imagine you have more than 1000 courses, books, templates, audios, and more. Your own digital library without limits.
           </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <button className="rounded-xl bg-black px-8 py-3 text-white font-semibold hover:bg-gray-800 transition">
              Learn more about Master Library
            </button>
            <button className="rounded-xl border border-gray-300 px-8 py-3 font-semibold text-white hover:bg-gray-100 hover:text-red-600 transition">
              View Free Resources
            </button>
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-2xl font-bold text-white">20K+</p>
              <p className="text-sm text-gray-500">Creators</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-white">1,000+</p>
              <p className="text-sm text-gray-500">Digital Products</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-white">100%</p>
              <p className="text-sm text-gray-500">PLR Rights</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-white">7 Days</p>
              <p className="text-sm text-gray-500">Custom Delivery</p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center mt-12">
        <input type="text" placeholder="Find you next winning product" className="rounded-full px-2 w-1/3 mt-3 py-1 bg-white items-center"/>
        </div>
        {/* Background Blur Effect */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-96 w-96 rounded-full bg-gray-200 blur-3xl opacity-40"></div>
      </div>
    </section>
  );
}

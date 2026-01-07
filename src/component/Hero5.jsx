
export default function Hero5() {
    const techs = ["React", "TypeScript", "Node.js", "Tailwind", "Python"];
  return (
    <section className="relative w-full bg-black py-32 flex items-center justify-center">

      {/* Optional overlay / background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r " />

      <div className="max-w-3xl text-center px-4 flex flex-col items-center justify-center gap-6">

        {/* Top Discover Button */}
        <button className="mb-6 w-60 py-2 rounded-full bg-red-600 text-white font-semibold hover:bg-red-700 transition">
          Discover Master Library
        </button>

        {/* Headline */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white">
          Get custom product tailored {" "}
          <span className="bg-red-600 bg-clip-text text-transparent">
            to your brand in just 7 days
          </span>
        </h1>

        {/* Subheading */}
        <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-xl">
          Skip the research, writing, designing, or costly outsourcing. Start using 
          done-for-you content to grow your sales, audience, and authority in no time.
        </p>
        <section className="w-full py-24 flex justify-center items-center bg-black">
      
      <div className="flex flex-wrap justify-center gap-3 max-w-5xl px-4">
        {techs.map((tech, idx) => (
          <div
            key={idx}
            className="w-32 h-32 bg-gray-900 text-white rounded-xl shadow-lg flex items-center justify-center font-semibold  hover:shadow-2xl transition"
          >
            {tech}
          </div>
        ))}
      </div>

    </section>
      </div>
    </section>
  );
}

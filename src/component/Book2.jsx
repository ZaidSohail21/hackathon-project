export default function Box() {
  const boxes = [
    "Tailored 100% to your business goals",
    "A-Z strategy, writing, editing, and designs",
    "Creation handled in house by real experts",
    "Finished world-class asset in just 7 days",
  ];

  return (
    <section className="w-full bg-black py-32 flex flex-col items-center justify-center">
      
      {/* Heading */}
      <h1 className="text-red-600 text-4xl md:text-5xl lg:text-6xl font-extrabold mb-12 text-center">
        BOOKS
      </h1>
      
      {/* 2x2 Grid */}
      <div className="max-w-7xl w-full px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
        {boxes.map((text, idx) => (
          <div
            key={idx}
            className="bg-gray-900 rounded-2xl shadow-lg flex items-center justify-center p-8 text-center h-64 flex-1 hover:shadow-2xl transition"
          >
            <p className="text-lg md:text-xl font-semibold text-white">
              {text}
            </p>
          </div>
        ))}
      </div>

    </section>
  );
}

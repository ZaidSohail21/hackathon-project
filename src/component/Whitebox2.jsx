
// export default function Hero7() {
//   const smallBoxes = ["Boost your community", "Educate your adiance", "Sell the Product", "Expand Product porfolio"];

//   return (
//     <section className="relative w-full bg-gray-50 py-32 flex items-center justify-center">

//       {/* Optional overlay / background gradient */}
//       <div className="absolute inset-0 bg-gradient-to-r from-white via-gray-50 to-white -z-10" />

//       <div className="max-w-3xl text-center px-4 flex flex-col items-center justify-center gap-8">

//         {/* Top Black Button */}
//         <button className="mb-6 w-72 py-3 rounded-full bg-black text-white font-semibold hover:bg-red-700 transition">
//           Welcome to have Complete Freedom
//         </button>

//         {/* Headline */}
//         <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-12">
//           See What our{" "}
//           <div className="bg-red-600 bg-clip-text text-transparent">
//             Users are saying
//           </div>
//         </h1>

//         {/* Small Boxes */}
//         <div className="flex flex-wrap items-center justify-center gap-6 mb-12">
//           {smallBoxes.map((box, idx) => (
//             <div
//               key={idx}
//               className="flex items-center justify-center text-1xl font-bold px-5 py-3 h-40 w-40 bg-white rounded-xl shadow hover:shadow-lg transition font-semibold text-gray-800 text-center"
//             >
//               {box}
//             </div>
//           ))}
//         </div>

//         {/* Bottom Red Button */}
//         <button className="w-60 py-3 rounded-full bg-red-600 text-white font-semibold hover:bg-red-700 transition">
//           Discover Master Library
//         </button>

//       </div>
//     </section>
//   );
// }
export default function Hero7() {
  const reviews = [
    {
      name: "John Doe",
      stars: 5,
      message:
        "Absolutely amazing experience. The content quality exceeded my expectations and helped me grow faster than ever.",
    },
    {
      name: "Sarah Khan",
      stars: 5,
      message:
        "Everything was well structured and easy to use. Saved me weeks of effort and research.",
    },
    {
      name: "Michael Lee",
      stars: 4,
      message:
        "High-quality assets and very professional execution. Definitely worth it.",
    },
    {
      name: "Ayesha Malik",
      stars: 5,
      message:
        "The best decision I made for my business. Ready-made content that actually converts.",
    },
    {
      name: "Daniel Smith",
      stars: 4,
      message:
        "Great value for money. The designs and strategy are top-notch.",
    },
    {
      name: "Usman Ali",
      stars: 5,
      message:
        "Loved how everything was handled in-house. World-class results delivered fast.",
    },
    {
      name: "Emma Brown",
      stars: 5,
      message:
        "Professional, clean, and extremely effective. Highly recommended!",
    },
    {
      name: "Ahmed Raza",
      stars: 4,
      message:
        "Easy to customize and deploy. Perfect for scaling content-based businesses.",
    },
    {
      name: "Lisa Wong",
      stars: 5,
      message:
        "Outstanding service and quality. I saw results within days of using it.",
    },
  ];

  return (
    <section className="relative w-full bg-gray-50 py-32 flex items-center justify-center">

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-white via-gray-50 to-white -z-10" />

      <div className="max-w-7xl w-full px-4 flex flex-col items-center gap-12">

        {/* Top Black Button */}
        <button className="w-72 py-3 rounded-full bg-black text-white font-semibold hover:bg-red-700 transition">
          Welcome to have Complete Freedom
        </button>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 text-center">
          See What our{" "}
          <div className="bg-red-600 bg-clip-text text-transparent">
            Users are saying
          </div>
        </h1>

        {/* Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">

          {reviews.map((review, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-lg p-8 h-80 flex flex-col justify-between hover:shadow-2xl transition"
            >
              {/* Reviewer Name */}
              <h3 className="font-bold text-lg text-gray-900">
                {review.name}
              </h3>

              {/* Stars */}
              <div className="text-yellow-400 text-xl">
                {"★".repeat(review.stars)}
                {"☆".repeat(5 - review.stars)}
              </div>

              {/* Review Message */}
              <p className="text-gray-600 text-sm leading-relaxed mt-4">
                {review.message}
              </p>
            </div>
          ))}

        </div>

        {/* Show More Button */}
        <button className="mt-12 px-10 py-4 rounded-full bg-black text-white font-semibold hover:bg-gray-800 transition">
          Show More
        </button>

      </div>
    </section>
  );
}

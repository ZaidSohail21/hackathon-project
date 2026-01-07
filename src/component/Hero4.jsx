// export default function MustHaveContentHero() {
//   const smallReviews = ["Facebook", "Google", "Instagram"];
//   const bigReviews = [
//     {
//       title: "John Doe",
//       description: "This content helped me grow my business massively!",
//     },
//     {
//       title: "Jane Smith",
//       description: "The ready-made resources saved me weeks of work!",
//     },
//     {
//       title: "Ali Khan",
//       description: "Highly recommended! Quality and consistency are unmatched.",
//     },
//   ];

//   return (
//     <section className="relative w-full bg-black py-32 flex flex-col items-center justify-center text-red-600">
      
//       {/* Top Button */}
//       <button className="mb-8 px-6 py-3 rounded-full border border-red-600 text-white font-semibold hover:bg-red-600 hover:text-white transition">
//         Discover Must-Have Content
//       </button>

//       {/* Heading */}
//       <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-extrabold text-center mb-12">
//         "Must have content"
//       </h1>

//       {/* Small Review Containers */}
//       <div className="flex flex-wrap justify-center gap-6 mb-16">
//         {smallReviews.map((platform, idx) => (
//           <div
//             key={idx}
//             className="px-6 py-4 bg-gray-900 rounded-xl shadow hover:shadow-lg flex items-center justify-center w-32 h-32 text-center font-semibold text-gray-400"
//           >
//             {platform}
//           </div>
//         ))}
//       </div>

//       {/* Big Review Containers */}
//       <div className="flex flex-wrap justify-center gap-8 max-w-6xl w-full px-4">
//         {bigReviews.map((review, idx) => (
//           <div
//             key={idx}
//             className="flex-1 min-w-[280px] max-w-md bg-gray-900 h-60 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition text-red-600"
//           >
//             <h3 className="font-bold text-xl mb-4">{review.title}</h3>
//             <p className="text-red-500 text-base">{review.description}</p>
//           </div>
//         ))}
//       </div>

//     </section>
//   );
// }
export default function MustHaveContentHero() {
  const smallReviews = ["Facebook", "Google", "Instagram"];
  const bigReviews = [
    {
      title: "John Doe",
      subtitle: "Verified Customer",
      description: "This content helped me grow my business massively!This content helped me grow my business massively!",
    },
    {
      title: "Jane Smith",
      subtitle: "Entrepreneur",
      description: "The ready-made resources saved me weeks of work! This content helped me grow my business massively!",
    },
    {
      title: "Ali Khan",
      subtitle: "Marketing Expert",
      description: "Highly recommended! Quality and consistency are unmatched. This content helped me grow my business massively!",
    },
  ];

  return (
    <section className="relative w-full bg-black py-32 flex flex-col items-center justify-center text-red-600">
      
      {/* Top Button */}
      <button className="mb-8 px-6 py-3 rounded-full border border-red-600 text-white font-semibold hover:bg-red-600 hover:text-white transition">
        Discover Must-Have Content
      </button>

      {/* Heading */}
      <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-extrabold text-center mb-4">
        Must have content
      </h1>

      {/* Section Subtitle */}
      <p className="text-gray-400 text-lg md:text-xl text-center mb-12 max-w-2xl">
        Discover the top content that will skyrocket your growth, save your time, and increase engagement across your platforms.
      </p>

      {/* Small Review Containers */}
      <div className="flex flex-wrap justify-center gap-6 mb-16">
        {smallReviews.map((platform, idx) => (
          <div
            key={idx}
            className="px-6 py-4 bg-gray-900 rounded-xl shadow hover:shadow-lg flex items-center justify-center w-32 h-32 text-center font-semibold text-gray-400"
          >
            {platform}
          </div>
        ))}
      </div>

      {/* Big Review Containers */}
      <div className="flex flex-wrap justify-center gap-8 max-w-6xl w-full px-4">
        {bigReviews.map((review, idx) => (
          <div
            key={idx}
            className="flex-1 min-w-[280px] max-w-md bg-gray-900 h-64 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition text-red-600 flex flex-col justify-between"
          >
            <div>
              <h3 className="font-bold text-red-600 text-xl mb-2">{review.title}</h3>
              <h4 className="text-white font-medium mb-4">{review.subtitle}</h4>
              <p className="text-gray-300 text-base">{review.description}</p>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}

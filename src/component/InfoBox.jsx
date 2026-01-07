// export default function InfoBoxesHeroHalfScreen() {
//   const boxes = [
//     {
//       title: "Demanded Content",
//       description:
//         "Best-selling topics that people really buy. Based on market research.",
//       col: 1,
//     },
//     {
//       title: "Constantly Updated",
//       description: "We add 20 new products every week to meet the latest trends.",
//       col: 1,
//     },
//     {
//       title: "Private Label Rights",
//       description:
//         "Fully rebrand, edit, and use as you want. Without any restrictions.",
//       col: 2,
//     },
//     {
//       title: "Paper 3D Render",
//       description:
//         "1000+ Book render Digital Products. Almost unlimited selection of content in one of the biggest libraries out there.",
//       col: 3,
//     },
//     {
//       title: "15 Media Formats",
//       description:
//         "Ebooks, Courses, Audios, Templates, Prompts, Notion Systems + more.",
//       col: 4,
//     },
//     {
//       title: "Created by Experts",
//       description:
//         "Each product is made in-house by our team. World-class standards.",
//       col: 4,
//     },
//   ];

//   return (
//     <section className="bg-gray-50 py-24">
//       <div className="max-w-7xl mx-auto px-4">

//         {/* Grid Layout */}
//         <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 sm:gap-8 min-h-[50vh]">

//           {/* Column 1 */}
//           <div className="flex flex-col gap-6 min-h-[60vh]">
//             {boxes.filter((b) => b.col === 1).map((box, idx) => (
//               <div key={idx} className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition flex-1">
//                 <h3 className="font font-bold text-lg mb-2">{box.title}</h3>
//                 <p className="text-gray-600 text-sm">{box.description}</p>
//               </div>
//             ))}
//           </div>

//           {/* Column 2 - Single tall box */}
//           <div className="flex flex-col gap-6 min-h-[60vh]">
//             {boxes.filter((b) => b.col === 2).map((box, idx) => (
//               <div key={idx} className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition flex-1">
//                 <h3 className="font-bold text-lg mb-2">{box.title}</h3>
//                 <p className="text-gray-600 text-sm">{box.description}</p>
//               </div>
//             ))}
//           </div>

//           {/* Column 3 - Single tall box */}
//           <div className="flex flex-col gap-6 min-h-[60vh]">
//             {boxes.filter((b) => b.col === 3).map((box, idx) => (
//               <div key={idx} className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition flex-1">
//                 <h3 className="font-bold text-lg mb-2">{box.title}</h3>
//                 <p className="text-gray-600 text-sm">{box.description}</p>
//               </div>
//             ))}
//           </div>

//           {/* Column 4 */}
//           <div className="flex flex-col gap-6 min-h-[60vh]">
//             {boxes.filter((b) => b.col === 4).map((box, idx) => (
//               <div key={idx} className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition flex-1">
//                 <h3 className="font-bold text-lg mb-2">{box.title}</h3>
//                 <p className="text-gray-600 text-sm">{box.description}</p>
//               </div>
//             ))}
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }
export default function InfoBoxesHeroHalfScreen() {
  const boxes = [
    {
      title: "Demanded Content",
      description:
        "Best-selling topics that people really buy. Based on market research.",
      col: 1,
    },
    {
      title: "Constantly Updated",
      description: "We add 20 new products every week to meet the latest trends.",
      col: 1,
    },
    {
      title: "Private Label Rights",
      description:
        "Fully rebrand, edit, and use as you want. Without any restrictions.",
      col: 2,
    },
    {
      title: "Paper 3D Render",
      description:
        "1000+ Book render Digital Products. Almost unlimited selection of content in one of the biggest libraries out there.",
      col: 3,
    },
    {
      title: "15 Media Formats",
      description:
        "Ebooks, Courses, Audios, Templates, Prompts, Notion Systems + more.",
      col: 4,
    },
    {
      title: "Created by Experts",
      description:
        "Each product is made in-house by our team. World-class standards.",
      col: 4,
    },
  ];

  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4">

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 sm:gap-8 min-h-[50vh]">

          {/* Column 1 */}
          <div className="flex flex-col gap-6  min-h-[60vh]">
            {boxes
              .filter((b) => b.col === 1)
              .map((box, idx) => (
                <div
                  key={idx}
                  className=" p-8 bg-gray-100 rounded-2xl shadow hover:shadow-lg transition flex-1"
                >
                  <h3 className="font-bold text-4xl mb-4">{box.title}</h3>
                  <p className="text-gray-700 text-base md:text-lg">{box.description}</p>
                </div>
              ))}
          </div>

          {/* Column 2 - Single tall box */}
          <div className="flex flex-col bg-gray-300 gap-6 min-h-[60vh]">
            {boxes
              .filter((b) => b.col === 2)
              .map((box, idx) => (
                <div
                  key={idx}
                  className="bg-red-500 p-8 rounded-2xl shadow hover:shadow-lg transition flex-1"
                >
                  <h3 className="font-bold text-white text-4xl mb-4">{box.title}</h3>
                  <p className="text-white text-5xl md:text-lg">{box.description}</p>
                </div>
              ))}
          </div>

          {/* Column 3 - Single tall box */}
          <div className="flex flex-col bg-gray-300 gap-6 min-h-[60vh]">
            {boxes
              .filter((b) => b.col === 3)
              .map((box, idx) => (
                <div
                  key={idx}
                  className="bg-gray-900 p-8 rounded-2xl shadow hover:shadow-lg transition flex-1"
                >
                  <h3 className="font-bold text-white text-4xl mb-4">{box.title}</h3>
                  <p className="text-white text-1xl md:text-lg">{box.description}</p>
                </div>
              ))}
          </div>

          {/* Column 4 */}
          <div className="flex flex-col gap-6 min-h-[60vh]">
            {boxes
              .filter((b) => b.col === 4)
              .map((box, idx) => (
                <div
                  key={idx}
                  className=" p-8 rounded-2xl bg-gray-100 shadow hover:shadow-lg transition flex-1"
                >
                  <h3 className="font-bold text-2xl mb-4">{box.title}</h3>
                  <p className="text-gray-700 text-base md:text-lg">{box.description}</p>
                </div>
              ))}
          </div>

        </div>
      </div>
    </section>
  );
}

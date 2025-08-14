import React from "react";

const competitiveCourses = [
  {
    title: "Defiance (UPSC)",
    image: "/images/upsc.jpg",
    description: "Prepare for the UPSC Civil Services Exam with our comprehensive Defiance course.",
  },
  {
    title: "Banking",
    image: "/images/banking.jpg",
    description: "Ace your banking exams with our expert-led courses covering all essential topics.",
  },
  {
    title: "Neet",
    image: "/images/neet.jpg",
    description: "Get ready for the NEET exam with our specialized coaching and practice materials.",
  },
  {
    title: "CLAT",
    image: "/images/clat.jpg",
    description: "Prepare for the CLAT exam with our focused curriculum and expert guidance.",
  },
  {
    title: "Nursing",
    image: "/images/nursing.jpg",
    description: "Enhance your nursing skills and knowledge with our professional nursing courses.",
  },
];

export default function CompetitiveCourses() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-black text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold">Competitive Exam Courses</h1>
        <p className="mt-4 text-purple-200 text-lg">
          Prepare for your dream career with our expert-led competitive exam courses.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
        {competitiveCourses.map((course, index) => (
          <div
            key={index}
            className="bg-white/10 rounded-xl overflow-hidden shadow-lg backdrop-blur-md border border-white/10 hover:scale-105 transform transition duration-300"
          >
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-44 object-cover"
            />
            <div className="p-5 flex flex-col items-center text-center">
              <h2 className="text-lg font-semibold">{course.title}</h2>
              <p className="mt-2 text-purple-300 text-sm">{course.description}</p>
              <div className="mt-4 flex gap-3">
                <button className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white text-sm rounded-lg transition">
                  DETAILS
                </button>
                <button className="px-4 py-2 bg-pink-500 hover:bg-pink-600 text-white text-sm rounded-lg transition">
                  BUY NOW
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

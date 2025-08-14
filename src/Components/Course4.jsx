import React from "react";

const cookingClasses = [
  {
    title: "North Indian Food",
    image: "/images/north-indian.jpg",
    description: "Explore the rich flavors of North Indian cuisine with our expert-led cooking classes.",
  },
  {
    title: "South Indian Food",
    image: "/images/south-indian.jpg",
    description: "Master the art of South Indian cooking, from dosas to sambar, with our hands-on classes.",
  },
  {
    title: "Chinese Food",
    image: "/images/chinese.jpg",
    description: "Learn to prepare authentic Chinese dishes, including stir-fries and dumplings, in our cooking classes.",
  },
  {
    title: "Italian Food",
    image: "/images/italian.jpg",
    description: "Discover the secrets of Italian cooking, from pasta making to pizza perfection, with our classes.",
  },
];

export default function CookingClasses() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-black text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold">Cooking Classes</h1>
        <p className="mt-4 text-purple-200 text-lg">
          Learn to prepare delicious dishes from across the world with our hands-on cooking classes.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {cookingClasses.map((course, index) => (
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

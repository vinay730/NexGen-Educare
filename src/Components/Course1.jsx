import React from "react";

const courses = [
  {
    title: "Graphic Design",
    image: "/images/graphic-design.jpg",
    description: "Explore the world of graphic design with our comprehensive courses.",
  },
  {
    title: "Full Stack Developer",
    image: "/images/fullstack.jpg",
    description: "Become a full stack developer with our hands-on training and projects.",
  },
  {
    title: "Web Designing",
    image: "/images/web-design.jpg",
    description: "Learn the principles of web design and create stunning websites.",
  },
  {
    title: "Python Crash Course",
    image: "/images/python.jpg",
    description: "Get started with Python programming through our crash course designed for beginners.",
  },
  {
    title: "Video Editing",
    image: "/images/video-editing.jpg",
    description: "Master video editing techniques and software to create professional-quality videos.",
  },
  {
    title: "SEO Management",
    image: "/images/seo.jpg",
    description: "Learn how to optimize websites for search engines and improve online visibility.",
  },
  {
    title: "Digital Marketing",
    image: "/images/digital-marketing.jpg",
    description: "Dive into the world of digital marketing and learn strategies to grow your business online.",
  },
  {
    title: "Content Writing",
    image: "/images/content-writing.jpg",
    description: "Enhance your writing skills and learn how to create engaging content for various platforms.",
  },
];

export default function Course1() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-black text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold">Our Courses</h1>
        <p className="mt-4 text-purple-200 text-lg">
          Learn from our range of professional courses and upgrade your skills.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {courses.map((course, index) => (
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

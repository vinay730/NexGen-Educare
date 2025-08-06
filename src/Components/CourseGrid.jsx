import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // <-- important

import img1 from '../assets/bartender.jpg';
import img2 from '../assets/digital1.jpg';
import img3 from '../assets/realestate1.jpg';
import img4 from '../assets/makeup.jpg';
import img5 from '../assets/itcourse.jpg';
import img6 from '../assets/photography.jpg';
import img7 from '../assets/event.jpg';
import img8 from '../assets/guitar.jpg';
import img9 from '../assets/receptionist.jpg';
import img10 from '../assets/digital.jpg';
import img11 from '../assets/accounting.jpg';
import img12 from '../assets/translator.jpg';
import img13 from '../assets/graphic.jpg';
import img14 from '../assets/sales.jpg';
import img15 from '../assets/security1.jpg';
import img16 from '../assets/bartender.jpg';
import img17 from '../assets/sales.jpg';
import img18 from '../assets/realestate1.jpg';
import img19 from '../assets/receptionist.jpg';
import img20 from '../assets/sales.jpg';
import img21 from '../assets/event.jpg';
import img22 from '../assets/digital.jpg';

const CourseGrid = () => {
  const allCourses = [
    { title: "Bartender Training", img: img1, link: "/courses/bartender-training" },
    { title: "Digital Marketing", img: img2, link: "/courses/digital-marketing" },
    { title: "Real Estate", img: img3, link: "/courses/real-estate" },
    { title: "Makeup Artist", img: img4, link: "/courses/makeup-artist" },
    { title: "IT Course", img: img5, link: "/courses/it-course" },
    { title: "Photography", img: img6, link: "/courses/photography" },
    // { title: "Event Planning", img: img7, link: "/courses/event-planning" },
    { title: "Guitar Lessons", img: img8, link: "/courses/guitar-lessons" },
    { title: "Reception Training", img: img9, link: "/courses/reception-training" },
    { title: "Digital Marketing", img: img10, link: "/courses/digital-marketing" },
    { title: "Basic Accounting", img: img11, link: "/courses/basic-accounting" },
    { title: "Translator", img: img12, link: "/courses/translator" },
    { title: "Graphic Designer", img: img13, link: "/courses/graphic-designer" },
    { title: "Sales Training", img: img14, link: "/courses/sales-training" },
    { title: "Security Guard", img: img15, link: "/courses/security-guard" },
    { title: "Bartender Training", img: img16, link: "/courses/bartender-training" },
    { title: "Sales Training", img: img17, link: "/courses/sales-training" },
    { title: "Real Estate", img: img18, link: "/courses/real-estate" },
    { title: "Reception Training", img: img19, link: "/courses/reception-training" },
    { title: "Sales Training", img: img20, link: "/courses/sales-training" },
    { title: "Event Planning", img: img21, link: "/courses/event-planning" },
    { title: "Digital Marketing", img: img22, link: "/courses/digital-marketing" },
  ];

  const [visibleCount, setVisibleCount] = useState(6);

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 3, allCourses.length));
  };

  const handleShowLess = () => {
    setVisibleCount(6);
  };

  const isAllVisible = visibleCount >= allCourses.length;

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 items-center text-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {allCourses.slice(0, visibleCount).map((course, index) => (
          <Link to={course.link} key={index}>
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <img
                src={course.img}
                alt={course.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg bg-gradient-to-br from-blue-500 to-indigo-600 text-white px-3 py-2 rounded inline-block shadow">
                  {course.title}
                </h3>
                <p className="mt-2 text-lg font-bold text-gray-600">
                  🎓 Unlock your potential with this exciting course!
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="text-center mt-10">
        {!isAllVisible ? (
          <button
            onClick={handleLoadMore}
            className="px-6 py-3 bg-gradient-to-br from-blue-500 to-indigo-600 text-white font-medium rounded-lg shadow-md hover:scale-105 transition-transform"
          >
            Load More
          </button>
        ) : (
          <button
            onClick={handleShowLess}
            className="px-6 py-3 bg-gradient-to-br from-red-500 to-pink-600 text-white font-medium rounded-lg shadow-md hover:scale-105 transition-transform"
          >
            Show Less
          </button>
        )}
      </div>
    </div>
  );
};

export default CourseGrid;

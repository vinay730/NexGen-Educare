import React from "react";
import aboutImage from "../assets/corousel.jpg";
import banner from "../assets/banner.jpg";

const About = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
     {/* Hero Section with Background Image */}
<section
  className="relative bg-cover bg-center h-[50vh] flex items-center justify-center text-center px-4"
  style={{
    backgroundImage: `url(${banner})`, 
  }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black/50"></div>

  {/* Text Content */}
  <div className="relative z-10 text-white">
    <h1 className="text-4xl md:text-5xl font-bold drop-shadow-md mb-4">
      We are
    </h1>
    <p className="text-lg md:text-xl max-w-2xl mx-auto drop-shadow-sm">
      The NW Career Education College
    </p>
  </div>
</section>


      {/* Main Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Image */}
          <div>
            <img
              src={aboutImage}
              alt="About"
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>

          {/* Text */}
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
              Who We Are
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              At Bright Future College, we are committed to providing students with a
              world-class education that blends academic rigor with practical, hands-on
              experience. Our programs are designed to nurture personal growth and
              career development.
            </p>
            <p className="text-gray-600 leading-relaxed">
              With dedicated faculty, modern facilities, and a passion for innovation,
              we prepare students for global success in diverse fields.
            </p>
          </div>
        </div>
      </section>

      {/* Mission/Vision Section */}
      <section className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-xl font-semibold text-[#0D92F4] mb-2">
              🎯 Our Mission
            </h3>
            <p className="text-gray-700">
              To empower students through quality education and help them build
              meaningful, successful futures. We aim to cultivate curiosity, creativity,
              and lifelong learning.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold bg-gradient-to-br from-blue-500 to-indigo-600 mb-2">
              👁️ Our Vision
            </h3>
            <p className="text-gray-700">
              To be a leading institution recognized globally for excellence in
              education, innovation, and community impact.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

import React, { useEffect, useState } from "react";
import corousel from "../assets/corousel.jpg";
import corousel1 from "../assets/corousel1.jpg";
import corousel2 from "../assets/carousel2.jpg";    
import corousel3 from "../assets/corousel3.jpg";


const slides = [
  {
    image: corousel,
    title: "Welcome to Bright Future",
    description: "Empowering students globally through modern education.",
  },
  {
    image: corousel1,
    title: "Our Mission",
    description: "We believe in excellence, leadership, and innovation.",
  },
  {
    image: corousel2,
    title: "Explore Our Programs",
    description: "From digital marketing to bartending — find your passion!",
  },
    {
    image: corousel3,
    title: "Explore Our Programs",
    description: "From digital marketing to bartending — find your passion!",
  },
];

const Carousel = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // Autoplay every 5 seconds
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[80vh] overflow-hidden rounded-lg shadow-lg">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center px-4 text-center">
            <h2 className="text-white text-3xl md:text-5xl font-bold mb-4 drop-shadow-md">
              {slide.title}
            </h2>
            <p className="text-white text-lg md:text-xl max-w-2xl drop-shadow-md">
              {slide.description}
            </p>
          </div>
        </div>
      ))}

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white text-3xl bg-black/30 hover:bg-black/50 p-2 rounded-full z-20"
      >
        ‹
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white text-3xl bg-black/30 hover:bg-black/50 p-2 rounded-full z-20"
      >
        ›
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, idx) => (
          <div
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              idx === current ? "bg-white" : "bg-gray-400"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;

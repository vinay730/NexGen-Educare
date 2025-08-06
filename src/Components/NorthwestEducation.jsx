import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AnimatedText = () => {
  const paragraphRef = useRef(null);

  useEffect(() => {
    const words = paragraphRef.current?.querySelectorAll('.word') || [];

    if (words.length) {
      gsap.fromTo(
  words,
  { y: 20, opacity: 0 },
  {
    y: 0,
    opacity: 1,
    stagger: 0.05,
    duration: 0.6,
    ease: 'power3.out',
  }
);

    }
  }, []);

  const text =
    "Empowering futures through career-focused education. At Northwest, opportunity begins with skill, knowledge, and guidance.";

  const words = text.split(' ').map((word, i) => (
    <span key={i} className="word inline-block mr-1">
      {word}
    </span>
  ));

  return (
    <div className="p-6 mx-auto text-center min-h-[200px]">
      <h2
        ref={paragraphRef}
        className="text-3xl sm:text-4xl font-semibold bg-gradient-to-br from-blue-500 to-indigo-600 bg-clip-text text-transparent mb-4"
      >
        {words}
      </h2>
    </div>
  );
};

export default AnimatedText;

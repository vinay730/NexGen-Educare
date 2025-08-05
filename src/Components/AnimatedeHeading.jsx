import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const AnimatedHeading = () => {
  return (
    <h1
      className="text-white text-3xl md:text-5xl lg:text-6xl font-bold text-center leading-tight"
      style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.6)' }}
    >
      <TypeAnimation
        sequence={[
          'We offer all levels of', 500,
          'We offer all levels of courses', 500,
          'We offer all levels of courses to students', 500,
          'We offer all levels of courses to students across', 500,
          'We offer all levels of courses to students across the world.', 1000,
          'We want our students to excel.', 2000,
        ]}
        wrapper="span"
        speed={50}
        repeat={Infinity}
        style={{
          display: 'inline-block',
          color: '#ffffff', // white text
        }}
      />
    </h1>
  );
};

export default AnimatedHeading;

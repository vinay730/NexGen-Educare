import React from 'react';
import CountUp from 'react-countup';

const StatCounter = ({ title, icon, end }) => {
  return (
    <div className="relative overflow-hidden rounded-xl shadow-lg transform transition hover:scale-105 duration-300 bg-gradient-to-br from-blue-500 to-indigo-600 text-white p-6 text-center">
      <div className="text-5xl mb-4">{icon}</div>
      <h2 className="text-xl font-semibold mb-2 tracking-wide uppercase">{title}</h2>
      <p className="text-4xl font-bold drop-shadow-lg">
        <CountUp start={0} end={end} duration={6} separator="," />
      </p>
    </div>
  );
};

export default StatCounter;

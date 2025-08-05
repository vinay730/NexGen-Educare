import React from 'react';
import StatCounter from './StateCounter';

const CountSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Impact</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        <StatCounter title="Admissions" icon="🧾" end={1500} />
        <StatCounter title="Vacancies" icon="🪑" end={800} />
        <StatCounter title="Bright Future" icon="🌟" end={1200} />
      </div>
    </div>
  );
};

export default CountSection;

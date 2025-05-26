import React from 'react';
import './Fireflies.css';

const Fireflies = () => {
  const fireflyCount = 20;
  
  return (
    <div className='fireflies'>
      {[...Array(fireflyCount)].map((_, i) => (
        <div className="firefly" key={i} />
      ))}
    </div>
  );
};

export default Fireflies;
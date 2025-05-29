import React from 'react';
import './Fireflies.css';

const getRandom = (min, max) => Math.random() * (max - min) + min;

const Fireflies = () => {
  const fireflyCount = 50;

  return (
    <div className="fireflies">
      {[...Array(fireflyCount)].map((_, i) => {
        const style = {
          top: `${getRandom(0, 100)}vh`,
          left: `${getRandom(0, 100)}vw`,
          animationDuration: `${getRandom(10, 30)}s`,
          animationDelay: `${getRandom(0, 1)}s`,
        };
        return <div className="firefly" style={style} key={i} />;
      })}
    </div>
  );
};

export default Fireflies;

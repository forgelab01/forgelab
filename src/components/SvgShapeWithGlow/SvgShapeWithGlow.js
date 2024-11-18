import React from 'react';
import './SvgShapeWithGlow.css';

const SvgShapeWithGlow = () => {
  return (
    <svg
      width="300"
      height="150"
      viewBox="0 0 300 150"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="10"
        y="10"
        width="280"
        height="130"
        stroke="blue"
        strokeWidth="5"
        fill="none"
        className="chasing-glow"
      />
    </svg>
  );
};

export default SvgShapeWithGlow;

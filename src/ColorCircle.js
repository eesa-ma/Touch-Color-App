import React from 'react';
import './ColorCircle.css';

function ColorCircle({ x, y, color }) {
  const circleStyle = {
    position: 'absolute',
    top: `${y - 10}px`,
    left: `${x - 10}px`,
    width: '25px',
    height: '25px',
    backgroundColor: color,
    borderRadius: '50%',
    pointerEvents: 'none',
  };

  return <div className="color-circle" style={circleStyle}></div>;
}

export default ColorCircle;

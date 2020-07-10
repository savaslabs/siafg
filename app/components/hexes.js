import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { g, tangerines, ghosts, lavenders } from '../constants';

const hexes = () => {
  const location = useLocation();
  const [dataPosition, setDataPosition] = useState(0);
  let position = 0;
  let max = 6;

  const updatePosition = n => {
    position += n;
    position = position < 0 ? 0 : position > max ? max : position;
    setDataPosition(position);
  };

  useEffect(() => {
    if (location.pathname === '/' || location.pathname === '/welcome') {
      // Landing page.
      setDataPosition(0);
    } else if (location.state?.position) {
      // Pull position from location state.
      updatePosition(location.state.position);
    } else {
      // Glossary, Resources, initial quiz question.
      setDataPosition(1);
    }
  }, [location]);

  // Hex constructor.
  const createHex = (r, m, x, y, index) => {
    return (
      <use
        key={index}
        href="#hex"
        transform={`translate(${x}, ${y}) scale(${m}) rotate(${r}, 50, 50)`}
      ></use>
    );
  };

  return (
    <svg
      className="background"
      viewBox="0 0 500 500"
      preserveAspectRatio="xMidYMin slice"
      xmlns="http://www.w3.org/2000/svg"
      dataposition={dataPosition}
    >
      <defs>
        <linearGradient id="sunnytangerine" gradientTransform="rotate(70) translate(0,-100)">
          <stop stopColor="#FFDD94" offset="0%"></stop>
          <stop stopColor="#D1C6F3" offset="100%"></stop>
        </linearGradient>
        <path
          id="hex"
          d="M2.59608 54.0968C-0.528122 48.6855 -0.528119 42.0186 2.59608 36.6073L18.6013
      8.88542C21.7255 3.47414 27.4993 0.140663 33.7477 0.140663L65.7582 0.140663C72.0066 0.140663
      77.7803 3.47415 80.9045 8.88542L96.9098 36.6073C100.034 42.0186 100.034 48.6856 96.9098
      54.0968L80.9045 81.8187C77.7803 87.23 72.0066 90.5635 65.7582 90.5635L33.7477 90.5635C27.4993
      90.5635 21.7255 87.23 18.6013 81.8187L2.59608 54.0968Z"
        ></path>
      </defs>
      {g.map((type, i) => {
        return (
          <g key={i} className={type[0]} fill={type[1]} fillOpacity={type[2]}>
            {type[0] === 'tangerines' &&
              tangerines.map((hex, index) => createHex(hex[0], hex[1], hex[2], hex[3], index))}
            {type[0] === 'ghosts' &&
              ghosts.map((hex, index) => createHex(hex[0], hex[1], hex[2], hex[3], index))}
            {type[0] === 'lavenders' &&
              lavenders.map((hex, index) => createHex(hex[0], hex[1], hex[2], hex[3], index))}
          </g>
        );
      })}
    </svg>
  );
};

export default hexes;

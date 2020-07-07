import React, { useState, useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { AppDataContext } from '../context/appDataContext';

const hexes = () => {
  const location = useLocation();
  const [dataPosition, setDataPosition] = useState(0);
  const appData = useContext(AppDataContext);
  const questions = appData.questions.map(q => q.id);
  let position = 0;
  let max = 6;

  const updatePosition = n => {
    position += n;
    position = position < 0 ? 0 : position > max ? max : position;
    setDataPosition(position);
  };

  // Animate polygons on option choice.
  useEffect(() => {
    return () => {
      if (location.pathname === '/' || location.pathname === '/welcome') {
        // Landing page.
        setDataPosition(0);
      } else if (
        location.pathname === '/quiz' &&
        (location.state !== undefined || location.state !== null)
      ) {
        if (location.state.position !== undefined) {
          updatePosition(location.state.position);
        } else {
          setDataPosition(1);
        }
      } else {
        // Glossary and Resources route.
        setDataPosition(1);
      }
    };
  }, [location, questions]);

  // Hex constructor.
  const createHex = (r, m, y, x, index) => {
    return (
      <use
        key={index}
        href="#hex"
        transform={`translate(${x}, ${y}) scale(${m}) rotate(${r}, 50, 50)`}
      ></use>
    );
  };

  const g = [
    ['tangerines', 'url(#sunnytangerine)', 0.3],
    ['ghosts', '#F9F8FF', 0.4],
    ['lavenders', '#F0ECFF', 0.3],
  ];

  const _tangerines = [
    [45, 4.5, 270, 70],
    [45, 2.5, 170, -140],
    [20, 3.25, -220, -40],
    [-20, 5, -200, 300],
    [35, 3, 300, 600],
    [50, 2.5, 80, 800],
    [-20, 2, 330, 950],
    [15, 5.5, -200, 1100],
    [40, 3, 400, 1150],
    [0, 4, 200, 1550],
    [-15, 4, -200, 1800],
    [15, 6, 200, 2000],
  ];

  const _ghosts = [
    [20, 3.5, 250, -50],
    [-20, 3, -50, 100],
    [50, 2.5, 300, 330],
    [10, 1.5, 100, 530],
    [-5, 3, -100, 730],
    [-15, 4, 200, 1050],
    [5, 3, -80, 1250],
    [30, 2, 400, 1450],
    [0, 5, 100, 1750],
  ];

  const _lavenders = [
    [5, 4, -100, -300],
    [20, 2, 100, 200],
    [-5, 1, 300, 500],
    [15, 2.5, 360, 750],
    [0, 3, -100, 950],
    [-15, 3.5, 100, 1250],
    [5, 5, 300, 1550],
    [15, 4, -100, 2050],
  ];
  return (
    <svg
      className="background"
      viewBox="0 0 500 2300"
      preserveAspectRatio="xMidYMin meet"
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
              _tangerines.map((hex, index) => createHex(hex[0], hex[1], hex[2], hex[3], index))}
            {type[0] === 'ghosts' &&
              _ghosts.map((hex, index) => createHex(hex[0], hex[1], hex[2], hex[3], index))}
            {type[0] === 'lavenders' &&
              _lavenders.map((hex, index) => createHex(hex[0], hex[1], hex[2], hex[3], index))}
          </g>
        );
      })}
    </svg>
  );
};

export default hexes;

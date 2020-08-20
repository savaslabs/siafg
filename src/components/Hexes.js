import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { g, tangerines, ghosts, lavenders } from "../constants";
import styled, { css } from "styled-components";
import breakpoint from "styled-components-breakpoint";
import triangle from "../assets/triangle--right.svg";

const generatePositionStyles = () => {
  let styles = ``;
  for (let i = 1; i < 7; i += 1) {
    const base = -300;
    const offset = 100;
    styles += `
      [data-position='${i}'] & {
        &.tangerines {
          transform: translateY(${(base - 0 * offset) * i}px);
        }
        &.ghosts {
          transform: translateY(${(base - 1 * offset) * i}px);
        }
        &.lavenders {
          transform: translateY(${(base - 2 * offset) * i}px);
        }
      }
    `;
  }
  return css`
    ${styles}
  `;
};

const SvgBackground = styled.svg`
  position: fixed;
  background: #f9f8ff;
  right: 0;
  width: 100vw;
  height: 100vh;
  top: 0;
  transition: width 800ms;
  z-index: -1;

  ${breakpoint("lg")`
    top: 0;
    width: 66.66vw;
  `}

  &[data-position='0'] {
    width: 100vw;
  }
`;

const Group = styled.g`
  transition: transform 1s;
  transform: translateY(0);
  ${generatePositionStyles()};
`;

const SidebarBackground = styled.div`
  width: 33.33vw;
  position: absolute;
  left: 0;
  height: ${props =>
    props.page === "/" || props.page === "/about" ? "100%" : "100vh"};
  pointer-events: none;
  transition: width 800ms;

  ${breakpoint("sm", "lg")`
    display: none;
  `}

  &:after {
    content: url(${triangle});
    position: absolute;
    top: ${props => props.arrowPosition};
    left: calc(33.33vw - 10px);
    transition: left 800ms;
  }

  &[data-position="0"] {
    width: 0;

    &:after {
      left: -40px;
    }
  }
`;

const Hexes = () => {
  const location = useLocation();
  const [dataPosition, setDataPosition] = useState(0);
  const [arrowPosition, setArrowPosition] = useState("140px");

  useEffect(() => {
    let position = 0;
    let max = 6;

    const updatePosition = n => {
      position += n;
      position = position < 0 ? 0 : position > max ? max : position;
      setDataPosition(position);
    };

    if (
      location.pathname === "/" ||
      location.pathname === "/welcome" ||
      location.pathname === "/about"
    ) {
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

  useEffect(() => {
    const headerHeight = document.getElementById("site-header")?.offsetHeight;
    setArrowPosition(`${headerHeight + 50}px`);
  }, []);

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
    <>
      <SidebarBackground
        data-position={dataPosition}
        arrowPosition={arrowPosition}
      />
      <SvgBackground
        className="background"
        viewBox="0 0 500 500"
        preserveAspectRatio="xMidYMin slice"
        xmlns="http://www.w3.org/2000/svg"
        data-position={dataPosition}
        page={location.pathname}
      >
        <defs>
          <linearGradient
            id="sunnytangerine"
            gradientTransform="rotate(70) translate(0,-100)"
          >
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
            <Group
              key={i}
              className={type[0]}
              fill={type[1]}
              fillOpacity={type[2]}
            >
              {type[0] === "tangerines" &&
                tangerines.map((hex, index) =>
                  createHex(hex[0], hex[1], hex[2], hex[3], index)
                )}
              {type[0] === "ghosts" &&
                ghosts.map((hex, index) =>
                  createHex(hex[0], hex[1], hex[2], hex[3], index)
                )}
              {type[0] === "lavenders" &&
                lavenders.map((hex, index) =>
                  createHex(hex[0], hex[1], hex[2], hex[3], index)
                )}
            </Group>
          );
        })}
      </SvgBackground>
    </>
  );
};

export default Hexes;

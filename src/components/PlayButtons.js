import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  color: #ffffff;
  border: none;
  border-radius: 5px;
  width: 70px;
  height: 70px;
  border: 1px solid #ddd;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 50%;
  margin: 30px 0 10px 0;
  font-weight: 900;
  cursor: pointer;
  transition: transform 120ms ease-in;
  transform: scale(1);

  &:hover {
    outline: none;
    transform: scale(1.2);
  }
  &:focus {
    outline: none;
  }
`;

const Svg = styled.svg`
  width: 45px;
  height: 45px;
  position: relative;
  right: -2px;
`;

export const PlayButton = () => {
  return (
    <Button>
      <Svg x="0px" y="0px" viewBox="0 0 100 100">
        <defs>
          <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop
              offset="0%"
              style={{ stopColor: 'rgba(225, 32, 30, 1)', stopOpacity: 1 }}
            />
            <stop
              offset="70%"
              style={{ stopColor: 'rgba(195, 27, 120, 1)', stopOpacity: 1 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: 'rgba(195, 27, 120, 1)', stopOpacity: 1 }}
            />
          </linearGradient>
        </defs>
        <g>
          <g>
            <path
              fill="url(#grad3)"
              d="M23,90c-0.7,0-1.8-0.2-2.5-0.8C19,88.2,18,86.7,18,85V15c0-1.8,1-3.5,2.5-4.3c1.5-1,3.5-1,5,0l60,35  c1.5,1,2.5,2.5,2.5,4.2c0,1.8-1,3.5-2.5,4.3l-60,35C24.8,89.8,23.8,90,23,90z"
            />
          </g>
        </g>
      </Svg>
    </Button>
  );
};

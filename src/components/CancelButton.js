import React from 'react';
import styled from 'styled-components';

const Svg = styled.svg`
  width: 60px;
  height: 60px;
  fill: #fff;
`;

const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const CancelButton = ({ onClick }) => {
  return (
    <Button onClick={onClick}>
      <Svg viewBox="0 0 100 100" x="0px" y="0px">
        <path d="M74,71.21,52.83,50,74,28.79A2,2,0,1,0,71.21,26L50,47.17,28.79,26A2,2,0,0,0,26,28.79L47.17,50,26,71.21A2,2,0,1,0,28.79,74L50,52.83,71.21,74A2,2,0,1,0,74,71.21Z" />
      </Svg>
    </Button>
  );
};

CancelButton.defaultProps = {
  onClick: () => {}
};

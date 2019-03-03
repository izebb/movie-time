import React from 'react';
import styled from 'styled-components';

const Title = styled.h4`
  margin-bottom: 4px;
  font-weight: 700;
  font-size: 17px;
  text-shadow: 0 1px 1px #000;
`;

const Sumamary = styled.div`
  transition: transform 120ms 50ms ease-out;
  transform: translate3d(0, 5px, 0);
`;

const Season = styled.div`
  margin-bottom: 2px;
`;

const Container = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  color: #ffffff;
  height: 100%;
  padding: 20px 10px 30px 10px;
  background: linear-gradient(
    to bottom,
    rgba(30, 40, 45, 0.23) 0%,
    rgba(30, 40, 45, 0.35) 2%,
    rgba(30, 40, 45, 0.65) 50%,
    rgba(30, 40, 45, 0.65) 100%
  );
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  opacity: 0;
  transition: opacity 150ms ease-out;
  font-size: 15px;
  font-weight: 600;

  &:hover {
    opacity: 1;
    ${Sumamary} {
      transform: translate3d(0, 0, 0);
    }
  }
`;

export const MovieCardSummary = ({ title, seasons }) => {
  return (
    <Container>
      <Sumamary>
        <Title>{title}</Title>
        <Season>{seasons} Seasons</Season>
      </Sumamary>
    </Container>
  );
};

import React from 'react';
import styled, { keyframes } from 'styled-components';

import { imageSizes } from '../config';

const fade = keyframes`

  0% {
    opacity: 0.5;
  }

  50% {
    opacity: 0.7;
  }

  100% {
    opacity: 1;
  }
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -20px;
`;
const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 40px;
`;

const Separator = styled.div`
  margin-bottom: 50px;
`;

const Card = styled.div`
  background: #ddd;
  height: ${imageSizes.card.height}px;
  width: ${imageSizes.card.width}px;
  margin: 5px 10px;
  border-radius: 5px;
  animation: ${fade} 0.5s ease-out;
  animation-iteration-count: infinite;
  position: relative;

  &:before {
    position: absolute;
    content: '';
    width: 100px;
    height: 5px;
    background-color: #fff;
    bottom: 20%;
    left: 10px;
    border-radius: 1em;
    animation: ${fade} 0.5s 0.2s ease-in-out;
  }
  &:after {
    position: absolute;
    content: '';
    width: 100px;
    height: 5px;
    background-color: #fff;
    bottom: 20%;
    left: 10px;
    border-radius: 1em;
    animation: ${fade} 0.5s 0.2s ease-in-out;
  }

  &:before {
    position: absolute;
    content: '';
    width: 70px;
    height: 5px;
    background-color: #fff;
    bottom: 10%;
    left: 10px;
    border-radius: 1em;
    animation: ${fade} 0.5s 0.2s ease-in-out;
  }
`;

export function Preloader() {
  return (
    <Wrapper>
      <Container>
        <Card />
        <Card />
        <Card />
        <Card />
      </Container>
      <Separator />
      <Container>
        <Card />
        <Card />
      </Container>
    </Wrapper>
  );
}

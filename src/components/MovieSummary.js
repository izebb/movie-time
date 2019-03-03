import React from 'react';
import styled from 'styled-components';

import { imageSizes } from '../config';
import { PlayButton } from './PlayButtons';
import { MovieRating } from './MovieRating';
import { CancelButton } from './CancelButton';
import { MovieImage } from './MovieImage';

const { cover } = imageSizes;

const BackgroundOverlay = styled.div`
  background: linear-gradient(
    to right,
    rgba(30, 40, 45, 1) 0%,
    rgba(30, 40, 45, 1) 30%,
    rgba(30, 40, 45, 0.4) 50%,
    rgba(30, 40, 45, 0.3) 100%
  );
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  z-index: 1;
`;

const Wrapper = styled.div`
  height: 100%;
  padding: 30px 50px 20px 50px;
  max-width: 500px;
  display: flex;
  font-size: 20px;
  flex-direction: column;
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Title = styled.h2`
  font-size: 40px;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);
  font-weight: 900;
  margin-right: 5px;
`;

const Description = styled.div`
  line-height: 1.5;
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const CloseWrapper = styled.div`
  position: absolute;
  z-index: 2;
  right: 0;
  top: 0;
  padding: 10px 30px;
`;

const ButtonWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: calc(50% - 100px);
  display: flex;
  flex-direction: column;
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  opacity: 0;
  transform: scale(0);
  transition: opacity 50ms 150ms, transform 100ms 150ms ease-out;
`;

const Container = styled.div`
  color: #ffffff;
  position: relative;
  opacity: 0;
  height: 0;
  overflow: hidden;
  height: ${({ displaySection }) =>
    displaySection ? `${cover.height}px` : '0px'};
  opacity: ${({ displaySection }) => (displaySection ? 1 : 0)};
  transition: height 200ms ease-out;
  background-color: #222;
  margin-top: 10px;
  margin-bottom: 50px;
  border-radius: 5px;

  ${({ displaySection }) => {
    return (
      displaySection &&
      `
      ${ButtonWrapper} {
        opacity: 1;
        transform: scale(1);
      }
    `
    );
  }}
`;

export const MovieSummary = ({ show, summary, rating, images, onClear }) => {
  const clearSelection = () => {
    onClear();
  };

  const { hero = {} } = images;

  return (
    <Container displaySection={show}>
      <CloseWrapper>
        <CancelButton onClick={clearSelection} />
      </CloseWrapper>
      <ImageWrapper>
        <MovieImage
          height={cover.height}
          width={cover.width}
          template={hero.template}
        />
      </ImageWrapper>
      <BackgroundOverlay>
        <Wrapper>
          <TitleWrapper>
            <Title>{summary.title}</Title>
            <MovieRating {...rating} />
          </TitleWrapper>
          <Description>{summary.synopsis}</Description>
          <ButtonWrapper>
            <PlayButton />
            Play
          </ButtonWrapper>
        </Wrapper>
      </BackgroundOverlay>
    </Container>
  );
};

MovieSummary.defaultProps = {
  summary: {},
  images: {},
  rating: {},
  onClear: () => {}
};

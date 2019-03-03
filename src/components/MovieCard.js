import React from 'react';
import styled from 'styled-components';
import { imageSizes } from '../config';

import { MovieCardSummary } from './MovieCardSummary';
import { MovieImage } from './MovieImage';

const { card } = imageSizes;

const Container = styled.div`
  position: relative;
  width: ${card.width}px;
  height: ${card.height}px;
  cursor: pointer;
  overflow: hidden;
  border-radius: 5px;
`;

export const MovieCard = ({ id, title, seasons, coverTemplate, onClick }) => {
  const handleClick = () => {
    onClick(id);
  };

  return (
    <Container onClick={handleClick} data-testid="MovieCard">
      <MovieImage
        width={card.width}
        height={card.height}
        template={coverTemplate}
      />
      <MovieCardSummary title={title} seasons={seasons} />
    </Container>
  );
};

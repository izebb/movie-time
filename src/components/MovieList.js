import React from 'react';
import styled from 'styled-components';

import { MovieCard } from './MovieCard';
import { MovieSummary } from './MovieSummary';

const ListSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 20px;
`;

const CardWrapper = styled.div`
  padding: 10px;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const MovieList = ({
  list,
  onClickMovie,
  clearMovieSelection,
  displaySection,
  displaSectionIndex
}) => {
  return (
    <Container>
      {list.map((movies, index) => {
        return (
          <div key={index}>
            <ListSection>
              {movies.map(movie => {
                return (
                  <CardWrapper key={movie.series.seriesGuid}>
                    <MovieCard
                      id={movie.series.seriesGuid}
                      onClick={onClickMovie}
                      title={movie.series.title}
                      seasons={movie.series.seasons}
                      coverTemplate={movie.images.lanscape.template}
                    />
                  </CardWrapper>
                );
              })}
            </ListSection>
            <MovieSummary
              onClear={clearMovieSelection}
              show={displaSectionIndex === index}
              summary={displaySection.series}
              rating={displaySection.rating}
              clearMovieSelection={clearMovieSelection}
              images={displaySection.images}
            />
          </div>
        );
      })}
    </Container>
  );
};

MovieList.defaultProps = {
  list: [],
  onClickMovie: () => {},
  clearMovieSelection: () => {},
  displaySection: {},
  displaSectionIndex: -1
};

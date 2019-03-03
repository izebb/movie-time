import React from 'react';

import { useMovies } from './movieHook';

import { MovieList } from '../components/MovieList';
import { MovieHeader } from '../components/MovieHeader';
import { Preloader } from '../components/Preloader';
import { Error } from '../components/Error';

const initialState = {
  movieList: [],
  isFetching: false,
  displaySection: {},
  error: null
};

export function AppContainer() {
  const [moviesState, handlers] = useMovies(initialState);
  const {
    movieList,
    displaySection,
    displaSectionIndex,
    isFetching,
    error
  } = moviesState;
  const { displaySummary, clearMovieSelection, tryAgain } = handlers;

  return (
    <>
      <MovieHeader />
      {error ? (
        <Error message={error} retry={tryAgain} />
      ) : isFetching ? (
        <Preloader />
      ) : (
        <MovieList
          displaySection={displaySection}
          displaSectionIndex={displaSectionIndex}
          list={movieList}
          onClickMovie={displaySummary}
          clearMovieSelection={clearMovieSelection}
        />
      )}
    </>
  );
}

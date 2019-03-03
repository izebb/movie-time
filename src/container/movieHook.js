import { useReducer, useEffect } from 'react';
import { reducer } from './reducer';
import {
  getMovieAndSectionByGuid,
  clearSelection,
  movieHTTPRequest,
  tryAgain
} from './moviesThunks';

export function useMovies(intialState = {}) {
  const [state, dispatch] = useReducer(reducer, intialState);
  const displaySummary = getMovieAndSectionByGuid(state.movieList, dispatch);
  const clearMovieSelection = clearSelection(dispatch);

  useEffect(() => {
    movieHTTPRequest(dispatch);
  }, []);

  return [
    state,
    { displaySummary, clearMovieSelection, tryAgain: tryAgain(dispatch) }
  ];
}

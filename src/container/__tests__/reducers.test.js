import { reducer } from '../reducer';
import {
  movieRequest,
  movieResponse,
  clearMovieSelection,
  movieError,
  movieSelection
} from '../actions';

describe('reducer', () => {
  let state = {};
  it('should return the right object on action type `MOVIE_REQUEST', () => {
    state = reducer(state, movieRequest());
    expect(state).toEqual({
      isFetching: true,
      error: null
    });
  });
  it('should return the right object on action type `MOVIES_RESPONSE', () => {
    state = reducer(state, movieResponse([]));
    expect(state).toEqual({
      isFetching: false,
      error: null,
      movieList: []
    });
  });
  it('should return the right object on action type `MOVIES_SELECTION', () => {
    state = reducer(state, movieSelection({ index: 0, displayMovie: {} }));
    expect(state).toEqual({
      isFetching: false,
      displaSectionIndex: 0,
      error: null,
      displaySection: {},
      movieList: []
    });
  });
  it('should return the right object on action type `CLEAR_MOVIES_SELECTION', () => {
    state = reducer(state, clearMovieSelection());
    expect(state).toEqual({
      isFetching: false,
      error: null,
      displaSectionIndex: -1,
      displaySection: {},
      movieList: []
    });
  });
  it('should return the right object on action type `MOVIES_ERROR', () => {
    state = reducer(state, movieError('error'));
    expect(state).toEqual({
      isFetching: false,
      error: null,
      displaSectionIndex: -1,
      displaySection: {},
      movieList: [],
      error: 'error'
    });
  });
});

import { get, chunk } from 'lodash/fp';

import { http } from '../utils';
import { api } from '../config';
import {
  movieRequest,
  movieResponse,
  movieSelection,
  movieError,
  clearMovieSelection
} from './actions';

function getMovieSeries(movies) {
  const series = {
    series: get(['content', 'series'], movies, {})
  };

  return series;
}

function getMovieImages(movies) {
  const images = {
    images: {
      hero: get(['content', 'images', 'landscape'], movies, {}),
      lanscape: get(['content', 'images', 'landscape'], movies, {})
    }
  };
  return images;
}

function getMovieRatings(movies) {
  const ratings = {
    rating: get(['content', 'imdb'], movies, {})
  };
  return ratings;
}

function getMovies(apiResponse) {
  const getMovieList = get([
    '_embedded',
    'viaplay:blocks',
    '0',
    '_embedded',
    'viaplay:products'
  ]);

  const movieList = getMovieList(apiResponse, []).map(movie => {
    return {
      ...getMovieImages(movie),
      ...getMovieSeries(movie),
      ...getMovieRatings(movie)
    };
  });

  return chunk(4, movieList);
}

export function findMovieInSection(id, list) {
  let index = -1;
  let displayMovie = null;

  list.forEach((movies, listIndex) => {
    const movie = movies.find(movie => movie.series.seriesGuid === id);
    if (movie) {
      index = listIndex;
      displayMovie = movie;
    }
  });

  return { index, displayMovie };
}

export async function movieHTTPRequest(dispatch) {
  dispatch(movieRequest());

  try {
    const response = await http(api.url);
    const payload = getMovies(response);
    dispatch(movieResponse(payload));
  } catch (err) {
    dispatch(movieError('An error occured'));
    console.log(err);
  }
}

export function getMovieAndSectionByGuid(movieList = [], dispatch) {
  return id => {
    dispatch(clearMovieSelection());
    const payload = findMovieInSection(id, movieList);
    dispatch(movieSelection(payload));
  };
}

export function tryAgain(dispatch) {
  return () => movieHTTPRequest(dispatch);
}

export function clearSelection(dispatch) {
  return () => {
    dispatch(clearMovieSelection());
  };
}

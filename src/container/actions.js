export const MOVIES_REQUEST = 'MOVIE_REQUEST';
export const MOVIES_ERROR = 'MOVIES_ERROR';
export const MOVIES_RESPONSE = 'MOVIE_RESPONSE';
export const MOVIES_SELECTION = 'MOVIES_SELECTION';
export const CLEAR_MOVIES_SELECTION = 'CLEAR_MOVIES_SELECTION';

export function movieRequest() {
  return {
    type: MOVIES_REQUEST,
    isFetching: true
  };
}

export function movieResponse(payload) {
  return {
    type: MOVIES_RESPONSE,
    isFetching: false,
    payload
  };
}

export function movieSelection(payload) {
  return {
    type: MOVIES_SELECTION,
    payload
  };
}

export function clearMovieSelection() {
  return {
    type: CLEAR_MOVIES_SELECTION
  };
}
export function movieError(message) {
  return {
    type: MOVIES_ERROR,
    isFetching: false,
    payload: message
  };
}

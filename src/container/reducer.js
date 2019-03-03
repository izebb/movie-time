import {
  MOVIES_REQUEST,
  MOVIES_RESPONSE,
  MOVIES_SELECTION,
  MOVIES_ERROR,
  CLEAR_MOVIES_SELECTION
} from './actions';

export function reducer(state = {}, action) {
  switch (action.type) {
    case MOVIES_REQUEST:
      return {
        ...state,
        isFetching: action.isFetching,
        error: null
      };
    case MOVIES_RESPONSE:
      return {
        ...state,
        isFetching: action.isFetching,
        movieList: action.payload,
        error: null
      };
    case MOVIES_SELECTION:
      return {
        ...state,
        displaSectionIndex: action.payload.index,
        displaySection: action.payload.displayMovie
      };
    case CLEAR_MOVIES_SELECTION:
      return {
        ...state,
        displaSectionIndex: -1,
        displaySection: {}
      };
    case MOVIES_ERROR:
      return {
        ...state,
        isFetching: action.isFetching,
        error: action.payload
      };
    default:
      return state;
  }
}

import {
  movieHTTPRequest,
  getMovieAndSectionByGuid,
  findMovieInSection,
  clearSelection
} from '../moviesThunks';
import {
  movieRequest,
  movieResponse,
  clearMovieSelection,
  movieSelection
} from '../actions';
import { movieListPayload } from '../../__mocks__/response_payload';

describe('movie', () => {
  describe('movieHTTPRequest', () => {
    it('should call `dispatch` twice', async () => {
      const dispatch = jest.fn();
      await movieHTTPRequest(dispatch);

      expect(dispatch).toHaveBeenCalledTimes(2);
    });

    it('should call `dispatch` with the right argument', async () => {
      const dispatch = jest.fn();
      await movieHTTPRequest(dispatch);
      expect(dispatch).toHaveBeenCalledWith(movieRequest());
      expect(dispatch).toHaveBeenLastCalledWith(
        movieResponse(movieListPayload)
      );
    });
  });

  describe('getMovieAndSectionByGuid', () => {
    it('should call `dispatch` twice', () => {
      const dispatch = jest.fn();
      const guid = getMovieAndSectionByGuid(movieListPayload, dispatch);
      guid('series-greys-anatomy');
      expect(dispatch).toHaveBeenCalledTimes(2);
    });

    it('should call `dispatch` with the right argument', () => {
      const dispatch = jest.fn();
      const guid = getMovieAndSectionByGuid(movieListPayload, dispatch);
      const id = 'series-greys-anatomy';
      guid(id);
      const payload = findMovieInSection(id, movieListPayload);

      expect(dispatch).toHaveBeenCalledWith(clearMovieSelection());
      expect(dispatch).toHaveBeenLastCalledWith(movieSelection(payload));
    });
  });

  describe('clearSelection', () => {
    it('should call `dispatch` twice', () => {
      const dispatch = jest.fn();
      const clearFn = clearSelection(dispatch);
      clearFn();
      expect(dispatch).toHaveBeenCalledTimes(1);
    });

    it('should call `dispatch` with the right argument', () => {
      const dispatch = jest.fn();
      const clearFn = clearSelection(dispatch);
      clearFn();

      expect(dispatch).toHaveBeenCalledWith(clearMovieSelection());
    });
  });
});

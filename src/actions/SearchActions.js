import { MovieController } from '@/controllers';

const movieController = new MovieController();

export const TYPES = {
  SEARCH_MOVIE_START: 'SEARCH_MOVIE_START',
  SEARCH_MOVIE_SUCCESS: 'SEARCH_MOVIE_SUCCESS',
  SEARCH_MOVIE_FAILURE: 'SEARCH_MOVIE_FAILURE',
  CLEAR_SEARCH: 'CLEAR_SEARCH',
};

const searchMovieStart = () => ({
  type: TYPES.SEARCH_MOVIE_START,
});

const searchMovieSuccess = movies => ({
  type: TYPES.SEARCH_MOVIE_SUCCESS,
  payload: movies,
});

const searchMovieFailure = error => ({
  type: TYPES.SEARCH_MOVIE_FAILURE,
  payload: error,
});

export const searchMovie = name => async dispatch => {
  dispatch(searchMovieStart());
  try {
    const { results } = await movieController.searchMovie(name);
    dispatch(searchMovieSuccess(results));
  } catch (error) {
    dispatch(searchMovieFailure(error));
  }
};

export const clearSearch = () => ({ type: TYPES.CLEAR_SEARCH });

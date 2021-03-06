import { MovieController } from '@/controllers';

const movieController = new MovieController();

export const TYPES = {
  FETCH_MOVIE_START: 'FETCH_MOVIE_START',
  FETCH_MOVIE_SUCCESS: 'FETCH_MOVIE_SUCCESS',
  FETCH_MOVIE_FAILURE: 'FETCH_MOVIE_FAILURE',
  ClEAR_MOVIE: 'ClEAR_MOVIE',
};

const fetchMovieStart = () => ({
  type: TYPES.FETCH_MOVIE_START,
});

const fetchMovieSuccess = movies => ({
  type: TYPES.FETCH_MOVIE_SUCCESS,
  payload: movies,
});

const fetchMovieFailure = error => ({
  type: TYPES.FETCH_MOVIE_FAILURE,
  payload: error,
});

export const fetchMovie = id => async dispatch => {
  dispatch(clearMovies());
  dispatch(fetchMovieStart());
  try {
    const movie = await movieController.getMovie(id);
    dispatch(fetchMovieSuccess(movie));
  } catch (error) {
    dispatch(fetchMovieFailure(error));
  }
};

export const clearMovies = () => ({
  type: TYPES.ClEAR_MOVIE,
});

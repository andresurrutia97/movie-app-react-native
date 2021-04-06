import { MovieController } from '@/controllers';
import { storage } from '@/storage';

const movieController = new MovieController();

export const TYPES = {
  FETCH_NOW_PLAYING_START: 'FETCH_NOW_PLAYING_START',
  FETCH_NOW_PLAYING_SUCCESS: 'FETCH_NOW_PLAYING_SUCCESS',
  FETCH_NOW_PLAYING_FAILURE: 'FETCH_NOW_PLAYING_FAILURE',

  FETCH_POPULAR_START: 'FETCH_POPULAR_START',
  FETCH_POPULAR_SUCCESS: 'FETCH_POPULAR_SUCCESS',
  FETCH_POPULAR_FAILURE: 'FETCH_POPULAR_FAILURE',
};

const fetchNowPlayingStart = () => ({
  type: TYPES.FETCH_NOW_PLAYING_START,
});

const fetchNowPlayingSuccess = movies => ({
  type: TYPES.FETCH_NOW_PLAYING_SUCCESS,
  payload: movies,
});

const fetchNowPlayingFailure = error => ({
  type: TYPES.FETCH_NOW_PLAYING_FAILURE,
  payload: error,
});

export const fetchNowPlaying = () => async dispatch => {
  dispatch(fetchNowPlayingStart());
  try {
    const { results } = await movieController.getNowPlaying();
    const nowPlaying = await movieController.getMovie(results[0].id);
    await storage.setStringAsync(JSON.stringify(nowPlaying), 'nowPlaying');
    dispatch(fetchNowPlayingSuccess(nowPlaying));
  } catch (error) {
    dispatch(fetchNowPlayingFailure(error));
  }
};

export const fetchNowPlayingIfNeeded = () => (dispatch, getState) => {
  const { nowPlaying } = getState().home;

  if (nowPlaying === null) {
    dispatch(fetchNowPlaying());
  }
};

const fetchPopularStart = () => ({
  type: TYPES.FETCH_POPULAR_START,
});

const fetchPopularSuccess = movies => ({
  type: TYPES.FETCH_POPULAR_SUCCESS,
  payload: movies,
});

const fetchPopularFailure = error => ({
  type: TYPES.FETCH_POPULAR_FAILURE,
  payload: error,
});

export const fetchPopular = () => async dispatch => {
  dispatch(fetchPopularStart());
  try {
    const movies = await movieController.getPopularMovies();
    dispatch(fetchPopularSuccess(movies.results));
  } catch (error) {
    dispatch(fetchPopularFailure(error));
  }
};

export const fetchPopularIfNeeded = () => (dispatch, getState) => {
  const { popular } = getState().home;

  if (!popular) {
    dispatch(fetchPopular());
  }
};

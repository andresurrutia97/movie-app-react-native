import { HttpClient } from '@/controllers';

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
    const movies = await HttpClient.get('/movie/now_playing');
    const nowPlaying = await HttpClient.get(`/movie/${movies.results[0].id}`);
    dispatch(fetchNowPlayingSuccess(nowPlaying));
  } catch (error) {
    dispatch(fetchNowPlayingFailure(error));
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
    const movies = await HttpClient.get('/movie/popular');
    dispatch(fetchPopularSuccess(movies.results));
  } catch (error) {
    dispatch(fetchPopularFailure(error));
  }
};

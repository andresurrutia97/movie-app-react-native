import { HttpClient } from '@/controllers';

export const TYPES = {
  FETCH_NOW_PLAYING_START: 'FETCH_NOW_PLAYING_START',
  FETCH_NOW_PLAYING_SUCCESS: 'FETCH_NOW_PLAYING_SUCCESS',
  FETCH_NOW_PLAYING_FAILURE: 'FETCH_NOW_PLAYING_FAILURE',
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
    dispatch(fetchNowPlayingSuccess(movies.results[0]));
  } catch (error) {
    dispatch(fetchNowPlayingFailure(error));
  }
};

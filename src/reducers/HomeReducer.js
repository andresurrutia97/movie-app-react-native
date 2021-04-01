import { TYPES } from '@/actions/HomeActions';

const initialState = {
  nowPlaying: null,
  isFetchingNowPlaying: false,
  nowPlayingError: null,

  popular: null,
  isFetchingPopular: false,
  popularError: null,
};

export const homeReducer = (state = initialState, { payload, type }) => {
  switch (type) {
    case TYPES.FETCH_NOW_PLAYING_START:
      return {
        ...state,
        nowPlaying: null,
        isFetchingNowPlaying: true,
        nowPlayingError: null,
      };
    case TYPES.FETCH_NOW_PLAYING_SUCCESS:
      return {
        ...state,
        nowPlaying: payload,
        isFetchingNowPlaying: false,
        nowPlayingError: null,
      };
    case TYPES.FETCH_NOW_PLAYING_FAILURE:
      return {
        ...state,
        nowPlaying: null,
        isFetchingNowPlaying: false,
        nowPlayingError: payload,
      };
    case TYPES.FETCH_POPULAR_START:
      return {
        ...state,
        popular: null,
        isFetchingPopular: true,
        popularError: null,
      };
    case TYPES.FETCH_POPULAR_SUCCESS:
      return {
        ...state,
        popular: payload,
        isFetchingPopular: false,
        popularError: null,
      };
    case TYPES.FETCH_POPULAR_FAILURE:
      return {
        ...state,
        popular: null,
        isFetchingPopular: false,
        popularError: payload,
      };
    default:
      return state;
  }
};

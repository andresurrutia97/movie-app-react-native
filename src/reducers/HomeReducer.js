import { TYPES } from '@/actions/HomeActions';

const initialState = {
  nowPlaying: null,
  isFetchingNowPlaying: false,
  nowPlayingError: null,
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
    default:
      return state;
  }
};

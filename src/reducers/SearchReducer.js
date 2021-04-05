import { TYPES } from '@/actions/SearchActions';

const initialState = {
  movies: null,
  isFetching: false,
  error: null,
};

export const searchReducer = (state = initialState, { payload, type }) => {
  switch (type) {
    case TYPES.SEARCH_MOVIE_START:
      return {
        ...state,
        movies: null,
        isFetching: true,
        error: null,
      };
    case TYPES.SEARCH_MOVIE_SUCCESS:
      return {
        ...state,
        movies: payload,
        isFetching: false,
        error: null,
      };
    case TYPES.SEARCH_MOVIE_FAILURE:
      return {
        ...state,
        movies: null,
        isFetching: false,
        error: payload,
      };
    case TYPES.CLEAR_SEARCH:
      return {
        ...state,
        movies: null,
        isFetching: false,
        error: null,
      };
    default:
      return state;
  }
};
